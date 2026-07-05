# Stravex Technologies

Indian defence technology company website — detection, interception, and autonomous defence systems.

## Stack

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **UI Primitives:** shadcn (base-nova style)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (via `next/font`)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | Purpose                           |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start development server          |
| `npm run build`        | Production build                  |
| `npm run start`        | Serve production build            |
| `npm run lint`         | Run ESLint                        |
| `npm run format`       | Format all files with Prettier    |
| `npm run format:check` | Check formatting without writing  |
| `npm run typecheck`    | Run TypeScript compiler (no emit) |

## Architecture

```
app/                  # Pages and layouts (App Router)
  [route]/page.tsx    # One page per route
components/
  layout/             # Site-wide: Navigation, Footer
  technologies/       # Technologies page sections
  products/           # Products page sections
  ui/                 # shadcn primitives (Button, Card, etc.)
lib/
  utils.ts            # cn() helper
  types.ts            # Shared TypeScript types
  data/               # Static data (technologies, products)
docs/                 # Engineering handbook
```

**Rule:** `app/` has pages only. `components/` has React components only. `lib/` has non-React code only.

## Documentation

- `docs/PROJECT_RULES.md` — coding standards, conventions
- `docs/ARCHITECTURE.md` — structure, rationale, scalability
- `docs/DESIGN_SYSTEM.md` — visual tokens, UI principles
- `docs/CONTENT_STRATEGY.md` — brand voice, content rules
- `docs/DEVELOPMENT_ROADMAP.md` — phased implementation plan

## Development Workflow

1. Read the relevant `docs/` file before starting work.
2. Create a feature branch: `git checkout -b feature/<description>`.
3. Implement, following naming and structure conventions.
4. Run `npm run lint && npm run typecheck && npm run format:check` before committing.
5. Submit a PR with a clear description of what changed and why.

## Engineering Standards

- TypeScript strict mode. No `any`.
- Server Components by default. `"use client"` only when required.
- Mobile-first responsive design.
- WCAG 2.1 AA accessibility minimum.
- One component per file. Named exports for utilities.
- No inline styles. No CSS modules. Tailwind only.
