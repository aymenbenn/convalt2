import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { CinematicStory } from '../components/CinematicStory';
import { projects } from '../data/projects';
import { mediaItems } from '../data/media';

const valueChain = [
{
  id: 'manufacturing',
  title: 'Manufacturing',
  body: 'America’s solar manufacturing commitment has long been absent. Convalt Energy is restoring it, on track to become the nation’s second-largest producer of advanced monocrystalline solar panels, powering a stronger, sustainable domestic industry.'
},
{
  id: 'power-generation',
  title: 'Power Generation',
  body: 'Convalt began developing renewable projects across Southeast Asia and Africa. Refocusing on the U.S., we are now advancing large-scale solar, wind, waste-to-power, and energy storage initiatives.'
},
{
  id: 'data-centers',
  title: 'Data Centers',
  body: 'Convalt develops, owns, and operates advanced data center facilities, offering clients fully permitted land, power, and infrastructure solutions — turnkey facilities with integrated and tested power, cooling, and network systems.'
},
{
  id: 'recycling',
  title: 'Recycling',
  body: 'Sustainability drives every phase of our operations. We develop solar recycling facilities designed to recover and repurpose critical materials, supporting a fully circular approach to renewable energy manufacturing.'
}];


interface HomeProps {
  journeyLength?: number;
  cameraDrift?: boolean;
}

