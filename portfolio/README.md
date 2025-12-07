# Portfolio Website - Next.js 16

This is a modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ Built with Next.js 16 (latest) with Turbopack
- 🎨 Styled with Tailwind CSS v4
- 🎭 Smooth animations with Framer Motion
- 🎮 Interactive 3D graphics with Three.js and React Three Fiber
- 📱 Fully responsive design
- 🌐 SEO optimized with metadata and Open Graph tags
- 📊 Analytics with Vercel Analytics
- 🎯 TypeScript for type safety
- ♿ Accessibility features
- 🎨 Dark theme with emerald/teal color scheme
- 🚦 Error boundaries and loading states
- 📄 Robots.txt and sitemap generation
- 🔍 PWA manifest

## 🛠️ Tech Stack

### Core
- **Next.js 16.0.7** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library

### 3D Graphics
- **Three.js 0.181** - 3D graphics library
- **@react-three/fiber 9** - React renderer for Three.js
- **@react-three/drei 10** - Useful helpers for R3F

### Icons & UI
- **Lucide React** - Icon library

### Analytics
- **@vercel/analytics** - Web analytics

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🔧 Optimizations Applied

- **Security**: Updated to Next.js 16.0.7 to fix critical RCE vulnerability
- **Error Handling**: Added error boundaries and global error handlers
- **Loading States**: Implemented loading.tsx for better UX
- **404 Page**: Custom not-found.tsx with brand styling
- **SEO**: Added robots.txt, sitemap.xml, and manifest for PWA support
- **Performance**: Optimized package imports, enabled compression, and React strict mode
- **Image Optimization**: Configured for GitHub hosted images
- **Code Quality**: Fixed ESLint errors and maintained type safety

