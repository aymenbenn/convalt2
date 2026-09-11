import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { Chapter } from '../../data/chapters';

/**
 * Scroll-driven cinematic image stage.
 *
 * The important difference from the previous version is that the photographic
 * frames are always kept at a stable working distance from the camera. We do
 * not fly the camera past fixed planes anymore, which could expose the empty
 * WebGL background on wide screens. Instead, the camera gently moves while the
 * active/next photographs cross-fade on an oversized stage.
 */
const FOV = 42;
const STAGE_DISTANCE = 10;
const STAGE_SCALE = 1.32;

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;

  uniform sampler2D uTex;
  uniform vec2 uPlaneSize;
  uniform vec2 uTexSize;
  uniform float uOpacity;
  uniform float uZoom;
  uniform vec2 uPan;
  uniform float uBrightness;
  uniform vec3 uTint;
  uniform float uTintAmount;

  varying vec2 vUv;

  void main() {
    float planeAspect = uPlaneSize.x / uPlaneSize.y;
    float texAspect = uTexSize.x / uTexSize.y;

    // Cover the whole stage without stretching the source image.
    vec2 cover = planeAspect > texAspect
      ? vec2(1.0, texAspect / planeAspect)
      : vec2(planeAspect / texAspect, 1.0);

    vec2 uv = (vUv - 0.5) * cover / uZoom + 0.5 + uPan;
    vec3 color = texture2D(uTex, uv).rgb;

    color = mix(color, color * uTint, uTintAmount);
    color *= uBrightness;

    gl_FragColor = vec4(color, uOpacity);
  }
