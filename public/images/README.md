# Add your photos here

Drop your image files into the matching folder:

- `gallery/` — photos for the **Memory Gallery** (any name, e.g. `memory-01.jpg`)
- `story/`  — photos for **Her Story** timeline entries
- `couple/` — photos for **Our Journey** (timeline + scrapbook)

Then update the `src` / `image` values in the matching file inside `src/data/`
so they point at your file, for example:

```js
src: '/images/gallery/memory-01.jpg'
```

Any image you have not added yet shows an elegant gradient "Photo coming soon"
placeholder instead of a broken image, so the site always looks finished.

Tip: keep files reasonably small (under ~500 KB) and roughly 4:3 or 3:4 so
they crop nicely in the framed layouts.
