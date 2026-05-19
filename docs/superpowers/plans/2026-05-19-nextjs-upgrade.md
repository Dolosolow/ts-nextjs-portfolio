# Next.js 12→15 Upgrade + App Router Migration

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade portfolio from Next.js 12/React 17/Pages Router to Next.js 15/React 19/App Router with all dependencies modernized.

**Architecture:** Incremental version upgrades (12→13→14→15) keeping the app working at each step, then convert Pages Router to App Router. styled-components kept with a new SSR registry for App Router.

**Tech Stack:** Next.js 15, React 19, TypeScript 5, styled-components 6, @react-spring/web, axios 1.x

---

## File Structure

### New files
- `src/lib/registry.tsx` — styled-components SSR registry for App Router
- `src/app/layout.tsx` — root layout (replaces `_app.tsx` + `_document.tsx`)
- `src/app/page.tsx` — home page (replaces `src/pages/index.tsx`)
- `src/app/not-found.tsx` — 404 page (replaces `src/pages/404.tsx`)
- `src/app/project/[projectId]/page.tsx` — project detail (replaces `src/pages/project/[projectId].tsx`)

### Deleted files
- `src/pages/_app.tsx`
- `src/pages/_document.tsx`
- `src/pages/index.tsx`
- `src/pages/404.tsx`
- `src/pages/project/[projectId].tsx`

### Modified files
- `package.json` — all dependency versions
- `next.config.js` — image config, compiler options, remove i18n
- `tsconfig.json` — moduleResolution, plugins, path aliases
- `src/types/index.d.ts` — remove `AppPropsWithLayout` (Pages Router type)
- `src/types/styled.d.ts` — update for styled-components v6
- `src/components/common/head-document/HeadDocument.tsx` — split into metadata export + client scripts
- `src/components/layout/Layout.tsx` — `useRouter` → `usePathname` from `next/navigation`
- `src/components/common/slide-left-link/SlideLeftLink.tsx` — `useRouter` → `useRouter` from `next/navigation`
- `src/components/common/card/card.tsx` — remove `passHref`, update Image props
- `src/components/common/marquee-gallery/MarqueeGallery.tsx` — update Image `width`/`height` from string to number
- `src/components/pages/root/header/Header.tsx` — update Image props (`layout="fill"` → `fill`)
- `src/components/pages/project/project-img-details/ProjectImgDetails.tsx` — update Image props
- `src/components/pages/project/project-doc-details/api-project-page/ApiProjectPage.tsx` — update Image props
- `src/components/pages/project/project-doc-details/mobile-project-page/mobile-project-preview/MobileProjectPreview.tsx` — update Image `width`/`height` from string to number
- `src/components/pages/project/stack-list/StackList.tsx` — update Image props (`layout="fill"` → `fill`)
- `src/pages/404.tsx` — update Image props (before App Router conversion)
- `src/hooks/useToggledSpring.tsx` — update `react-spring` → `@react-spring/web`
- `src/hooks/useToggledTrail.tsx` — update `react-spring` → `@react-spring/web`
- `src/components/common/card/styled.ts` — update `react-spring` → `@react-spring/web`
- `src/components/pages/root/header/styled.ts` — update `react-spring` → `@react-spring/web`
- `src/components/common/card/card.tsx` — update `react-spring` → `@react-spring/web` type import
- `src/components/common/card-list/cardList.tsx` — update `react-spring` → `@react-spring/web` type import
- `src/components/pages/root/header/AnimatedHeaderContainer.tsx` — update `react-spring` → `@react-spring/web` type import
- `src/styles/global-styles.ts` — update for styled-components v6 API if needed

---

## Task 1: Remove outdated dependencies and clean scripts

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Remove test dependencies and unused Babel deps**

Remove from `dependencies`:
```
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
@types/jest
```

Remove from `devDependencies`:
```
@babel/plugin-transform-react-jsx
@babel/preset-env
@babel/preset-react
babel-plugin-styled-components
enzyme
enzyme-adapter-react-16
netlify-cli
rimraf
```

Run:
```bash
yarn remove @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @babel/plugin-transform-react-jsx @babel/preset-env @babel/preset-react babel-plugin-styled-components enzyme enzyme-adapter-react-16 netlify-cli rimraf
```

- [ ] **Step 2: Clean up scripts in package.json**