`;

interface CinematicJourneyProps {
  chapters: Chapter[];
  progressRef: React.MutableRefObject<number>;
  drift?: boolean;
  onLoaded?: () => void;
}

export function CinematicJourney({
  chapters,
  progressRef,
  drift = true,
  onLoaded
}: CinematicJourneyProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const loadedRef = useRef(onLoaded);
  loadedRef.current = onLoaded;

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || chapters.length === 0) return;

    const isTouch = window.matchMedia('(hover: none)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#91a9b6');

    const camera = new THREE.PerspectiveCamera(
      FOV,
      Math.max(mount.clientWidth, 1) / Math.max(mount.clientHeight, 1),
      0.1,
      100
    );
    camera.position.set(0, 0, STAGE_DISTANCE);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isTouch,
      alpha: false,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isTouch ? 1.5 : 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(1, 1);
    const loader = new THREE.TextureLoader();
    const materials: THREE.ShaderMaterial[] = [];
    const meshes: THREE.Mesh[] = [];
    const textures: THREE.Texture[] = [];

    let firstReady = false;
    let readyCount = 0;

    const markReady = () => {
      readyCount += 1;
      if (!firstReady) {
        firstReady = true;
        loadedRef.current?.();
      }
    };

    chapters.forEach((chapter) => {
      const material = new THREE.ShaderMaterial({
        vertexShader: VERT,
        fragmentShader: FRAG,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        uniforms: {
          uTex: { value: null },
          uPlaneSize: { value: new THREE.Vector2(1, 1) },
          uTexSize: { value: new THREE.Vector2(1, 1) },
          uOpacity: { value: 0 },
          uZoom: { value: 1.02 },
          uPan: { value: new THREE.Vector2(0, 0) },
          uBrightness: { value: 1.05 },
          uTint: { value: new THREE.Color(...chapter.tint) },
          uTintAmount: { value: 0.025 }
        }
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, 0, 0);
      mesh.renderOrder = materials.length;
      mesh.frustumCulled = false;
      scene.add(mesh);
      materials.push(material);
      meshes.push(mesh);

      loader.load(
        chapter.image,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.generateMipmaps = false;
          material.uniforms.uTex.value = texture;
          material.uniforms.uTexSize.value.set(texture.image.width, texture.image.height);
          textures.push(texture);
          markReady();
        },
        undefined,
        () => markReady()
      );
    });

    const loadFallback = window.setTimeout(() => {
      if (!firstReady) {
        firstReady = true;
        loadedRef.current?.();
      }
    }, 1600);

    const resize = () => {
      const w = Math.max(mount.clientWidth, 1);
      const h = Math.max(mount.clientHeight, 1);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      // Oversize the stage. This is intentionally larger than the visible
      // frustum so pointer/camera movement can never reveal gray edges.
      const visibleH =
        2 * Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * STAGE_DISTANCE;
      const visibleW = visibleH * camera.aspect;
      const stageW = visibleW * STAGE_SCALE;
      const stageH = visibleH * STAGE_SCALE;

      meshes.forEach((mesh) => {
        mesh.scale.set(stageW, stageH, 1);
        const material = mesh.material as THREE.ShaderMaterial;
        material.uniforms.uPlaneSize.value.set(stageW, stageH);
      });
    };
    resize();
    window.addEventListener('resize', resize);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
      pointer.y = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
    };
    if (!isTouch && drift && !reduceMotion) {
      window.addEventListener('pointermove', onPointerMove);
    }

    let raf = 0;
    let visible = true;
    let smoothed = progressRef.current;
    const clock = new THREE.Clock();

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;

      const target = THREE.MathUtils.clamp(progressRef.current, 0, 1);
      const easing = reduceMotion ? 1 : 0.18;
      smoothed += (target - smoothed) * easing;
      if (Math.abs(target - smoothed) < 0.00008) smoothed = target;

      const p = smoothed;
      const time = clock.getElapsedTime();
      const count = chapters.length;
      const position = p * Math.max(count - 1, 1);
      const active = Math.min(Math.floor(position), count - 1);
      const local = position - active;

      // Keep the camera movement obvious but restrained: a slow aerial glide
      // rather than a jump between disconnected photographs.
      if (drift && !reduceMotion) {
        camera.position.x =
          Math.sin(p * Math.PI * 1.65) * 0.5 + pointer.x * 0.12 + Math.sin(time * 0.13) * 0.06;
        camera.position.y =
          Math.cos(p * Math.PI * 1.25) * 0.26 + pointer.y * 0.08 + Math.sin(time * 0.11) * 0.04;
        camera.position.z = STAGE_DISTANCE + Math.sin(p * Math.PI) * 0.65;
      } else {
        camera.position.set(0, 0, STAGE_DISTANCE);
      }
      camera.lookAt(0, 0, 0);

      meshes.forEach((mesh, i) => {
        const material = materials[i];
        const texture = material.uniforms.uTex.value as THREE.Texture | null;
        if (!texture) {
          mesh.visible = false;
          return;
        }

        let opacity = 0;
        if (i === active) opacity = 1 - local;
        if (i === active + 1 && i < count) opacity = local;

        // Give the first and last frame a firm photographic hold.
        if (p < 0.02 && i === 0) opacity = 1;
        if (p > 0.98 && i === count - 1) opacity = 1;

        // Each photograph has its own subtle push-in and lateral camera drift.
        // The movement is applied in the shader, so the image remains full
        // bleed while it moves.
        const focus = i === active || i === active + 1;
        const phase = i * 1.37;
        const progressMotion = focus ? local : 0;
        const direction = i % 2 === 0 ? 1 : -1;

        material.uniforms.uOpacity.value = THREE.MathUtils.clamp(opacity, 0, 1);
        material.uniforms.uZoom.value =
          1.025 + progressMotion * 0.075 + Math.sin(time * 0.055 + phase) * 0.004;
        material.uniforms.uPan.value.set(
          direction * (0.018 + progressMotion * 0.028),
          Math.sin(phase) * 0.012 - progressMotion * 0.018
        );
        material.uniforms.uBrightness.value = focus ? 1.055 : 1.02;
        mesh.renderOrder = i === active + 1 ? 200 : 100 + i;
        mesh.visible = opacity > 0.001;
      });

      renderer.render(scene, camera);
    };

    tick();

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    }, { threshold: 0 });
    observer.observe(mount);

    return () => {
      window.clearTimeout(loadFallback);
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      textures.forEach((texture) => texture.dispose());
      materials.forEach((material) => material.dispose());
      geometry.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [chapters, drift, progressRef]);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
