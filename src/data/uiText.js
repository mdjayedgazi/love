/*
 * ============================================================
 *  UI TEXT  —  the reusable words that make the site work.
 * ============================================================
 *
 *  These are the labels, buttons, navigation items, headings and
 *  accessibility strings that are not tied to one story or
 *  message. Page-specific stories and wishes live in the other
 *  data files (birthdayData, storyData, relationshipData, ...).
 *
 *  Any text wrapped in {curly braces} is filled in automatically
 *  (for example "{count} of {max} candles"). Leave the braces in
 *  place. Anything a visitor reads can be changed here.
 */

export const uiText = {
  // ---------- Top navigation bar ----------
  nav: {
    home: 'Birthday',
    story: 'Her Story',
    journey: 'Our Journey',
    brandTagline: 'Birthday Edition',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  // ---------- Footer ----------
  footer: {
    // The website creator credit. "{name}" is filled in automatically
    // from siteConfig.creatorName, so the creator's name is never typed
    // twice. It is separate from the boyfriend's name used in the letter.
    credit: 'Made with ♥ by {name}',
  },

  // ---------- Shared buttons and links ----------
  actions: {
    backToBirthday: 'Back to Birthday',
    herStory: 'Her Story',
  },

  // ---------- The interactive birthday cake ----------
  cake: {
    addLabel: 'Add a Candle',
    removeLabel: 'Remove One Candle',
    lightAllLabel: 'Light All Candles',
    blowLabel: 'Blow Out Candles',

    // Shown under the "Make a Wish" heading. Explains the behaviour.
    instructions:
      'Tap the cake or "Add a Candle" to build it up, then tap any candle to light it or blow it out. A blown-out candle disappears once its flame fades — use "Remove One Candle" to take one off straight away.',

    // The little counter below the buttons.
    counter: '{count} of {max} candles',

    // Tooltip on the cake itself.
    tapToAddTitle: 'Tap to add a candle',

    // Shown when the candle limit is reached.
    maxReached: 'That is all {max} candles — ready when you are.',

    // Shown when there is nothing on the cake to act on.
    noCandles: 'There are no candles on the cake yet — add one first.',

    // Accessibility strings for a single candle.
    candlePosition: 'Candle {index} of {total}',
    candleLit: 'lit',
    candleOut: 'out',
    candleLight: 'light it',
    candleBlow: 'blow it out',
    candleAria: '{position}, currently {state}. Activate to {action}.',
  },

  // ---------- The birthday letter ----------
  letter: {
    openAria: 'Open your birthday letter',
  },

  // ---------- Photo gallery and lightbox ----------
  gallery: {
    openAria: 'Open photo: {caption}',
    closeAria: 'Close photo viewer',
    prevAria: 'Previous photo',
    nextAria: 'Next photo',
    viewerAria: 'Photo viewer',
    count: '{current} / {total}',
    placeholder: 'Photo coming soon',
  },

  // ---------- The small label above each section heading ----------
  eyebrows: {
    homeCake: 'Make it yours',
    homeWishes: 'A few words',
    homeQualities: 'Just some of it',
    memories: 'Photo album',
    storyDetails: 'Little details',
    journeyScrapbook: 'Shared Memories',
    journeyDreams: 'Looking ahead',
    journeyLetter: 'From me to you',
  },
};
