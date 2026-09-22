# N u t t a — Portfolio

A responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, and shadcn/ui (Radix). Features a neutral dark palette with restrained blue accents and locally bundled Kanit typography.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Make it yours

- Edit `src/lib/portfolio.ts` for the name, introduction, location, email, and sample project details. Check the contact address before publishing.
- Edit `src/app/page.tsx` for the wordmark, about text, toolkit, and section content.
- Edit `src/components/engineering-art.tsx` for the code editor, system architecture, and workflow illustrations.
- Edit `src/app/layout.tsx` for page title and description.
- Edit `src/app/globals.css` for shared theme tokens and base styles. Layout and responsive styling use Tailwind utilities directly in the components, with standard `sm`, `md`, `lg`, and `xl` breakpoints.
- Replace `src/app/icon.svg` with your own favicon.

Project details render as inline articles using the content in `src/lib/portfolio.ts`. Contact links open the visitor's email application; no form service or backend is required.

## Checks

```sh
npm run lint
npm run build
```

After a production build, run `npm start`. Kanit is provided by `@fontsource/kanit` and served locally through `next/font/local`, so builds do not fetch Google Fonts. The page uses server-rendered content with a small client component for mobile navigation. Reduced-motion preferences, visible keyboard focus, and a skip link are supported. Section backgrounds span the full viewport; their content shares a centered container.
