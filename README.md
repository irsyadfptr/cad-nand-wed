# Nand & Cad — a romantic comedy, three years running

A small site for Nand, built for our 3rd anniversary on 25 December 2026. React + Vite + GSAP.

- **Hero** — layered parallax poster with a live day count and a countdown ticket.
- **Starring** — the cast, with 3D tilt cards (and two cats as themselves).
- **Scenes** — a film reel of rom-com beats that scrolls sideways (GSAP ScrollTrigger).
- **Bloopers** — polaroid board plus a "Find Nand" mini game.
- **Critics** — reviews, rating and runtime.
- **Ticket counter** — 5-question quiz; 150 tickets unlocks the letter.
- **Trailer** — rendered with Remotion from `trailer/`.
- **Credits** — the end roll.

## Editing

All words, photos, quiz questions and the letter live in `src/content.js`. Lines marked `TODO` are placeholders.

Photos in `public/photos` and cut-outs in `public/cutouts` all share one colour grade.

## Run the site

```
npm install
npm run dev
npm run build
```

## Re-render the trailer

```
cd trailer
npm install
npm run studio   # preview and tweak in the browser
npm run render   # writes ../public/video/trailer.mp4
```

To use your own film instead, put it at `public/video/anniversary.mp4`; the page plays it in place of the trailer.
