# Deployment Guide

This repository contains two separate deployments:

## 1. GitHub Pages (Jekyll Site)
- **Location**: Root directory
- **Deployed to**: https://valGSgit.github.io
- **Workflow**: `.github/workflows/jekyll.yml`
- **Files**: `index.html`, `about.html`, `cv.html`, `assets/`, etc.

The Jekyll site deploys automatically on push to the `main` branch via GitHub Actions.

## 2. Vercel (Next.js Portfolio)
- **Location**: `portfolio/` directory
- **Framework**: Next.js 16
- **Configuration**: `vercel.json` (root)
- **Node Version**: 20.x (specified in `portfolio/.nvmrc`)

### Vercel Deployment Setup

The Next.js portfolio app is located in the `portfolio/` subdirectory. The `vercel.json` file at the root is configured to:
- Build from the `portfolio/` directory
- Install dependencies with `npm install`
- Build using `npm run build`
- Only trigger deployments when files in `portfolio/` change

> **Note**: If your Vercel deployment was previously configured and now failing, it might be because the old configuration had settings that conflict with the new `vercel.json`. In that case, you have two options:
> 1. Delete and recreate the Vercel project to use the new configuration (recommended)
> 2. Manually update the project settings in the Vercel dashboard to match the configuration below

### Option 1: Deploy with Root Configuration (Recommended)
The `vercel.json` at the root is configured to automatically handle the subdirectory structure. When you import the repository to Vercel:

1. Import the repository: `ValGSgit/ValGSgit`
2. Vercel will automatically detect the `vercel.json` configuration
3. The build commands will automatically navigate to the `portfolio/` directory
4. No additional configuration needed!

### Option 2: Configure Root Directory in Vercel Dashboard
If you prefer to configure the root directory in the Vercel dashboard instead:

1. Go to your Vercel project settings
2. Navigate to "General" → "Root Directory"
3. Set Root Directory to: `portfolio`
4. Framework Preset will auto-detect as "Next.js"
5. Leave Build & Development settings as default (they'll use package.json scripts)

### Environment Variables
No environment variables are currently required. The app uses:
- `@vercel/analytics` (automatically configured)
- Public assets from GitHub

### Build Configuration
- **Framework**: Next.js 16.0.7
- **Node Version**: 20.x (>= 20.0.0 required)
- **Package Manager**: npm (>= 10.0.0 required)
- **Output**: Server-side rendering enabled (not static export)

### Troubleshooting

#### Build fails with "command not found"
- Ensure Node.js 20.x or higher is being used
- Check that npm 10.x or higher is available
- Verify the Vercel project is using the correct Node.js version in settings

#### "Cannot find module" errors
- The build commands include `npm install` in the portfolio directory
- If issues persist, clear the Vercel build cache and redeploy

#### Deployment ignores changes
- The `ignoreCommand` is configured to only deploy when `portfolio/` files change
- Changes to root directory files (Jekyll site) won't trigger Vercel deployments
- This is intentional to avoid unnecessary builds

### Manual Deployment
To manually trigger a deployment:
1. Go to your Vercel project dashboard
2. Click "Deployments" tab
3. Click "Redeploy" on any previous deployment
4. Or use the Vercel CLI: `vercel --prod` from the repository root

### Local Development
```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Production Build Test
```bash
cd portfolio
npm install
npm run build
npm start
```

This starts the production server locally on port 3000.