Change the `"scripts"` section to:
```json
{
  "build": "next build",
  "dev": "next dev",
  "start": "next start"
}
```

Remove the `"test"` script and the `"eslintConfig"` and `"browserslist"` sections from `package.json`.

- [ ] **Step 3: Verify yarn install works**

Run:
```bash
yarn install
```
Expected: installs without errors.

- [ ] **Step 4: Commit**

```bash
git add package.json yarn.lock
git commit -m "chore: remove outdated test, Babel, and deployment dependencies"
```

---

## Task 2: Upgrade to Next.js 13 + React 18 + TypeScript 5

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Upgrade core packages**

```bash
yarn add next@13 react@18 react-dom@18 typescript@5 @types/react@18 @types/react-dom@18 @types/node@22 sharp@latest
```

- [ ] **Step 2: Upgrade eslint**

```bash
yarn add --dev eslint@8
```

(Next.js 13 works with ESLint 8. We'll upgrade to 9 with Next.js 15.)

- [ ] **Step 3: Verify build**

```bash
yarn build
```

Expected: build succeeds (warnings are OK, errors are not). If there are TypeScript errors related to the React 18 types, note them — they'll be fixed in the next tasks.

- [ ] **Step 4: Commit**

```bash
git add package.json yarn.lock
git commit -m "chore: upgrade to Next.js 13, React 18, TypeScript 5"
```

---

## Task 3: Fix Next.js 13 breaking changes — Image component

Next.js 13 renamed the Image component. The old `next/image` with `layout`, `objectFit`, `objectPosition` props is now at `next/legacy/image`. The new `next/image` uses `fill`, `style`, and `sizes` props instead. We'll migrate to the new API.

**Files:**
- Modify: `src/components/common/card/card.tsx`
- Modify: `src/components/pages/root/header/Header.tsx`
- Modify: `src/components/pages/project/project-img-details/ProjectImgDetails.tsx`
- Modify: `src/components/pages/project/project-doc-details/api-project-page/ApiProjectPage.tsx`
- Modify: `src/components/pages/project/stack-list/StackList.tsx`
- Modify: `src/pages/404.tsx`
- Modify: `src/components/common/marquee-gallery/MarqueeGallery.tsx`
- Modify: `src/components/pages/project/project-doc-details/mobile-project-page/mobile-project-preview/MobileProjectPreview.tsx`

- [ ] **Step 1: Update card.tsx Image**

In `src/components/common/card/card.tsx`, change the NextImage usage from:
```tsx
<NextImage
  role="img"
  layout="fill"
  src={data.images.thumbnail}
  alt={data.name}
  objectFit="cover"
/>
```
to:
```tsx
<NextImage
  role="img"
  fill
  src={data.images.thumbnail}
  alt={data.name}
  style={{ objectFit: "cover" }}
/>
```

- [ ] **Step 2: Update Header.tsx Image**

In `src/components/pages/root/header/Header.tsx`, change from:
```tsx
<NextImage
  priority
  src={lang.homepage.header.images.reg}
  alt="smoked backed image"
  layout="fill"
  objectFit="cover"
  objectPosition="center"
/>
```
to:
```tsx
<NextImage
  priority
  src={lang.homepage.header.images.reg}
  alt="smoked backed image"
  fill
  style={{ objectFit: "cover", objectPosition: "center" }}
/>
```

- [ ] **Step 3: Update ProjectImgDetails.tsx Image**

In `src/components/pages/project/project-img-details/ProjectImgDetails.tsx`, change from:
```tsx
<NextImage
  priority
  alt="project layout"
  src={project.images.detailed.toString()}
  placeholder="blur"
  blurDataURL={project.images.blur}
  height={project.images.height}
  width={project.images.width}
  objectFit="contain"
/>
```
to:
```tsx
<NextImage
  priority
  alt="project layout"
  src={project.images.detailed.toString()}
  placeholder="blur"
  blurDataURL={project.images.blur}
  height={Number(project.images.height)}
  width={Number(project.images.width)}
  style={{ objectFit: "contain" }}
/>
```

- [ ] **Step 4: Update ApiProjectPage.tsx Image**

In `src/components/pages/project/project-doc-details/api-project-page/ApiProjectPage.tsx`, change from:
```tsx
<NextImage
  priority
  src={project.images.detailed.toString()}
  alt="image"
  layout="fill"
  objectFit="contain"
/>
```
to:
```tsx
<NextImage
  priority
  src={project.images.detailed.toString()}
  alt="image"
  fill
  style={{ objectFit: "contain" }}
/>
```

- [ ] **Step 5: Update StackList.tsx Image**

In `src/components/pages/project/stack-list/StackList.tsx`, change from:
```tsx
<NextImage src={techImgs[item.toLowerCase()]} alt="tech" layout="fill" />
```
to:
```tsx
<NextImage src={techImgs[item.toLowerCase()]} alt="tech" fill />
```

- [ ] **Step 6: Update 404.tsx Image**

In `src/pages/404.tsx`, change from:
```tsx
<NextImage
  priority
  src={lang.pageNotFound.images.reg}
  alt="page not found"
  objectFit="cover"
  layout="fill"
/>
```
to:
```tsx
<NextImage
  priority
  src={lang.pageNotFound.images.reg}
  alt="page not found"
  fill
  style={{ objectFit: "cover" }}
/>
```

- [ ] **Step 7: Update MarqueeGallery.tsx Image**

In `src/components/common/marquee-gallery/MarqueeGallery.tsx`, change from:
```tsx
<NextImage
  role="img"
  src={img}
  alt={`${img.split("/")[4].split(".")[0]}`}
  width="100%"
  height="100%"
/>
```
to:
```tsx
<NextImage
  role="img"
  src={img}
  alt={`${img.split("/")[4].split(".")[0]}`}
  width={100}
  height={100}
/>
```

(The old string `"100%"` is not valid in the new Image API — use numeric pixel values.)

- [ ] **Step 8: Update MobileProjectPreview.tsx Image**

In `src/components/pages/project/project-doc-details/mobile-project-page/mobile-project-preview/MobileProjectPreview.tsx`, change from:
```tsx
<NextImage src={qrImgSrc} width="200px" height="200px" />
```
to:
```tsx
<NextImage src={qrImgSrc} width={200} height={200} alt="QR code" />
```

- [ ] **Step 9: Verify build**

```bash
yarn build
```
Expected: no errors related to `next/image`.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "fix: migrate all next/image usages to Next.js 13 API"
```

---

## Task 4: Fix Next.js 13 breaking changes — Link component and config

**Files:**
- Modify: `src/components/common/card/card.tsx`
- Modify: `next.config.js`

- [ ] **Step 1: Remove passHref from Link**

In `src/components/common/card/card.tsx`, change from:
```tsx
<Link passHref href={generateUrlQuery(data, data.type)}>
```
to:
```tsx
<Link href={generateUrlQuery(data, data.type)}>
```

(Next.js 13 `<Link>` renders an `<a>` automatically — `passHref` is no longer needed.)

- [ ] **Step 2: Update next.config.js**

Replace the entire `next.config.js` with:
```js
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};
```

Changes:
- `images.domains` → `images.remotePatterns`
- Added `compiler.styledComponents` (replaces babel-plugin-styled-components)
- Removed `i18n` (not needed — only `en` locale, and App Router handles i18n differently)

- [ ] **Step 3: Verify build**

```bash
yarn build
```
Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add next.config.js src/components/common/card/card.tsx
git commit -m "fix: update Link component and next.config.js for Next.js 13"
```

