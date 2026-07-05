# Project Rules

> Engineering standards governing the Stravex Technologies website.
> Every contributor — human or AI — must follow these rules.
> No exceptions. No shortcuts.

---

## 1. Coding Conventions

### General Principles

- **Clarity over cleverness.** Code is read more than it is written. Optimize for the next person.
- **Explicit over implicit.** No magic, no hidden behavior, no side effects that aren't obvious from reading the code.
- **Restraint over ambition.** Do not add abstractions until a pattern has repeated at least three times.
- **Honest code.** Do not write code that pretends to work. If it doesn't work, say so. If it's incomplete, mark it.

### Formatting

- Use Prettier defaults (double quotes, trailing commas, 100-char print width).
- No custom Prettier config — let the tool decide.
- One component per file. One export per component.
- Blank line between imports and code. Blank line between logical blocks.

### Naming

| Thing              | Convention      | Example               |
| ------------------ | --------------- | --------------------- |
| Components         | PascalCase      | `DomainOverview.tsx`  |
| Functions          | camelCase       | `getProductBySlug`    |
| Types / Interfaces | PascalCase      | `TechnologyDomain`    |
| Constants          | camelCase       | `technologyDomains`   |
| Files (components) | PascalCase      | `ProductCard.tsx`     |
| Files (utilities)  | camelCase       | `utils.ts`            |
| Files (data)       | camelCase       | `technologies.ts`     |
| CSS variables      | kebab-case      | `--color-primary`     |
| Route folders      | lowercase kebab | `technologies/[slug]` |

### What Not to Name

- No prefix conventions (`I` for interfaces, `T` for types, `C` for components).
- No suffix conventions (`Component`, `Props`, `Type`) unless the type is exported separately.
- No abbreviations except universally understood ones (`id`, `slug`, `url`, `href`).

---

## 2. File Naming

- One component per file. The filename IS the component name.
- Page files are always `page.tsx`.
- Layout files are always `layout.tsx`.
- Utility files are lowercase: `utils.ts`, `types.ts`.
- Data files are lowercase and plural: `technologies.ts`, `products.ts`.
- Type definition files are `types.ts` — a single source of truth per directory boundary.
- Test files (when introduced) mirror the source filename: `ProductCard.test.tsx`.
- Never use `index.ts` as a barrel file unless the directory is a true public API boundary.

---

## 3. Folder Conventions

```
app/                    # Next.js App Router — pages and layouts only
  [route]/              # Dynamic route segments
    page.tsx            # The page component for this route
components/
  layout/               # Site-wide structural components (Nav, Footer)
  technologies/         # Components specific to the Technologies page
  products/             # Components specific to the Products page
  ui/                   # shadcn primitives and shared UI atoms (Button, Card, etc.)
lib/
  utils.ts              # General utility functions
  types.ts              # Shared TypeScript types
  data/                 # Static data files (one per domain entity)
docs/                   # Project documentation (this folder)
```

### Rules

- `app/` contains ONLY pages and layouts. No components, no utilities, no data.
- `components/` contains ONLY React components. No data, no utilities, no types.
- `lib/` contains ONLY non-React code. No components.
- `lib/data/` contains ONLY static data. No helper functions beyond the data accessors defined in the same file.
- Do not create folders without a clear, immediate purpose.
- Do not create `utils/` directories inside `components/`. Utilities go in `lib/`.
- Do not create `shared/`, `common/`, `helpers/`, or `misc/` folders. Be specific.

---

## 4. React Standards

### Component Structure

- **Functional components only.** No class components.
- **Server Components by default.** Only mark `"use client"` when the component genuinely requires interactivity (event handlers, browser APIs, state).
- **Props are typed inline or via a named type in the same file.** Do not create separate `types.ts` files for component props unless the type is reused elsewhere.
- **Destructure props.** Never access `props.something`.
- **Return `null` for empty states.** Do not render empty `<div>` wrappers.

### Hooks

