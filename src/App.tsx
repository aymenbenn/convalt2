import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteNav } from './components/SiteNav';
import { SiteFooter } from './components/SiteFooter';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Team } from './pages/Team';
import { Media } from './pages/Media';
import { PressReleases } from './pages/PressReleases';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';

interface AppProps {
  /** Length of the cinematic journey in viewport heights — controls pacing. */
  journeyLength?: number;
  /** Continuous camera drift. Off renders a locked-down dolly instead. */
  cameraDrift?: boolean;
}

export function App({ journeyLength = 5.4, cameraDrift = true }: AppProps) {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen bg-ink text-ivory">
        <SiteNav />
        <Routes>
          <Route
            path="/"
            element={<Home journeyLength={journeyLength} cameraDrift={cameraDrift} />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/media" element={<Media />} />
          <Route path="/press-releases" element={<PressReleases />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SiteFooter />
      </div>
    </BrowserRouter>);

}