/*
 * ============================================================
 *  TEXT HELPERS
 * ============================================================
 */

/*
 * Fill {placeholders} in a label with real values.
 *
 *   interpolate('{count} of {max} candles', { count: 2, max: 5 })
 *   -> "2 of 5 candles"
 *
 * Unknown placeholders are left untouched, so a typo never blanks
 * the whole string.
 */
export function interpolate(template, values = {}) {
  if (typeof template !== 'string') return '';
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(values, key)
      ? String(values[key])
      : match,
  );
}
