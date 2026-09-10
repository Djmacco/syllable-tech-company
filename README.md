# Syllable Tech — Company Portfolio Website

A static, responsive portfolio site for Syllable Tech, built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with `npm run preview`.

## Adding real content

- **Logo**: replace the contents of `src/components/Logo.tsx` with your real logo (SVG or `<img>`).
- **Images**: drop real photos into `public/images/` using the filenames already referenced in the data files (`team-1.jpg` … `team-6.jpg`, `project-1.jpg` … `project-4.jpg`), or point the `image`/`src` fields in the data files at any URL.
- **Team**: edit `src/data/team.ts`.
- **Projects**: edit `src/data/projects.ts`.
- **Technologies**: edit `src/data/technologies.ts`.
- **Contact details**: edit `src/components/Contact.tsx` (email, phone, WhatsApp) and `src/components/Footer.tsx`.

No backend, database or authentication — everything is static and renders from the arrays in `src/data/`.

## Languages (English / French)

The site ships with a full English/French toggle in the navbar (EN | FR pills, desktop and mobile).

- All static UI copy lives in `src/i18n/translations.ts` — one object per language, same shape.
- Bilingual content in the data files (`team.ts`, `projects.ts`, `technologies.ts`) uses `{ en: "...", fr: "..." }` objects for any translated field (role, description, category).
- The chosen language is read via the `useLanguage()` hook (`src/i18n/LanguageContext.tsx`), persisted to `localStorage`, and also sets `<html lang="...">` for accessibility/SEO.
- To add a third language: add its key to the `Lang` type and `translations` object in `translations.ts`, add matching entries to the bilingual data-file objects, and add the language code to the toggle list in `Navbar.tsx`.