- Do not create custom hooks until a pattern repeats three times.
- `useState` for local component state. Do not reach for global state until proven necessary.
- `useEffect` only for side effects that genuinely depend on external state. Do not use it for derived state.
- Do not use `useRef` for DOM access unless necessary for focus management, scroll, or measurement.

### Server vs. Client Boundary

- Pages are Server Components by default.
- Mark `"use client"` only on components that need:
  - `onClick`, `onChange`, or other event handlers
  - `useState`, `useReducer`, `useEffect`
  - Browser APIs (`window`, `document`, `navigator`)
  - `framer-motion` animations that require JS runtime

### Rendering Rules

- No dynamic imports unless code-splitting is genuinely needed.
- No `dangerouslySetInnerHTML`.
- No inline styles. Use Tailwind classes.
- No CSS modules. Use Tailwind.
- No styled-components, Emotion, or CSS-in-JS.

---

## 5. Next.js Standards

### App Router

- Use the App Router exclusively. No Pages Router patterns.
- `page.tsx` defines the route. `layout.tsx` wraps it.
- `loading.tsx` for route-level Suspense boundaries.
- `error.tsx` for route-level error boundaries.
- `not-found.tsx` for 404 handling.

### Data Fetching

- Server Components fetch data directly. No `useEffect` + `fetch` patterns.
- Use `fetch()` or direct database calls in Server Components.
- For static data, import directly from `lib/data/`.
- For dynamic data, use `generateStaticParams` for static generation where possible.

### Metadata

- Every page exports a `Metadata` object or generates one via `generateMetadata`.
- Metadata must include: `title`, `description`, `openGraph` (at minimum).
- No duplicate titles across pages.

### Linking

- Use `next/link` `<Link>` for all internal navigation.
- Use `<a>` only for external links.
- External links must have `rel="noopener noreferrer"` on `target="_blank"`.

### Images

- Use `next/image` for all images.
- Always specify `width` and `height` or use `fill` with a container.
- Use `priority` for above-the-fold images only.
- Use `placeholder="blur"` with a base64 blurDataURL where possible.

---

## 6. TypeScript Standards

- **Strict mode is non-negotiable.** `"strict": true` in tsconfig.
- **No `any`.** Use `unknown` and narrow with type guards.
- **No type assertions (`as`)** unless absolutely unavoidable. Prefer type narrowing.
- **Interface for objects.** Type for unions, intersections, and primitives.
- **One interface per concept.** Do not merge interfaces across files.
- **Export types that are shared.** Inline types for component-local props.
- **No enums.** Use string literal unions or const objects.

```typescript
// Good
type MaturityStatus = "operational" | "in-development" | "prototype";

// Bad
enum MaturityStatus {
  Operational = "operational",
  InDevelopment = "in-development",
  Prototype = "prototype",
}
```

---

## 7. Accessibility

### Non-Negotiable

- Every page must pass axe-core with zero critical or serious violations.
- All interactive elements must be keyboard-accessible.
- All images must have meaningful `alt` text (or `alt=""` for decorative images).
- Color contrast must meet WCAG 2.1 AA minimum (4.5:1 for text, 3:1 for large text).
- Focus management must be logical and visible.
- No keyboard traps.

### Semantic HTML