---

## Task 5: Upgrade to Next.js 14

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Upgrade next**

```bash
yarn add next@14
```

- [ ] **Step 2: Verify build**

```bash
yarn build
```
Expected: build succeeds. Next.js 14 has no breaking changes for Pages Router apps.

- [ ] **Step 3: Commit**

```bash
git add package.json yarn.lock
git commit -m "chore: upgrade to Next.js 14"
```

---

## Task 6: Upgrade to Next.js 15 + React 19

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Upgrade core packages to latest**

```bash
yarn add next@15 react@19 react-dom@19 @types/react@19 @types/react-dom@19
```

- [ ] **Step 2: Verify build**

```bash
yarn build
```

Expected: build may have warnings about React 19 type changes. Errors will be fixed in following steps.

- [ ] **Step 3: Commit**

```bash
git add package.json yarn.lock
git commit -m "chore: upgrade to Next.js 15, React 19"
```

---

## Task 7: Fix React 19 + styled-components v6 type issues

**Files:**
- Modify: `package.json`
- Modify: `src/types/styled.d.ts`
- Modify: `src/styles/global-styles.ts`

- [ ] **Step 1: Upgrade styled-components to v6 and remove @types/styled-components**

```bash
yarn add styled-components@6
yarn remove @types/styled-components
```

