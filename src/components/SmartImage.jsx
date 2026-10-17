import { useState } from 'react';
import { Heart } from 'lucide-react';
import { uiText } from '../data/uiText';

/*
 * SmartImage
 * -----------
 * Shows a normal <img>. If the image file cannot be loaded (for example
 * because you have not added your own photo yet), it swaps to an elegant
 * gradient placeholder instead of a broken-image icon.
 */
function variantIndex(seed = '') {
  let sum = 0;
  for (let i = 0; i < seed.length; i += 1) sum += seed.charCodeAt(i);
  return sum % 4;
}

export default function SmartImage({ src, alt, className = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`img-fallback img-fallback--${variantIndex(src || alt)} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="img-fallback__inner">
          <Heart size={30} strokeWidth={1.5} aria-hidden="true" />
          <p className="img-fallback__label" style={{ marginTop: 8 }}>
            {uiText.gallery.placeholder}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setFailed(true)}
    />
  );
}
