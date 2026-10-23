# Verification — 23 October 2026

## Final implementation checks

- Production build passes on Next.js 16.4.2. All eight independent case routes are generated.
- Seven integration tests pass against the local production server: all cases/canonicals, eight ordered homepage summaries and disclosure relationships, navigation/contact/profile context, Junior Ranger phases/deferred video, local gallery/photo assets, legacy redirects/404, and discovery/share endpoints.
- Five widths checked in the in-app Chromium browser: 320, 375, 768, 1280 and 1440 CSS pixels. Expanded ThaimeUp and SafeMind panels have no horizontal overflow. Both remain open independently. Desktop panels span the row; mobile DOM order puts each panel immediately after its own card.
- Keyboard Enter/Space opens project details. Bottom collapse now restores a visible originating trigger after removal of the panel. Verified on desktop and mobile after fixing a conflict with page-wide smooth scrolling. Navigation anchors now use ordinary document scrolling.
- Mobile navigation opens, closes after selection, and supports Escape. Gallery arrow keys, disabled endpoints, thumbnail navigation, enlargement, keyboard movement inside the dialog, Escape, restored focus and restored body scrolling were checked. The gallery retains native horizontal touch scrolling; a physical-device swipe test has not been performed.
- The final demo is absent as a video element until requested. On activation it loads the complete 240.768-second optimised copy, with native controls, no autoplay and no playback error. Space starts/pauses playback; collapsing the featured case pauses it.
- New Portfolio gallery screenshots show the actual implementation on desktop and mobile, with the previous version retained for comparison.
- Three authorised LinkedIn photos are stored locally with meaningful descriptions and visible source links. The original demo and private source/agreement remain unchanged and are not public downloads.
- `git diff --check` passes.

## Mobile Lighthouse laboratory measurements

Measured in native Chrome DevTools on the local **production build**, not the development server. Lighthouse 13.4.1, Chromium 155.0.0.0, emulated Moto G Power, Slow 4G, navigation / initial-page-load mode. Chrome remained foreground during each audit. These are valid single runs, unlike the earlier NO_FCP attempt.

| Page | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 96 | 100 | 100 | 100 | 0.9 s | 2.7 s | 0 ms | 0 |
| `/projects` | 95 | 100 | 100 | 100 | 0.8 s | 2.9 s | 10 ms | 0 |
| `/projects/junior-ranger` | 96 | 100 | 100 | 100 | 0.8 s | 2.8 s | 0 ms | 0 |

Captured approximately 14:02–14:04 AEST. The Performance 90 target is met in these lab runs. LCP remains above the 2.5-second target. A Lighthouse accessibility score does not certify accessibility; TBT is not INP. Results are not production-network or real-user Core Web Vitals data. No comparable before/after baseline is claimed. Final follow-up changes added below-fold Portfolio screenshots, refined text and corrected collapse scrolling; these scores describe the measured build.

Local screenshots and audit captures are in the parent workspace under `output/portfolio-qa/`. Only selected actual website screenshots are published as Portfolio gallery assets.

## Delivery and limits

- Vercel dashboard confirms repository `ruby23719111/kris-portfolio`, production source `main` and domain `krishsu.vercel.app`. Existing PR #1 and its branch preview are the release path.
- Neil-reviewed résumé PDF has not been supplied. All résumé entries use the approved, working `Request résumé` email path.
- Safari's earlier Food Buddy gallery check passed in the previous iteration. During this final iteration Safari could not provide an operable window after launch attempts, so the revised homepage and final video have **not** been reverified in Safari. Do not report that check as passed.
- No three-person recruiter reading study, physical-device test or real-user Core Web Vitals data was collected.
- Hey Jarvis and the other secondary projects retain authentic source imagery; additional screens have not been invented. Portfolio now has actual desktop/mobile screenshots. Junior Ranger final case has six extracted frames, with a separate early-version gallery.
- External evidence links preserve their verified source destinations; third-party login and availability restrictions remain outside the website.
- The earlier dependency audit found no runtime vulnerabilities, with five findings in the development-only ESLint dependency chain. No forced framework downgrade was applied.
