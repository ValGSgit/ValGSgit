# GitHub Pages Deployment Troubleshooting Guide

## Current Issue: CSS/JS Not Loading (Site Looks Like Plain Text)

If your GitHub Pages site is deployed but looks like plain text without styling or interactivity, follow these steps:

### Step 1: Verify GitHub Pages Source Configuration

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**, check the **Source** setting:
   - ✅ **CORRECT**: Should be set to **"GitHub Actions"**
   - ❌ **INCORRECT**: If it shows "Deploy from a branch", this is the problem!

**To Fix:**
1. Change **Source** from "Deploy from a branch" to **"GitHub Actions"**
2. Save the setting
3. Wait 2-3 minutes for the new deployment
4. Clear your browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
5. Visit your site again

### Step 2: Verify Workflow is Running

1. Go to the **Actions** tab in your repository
2. Look for the "Deploy Jekyll site to Pages" workflow
3. Check that it has run successfully (green checkmark ✓)
4. If you see a red X, click on it to see error details

**To Trigger a New Deployment:**
1. Go to **Actions** tab
2. Click "Deploy Jekyll site to Pages" on the left
3. Click "Run workflow" button
4. Select `main` branch
5. Click green "Run workflow" button

### Step 3: Clear Browser Cache

Even if the deployment is correct, your browser might be showing cached (old) content:

**Chrome/Edge:**
1. Press `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
2. Select "Cached images and files"
3. Click "Clear data"
4. Or try **Incognito/Private mode** (Ctrl+Shift+N)

**Firefox:**
1. Press `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
2. Select "Cache"
3. Click "Clear Now"
4. Or try **Private Window** (Ctrl+Shift+P)

**Safari:**
1. Go to Safari → Preferences → Advanced
2. Enable "Show Develop menu"
3. Develop → Empty Caches
4. Or try **Private Window** (Cmd+Shift+N)

**Hard Refresh:**
- Windows: `Ctrl+Shift+R` or `Ctrl+F5`
- Mac: `Cmd+Shift+R`

### Step 4: Verify URL Structure

Your site URL should be:
- ✅ **CORRECT**: `https://ValGSgit.github.io/`
- ❌ **INCORRECT**: `https://ValGSgit.github.io/ValGSgit/`

Since the repository name matches your username, this is a **user site** (not a project site), so the baseurl should be empty.

**Check `_config.yml`:**
```yaml
baseurl: ""  # ✅ CORRECT (empty for user sites)
url: "https://ValGSgit.github.io"  # ✅ CORRECT
```

### Step 5: Wait for DNS/CDN Propagation

Sometimes GitHub's CDN takes a few minutes to update:
- Wait 5-10 minutes after deployment
- Try accessing the site from a different network (e.g., mobile data vs WiFi)
- Try a different browser

### Step 6: Check for Mixed Content Issues

If you're accessing via HTTPS (which you should be), ensure all resources load via HTTPS:
- Open browser Developer Tools (F12)
- Check the **Console** tab for errors
- Look for "Mixed Content" warnings
- All resources should load from `https://` not `http://`

### Step 7: Verify Asset Paths

Check that CSS and JavaScript files are being loaded:

1. Open browser Developer Tools (F12)
2. Go to **Network** tab
3. Reload the page (F5)
4. Look for:
   - `style.css` - Should return `200 OK` status
   - `main.js` - Should return `200 OK` status
   - `github-projects.js` - Should return `200 OK` status
5. If any return `404 Not Found`, there's a path issue

### Step 8: Check Workflow Logs

If the site still isn't working:

1. Go to **Actions** tab
2. Click on the latest workflow run
3. Click on **build** job
4. Expand **Build with Jekyll** step
5. Look for errors in the build output
6. Check the **Deploy to GitHub Pages** step for errors

## Common Issues and Solutions

### Issue: "Page Not Found" or 404 Error

**Cause**: GitHub Pages source is not configured correctly

**Solution**: 
1. Go to Settings → Pages
2. Set source to "GitHub Actions"
3. Wait for workflow to complete

### Issue: CSS Loads But Page Looks Broken

**Cause**: JavaScript not loading or errors

**Solution**:
1. Open Developer Tools (F12)
2. Check Console for JavaScript errors
3. Check Network tab to ensure JS files loaded (200 status)

### Issue: Navigation Links Don't Work

**Cause**: Incorrect URL paths or JavaScript not loaded

**Solution**:
1. Verify all links use `relative_url` filter in templates
2. Check browser console for JavaScript errors
3. Ensure `main.js` is loaded and executing

### Issue: Anchor Links (#projects, #contact) Don't Scroll

**Cause**: JavaScript smooth scroll not working

**Solution**:
1. Check browser console for errors
2. Verify `main.js` is loaded
3. Try clicking links - they should still work, just without smooth scrolling

## Quick Checklist

- [ ] GitHub Pages source is set to "GitHub Actions" in repository settings
- [ ] Latest workflow run completed successfully (green checkmark)
- [ ] Cleared browser cache or tried incognito/private mode
- [ ] Waited 5-10 minutes after deployment
- [ ] Checked browser console for errors (F12 → Console)
- [ ] Verified CSS/JS files load with 200 status (F12 → Network)
- [ ] Using correct URL: https://ValGSgit.github.io/
- [ ] Tried accessing from different device/network

## Still Not Working?

### Rebuild and Redeploy

1. Go to **Actions** tab
2. Click "Deploy Jekyll site to Pages"
3. Click "Run workflow"
4. Select `main` branch
5. Click "Run workflow" button
6. Wait 2-3 minutes
7. Clear browser cache
8. Try again

### Check GitHub Status

- Visit [GitHub Status](https://www.githubstatus.com/)
- Check if GitHub Pages is experiencing issues

### Contact Support

If none of the above work:
1. Take a screenshot of the broken site
2. Take a screenshot of Developer Tools Console (F12)
3. Take a screenshot of Developer Tools Network tab
4. Note what browser/OS you're using
5. Open an issue in the repository with all this information

## Expected Behavior

When correctly deployed, your site should:
- ✅ Load with full styling (colors, fonts, layout)
- ✅ Display profile image
- ✅ Have working navigation menu
- ✅ Show formatted CV and About pages
- ✅ Load GitHub projects dynamically
- ✅ Have smooth scrolling on anchor links
- ✅ Be fully responsive on mobile devices
- ✅ Display 3D contribution graph
- ✅ Have interactive buttons and hover effects

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)

---

**Last Updated**: 2025-11-22
