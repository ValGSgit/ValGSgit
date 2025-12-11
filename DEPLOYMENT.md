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

The Next.js portfolio app is located in the `portfolio/` subdirectory.

> **Important**: Since the Next.js app is in a subdirectory, you MUST configure the root directory in Vercel.

### Step-by-Step Deployment Instructions

#### Option 1: New Vercel Project (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository: `ValGSgit/ValGSgit`
4. **Configure Project Settings:**
   - Framework Preset: **Next.js**
   - Root Directory: **portfolio** (Click "Edit" and select)
   - Build Command: Leave as default (uses `npm run build`)
   - Output Directory: Leave as default (`.next`)
   - Install Command: Leave as default (uses `npm install`)
5. Click "Deploy"

#### Option 2: Update Existing Vercel Project

If you already have a Vercel project that's failing:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **General**
3. Under **Root Directory**, click "Edit"
4. Select **portfolio** from the dropdown
5. Click "Save"
6. Go to **Deployments** and click "Redeploy" on the latest deployment

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

#### Controlling deployments
- Vercel will build on every push to the connected branch by default
- To limit deployments to only when portfolio files change, configure "Ignored Build Step" in your Vercel project settings
- Alternatively, you can configure branch-specific deployments in the Vercel dashboard

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
