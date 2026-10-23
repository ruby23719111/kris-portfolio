# Verification — 23 October 2026

## Single-page update

- All eight projects now appear on home, in the original priority order. Every entry has native, initially collapsed details containing the same case data, with independent case links retained.
- Verified keyboard Enter/Space disclosure operation for all eight projects without navigating away. The open summary remains available beneath the sticky header for closing long sections.
- Checked the expanded ThaimeUp layout at actual 320, 375, 768, 1280 and 1440px viewports: no horizontal overflow. Inspected desktop and mobile presentation and verified the mobile Work link closes the menu and moves to the homepage work section.
- Updated homepage integration coverage; all four tests and the production build pass. No browser errors were recorded during this flow.
- These checks cover the single-page update; the original Lighthouse and résumé limitations below remain unchanged.

## Completed

- Production build: Next.js 16.4.2, all eight case routes generated.
- Four HTTP integration tests pass against the production server: case routes and assets, homepage content, redirects/404, sitemap/robots/share image.
- Chrome responsive checks at 320, 375, 768, 1280 and 1440 CSS pixels: homepage, projects and Junior Ranger case. No visible text clipping, image distortion or unintended horizontal overflow.
- Chrome/in-app browser: gallery navigation, disabled endpoints, image loading, enlargement, Escape and focus restoration checked.
- Safari: Food Buddy gallery navigation, enlargement and Escape dismissal checked.
- Production dependency audit: no known vulnerabilities at the time of the check.
- `git diff --check` passes.

Local screenshots are saved in the parent workspace under `output/portfolio-qa/`; they are not published as repository assets.

## Still required / limitations

- Neil-reviewed résumé PDF is pending from Kris. The live implementation uses an explicit “Request résumé” email link, not an unapproved older file.
- Lighthouse mobile audit was attempted in Chrome DevTools but returned `NO_FCP` after the browser lost foreground focus. This is an invalid run: no performance score or Core Web Vitals pass is claimed. A valid three-page audit and comparable pre-change baseline remain outstanding.
- No three-person recruitment reading study or real-user Core Web Vitals data was collected.
- Jarvis and the five secondary projects have one source screenshot each. Junior Ranger and Food Buddy each have an overview plus three extracted original screens. Further genuine screenshots can be added without changing the gallery component.
- External evidence links retain their original destinations; availability behind sign-in or third-party restrictions is not guaranteed.
- The development-only audit chain through `eslint-config-next` has five high findings; its suggested fix would downgrade the framework lint configuration. Runtime dependencies are clean. No forced downgrade was applied.

Production promotion should follow a successful branch preview and confirmation of the existing Vercel domain binding. No new hosting project or domain is needed.
