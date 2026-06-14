# FPA Design Consultancy — Deployment Guide

## 1. Place Your Images First

Before deploying, copy all project images into `public/images/` exactly as described in `IMAGE-PLACEMENT-GUIDE.md`.

Quick reference:
- `public/images/hero/hero-1.jpg` → Office Building render
- `public/images/hero/hero-2.jpg` → Residential at Dusk
- `public/images/hero/hero-3.jpg` → Contemporary Bungalow
- `public/images/about/architect.jpg` → Arch. Friendzel B. Pengi headshot
- `public/images/logo.png` → FPA Logo (transparent PNG)
- `public/images/portfolio/project-1/` → 7 images (Bungalow Residence, Nueva Vizcaya)
- `public/images/portfolio/project-2/` → 3 images (2 Storey Residence, Ifugao)
- `public/images/portfolio/project-3/` → 5 images (Bungalow Residence, La Union)
- `public/images/portfolio/project-4/` → 4 images (Office Building, Ifugao)

## 2. Update Domain Name

When you have your domain (e.g., fpadesignconsultancy.com), update `metadataBase` in:
- `app/layout.tsx` → line: `metadataBase: new URL("https://fpadesignconsultancy.com")`
- `app/sitemap.ts` → `const baseUrl = "https://fpadesignconsultancy.com"`
- `components/ui/StructuredData.tsx` → `"@id"` and `url` fields

## 3. Update Google Maps Embed

Go to: https://maps.app.goo.gl/Gs6KQ42cGEnoNBkr8

On Google Maps, click Share → Embed a map → Copy the iframe src URL.
Replace the `src` in `app/contact/page.tsx` (the `<iframe>` at the bottom).

## 4. Set Up Contact Form Backend

The contact form at `components/contact/ContactForm.tsx` currently simulates a submission.
To make it functional, choose one:

**Option A — Formspree (easiest, free)**
1. Create account at formspree.io
2. Create a form, get your form ID (e.g., `xwkgabcd`)
3. In `ContactForm.tsx`, replace the `handleSubmit` function:
```ts
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) setStatus("sent");
else setStatus("error");
```

**Option B — EmailJS (client-side, free tier)**
**Option C — Next.js API route + Nodemailer**

## 5. Deploy to Vercel

**Step 1:** Push the project to GitHub
```bash
git init
git add .
git commit -m "Initial FPA Design Consultancy website"
git remote add origin https://github.com/YOUR_USERNAME/fpa-design-consultancy.git
git push -u origin main
```

**Step 2:** Go to vercel.com → Import Project → Select your GitHub repo

**Step 3:** Vercel auto-detects Next.js. Click Deploy.

**Step 4:** Add your custom domain in Vercel → Settings → Domains

## 6. Post-Deployment Checklist

- [ ] All images display correctly on all pages
- [ ] Contact form submits successfully and sends email
- [ ] Google Maps shows correct location
- [ ] Test on mobile (iPhone + Android)
- [ ] Test all portfolio project links
- [ ] Submit sitemap to Google Search Console: https://yoursite.com/sitemap.xml
- [ ] Verify structured data at: https://search.google.com/test/rich-results
- [ ] Check Lighthouse score (target: 90+ on all metrics)

## Tech Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Google Fonts: Inter + Cormorant Garamond
- Vercel (deployment)
