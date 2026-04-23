# Tresor Design Creative Studio — Architecture

## Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Folder Structure

```
src/
  app/          # App bootstrap (App.tsx, main.tsx)
  assets/       # SVGs, icons bundled by Vite
  components/
    layout/     # Header, Footer, MainContent
    sections/   # Page sections (Hero, About, FeaturedWork, CTA...)
    ui/         # Reusable UI atoms (Modal, Card, Button...)
    shared/     # Cross-cutting components (TradingViewWidget...)
  content/
    projects/   # Project data (index.ts)
    testimonials/ # Testimonials data (index.ts)
    studio/     # Studio bio and brand content
  data/         # Global config (site.ts, navigation.ts, social-links.ts)
  hooks/        # Custom React hooks
  lib/          # Utilities and helper libraries
  pages/        # Route-level page components
  styles/       # Global CSS, design tokens
  types/        # TypeScript type definitions
  utils/        # Pure utility functions
public/
  images/
    projects/   # Project images by slug
    brand/      # Logos, marks, social previews
    portraits/  # Headshots
    services/   # Service imagery
docs/           # This folder — process, guides, architecture
```

## Import Path Convention
All imports are relative to `src/`. Never import across `src/` boundaries from `public/`.
