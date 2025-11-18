# Resume Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a beautiful UI.

## Features

- 🎨 **Modern Design** - Clean, professional design with smooth animations
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Next.js for optimal performance
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🔍 **SEO Optimized** - Built-in SEO features from Next.js
- 💻 **TypeScript** - Fully typed for better development experience

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (install with `npm install -g pnpm`)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Your Information

Edit the data files in `data/portfolio.ts`:

- **Skills**: Update the `skills` array with your technical skills
- **Experience**: Modify the `experiences` array with your work history
- **Projects**: Add your projects to the `projects` array
- **Social Links**: Update the `socialLinks` array with your social media profiles

### Styling

- Modify `tailwind.config.ts` to change colors, fonts, and other design tokens
- Update `app/globals.css` for global styles
- Component styles are in each component file using Tailwind classes

### Theme

The theme toggle is already implemented. You can customize colors in `tailwind.config.ts` under the `theme.extend.colors` section.

### Using shadcn/ui Components

This project is set up with [shadcn/ui](https://ui.shadcn.com/), a collection of reusable components built with Radix UI and Tailwind CSS.

**Add a new component:**
```bash
pnpm dlx shadcn@latest add [component-name]
```

**Example:**
```bash
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add dropdown-menu
```

**Use a component:**
```tsx
import { Button } from '@/components/ui/button'

export function MyComponent() {
  return <Button variant="outline">Click me</Button>
}
```

**Available components:** Visit [shadcn/ui](https://ui.shadcn.com/docs/components) to see all available components.

## Build for Production

```bash
pnpm build
pnpm start
```

## Deployment

This project can be easily deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform that supports Next.js

## License

MIT License - see LICENSE file for details

