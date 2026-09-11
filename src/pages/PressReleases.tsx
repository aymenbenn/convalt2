import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { pressReleases } from '../data/media';

export function PressReleases() {
  return (
    <main>
      <PageHeader
        eyebrow="Press Releases"
        title="Officially released by Convalt Energy"
        intro="The full text of our most recent announcements." />
      

      {pressReleases.map((release) =>
      <article key={release.id} className="border-b border-line">
          <div className="mx-auto grid max-w-content gap-10 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[16rem_1fr] lg:gap-20">
            <p className="text-[0.68rem] uppercase tracking-[0.22em] text-accent lg:sticky lg:top-28 lg:self-start">
              {release.dateline}
            </p>

            <div>
              <h2 className="max-w-3xl font-display text-3xl leading-[1.1] text-ivory sm:text-[2.6rem]">
                {release.title}
              </h2>
              {release.standfirst &&
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ivory/80">
                  {release.standfirst}
                </p>
            }
              <div className="mt-8 max-w-2xl space-y-6 text-[0.98rem] leading-relaxed text-muted">
                {release.paragraphs.map((paragraph, index) =>
              <p key={`${release.id}-p${index}`}>{paragraph}</p>
              )}
              </div>
              <p className="mt-10 text-muted">###</p>
            </div>
          </div>
        </article>
      )}

      <section className="mx-auto max-w-content px-6 py-20 sm:px-10">
        <p className="max-w-3xl text-xs leading-relaxed text-muted">
          These documents contain statements about future events, expectations, and projections
          that are “forward-looking” within the meaning of applicable securities laws.
          Forward-looking statements are based on current assumptions and estimates, which are
          subject to known and unknown risks, uncertainties, and other factors that could cause
          actual results to differ materially. The company undertakes no obligation to update or
          revise any forward-looking statements except as required by law.
        </p>
      </section>
    </main>);

}