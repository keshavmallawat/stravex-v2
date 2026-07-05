# Architecture

> How the Stravex Technologies website is structured, why each decision was made, and where future work belongs.

---

## 1. Project Structure

```
stravex-technologies/
├── app/                          # Pages and layouts (App Router)
│   ├── globals.css               # Tailwind v4 CSS-first config
│   ├── layout.tsx                # Root layout (HTML, providers, Nav, Footer)
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx
│   ├── technologies/
│   │   ├── page.tsx              # Technologies listing
│   │   └── [slug]/page.tsx       # Individual technology detail
│   ├── products/
│   │   ├── page.tsx              # Products listing
│   │   └── [slug]/page.tsx       # Individual product detail
│   ├── team/page.tsx
│   ├── news/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/                   # Site-wide structural components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── technologies/             # Technologies page components
│   │   ├── DomainOverview.tsx
│   │   ├── DomainDeepDive.tsx
│   │   ├── ValidationSection.tsx
│   │   └── TechnologyCTA.tsx
│   ├── products/                 # Products page components
│   │   ├── ProductCard.tsx
│   │   └── ProductFilter.tsx
│   └── ui/                       # shadcn primitives (Button, Card, etc.)
├── lib/
│   ├── utils.ts                  # cn() and general utilities
│   ├── types.ts                  # Shared TypeScript types
│   └── data/
│       ├── technologies.ts       # Technology domain data
│       └── products.ts           # Product data
├── public/                       # Static assets (images, fonts, icons)
├── docs/                         # Project documentation
└── ...config files
```

---

## 2. Why Each Folder Exists

### `app/`

The App Router is the routing layer. It contains ONLY what Next.js needs to resolve routes: pages, layouts, loading states, and error boundaries. Nothing else.

**Why this matters:** Mixing component logic into `app/` makes routes harder to reason about. By keeping `app/` pure, every file in it has exactly one job — define how a URL maps to a view.

**Rule:** If it isn't a `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, or `not-found.tsx`, it doesn't belong in `app/`.

### `components/`

All React components live here, organized by the page they belong to. Components that are used on only one page go in that page's subfolder. Components used across multiple pages go in `ui/`.

**Why page-specific subfolders:** The Technologies page and Products page have fundamentally different component needs. Mixing them in a flat `components/` folder creates confusion about what belongs where.

**Why `ui/` exists:** shadcn primitives (Button, Card, Input, Table, etc.) are reusable across all pages. They live in `ui/` because they are not specific to any page.

### `lib/`

Non-React code. Utilities, type definitions, and data accessors.

**Why separate from components:** Components should import from `lib/`, but `lib/` should never import from `components/`. This one-directional dependency keeps the data layer clean and testable.

### `lib/data/`

Static data files. Each file maps to a domain entity (technologies, products). Contains the data array and helper functions for accessing it.

**Why static files, not a database (yet):** The site launches with a fixed set of products and technologies. There is no CMS, no admin panel, no dynamic content. Static files are the honest representation of this reality. When a CMS is added, this layer becomes the API client.

### `public/`

Static assets that the server serves directly. Images, icons, fonts (if not using `next/font`), and any other files that don't go through the build pipeline.

**Rule:** No JavaScript, no components, no data files in `public/`.

### `docs/`

Project documentation. The engineering handbook. Updated when standards, architecture, or strategy change — not when code changes (unless the code change reflects a standard change).

---

## 3. Where Future Features Belong

### New Page

1. Create `app/<route>/page.tsx`
2. Create `components/<route>/` for page-specific components
3. Add route to `lib/types.ts` if new types are needed
4. Add data file to `lib/data/` if new data is needed
5. Update navigation in `components/layout/Navigation.tsx`
6. Update footer in `components/layout/Footer.tsx`

### New Component

- **Used on one page?** → `components/<page-name>/ComponentName.tsx`
- **Used on multiple pages?** → `components/ui/ComponentName.tsx`
- **Used everywhere (Nav, Footer)?** → `components/layout/ComponentName.tsx`

### New Data Type

- Add to `lib/types.ts` if it's shared across pages.
- Add to `lib/data/<entity>.ts` if it's specific to one data domain.

### New Utility Function

- Add to `lib/utils.ts` if it's general-purpose.
- Add to `lib/data/<entity>.ts` if it's a data accessor for that entity.
- Do NOT create new utility files unless the existing ones become unwieldy.

### New Page Section

Each page is divided into sections (A, B, C, D, etc.) as defined in the strategy documents. Each section gets its own component file in the page's component folder.

Example: The Technologies page has four sections:

- `components/technologies/DomainOverview.tsx` (Section A)
- `components/technologies/DomainDeepDive.tsx` (Section B)
- `components/technologies/ValidationSection.tsx` (Section C)
- `components/technologies/TechnologyCTA.tsx` (Section D)

The page file (`app/technologies/page.tsx`) composes these sections.

---

## 4. Reusable Components

### What Counts as Reusable

A component is reusable if it appears in the same form on two or more pages. Examples:

- `Button` — used in CTAs, forms, navigation
- `Card` — used in product cards, news articles, team profiles
- `Input` — used in contact form, search, filters
- `Table` — used in product specifications, technology comparisons
- `Accordion` — used in expandable specifications, FAQ sections

### What Does Not Count

A component that exists in the same form on only one page is NOT reusable — it is a page-specific component. Do not prematurely abstract.

