# Vercel Deployment Setup Guide

## Quick Start

Your Next.js portfolio app is located in the `/portfolio` directory. Follow these steps to deploy it on Vercel:

### 1. Create/Update Vercel Project

**For New Projects:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your repository: `ValGSgit/ValGSgit`
4. **Configure these settings:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `portfolio` ⚠️ **IMPORTANT**
   - **Build Command:** (leave default)
   - **Output Directory:** (leave default)
   - **Install Command:** (leave default)
5. Click "Deploy"

**For Existing Projects:**
1. Go to your Vercel project → Settings → General
2. Find "Root Directory" and click "Edit"
3. Select `portfolio` from the dropdown
4. Click "Save"
5. Go to Deployments and click "Redeploy"

### 2. Verify Configuration

After deployment, check:
- ✅ Build logs show successful compilation
- ✅ Site loads at your Vercel URL
- ✅ All pages and routes work correctly

## Common Issues & Solutions

### Issue: "Error: Cannot find module"
**Solution:** Make sure Root Directory is set to `portfolio` in Vercel settings.

### Issue: Build fails with TypeScript errors
**Solution:** The app is configured to fail on TypeScript errors. Fix any type errors in your code.

### Issue: Build fails with ESLint errors
**Solution:** Run `npm run lint` locally to check for errors. All lint errors must be fixed before deployment.

### Issue: Fonts not loading
**Solution:** The app uses Google Fonts via CDN, which should work automatically. If issues persist, check your Content Security Policy settings.

## Local Development

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Setup
```bash
cd portfolio
npm install
```

### Development Server
```bash
npm run dev
# Opens on http://localhost:3000
```

### Production Build (Test)
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Build Configuration

### Key Files
- `package.json` - Dependencies and scripts
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS/Tailwind configuration

### Build Output
- Framework: Next.js 16.0.7 with Turbopack
- Output: Server-side rendered pages
- Static assets: Automatically optimized

## Performance Tips

1. **Images**: Use Next.js `Image` component for automatic optimization
2. **Fonts**: Currently using Google Fonts CDN (working correctly)
3. **Analytics**: Vercel Analytics is already integrated
4. **Caching**: Vercel handles caching automatically

## Deployment Workflow

1. Push changes to GitHub
2. Vercel automatically detects changes
3. Build is triggered automatically
4. If build succeeds, deployment goes live
5. Preview deployments for all branches

## Monitoring

- **Analytics**: Check Vercel dashboard for traffic stats
- **Logs**: Available in Vercel deployment logs
- **Errors**: Runtime errors appear in Vercel dashboard

## Need Help?

If deployment still fails after following this guide:
1. Check Vercel build logs for specific error messages
2. Verify Node.js version is 20.x or higher
3. Ensure all dependencies install correctly locally
4. Check that `npm run build` works locally

## What Was Fixed

Recent fixes applied to enable successful deployment:
- ✅ Simplified `vercel.json` configuration
- ✅ Fixed React hooks ESLint error in Typewriter component
- ✅ Disabled unnecessary font loading warning
- ✅ Verified build passes locally
- ✅ Updated deployment documentation

The app is now ready for deployment! 🚀
