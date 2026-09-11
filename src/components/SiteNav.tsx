import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';

const links = [
{ to: '/', label: 'Home' },
{ to: '/projects', label: 'Projects' },
{ to: '/team', label: 'Team' },
{ to: '/media', label: 'Media' },
{ to: '/press-releases', label: 'Press Releases' },
{ to: '/resources', label: 'Resources' },
{ to: '/contact', label: 'Contact' }];


export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ease-out ${
      scrolled ? 'bg-ink/80 backdrop-blur-md' : 'bg-transparent'}`
      }>
      
      <div className="mx-auto flex h-[74px] max-w-content items-center justify-between px-6 sm:px-10">
        <Link
          to="/"
          className="text-[0.78rem] font-medium uppercase tracking-[0.32em] text-ivory">
          
          Convalt<span className="text-accent"> Energy</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {links.map((link) =>
            <li key={link.to}>
                <NavLink
                to={link.to}
                className={({ isActive }) =>
                `text-[0.72rem] uppercase tracking-[0.2em] transition-colors duration-150 ease-out hover:text-ivory ${
                isActive ? 'text-ivory' : 'text-muted'}`

                }>
                
                  {link.label}
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden text-ivory">
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open &&
      <nav
        aria-label="Primary mobile"
        className="lg:hidden border-t border-line bg-ink/95 backdrop-blur-md">
        
          <ul className="mx-auto max-w-content px-6 py-4 sm:px-10">
            {links.map((link) =>
          <li key={link.to}>
                <NavLink
              to={link.to}
              className={({ isActive }) =>
              `block py-3 text-sm uppercase tracking-[0.18em] ${
              isActive ? 'text-ivory' : 'text-muted'}`

              }>
              
                  {link.label}
                </NavLink>
              </li>
          )}
          </ul>
        </nav>
      }
    </header>);

}