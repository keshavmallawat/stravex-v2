# Design System

> Visual language, design tokens, and UI principles for the Stravex Technologies website.
> This document defines WHAT to build with. Implementation details belong in code.

---

## 1. UI Philosophy

### The Governing Principle

**Defence-tech sites earn trust through restraint, not persuasion.**

The visual system serves one purpose: make Stravex look like a company that has nothing to prove through decoration. Every visual decision — color, spacing, typography, animation — must pass this test:

> "Does this make the site look more like a serious engineering organization, or more like a marketing site?"

If the answer is the latter, remove it.

### Design Precedents

The visual language draws from these reference sites, not to copy them, but to share their DNA:

- **Anduril** — dark, technical, restrained. Navigation is minimal. Content carries the weight.
- **Helsing** — European defence precision. Clean typography. Serious color palette.
- **Palantir** — editorial clarity. Long-form content that respects the reader's intelligence.
- **Shield AI** — product-first. Technical specs as a trust signal, not marketing copy.

### What Stravex Is NOT

- Not a SaaS landing page.
- Not a startup pitch deck.
- Not a consumer tech showcase.
- Not a defence contractor's annual report.

The visual system must never feel like any of these.

---

## 2. Colours

### Philosophy

Dark by default. The site should feel like a technical instrument, not a consumer product. High contrast for readability. Color used sparingly and with purpose — never decorative.

### Core Palette

| Token                        | Value     | Usage                                |
| ---------------------------- | --------- | ------------------------------------ |
| `--color-background`         | `#0A0A0A` | Page background                      |
| `--color-foreground`         | `#FAFAFA` | Primary text                         |
| `--color-muted`              | `#1A1A1A` | Subtle backgrounds, cards            |
| `--color-muted-foreground`   | `#A0A0A0` | Secondary text, captions             |
| `--color-border`             | `#262626` | Dividers, card borders               |
| `--color-primary`            | `#E8E8E8` | Interactive elements, emphasis       |
| `--color-primary-foreground` | `#0A0A0A` | Text on primary elements             |
| `--color-accent`             | `#C8A44E` | Accent highlights (gold, restrained) |
| `--color-accent-foreground`  | `#0A0A0A` | Text on accent                       |

### Semantic Colours

| Token             | Value     | Usage                             |
| ----------------- | --------- | --------------------------------- |
| `--color-success` | `#22C55E` | Valid states, operational status  |
| `--color-warning` | `#EAB308` | Caution states, in-development    |
| `--color-error`   | `#EF4444` | Error states, destructive actions |
| `--color-info`    | `#3B82F6` | Informational callouts            |

### Maturity Status Colours

These map directly to the product maturity system defined in the strategy documents:

| Status         | Colour                     | Meaning                                     |
| -------------- | -------------------------- | ------------------------------------------- |
| Operational    | `--color-success`          | Deployed and validated                      |
| In Development | `--color-warning`          | Active engineering, not yet deployed        |
| Prototype      | `--color-muted-foreground` | Early stage, demonstrated but not validated |

### Rules

- **No gradients on backgrounds.** Flat colour only.
- **No colour for decoration.** Every colour use must communicate something.
- **Gold accent is rare.** Use for CTAs, key highlights, and navigation accents only.
- **Dark backgrounds are mandatory.** Light mode is not planned. If added later, it must be a deliberate, tested decision.

---

## 3. Typography

### Font Selection

- **Primary:** Inter (or equivalent geometric sans-serif)
- **Monospace:** JetBrains Mono (for technical specifications, code)

Both fonts are loaded via `next/font` with appropriate subsets.

### Type Scale

| Token            | Size            | Weight | Line Height | Usage                         |
| ---------------- | --------------- | ------ | ----------- | ----------------------------- |
| `--text-display` | 48px / 3rem     | 700    | 1.1         | Hero headings, section titles |
| `--text-h1`      | 36px / 2.25rem  | 700    | 1.2         | Page titles                   |
| `--text-h2`      | 30px / 1.875rem | 600    | 1.3         | Section headings              |
| `--text-h3`      | 24px / 1.5rem   | 600    | 1.4         | Subsection headings           |
| `--text-h4`      | 20px / 1.25rem  | 600    | 1.5         | Card titles, small headings   |
| `--text-body`    | 16px / 1rem     | 400    | 1.6         | Body text                     |
| `--text-body-lg` | 18px / 1.125rem | 400    | 1.6         | Lead paragraphs               |
| `--text-small`   | 14px / 0.875rem | 400    | 1.5         | Captions, labels              |
| `--text-mono`    | 14px / 0.875rem | 400    | 1.6         | Technical specs, code         |