- Use semantic elements: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<header>`.
- Use headings in order: one `<h1>` per page, then `<h2>`, `<h3>`, etc.
- Do not skip heading levels for styling purposes.
- Use `<button>` for actions, `<a>` for navigation. Never a `<div>` for either.

### ARIA

- Do not add ARIA attributes unless semantic HTML is insufficient.
- If you add ARIA, explain why in a comment.
- `aria-label` and `aria-describedby` should reference visible text where possible.

### Motion

- Respect `prefers-reduced-motion`. All animations must be disabled when this media query matches.
- No animation should be essential to understanding content.

---

## 8. Performance

### Bundle

- Total JavaScript bundle (initial load) must stay under 100 KB gzipped.
- No unnecessary dependencies. Every `npm install` requires justification.
- Use dynamic imports for above-the-fold content that isn't needed immediately.

### Rendering

- Server Components are the default. Client Components are the exception.
- No data fetching in Client Components unless real-time updates require it.
- Use `React.memo` only when profiling shows a genuine re-render problem.

### Images

- Serve WebP or AVIF formats via `next/image`.
- Lazy-load below-the-fold images.
- Never serve images larger than the display size.

### Fonts

- Use `next/font` for all typography.
- Subset fonts to include only the characters needed.
- Preload critical fonts.

### Core Web Vitals

- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- INP < 200ms

---

## 9. Responsive Design

### Breakpoints

Follow Tailwind's default breakpoints:

| Breakpoint | Width  | Target                   |
| ---------- | ------ | ------------------------ |
| `sm`       | 640px  | Large phones (landscape) |
| `md`       | 768px  | Tablets                  |
| `lg`       | 1024px | Small laptops            |
| `xl`       | 1280px | Desktops                 |
| `2xl`      | 1536px | Large screens            |

### Approach

- **Mobile-first.** Write base styles for mobile, then add `sm:`, `md:`, `lg:` prefixes for larger screens.
- **No fixed widths.** Use `max-w-*` containers and fluid layouts.
- **Touch targets minimum 44×44px** on mobile.
- **Text readable without zoom** — minimum 16px base font size.
- **No horizontal scroll** at any breakpoint.

### Layout

- Use CSS Grid and Flexbox. No floats.
- Content must reflow naturally at every breakpoint.
- Navigation must collapse to a mobile menu at `md` and below.
- Side-by-side layouts must stack vertically on mobile.

---

## 10. Animation Philosophy

### Principles

- **Purposeful.** Animation must guide attention, communicate state, or provide spatial context. No decoration.
- **Fast.** 150–300ms for most transitions. Nothing longer than 500ms.
- **Subtle.** Ease-out for entering elements. Ease-in for exiting. No bouncing, no overshooting.
- **Consistent.** One motion language across the entire site. No per-page animation styles.

### Implementation

- Use `framer-motion` for complex animations (page transitions, scroll-triggered reveals).
- Use CSS transitions for simple state changes (hover, focus, toggle).
- Use `transition-colors`, `transition-opacity`, `transform` via Tailwind for micro-interactions.
- Never animate layout properties (`width`, `height`, `top`, `left`) — use `transform` and `opacity` only.

### Reduced Motion

```tsx
// All framer-motion animations must respect reduced motion
"use client";

import { useReducedMotion } from "framer-motion";

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();
  // Use shouldReduceMotion to disable or simplify animations
}
```

### What Not to Animate

- No parallax scrolling.
- No text typing effects.
- No infinite loops (except loading indicators).
- No animation on page load that blocks content visibility.

---

## 11. Import Ordering

Consistent import order reduces noise in diffs and makes dependencies scannable.

```
1. React / Next.js
2. Third-party libraries
3. Internal components (@/components/...)
4. Internal utilities (@/lib/...)
5. Types
6. Static data
7. Styles (if any)
```

Group each section with a blank line. Alphabetize within each group.

```typescript
import { useState } from "react";
import { motion } from "framer-motion";

import { Navigation } from "@/components/layout/Navigation";
import { ProductCard } from "@/components/products/ProductCard";

import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

import { products } from "@/lib/data/products";
```

---

## 12. Code Review Expectations

### What Reviewers Must Check

- No `any` types.
- No hardcoded strings (use constants or data files).
- No magic numbers or unexplained literals.
- Accessibility: semantic HTML, keyboard access, ARIA if needed.
- Performance: no unnecessary re-renders, no large imports.
- Consistency: follows naming conventions, follows import order.
- Comments: only where intent is not obvious from code alone.

### What Reviewers Must NOT Block On

- Minor formatting differences (Prettier handles this).
- Preference-based style choices (follow the existing pattern).
- Variable naming that follows the established conventions.

### PR Requirements

- Every PR must have a clear description of what changed and why.
- No PRs that mix unrelated changes.
- No PRs larger than 400 lines of changes (split them).
- All CI checks must pass before merge.

---

## 13. Documentation Expectations

### In-Code

- Every component file has a JSDoc comment at the top explaining its purpose.
- Every non-obvious function has a JSDoc comment explaining what it does and why.
- No comments that explain _what_ the code does (the code should be clear).
- Comments explain _why_ — the decision, the constraint, the tradeoff.

```typescript
// Good
// Maturity status is intentionally restricted to three values.
// A rubric must be established before content drafting begins.
// See CONTENT_STRATEGY.md, Section: Maturity Status Rubric.
type MaturityStatus = "operational" | "in-development" | "prototype";

