import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SmartImage from './SmartImage';
import { uiText } from '../data/uiText';
import { interpolate } from '../utils/text';

/*
 * Lightbox
 * --------
 * Full-screen photo viewer with previous / next controls.
 * Keyboard: Esc closes, ArrowLeft / ArrowRight navigate.
 */
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const closeRef = useRef(null);
  const image = images[index];

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onNavigate(-1);
      if (event.key === 'ArrowRight') onNavigate(1);
    },
    [onClose, onNavigate],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Focus the close button so keyboard users land somewhere sensible.
    if (closeRef.current) closeRef.current.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [handleKeyDown]);

  if (!image) return null;

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption || uiText.gallery.viewerAria}
      onClick={onClose}
    >
      <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
        <span className="lightbox__count">
          {interpolate(uiText.gallery.count, {
            current: index + 1,
            total: images.length,
          })}
        </span>

        <button
          type="button"
          className="lightbox__close"
          onClick={onClose}
          ref={closeRef}
          aria-label={uiText.gallery.closeAria}
        >
          <X size={20} />
        </button>

        <div className="lightbox__media">
          <SmartImage src={image.src} alt={image.alt} loading="eager" />
        </div>

        <figcaption className="lightbox__caption">
          <h3>{image.caption}</h3>
          {(image.date || image.category) && (
            <p>
              {image.category}
              {image.category && image.date ? ' · ' : ''}
              {image.date}
            </p>
          )}
        </figcaption>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="lightbox__btn lightbox__btn--prev"
              onClick={() => onNavigate(-1)}
              aria-label={uiText.gallery.prevAria}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="lightbox__btn lightbox__btn--next"
              onClick={() => onNavigate(1)}
              aria-label={uiText.gallery.nextAria}
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </figure>
    </div>,
    document.body,
  );
}
