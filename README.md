# Kris Hsu — portfolio

A Next.js portfolio for graduate and junior software-development opportunities in Australia. All eight projects are visible on the homepage: three selected works followed by five compact entries. Details open in place: native disclosures for the three featured works, and independent full-row panels for the five compact cards. Independent case URLs remain available for sharing. Real screenshot galleries and clear individual contributions are shared across both views. The homepage continues through Experience & Community, My Journey and Contact. Junior Ranger leads with the final version and retains the earlier prototype inside its evolution section.

## Run

Node 22 or later and npm:

```sh
npm ci
npm run dev
npm run build
npm start
npm test
```

The existing Vercel project remains the deployment target. Do not create a new hosting project or change domains. Review a branch preview before production promotion.

## Content

- `src/data/projects.js`: project order, gallery metadata, contributions and evidence links. Existing slugs are preserved, including `ThaimeUp`.
- `src/data/profile.js`: verified experience, community photos, education, personal story and internal provenance.
- `src/data/site.js`: confirmed public contact details and résumé configuration. Until Kris supplies his Neil-reviewed PDF, résumé links open an email request. When supplied, put it in `public/resume.pdf` and set `site.resume` to `/resume.pdf`.
- `docs/content-evidence.md`: source provenance and claim boundaries.

Use real screenshots. A single screenshot produces no carousel controls. Missing evidence links are omitted. Native links open case studies; external evidence is labelled and opens separately.

The Junior Ranger final demo is an optimised local copy in `public/videos/`. It is only loaded when requested, with native controls. The original supplied recording is unchanged. Phase-specific content is maintained in the project data.

## Accessibility and routes

Galleries use native horizontal scrolling, explicit buttons and keyboard arrow controls. Case images open a native modal dialog with Escape dismissal and focus restoration. Navigation provides a mobile disclosure, a skip link and visible focus states. Reduced motion is respected.

`/about` redirects to `/#about`, `/case-studies` redirects to `/projects`, and unknown case slugs return 404. Sitemap, robots, canonical URLs and share metadata are included.
