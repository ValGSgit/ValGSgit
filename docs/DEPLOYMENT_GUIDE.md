# Portfolio Site - Development & Deployment Guide

## Issue: Site Appears Unstyled After Deployment

If your site looks great initially but then "turns ugly" (showing unstyled HTML), this is typically caused by **browser caching**. Here's how to fix and prevent this:

### Quick Fix for Viewing

1. **Hard Refresh** your browser:
   - **Chrome/Firefox/Edge**: `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac)
   - **Safari**: `Cmd + Option + R` (Mac)
   
2. **Clear Browser Cache**:
   - Open browser DevTools (F12)
   - Right-click the refresh button and select "Empty Cache and Hard Reload"

3. **Incognito/Private Mode**:
   - Open your site in an incognito/private window to bypass cache

### Why This Happens

1. **Browser Caching**: Browsers cache CSS and JS files for performance. When you update the site, the browser may still load old cached files.

2. **Jekyll Build Process**: GitHub Pages builds your site using Jekyll. If there's a build error, it might serve the raw HTML without CSS.

3. **CDN Caching**: GitHub Pages uses a CDN which may cache your old site for a few minutes.

### Prevention (Already Implemented)

✅ **Version Query Strings**: We've added `?v={{ site.time }}` to CSS and JS files to bust cache on every build.

✅ **Relative URLs**: All links use Jekyll's `relative_url` filter for proper path resolution.

✅ **Proper Layouts**: All pages use Jekyll layouts that include CSS correctly.

## Local Development

### Prerequisites

- Ruby (3.x recommended)
- Bundler gem

### Setup

```bash
# Install dependencies
bundle install

# Serve the site locally
bundle exec jekyll serve

# Open in browser
# Visit http://localhost:4000
```

### Testing Changes Locally

Before pushing changes:

```bash
# Clean build
bundle exec jekyll clean

# Build the site
bundle exec jekyll build

# Serve locally
bundle exec jekyll serve --livereload
```

The `--livereload` flag automatically refreshes your browser when files change.

## Deployment

### GitHub Pages Deployment

Changes to the `main` branch automatically trigger a GitHub Actions workflow that:

1. Checks out the code
2. Installs Ruby and dependencies
3. Builds the site with Jekyll
4. Deploys to GitHub Pages

### Checking Build Status

1. Go to your repository on GitHub
2. Click the "Actions" tab
3. Look for the "Deploy Jekyll site to Pages" workflow
4. Green checkmark = successful build
5. Red X = failed build (click to see errors)

### After Deployment

**Wait 2-5 minutes** for changes to propagate through GitHub's CDN, then:

1. Hard refresh your browser (Ctrl+Shift+R)
2. Check in incognito mode
3. View on a different device/browser

## Common Issues

### Issue: Site shows raw HTML without CSS

**Cause**: Browser cache or Jekyll build failure

**Fix**:
1. Check GitHub Actions for build errors
2. Hard refresh browser (Ctrl+Shift+R)
3. Clear browser cache completely
4. Wait 5 minutes for CDN to update

### Issue: Navigation links don't work

**Cause**: Incorrect URL paths

**Fix**: 
- Already implemented: All URLs use `relative_url` filter
- If still broken, check Jekyll build logs

### Issue: Project pages not found

**Cause**: Jekyll collections not building correctly

**Fix**:
```yaml
# In _config.yml (already set correctly)
collections:
  projects:
    output: true
    permalink: /projects/:name/
```

### Issue: Images not loading

**Cause**: Incorrect image paths

**Fix**: Use relative_url filter:
```html
<img src="{{ '/assets/images/profile.jpg' | relative_url }}" alt="Profile">
```

## File Structure

```
ValGSgit/
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page templates
│   ├── default.html     # Base layout
│   ├── page.html        # Page layout
│   └── project.html     # Project showcase layout
├── _includes/           # Reusable components
│   ├── header.html      # Navigation header
│   └── footer.html      # Site footer
├── _projects/           # Project showcase pages
│   ├── 42cc.md
│   ├── minishell.md
│   ├── webserv.md
│   └── pissm.md
├── assets/              # Static assets
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── github-projects.js
│   └── images/
│       └── profile.jpg
├── index.html           # Home page
├── cv.html              # CV page
├── about.html           # About page
└── Gemfile              # Ruby dependencies
```

## Best Practices

1. **Always test locally** before pushing to main
2. **Check GitHub Actions** after pushing changes
3. **Wait for builds** to complete (usually 2-3 minutes)
4. **Hard refresh** browser after deployment
5. **Use incognito mode** to verify changes without cache

## Support

If issues persist:

1. Check Jekyll build logs in GitHub Actions
2. Verify all files have proper front matter
3. Ensure _config.yml is valid YAML
4. Test locally with `bundle exec jekyll serve`

---

**Last Updated**: November 2025
