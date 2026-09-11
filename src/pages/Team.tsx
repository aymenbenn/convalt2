import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { teamGroups } from '../data/team';

export function Team() {
  return (
    <main>
      <PageHeader
        eyebrow="Meet the Team"
        title="Professionals with direct principal operating experience."
        intro="The team spans target sectors and geographies, from manufacturing and engineering to project finance and government affairs." />
      

      {teamGroups.map((group) =>
      <section key={group.id} aria-labelledby={group.id} className="border-b border-line">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[16rem_1fr] lg:gap-20">
            <h2
            id={group.id}
            className="font-display text-2xl text-ivory sm:text-3xl lg:sticky lg:top-28 lg:self-start">
            
              {group.title}
            </h2>

            <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
              {group.people.map((person) =>
            <li key={`${group.id}-${person.name}`} className="border-t border-line pt-5">
                  <p className="text-[1.05rem] text-ivory">{person.name}</p>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted">
                    {person.role}
                  </p>
                </li>
            )}
            </ul>
          </div>
        </section>
      )}
    </main>);

}