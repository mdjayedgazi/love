/*
 * ============================================================
 *  CANDLE HELPERS  —  the pure list logic behind the cake.
 * ============================================================
 *
 * Kept separate (and free of React / side effects) so the rules are
 * easy to read and to reason about:
 *
 *   - Candle ids are unique and ever-increasing, so React keys stay
 *     stable and every new candle plays its pop-in animation.
 *   - There are never more than `maxCandles` candles.
 *   - "Remove One Candle" removes the most recently added candle.
 *   - Toggling or removing only ever affects the candle it is aimed at.
 */

export const CANDLE_COLORS = ['#f6a5bb', '#f7c489', '#c9a3e0', '#8fd0b0', '#f2d06b'];

export function createCandle(id) {
  return {
    id,
    color: CANDLE_COLORS[id % CANDLE_COLORS.length],
    lit: true,
  };
}

/* Add one candle unless the limit has been reached. */
export function addCandle(candles, id, maxCandles) {
  if (candles.length >= maxCandles) return candles;
  return [...candles, createCandle(id)];
}

/* Remove the most recently added candle (never below zero). */
export function removeLastCandle(candles) {
  if (candles.length === 0) return candles;
  return candles.slice(0, -1);
}

/* Flip the lit state of exactly one candle. */
export function toggleCandleById(candles, id) {
  return candles.map((candle) =>
    candle.id === id ? { ...candle, lit: !candle.lit } : candle,
  );
}

/* Light or blow out every candle at once. */
export function setAllLit(candles, lit) {
  return candles.map((candle) => ({ ...candle, lit }));
}

/* Remove a single candle by id (used by the automatic removal). */
export function removeCandleById(candles, id) {
  return candles.filter((candle) => candle.id !== id);
}
