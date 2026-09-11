import React, { useMemo, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { projects, projectCategories, projectRegions } from '../data/projects';

export function Projects() {
  const [category, setCategory] = useState<string>('All');

  const grouped = useMemo(() => {
    const filtered =
    category === 'All' ?
    projects :
    projects.filter((project) => project.category === category);

    return projectRegions.
    map((region) => ({
      region,
      items: filtered.filter((project) => project.region === region)
    })).
    filter((group) => group.items.length > 0);
  }, [category]);

  return (
    <main>
      <PageHeader
        eyebrow="Projects"
        title="Defined by the ability to take on complex and demanding projects."
        intro="From its inception, the company has delivered power generation, manufacturing, data center and recycling projects across four regions." />
      

      <div className="mx-auto max-w-content px-6 py-14 sm:px-10">
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-3">
          
          {['All', ...projectCategories].map((option) => {
            const active = option === category;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setCategory(option)}
                aria-pressed={active}
                className={`rounded-full border px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.18em] transition-colors duration-150 ease-out ${
                active ?
                'border-accent text-accent' :
                'border-line text-muted hover:border-ivory/40 hover:text-ivory'}`
                }>
                
                {option}
              </button>);

          })}
        </div>
      </div>

      {grouped.length === 0 ?
      <p className="mx-auto max-w-content px-6 pb-32 text-muted sm:px-10">
          No projects in this category yet.
        </p> :

      grouped.map((group) =>
      <section
        key={group.region}
        aria-labelledby={`region-${group.region.replace(/\s/g, '-')}`}
        className="border-t border-line">
        
            <div className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-24">
              <h2
            id={`region-${group.region.replace(/\s/g, '-')}`}
            className="font-display text-3xl text-ivory sm:text-4xl">
            
                {group.region}
              </h2>

              <div className="mt-14 space-y-16">
                {group.items.map((project) =>
            <article
              key={project.id}
              className="grid gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
              
                    <div>
                      <p className="text-[0.62rem] uppercase tracking-[0.24em] text-accent">
                        {project.status} · {project.category}
                      </p>
                      <h3 className="mt-5 font-display text-3xl leading-tight text-ivory sm:text-[2.2rem]">
                        {project.name}
                      </h3>
                      <p className="mt-3 text-[0.78rem] uppercase tracking-[0.18em] text-muted">
                        {project.location}
                      </p>
                      <p className="mt-7 max-w-xl text-[0.98rem] leading-relaxed text-muted">
                        {project.summary}
                      </p>
                    </div>

                    <dl className="grid content-start gap-5 sm:grid-cols-2 lg:pt-14">
                      {project.facts.map((fact) =>
                <div key={fact.label}>
                          <dt className="text-[0.62rem] uppercase tracking-[0.22em] text-muted">
                            {fact.label}
                          </dt>
                          <dd className="mt-2 text-[0.95rem] leading-relaxed text-ivory">
                            {fact.value}
                          </dd>
                        </div>
                )}
                    </dl>
                  </article>
            )}
              </div>
            </div>
          </section>
      )
      }
    </main>);

}