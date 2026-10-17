import { siteConfig } from './siteConfig';
import { ordinal } from '../utils/date';

/*
 * ============================================================
 *  RELATIONSHIP CONTENT  —  the "Our Journey" page.
 * ============================================================
 *
 *  Everything here is SAMPLE text. Replace it with your real story.
 *
 *  Tips:
 *  - "image" is optional: leave "" for a placeholder, or use
 *    "/images/couple/our-first-trip.jpg" after adding the file.
 *  - Each string in letter.paragraphs is one paragraph. Add or
 *    remove lines to change the letter's length.
 *  - The greeting uses her name, and the signature uses the
 *    boyfriend's name, both from siteConfig.js — do not type a
 *    name directly into the letter.
 */

export const relationshipData = {
  // ---------- Page header ----------
  intro: {
    eyebrow: 'Chapter Three',
    heading: 'Our Journey, Together',
    text: 'Two separate stories that decided to walk the same road. Here are the moments that made us, us — and a few dreams still waiting for us.',
  },

  // ---------- The large animated heart (Our Journey hero) ----------
  // Every line the visitor reads on the big heart lives here.
  heart: {
    message: 'Two Hearts, One Beautiful Journey',
    support: `${siteConfig.girlName}, this heart beats for every moment we have shared — and for every one still to come.`,
    hoverMessage: 'I keep choosing you.',
    tapHint: 'Hover or tap the heart',
    ariaLabel: 'A large beating heart. Hover or tap it for a little more love.',
  },

  // ---------- Heading for the relationship timeline section ----------
  timelineSection: {
    heading: 'How We Got Here',
    intro:
      'Sample milestones — replace them with your real memories in src/data/relationshipData.js.',
  },

  // ---------- Relationship timeline (sample) ----------
  timeline: [
    {
      id: 'journey-1',
      date: 'SAMPLE DATE',
      title: 'The Day We Met',
      description:
        'SAMPLE: where you were, what you noticed first, and how you had no idea what was beginning.',
      image: '',
    },
    {
      id: 'journey-2',
      date: 'SAMPLE DATE',
      title: 'Our First Real Conversation',
      description:
        'SAMPLE: the chat that lasted hours, or the talk where you realised the other person was different.',
      image: '',
    },
    {
      id: 'journey-3',
      date: 'SAMPLE DATE',
      title: 'The Moment We Became Us',
      description:
        'SAMPLE: the small turning point where "you and me" quietly became "we".',
      image: '',
    },
    {
      id: 'journey-4',
      date: 'SAMPLE DATE',
      title: 'A Memory I Replay Often',
      description:
        'SAMPLE: a shared day you both still bring up — a trip, a rainstorm, a ridiculous inside joke.',
      image: '',
    },
    {
      id: 'journey-5',
      date: 'SAMPLE DATE',
      title: 'Through Something Hard',
      description:
        'SAMPLE: a challenge you faced together and how you came out closer on the other side.',
      image: '',
    },
    {
      id: 'journey-6',
      date: 'SAMPLE DATE',
      title: 'Where We Are Now',
      description:
        'SAMPLE: your most recent special moment, and how far you have both come.',
      image: '',
    },
  ],

  // ---------- Shared memories (the nine real photographs) ----------
  // Only the words live here. The photographs themselves — their
  // paths, captions, alt text and dates — are the single source of
  // truth in src/data/galleryData.js (galleryData.images).
  memories: {
    heading: 'Shared Memories',
    intro:
      'Nine little windows into our world. Tap any photograph to open it, then use the arrows to wander through them all.',
  },

  // ---------- Future dreams ----------
  dreams: {
    heading: 'Dreams We Can Look Forward To',
    intro: 'Not promises — just lovely things worth hoping for, one at a time.',
    // Swap "icon" for any of: plane, home, heart, sparkles, coffee, camera,
    // star, sun, book, music.
    items: [
      { id: 'dream-1', icon: 'plane', title: 'Somewhere New', text: 'SAMPLE: a city or country you would love to explore together.' },
      { id: 'dream-2', icon: 'coffee', title: 'Slow Mornings', text: 'SAMPLE: a small everyday ritual you look forward to sharing.' },
      { id: 'dream-3', icon: 'camera', title: 'More Photographs', text: 'SAMPLE: a trip or event you would love to photograph together.' },
      { id: 'dream-4', icon: 'star', title: 'A Shared Goal', text: 'SAMPLE: something you both want to build, learn or achieve.' },
      { id: 'dream-5', icon: 'home', title: 'A Place That Feels Ours', text: 'SAMPLE: the kind of space or feeling of home you imagine.' },
      { id: 'dream-6', icon: 'heart', title: 'Growing Together', text: 'SAMPLE: how you hope to keep supporting each other.' },
    ],
  },

  // ---------- The birthday letter ----------
  letter: {
    heading: 'A Letter For You',
    teaser: 'I wrote you something. No rush — open it whenever you are ready.',
    openLabel: 'Read Your Letter',
    closeLabel: 'Close the Letter',

    // The greeting line. Her name comes from siteConfig.js.
    greeting: `My dearest ${siteConfig.girlName},`,

    // Each string is one paragraph. Add or remove lines freely.
    paragraphs: [
      `Happy ${ordinal(siteConfig.age)} birthday. I wanted to give you something that could not be wrapped — so I made you this instead.`,
      'I hope you know how much light you bring into the lives around you. You have a way of making people feel seen, and I am endlessly grateful that I get to be one of them.',
      'This year, I hope you are gentle with yourself. I hope you chase the things that excite you and rest when you need to. And I hope you always remember that you are loved on your best days and your hardest ones alike.',
    ],

    // The final line, before the signature.
    closing: 'Thank you for being you. Happy birthday, my favourite person.',

    // The sign-off. The signature name itself comes from
    // siteConfig.boyfriendName, so it is not written here.
    signOff: 'Always yours,',
  },

  // ---------- Finale ----------
  finale: {
    heading: `Happy Birthday, ${siteConfig.girlName}`,
    text: `Here is to ${siteConfig.age} wonderful years — and to every single one still to come.`,
    ctaLabel: 'Back to the Beginning',
  },
};
