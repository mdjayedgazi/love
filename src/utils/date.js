/*
 * ============================================================
 *  DATE HELPERS  —  turn the birthday in siteConfig into text.
 * ============================================================
 *
 * The birthday is stored as a day and a month only (see
 * src/data/siteConfig.js). These helpers format it for the UI so
 * the date never has to be typed out by hand.
 *
 *   formatLongDate({ day: 29, month: 4 })  ->  "29 April"
 *   formatShortDate({ day: 29, month: 4 }) ->  "29/04"
 *   ordinal(20)                            ->  "20th"
 */

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/* Full month name for a 1-based month number (4 -> "April"). */
export function getMonthName(month) {
  return MONTH_NAMES[month - 1] || '';
}

/* "29 April" — a friendly, readable birthday. */
export function formatLongDate({ day, month } = {}) {
  const monthName = getMonthName(month);
  if (!day || !monthName) return '';
  return `${day} ${monthName}`;
}

/* "29/04" — the birthday in day/month format. */
export function formatShortDate({ day, month } = {}) {
  if (!day || !month) return '';
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}`;
}

/* 20 -> "20th", 1 -> "1st", 23 -> "23rd". */
export function ordinal(number) {
  if (typeof number !== 'number' || Number.isNaN(number)) return '';
  const mod100 = number % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${number}th`;
  switch (number % 10) {
    case 1:
      return `${number}st`;
    case 2:
      return `${number}nd`;
    case 3:
      return `${number}rd`;
    default:
      return `${number}th`;
  }
}
