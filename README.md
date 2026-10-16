# Abdulrahman Moussa — Portfolio

Personal portfolio showcasing professional client work and personal projects, built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

**Live:** [3bdulrahmn.vercel.app](https://3bdulrahmn.vercel.app)

## Features

- Fully static, SEO-optimized pages (sitemap, robots, per-page metadata, JSON-LD structured data)
- Dynamic project detail pages with galleries, demo modals, and case-study content
- Contact form powered by EmailJS with validation and honeypot spam protection
- Dark theme design system with custom scrollbar, marquee, and motion effects
- Vercel Analytics + Speed Insights

## Tech Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · react-icons · react-parallax-tilt · EmailJS

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To enable the contact form, copy `.env.example` to `.env` and fill in your EmailJS credentials.

## Scripts

| Command         | Description          |
| --------------- | -------------------- |
| `npm run dev`   | Start dev server     |
| `npm run build` | Production build     |
| `npm run start` | Serve the build      |
| `npm run lint`  | Run ESLint           |

## Structure

```
app/          Routes: home, about, projects/[slug], contact
components/   UI, layout, landing, projects, contact sections
data/         Projects, works, certifications, education, courses
lib/          Site config, SEO helpers, types, utils
public/       Images and static assets
```