### Typography Rules

- **Left-aligned.** No centered text except for hero statements.
- **No justified text.** Left-aligned for readability.
- **Maximum line length: 65–75 characters.** Use `max-w-prose` or `max-w-2xl`.
- **No stacked adjectives.** One modifier per noun, maximum.
- **Headlines are statements, not questions.** "Detection Systems" not "What We Detect."

### Responsive Type

All type sizes scale down on mobile. The scale is defined in the Tailwind theme, not via media queries in CSS.

| Breakpoint | Display | H1   | H2   | H3   | Body |
| ---------- | ------- | ---- | ---- | ---- | ---- |
| Mobile     | 32px    | 28px | 24px | 20px | 16px |
| Tablet     | 40px    | 32px | 28px | 22px | 16px |
| Desktop    | 48px    | 36px | 30px | 24px | 16px |

---

## 4. Spacing

### Scale

Based on a 4px base unit:

| Token        | Value | Usage                       |
| ------------ | ----- | --------------------------- |
| `--space-1`  | 4px   | Tight internal padding      |
| `--space-2`  | 8px   | Small gaps                  |
| `--space-3`  | 12px  | Component internal spacing  |
| `--space-4`  | 16px  | Standard padding            |
| `--space-5`  | 20px  | Card padding                |
| `--space-6`  | 24px  | Section internal spacing    |
| `--space-8`  | 32px  | Between related elements    |
| `--space-10` | 40px  | Between sections (compact)  |
| `--space-12` | 48px  | Between sections (standard) |
| `--space-16` | 64px  | Major section breaks        |
| `--space-20` | 80px  | Page-level spacing          |
| `--space-24` | 96px  | Hero section spacing        |

### Rules

- **Consistent vertical rhythm.** Spacing between elements of the same type should be identical.
- **Progressive spacing.** Space between major sections > space between subsections > space between elements.
- **No arbitrary values.** Use the scale. If a value isn't in the scale, add it to the scale first.

---

## 5. Grids and Layout

### Container

| Token             | Max Width | Usage                         |
| ----------------- | --------- | ----------------------------- |
| `--container-sm`  | 640px     | Narrow content (prose, forms) |
| `--container-md`  | 768px     | Single-column content         |
| `--container-lg`  | 1024px    | Standard page content         |
| `--container-xl`  | 1280px    | Wide layouts (multi-column)   |
| `--container-2xl` | 1536px    | Full-width sections           |

### Grid

- **12-column grid** for page layouts.
- **Column gap: 24px** (`--space-6`).
- **Gutter: 16px** (`--space-4`) on mobile, 24px on desktop.
- **No content touches the edge of the viewport.** Minimum 16px horizontal padding on all screen sizes.

### Layout Patterns

| Pattern                         | Usage                                 |
| ------------------------------- | ------------------------------------- |
| Single column (max-w-prose)     | Body text, articles, forms            |
| Single column (max-w-screen-lg) | Page content with full-width sections |
| Two-column (sidebar + main)     | Product filters + product grid        |
| Three-column                    | Feature comparisons, card grids       |
| Full-bleed                      | Hero sections, full-width backgrounds |

### Rules

- **Content centers itself.** Use `mx-auto` with max-width containers.
- **No fixed-width columns.** Use `fr` or `flex-1` for fluid distribution.
- **Sidebars are 280–320px.** Never wider.
- **Card grids use auto-fill, not fixed counts.** Let CSS handle responsiveness.

---

## 6. Elevation

### Philosophy

Minimal elevation. The dark colour palette reduces the need for shadows — depth is communicated through colour contrast and spacing, not drop shadows.

### Levels

| Level              | Value                        | Usage                     |
| ------------------ | ---------------------------- | ------------------------- |
| `--elevation-none` | `none`                       | Default for most elements |
| `--elevation-sm`   | `0 1px 2px rgba(0,0,0,0.3)`  | Subtle lift on hover      |
| `--elevation-md`   | `0 4px 8px rgba(0,0,0,0.4)`  | Cards, dropdowns          |
| `--elevation-lg`   | `0 8px 16px rgba(0,0,0,0.5)` | Modals, popovers          |

### Rules

