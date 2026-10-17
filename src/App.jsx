import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingHearts from './components/FloatingHearts';
import { siteTitle } from './data/siteConfig';

import BirthdayHome from './pages/BirthdayHome';
import HerStory from './pages/HerStory';
import OurJourney from './pages/OurJourney';

/* Keep the browser-tab title in sync with the name in siteConfig. */
function DocumentTitle() {
  useEffect(() => {
    document.title = siteTitle;
  }, []);

  return null;
}

/* Scroll back to the top whenever the visitor changes page. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

/* The ambient floating hearts add to the celebration, but on the
   "Our Journey" page the large animated heart is the star, so the
   background layer rests there to keep the moment calm and focused. */
function BackgroundDecor() {
  const { pathname } = useLocation();

  if (pathname === '/our-journey') return null;

  return <FloatingHearts />;
}

export default function App() {
  return (
    <>
      <BackgroundDecor />
      <div className="app-shell">
        <Navbar />

        <ScrollToTop />
        <DocumentTitle />

        <main>
          <Routes>
            <Route path="/" element={<BirthdayHome />} />
            <Route path="/her-story" element={<HerStory />} />
            <Route path="/our-journey" element={<OurJourney />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}
