import { useCallback, useState } from 'react';
import Reveal from './Reveal';
import SmartImage from './SmartImage';
import Lightbox from './Lightbox';
import { uiText } from '../data/uiText';
import { interpolate } from '../utils/text';

/*
 * PhotoGallery
 * ------------
 * A responsive masonry gallery with hover captions and a click-to-open
 * lightbox. The image list comes from galleryData.js.
 */
export default function PhotoGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const open = useCallback((index) => setActiveIndex(index), []);
  const close = useCallback(() => setActiveIndex(null), []);

  const navigate = useCallback(
    (direction) => {
      setActiveIndex((current) => {
        if (current === null) return current;
        const next = (current + direction + images.length) % images.length;
        return next;
      });
    },
    [images.length],
  );

  return (
    <>
      <div className="gallery">
        {images.map((image, index) => (
          <Reveal key={image.id} className="gallery__reveal" delay={(index % 3) * 80}>
            <button
              type="button"
              className="gallery__item"
              onClick={() => open(index)}
              aria-label={interpolate(uiText.gallery.openAria, {
                caption: image.caption,
              })}
            >
              <div className={`gallery__media gallery__media--${image.size || 'square'}`}>
                <SmartImage src={image.src} alt={image.alt} />
              </div>
              <div className="gallery__overlay">
                {image.caption && <p className="gallery__caption">{image.caption}</p>}
                {image.date && <p className="gallery__date">{image.date}</p>}
              </div>
            </button>
          </Reveal>
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
