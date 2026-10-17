import { useCallback, useEffect, useRef, useState } from 'react';
import { Heart, Mail, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { uiText } from '../data/uiText';

/*
 * BirthdayLetter
 * --------------
 * An envelope that opens into a paper-style letter.
 * The greeting, paragraphs, closing and sign-off come from
 * relationshipData.js. The greeting uses her name and the signature uses
 * the boyfriend's name, both from siteConfig.js.
 */
export default function BirthdayLetter({ data }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);
  const closeRef = useRef(null);

  const toggle = useCallback(() => setOpen((value) => !value), []);

  useEffect(() => {
    if (!open) return undefined;
    // Move focus to the close button so keyboard users stay in the letter.
    if (closeRef.current) closeRef.current.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const paragraphs = data.paragraphs || [];

  return (
    <div className="letter-section">
      {!open && (
        <>
          <button
            type="button"
            className="envelope anim-float"
            onClick={toggle}
            aria-label={uiText.letter.openAria}
          >
            <span className="envelope__back" aria-hidden="true" />
            <span className="envelope__letter" aria-hidden="true" />
            <span className="envelope__flap" aria-hidden="true" />
            <span className="envelope__seal" aria-hidden="true">
              <Heart size={20} fill="currentColor" strokeWidth={0} />
            </span>
          </button>

          <p className="lead" style={{ maxWidth: 460, margin: '0 auto 22px' }}>
            {data.teaser}
          </p>

          <button type="button" className="btn btn--primary" onClick={toggle}>
            <Mail size={17} aria-hidden="true" />
            {data.openLabel}
          </button>
        </>
      )}

      {open && (
        <>
          <article className="letter-card" ref={cardRef}>
            <div className="letter-card__body">
              {data.greeting && <p>{data.greeting}</p>}
              {paragraphs.map((paragraph, index) => (
                <p key={`para-${index}`}>{paragraph}</p>
              ))}
              {data.closing && <p>{data.closing}</p>}
            </div>

            <p className="letter-card__sign">
              {data.signOff && (
                <span className="letter-card__sign-off">{data.signOff}</span>
              )}
              <span className="letter-card__sign-name">
                {siteConfig.boyfriendName}
              </span>
            </p>
          </article>

          <div className="letter-actions">
            <button
              type="button"
              className="btn btn--ghost"
              onClick={toggle}
              ref={closeRef}
            >
              <X size={17} aria-hidden="true" />
              {data.closeLabel}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
