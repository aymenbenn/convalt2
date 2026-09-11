import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { resourceGroups } from '../data/resources';

export function Resources() {
  return (
    <main>
      <PageHeader
        eyebrow="Resource Library"
        title="Company updates, project insights, and renewable energy reports."
        intro="References we rely on for manufacturing benchmarks, incentives, materials pricing and trade data." />
      

      {resourceGroups.map((group) =>
      <section key={group.id} aria-labelledby={group.id} className="border-b border-line">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[20rem_1fr] lg:gap-20">
            <h2 id={group.id} className="font-display text-2xl text-ivory sm:text-3xl">
              {group.title}
            </h2>
            <ul className="space-y-4">
              {group.items.map((item) =>
            <li key={item} className="border-t border-line pt-4 text-[1rem] text-ivory/90">
                  {item}
                </li>
            )}
            </ul>
          </div>
        </section>
      )}
    </main>);

}