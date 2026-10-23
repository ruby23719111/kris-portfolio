# Content evidence and publication boundaries

Reviewed 2026-10-23. Scope: the existing eight projects, five homepage sections and authorised supporting photos.

## Project claims

| Project | Evidence used | Personal contribution | Boundaries / missing material |
| --- | --- | --- | --- |
| Junior Ranger | Kris’s self-authored LinkedIn project description; supplied Phase 2 final demo, release-source ZIP and IFN736 artefact agreement; original Phase 1 screenshots and YouTube walkthrough | Initial independent prototype and iPhone camera/recognition workflow; team leadership; React Native / Expo integration with Flask and recognition/species APIs; datasets and Vertex models; narration; shared UI; Jira/GitHub coordination | Final capstone version, not a public launch. No reported accuracy, asset-size reduction, learning outcome or adoption metrics are published. Demo frames show an interaction, not field reliability. Source corroborates architecture but does not by itself prove individual authorship. Individual contribution statements come from Kris’s authored account. |
| QUT Food Buddy | Original project data; original composite and three extracted screenshots; existing YouTube walkthrough | Mobile development and UX/UI | API/authentication is wider project context; backend ownership and adoption are not verified. In-app name is QUT Meal Buddy. |
| Hey Jarvis | Original jarvis.png and linked public post; Kris explicitly confirmed product planning and UX/UI in this conversation | Product planning & UX/UI only | Team interface, not evidence of Kris implementing AI/backend. Only one original screen; no invented states. |
| ThaimeUp | Original data, screenshot and public repository README | Full-stack role | Coursework simulation; no commercial savings or restaurant adoption. |
| SafeMind | Original data, screenshot and YouTube link | UX and front-end | No measured reporting improvements or award added. |
| Building Tool-Enabled LLMs with MCP | Original data, screenshot and LinkedIn project post | Development/system design role, file search and retrieval integration | No complete public tool-schema or permissions audit. |
| VCINITY | Original data, screenshot and existing Figma prototype | UX/interaction design | Prototype, not shipped app or proven participation increase. |
| Personal Portfolio Website | This implementation, shared source and documented browser/build checks | Content/design and AI-assisted implementation | Technical checks recorded separately. Real-user comprehension, accessibility certification and hiring outcomes are not claimed. The gallery now includes verified desktop/mobile captures of this implementation, and the outcome records completed integration/layout/laboratory checks. |

## Junior Ranger: phase-specific evidence

The provided artefacts are:

- `T37JuniorRanger-Final-Demo.mp4` — approximately 4 minutes, supplied by Kris.
- `T37 JuniorRanger-Code-Final.zip` — release source, inspected read-only.
- `IFN736 - T37AstraTech - JuniorRanger - Artefact Agreement.pdf` — establishes an industry-linked university capstone and documents delivery limitations.

The release-source root README identifies `mobile/` as the current React Native frontend and earlier SwiftUI material as an older version. `mobile/package.json` and `mobile/README.md` corroborate React Native / Expo. `backend/requirements.txt` and its README corroborate Flask, photo validation/resizing and an authenticated service path to three Vertex model endpoints. The source also documents narration, retry/cancellation states and recognition acceptance checks. These documents were inspected; the Junior Ranger source suite and cloud services were not independently executed as part of the portfolio update.

