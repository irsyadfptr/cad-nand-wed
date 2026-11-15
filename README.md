# Nand & Cad — three years, two cats

A small site for Nand, built for our 3rd anniversary on 25 December 2026. React + Vite + GSAP.

- **Hero** — layered parallax with a live day count and a countdown to 25 December.
- **Meet the cats** — the two of us as cats, in cat-ear photo frames.
- **Purr-fect moments** — a photo wall whose columns drift at different speeds.
- **Cat-astrophes** — the bloopers, plus a "Find Nand" mini game.
- **Three years in numbers** — the live day count and a few silly stats.
- **Feed the cats** — a 5-question quiz; each right answer drops a fish in the bowl, five fish open the letter.
- **A little film for you** — rendered with Remotion from `trailer/`.
- **Happy 3rd anniversary** — the finale.

## Editing

All words, photos, quiz questions and the letter live in `src/content.js`. Lines marked `TODO` are placeholders.

Photos in `public/photos` and cut-outs in `public/cutouts` all share one colour grade.

## Run the site

```
npm install
npm run dev
npm run build
```

## Re-render the film

```
cd trailer
npm install
npm run studio   # preview and tweak in the browser
npm run render   # writes ../public/video/trailer.mp4
```

To use your own film instead, put it at `public/video/anniversary.mp4`; the page plays it in place of the trailer.
