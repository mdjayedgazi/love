import { Heart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { uiText } from '../data/uiText';
import { interpolate } from '../utils/text';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const year = CURRENT_YEAR;

  // The creator credit lives in uiText.footer.credit and is filled in from
  // siteConfig.creatorName, so it stays a single source of truth.
  const credit = interpolate(uiText.footer.credit, {
    name: siteConfig.creatorName,
  });

  return (
    <footer className="footer">
      <div className="container">
        <span className="footer__heart" aria-hidden="true">
          <Heart size={20} fill="currentColor" strokeWidth={0} />
        </span>
        <p>
          {siteConfig.footerNote} &nbsp;·&nbsp; for{' '}
          <strong>{siteConfig.girlName}</strong>
        </p>
        <p className="footer__credit">
          © {year} — {credit}
        </p>
      </div>
    </footer>
  );
}
