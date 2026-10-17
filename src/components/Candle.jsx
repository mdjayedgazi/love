import { uiText } from '../data/uiText';
import { interpolate } from '../utils/text';

/*
 * Candle
 * ------
 * A single candle. Click / tap it (or its flame) to light it or blow it
 * out. The flickering flame and the brief fade-out when it goes out are
 * pure CSS (see components.css + animations.css).
 *
 * The aria-label is built from templates in uiText.js.
 */
export default function Candle({ color, lit, onToggle, position }) {
  // Stop the click from bubbling up to the cake, which would add a candle.
  const handleClick = (event) => {
    event.stopPropagation();
    onToggle();
  };

  const label = interpolate(uiText.cake.candleAria, {
    position,
    state: lit ? uiText.cake.candleLit : uiText.cake.candleOut,
    action: lit ? uiText.cake.candleBlow : uiText.cake.candleLight,
  });

  return (
    <button
      type="button"
      className={`candle ${lit ? 'is-lit' : 'is-out'}`}
      onClick={handleClick}
      aria-pressed={lit}
      aria-label={label}
      style={{ '--candle-color': color }}
    >
      <span className="candle__glow" aria-hidden="true" />
      <span className="candle__flame" aria-hidden="true" />
      <span className="candle__wick" aria-hidden="true" />
      <span className="candle__body" aria-hidden="true" />
    </button>
  );
}
