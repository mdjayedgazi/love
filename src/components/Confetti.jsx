import { useMemo } from 'react';
import { createPortal } from 'react-dom';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const CONFETTI_COLORS = [
  '#e191a9',
  '#d1748f',
  '#b04a6c',
  '#f3ddab',
  '#c9a352',
  '#f9e2e8',
  '#f6e7cf',
  '#cde3d0',
];

// Build a reusable pool of random confetti pieces once, at module load,
// so we never call Math.random during a React render.
const CONFETTI_POOL = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  delay: Math.random() * 0.6,
  duration: 2.6 + Math.random() * 1.6,
  drift: `${(Math.random() - 0.5) * 220}px`,
  rotate: Math.random() * 360,
  round: Math.random() > 0.6,
}));

const SPARK_POOL = Array.from({ length: 24 }, (_, i) => {
  const angle = (Math.PI * 2 * i) / 24 + Math.random() * 0.4;
  const distance = 70 + Math.random() * 90;
  return {
    id: i,
    bx: `${Math.cos(angle) * distance}px`,
    by: `${Math.sin(angle) * distance}px`,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: Math.random() * 0.15,
  };
});

/*
 * Confetti
 * --------
 * A short celebration burst that the parent shows for a moment by flipping
 * "active" to true. A new "fireKey" number restarts the animations.
 * "origin" is where the sparkle burst appears, in viewport percentages.
 * Nothing renders for visitors who prefer reduced motion.
 */
export default function Confetti({
  active = false,
  fireKey = 0,
  origin = { x: 50, y: 45 },
  pieces = 70,
  sparks = 18,
}) {
  const reducedMotion = usePrefersReducedMotion();

  const confetti = useMemo(() => CONFETTI_POOL.slice(0, pieces), [pieces]);
  const sparkleBurst = useMemo(() => SPARK_POOL.slice(0, sparks), [sparks]);

  if (!active || reducedMotion) return null;

  return createPortal(
    <div className="confetti-layer" aria-hidden="true">
      {confetti.map((piece) => (
        <span
          key={`${fireKey}-c-${piece.id}`}
          className="confetti-piece"
          style={{
            left: piece.left,
            background: piece.color,
            borderRadius: piece.round ? '50%' : '2px',
            '--drift': piece.drift,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotate}deg)`,
          }}
        />
      ))}

      <span
        className="burst-layer"
        style={{ left: `${origin.x}%`, top: `${origin.y}%` }}
      >
        {sparkleBurst.map((spark) => (
          <span
            key={`${fireKey}-s-${spark.id}`}
            className="burst-spark"
            style={{
              left: 0,
              top: 0,
              background: spark.color,
              '--bx': spark.bx,
              '--by': spark.by,
              animationDelay: `${spark.delay}s`,
            }}
          />
        ))}
      </span>
    </div>,
    document.body,
  );
}
