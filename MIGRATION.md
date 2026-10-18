# Next.js migration verification

Completed on October 18, 2026. Next.js 16.4.2 was the stable npm `latest` release at migration time. The application uses JavaScript and App Router; React and React DOM resolve to 19.3.1.

The original Vite source and its production build were retained locally in `.migration-original/`. Verification scripts, JSON measurements, and full-page screenshots are in `.migration-tools/results/`. Both directories are ignored by Git.

## Implementation

- Replaced the Vite entry and React Router configuration with App Router pages and layouts. Each page renders its original component.
- Replaced React Router links and job parameters with `next/link` and `next/navigation`. Links retain the original scroll behavior, including navbar smooth-scroll handlers.
- Preserved the existing navbar, footer, page composition, content, classes, CSS values, asset bytes, and responsive breakpoints. No image optimization component, font substitution, or UI redesign was introduced.
- Added client boundaries for interactive components. Preserved the toaster, AOS initialization, and the `www.aaa-fe.com` redirect with pathname, query, and hash.
- Copied existing source assets to `public/assets` and converted asset references to public URLs. Existing public images retain their original paths.
- Loaded the original global styles in their original dependency order. Vite eagerly loaded route CSS, including global selectors that affect other pages; retaining that cascade avoids changes during navigation.
- Changed the navbar's nonfunctional outer anchor to a span because it wrapped other anchors. This prevents an SSR hydration error. Computed layout and dropdown behavior match the original.
- Converted the client-logo component's `<style jsx>` to an ordinary `<style>` because Vite treated it as global CSS. The original animation rules and values are preserved.
- The original blog CSS references a missing `writing.jpg`. Its URL is now absolute so Next.js can build; it still references the same missing asset. No replacement was added.

## Checks

`npm run build` passes. All 15 original route patterns were checked against the original Vite production build at widths of 1440, 768, and 390 pixels, with a 900-pixel viewport height.

| Route | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| `/` | Pass | Pass | Pass |
| `/explore` | Pass | Pass | Pass |
| `/career` | Pass | Pass | Pass |
| `/job/:id` (tested with `/job/1`) | Pass | Pass | Pass |
| `/contact` | Pass | Pass | Pass |
| `/gallery` | Pass | Pass | Pass |
| `/blog` | Pass | Pass | Pass |
| `/IT-Strategy` | Pass | Pass | Pass |
| `/Scope-of-works` | Pass | Pass | Pass |
| `/core-services` | Pass | Pass | Pass |
| `/HR-Strategy` | Pass | Pass | Pass |
| `/HR-Services` | Pass | Pass | Pass |
| `/IT-Services` | Pass | Pass | Pass |
| `/Career-Counselling` | Pass | Pass | Pass |
| `/Health-Tourism` | Pass | Pass | Pass |

All 45 checks returned HTTP 200 with matching page text, document heights, and element counts. No browser runtime or hydration errors were observed in the final checks. All 69 local assets were checked for unchanged bytes and successful HTTP responses. All 73 component sources were compared allowing only migration transformations, and all 24 CSS files retained their original property values. No React Router references remain in active source or dependencies. No TypeScript source files were added.

Desktop, tablet, and mobile interaction comparisons covered navbar menus and dropdowns, navbar and footer navigation, hero arrows, client-logo scrolling and hover pause, job navigation, the existing job-not-found state, form input, and the Health Tourism entrance animation. The original tablet-hidden hero behavior remains. Partner tabs and the review slider are commented out in the original page composition and remain unmounted.

## Observed differences and existing limitations

41 of 45 full-page screenshot pairs are byte-identical. Animations were disabled for screenshot capture only. Four pairs contain raster differences:

- Desktop `/core-services`: up to one RGB channel level in part of a gradient; original CSS values and layout are unchanged.
- Desktop `/explore` and `/IT-Strategy`, and mobile `/Health-Tourism`: differences confined to pixels inside the navbar logo. The logo file bytes, dimensions, placement, and CSS are unchanged. The observed difference is consistent with browser image rasterization during capture.

No functional differences were observed in the checks. These checks cover the listed routes, viewport sizes, and interactions; they do not establish pixel identity on every browser or viewport.

Some externally hosted images failed in both the original and migrated versions, including images on Explore, Gallery, HR Services, and Career Counselling. Both versions used the same external responses during route comparisons. Their URLs and existing fallback behavior remain unchanged. The original missing blog background remains missing. Existing forms and placeholder buttons retain their original behavior; no backend functionality was added.

Detailed evidence: `.migration-tools/results/summary.json`, `pixels.json`, `interactions.json`, and `source-audit.json`, plus the paired PNG and page JSON files.
