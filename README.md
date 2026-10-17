# Mariya — A Birthday Surprise Website

A romantic, three-page birthday surprise built with **React + Vite (JavaScript only)**.
It is a **frontend-only static site** — no backend, no database, no accounts.

Everything you might want to change — names, dates, messages, stories, captions and
photos — lives in a handful of easy-to-edit files in `src/data/`. You do **not** need
to touch any layout or animation code.

---

## 1. Run the website

```bash
npm install     # only needed the first time
npm run dev     # start the site at http://localhost:5173
```

Other useful commands:

```bash
npm run build     # create a production build in the dist/ folder
npm run preview   # preview the production build locally
npm run lint      # check the code for mistakes
```

---

## 2. The three pages

| Page | Route | What it contains |
| --- | --- | --- |
| **Birthday** | `/` | Opening scene, the interactive 3D cake, wishes, qualities, photo preview, closing message |
| **Her Story** | `/her-story` | Her life timeline, the photo gallery + lightbox, "Things That Make You, You" |
| **Our Journey** | `/our-journey` | Relationship timeline, scrapbook, future dreams, the birthday letter, finale |

Navigation is shared across all pages (top bar on desktop, dropdown menu on mobile).

---

## 3. Personalise the content (start here)

Open these six files in `src/data/`. Each one begins with comments explaining how to
edit it. Only change the text inside quotes.

| File | Controls |
| --- | --- |
| `siteConfig.js` | **The single source of truth:** her name, her age, the birthday (day + month) and the boyfriend's name |
| `birthdayData.js` | Hero title & message, cake messages, wishes, qualities, compliments, closing text |
| `storyData.js` | The life timeline entries, its section heading, and the "Things That Make You, You" cards |
| `relationshipData.js` | The relationship timeline, scrapbook captions, future dreams and the **letter** |
| `galleryData.js` | Every gallery photo (path, alt text, caption, date, frame shape) and the home-page preview selection |
| `uiText.js` | Navigation labels, button text, section eyebrows, cake-control labels and accessibility strings |

Her name, age and the couple's names are written **only** in `siteConfig.js`. Every other
data file imports them, so changing them in one place updates the whole website.

### Change her name, age and birthday

In **`src/data/siteConfig.js`**:

```js
girlName: 'Mariya',
age: 20,
birthday: {
  day: 29,
  month: 4, // 4 = April  ->  shown as "29 April" and "29/04"
},
boyfriendName: 'Refi',
```

> Only the day and month of the birthday are known, so no birth year is stored.
> Change `girlName` and it updates in the headings, the letter, the navigation and the
> browser tab. Change `age` and every "20th birthday" reference follows. Change
> `birthday.day` / `birthday.month` and every date display follows.

### Change the boyfriend's name and the birthday letter

`boyfriendName` in **`src/data/siteConfig.js`** signs the letter and the footer.

The letter itself lives in **`src/data/relationshipData.js`** → `letter`:

```js
letter: {
  greeting: `My dearest ${siteConfig.girlName},`, // uses her name automatically
  paragraphs: [
    'First paragraph...',
    'Second paragraph...',
  ],
  closing: 'The last line before the signature.',
  signOff: 'Always yours,', // the signature name comes from boyfriendName
},
```

---

## 4. Replace the photos

1. Put your images in the matching folder:

   ```
   public/images/gallery/   →  the Memory Gallery
   public/images/story/     →  Her Story timeline
   public/images/couple/    →  Our Journey timeline & scrapbook
   ```

2. Point the data files at them, e.g. in `galleryData.js`:

   ```js
   {
     id: 1,
     src: '/images/gallery/memory-01.jpg',
     alt: 'A short description for accessibility',
     caption: 'The text shown under the photo',
     date: 'June 2024',
     category: 'Us',
     size: 'portrait', // 'portrait' | 'landscape' | 'square'
   }
   ```

Any image that is missing automatically shows a soft gradient
**"Photo coming soon"** tile instead of a broken-image icon, so the site always
looks complete while you are still adding pictures.

---

## 5. How the interactive cake works

- Tap the **cake** or the **“Add a Candle”** button to add candles (up to the
  `maxCandles` limit in `birthdayData.js`, currently 5). The button disables itself
  once the limit is reached.
- **“Remove One Candle”** takes the most recently added candle off the cake.
- Tap an individual **candle** to light it or blow it out. When you blow one out its
  flame fades, and then that candle removes itself from the cake automatically.
- **“Light All Candles”** lights every candle on the cake.
- **“Blow Out Candles”** puts them all out with a short confetti celebration; the
  unlit candles then fade away and are removed.
- Candles are spaced evenly across the top tier by a single responsive layout, so they
  stay centred and balanced whether there is one candle or five, on desktop or mobile.

The maximum number of candles lives in `birthdayData.js` → `cake.maxCandles`; the
button labels and instructions live in `uiText.js` → `cake`.

---

## 6. Project structure

```
src/
├── components/     small reusable pieces (Navbar, BirthdayCake, Candle, PhotoGallery,
│                   Lightbox, Timeline, BirthdayLetter, Confetti, …)
├── data/           ALL editable content lives here
├── hooks/          small custom hooks (reduced-motion preference)
├── pages/          the three pages (BirthdayHome, HerStory, OurJourney)
├── styles/         global.css, animations.css, components.css
├── utils/          date + text helpers used by the data layer
├── App.jsx         routes + shared layout
└── main.jsx        app entry point
public/
└── images/         your photos go here (gallery / story / couple)
```

---

## 7. Good to know

- **Reduced motion:** visitors who ask their device for less animation automatically
  get a calmer experience (floating hearts and confetti are skipped).
- **Accessibility:** the gallery lightbox and the letter are keyboard-friendly
  (`Esc` to close, arrow keys to move between photos), and the cake buttons have
  visible focus and disabled states.
- **No tracking, no forms, no servers.** The site is fully static and can be hosted
  anywhere (GitHub Pages, Netlify, Vercel, or even opened from the built `dist/` folder).
- Browsers cannot load custom fonts or the “/images” paths when you open the HTML file
  directly with `file://`. Always run it through `npm run dev` / `npm run preview`, or
  host the built `dist/` folder.

Made with love. Happy birthday, Mariya.