(styled-components v6 ships its own TypeScript types.)

- [ ] **Step 2: Update styled.d.ts for v6**

In `src/types/styled.d.ts`, the module augmentation should still work the same way for v6. Verify the file content is:
```ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      coolBlue: string;
      primary: string;
      rasinBlack: string;
      smokedWhite: string;
      white: string;
    };
    fonts: {
      primaryFont: string;
    };
    mediaPx: {
      tabLand: number;
      tabPort: number;
      phone: number;
    };
  }
}
```

No changes needed if it already looks like this.

- [ ] **Step 3: Fix any styled-components v6 breaking changes**

styled-components v6 changes:
- The `.attrs` API changed slightly — check if any component uses `.attrs()` and update if needed.
- `createGlobalStyle` still works the same way.
- `ServerStyleSheet` still works the same way.
- `ThemeProvider` still works the same way.

Run:
```bash
grep -rn "\.attrs" src/ --include="*.ts" --include="*.tsx"
```

If any files use `.attrs()`, update them. The v6 change is that `.attrs()` no longer accepts a function — use an object or pass props through.

- [ ] **Step 4: Verify build**

```bash
yarn build
```

Expected: build succeeds. Fix any remaining type errors.

- [ ] **Step 5: Commit**

```bash
git add package.json yarn.lock src/types/styled.d.ts
git commit -m "chore: upgrade styled-components to v6, remove @types/styled-components"
```

---

## Task 8: Update remaining dependencies

**Files:**
- Modify: `package.json`
- Modify: `src/hooks/useToggledSpring.tsx`
- Modify: `src/hooks/useToggledTrail.tsx`
- Modify: `src/components/common/card/styled.ts`
- Modify: `src/components/pages/root/header/styled.ts`
- Modify: `src/components/common/card/card.tsx`
- Modify: `src/components/common/card-list/cardList.tsx`
- Modify: `src/components/pages/root/header/AnimatedHeaderContainer.tsx`

- [ ] **Step 1: Upgrade axios, react-fast-marquee, react-scroll, color**

```bash
yarn add axios@latest react-fast-marquee@latest react-scroll@latest color@latest @types/react-scroll@latest react-code-blocks@latest
```

- [ ] **Step 2: Replace react-spring with @react-spring/web**

```bash
yarn remove react-spring @react-spring/web
yarn add @react-spring/web@latest
```

- [ ] **Step 3: Update imports in useToggledSpring.tsx**

In `src/hooks/useToggledSpring.tsx`, change:
```ts
import { useSpring } from "react-spring";
```
to:
```ts
import { useSpring } from "@react-spring/web";
```

- [ ] **Step 4: Update imports in useToggledTrail.tsx**

In `src/hooks/useToggledTrail.tsx`, change:
```ts
import { useTrail } from "react-spring";
```
to:
```ts
import { useTrail } from "@react-spring/web";
```

- [ ] **Step 5: Update imports in card/styled.ts**

In `src/components/common/card/styled.ts`, change:
```ts
import { animated } from "react-spring";
```
to:
```ts
import { animated } from "@react-spring/web";
```

- [ ] **Step 6: Update imports in header/styled.ts**

In `src/components/pages/root/header/styled.ts`, change:
```ts
import { animated } from "react-spring";
```
to:
```ts
import { animated } from "@react-spring/web";
```

- [ ] **Step 7: Update type imports in card/card.tsx**

In `src/components/common/card/card.tsx`, change:
```ts
import type { SpringValue } from "react-spring";
```
to:
```ts
import type { SpringValue } from "@react-spring/web";
```

- [ ] **Step 8: Update type imports in card-list/cardList.tsx**

In `src/components/common/card-list/cardList.tsx`, change:
```ts
import type { SpringValue } from "react-spring";
```
to:
```ts
import type { SpringValue } from "@react-spring/web";
```

- [ ] **Step 9: Update type imports in AnimatedHeaderContainer.tsx**

In `src/components/pages/root/header/AnimatedHeaderContainer.tsx`, change:
```ts
import type { SpringValue } from "react-spring";
```
to:
```ts
import type { SpringValue } from "@react-spring/web";
```

- [ ] **Step 10: Verify build**

