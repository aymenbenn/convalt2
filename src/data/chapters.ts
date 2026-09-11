/**
 * The five chapters of the Convalt Energy narrative.
 *
 * The `image` of each chapter is one of the five supplied frames, in order.
 * They are treated as a single continuous environment: the camera starts on the
 * valley ridge (1), descends over the manufacturing campus (2), passes the
 * granite outcrop at ground level (3), arrives at the facade (4) and finally
 * travels inside the production hall (5).
 *
 * `tint` is a very light colour grade applied in the shader so each chapter
 * reads as its own moment of the journey while still belonging to one place.
 * `align` alternates the copy across the frame for the same reason.
 */
export interface Chapter {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  meta: string;
  image: string;
  tint: [number, number, number];
  align: 'left' | 'right' | 'center';
}

export const chapters: Chapter[] = [
{
  id: 'arrival',
  eyebrow: 'Convalt Energy',
  title: 'American Made Energy',
  body: 'Convalt is creating an integrated value chain comprising solar PV manufacturing, power generation, and the development of data centers.',
  meta: 'Chapter I — The Valley at First Light',
  image: "/1.png",
  tint: [0.62, 0.74, 0.95],
  align: 'center'
},
{
  id: 'power-generation',
  eyebrow: 'Power Generation',
  title: 'Energy at the scale of a country',
  body: 'Convalt began developing renewable projects across Southeast Asia and Africa. Refocusing on the U.S., we are now advancing large-scale solar, wind, waste-to-power, and energy storage initiatives.',
  meta: 'Chapter II — Descending over the Array',
  image: "/2.png",
  tint: [0.98, 0.84, 0.6],
  align: 'left'
},
{
  id: 'recycling',
  eyebrow: 'Recycling',
  title: 'A fully circular approach',
  body: 'Sustainability drives every phase of our operations. We develop solar recycling facilities designed to recover and repurpose critical materials, supporting a fully circular approach to renewable energy manufacturing.',
  meta: 'Chapter III — Ground Level, New Mexico',
  image: "/3.png",
  tint: [0.78, 0.95, 0.7],
  align: 'right'
},
{
  id: 'data-centers',
  eyebrow: 'Data Centers',
  title: 'Turnkey, ready to operate',
  body: 'Convalt develops, owns, and operates advanced data center facilities, offering clients fully permitted land, power, and infrastructure. We deliver facilities with integrated and tested power, cooling, and network systems.',
  meta: 'Chapter IV — At the Facade',
  image: "/4.png",
  tint: [0.86, 0.9, 1.0],
  align: 'left'
},
{
  id: 'manufacturing',
  eyebrow: 'Manufacturing',
  title: 'Clean energy, brighter tomorrow',
  body: 'America’s solar manufacturing commitment has long been absent. Convalt Energy is restoring it, on track to become the nation’s second-largest producer of advanced monocrystalline solar panels.',
  meta: 'Chapter V — Inside the Line',
  image: "/5.png",
  tint: [1.0, 0.9, 0.74],
  align: 'right'
}];