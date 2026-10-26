# Ishwar KC Portfolio

A modern, production-ready portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

- 🎨 **Modern Design** - Clean, responsive design with dark/light mode
- ⚡ **Performance** - Optimized Next.js production build
- 📧 **Contact Form** - Working contact form with Resend integration
- 🎭 **Animations** - Smooth animations with Framer Motion
- 🔍 **SEO** - Full Open Graph, Twitter Cards, JSON-LD structured data
- 📱 **Responsive** - Mobile-first design, works on all devices
- ♿ **Accessible** - WCAG AA compliant, keyboard navigable

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Theme**: next-themes
- **Icons**: Lucide React
- **Notifications**: Sonner

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/ishwarkc/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for contact form emails | No (dev mode works without) |
| `CONTACT_EMAIL` | Email where contact form messages are sent | Yes |
| `FROM_EMAIL` | From address for emails | Yes |
| `NEXT_PUBLIC_SITE_URL` | Your site URL for SEO | Yes |

## Project Structure

```
portfolio/
├── .github/workflows/     # CI/CD pipelines
├── public/                # Static assets
│   ├── fonts/            # Local fonts
│   └── images/           # Images
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (main)/       # Main route group
│   │   │   └── ...       # Other pages
│   │   ├── api/          # API routes
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   ├── content/          # Content data
│   │   ├── config.ts     # Site configuration
│   │   ├── experience.ts # Experience data
│   │   ├── skills.ts     # Skills data
│   │   ├── education.ts  # Education data
│   │   ├── certifications.ts
│   │   └── achievements.ts
│   ├── lib/              # Utility functions
│   │   ├── utils.ts      # Helper functions
│   │   ├── validations.ts # Zod schemas
│   │   ├── resend.ts     # Resend client
│   ├── hooks/            # Custom React hooks
│   └── types/            # TypeScript types
├── components.json       # Shadcn UI config
├── next.config.mjs       # Next.js config
├── tailwind.config.ts    # Tailwind config
├── tsconfig.json         # TypeScript config
└── package.json
```

## Customization

### Updating Content

All content is stored in TypeScript files under `src/content/`:

- **Personal info**: `src/content/config.ts`
- **Experience**: `src/content/experience.ts`
- **Skills**: `src/content/skills.ts`
- **Education**: `src/content/education.ts`
- **Certifications**: `src/content/certifications.ts`
- **Achievements**: `src/content/achievements.ts`
### Theming

Customize colors in `tailwind.config.ts` and CSS variables in `src/app/globals.css`.

## Deployment

### Vercel (Recommended)

1. Import `https://github.com/Ishwarkc133/portfolio` as a new Vercel project.
2. Keep the detected Next.js framework and default build settings.
3. Add `RESEND_API_KEY`, `CONTACT_EMAIL`, `FROM_EMAIL`, and `NEXT_PUBLIC_SITE_URL` in the Vercel project environment variables.
4. Set `FROM_EMAIL` to an address verified with Resend and `NEXT_PUBLIC_SITE_URL` to the production site URL.
5. Deploy. Vercel will automatically build and deploy later pushes to `main`.

The project uses a Next.js API route for the contact form, so it requires a Next.js-compatible host rather than a static-only export host.

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript check
```

## Adding Resume

Place your `resume.pdf` in the `public/` folder to enable the download button in the About section.

## License

MIT License - feel free to use this as a template for your own portfolio.

## Contact

- **Email**: ishwarkc133@gmail.com
- **LinkedIn**: [linkedin.com/in/ishwar-kc-6a3681245](https://linkedin.com/in/ishwar-kc-6a3681245)
- **GitHub**: [github.com/ishwarkc](https://github.com/ishwarkc)
- **ORCID**: [orcid.org/0009-0008-6823-5128](https://orcid.org/0009-0008-6823-5128)