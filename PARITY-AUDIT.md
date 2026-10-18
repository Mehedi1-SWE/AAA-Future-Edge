# Migration parity audit

Audited October 18, 2026 against `.migration-original/src` and its retained Vite production build. No application source, CSS, Tailwind values, dependencies, or assets were changed during this audit.

## Route coverage

Each route was compared at 1440, 768, and 390 pixels wide, with a 900-pixel viewport height.

| Original route | Next.js route | Result |
| --- | --- | --- |
| `/` | `/` | Pass |
| `/explore` | `/explore` | Pass |
| `/career` | `/career` | Pass |
| `/job/:id` | `/job/[id]` (URL `/job/1`) | Pass |
| `/contact` | `/contact` | Pass |
| `/gallery` | `/gallery` | Pass |
| `/blog` | `/blog` | Pass |
| `/IT-Strategy` | `/IT-Strategy` | Pass |
| `/Scope-of-works` | `/Scope-of-works` | Pass |
| `/core-services` | `/core-services` | Pass |
| `/HR-Strategy` | `/HR-Strategy` | Pass |
| `/HR-Services` | `/HR-Services` | Pass |
| `/IT-Services` | `/IT-Services` | Pass |
| `/Career-Counselling` | `/Career-Counselling` | Pass |
| `/Health-Tourism` | `/Health-Tourism` | Pass |

## Findings

- All 45 comparisons returned HTTP 200, with matching page text, element counts, and document heights. Measured layout, colors, typography, spacing, backgrounds, and section order match after accounting for equivalent CSS serialization, subpixel rounding, and independently timed continuous animation.
- Compared 73 component sources and 24 component CSS files. Classes and CSS property values match the original, allowing the existing Next.js migration transformations. Global stylesheet entry and Tailwind theme settings were also inspected.
- All 69 retained local assets have identical bytes and return successful HTTP responses. All 41 imported image/media references map to the correct public URLs. No local image failures were observed.
- Navbar, Footer, desktop and mobile menus, dropdowns, carousel arrows, client-logo animation, hover behavior, footer and navbar navigation, career/job navigation, the `/job/2` not-found state, job form input, and Health Tourism entrance animation produced matching results at the tested widths. The original hidden tablet hero and unmounted partner/review components remain as supplied.
- No `react-router-dom`, `BrowserRouter`, `RouterProvider`, or `useNavigate` references remain in active source, package.json, or package-lock.json. Original internal router links use `next/link`; job parameters use `next/navigation`. All 15 App Router page exports resolve to their original route components.
- No JavaScript runtime or hydration errors were observed. The production build found no broken imports.

## Mismatches and fixes

No actionable migration mismatch was found. No application fixes or UI changes were made.

The existing Navbar outer anchor-to-span conversion prevents invalid nested anchors during server rendering; its classes and measured geometry remain equivalent. Gradient strings serialize differently between build tools but retain the original values and appearance. A desktop job-form width differs by approximately 0.016 pixels due to generated CSS rounding. These do not warrant changing the original CSS.

## Remaining limitations

External image/font requests are blocked by this environment and produce `ERR_NETWORK_ACCESS_DENIED` console resource messages. The same remote URLs remain in both implementations. Consequently this run cannot certify the appearance of successfully loaded remote resources or claim a completely error-free console. Local assets were verified independently. The original missing `writing.jpg` blog background remains missing; no replacement was introduced.

Continuous animation phases differ between independently loaded pages. Screenshots pause animation for measurement; matching animation behavior was checked separately. Coverage is limited to the listed viewports and exercised interactions; it does not certify every browser or every possible user action. Existing placeholder buttons and form behavior were preserved.

## Build

`npm run build` passed using `npm.cmd run build` because PowerShell blocks the npm.ps1 launcher. Next.js 16.4.2 successfully compiled and generated the original 15 route patterns, including the dynamic job route.

## Evidence

Fresh audit measurements, paired screenshots, source/asset checks, console output, and interaction results are in `.migration-tools/parity-audit/`. These are separate from the earlier migration evidence in `.migration-tools/results/`.

- `summary.json`: all route/viewport comparisons.
- `reviewed-differences.json`: comparison after reviewing serialization and animation differences.
- `source-audit.json`: component, CSS, and asset checks.
- `interactions.json`: original/Next.js interaction results.
- `console.json`: production console resource errors.

Example desktop capture (remote resources blocked as described above):

![Next.js desktop audit capture](.migration-tools/parity-audit/1440-home-next.png)
