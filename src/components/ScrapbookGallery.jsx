import { useCallback, useState } from 'react';

import SmartImage from './SmartImage';
import Lightbox from './Lightbox';
import { uiText } from '../data/uiText';
import { interpolate } from '../utils/text';

/*
 * ScrapbookGallery
 * ----------------
 * A romantic, scrapbook-style grid of the real photographs for the
 * "Shared Memories" section of the Our Journey page.
 *
 *  - Images come from galleryData.images (never hard-coded here).
 *  - Each card keeps its photo's aspect ratio and uses object-fit: cover.
 *  - Gentle hover lift + image zoom; a tap opens the shared Lightbox
 *    with previous / next navigation and keyboard support.
 *  - If a photo file is missing, SmartImage shows the pretty fallback.
 */
export default function ScrapbookGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const open = useCallback((index) => setActiveIndex(index), []);
  const close = useCallback(() => setActiveIndex(null), []);

  const navigate = useCallback(
    (direction) => {
      setActiveIndex((current) => {
        if (current === null) return current;
        return (current + direction + images.length) % images.length;
      });
    },
    [images.length],
  );

  return (
    <>
      <div className="scraps">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={`scrap-card scrap-card--${image.size || 'square'}`}
            onClick={() => open(index)}
            aria-label={interpolate(uiText.gallery.openAria, {
              caption: image.caption,
            })}
          >
            <span className="scrap-card__media">
              <SmartImage src={image.src} alt={image.alt} />
            </span>
            {(image.caption || image.date) && (
              <span className="scrap-card__caption">
                {image.caption}
                {image.date && <em>{image.date}</em>}
              </span>
            )}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={close}
          onNavigate={navigate}
        />
      )}
    </>
  );
}