```bash
yarn build
```
Expected: build succeeds.

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "chore: update all remaining dependencies, migrate react-spring to @react-spring/web"
```

---

## Task 9: Update tsconfig.json

**Files:**
- Modify: `tsconfig.json`

- [ ] **Step 1: Update tsconfig.json**

Replace `tsconfig.json` with:
```json
{
  "compilerOptions": {
    "target": "es2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "removeComments": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["src/components/*"],
      "@/data/*": ["src/data/*"],
      "@/hooks/*": ["src/hooks/*"],
      "@/lang/*": ["src/lang/*"],
      "@/lib/*": ["src/lib/*"],
      "@/styles/*": ["src/styles/*"],
      "@/types/*": ["src/types/*"],
      "@/utils/*": ["src/utils/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

Changes from the original:
- Removed `"es6"` and `"es2017"` from `lib` (redundant with `"esnext"`)
- Removed `emitDecoratorMetadata` and `experimentalDecorators` (not used)
- Changed `moduleResolution` from `"node"` to `"bundler"`
- Added `plugins` for Next.js TypeScript plugin
- Added `@/lib/*` path alias
- Simplified `include` (removed redundant `"src/styles/pages"`)

- [ ] **Step 2: Verify build**

```bash
yarn build
```
Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add tsconfig.json
git commit -m "chore: update tsconfig.json for Next.js 15"
```

---

## Task 10: Create styled-components registry for App Router

**Files:**
- Create: `src/lib/registry.tsx`

- [ ] **Step 1: Create the registry file**

Create `src/lib/registry.tsx`:
```tsx
'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';

import GlobalStyles, { Theme } from '@/styles/global-styles';

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleTags();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') {
    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    );
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
}
```

- [ ] **Step 2: Verify the file compiles**

```bash
npx tsc --noEmit src/lib/registry.tsx 2>&1 || true
```

Check for type errors. The full build verification comes after the layout is created.

- [ ] **Step 3: Commit**

```bash
git add src/lib/registry.tsx
git commit -m "feat: add styled-components SSR registry for App Router"
```

---

## Task 11: Create App Router layout

**Files:**
- Create: `src/app/layout.tsx`

- [ ] **Step 1: Create the root layout**

Create `src/app/layout.tsx`:
```tsx
import type { Metadata } from 'next';
import Script from 'next/script';

import StyledComponentsRegistry from '@/lib/registry';

import lang from '@/lang/en.lang';

const { title, description, domain, keywords, url, cardImgUrl } = lang.meta;

export const metadata: Metadata = {
  title: title.content,
  description: description.content,
  keywords: keywords.content,
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: title.content,
    description: description.content,
    images: [cardImgUrl],
    siteName: domain,
    url: url,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
  other: {
    'theme-color': '#000000',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
      </head>
      <body>
        <Script
          id="typekit"
          dangerouslySetInnerHTML={{
            __html: `
            (function(d) {
              var config = {
                kitId: 'rkp3shh',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\\bwf-loading\\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document)
            `,
          }}
        />
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-2704BN32BH"
        />
        <Script id="gtag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GLG_ANALYTICS}');
          `}
        </Script>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
```

This replaces both `_document.tsx` (HTML shell, meta tags, styled-components SSR) and `_app.tsx` (ThemeProvider, GlobalStyles, HtmlHead).

- [ ] **Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: create App Router root layout"
```

---

## Task 12: Update Layout component for App Router

**Files:**
- Modify: `src/components/layout/Layout.tsx`
- Modify: `src/components/common/slide-left-link/SlideLeftLink.tsx`

- [ ] **Step 1: Update Layout.tsx to use next/navigation**

Replace `src/components/layout/Layout.tsx` with:
```tsx
'use client';

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';

const DynamicFooter = dynamic<{ isRootRoute: boolean }>(() =>
  import('src/components/common/footer').then((mod) => mod.Footer)
);
const DynamicNavbar = dynamic<{ isRootRoute: boolean }>(() =>
  import('src/components/common/navbar').then((mod) => mod.Navbar)
);
const DynamicToTopButton = dynamic<{ isRootRoute: boolean }>(() =>
  import('src/components/common/to-top-button').then((mod) => mod.ToTopButton)
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hasDoc = searchParams.get('doc') !== null;
  const hasWeb = searchParams.get('web') !== null;
  const isRootRoute = pathname === '/';

  return (
    <>
      <DynamicNavbar isRootRoute={isRootRoute && !hasDoc && !hasWeb} />
      {children}
      <DynamicToTopButton isRootRoute={isRootRoute || !hasDoc} />
      <DynamicFooter isRootRoute={isRootRoute || !hasDoc} />
    </>
  );
};

export default Layout;
```

- [ ] **Step 2: Update SlideLeftLink.tsx to use next/navigation**

In `src/components/common/slide-left-link/SlideLeftLink.tsx`, change:
```ts
import { useRouter } from "next/router";
```
to:
```ts
import { useRouter } from "next/navigation";
```

The `router.push(href)` call stays the same — the `next/navigation` `useRouter` has the same `push` method.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Layout.tsx src/components/common/slide-left-link/SlideLeftLink.tsx
git commit -m "refactor: update Layout and SlideLeftLink to use next/navigation"
```

---

## Task 13: Convert home page to App Router

**Files:**
- Create: `src/app/page.tsx`

- [ ] **Step 1: Create the App Router home page**

Create `src/app/page.tsx`:
```tsx
import { HomeContent } from '@/components/pages/root/home-content';

import projects from '@/data/projects';

export default function Home() {
  return <HomeContent projects={projects} />;
}
```

This is a server component that passes data directly (no `getStaticProps` needed — data is a local import).

- [ ] **Step 2: Extract the client-side home content**

We need to extract the interactive parts of the old `src/pages/index.tsx` into a client component. Create the concept inline — we'll add `'use client'` to the existing page content.

Create `src/components/pages/root/home-content/HomeContent.tsx`:
```tsx
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Layout from '@/components/layout/Layout';
import { MainWrapper } from '@/styles/pages/styled-home';
import { Header } from '@/components/pages/root/header';
import type { CLProps } from '@/components/common/card-list';
import type { MGProps } from '@/components/common/marquee-gallery';
import type { ASProps } from '@/components/pages/root/about-section';
import type { JRMProject } from '@/types/index';

import lang from 'src/lang/en.lang';

const DynamicCards = dynamic<CLProps>(() =>
  import('@/components/common/card-list').then((mod) => mod.CardList)
);
const DynamicMarquee = dynamic<MGProps>(() =>
  import('@/components/common/marquee-gallery').then((mod) => mod.MarqueeGallery)
);
const DynamicAboutSection = dynamic<ASProps>(() =>
  import('@/components/pages/root/about-section').then((mod) => mod.AboutSection)
);

export const HomeContent = ({ projects }: { projects: JRMProject[] }) => {
  const [enableFocus, setEnableFocus] = useState(false);

  useEffect(() => {
    const eventlistenerKD = () => {
      setEnableFocus(true);
    };

    const eventlistenerMD = () => {
      setEnableFocus(false);
    };

    document.addEventListener('keydown', eventlistenerKD);
    document.addEventListener('mousedown', eventlistenerMD);

    return () => {
      document.removeEventListener('keydown', eventlistenerKD);
      document.removeEventListener('mousedown', eventlistenerMD);
    };
  }, []);

  return (
    <Layout>
      <MainWrapper $enableFocus={enableFocus}>
        <Header content={{ ...lang.homepage.header }} />
        <DynamicCards id="projects" projects={projects} />
        <DynamicMarquee id="about" />
        <DynamicAboutSection id="about" content={{ ...lang.homepage.aboutSection }} />
      </MainWrapper>
    </Layout>
  );
};
```

- [ ] **Step 3: Create barrel export**

Create `src/components/pages/root/home-content/index.ts`:
```ts
export { HomeContent } from './HomeContent';
```

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx src/components/pages/root/home-content/HomeContent.tsx src/components/pages/root/home-content/index.ts
git commit -m "feat: convert home page to App Router"
```

---

## Task 14: Convert project detail page to App Router

**Files:**
- Create: `src/app/project/[projectId]/page.tsx`

- [ ] **Step 1: Create the App Router project detail page**

Create `src/app/project/[projectId]/page.tsx`:
```tsx
import { notFound } from 'next/navigation';

import { ProjectDetailContent } from '@/components/pages/project/project-detail-content';

import Projects from '@/data/projects';

export function generateStaticParams() {
  return Projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const project = Projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
```

Note: In Next.js 15, `params` is async and must be awaited.

- [ ] **Step 2: Create the client-side project detail content**

Create `src/components/pages/project/project-detail-content/ProjectDetailContent.tsx`:
```tsx
'use client';

import Layout from '@/components/layout/Layout';
import { ProjectDocDetails } from '@/components/pages/project/project-doc-details';
import { ProjectImgDetails } from '@/components/pages/project/project-img-details';

import type { JRMProject } from '@/types/index';

export const ProjectDetailContent = ({ project }: { project: JRMProject }) => {
  return (
    <Layout>
      {project.type === 'web' ? (
        <ProjectImgDetails project={project} />
      ) : (
        <ProjectDocDetails project={project} />
      )}
    </Layout>
  );
};
```

- [ ] **Step 3: Create barrel export**

Create `src/components/pages/project/project-detail-content/index.ts`:
```ts
export { ProjectDetailContent } from './ProjectDetailContent';
```

- [ ] **Step 4: Commit**

```bash
git add src/app/project/[projectId]/page.tsx src/components/pages/project/project-detail-content/ProjectDetailContent.tsx src/components/pages/project/project-detail-content/index.ts
git commit -m "feat: convert project detail page to App Router"
```

---

## Task 15: Convert 404 page to App Router

**Files:**
- Create: `src/app/not-found.tsx`

- [ ] **Step 1: Create the App Router not-found page**

Create `src/app/not-found.tsx`:
```tsx
'use client';

import NextImage from 'next/image';
import Link from 'next/link';

import { StyledButton } from '@/components/common/styled-button';
import { PageNotFoundWrapper } from '@/styles/pages/styled-404';

import lang from '@/lang/en.lang';

export default function NotFound() {
  return (
    <PageNotFoundWrapper>
      <div className="pnf__bgtext">
        <p>OOPS</p>
      </div>
      <div className="pnf__message">
        <p>Sorry, the page your looking for can't not be found.</p>
      </div>
      <Link href="/">
        <StyledButton style={{ zIndex: 100 }}>Go Home</StyledButton>
      </Link>
      <div className="pnf__imgwrapper">
        <NextImage
          priority
          src={lang.pageNotFound.images.reg}
          alt="page not found"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </PageNotFoundWrapper>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/not-found.tsx
git commit -m "feat: convert 404 page to App Router not-found"
```

---

## Task 16: Delete Pages Router files and clean up types

**Files:**
- Delete: `src/pages/_app.tsx`
- Delete: `src/pages/_document.tsx`
- Delete: `src/pages/index.tsx`
- Delete: `src/pages/404.tsx`
- Delete: `src/pages/project/[projectId].tsx`
- Modify: `src/types/index.d.ts`

- [ ] **Step 1: Delete all Pages Router files**

```bash
rm -rf src/pages
```

- [ ] **Step 2: Clean up types/index.d.ts**

In `src/types/index.d.ts`, remove the Pages Router types at the top of the file. Remove:
```ts
import type { AppProps } from "next/app";
import type { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
```

The remaining types (`Stack`, `JRMProject`, etc.) stay as-is. The file should start with:
```ts
import type { HTMLInputTypeAttribute } from "react";

export type Stack =
  | "Babel"
  // ... rest unchanged
```

Also remove `ReactElement` and `ReactNode` from the import if they're no longer used after removing the Layout types.

- [ ] **Step 3: Verify build**

```bash
yarn build
```
Expected: build succeeds with only App Router pages.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "refactor: remove Pages Router files, clean up types"
```

---

## Task 17: Add 'use client' directives to all client components

Many components use hooks, browser APIs, or styled-components but don't have `'use client'` yet. In the App Router, any component that uses `useState`, `useEffect`, `useLayoutEffect`, or other React client features needs the directive.

**Files:** All component files that use React hooks or browser APIs and are not already marked.

- [ ] **Step 1: Add 'use client' to all component files that need it**

Add `'use client';` as the first line of these files (the ones that use hooks, event handlers, or `styled(animated.div)` etc.):

Files that need `'use client'`:
- `src/components/common/navbar/navbar.tsx` (useState, useEffect)
- `src/components/common/copy-button/CopyButton.tsx` (useClipboard hook)
- `src/components/common/flip-book/FlipBook.tsx` (likely uses hooks — check)
- `src/components/common/footer/footer.tsx` (check for hooks)
- `src/components/common/to-top-button/ToTopButton.tsx` (likely uses scroll events)
- `src/components/pages/root/header/AnimatedHeaderContainer.tsx` (uses useToggledTrails hook)
- `src/components/pages/root/about-section/AboutSection.tsx` (check for hooks)
- `src/components/pages/project/project-doc-details/ProjectDocDetails.tsx` (check for hooks)
- `src/components/pages/project/project-doc-details/api-project-page/ApiProjectPage.tsx` (useState)
- `src/components/pages/project/project-doc-details/mobile-project-page/MobileProjectPage.tsx` (useState)
- `src/components/pages/project/project-doc-details/docs-section/DocsSection.tsx` (check)
- `src/components/pages/project/project-doc-details/docs-section/request-view/RequestView.tsx` (check)
- `src/components/pages/project/project-doc-details/docs-section/response-view/ResponseView.tsx` (check)
- `src/components/pages/project/project-doc-details/document-wrapper/DocumentWrapper.tsx` (uses dynamic)
- `src/hooks/useToggledSpring.tsx` (useLayoutEffect)
- `src/hooks/useToggledTrail.tsx` (useLayoutEffect)
- `src/hooks/useClipboard.tsx` (likely uses hooks)
- `src/hooks/useScreenDimensions.ts` (likely uses hooks)

For each file, add `'use client';` as the very first line (before any imports).

The approach: run `yarn build` and iterate — Next.js will error on any client-only code used in a server component, telling you exactly which files need the directive.

- [ ] **Step 2: Verify build**

```bash
yarn build
```
Expected: build succeeds with no "client component" errors.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "fix: add 'use client' directives to all client components"
```

---

## Task 18: Update dev script and final verification

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Update dev script to use Turbopack**

In `package.json`, change the dev script:
```json
"dev": "next dev --turbopack"
```

- [ ] **Step 2: Full build verification**

```bash
yarn build
```
Expected: clean build with no errors.

- [ ] **Step 3: Dev server smoke test**

```bash
yarn dev
```

Open `http://localhost:3000` in a browser and verify:
1. Home page loads with header animation, project cards, marquee gallery, about section
2. Click a project card — project detail page loads
3. Back navigation works
4. 404 page shows for `/nonexistent`
5. Styled-components SSR works (no flash of unstyled content)
6. Fonts load (Adobe Typekit)

- [ ] **Step 4: Commit**

```bash
git add package.json
git commit -m "chore: enable Turbopack dev server"
```

---

## Task 19: Clean up HeadDocument component

**Files:**
- Modify: `src/components/common/head-document/HeadDocument.tsx`
- Modify: `src/components/common/head-document/index.ts`

- [ ] **Step 1: Update HeadDocument**

The `HeadDocument` component (used in the old `_document.tsx`) is no longer needed — its meta tags are now in `layout.tsx`'s `metadata` export. The `HtmlHead` component (used in the old `_app.tsx`) is also no longer needed — viewport meta and title are handled by the metadata export, and scripts are in `layout.tsx`.

Check if any other file imports from `@/components/common/head-document`. If nothing else imports it:

```bash
grep -rn "head-document\|HeadDocument\|HtmlHead" src/ --include="*.tsx" --include="*.ts"
```

If only the old pages files imported it (which are now deleted), delete the entire directory:
```bash
rm -rf src/components/common/head-document
```

- [ ] **Step 2: Verify build**

```bash
yarn build
```
Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove unused HeadDocument component (replaced by App Router metadata)"
```

---

## Task 20: Final cleanup and verification

- [ ] **Step 1: Check for any remaining next/router imports**

```bash
grep -rn "next/router" src/ --include="*.tsx" --include="*.ts"
```
Expected: no results. If any remain, change them to `next/navigation`.

- [ ] **Step 2: Check for any remaining legacy Image usage**

```bash
grep -rn "layout=" src/ --include="*.tsx" --include="*.ts" | grep -v node_modules
```
Expected: no results with `layout="fill"` or similar.

- [ ] **Step 3: Check for unused imports**

```bash
yarn build 2>&1 | grep -i "unused\|not found\|cannot find"
```
Fix any issues found.

- [ ] **Step 4: Final build**

```bash
yarn build
```
Expected: clean build, no errors, no warnings about deprecated APIs.

- [ ] **Step 5: Final dev server test**

```bash
yarn dev
```

Verify the same smoke tests as Task 18 Step 3.

- [ ] **Step 6: Commit any remaining fixes**

```bash
git add -A
git commit -m "chore: final cleanup for Next.js 15 App Router migration"
```
