# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server.
- `npm run build` — production build (also acts as the type-check, since `tsconfig.json` sets `noEmit`).
- `npm run start` — run the built app.
- `npm run lint` — `next lint` (eslint-config-next).

No test runner is configured.

Both `package-lock.json` and `pnpm-lock.yaml` are committed. Stick to whichever the user is using locally; don't regenerate the other one.

## Architecture

Single-page personal portfolio in **Next.js 15 (App Router) + React 19 + TypeScript + Tailwind 3**.

**Content is data-driven.** All editable copy lives under `data/`. The components in `app/page.tsx` and the secondary route pages read from those files, so changing text/projects/skills almost always means editing `data/*.ts`, not the components:

- `data/site.ts` — name, role, tagline, contact info, socials, SEO keywords.
- `data/projects.ts` — featured projects shown on the home page.
- `data/experiences.ts` — timeline on the home page.
- `data/skills.ts` — categorised skills with icon paths under `public/icons/`.
- `data/futureProjects.ts` — content for `/futuros`.
- `data/facudadeProjects.ts` — content for `/faculdade` (filename has a typo, see Gotchas).

**Routes**
- `/` — `app/page.tsx`, a single `'use client'` component composing `Header`, `Hero`, `Section`, `ProjetoCard`, `ExperienciaItem`, `SkillsList`, `Contato`, and `ThemeToggle`. Uses `framer-motion` for animations and `lucide-react` for icons.
- `/futuros` — `app/futuros/page.tsx`, work-in-progress projects.
- `/faculdade` — `app/faculdade/page.tsx`, university projects.
- SEO surface: `app/layout.tsx` (`metadata`), `app/sitemap.ts`, `app/robots.ts`.

**UI primitives** live in `components/ui/` (`button.tsx`, `card.tsx`, `badge.tsx`, `input.tsx`, `textarea.tsx`). They're hand-rolled (not shadcn-installed) and all rely on `cn()` from `lib/utils.ts` (= `twMerge(clsx(...))`).

## Conventions

- **Path alias**: `@/*` resolves to the repo root (see `tsconfig.json`). Use it for imports (`@/data/site`, `@/components/ui/button`, `@/lib/utils`) instead of relative paths.
- **Theming**: dark mode is class-based. `app/layout.tsx` hardcodes `<html class="dark">`; the `ThemeToggle` in `app/page.tsx` toggles that class on `documentElement` and persists the choice in `localStorage`. Theme tokens are HSL CSS variables in `app/globals.css` (`--background`, `--foreground`, `--primary`, `--muted`, `--border`); `tailwind.config.ts` exposes them as Tailwind colors via `hsl(var(--…))`.
- **Tailwind content globs** in `tailwind.config.ts` cover `./app/**`, `./components/**`, `./data/**` only. Class names used outside those paths (e.g. anything new under `lib/`) will be purged in production. Add a glob if you introduce a new directory with JSX/utility classes.
- **Typed routes**: `next.config.ts` has `typedRoutes: true`, so `next/link` `href` strings are type-checked against the route tree.
- **Remote images**: `next.config.ts` only allows `picsum.photos` under `images.remotePatterns`. Adding a new external image source requires extending that list.
- **Locale**: site copy is Portuguese (PT-PT). Match that locale when editing user-visible strings.

## Gotchas

- `data/facudadeProjects.ts` is a typo of `faculdade` but the route is `app/faculdade/`. The filename and its imports have to change together — don't "fix" the filename in isolation.
- `app/layout.tsx` `metadataBase`, `app/sitemap.ts`, and `app/robots.ts` all reference the placeholder `https://portfolio-exemplo.dev`. The real deployed URL is in `data/site.ts` (`SITE.website`). Updating the live domain means changing all four spots.
- `app/page.tsx` is a client component (`'use client'`) yet sets `document.title` and a `<meta name="description">` at runtime via a `useEffect`. The static `metadata` export in `app/layout.tsx` is what crawlers see — keep both in sync if you change the title/description format.
