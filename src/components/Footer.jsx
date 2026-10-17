import { Heart } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { uiText } from '../data/uiText';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const year = CURRENT_YEAR;

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
        <p style={{ marginTop: 6, fontSize: '0.78rem' }}>
          © {year} — {uiText.footer.madeBy} {siteConfig.boyfriendName}
        </p>
      </div>
    </footer>
  );
}
