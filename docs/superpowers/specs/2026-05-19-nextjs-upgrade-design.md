# Next.js Portfolio Upgrade Design

Upgrade the portfolio from Next.js 12 (Pages Router) to Next.js 15 (App Router), update all outdated packages, and modernize the project for future development.

## Approach

Incremental upgrade through each major version (12 → 13 → 14 → 15), then migrate from Pages Router to App Router. Each step is small and testable; codemods handle most mechanical changes.

## Phase 1: Next.js 12 → 13 + React 18

- Upgrade `next` to 13, `react`/`react-dom` to 18, `typescript` to 5.x
- Update `@types/react` and `@types/react-dom` to v18
- Run `npx @next/codemod@13` codemods (new Link behavior, new Image component)
- Fix `next.config.js`: `images.domains` → `images.remotePatterns`
- Remove outdated test deps: enzyme, enzyme-adapter-react-16, @testing-library/*, @types/jest
- Remove unused Babel deps: @babel/plugin-transform-react-jsx, @babel/preset-env, @babel/preset-react, babel-plugin-styled-components
- Verify styled-components SSR still works
- Verify build passes

## Phase 2: Next.js 13 → 14

- Upgrade `next` to 14
- Run Next.js 14 codemods
- Mostly smooth — 14 stabilized App Router but didn't break Pages Router
- Verify build

## Phase 3: Next.js 14 → 15

- Upgrade `next` to 15 (latest stable)
- Upgrade `react`/`react-dom` to 19, `@types/react`/`@types/react-dom` to 19
- Handle async request APIs (`params`, `searchParams` are now async in Next.js 15)
- Update `sharp` to latest
- Verify build

## Phase 4: Pages Router → App Router Migration

### File Structure

Before:
```
src/pages/
  _app.tsx
  _document.tsx
  index.tsx
  404.tsx
  project/[projectId].tsx
```

After:
```
src/app/
  layout.tsx
  page.tsx
  not-found.tsx
  project/[projectId]/page.tsx
src/lib/
  registry.tsx
```

### styled-components SSR in App Router

Create `src/lib/registry.tsx` — a `'use client'` component using `useServerInsertedHTML` to flush ServerStyleSheet styles during SSR. This replaces the `_document.tsx` ServerStyleSheet pattern.

`layout.tsx` (server component) wraps children with the registry, which in turn wraps with `ThemeProvider` and `GlobalStyles`.

### Client vs Server Boundaries

- `layout.tsx` — server component (imports client registry)
- `page.tsx` (home) — server component; interactive parts (Header, DynamicCards, DynamicMarquee, DynamicAboutSection) are client components
- The `enableFocus` keyboard/mouse logic moves into a client component wrapper
- All styled-components usage requires `'use client'` directive on the component file

### Data Fetching Changes

- `getStaticProps` → direct data imports in server components (projects data is already a local import)
- `getStaticPaths` → `generateStaticParams` export
- `getLayout` pattern → nested layouts via `src/app/layout.tsx`

## Package Changes

### Updated

| Package | From | To |
|---|---|---|
| next | 12.0.3 | 15.x |
| react / react-dom | 17.0.2 | 19.x |
| typescript | 4.4.4 | 5.x |
| @types/react / @types/react-dom | 17.x | 19.x |
| @types/node | 16.x | 22.x |
| styled-components | 5.3 | 6.x |
| @types/styled-components | 5.1 | removed (v6 ships its own types) |
| sharp | 0.29.3 | latest |
| axios | 0.26.1 | 1.x |
| react-fast-marquee | 1.2.1 | latest |
| react-scroll / @types/react-scroll | 1.8.4 | latest |
| @react-spring/web | 9.0.0-rc.3 | latest stable |
| eslint | <8.0.0 | 9.x |

### Removed

| Package | Reason |
|---|---|
| enzyme / enzyme-adapter-react-16 | No React 18+ support |
| @testing-library/* / @types/jest | Removing tests for now |
| @babel/plugin-transform-react-jsx | Next.js handles JSX transforms |
| @babel/preset-env / @babel/preset-react | Not needed with SWC |
| babel-plugin-styled-components | SWC compiler plugin replaces it |
| netlify-cli | Moving to Vercel |
| rimraf | Not needed |
| react-spring | Duplicate of @react-spring/web |
| color / @types/color | Remove if unused |

## Config Changes

### next.config.js

- `images.domains` → `images.remotePatterns` (structured format)
- Add `compiler: { styledComponents: true }`
- Remove `i18n` config (App Router doesn't use it; only `en` locale)
- Keep `reactStrictMode: true`, `poweredByHeader: false`

### tsconfig.json

- `moduleResolution` → `"bundler"`
- Add `@/lib/*` path alias → `src/lib/*`
- Remove `emitDecoratorMetadata` / `experimentalDecorators`
- Add `"plugins": [{ "name": "next" }]`

### Scripts

- `"build": "next build"` (remove rimraf prefix)
- `"dev": "next dev --turbopack"`
- `"start": "next start"`
- Remove `"test"` script

### Deployment

- Remove netlify-cli
- No special Vercel config needed — Next.js 15 App Router works out of the box
- Do NOT use `output: 'export'`
