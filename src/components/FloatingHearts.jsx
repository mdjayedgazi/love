import { useMemo } from 'react';
import { Heart, Sparkles } from 'lucide-react';

/*
 * FloatingHearts
 * --------------
 * A very light, fixed decorative layer of floating hearts and a few
 * twinkling sparkles. It is hidden automatically for visitors who prefer
 * reduced motion (see animations.css).
 */
export default function FloatingHearts({ hearts = 9, sparkles = 7 }) {
  const heartNodes = useMemo(
    () =>
      Array.from({ length: hearts }, (_, i) => {
        const size = 12 + ((i * 7) % 16);
        return {
          id: `h-${i}`,
          left: `${(i * 11 + 5) % 96}%`,
          size,
          duration: 15 + ((i * 5) % 12),
          delay: (i * 2.4) % 16,
          opacity: 0.25 + ((i % 4) * 0.14),
        };
      }),
    [hearts],
  );

  const sparkleNodes = useMemo(
    () =>
      Array.from({ length: sparkles }, (_, i) => ({
        id: `s-${i}`,
        left: `${(i * 17 + 9) % 94}%`,
        top: `${(i * 23 + 12) % 88}%`,
        size: 8 + ((i * 3) % 10),
        duration: 3.4 + ((i * 0.7) % 3),
        delay: (i * 1.3) % 5,
      })),
    [sparkles],
  );

  return (
    <div className="floating-layer" aria-hidden="true">
      {heartNodes.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: h.left,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          <Heart size={h.size} fill="currentColor" strokeWidth={0} />
        </span>
      ))}

      {sparkleNodes.map((s) => (
        <span
          key={s.id}
          className="floating-sparkle"
          style={{
            left: s.left,
            top: s.top,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <Sparkles size={s.size} strokeWidth={1.4} />
        </span>
      ))}
    </div>
  );
}
