/*
 * ============================================================
 *  SITE CONFIG  —  the SINGLE SOURCE OF TRUTH for the personal
 *  details that appear in more than one place.
 * ============================================================
 *
 *  Edit a value here once and it updates everywhere on the site.
 *  A non-developer can safely change anything inside the quotes
 *  (numbers are written without quotes). Keep the commas at the
 *  end of each line and do not rename the properties.
 *
 *    girlName       : her name, shown in headings, the letter,
 *                     the navigation bar and the footer.
 *    age            : the age she is turning. Drives every "20th
 *                     birthday" style reference.
 *    birthday       : her birthday as a day + month. Only the day
 *                     and month are known, so do NOT add a year.
 *                       month: 1 = January ... 12 = December
 *    boyfriendName  : the sender. Signs the letter and the footer.
 *    footerNote     : the small line at the bottom of every page.
 */

export const siteConfig = {
  girlName: 'Mariya',

  age: 20,

  birthday: {
    day: 29,
    month: 4, // 4 = April  ->  "29 April" / "29/04"
  },

  boyfriendName: 'Ariyan',

  // Small site-wide settings.
  footerNote: 'Made with love, just for you.',
};

/*
 * The browser-tab title is built from her name, so renaming her in
 * one place keeps the tab in sync too. You normally do not need to
 * edit this line.
 */
export const siteTitle = `A Little World for ${siteConfig.girlName}`;
