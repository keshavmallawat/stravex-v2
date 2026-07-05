# Public — Static Assets

This directory is served statically by Next.js at the root URL (`/`).

## Structure

```
public/
├── icons/          # Favicon, apple-touch-icon, manifest icons
├── logos/          # Stravex logo variants (light, dark, monochrome)
├── images/         # General-purpose images (team, facility, etc.)
├── diagrams/       # Technical diagrams (system architecture, etc.)
└── og/             # Open Graph images (one per page template)
```

## Rules

- No JavaScript or data files — assets only.
- Use `next/image` for all images in `<img>` contexts.
- SVGs may be imported as components or served statically.
- Optimize all images before committing (WebP/AVIF preferred).
- Maximum file size: 500 KB per image (excluding diagrams).
