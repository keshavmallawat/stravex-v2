# Development Roadmap

> Phased implementation plan for the Stravex Technologies website.
> Each phase is a discrete, shippable unit of work. No phase depends on work that hasn't been planned.

---

## Phase 0 — Project Foundation

### Goals

Establish the technical bedrock. Every subsequent phase builds on this.

### Deliverables

- [ ] Next.js 16 project scaffolded with App Router
- [ ] TypeScript configured (strict mode)
- [ ] Tailwind CSS v4 configured with CSS-first theme
- [ ] shadcn v4 installed and configured (base-nova style)
- [ ] `lib/utils.ts` with `cn()` helper
- [ ] `lib/types.ts` with all shared types
- [ ] `app/globals.css` with design tokens (colours, spacing, typography)
- [ ] `app/layout.tsx` with HTML structure, font loading, metadata defaults
- [ ] `components.json` aliases verified (`@/components`, `@/lib`, `@/ui`)
- [ ] ESLint and Prettier configured
- [ ] `docs/` directory with all five engineering documents
- [ ] `.gitignore` updated for `.next/`, `node_modules/`, env files
- [ ] README.md with setup instructions

### Dependencies

None. This is the first phase.

### Completion Criteria

- `npm run dev` starts without errors
- `npm run build` completes without errors
- `npm run lint` passes with zero warnings
- TypeScript compiles with zero errors
- All docs exist and are up to date

---

## Phase 1 — Design System

### Goals

Build the visual foundation. Every component and page uses these tokens and primitives.

### Deliverables

- [ ] Global CSS tokens: colour palette, spacing scale, typography scale, radius, elevation
- [ ] Dark mode as default (no light mode toggle)
- [ ] Font loading via `next/font` (Inter, JetBrains Mono)
- [ ] shadcn components installed: Button, Card, Input, Label, Table, Accordion, Badge, Separator
- [ ] Focus ring styles (consistent across all interactive elements)
- [ ] Skip-to-content link
- [ ] Responsive container utilities
- [ ] Animation preferences (respect `prefers-reduced-motion`)

### Dependencies

Phase 0

### Completion Criteria

- All shadcn components render correctly in dark mode
- Focus rings visible on all interactive elements
- Typography scale matches DESIGN_SYSTEM.md
- Colour contrast meets WCAG 2.1 AA
- `prefers-reduced-motion` disables all animations

---

## Phase 2 — Shared Components

### Goals

Build the structural components shared across all pages.

### Deliverables

- [ ] `components/layout/Navigation.tsx` — primary nav with route links, mobile hamburger menu, active state
- [ ] `components/layout/Footer.tsx` — sitemap, legal links, entity info
- [ ] Root layout integration: Nav + Footer wrapped around `{children}`
- [ ] Responsive navigation behaviour (collapse at `md`)
- [ ] Skip link in navigation

### Dependencies

Phase 1 (design tokens, shadcn components)

### Completion Criteria

- Navigation renders on all pages
- Footer renders on all pages
- Mobile menu opens and closes
- All nav links navigate to correct routes
- Active route is visually highlighted
- Keyboard navigation works through nav and footer
- axe-core passes with zero violations

---

## Phase 3 — Homepage

### Goals

Build the first impression. Establish credibility within 5 seconds.

### Deliverables

- [ ] Hero section — statement of purpose, not a tagline
- [ ] Capability Overview section — Detection / Interception / Autonomy / AI
- [ ] Featured Technology section — one flagship proof point
- [ ] Engineering Philosophy section
- [ ] Why Indigenous / Why Now section
- [ ] Numbers / Proof section (only if real, disclosable metrics exist)
- [ ] Latest News section (linked to news data)
- [ ] Contact CTA section — segmented by visitor type
- [ ] Responsive layout across all breakpoints
- [ ] Page metadata (title, description, Open Graph)

### Dependencies

Phase 2 (Navigation, Footer)

### Completion Criteria

- All 8 sections render correctly
- Page loads in under 2.5s (LCP)
- No layout shift (CLS < 0.1)
- All sections responsive (mobile → desktop)
- Metadata present and correct
- axe-core passes

---

## Phase 4 — Technologies

### Goals

Demonstrate R&D depth and technical seriousness.

### Deliverables

- [ ] `lib/data/technologies.ts` — four domain entries with all fields populated
- [ ] `app/technologies/page.tsx` — Technologies listing page
- [ ] `components/technologies/DomainOverview.tsx` — Section A: domain index/map
- [ ] `components/technologies/DomainDeepDive.tsx` — Section B: per-domain content
- [ ] `components/technologies/ValidationSection.tsx` — Section C: certifications, trials
- [ ] `components/technologies/TechnologyCTA.tsx` — Section D: careers/research CTA
- [ ] `app/technologies/[slug]/page.tsx` — individual technology detail page
- [ ] `generateStaticParams` for technology slugs
- [ ] Cross-links between Technologies ↔ Products (where related)
- [ ] Page metadata per route
- [ ] Responsive layout

