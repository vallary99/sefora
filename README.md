# Sefora Limited — Website

Next.js (App Router) + TypeScript + Tailwind CSS v4 website for Sefora Limited, built from
the B2B market-entry framework and website brief.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For a production build:

```bash
npm run build
npm run start
```

## What's included

- **Pages**: Home, About, Products (+ per-product pages), For Distributors, For Manufacturers
  & Businesses, Quality & Standards, Coverage (Kisumu & Western Kenya + expansion markets),
  Resources (+ 3 sample articles), Contact, custom 404.
- **SEO**: per-page metadata via the Next.js Metadata API, canonical URLs, Open Graph/Twitter
  tags, `sitemap.xml`, `robots.txt`, Organization / Product / Article / BreadcrumbList
  JSON-LD structured data.
- **B2B forms**: a reusable enquiry/quote form (`components/EnquiryForm.tsx`) that posts to
  `app/api/enquiry/route.ts`. The route currently validates and logs submissions — wire it up
  to real email delivery (Resend/SES) or a CRM webhook before launch.
- **Brand**: your logo has been split into `public/brand/sefora-mark.png` (icon/favicon),
  `sefora-wordmark.png`, and `sefora-logo-full-transparent.png`, all with the white
  background removed.
- **Design tokens**: colors and fonts are defined in `app/globals.css`
  (`--color-forest`, `--color-gold`, `--color-leaf`, `--color-sand`, etc.). Headings use
  Archivo, body text uses Public Sans, both self-hosted via `@fontsource` (no external font
  request at runtime).

## Before this goes live

The brief was explicit about not inventing business information, so these are placeholders by
design — replace them with real content before launch:

- `SITE.domain` in `lib/constants.ts` (currently `sefora.co.ke`), plus phone/email/WhatsApp.
- Product specifications, pricing and MOQs in `lib/products.ts`.
- The `/quality` page — certifications and manufacturing details are intentionally withheld
  until they can be verified.
- Real product photography (none is used anywhere — text and color carry the design instead
  of stock imagery).
- The enquiry API route needs a real delivery mechanism (email/CRM) — see above.
- `NEXT_PUBLIC_GA_ID` / GTM snippet if you want analytics — the architecture is ready for it
  but nothing is wired in yet, per the brief.

## Structure

```
app/                  routes (App Router)
  products/[slug]/    dynamic product pages
  resources/[slug]/   dynamic resource articles
  api/enquiry/        form submission endpoint
components/           Header, Footer, forms, cards, CTA sections
lib/                  site constants, product/resource data, SEO helpers
public/brand/         logo assets
```