// Bad
// Define the maturity status type
type MaturityStatus = "operational" | "in-development" | "prototype";
```

### Project-Level

- `docs/PROJECT_RULES.md` — this file. Update when standards change.
- `docs/ARCHITECTURE.md` — update when structure changes.
- `docs/DESIGN_SYSTEM.md` — update when tokens or components change.
- `docs/CONTENT_STRATEGY.md` — update when content rules change.
- `docs/DEVELOPMENT_ROADMAP.md` — update when phases change.
- `AGENTS.md` — Next.js-specific agent instructions (read before writing code).

---

## 14. Git Conventions

### Branch Naming

| Type          | Pattern                        | Example                        |
| ------------- | ------------------------------ | ------------------------------ |
| Feature       | `feature/<short-description>`  | `feature/technologies-page`    |
| Fix           | `fix/<short-description>`      | `fix/mobile-nav-z-index`       |
| Documentation | `docs/<short-description>`     | `docs/update-content-strategy` |
| Refactor      | `refactor/<short-description>` | `refactor/product-card-types`  |

### Commit Messages

- Use imperative mood: "Add", "Fix", "Update", "Remove" — not "Added", "Fixed".
- First line: max 72 characters, describes the change.
- Body (optional): explain _why_, not _what_.
- Reference issues where relevant: `Fixes #12`.

```
Add product filter component

Three-facet filter panel for Mission Domain, Technology Domain,
and Maturity Status. Reflects the dual-axis categorisation
defined in the product architecture.

See docs/CONTENT_STRATEGY.md for filter content rules.
```

### What Not to Commit

- `node_modules/`
- `.next/`
- Environment variables or secrets.
- Large binary files (images go in `/public`, not in commits).
- Lock file changes unless dependency changes are intentional.

---

## 15. Testing Philosophy

### Principles

- **Test behavior, not implementation.** Tests should survive refactors.
- **Test what matters.** User-facing behavior > internal logic > rendering.
- **Tests are documentation.** A test file explains what the code should do.

### What to Test

- Page rendering (does the page load without errors?)
- Component rendering (does it render with expected props?)
- User interactions (click, type, navigate)
- Data accessors (do filter/getter functions return correct results?)
- Accessibility (automated checks via axe-core)

### What Not to Test

- Third-party library behavior.
- CSS styling (use visual regression testing if needed).
- Internal state transitions (test the UI output, not the state).

### Framework

- Vitest for unit tests.
- Playwright for E2E tests (when introduced).
- Testing Library for component tests.

---

## Appendix: Anti-Patterns

These are explicitly forbidden in this codebase:

| Anti-Pattern                         | Why                                   |
| ------------------------------------ | ------------------------------------- |
| `// @ts-ignore`                      | Hides type errors. Fix them.          |
| `eslint-disable` without explanation | Must have a comment explaining why.   |
| `any` type                           | Defeats the purpose of TypeScript.    |
| Inline styles                        | Use Tailwind.                         |
| CSS modules                          | Use Tailwind.                         |
| `useEffect` for derived state        | Compute during render.                |
| `fetch` in Client Components         | Use Server Components.                |
| Barrel exports (`index.ts`)          | Import directly from the file.        |
| Default exports for utilities        | Use named exports.                    |
| Nested ternaries                     | Use `if`/`else` or a helper function. |
| Magic strings                        | Extract to constants.                 |
| `className` concatenation            | Use `cn()` from `lib/utils`.          |

---

_This document is the single source of engineering standards for the Stravex Technologies website. When in doubt, refer here. When this file is silent, follow the existing pattern in the codebase._
