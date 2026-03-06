# Alpesh Patel - Portfolio

Personal portfolio website built with Astro, featuring a clean and modern design with dark mode support.

**Live:** [alpeshpatel.dev](https://alpeshpatel.dev)

## Tech Stack

- **Framework:** [Astro 5](https://astro.build)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) + custom CSS variables
- **Fonts:** DM Sans, Playfair Display, DM Mono (Google Fonts)
- **Deployment:** Static site generation

## Project Structure

```text
src/
├── config.ts                  # Site-wide constants (name, links, etc.)
├── content/
│   └── blog/                  # Markdown blog posts
│       ├── hello.md
│       ├── durable-data-platforms.md
│       ├── cloud-decisions-for-platform-teams.md
│       └── mentoring-through-technical-standards.md
├── content.config.ts          # Astro content collection schema
├── data/
│   └── siteData.ts            # Structured data (experience, projects, skills, etc.)
├── layouts/
│   └── BaseLayout.astro       # Shared layout (nav, footer, head)
├── pages/
│   ├── index.astro            # Home
│   ├── about.astro            # About
│   ├── experience.astro       # Career timeline
│   ├── projects.astro         # Project cards
│   ├── skills.astro           # Skill categories
│   ├── blog.astro             # Blog listing
│   ├── blog/[id].astro        # Individual blog post
│   └── contact.astro          # Contact info
└── styles/
    └── global.css             # Design system (colors, typography, components)
```

## Pages

| Page | Description |
| :--- | :---------- |
| Home | Introduction, stats, highlights, featured projects, blog preview |
| About | Profile, credentials, strengths, operating principles |
| Experience | Alternating center-line career timeline |
| Projects | 2-column card grid with tech tags |
| Skills | Categorized skill chips |
| Blog | Markdown-powered posts with individual pages |
| Contact | Email, LinkedIn, GitHub, location |

## Adding a Blog Post

Create a new `.md` file in `src/content/blog/`:

```md
---
title: "Your post title"
category: "Architecture"
readTime: "3 min read"
summary: "A one-line summary for cards and meta."
date: "2026-03-06"
---

Your markdown content here.
```

It will automatically appear on the blog listing and get its own page at `/blog/{filename}`.

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the build locally |

## Design Principles

- Warm neutral palette with a single accent color
- Serif headings (Playfair Display) paired with sans-serif body (DM Sans)
- Subtle hover effects and fade-in animations
- Light/dark mode with system preference detection
- Responsive with mobile-first approach