### Dependencies

Phase 2 (Navigation, Footer), Phase 1 (design system)

### Completion Criteria

- Technologies listing page renders all four domains
- Each domain links to its detail page
- Detail page renders full domain content
- Navigation between sibling domains works
- All content follows CONTENT_STRATEGY.md rules
- Metadata present per route
- axe-core passes

---

## Phase 5 — Products

### Goals

Present the product catalogue with filtering, detail, and honest maturity status.

### Deliverables

- [ ] `lib/data/products.ts` — product entries with all fields populated
- [ ] `app/products/page.tsx` — Products listing page
- [ ] `components/products/ProductCard.tsx` — card with maturity badge
- [ ] `components/products/ProductFilter.tsx` — three-facet filter panel
- [ ] Section A: Portfolio Overview (Mission Domain map)
- [ ] Section B: Product Index (filterable card grid)
- [ ] Section C: Systems Thinking / Integration narrative
- [ ] Section D: Engagement (4 CTA paths)
- [ ] `app/products/[slug]/page.tsx` — individual product detail page
- [ ] Expandable specifications (Accordion + Table)
- [ ] Technical diagram placeholder
- [ ] Related Technologies / Products links
- [ ] Sibling-product navigation
- [ ] Spec-sheet download placeholder
- [ ] `generateStaticParams` for product slugs
- [ ] Maturity status rubric documented in CONTENT_STRATEGY.md
- [ ] Page metadata per route
- [ ] Responsive layout

### Dependencies

Phase 2 (Navigation, Footer), Phase 1 (design system)

### Completion Criteria

- Product listing renders all products
- Filtering works across all three facets
- Maturity status visible on every card
- Product detail page renders full content
- Expandable specs work correctly
- Navigation between sibling products works
- 4 CTA paths render correctly
- All content follows CONTENT_STRATEGY.md rules (especially maturity honesty)
- Metadata present per route
- axe-core passes

---

## Phase 6 — About

### Goals

Convert interest into conviction. Explain why Stravex exists as an argument, not a biography.

### Deliverables

- [ ] `app/about/page.tsx` — About page
- [ ] Thesis section — the strategic problem Stravex exists to solve
- [ ] Why Now section — shift in threat/technology landscape
- [ ] Engineering Philosophy section
- [ ] Values section — operating principles tied to engineering consequences
- [ ] Origin Context section — brief, factual
- [ ] Vision section — restrained, not grandiose
- [ ] CTA — Careers or Partner
- [ ] Page metadata
- [ ] Responsive layout

### Dependencies

Phase 2 (Navigation, Footer)

### Completion Criteria

- All sections render correctly
- Content follows CONTENT_STRATEGY.md tone (thesis-driven, argumentative)
- No superlatives, no stock language
- CTA is appropriate (soft, mid-funnel)
- Metadata present
- axe-core passes

---

## Phase 7 — Team

### Goals

Build confidence in execution capability — the people, not just the mission.

### Deliverables

- [ ] `app/team/page.tsx` — Team page
- [ ] Framing statement section
- [ ] Leadership section (if appropriate to publish — security consideration)
- [ ] Engineering culture section
- [ ] Research mindset section
- [ ] Talent philosophy section
- [ ] Open roles / Careers CTA
- [ ] Page metadata
- [ ] Responsive layout

### Dependencies

Phase 2 (Navigation, Footer)

### Completion Criteria

- Content leads with culture, not headshots
- No generic "passionate team" language
- Careers CTA present and functional
- Security consideration documented (which profiles are public)
- Metadata present
- axe-core passes

---

## Phase 8 — News

### Goals

Signal that Stravex is active, credible, and producing output.

### Deliverables

- [ ] `app/news/page.tsx` — News listing page
- [ ] Featured story section
- [ ] Filterable index (Press / Research / Announcements / Events)
- [ ] Article list (chronological within filter)
- [ ] Newsletter / press-contact CTA
- [ ] Media kit / press contact info
- [ ] `lib/data/news.ts` — news articles data
- [ ] Filter component
- [ ] Page metadata
- [ ] Responsive layout

### Dependencies

Phase 2 (Navigation, Footer)

### Completion Criteria

- News listing renders correctly
- Filtering works across all categories
- Featured story is prominent
- Content is factual, journalistic (no promotional adjectives)
- Sparse but honest (no filler content)
- Metadata present
- axe-core passes

---

## Phase 9 — Contact

### Goals

Convert qualified intent into the right conversation, fast.

### Deliverables

- [ ] `app/contact/page.tsx` — Contact page
- [ ] Framing statement section
- [ ] Inquiry category selector (Partnership / Government & Defence / Press / Careers / General)
- [ ] Contact form (fields adapt to selected category)
- [ ] Direct info section (email, registered office)
- [ ] Expected response time / next steps
- [ ] Form validation (client-side + server-side)
- [ ] API route for form submission (`app/api/contact/route.ts`)
- [ ] Page metadata
- [ ] Responsive layout