- **No elevation by default.** Elements are flat until they need to float.
- **Elevation on hover only.** Cards and interactive elements gain elevation on hover, then return to flat.
- **No box-shadow on text.** Ever.
- **Borders over shadows** for separating content. Use `--color-border`.

---

## 7. Radius

### Scale

| Token           | Value  | Usage                                       |
| --------------- | ------ | ------------------------------------------- |
| `--radius-none` | 0      | No rounding (default for most elements)     |
| `--radius-sm`   | 4px    | Buttons, inputs, small interactive elements |
| `--radius-md`   | 8px    | Cards, containers                           |
| `--radius-lg`   | 12px   | Modals, large containers                    |
| `--radius-full` | 9999px | Badges, status indicators                   |

### Rules

- **Subtle rounding.** Defence-tech aesthetics demand sharpness. Rounding is functional (easier to click, visually softer for cards), not decorative.
- **Consistent within a context.** All cards use the same radius. All buttons use the same radius.
- **No rounding on images** unless specifically designed for that context.

---

## 8. Motion

### Philosophy

Motion serves three purposes: guide attention, communicate state, provide spatial context. Nothing else.

### Duration

| Type     | Duration  | Usage                                             |
| -------- | --------- | ------------------------------------------------- |
| Micro    | 100–150ms | Hover states, focus rings, toggles                |
| Standard | 200–300ms | Page transitions, content reveals                 |
| Complex  | 300–500ms | Scroll-triggered animations, multi-step sequences |

### Easing

| Name          | Value                            | Usage                               |
| ------------- | -------------------------------- | ----------------------------------- |
| `ease-out`    | `cubic-bezier(0.16, 1, 0.3, 1)`  | Elements entering the viewport      |
| `ease-in`     | `cubic-bezier(0.7, 0, 0.84, 0)`  | Elements leaving the viewport       |
| `ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Elements moving within the viewport |

### Rules

- **No animation on page load that blocks content.** Content must be visible immediately.
- **No bounce, no overshoot, no spring.** Defence-tech is not playful.
- **Animate only `opacity` and `transform`.** Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`.
- **Respect `prefers-reduced-motion`.** All animations must be disabled when this media query matches.
- **One animation language.** Use `framer-motion` for complex sequences, CSS transitions for simple state changes. Do not mix approaches within a component.

---

## 9. Iconography

### Library

**Lucide React** — consistent, tree-shakeable, geometric icon set that matches the technical aesthetic.

### Rules

- **Size: 16px or 20px** for inline icons. 24px for standalone icons. Never larger than 32px.
- **Stroke width: 1.5px** (Lucide default). Do not override.
- **Colour: inherit from parent.** Use `text-current` or `text-muted-foreground`.
- **No filled icons.** Stroke-only, always.
- **Icon + label pairing.** Icons should not stand alone without a text label, except for universally understood icons (search, menu, close).

### When to Use Icons

- Navigation items (alongside text labels).
- Action buttons (download, external link, arrow).
- Status indicators (check, warning, error).
- Section headings (optional, subtle).

### When NOT to Use Icons

- Do not use icons as decorative elements.
- Do not use icons to replace words where the meaning is ambiguous.
- Do not use more than 2–3 icons per viewport.

---

## 10. Illustration

### Philosophy

**No illustration.** The site does not use custom illustrations, drawings, or abstract graphics. This is a deliberate choice, not an omission.

### Why

- Illustration introduces a tone that conflicts with the engineering-first positioning.
- Illustration requires a style guide of its own, which adds complexity without proportional value.
- Defence-tech credibility comes from specificity, not abstraction.

### Exceptions

- **Technical diagrams** — system architecture diagrams, operational flow charts, integration maps. These are engineering artefacts, not illustrations. They use the same visual language as the content they accompany (dark background, clean lines, minimal colour).
- **Icons** — covered in Section 9. Lucide icons only.

---

## 11. Imagery

### Philosophy

**Photography is used sparingly and honestly.** No stock photos of soldiers, no generic "tech" imagery, no abstract backgrounds.

### Rules

- **Real photographs only.** Product photos, facility photos, team photos (if published).
- **No stock photography.** If a photograph doesn't depict something real about Stravex, it doesn't belong on the site.
- **Desaturated, high-contrast treatment.** Photography should feel documentary, not commercial.
- **Full-bleed only in heroes.** Otherwise, images sit within content containers with clear context.
- **Always paired with meaningful alt text.** No `alt="image"` or `alt="photo"`.

### Technical Specifications

