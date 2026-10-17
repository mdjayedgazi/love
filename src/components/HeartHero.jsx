import { useCallback, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

import { relationshipData } from '../data/relationshipData';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/*
 * HeartHero
 * ---------
 * The opening moment of the "Our Journey" page: a large, CSS/SVG heart
 * that grows in, then settles into a soft, slow heartbeat.
 *
 *  - Hover (or tap / focus) makes it grow a little, glow a little
 *    brighter, beat a little faster, and set free a few small hearts.
 *  - A few restrained hearts drift gently around the main heart at rest.
 *  - The animation is pure CSS (transforms + opacity), so it stays cheap:
 *    every particle is rendered once, never created at runtime.
 *  - Visitors who prefer reduced motion get the finished heart with no
 *    beating and no flying hearts (see animations.css / usePrefersReducedMotion).
 *  - All copy comes from relationshipData.heart — nothing is hard-coded.
 */

/* A few small, restrained hearts that float gently around the big heart.
   Static positions keep the layout stable and avoid runtime DOM work. */
const FLOATERS = [
  { id: 'f1', x: 5, y: 24, size: 20, delay: 0, duration: 7200 },
  { id: 'f2', x: 93, y: 29, size: 15, delay: 900, duration: 8400 },
  { id: 'f3', x: 15, y: 76, size: 13, delay: 1800, duration: 9600 },
];

/* Pre-computed directions for the small hearts released on interaction.
   Keeping them static means we never create DOM nodes at runtime. */
const BURST = [
  { id: 'b1', angle: -64, distance: 96, size: 15, delay: 0, kind: 'heart' },
  { id: 'b2', angle: -24, distance: 112, size: 10, delay: 70, kind: 'sparkle' },
  { id: 'b3', angle: 16, distance: 100, size: 17, delay: 130, kind: 'heart' },
  { id: 'b4', angle: 52, distance: 108, size: 11, delay: 40, kind: 'sparkle' },
  { id: 'b5', angle: -98, distance: 86, size: 9, delay: 170, kind: 'heart' },
  { id: 'b6', angle: 88, distance: 90, size: 13, delay: 100, kind: 'sparkle' },
];

export default function HeartHero() {
  const { intro, heart } = relationshipData;
  const reduceMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(false);

  const activate = useCallback(() => setActive(true), []);
  const deactivate = useCallback(() => setActive(false), []);
  const toggle = useCallback(() => setActive((value) => !value), []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    },
    [toggle],
  );

  return (
    <section className={`heart-hero ${active ? 'is-active' : ''}`}>
      <div className="container">
        <span className="eyebrow">{intro.eyebrow}</span>
        <h1 className="heart-hero__title">{intro.heading}</h1>
        <p className="heart-hero__intro">{intro.text}</p>

        <div className="heart-hero__stage">
          <div className="heart-hero__heart">
            {!reduceMotion && (
              <span className="heart-hero__floaters" aria-hidden="true">
                {FLOATERS.map((floater) => (
                  <span
                    key={floater.id}
                    className="heart-hero__floater"
                    style={{
                      '--pos-x': `${floater.x}%`,
                      '--pos-y': `${floater.y}%`,
                      '--float-size': `${floater.size}px`,
                      '--float-delay': `${floater.delay}ms`,
                      '--float-duration': `${floater.duration}ms`,
                    }}
                  >
                    <Heart size={floater.size} fill="currentColor" strokeWidth={0} />
                  </span>
                ))}
              </span>
            )}

            <button
              type="button"
              className="heart-hero__button"
              aria-label={heart.ariaLabel}
              aria-pressed={active}
              onClick={toggle}
              onMouseEnter={activate}
              onMouseLeave={deactivate}
              onFocus={activate}
              onBlur={deactivate}
              onKeyDown={handleKeyDown}
            >
              <span className="heart-hero__glow" aria-hidden="true" />

              <span className="heart-hero__pulse">
                <svg
                  viewBox="0 0 100 100"
                  className="heart-hero__svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <defs>
                    <linearGradient id="heart-hero-fill" x1="0" y1="0" x2="0.4" y2="1">
                      <stop offset="0%" stopColor="#f8c6d6" />
                      <stop offset="46%" stopColor="#e191a9" />
                      <stop offset="100%" stopColor="#b04a6c" />
                    </linearGradient>
                    <radialGradient id="heart-hero-shine" cx="0.34" cy="0.26" r="0.62">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.92)" />
                      <stop offset="52%" stopColor="rgba(255, 255, 255, 0.14)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                    </radialGradient>
                  </defs>
                  <path
                    d="M50 88C50 88 9 60 9 33.5C9 18 20.5 8 33 8C40.7 8 46.8 13.6 50 19.6C53.2 13.6 59.3 8 67 8C79.5 8 91 18 91 33.5C91 60 50 88 50 88Z"
                    fill="url(#heart-hero-fill)"
                  />
                  <path
                    d="M50 88C50 88 9 60 9 33.5C9 18 20.5 8 33 8C40.7 8 46.8 13.6 50 19.6C53.2 13.6 59.3 8 67 8C79.5 8 91 18 91 33.5C91 60 50 88 50 88Z"
                    fill="url(#heart-hero-shine)"
                  />
                </svg>
              </span>

              {!reduceMotion && (
                <span className="heart-hero__burst" aria-hidden="true">
                  {BURST.map((spark) => (
                    <span
                      key={spark.id}
                      className="heart-hero__spark"
                      style={{
                        '--angle': `${spark.angle}deg`,
                        '--distance': `${spark.distance}px`,
                        '--spark-size': `${spark.size}px`,
                        '--spark-delay': `${spark.delay}ms`,
                      }}
                    >
                      {spark.kind === 'sparkle' ? (
                        <Sparkles size={spark.size} strokeWidth={1.6} />
                      ) : (
                        <Heart size={spark.size} fill="currentColor" strokeWidth={0} />
                      )}
                    </span>
                  ))}
                </span>
              )}
            </button>
          </div>

          <span className="heart-hero__whisper" aria-hidden={!active}>
            {heart.hoverMessage}
          </span>
        </div>

        <h2 className="heart-hero__message">{heart.message}</h2>
        <p className="heart-hero__support">{heart.support}</p>
        <p className="heart-hero__hint">{heart.tapHint}</p>
      </div>
    </section>
  );
}
