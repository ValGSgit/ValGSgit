# GitHub Pages Setup Instructions

Follow these steps to deploy your professional portfolio website.

## Quick Start (5 Minutes)

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (gear icon)
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**:
   - Branch: Select `main` (or `master`)
   - Folder: Select `/ (root)`
5. Click **Save**

### Step 2: Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-2 minutes
- A green checkmark will appear when ready
- Your site will be live at: `https://valgsit.github.io/ValGSgit/`

### Step 3: Verify Your Site

Visit your site URL and check:
- ✅ Navigation works
- ✅ Projects load from GitHub
- ✅ CV PDF is accessible
- ✅ All links work
- ✅ Mobile view is responsive

## Customization Checklist

### Essential Updates

1. **Personal Information** (in `_config.yml`):
   ```yaml
   author:
     name: Your Full Name        # Update if needed
     title: Your Professional Title
     location: Your City, Country
     email: your-email@example.com
   ```

2. **Update CV PDF**:
   - Replace `assets/documents/cv.pdf` with your latest CV
   - Keep the filename as `cv.pdf` or update references

3. **Update Profile Photo** (Optional):
   - Add your photo to `assets/images/profile.jpg`
   - Update the hero section in `index.html` to use it

### Content Updates

4. **Landing Page** (`index.html`):
   - Update hero tagline if needed
   - Adjust technical skills list
   - Modify "About Me" cards
   - Update 42 School progress/achievements

5. **CV Page** (`cv.html`):
   - Update work experience
   - Add new skills or certifications
   - Modify education details
   - Update current objectives

6. **About Page** (`about.html`):
   - Personalize your journey story
   - Update interests and hobbies
   - Add languages or certifications
   - Modify personal philosophy

### Optional Customization

7. **Colors** (`assets/css/style.css`):
   ```css
   :root {
     --primary-color: #2563eb;     /* Main brand color */
     --secondary-color: #10b981;   /* Accent color */
     --accent-color: #8b5cf6;      /* Highlight color */
   }
   ```

8. **Fonts** (in `_layouts/default.html`):
   - Change Google Fonts URL to use different fonts
   - Update `--font-family` in CSS

## Testing Before Going Live

### Local Testing (Recommended)

1. **Install Jekyll**:
   ```bash
   gem install bundler jekyll
   ```

2. **Install dependencies**:
   ```bash
   cd ValGSgit
   bundle install
   ```

3. **Run locally**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View at**: `http://localhost:4000`

### What to Test

- ✅ All navigation links work
- ✅ Projects load from GitHub API
- ✅ PDF viewer displays CV
- ✅ Mobile responsiveness (resize browser)
- ✅ All external links work
- ✅ Contact information is correct

## Custom Domain Setup (Optional)

### If you have a custom domain:

1. **Add CNAME file**:
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS** (at your domain registrar):
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add CNAME record pointing to `valgsit.github.io`

3. **Enable HTTPS**:
   - In GitHub Pages settings
   - Check "Enforce HTTPS" (may take 24 hours to activate)

## Updating Content

### Regular Updates

```bash
# 1. Make changes to files
# 2. Commit changes
git add .
git commit -m "Update portfolio content"

# 3. Push to GitHub
git push origin main

# 4. Wait 1-2 minutes for automatic deployment
```

### Update GitHub Projects

Projects automatically refresh from the GitHub API. To see new projects:
- They'll appear automatically on next visit
- Force refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### Update 3D Contribution Graph