- **Format:** WebP or AVIF via `next/image`.
- **Maximum width:** 1920px (no need to serve larger).
- **Quality:** 80–85 for photos, 90+ for diagrams.
- **Lazy loading:** All images below the fold. Hero images use `priority`.

---

## 12. Accessibility

### Standards

- **WCAG 2.1 AA** minimum. Target AAA where feasible.
- **axe-core** automated testing — zero critical or serious violations.
- **Keyboard navigation** — every interactive element must be reachable and operable via keyboard.

### Colour Contrast

| Element                             | Minimum Ratio |
| ----------------------------------- | ------------- |
| Normal text (< 18px)                | 4.5:1         |
| Large text (≥ 18px or ≥ 14px bold)  | 3:1           |
| UI components and graphical objects | 3:1           |

### Focus Management

- **Visible focus ring** on all interactive elements. Use `ring-2 ring-primary ring-offset-2 ring-offset-background`.
- **Logical tab order.** Follows visual reading order (left-to-right, top-to-bottom).
- **Focus trapping** in modals and dropdowns.
- **Skip link** as the first element in the DOM — "Skip to main content."

### Screen Reader Support

- All images have meaningful `alt` text.
- All form inputs have associated `<label>` elements.
- All interactive elements have accessible names.
- ARIA landmarks are used correctly (`<nav>`, `<main>`, `<aside>`, etc.).
- Dynamic content updates use `aria-live` regions.

### Motion Sensitivity

All animations respect `prefers-reduced-motion`. When this preference is active:

- All transitions and animations are disabled.
- Content appears instantly.
- Scroll-triggered reveals do not trigger.

---

## 13. Component Patterns

### Buttons

| Variant     | Usage                                       |
| ----------- | ------------------------------------------- |
| Primary     | One per viewport. Main CTA action.          |
| Secondary   | Alternative actions. Less emphasis.         |
| Ghost       | Navigation, tertiary actions.               |
| Destructive | Delete, remove, confirm destructive action. |

**Rules:**

- One primary button per viewport. Never two competing primary actions.
- Button labels are verbs or verb phrases: "Request Briefing", "Download Spec Sheet".
- No "Learn More", "Get Started", or "Contact Us" — name the specific action.

### Cards

| Property   | Value                              |
| ---------- | ---------------------------------- |
| Background | `--color-muted`                    |
| Border     | 1px `--color-border`               |
| Padding    | 24px (`--space-6`)                 |
| Radius     | `--radius-md` (8px)                |
| Hover      | `--elevation-sm` + border lightens |

**Rules:**

- Cards are scannable. One primary action per card.
- Cards never contain nested cards.
- Maturity status is always visible on product cards.

### Forms

| Property         | Value                          |
| ---------------- | ------------------------------ |
| Input background | `--color-background`           |
| Input border     | 1px `--color-border`           |
| Input padding    | 12px vertical, 16px horizontal |
| Focus ring       | `ring-2 ring-primary`          |
| Error state      | `border-error` + `text-error`  |

**Rules:**

- Every input has a visible `<label>`.
- Error messages appear below the input, not in a tooltip.
- No placeholder text as labels.
- Required fields are marked with `*` and `aria-required="true"`.

---

## 14. Dark Mode

### Current Decision

**Dark mode only.** The site is dark by default. There is no light mode toggle.

### Rationale

- Defence-tech aesthetic demands a dark palette.
- A light mode would require a complete second set of colour tokens.
- The audience (procurement, engineers, defence professionals) expects seriousness, not theme options.

### If Light Mode Is Added Later

- Must be a deliberate, tested decision.
- Must maintain WCAG 2.1 AA contrast ratios in both modes.
- Must not change the site's character — only the background/foreground inversion.
- Must be implemented via CSS custom properties (the token system supports this).

---

## 15. Design System Governance

### How Changes Happen

1. A design decision is needed that isn't covered by this document.
2. The decision is made and documented here before implementation.
3. The implementation follows the documentation, not the other way around.

### What Requires Documentation Before Implementation

- New colour tokens.
- New spacing values.
- New component patterns.
- New animation types.
- New typography styles.
- Any deviation from the existing system.

### What Does NOT Require Documentation

- Using existing tokens in new contexts.
- Applying existing patterns to new pages.
- Adjusting content within established layouts.

---

_This design system is the visual constitution for the Stravex Technologies website. It defines the boundaries within which creative decisions are made. Staying within these boundaries is not constraining — it is what makes the site feel like one coherent thing rather than a collection of separate pages._
