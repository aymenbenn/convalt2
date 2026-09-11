import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { mediaItems } from '../data/media';

export function Media() {
  return (
    <main>
      <PageHeader
        eyebrow="Media"
        title="Convalt Energy in the media"
        intro="Coverage of our projects, partnerships, and the people building them." />
      

      <section aria-label="Media coverage" className="mx-auto max-w-content px-6 py-20 sm:px-10">
        <ul className="divide-y divide-line border-y border-line">
          {mediaItems.map((item) =>
          <li key={item.id} className="grid gap-4 py-10 sm:grid-cols-[8rem_1fr] sm:gap-12">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
                  {item.date}
                </p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.24em] text-accent">
                  {item.category}
                </p>
              </div>
              <div>
                <h2 className="max-w-3xl font-display text-2xl leading-snug text-ivory sm:text-[1.9rem]">
                  {item.title}
                </h2>
                {item.excerpt &&
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
                    {item.excerpt}
                  </p>
              }
              </div>
            </li>
          )}
        </ul>

        <div className="mt-16">
          <Link
            to="/press-releases"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 text-[0.72rem] uppercase tracking-[0.2em] text-ivory transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
            
            Read press releases
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>);

}