# Rakesh Lanjewar — Portfolio

Personal portfolio built with [Astro](https://astro.build). Deployed to [rakesh.link](https://rakesh.link) via Netlify from this repo.

## Routes / themes

- `/` — **Dark theme** (default, tech-focused) — gradient cyan→violet accents with a subtle grid backdrop.
- `/light` — **Light theme** (minimal alt). Toggle in the nav swaps between them.

Same one-page content on both: hero → about → skills → projects → experience → education/certifications → contact.

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built site
```

## Structure

```
src/
  components/   # Nav, Hero, About, Skills, Projects, Experience, Education, Contact, Footer
  data/site.ts  # all content (resume-derived) in one place
  layouts/      # Base.astro — html shell + shared theme CSS
  pages/        # index.astro (dark), light.astro (light)
  styles/       # global.css — design tokens + styles for both themes
public/         # static assets, incl. downloadable CV
```

Content lives entirely in `src/data/site.ts` — update that file to change anything.

## Deploy

`netlify.toml` + `.nvmrc` (Node 20). Netlify runs `npm run build`, publishes `dist/`.
