# SEO and performance audit

Completed October 18, 2026. No intentional visual changes. Public URL spelling and capitalization, visible text, CSS, image sources and bytes, typography, dimensions, responsive rules, animations, and existing application behavior are preserved.

## SEO

- All 15 route pages use the Next.js Metadata API, with distinct factual titles and descriptions drawn from their existing content. The title suffix is `AAA Future-Edge`.
- Canonicals and Open Graph URLs use `https://aaa-fe.com`, the origin already present in the application's www redirect. Open Graph metadata includes each page's title, description, website type, site name, and the existing `/assets/logo/Future-Edge.jpg` asset.
- The root layout defines `metadataBase`. The existing PNG favicon keeps its URL and gains the correct `image/png` MIME type.
- `src/app/robots.js` permits public crawling and references the sitemap. `src/app/sitemap.js` lists the 14 static pages plus `/job/1`, using the shared job data. No invented modification dates, change frequencies, keywords, or company claims were added.
- `/job/1` metadata includes the existing employer, location, job type, and June 2024 deadline; it does not claim the vacancy is current. Other job IDs retain their existing rendered missing-job state and HTTP behavior, with `noindex, follow`. Existing numeric ID aliases retain their matching behavior and canonicalize to `/job/1`.

| Preserved route | Title before the site-name suffix | Verification |
| --- | --- | --- |
| `/` | Management Consulting | Pass |
| `/explore` | Explore Us | Pass |
| `/career` | Career | Pass |
| `/job/1` (pattern `/job/[id]`) | Junior Full Stack Developer | Pass |
| `/contact` | Contact Us | Pass |
| `/gallery` | Gallery | Pass |
| `/blog` | Blogs | Pass |
| `/IT-Strategy` | IT Strategy | Pass |
| `/Scope-of-works` | Scope of Works | Pass |
| `/core-services` | Core Services | Pass |
| `/HR-Strategy` | HR Strategy | Pass |
| `/HR-Services` | HR Services | Pass |
| `/IT-Services` | IT Services | Pass |
| `/Career-Counselling` | Career Counselling | Pass |
| `/Health-Tourism` | Health Tourism | Pass |

## Semantics and accessibility

- Exactly one H1 is present in each valid page's generated HTML. Existing banner titles become H1s, secondary section/article/navigation headings become H2s, and the home page's two responsive title variants remain inside one `display: contents` H1. Classes, text, and the original responsive title boxes are retained. Chromium's accessibility tree exposes the home title as a single level-one heading.
- Corrected the local HR Strategy illustration's alt text after inspecting the actual image: a job search illustration with a person using a laptop.
- Added a factual iframe title identifying the existing embedded Goinnovior Limited map.
- Audited rendered image sources and alt attributes across all routes. Existing gallery/article labels remain derived from their own content. Unverified remote imagery, generic labels, empty decorative alternatives, and existing mislabeled remote alternatives were not rewritten speculatively. Some remote images fail in this environment, where changing alt text can also change visible fallback text; the absolute visual-preservation rule takes precedence.

## Performance

- Converted job details to a Server Component, passing awaited route parameters from the server page. Moved the unchanged job data to a shared module used by rendering, metadata, and the sitemap. `/job/1` is now prerendered through `generateStaticParams`; other IDs remain supported as before. The job component/data no longer appear as client references in its built client manifest. Native form inputs and validation remain intact.
- Removed unused Footer state, its unused handler and chevron imports, and an unused home-page partner-tabs import. Interactive client boundaries remain for the Navbar, Footer alerts, hero carousel, client-logo image fallbacks, AOS, and Health Tourism animation.
- Removed the genuinely unused `swiper` dependency and its lockfile entry. Retained the active `react-multi-carousel`, AOS, toaster, React, and icon dependencies.
- Removed two invalid, ineffective `classNameName` icon props on Explore that caused a development hydration attribute mismatch. Existing icon geometry is preserved; the props were not converted to active CSS classes.
- Reviewed images and fonts. No image replacement, compression, `next/image` conversion, loading-delay change, font substitution, or CSS optimization was made because exact appearance and loading behavior could be affected. Existing font-family declarations and fallbacks are unchanged.
- Sampled layout shifts at 1440 × 900: home approximately 0.068, job detail 0, HR Strategy 0. The existing home carousel initializes on the client. Its sizing and animation code remain unchanged; this audit does not claim to eliminate the existing home shift or establish field Core Web Vitals.

## Validation and limits

