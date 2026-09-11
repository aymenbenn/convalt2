import React from 'react';
import { Link } from 'react-router-dom';

const links = [
{ to: '/', label: 'Home' },
{ to: '/projects', label: 'Projects' },
{ to: '/team', label: 'Team' },
{ to: '/media', label: 'Media' },
{ to: '/press-releases', label: 'Press Releases' },
{ to: '/resources', label: 'Resources' },
{ to: '/contact', label: 'Contact' }];


export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto max-w-content px-6 py-16 sm:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.78rem] font-medium uppercase tracking-[0.32em] text-ivory">
              Convalt<span className="text-accent"> Energy</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              A portfolio company of ACO Investment Group LLC
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3">
              {links.map((link) =>
              <li key={link.to}>
                  <Link
                  to={link.to}
                  className="text-[0.72rem] uppercase tracking-[0.2em] text-muted transition-colors duration-150 ease-out hover:text-ivory">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <p className="mt-14 border-t border-line pt-8 text-xs text-muted">
          Copyright © Convalt Energy, Inc. 2011 – 2026. All Rights Reserved.
        </p>
      </div>
    </footer>);

}