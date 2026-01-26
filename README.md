# Muhammad Awais - Full Stack Developer Portfolio

A production-grade portfolio website built with Next.js, showcasing 3+ years of full-stack development experience. Optimized for SEO, performance, and recruiter appeal.

## Key Features

### 🎯 SEO Optimization
- **Metadata**: Comprehensive meta tags with Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schemas for Person and WebSite types
- **Sitemap**: XML sitemap with weekly/monthly update frequencies
- **Robots.txt**: Optimized crawl directives for search engines
- **Performance**: Core Web Vitals optimized (Lighthouse 95+)
- **Keywords**: Targeted around Full Stack, React, Next.js, Node.js development

### ♿ Accessibility (WCAG-Compliant)
- Semantic HTML with proper heading hierarchy (h1 → h2 → h3)
- ARIA labels and descriptions for icon-only buttons
- Screen reader friendly navigation and interactive elements
- High contrast colors meeting WCAG AA standards
- Keyboard navigation support throughout

### ⚡ Performance & Technical Excellence
- Next.js 16 with TypeScript for type safety
- Optimized images with Next.js Image component
- Minimal JavaScript - no unnecessary dependencies
- GSAP animations for smooth interactions
- Responsive design for all devices
- Fast deployment on Vercel

### 📱 Mobile-First Design
- Fully responsive on mobile, tablet, and desktop
- Touch-friendly interactive elements
- Optimized for all screen sizes

## Tech Stack

**Frontend**
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- GSAP (complex animations)

**Tools & Deployment**
- Vercel (hosting & CI/CD)
- ESLint + TypeScript ESLint
- Formspree (contact form submissions)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx (Root layout with structured data)
│   ├── page.tsx (Home page)
│   ├── about/
│   ├── projects/
│   ├── experience/
│   ├── contact/
│   └── sitemap.ts (XML sitemap)
├── components/ (Reusable UI components)
├── data/ (Content & site configuration)
├── lib/
│   └── schema.ts (JSON-LD structured data)
└── app/globals.css
public/
├── robots.txt (SEO crawling directives)
├── favicon.png
└── images/
```

## SEO Features

### Metadata Strategy
- Unique meta titles & descriptions for each page
- Target keywords: Full Stack Developer, React Developer, Next.js, Web Development
- Canonical URLs to prevent duplicate content
- Open Graph images for social media sharing
- Twitter Card markup for better social previews

### Structured Data
- Person schema for personal branding
- WebSite schema for site-wide information
- SoftwareApplication schema for projects

### Internal Linking
- Logical link structure supporting crawlability
- Descriptive anchor text
- Strategic calls-to-action linking to projects and contact

### Content Optimization
- Professional, recruiter-focused copy
- Clear problem → solution → result descriptions for projects
- Real metrics (130% performance improvement, 3+ years experience)
- Technical depth with accessibility for all audiences

## Accessibility Improvements

### Components
- **Navbar**: Mobile menu with proper `aria-expanded` state
- **Footer**: Social links with `aria-label` descriptions
- **Hero**: Semantic HTML with proper heading structure
- **Interactive Elements**: All buttons and links labeled for screen readers

### Best Practices Implemented
- Semantic HTML (`<nav>`, `<main>`, `<footer>`, `<section>`)
- Skip navigation links (available on focus)
- ARIA attributes where appropriate
- Focus indicators visible on interactive elements
- Color contrast ratio ≥4.5:1 for text

## Performance Metrics

- **Lighthouse Performance**: 95+
- **Core Web Vitals**: Optimized
- **JS Bundle Size**: Minimized with tree-shaking
- **Image Optimization**: Responsive images with Next.js Image
- **CSS**: Tailwind CSS with purging unused styles

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone and install dependencies
git clone <repo-url>
cd awais-portfolio
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production server
npm start
```

Visit `http://localhost:3000` to see the portfolio.

## Deployment

The portfolio is optimized for Vercel deployment:

```bash
# Deploy to Vercel (connected GitHub repository)
vercel --prod
```

Environment variables (if needed):
- `NEXT_PUBLIC_SITE_URL`: Deployed domain URL

## Content Updates

### Data Structure
All content is managed in `src/data/index.ts`:
- Hero section messaging
- About page copy
- Projects with descriptions, features, and tech stack
- Experience timeline
- Skills and certifications
- Contact information

### Adding New Projects
Edit `src/data/index.ts` and add to `projectsData` array:

```typescript
{
  title: "Project Name",
  description: "Brief, impactful description",
  features: ["Feature 1", "Feature 2"],
  techStack: [{ name: "Next.js", icon: SiNextdotjs }],
  github: "https://github.com/...",
  liveDemo: "https://demo.com",
  image: "/images/project.png",
}
```

## SEO Checklist

- ✅ Google Search Console verification meta tag
- ✅ Sitemap.xml for all pages
- ✅ robots.txt with crawl directives
- ✅ JSON-LD structured data
- ✅ Open Graph & Twitter meta tags
- ✅ Canonical URLs
- ✅ Mobile-friendly responsive design
- ✅ Fast Core Web Vitals scores
- ✅ Internal linking structure
- ✅ Unique page titles & descriptions

## Accessibility Checklist

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ Screen reader optimization
- ✅ Color contrast compliance
- ✅ Focus indicators visible
- ✅ Image alt text

## License

Personal portfolio - All rights reserved. Muhammad Awais © 2025

## Contact

- **Email**: awais8640107@gmail.com
- **GitHub**: https://github.com/mhaawais
- **LinkedIn**: https://linkedin.com/in/muhammad-awais-5b37742ba
- **Website**: https://muhammadawais.dev