### shadcn

The project uses shadcn (v4, base-nova style) for UI primitives. Do not build custom versions of components that shadcn already provides. Use the CLI to add them:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

Custom components that extend shadcn primitives go in `components/ui/` with a clear JSDoc explaining the extension.

---

## 5. Data Layer

### Current Architecture

```
lib/data/
  technologies.ts    # Technology domains + accessor functions
  products.ts        # Products + accessor functions
```

Each data file contains:

1. A typed array of records (the static data).
2. Helper functions for common queries (get by slug, filter by category).
3. JSDoc comments explaining the data structure and access patterns.

### Data Access Rules

- Import data directly in Server Components: `import { products } from "@/lib/data/products"`.
- Do NOT fetch static data via `fetch()`. Import it.
- Do NOT pass static data through props from a parent page. Import it where needed.
- Accessor functions (e.g., `getProductBySlug`) are preferred over direct array access.

### Data Flow

```
lib/data/*.ts          →  Server Components (import directly)
                           ↓
                       Client Components (passed as props if needed)
```

Static data never crosses a server/client boundary via fetch. It flows from `lib/data/` to Server Components, and only reaches Client Components via props when interactivity requires it.

---

## 6. Future CMS

### When a CMS Becomes Necessary

- When content updates require non-developer access.
- When the product/technology portfolio grows beyond what static files can manageably hold.
- When news articles, insights, or press releases need frequent publishing.

### CMS Integration Architecture

When a CMS is introduced, the data layer changes:

```
lib/data/               →  lib/api/         (CMS client functions)
  technologies.ts           technologies.ts   (fetch from CMS)
  products.ts               products.ts       (fetch from CMS)
```

The component layer does NOT change. Components receive data via props, regardless of whether that data comes from a static file or an API call. This is the entire point of the current separation.

### Recommended CMS Options (for future consideration)

- **Contentlayer + Markdown** — for developer-authored content (insights, technical posts).
- **Sanity or Payload** — for editorial content managed by non-developers.
- **Headless WordPress** — if the team already has WordPress familiarity.

The choice should be made when the need is real, not before.

---

## 7. Future Backend

### When a Backend Becomes Necessary

- Contact form submissions need server-side processing.
- User authentication is required (e.g., gated content for defence partners).
- Real-time data feeds (e.g., news, stock prices, live product status).
- File uploads (e.g., resume submission for careers).

### Backend Architecture Options

- **Next.js API Routes** (`app/api/`) — for lightweight server-side logic.
- **External API** — for complex business logic, existing systems, or third-party integrations.

### API Design Rules (when the time comes)

- RESTful conventions: `GET /api/products`, `POST /api/contact`.
- All API routes must validate input (Zod schemas).
- All API routes must return typed responses.
- No API routes for static data (import from `lib/data/` instead).

---

## 8. Scalability Philosophy

### The Core Principle

**Add entries, not architecture.**

The entire site is designed so that growth — more products, more technologies, more news articles — looks like adding rows to existing structures, not building new structures.

### How This Works

- **Product growth:** New products are new entries in `lib/data/products.ts`. They inherit the existing filter system, card component, and detail page template.
- **Technology growth:** New domains are new entries in `lib/data/technologies.ts`. They inherit the existing deep-dive template and navigation.
- **News growth:** New articles are new entries in the news data source. The filter and list components already handle any volume.
- **Page growth:** New pages are new routes in `app/`. Navigation and footer update to include them.

### What Does NOT Scale

- Hardcoded product lists in page components (use data files).
- Per-page type definitions (use shared `lib/types.ts`).
- Per-page styling approaches (use the design system consistently).
- Manual sitemap generation (use `next-sitemap` or `generateSitemaps`).

### The Dozens-of-Products Future

The Mission Domain / Technology Domain dual-axis structure, combined with the three-level hierarchy (System → Subsystem → Variant), is designed so that dozens of products look like today's architecture with more rows, not a different architecture.

---

## 9. Dependency Decisions

### Current Dependencies

| Package                    | Purpose             | Justification                                     |
| -------------------------- | ------------------- | ------------------------------------------------- |
| `next` (16.2.10)           | Framework           | App Router, Server Components, image optimization |
| `react` (19.2.4)           | UI library          | Required by Next.js                               |
| `tailwindcss` (v4)         | Utility CSS         | Design system foundation                          |
| `shadcn` (v4)              | UI primitives       | Pre-built, accessible, composable components      |
| `framer-motion`            | Animation           | Complex animations that CSS can't handle          |
| `lucide-react`             | Icons               | Consistent, tree-shakeable icon set               |
| `next-themes`              | Theme switching     | Dark/light mode support                           |
| `class-variance-authority` | Component variants  | Used by shadcn for component styling              |
| `clsx`                     | Conditional classes | Used by shadcn's `cn()`                           |
| `tailwind-merge`           | Class deduplication | Used by shadcn's `cn()`                           |

### Adding Dependencies

Before adding any dependency, ask:

1. Does this solve a problem that custom code cannot solve as well?
2. Is it actively maintained (last release within 6 months)?
3. Is it tree-shakeable (won't bloat the bundle)?
4. Does it have a strong TypeScript types story?
5. Is it compatible with React 19 and Next.js 16?

If the answer to any of these is "no," do not add the dependency.

---

_This document describes the architecture as it exists and as it is intended to grow. When the architecture changes, this file changes._
