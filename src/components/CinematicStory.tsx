import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { CinematicJourney } from './three/CinematicJourney';
import { chapters } from '../data/chapters';

/**
 * The chapter copy is positioned from the same progress value that drives the
 * camera, so a title is always legible exactly while its frame fully covers the
 * viewport, and clears out during the pass-through.
 *
 * Camera maths: frame i fully covers the viewport for
 *   p ∈ [i / (n - 1 + 0.5), ...] — derived once here as a centre point.
 */
const STRIDE = 1 / (chapters.length - 1);
const HOLD = 0.02;

function chapterCenter(index: number): number {
  return STRIDE * index + HOLD;
}

interface ChapterCopyProps {
  index: number;
  progress: MotionValue<number>;
}

function ChapterCopy({ index, progress }: ChapterCopyProps) {
  const chapter = chapters[index];
  const center = chapterCenter(index);
  const isFirst = index === 0;

  const range = isFirst ?
  [0, 0.025, center + 0.055, center + 0.12] :
  [Math.max(0, center - 0.12), Math.max(0, center - 0.055), center + 0.055, Math.min(1, center + 0.13)];

  const opacity = useTransform(progress, range, isFirst ? [1, 1, 1, 0] : [0, 1, 1, 0]);
  const y = useTransform(progress, range, isFirst ? [0, 0, -10, -34] : [26, 0, -8, -28]);

  const alignment =
  chapter.align === 'center' ?
  'items-center text-center' :
  chapter.align === 'right' ?
  'items-end text-right md:pr-4' :
  'items-start text-left md:pl-4';

  const justification = chapter.align === 'center' ? 'justify-center' : 'justify-end';

  return (
    <motion.div
      style={{ opacity, y }}
      className={`pointer-events-none absolute inset-0 flex flex-col ${justification} ${alignment} px-6 pb-20 pt-28 sm:px-10 md:px-16 lg:px-24 md:pb-28`}>
      
      <div className={`max-w-[34rem] ${chapter.align === 'center' ? 'mx-auto' : ''}`}>
        <p className="cine-text mb-5 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-accent">
          {chapter.eyebrow}
        </p>
        <h2 className="cine-text font-display text-[2.6rem] leading-[1.02] text-white sm:text-6xl lg:text-[4.6rem]">
          {chapter.title}
        </h2>
        <p className="cine-text mt-6 max-w-[30rem] text-base leading-relaxed text-white/85 sm:text-lg">
          {chapter.body}
        </p>
        <p className="cine-text mt-8 text-[0.68rem] uppercase tracking-[0.28em] text-white/55">
          {chapter.meta}
        </p>
      </div>
    </motion.div>);

}

interface CinematicStoryProps {
  /** Journey length in viewport heights. */
  length?: number;
  drift?: boolean;
}

export function CinematicStory({ length = 5.4, drift = true }: CinematicStoryProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Hand scroll progress to the WebGL loop without re-rendering React.
  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    progressRef.current = value;
  });

  const cueOpacity = useTransform(scrollYProgress, [0, 0.045], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${length * 100}vh` }}>
      
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink">
        <CinematicJourney
          chapters={chapters}
          progressRef={progressRef}
          drift={drift}
          onLoaded={() => setLoaded(true)} />
        

        {/* Scrims: only where copy sits, so contrast is guaranteed. */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/18 to-transparent"
          aria-hidden="true" />
        
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-black/28 via-black/6 to-transparent"
          aria-hidden="true" />
        

        {/* Chapter copy — the narrative itself, readable by screen readers. */}
        <div className="absolute inset-0">
          {chapters.map((chapter, index) =>
          <ChapterCopy key={chapter.id} index={index} progress={scrollYProgress} />
          )}
        </div>

        <ChapterTicks progress={scrollYProgress} />

        <motion.div
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          
          <span className="cine-text text-[0.6rem] uppercase tracking-[0.3em] text-white/70">
            Scroll to travel
          </span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
            
            <ChevronDownIcon className="h-4 w-4 text-white/70" strokeWidth={1.5} />
          </motion.span>
        </motion.div>

        {/* Load state: a quiet hold rather than a spinner. */}
        <motion.div
          initial={false}
          animate={{ opacity: loaded ? 0 : 1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className={`absolute inset-0 flex items-center justify-center bg-[#91a9b6] ${loaded ? 'pointer-events-none' : ''}`}>
          
          <span className="text-[0.62rem] uppercase tracking-[0.34em] text-black/60">
            Convalt Energy
          </span>
        </motion.div>
      </div>
    </div>);

}

function ChapterTicks({ progress }: {progress: MotionValue<number>;}) {
  return (
    <div
      className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex"
      aria-hidden="true">
      
      {chapters.map((chapter, index) =>
      <Tick key={chapter.id} center={chapterCenter(index)} progress={progress} />
      )}
    </div>);

}

function Tick({ center, progress }: {center: number;progress: MotionValue<number>;}) {
  const scaleY = useTransform(progress, [center - 0.11, center, center + 0.11], [1, 2.4, 1]);
  const opacity = useTransform(progress, [center - 0.12, center, center + 0.12], [0.3, 1, 0.3]);
  return (
    <motion.span
      style={{ scaleY, opacity }}
      className="block h-5 w-[2px] origin-center rounded-full bg-white/80" />);


}