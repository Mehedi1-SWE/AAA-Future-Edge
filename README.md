# AAA Future Edge

A corporate **HR, IT, career counselling, and professional consultancy website** migrated from React/Vite to **Next.js**, while preserving the existing design, functionality, responsiveness, and user experience.

**Live Demo:** https://aaa-future-edge-omega.vercel.app/

## Project Overview

AAA Future Edge is a corporate consultancy website providing information about HR services, IT services, career counselling, health tourism, and related professional solutions.

This project was migrated from a React/Vite architecture to **Next.js App Router** while maintaining visual parity with the original website. The migration also includes SEO improvements, server-side rendering improvements, prerendering, and code cleanup without intentionally changing the existing UI.

## React/Vite → Next.js Migration

The migration preserves the existing:

- UI and design
- Page layouts
- Responsive behavior
- Content
- Images and assets
- Typography, colors, and spacing
- Animations
- Navigation
- Existing functionality
- Public route structure

## Features

- Responsive corporate website
- HR consultancy services
- IT strategy and services
- Career counselling
- Health tourism
- Career and job details
- Blog and gallery sections
- Contact page
- Responsive navigation
- Hero and client-logo carousels
- SEO-friendly metadata
- Sitemap and robots configuration
- Server-rendered job details

## Tech Stack

- Next.js 16.4.2
- React
- JavaScript
- Tailwind CSS
- AOS
- React Multi Carousel
- React Hot Toast
- React Icons

## SEO Optimization

The project includes:

- Unique titles and descriptions for all 15 valid routes
- Next.js Metadata API
- Canonical URLs
- Open Graph metadata
- `metadataBase`
- `robots.js`
- `sitemap.js`
- One primary H1 per valid page
- Image alternative-text review
- Job-specific metadata

Key SEO files:

```text
src/lib/seo.js
src/app/layout.js
src/app/robots.js
src/app/sitemap.js
```

## Performance Optimization

Performance-related improvements include:

- Server Component usage for job details
- Static prerendering for `/job/1`
- Shared job data module
- Reduced unnecessary client-side code
- Removal of unused state, handlers, and imports
- Removal of the unused Swiper dependency
- Explore-page hydration mismatch fix
- Production build and route verification

Existing visual behavior and animations were intentionally preserved.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/explore` | Explore Us |
| `/career` | Career |
| `/job/1` | Job Details |
| `/contact` | Contact Us |
| `/gallery` | Gallery |
| `/blog` | Blogs |
| `/IT-Strategy` | IT Strategy |
| `/Scope-of-works` | Scope of Works |
| `/core-services` | Core Services |
| `/HR-Strategy` | HR Strategy |
| `/HR-Services` | HR Services |
| `/IT-Services` | IT Services |
| `/Career-Counselling` | Career Counselling |
| `/Health-Tourism` | Health Tourism |

Public route spelling and capitalization are preserved from the existing application.

## Project Structure

```text
AAA-Future-Edge/
├── public/
├── src/
│   ├── app/
│   │   ├── (website)/
│   │   ├── layout.js
│   │   ├── robots.js
│   │   └── sitemap.js
│   ├── components/
│   ├── data/
│   │   └── job-details.js
│   └── lib/
│       └── seo.js
├── next.config.js
├── package.json
├── tailwind.config.js
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Mehedi1-SWE/AAA-Future-Edge.git
cd AAA-Future-Edge
```

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## Validation

- Production build passed
- 15 valid routes verified
- 45 route/viewport checks passed
- Desktop, tablet, and mobile widths checked
- 69 local assets verified
- Navbar and Footer verified
- Interactive functionality verified
- SEO metadata, sitemap, and robots output verified
- No production hydration errors observed
- No production JavaScript runtime errors observed
- No intentional visual changes introduced during SEO/performance optimization

See [MIGRATION.md](MIGRATION.md) and [SEO-PERFORMANCE-AUDIT.md](SEO-PERFORMANCE-AUDIT.md) for implementation and verification details.

## Migration Goal

**Visual Parity + Next.js Migration + SEO + Performance Optimization**

## Author

**Mehedi Hasan**

GitHub: https://github.com/Mehedi1-SWE