### Dependencies

Phase 2 (Navigation, Footer)

### Completion Criteria

- Category selector works correctly
- Form fields adapt to selected category
- Form validation prevents invalid submissions
- API route handles submission
- No urgency tactics, no live chat
- Direct info section is formal and minimal
- Metadata present
- axe-core passes

---

## Phase 10 — Performance

### Goals

Meet Core Web Vitals targets. Ensure the site feels fast.

### Deliverables

- [ ] Lighthouse audit — score ≥ 95 on all categories
- [ ] LCP < 2.5s on all pages
- [ ] CLS < 0.1 on all pages
- [ ] INP < 200ms on all pages
- [ ] Image optimization audit (WebP/AVIF, lazy loading, proper sizing)
- [ ] Font loading optimization (preload critical fonts, subset character sets)
- [ ] JavaScript bundle analysis — identify and remove bloat
- [ ] Dynamic imports for below-the-fold components where beneficial
- [ ] Core Web Vitals monitoring setup (e.g., `web-vitals` package)

### Dependencies

Phases 3–9 (all pages built)

### Completion Criteria

- Lighthouse ≥ 95 across all pages
- All Core Web Vitals targets met
- No render-blocking resources
- Images lazy-loaded below the fold
- Fonts preloaded and subset
- Bundle size under 100 KB gzipped (initial load)

---

## Phase 11 — SEO

### Goals

Establish technical SEO foundation. Earn rankings through substance.

### Deliverables

- [ ] `next-sitemap` configured and generating sitemap
- [ ] `robots.txt` configured (allow all, block `/api/`)
- [ ] Title tags: `<Page Name> | Stravex Technologies` on all pages
- [ ] Meta descriptions: ≤ 155 characters on all pages
- [ ] Open Graph tags on all pages (title, description, image, url)
- [ ] JSON-LD structured data: Organization, WebPage, BreadcrumbList
- [ ] Canonical URLs on all pages
- [ ] Internal linking strategy (Products ↔ Technologies, News ↔ Products)
- [ ] Image alt text audit (all descriptive, none generic)
- [ ] Heading hierarchy audit (h1 → h2 → h3, no skipped levels)

### Dependencies

Phase 10 (performance baseline established)

### Completion Criteria

- Sitemap generates and is accessible at `/sitemap.xml`
- robots.txt is accessible at `/robots.txt`
- All pages have correct title, description, and OG tags
- Structured data validates (Google Rich Results Test)
- Internal links connect related content
- All images have meaningful alt text
- Heading hierarchy is logical on every page

---

## Phase 12 — CMS

### Goals

Enable non-developer content management. Prepare for portfolio growth.

### Deliverables

- [ ] CMS evaluation and selection (Contentlayer, Sanity, Payload, or headless WordPress)
- [ ] CMS integration architecture (API client in `lib/api/`)
- [ ] Content models defined for: Products, Technologies, News, Insights
- [ ] Admin interface for content editors
- [ ] Content migration from static files to CMS
- [ ] Preview mode for content editors
- [ ] Revalidation strategy (ISR or on-demand revalidation)
- [ ] Content workflow (draft → review → publish)

### Dependencies

Phase 10 (performance), all content pages built and validated

### Completion Criteria

- Content editors can create, edit, and publish content without developer involvement
- Product/technology/news content migrates cleanly from static files
- Preview mode works for draft content
- Revalidation triggers on content publish
- Performance impact is negligible (no regression from Phase 10)
- Content follows CONTENT_STRATEGY.md rules (enforced via CMS validation)

---

## Phase Dependencies (Visual)

```
Phase 0: Foundation
  ↓
Phase 1: Design System
  ↓
Phase 2: Shared Components
  ↓
  ├── Phase 3: Homepage
  ├── Phase 4: Technologies
  ├── Phase 5: Products
  ├── Phase 6: About
  ├── Phase 7: Team
  ├── Phase 8: News
  └── Phase 9: Contact
        ↓
      Phase 10: Performance
        ↓
      Phase 11: SEO
        ↓
      Phase 12: CMS
```

Phases 3–9 can be parallelized after Phase 2 is complete. Phases 10–12 are sequential and depend on all pages being built.

---

## Ongoing Maintenance

After Phase 12, the site enters a maintenance cadence:

- **Weekly:** Content updates via CMS (news, product status changes)
- **Monthly:** Dependency updates, security patches, performance monitoring
- **Quarterly:** Accessibility audit, SEO audit, content strategy review
- **Annually:** Design system review, technology stack evaluation

---

_This roadmap is a living document. Phases may be reordered, split, or merged as the project evolves. The only rule: every phase must be completable and shippable independently._
