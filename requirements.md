# Portfolio AI Agent Requirements

This document outlines the requirements for creating a clean, elegant, and fully functional portfolio website using Next.js 16 and Tailwind CSS v4. The AI agent should follow these instructions carefully to ensure clarity, maintainability, and consistency.

---

## 1. Project Structure

### Pages

- **Landing Page** (`/`) -> `pages/index.tsx`
- **Projects Page** (`/projects`) -> `pages/projects/index.tsx`
  - Dynamic slug for each project: `pages/projects/[slug].tsx`

- **About Page** (`/about`) -> `pages/about.tsx`
- **Contact Page** (`/contact`) -> `pages/contact.tsx`
- **Extra Page** (optional, can be used for additional content)

### Components Directory

```
components/
├── contact/        # Components related to contact page and form
├── landing/        # Components for each landing page section
├── projects/       # Components specific to projects page
├── shared/         # Components reused across pages
└── ui/             # Generic UI components (buttons, cards, inputs, modals, etc.)
```

### Data Folder

All portfolio data is stored in the `data/` folder:

- `certifications.ts`
- `courses.ts`
- `education.ts`
- `projects.ts`
- `tech-tool.ts`
- `works.ts`

Use this data to populate pages dynamically.

---

## 2. Landing Page

### Sections (All components go in `components/landing`)

1. **Hero Section** -> `hero-section.tsx`
   - Full-screen introduction with name, title, and short tagline
   - Button to navigate to projects page

2. **Tech I'm Using** -> `tech-marquee.tsx`
   - Horizontal marquee showcasing all tech/tools from `tech-tool.ts`
   - Left-to-right scrolling

3. **Latest Projects** -> `latest-projects.tsx`
   - Show the 4 most recent projects from `projects.ts`
   - Each project clickable to go to its detail page (`/projects/[slug]`)

4. **About Section (Brief)** -> `about-preview.tsx`
   - Short intro from About page content
   - Link to full About page

5. **Contact Section** -> `contact-preview.tsx`
   - Contact details (email, phone, social links)
   - Contact form component

### Styling

- Black elegant theme
- Tailwind CSS v4 using CSS variables for colors and fonts
- Clean, readable layout and spacing

---

## 3. Projects Page

### Main Sections (All components go in `components/projects`)

1. **My Works** -> `my-works.tsx`
   - Show all works from `works.ts`

2. **My Projects** -> `project-list.tsx`
   - Full list of projects from `projects.ts`
   - Pagination or grid layout if needed

3. **Tech Summary** -> `tech-summary.tsx`
   - Show summary of tech/tools used
   - Total number of projects, works, and relevant stats

### Project Detail Page (`/projects/[slug]`)

- `project-detail.tsx`
- Project title, description, images
- Tech used for this project
- Links to live site or GitHub if available

---

## 4. About Page

### Sections

- **Summary About Me** -> `about-summary.tsx`
- **Education** (`education.ts`) -> `education-list.tsx`
- **Certifications** (`certifications.ts`) -> `certifications-list.tsx`
- **Hopes & Goals** -> `hopes-goals.tsx`
- **Hobbies & Interests:**
  - Gaming & Entertainment
  - Social Connections
  - Continuous Learning
  - Music & Podcasts
  - Outdoor Activities
  - Digital Exploration

---

## 5. Contact Page

- Contact details (email, phone, social links) -> `contact-details.tsx`
- Contact form (inputs for name, email, message) -> `contact-form.tsx`
- Clear submit button with UI feedback

---

## 6. UI/UX Guidelines

- All pages and components must follow the black elegant theme
- Consistent spacing, typography, and card designs
- Use `react-icons` for icons throughout
- All components should be modular and reusable
- Keep code clean, clear, and well-commented
- Use Tailwind v4 with CSS variables for theme consistency

---

## 7. Technical Requirements

- **Next.js** version 16
- **Tailwind CSS** version 4
- **React-icons** for icons
- Dynamic routing for project details
- Components structured as described above
- Data-driven approach using `data/` folder
- Use kebab-case naming for all component files

---

## 8. Naming Conventions & File Organization

- Pages: kebab-case (`about.tsx`, `projects.tsx`)
- Components: kebab-case (`hero-section.tsx`, `contact-form.tsx`)
- Shared components: generic kebab-case names (`card.tsx`, `button.tsx`)
- Keep landing page sections isolated in `components/landing` folder
- Clean and descriptive names for clarity

---

## 9. Additional Notes

- Ensure responsive design for mobile and desktop and television screens
- Maintain visual hierarchy and accessibility
- Reuse components wherever possible for consistency
- Use clean imports and keep code DRY
- Ensure all links navigate correctly
- Ensure to optimize SEO and performance best practices
- Ensure to optimize GEO and AISO to making it more Ai agent friendly
All the above instructions are mandatory to create a fully functional, clean, and elegant portfolio site.
