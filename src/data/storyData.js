import { siteConfig } from './siteConfig';

/*
 * ============================================================
 *  HER STORY  —  content for the "Her Story" page.
 * ============================================================
 *
 *  How to edit:
 *  - Replace the sample timeline events with real memories.
 *  - "year" and "date" are free text — write anything you like.
 *  - "image" is optional. Leave it as "" to show a pretty
 *    placeholder, or point it to a file you dropped in
 *    public/images/story/.  Example: "/images/story/childhood.jpg"
 *  - Her name is pulled from siteConfig.js automatically.
 */

export const storyData = {
  // ---------- Page header ----------
  intro: {
    eyebrow: 'Chapter Two',
    heading: 'Little Moments, Beautiful Memories',
    text: 'Every year adds a new page to your story. Here is a small collection of the moments, big and small, that shaped the person you are today.',
  },

  // ---------- Heading for the life timeline section ----------
  timelineSection: {
    heading: 'A Story Still Being Written',
    intro: `Fictional sample entries — replace them with ${siteConfig.girlName}'s real moments in src/data/storyData.js.`,
  },

  // ---------- Her life timeline (sample, clearly fictional) ----------
  timeline: [
    {
      id: 'story-1',
      year: 'A long time ago',
      title: 'A Childhood Memory',
      description:
        'SAMPLE: describe a sweet childhood story here — a favourite toy, a family trip, or the day she first discovered something she loved.',
      image: '',
      tag: 'Childhood',
    },
    {
      id: 'story-2',
      year: 'Those school days',
      title: 'An Important School Moment',
      description:
        'SAMPLE: a teacher who believed in her, a subject she fell in love with, or a friendship that started in the simplest way.',
      image: '',
      tag: 'School',
    },
    {
      id: 'story-3',
      year: 'A proud milestone',
      title: 'Something She Achieved',
      description:
        'SAMPLE: an award, a hard-won result, or a personal goal she worked for. Write about how proud everyone was.',
      image: '',
      tag: 'Achievement',
    },
    {
      id: 'story-4',
      year: 'A year of growing',
      title: 'A Season of Growth',
      description:
        'SAMPLE: a period where she learned something about herself, found her footing, or became braver than before.',
      image: '',
      tag: 'Growth',
    },
    {
      id: 'story-5',
      year: 'Recently',
      title: 'A Favourite Recent Memory',
      description:
        'SAMPLE: a day you both still talk about — a trip, a spontaneous plan, or a quiet evening that somehow meant everything.',
      image: '',
      tag: 'Recent',
    },
    {
      id: 'story-6',
      year: 'This year',
      title: 'A Special Moment This Year',
      description:
        'SAMPLE: the most recent chapter. A moment from the past year that deserves its own place in her story.',
      image: '',
      tag: 'Today',
    },
  ],

  // ---------- "Things That Make You, You" ----------
  traits: {
    heading: 'Things That Make You, You',
    intro: 'Fill these in with the real details — this is where her personality lives.',
    // Each card has a small icon, a label and a description.
    // Swap the icon name for any of: heart, sparkles, star, coffee, music,
    // camera, book, sun, smile, palette.
    favorites: [
      { id: 'fav-1', icon: 'coffee', label: 'Favourite Drink', text: 'SAMPLE: the drink she always orders.' },
      { id: 'fav-2', icon: 'music', label: 'On Repeat', text: 'SAMPLE: a song or artist she never skips.' },
      { id: 'fav-3', icon: 'book', label: 'Comfort Story', text: 'SAMPLE: a book, show or film she returns to.' },
      { id: 'fav-4', icon: 'palette', label: 'Her Aesthetic', text: 'SAMPLE: a colour, a vibe, a little ritual she loves.' },
      { id: 'fav-5', icon: 'sun', label: 'A Perfect Day', text: 'SAMPLE: how she would spend a free, unhurried day.' },
      { id: 'fav-6', icon: 'smile', label: 'Little Habit', text: 'SAMPLE: a tiny habit that is so unmistakably her.' },
    ],
  },

  // ---------- Navigation helpers ----------
  next: {
    label: 'Continue to Our Journey',
    hint: 'Where the two of you come in.',
  },
};