Phase 1 uses the old screenshots and [earlier walkthrough](https://youtube.com/shorts/4QIalMF5-Is). The release source describes earlier SwiftUI work, but the exact build behind the screenshots is not matched to a revision. Its public phase-specific technology list is therefore empty. Google Vision and iNaturalist references belong to earlier/legacy material and are not presented as the final recognition stack.

Phase 2 is the primary gallery and video. Frames are extracted from the supplied final demo at approximately 7, 37, 52, 60, 78 and 172 seconds (home, mission categories, photo review, reward, quiz and games). An additional avatar frame at approximately 225 seconds is available if required. Delivery images preserve the portrait aspect ratio at 552 × 1200. The on-site MP4 is an optimised copy of the complete supplied demo, with native controls and click-to-load behaviour; the original is retained unchanged outside the repository.

No visual UI was generated for this portfolio. Original PNG screenshots remain in the repository for provenance. The recorded demonstration includes photographing a displayed wildlife image; it must not be described as evidence of outdoor field recognition. Prediction confidence is distinct from aggregate model accuracy. No model percentages are published without evaluation datasets and conditions.

## Experience, education and story

`src/data/profile.js` centralises published copy and internal source notes. Role titles and periods were read from Kris’s LinkedIn experience/education sections on the review date:

| Claim | Evidence | Publication treatment |
| --- | --- | --- |
| Pixelz360 AI App Developer internship, Jul 2026–present | LinkedIn experience | Current internship; client responsibilities and outcomes are not invented. |
| Junior Ranger industry project, 2026 | LinkedIn description, IFN736 agreement and release artefacts | Industry-linked capstone, linked to the same case. Not repackaged as a separate government job. |
| ACS Queensland Emerging Professionals Committee, Jan 2026–present | LinkedIn experience and authored committee post | Professional community contribution. |
| Women in Science QUT Student Mentor, Jul 2026–present | LinkedIn experience and authored mentoring post | Student mentoring; distinct from learning as a mentee. |
| Code Network Graphic Designer, Oct 2025–Jul 2026 | LinkedIn experience | Student-community design role; no invented work metrics. |
| AWS mentorship and Cisco MentorMe | LinkedIn headline/profile | Mentee participation; dates omitted because not confirmed. |
| Bachelor of Laws, National Chung Hsing University, 2014–2018 | LinkedIn education | Education timeline. |
| Tricontinental Master in Global Studies, Karlsruhe University of Applied Sciences, 2018–2021 | LinkedIn education | Global Studies programme. |
| Universidad de Monterrey, 2019 | LinkedIn education | Global Studies study experience; no separately claimed MBA while programme/degree relationship remains unverified. |
| QUT Master of Information Technology, 2025–2026 | LinkedIn education and Kris’s stated final-year status | Final-year study. No graduation month or work-rights statement added. |
| Legal coordinator at a Taiwan high-tech company; technical contracts and cross-department work with engineers sparked an interest in IT | Kris’s explicit account in this conversation | Included in personal story; employer and dates omitted. |
| Germany and Mexico were the first overseas living/study experiences and strengthened adaptability | Kris’s explicit account in this conversation | Personal reflection. No invented direct causal link to particular product concepts. |

My Journey is 161 English words. It connects the two confirmed experiences to current learning and development without inventing an employer, a dated career sequence or an additional degree.

## Authorised community photos

Kris explicitly authorised use of images from his LinkedIn posts. Three selected source images were downloaded through the browser, visually inspected, and optimised as local WebP delivery files. Captions distinguish committee/volunteer, event-representative and mentee roles:

| Local delivery asset | Source post | Context |
| --- | --- | --- |
| `/community/acs-tech-awards.webp` | [Kris’s ACS Queensland Tech Awards post](https://www.linkedin.com/feed/update/urn:li:activity:7511220916115394560/) | EPC member and event volunteer |
| `/community/qut-industry-night.webp` | [Kris’s QUT Tech Industry Night post](https://www.linkedin.com/feed/update/urn:li:activity:7494355022365741056/) | ACS industry booth representative |
| `/community/qut-mentoring.webp` | [Kris’s QUT mentoring post](https://www.linkedin.com/feed/update/urn:li:activity:7501253806005956608/) | With career mentor Craig Richards; Kris is a mentee in this photo |

Source links remain visible with the photos. Product screenshots remain the primary evidence for application projects. No substitute overseas photographs were generated.

## Contact and publication boundaries

The account owner confirmed public email `kriscchsu@gmail.com`. The Neil-reviewed résumé remains pending. `src/data/site.js` keeps a working “Request résumé” email link until that specific PDF is supplied. Other locally found résumés are not published.

Unconfirmed graduation month, availability, work rights, team sizes and metrics are omitted. Private student identifiers, emails and industry-contact details from the artefact agreement are not republished. The agreement/source ZIP are evidence for the content, not public downloads.

Build, interaction, responsive-layout and performance results belong in `docs/verification.md`, with completed and pending checks separated. Deployment uses the existing GitHub repository and Vercel project; no new host or domain is introduced.
