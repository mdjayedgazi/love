import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { siteConfig, siteTitle } from '../data/siteConfig';
import { uiText } from '../data/uiText';

const links = [
  { to: '/', label: uiText.nav.home, end: true },
  { to: '/her-story', label: uiText.nav.story },
  { to: '/our-journey', label: uiText.nav.journey },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 12,
  );
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [menuPath, setMenuPath] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu after navigating to another page (including
  // browser back / forward). Adjusting state during render is the React
  // recommended pattern for reacting to a changed value.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  // Close the mobile menu on Escape, and automatically when the viewport
  // grows back to the desktop layout (where the toggle is hidden).
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    const desktop = window.matchMedia('(min-width: 681px)');
    const onDesktop = (event) => {
      if (event.matches) setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onDesktop);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link
          to="/"
          className="navbar__brand"
          aria-label={`${siteTitle} home`}
          onClick={() => setOpen(false)}
        >
          <span className="navbar__brand-mark" aria-hidden="true">
            <Heart size={18} fill="currentColor" strokeWidth={0} />
          </span>
          <span className="navbar__brand-text">
            {siteConfig.girlName}
            <small>{uiText.nav.brandTagline}</small>
          </span>
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? uiText.nav.closeMenu : uiText.nav.openMenu}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div
          id="primary-navigation"
          className={`navbar__links ${open ? 'is-open' : ''}`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'is-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
