# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio site (Gianni Gabriel) built with React 19 + TypeScript + Vite. No backend, no routing beyond a single page (React Router is installed but the app currently renders one route with in-page anchor scrolling).

## Commands

```bash
npm run dev       # start Vite dev server (port 5173)
npm run build     # tsc -b (project references type-check) then vite build
npm run lint      # eslint .
npm run preview   # preview the production build
```

There is no test suite/runner configured in this repo.

## Architecture

**Composition root**: `src/main.tsx` wraps `App` in `BrowserRouter`. `src/App.tsx` wraps the page in `ThemeProvider` > `LanguageProvider` and renders one section per component in order: `Navbar`, `Hero`, `About`, `TechStack`, `Projects`, `Contact`. Sections are stacked on a single page and linked to via anchor hashes (`#about`, `#projects`, `#contact`), not separate routes.

**Two global contexts** (`src/context/`), both plain `createContext`/`useContext` (no external state library):
- `ThemeContext` — light/dark mode. Persists to `localStorage["theme"]`, falls back to `prefers-color-scheme`, and toggles a `.dark` class on `document.documentElement`. Consume via `useTheme()`.
- `LanguageContext` — i18n. Persists to `localStorage["lang"]`, falls back to `navigator.language`. Consume via `useLanguage()`, which exposes `{ lang, t, toggleLang }` where `t` is the active translation object.

**i18n** (`src/i18n/`): `en.ts` and `es.ts` each default-export a `const` object literal (`as const`) with the same shape (`nav`, `hero`, `about`, `techStack`, `projects`, `contact`, ...). `index.ts` derives `Lang`/`Translations` types from `en`'s shape and exports `translations` + `detectLang()`. When adding UI copy, add the key to **both** `en.ts` and `es.ts` — the `Translations` type is inferred from `en.ts`, so `es.ts` will not type-error if a key is missing, but the UI will silently render `undefined` for Spanish users. Components read strings via `t.section.key`, never hardcoded copy.

**Theming**: CSS custom properties are the source of truth, defined in `src/index.css` under `:root` (light) and `.dark` (dark overrides), then re-exposed to Tailwind via `@theme inline` blocks so utility classes like `bg-color-bg`/`text-color-text`/`border-border` resolve to the current theme. There's a second, parallel set of shadcn/Radix theme tokens (`--background`, `--card`, `--primary`, etc., in OKLCH) used by shadcn UI primitives — the two token sets coexist and aren't unified. When styling custom sections, prefer the `--color-*` tokens already used across components (`bg-color-bg`, `text-text`, `text-accent`, `border-border`) for consistency with the existing design.

**UI components / shadcn**: configured via `components.json` (style `radix-nova`, base color `neutral`, icon library `lucide`, path aliases `@/components`, `@/lib`, `@/ui`, `@/hooks`). Use the `shadcn` CLI to add new primitives rather than hand-rolling them, so they land in `src/components/ui` with the project's conventions.

**Path alias**: `@/*` → `src/*`, configured in both `tsconfig.json` and `vite.config.ts` — use it for new imports instead of long relative paths.

**Tech stack data**: `src/lib/techStack.ts` exports a flat `stack` array of `{ name, icon, type }` (icons from `@icons-pack/react-simple-icons`, with one custom icon component in `src/assets/awsIcon.tsx`). `type` is a category string or array of categories (`frontend`/`backend`/`database`/`tools`/`devops`) and drives the filterable grid in `TechStack.tsx`. Add new technologies here rather than inline in the component.

**Animation**: `framer-motion` is used throughout for transitions (mobile menu open/close, theme toggle, etc.) — follow the existing `motion.div` + `AnimatePresence` pattern seen in `Navbar.tsx` rather than introducing a different animation approach.

**React Compiler**: enabled via `@vitejs/plugin-react`'s `reactCompilerPreset` + `@rolldown/plugin-babel` in `vite.config.ts`. Avoid manual `useMemo`/`useCallback` micro-optimizations that fight the compiler; write plain component code.

**Smooth scroll**: anchor navigation relies on `scroll-behavior: smooth` (global) plus `scroll-margin-top` on `[id]` in `index.css` to offset the sticky navbar — mobile menu links in `Navbar.tsx` close the menu first, then `scrollIntoView` after a `setTimeout` so the collapse animation doesn't fight the scroll. Follow this pattern if adding new anchor links.
