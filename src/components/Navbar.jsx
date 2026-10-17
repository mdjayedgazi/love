import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link to="/" className="navbar__brand" aria-label={`${siteTitle} home`}>
          <span className="navbar__brand-mark" aria-hidden="true">
            <Heart size={18} fill="currentColor" strokeWidth={0} />
          </span>
          <span>
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