The graph in `profile-3d-contrib/` can be updated:
1. Use [github-profile-3d-contrib](https://github.com/yoshi389111/github-profile-3d-contrib)
2. Generate new SVG files
3. Replace existing files in the folder
4. Commit and push changes

## Troubleshooting

### Site not loading

**Problem**: Site shows 404 error

**Solution**:
1. Verify GitHub Pages is enabled in Settings > Pages
2. Check that branch is set to `main` or `master`
3. Wait 2-3 minutes after enabling
4. Clear browser cache

### Projects not displaying

**Problem**: Projects section shows loading spinner forever

**Solution**:
1. Open browser console (F12)
2. Check for API errors
3. Verify GitHub username in `assets/js/github-projects.js`
4. Check GitHub API rate limits (60 requests/hour when not authenticated)

### PDF not showing

**Problem**: CV page doesn't show PDF

**Solution**:
1. Verify `cv.pdf` exists in `assets/documents/`
2. Check file size (should be < 10MB)
3. Try downloading directly: `/assets/documents/cv.pdf`
4. Some browsers block PDF iframes - download button provides fallback

### Styling looks broken

**Problem**: Site looks unstyled or broken

**Solution**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check browser console for CSS loading errors
3. Verify `assets/css/style.css` exists
4. Check that `_config.yml` has correct baseurl

### Changes not appearing

**Problem**: Pushed changes but site looks the same

**Solution**:
1. Wait 2-3 minutes for GitHub Pages to rebuild
2. Check Actions tab for build status
3. Clear browser cache
4. Try incognito/private browsing mode

## Advanced Configuration

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `_config.yml`:
   ```yaml
   google_analytics: UA-XXXXXXXXX-X
   ```
3. Add tracking code to `_layouts/default.html`

### Add Contact Form

1. Use service like Formspree or Netlify Forms
2. Add form HTML to contact section
3. Configure form action URL

### Add Blog Section

1. Create `_posts` directory
2. Add blog layout in `_layouts/blog.html`
3. Create blog index page
4. Write posts in Markdown

## Maintenance Schedule

### Weekly
- Check for broken links
- Review analytics (if enabled)
- Update with any new projects

### Monthly
- Update CV if needed
- Review and update skills
- Check for security updates

### As Needed
- Update profile photo
- Add new projects
- Update contact information
- Refresh content

## Security Best Practices

- ✅ Never commit API keys or secrets
- ✅ Keep dependencies updated
- ✅ Use HTTPS (enforced by GitHub Pages)
- ✅ Validate external links regularly
- ✅ Keep personal information appropriate for public view

## Performance Optimization

### Images
- Compress images before uploading
- Use appropriate formats (JPEG for photos, PNG for graphics)
- Consider max width of 1200px for desktop

### Code
- Minify CSS/JS for production (optional)
- Use async/defer for scripts
- Optimize font loading

## Support Resources

- **Jekyll Docs**: https://jekyllrb.com/docs/
- **GitHub Pages**: https://docs.github.com/en/pages
- **GitHub Community**: https://github.community/
- **Stack Overflow**: https://stackoverflow.com/questions/tagged/github-pages

## Need Help?

1. Check troubleshooting section above
2. Review GitHub Pages documentation
3. Search GitHub Community forums
4. Check repository issues for similar problems

## Success Checklist

Before announcing your portfolio:

- [ ] All personal information is correct
- [ ] CV PDF is current and accessible
- [ ] All links work (internal and external)
- [ ] Projects load correctly
- [ ] Mobile view works properly
- [ ] Contact information is accurate
- [ ] No spelling or grammar errors
- [ ] GitHub Pages is enabled
- [ ] Site is accessible at your URL
- [ ] HTTPS is working (green padlock)
- [ ] Site loads quickly (< 3 seconds)

## Going Live!

Once everything is verified:

1. Share your portfolio URL:
   - Add to LinkedIn profile
   - Include in resume
   - Share on social media
   - Add to email signature

2. Monitor:
   - Use GitHub Insights to track visitors
   - Set up Google Analytics for detailed stats
   - Check for any error reports

3. Keep Updated:
   - Add new projects regularly
   - Update skills as you learn
   - Refresh content quarterly
   - Maintain professional appearance

---

**Congratulations on your professional portfolio! 🎉**

Your site is now live and ready to showcase your skills to the world.