export function Home({ journeyLength = 5.4, cameraDrift = true }: HomeProps) {
  const pipeline = projects.filter((project) => project.featured);

  return (
    <main>
      {/* One continuous camera move through the Convalt environment. */}
      <CinematicStory length={journeyLength} drift={cameraDrift} />

      {/* The page continues on the same dark ground the journey ended on, so
           there is no cut between the imagery and the reading experience. */}
      <section
        aria-labelledby="value-chain-heading"
        className="border-b border-line bg-ink">
        
        <div className="mx-auto max-w-content px-6 py-28 sm:px-10 sm:py-36">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.34em] text-accent">
              Integrated Value Chain
            </p>
            <h2
              id="value-chain-heading"
              className="mt-6 font-display text-4xl leading-[1.06] text-ivory sm:text-5xl lg:text-6xl">
              
              One company across manufacturing, generation, data and recovery.
            </h2>
          </div>

          <div className="mt-20 grid gap-x-16 gap-y-14 sm:grid-cols-2">
            {valueChain.map((item, index) =>
            <article key={item.id} className="flex flex-col">
                <p className="text-xs tracking-[0.28em] text-muted">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-5 font-display text-2xl text-ivory sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">{item.body}</p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="capital-heading"
        className="border-b border-line bg-surface">
        
        <div className="mx-auto grid max-w-content gap-16 px-6 py-28 sm:px-10 sm:py-36 lg:grid-cols-[0.85fr_1fr]">
          <h2
            id="capital-heading"
            className="font-display text-4xl leading-[1.06] text-ivory sm:text-5xl">
            
            Construct with capital and conscience
          </h2>
          <div className="space-y-7 text-[1rem] leading-relaxed text-muted sm:text-[1.06rem]">
            <p>
              Convalt Energy is rebuilding America’s solar foundation with precision and
              purpose. Our factories will produce Tier 1 solar panels for residential,
              commercial, industrial, and utility-scale projects, restoring resilience to the
              U.S. solar supply chain.
            </p>
            <p>
              Our business model is built for the future. We plan with a 50-year horizon,
              tailoring today for the world of tomorrow. Every initiative is guided by one
              goal: creating a cleaner, cooler, and more sustainable Earth for generations to
              come.
            </p>
            <p>
              We are equally committed to sustainable growth and meaningful employment, with a
              strong focus on hiring veterans and members of the military community. As an
              equal opportunity employer, Convalt stands for integrity, inclusion, and impact
              in every project we build.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="pipeline-heading" className="border-b border-line bg-ink">
        <div className="mx-auto max-w-content px-6 py-28 sm:px-10 sm:py-36">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.34em] text-accent">
                Project Pipeline
              </p>
              <h2
                id="pipeline-heading"
                className="mt-6 font-display text-4xl leading-[1.06] text-ivory sm:text-5xl">
                
                United States · India · Southeast Asia · Africa
              </h2>
            </div>
            <Link
              to="/projects"
              className="group inline-flex shrink-0 items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-ivory transition-colors duration-150 ease-out hover:text-accent">
              
              View all projects
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          </div>

          <ul className="mt-16 divide-y divide-line border-y border-line">
            {pipeline.map((project) =>
            <li key={project.id}>
                <div className="grid gap-4 py-8 sm:grid-cols-[8rem_1fr_10rem] sm:items-baseline sm:gap-10">
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-accent">
                    {project.status}
                  </p>
                  <div>
                    <h3 className="font-display text-2xl text-ivory sm:text-[1.75rem]">
                      {project.name}
                      {project.capacity &&
                    <span className="ml-3 align-middle text-sm tracking-[0.12em] text-muted">
                          {project.capacity}
                        </span>
                    }
                    </h3>
                    <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
                      {project.summary.split('. ')[0]}.
                    </p>
                  </div>
                  <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted sm:text-right">
                    {project.location}
                    <span className="mt-1 block text-ivory/70">{project.category}</span>
                  </p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section aria-labelledby="company-heading" className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-content gap-16 px-6 py-28 sm:px-10 sm:py-36 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.34em] text-accent">
              About
            </p>
            <h2
              id="company-heading"
              className="mt-6 font-display text-4xl leading-[1.06] text-ivory sm:text-5xl">
              
              An integrated energy company
            </h2>
          </div>
          <div className="space-y-7 text-[1rem] leading-relaxed text-muted sm:text-[1.06rem]">
            <p>
              Convalt Energy, Inc., a portfolio company of ACO Investment Group, is an
              integrated renewable power and manufacturing enterprise with a team of over 150
              professionals spanning multiple regions and energy disciplines. With a renewed
              focus on U.S. power generation, transmission, and solar manufacturing, Convalt is
              advancing toward becoming a leading global independent renewable energy company.
            </p>
            <p>
              Founded in 2011 through its predecessor, Convalt Energy, LLC, the company began by
              developing renewable power projects in the challenging frontier markets of
              Southeast Asia and Africa. Through perseverance and technical excellence, Convalt
              became one of the few firms to secure and execute bankable power purchase
              agreements in these complex environments.
            </p>
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 pt-2 text-[0.72rem] uppercase tracking-[0.2em] text-ivory transition-colors duration-150 ease-out hover:text-accent">
              
              Meet the team
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="media-heading" className="bg-ink">
        <div className="mx-auto max-w-content px-6 py-28 sm:px-10 sm:py-36">
          <h2
            id="media-heading"
            className="font-display text-4xl leading-[1.06] text-ivory sm:text-5xl">
            
            Convalt Energy in the media
          </h2>

          <ul className="mt-16 divide-y divide-line border-y border-line">
            {mediaItems.map((item) =>
            <li key={item.id} className="grid gap-3 py-8 sm:grid-cols-[7rem_1fr] sm:gap-10">
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted">
                  {item.date}
                </p>
                <div>
                  <h3 className="max-w-3xl text-lg leading-snug text-ivory sm:text-xl">
                    {item.title}
                  </h3>
                  {item.excerpt &&
                <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
                      {item.excerpt}
                    </p>
                }
                  <p className="mt-4 text-[0.62rem] uppercase tracking-[0.24em] text-accent">
                    {item.category}
                  </p>
                </div>
              </li>
            )}
          </ul>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              to="/media"
              className="rounded-full border border-line px-7 py-3 text-[0.72rem] uppercase tracking-[0.2em] text-ivory transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
              
              Go to media
            </Link>
            <Link
              to="/press-releases"
              className="rounded-full border border-line px-7 py-3 text-[0.72rem] uppercase tracking-[0.2em] text-ivory transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
              
              Go to press releases
            </Link>
          </div>
        </div>
      </section>
    </main>);

}