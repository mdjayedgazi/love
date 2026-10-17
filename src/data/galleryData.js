/*
 * ============================================================
 *  GALLERY  —  every photo shown in the Memory Gallery.
 * ============================================================
 *
 *  The real photographs live in:  public/images/gallery/
 *  They are referenced with browser URLs that start with
 *  '/images/gallery/' (NOT 'public/images/...' and never an absolute
 *  path like '/home/you/...' — the browser cannot read those).
 *
 *  Spaces and brackets in the filenames are encoded automatically with
 *  encodeURIComponent() below, so you can write plain filenames here.
 *
 *  HOW TO EDIT A PHOTO:
 *  - file     : the exact filename inside public/images/gallery/
 *  - alt      : a short description read by screen readers
 *  - caption  : the text shown on the photo
 *  - category : shown in the lightbox caption
 *  - date     : optional, shown in the lightbox (leave '' to hide)
 *  - size     : frame shape — 'portrait' | 'landscape' | 'square'
 *
 *  If a file is missing, SmartImage shows a pretty gradient
 *  "Photo coming soon" placeholder instead of a broken image, so the
 *  layout always looks finished.
 */

const galleryPhotos = [
  {
    file: 'WhatsApp Image 2026-10-17 at 7.47.46 PM.jpeg',
    alt: 'A mirror selfie in a black abaya and niqab, with a glowing round light on a dark wall behind',
    caption: 'A mirror selfie',
    category: 'Mirror selfies',
    date: '',
    size: 'portrait',
  },
  {
    file: 'WhatsApp Image 2026-10-17 at 7.47.47 PM (1).jpeg',
    alt: 'A mirror selfie of a couple inside a lift',
    caption: 'Together',
    category: 'Together',
    date: '',
    size: 'portrait',
  },
  {
    file: 'WhatsApp Image 2026-10-17 at 7.47.47 PM (2).jpeg',
    alt: 'A couple taking a mirror selfie in a warmly lit room',
    caption: 'All dressed up',
    category: 'Together',
    date: '',
    size: 'portrait',
  },
  {
    file: 'WhatsApp Image 2026-10-17 at 7.47.47 PM.jpeg',
    alt: 'A couple standing together outdoors beside a blue wall with plants',
    caption: 'Out together',
    category: 'Outdoors',
    date: '',
    size: 'portrait',
  },
  {
    file: 'WhatsApp Image 2026-10-17 at 7.47.48 PM (1).jpeg',
    alt: 'A couple standing together in a sunflower field',
    caption: 'Among the sunflowers',
    category: 'Outdoors',
    date: '',
    size: 'landscape',
  },
  {
    file: 'WhatsApp Image 2026-10-17 at 7.47.48 PM (2).jpeg',
    alt: 'A couple standing together indoors by a yellow wall',
    caption: 'A day out',
    category: 'Together',
    date: '',
    size: 'portrait',
  },
  {
    file: 'WhatsApp Image 2026-10-17 at 7.47.48 PM (3).jpeg',
    alt: 'A couple taking a mirror selfie together',
    caption: 'A mirror selfie together',
    category: 'Mirror selfies',
    date: '',
    size: 'portrait',
  },
  {
    file: 'WhatsApp Image 2026-10-17 at 7.47.48 PM.jpeg',
    alt: 'A couple taking a selfie at night beneath string lights',
    caption: 'An evening under the lights',
    category: 'Evenings',
    date: '',
    size: 'portrait',
  },
  {
    file: 'WhatsApp Image 2026-10-17 at 7.47.49 PM.jpeg',
    alt: 'A couple indoors holding a bouquet of flowers',
    caption: 'With a bouquet',
    category: 'Together',
    date: '',
    size: 'portrait',
  },
];

export const galleryData = {
  heading: 'Memory Gallery',
  intro: 'Nine little windows into our world. Tap any photograph to see it up close.',
  // Build the browser URLs from the filenames above, encoding spaces etc.
  images: galleryPhotos.map((photo, index) => ({
    id: index + 1,
    src: `/images/gallery/${encodeURIComponent(photo.file)}`,
    alt: photo.alt,
    caption: photo.caption,
    date: photo.date,
    category: photo.category,
    size: photo.size,
  })),
};

/*
 * Which gallery photos appear as a small preview on the Birthday home page.
 * These are gallery image "id" values from the list above.
 */
export const homePreviewIds = [1, 4, 5, 8];
