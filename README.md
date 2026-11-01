# Kris Hsu — portfolio

A Next.js portfolio for graduate and junior IT roles in Australia (software development, business analysis, IT consulting).

The homepage is written for two readers: a recruiter scanning for 30 seconds, and a hiring manager who wants to see how Kris works. In order: headline and résumé link, an "at a glance" strip (target roles, availability, work rights, location), three selected projects, five more in a list, skills, experience, about and contact. Every project also has its own case page at `/projects/<slug>`.

## Run

Node 22 or later and npm:

```sh
npm ci
npm run dev        # http://localhost:3000
npm run build
PORT=4173 npm start
npm test           # needs the production server on port 4173 (or set TEST_BASE_URL)
```

The existing Vercel project remains the deployment target. Push to a branch, check the preview, then promote.

## Where things live

- `src/data/profile.js` — headline, at-a-glance facts, skills, experience, education, about text and photos.
- `src/data/projects.js` — all eight projects: order, featured flag, cover images, highlights, case-page content. Junior Ranger also has `architecture`, `video` and `phases` (the Phase 1 → Phase 2 comparison).
- `src/data/site.js` — email, links and the résumé path.
- `public/resume.pdf` — the résumé behind every "Résumé (PDF)" link. Replace this file to update it.
- `src/app/globals.css` — all styles. Colours and fonts are tokens at the top.
- `src/app/fonts/` — self-hosted Schibsted Grotesk and IBM Plex Mono (SIL Open Font License), so builds don't depend on Google Fonts.

## Accessibility and routes

Skip link, visible focus states, a keyboard-operable mobile menu, 44px touch targets and reduced-motion support. External links say they open in a new tab. The Junior Ranger demo video only downloads when the visitor presses play. On phones the Phase 1/Phase 2 table turns into stacked rows.

`/about` redirects to `/#about`, `/case-studies` redirects to `/projects`, and unknown case slugs return 404. Old `#selected-work` and `#journey` links still land on the right sections. Sitemap, robots, canonical URLs and share images are included.
