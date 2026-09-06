# Rakesh Lanjewar — Portfolio

Personal portfolio built with [Astro](https://astro.build). Deployed to [rakesh.link](https://rakesh.link) via Netlify from this repo.

## Theme

Single one-page site. A **client-side theme toggle** in the nav flips the `<html data-theme>` attribute between `dark` (default, tech-focused: gradient cyan→violet accents with a subtle grid backdrop) and `light` (minimal). The choice is saved to `localStorage` and applied before first paint (no flash, no page reload).

## Sections

hero → about → skills → projects → experience → education/certifications → contact

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
  layouts/      # Base.astro — html shell + theme init/toggle JS
  pages/        # index.astro (the single page)
  styles/       # global.css — design tokens for both themes
public/         # static assets, incl. downloadable CV
```

Content lives entirely in `src/data/site.ts` — update that file to change anything. Theme styling is driven entirely by `html[data-theme="dark|light"]` tokens in `src/styles/global.css`.

## Deploy

`netlify.toml` + `.nvmrc` (Node 20). Netlify runs `npm run build`, publishes `dist/`.
