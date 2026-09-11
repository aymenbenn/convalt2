import React from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

/**
 * Shared header for the text-only interior pages. No imagery here by design —
 * the photography belongs to the cinematic journey on the home page.
 */
export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-content px-6 pb-16 pt-40 sm:px-10 sm:pb-24 sm:pt-48">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.34em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.04] text-ivory sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro &&
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {intro}
          </p>
        }
      </div>
    </header>);

}