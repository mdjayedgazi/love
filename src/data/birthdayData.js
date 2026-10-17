import { siteConfig } from './siteConfig';
import { ordinal } from '../utils/date';

/*
 * ============================================================
 *  BIRTHDAY CONTENT  —  everything on the Birthday home page.
 * ============================================================
 *
 *  How to edit:
 *  - Change any text inside the quotes.
 *  - Keep the property names (the part before the ":").
 *  - Lists use [ ... ] with items separated by commas.
 *  - Her name and age come from siteConfig.js automatically, so
 *    they are never written by hand here.
 *  - The cake BUTTON labels and instructions live in uiText.js.
 */

export const birthdayData = {
  // ---------- Opening hero section ----------
  hero: {
    eyebrow: 'A little world made just for you',
    // Her name and age are filled in from siteConfig automatically.
    title: `Happy ${ordinal(siteConfig.age)} Birthday, ${siteConfig.girlName}!`,
    // A warm, personal opening line.
    message:
      'Today the whole world gets a little brighter, because it is the day you arrived in it. I built this tiny corner of the internet to celebrate you — every candle, every sparkle, every word here is yours.',
    ctaPrimary: 'Open Your Surprise',
    ctaSecondary: 'Read My Letter',
  },

  // ---------- Cake section ----------
  // (The button labels and instructions live in uiText.js -> cake.)
  cake: {
    heading: 'Make a Wish',
    // The most candles the cake can hold.
    maxCandles: 5,
    // Shown briefly when the candles are blown out.
    blowMessage: 'Wish made. Every one of them already came true, because of you.',
    // Shown briefly when all the candles are lit.
    lightMessage: 'Look at that glow — almost as bright as your smile.',
  },

  // ---------- Birthday wishes section ----------
  wishes: {
    heading: 'A Few Words For You',
    intro:
      'I am not always great with words out loud, so I wrote them down instead. Take your time with these.',
    // Each wish is its own little note.
    items: [
      {
        id: 'wish-1',
        title: `Happy Birthday, ${siteConfig.girlName}`,
        text: `${siteConfig.age} looks good on you. I hope this year is gentle, exciting, and full of the small things that make you laugh until you cannot breathe.`,
      },
      {
        id: 'wish-2',
        title: 'You Make Ordinary Days Better',
        text: 'A regular Tuesday feels like a small celebration when you are part of it. That is a rare kind of magic, and you carry it without even trying.',
      },
      {
        id: 'wish-3',
        title: 'Keep Being Exactly You',
        text: 'Stay curious, stay stubborn about the things you love, and never shrink yourself to fit anywhere. The world needs more of you, not less.',
      },
    ],
  },

  // ---------- What makes her special ----------
  qualities: {
    heading: 'What Makes You, You',
    intro: 'A few of the countless things I notice and quietly adore.',
    items: [
      { id: 'q-1', icon: 'heart', label: 'Your Kindness', text: 'You notice people. The little things you do for others never go unnoticed by me.' },
      { id: 'q-2', icon: 'sparkles', label: 'Your Laugh', text: 'It is the sound I would choose as the background music for my whole life.' },
      { id: 'q-3', icon: 'star', label: 'Your Mind', text: 'The way you think, question, and dream is honestly one of my favourite things about you.' },
      { id: 'q-4', icon: 'coffee', label: 'Your Calm', text: 'You make even the messiest days feel manageable just by being around.' },
    ],
  },

  // ---------- Compliments (short, sweet) ----------
  compliments: {
    heading: 'Quick Reminders',
    items: [
      'You are more than enough, exactly as you are.',
      'Your presence is a gift, not just today but every day.',
      'You are allowed to take up space and shine loudly.',
      'Whatever you are worried about, you are handling it better than you think.',
    ],
  },

  // ---------- Photo preview on the home page ----------
  memoriesPreview: {
    heading: 'Some Moments I Keep Close',
    intro: 'A little preview — there are many more waiting on your story page.',
    linkLabel: 'See All Our Memories',
  },

  // ---------- Closing section on the home page ----------
  closing: {
    heading: 'One More Thing',
    text: 'This website ends here, but the day is just beginning. I hope it is every bit as wonderful as you have been to me.',
    ctaLabel: 'Read Your Birthday Letter',
  },
};