- Final `npm.cmd run build`: **PASS**, Next.js 16.4.2. PowerShell's npm launcher is bypassed with `npm.cmd`. The existing stale Browserslist-data notice remains.
- All 15 valid routes returned HTTP 200 at widths 1440, 768, and 390, with viewport height 900: **45 successful route checks**.
- All 15 titles/descriptions are unique; canonical URLs, Open Graph metadata, one-H1 counts, sitemap membership, robots output, missing-job noindex metadata, and job alias canonicals pass automated assertions.
- All 69 local public assets returned HTTP 200 with bytes identical to their local files. Before/after image URLs and browser load-success states are identical. No assets were edited.
- All 45 comparisons have identical visible text and document heights. Measured styles and rectangles match, accounting for the extra boxless home H1, independent phases of the unchanged client-logo animation, and one blog computed-margin serialization difference with identical element geometry. No stylesheet files were changed.
- Desktop home and Scope of Works full-page screenshots are byte-identical before/after when animations are disabled for capture only. The final Explore hydration fix also preserves measured geometry at all three widths.
- Exercised desktop solution/services dropdowns and navigation, mobile menu opening/navigation, Footer navigation and its existing alert, both hero arrows, moving client logos and hover pause, career/job navigation, native job form input, missing-job display, and Health Tourism entrance animation: **PASS**.
- No JavaScript runtime or hydration errors were observed in the production route and interaction checks. The Explore development hydration mismatch is resolved; an existing unrelated `class` versus `className` development warning remains.
- Remote image requests fail in this environment and the existing `/writing.jpg` blog background is missing. Their sources and fallback behavior were retained. These checks therefore cannot certify how remote assets render when successfully loaded, every browser/viewport, or every possible interaction.

Detailed local evidence and the standalone browser fallback scripts are in the ignored `.migration-tools/seo/` directory and `.migration-tools/*seo*.mjs`. The in-app browser tool failed before bootstrap because its transport lacked a sandbox-policy field; local Chromium was used for verification. Validation tooling added no application dependency.

## Files changed

The inventory below includes all implementation changes and this report. No CSS or public asset files changed.

- `SEO-PERFORMANCE-AUDIT.md`
- `package-lock.json`
- `package.json`
- `src/app/(website)/Career-Counselling/page.js`
- `src/app/(website)/HR-Services/page.js`
- `src/app/(website)/HR-Strategy/page.js`
- `src/app/(website)/Health-Tourism/page.js`
- `src/app/(website)/IT-Services/page.js`
- `src/app/(website)/IT-Strategy/page.js`
- `src/app/(website)/Scope-of-works/page.js`
- `src/app/(website)/blog/page.js`
- `src/app/(website)/career/page.js`
- `src/app/(website)/contact/page.js`
- `src/app/(website)/core-services/page.js`
- `src/app/(website)/explore/page.js`
- `src/app/(website)/gallery/page.js`
- `src/app/(website)/job/[id]/page.js`
- `src/app/(website)/page.js`
- `src/app/layout.js`
- `src/app/robots.js`
- `src/app/sitemap.js`
- `src/components/Home/About/About.jsx`
- `src/components/Home/Root.jsx`
- `src/components/Others/Blogs/BlogBanner.jsx`
- `src/components/Others/Blogs/BlogMain.jsx`
- `src/components/Others/Career/CareerBanner.jsx`
- `src/components/Others/Career/JobDetails.jsx`
- `src/components/Others/ContactUs/ContactBanner.jsx`
- `src/components/Others/ContactUs/ContactMap.jsx`
- `src/components/Others/ExploreUs/ExploreAboutAAA.jsx`
- `src/components/Others/ExploreUs/ExploreBanner.jsx`
- `src/components/Others/Services/Career-Counciling/CareerCouncilingAbout.jsx`
- `src/components/Others/Services/Career-Counciling/CareerCouncilingBanner.jsx`
- `src/components/Others/Services/Core Services/PopularOfferings.jsx`
- `src/components/Others/Services/HR-Service/Compliance.jsx`
- `src/components/Others/Services/HR-Service/HRServiceBanner.jsx`
- `src/components/Others/Services/IT-Service/CoreITService.jsx`
- `src/components/Others/Services/IT-Service/ITServiceBanner.jsx`
- `src/components/Others/Services/IT-Service/ITServiceChoose.jsx`
- `src/components/Others/Solutions/HR/HRBanner.jsx`
- `src/components/Others/Solutions/HR/TalentManagement.jsx`
- `src/components/Others/Solutions/IT/ITBanner.jsx`
- `src/components/Others/Solutions/IT/Infrastructure.jsx`
- `src/components/Others/Solutions/IT/PlanningPolicy.jsx`
- `src/components/Others/Solutions/IT/Security.jsx`
- `src/components/Scope of works/ScopeOfWorks.jsx`
- `src/components/Shared/Footer/Footer.jsx`
- `src/components/Shared/Navbar/Navbar.jsx`
- `src/data/job-details.js`
- `src/lib/seo.js`
