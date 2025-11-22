# Quick Start Guide - Deploy Your Portfolio in 5 Minutes

This guide will get your portfolio live on GitHub Pages as quickly as possible.

## ⚡ Super Quick Deployment (5 Minutes)

### Step 1: Enable GitHub Pages (2 minutes)

1. **Go to your repository on GitHub**
   - Visit: https://github.com/ValGSgit/ValGSgit

2. **Open Settings**
   - Click the ⚙️ Settings tab at the top

3. **Navigate to Pages**
   - In the left sidebar, scroll down and click **Pages**

4. **Configure Source**
   - Under "Build and deployment"
   - Source: Deploy from a branch
   - Branch: Select **main** (or **master**)
   - Folder: Select **/ (root)**
   - Click **Save**

5. **Wait for Deployment**
   - GitHub will show "Your site is ready to be published"
   - Wait 1-2 minutes for the build to complete
   - Refresh the page - you'll see a green success message

### Step 2: Access Your Site (1 minute)

Your portfolio is now live at:
```
https://valgsit.github.io/ValGSgit/
```

**OR** if you rename the repo to `ValGSgit.github.io`:
```
https://valgsit.github.io/
```

### Step 3: Verify It Works (2 minutes)

Visit your URL and check:
- ✅ Home page loads
- ✅ Navigation works
- ✅ Projects load from GitHub
- ✅ CV page opens
- ✅ About page displays

**Done!** Your portfolio is live! 🎉

---

## 🎨 Quick Customization (10 Minutes)

Want to personalize before sharing? Do these quick updates:

### Update 1: Personal Info (2 minutes)

Edit `_config.yml`:
```yaml
author:
  name: Valentino Giusti Susini      # Your name
  title: Software Developer           # Your title
  location: Vienna, Austria          # Your location
  github: ValGSgit                   # Your GitHub username
  linkedin: valentinogs              # Your LinkedIn username
  email: entinosusini@gmail.com      # Your email
```

Commit and push:
```bash
git add _config.yml
git commit -m "Update personal information"
git push
```

### Update 2: CV Progress (3 minutes)

Edit `index.html` to update 42 School progress:

Find this section:
```html
<div class="achievement-number">5/7</div>
```

Change to your current circle/rank.

Also update in `cv.html` if different.

### Update 3: Skills (3 minutes)

Edit `index.html` to add/remove skills:

Find the "Technical Skills" section and modify:
```html
<span class="tech-tag">Your New Skill</span>
```

### Update 4: Add Profile Photo (2 minutes)

1. Add your photo to `assets/images/profile.jpg`
2. Edit `index.html`, find `.profile-placeholder` section
3. Replace with:
```html
<img src="/assets/images/profile.jpg" alt="Profile" style="width: 100%; border-radius: 50%;">
```

**Commit all changes:**
```bash
git add .
git commit -m "Customize portfolio content"
git push
```

Wait 1-2 minutes for GitHub Pages to rebuild.

---

## 📱 Share Your Portfolio (5 Minutes)

### Add to LinkedIn (2 minutes)
1. Go to your LinkedIn profile
2. Click "Add profile section"
3. Add "Website" 
4. URL: `https://valgsit.github.io/ValGSgit/`
5. Label: "Portfolio" or "Personal Website"

### Add to Resume (1 minute)
Include in your contact section:
```
Portfolio: https://valgsit.github.io/ValGSgit/
```

### Email Signature (2 minutes)
Add to your email signature:
```
Portfolio: https://valgsit.github.io/ValGSgit/
GitHub: github.com/ValGSgit
LinkedIn: linkedin.com/in/valentinogs
```

---

## 🎯 Next Steps

### Immediate (Today)
- [ ] Enable GitHub Pages ✅
- [ ] Verify site loads ✅
- [ ] Test on mobile
- [ ] Share with one friend for feedback

### This Week
- [ ] Customize content (if needed)
- [ ] Add to LinkedIn profile
- [ ] Update resume with portfolio URL
- [ ] Share on social media

### This Month
- [ ] Add any new projects
- [ ] Update CV if needed
- [ ] Get feedback and iterate
- [ ] Track visitor stats (if analytics added)

---

## 🆘 Quick Troubleshooting

### Site shows 404
- Wait 2-3 minutes after enabling Pages
- Check Settings > Pages for green success message
- Verify branch is set to `main` or `master`

### Projects not loading
- Open browser console (F12)
- Check for errors
- GitHub API may be rate-limited (wait an hour)

### Changes not showing
- Wait 1-2 minutes after pushing
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private browsing

### PDF not displaying
- Verify file exists at `assets/documents/cv.pdf`
- Try the download button instead
- Some browsers block PDF embeds

---

## 📚 Full Documentation

For detailed information, see:

- **SETUP_INSTRUCTIONS.md** - Complete setup guide
- **PORTFOLIO_README.md** - Feature documentation  
- **PROJECT_SUMMARY.md** - Overview of what was created
- **DEPLOYMENT_CHECKLIST.md** - Comprehensive testing checklist

---

## 💡 Pro Tips

1. **Test Locally First** (Optional but recommended)
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000`

2. **Use Short URL**
   - Rename repo to `ValGSgit.github.io`
   - Your URL becomes: `https://valgsit.github.io/`

3. **Mobile First**
   - Always test on mobile before sharing
   - 60%+ of viewers will be on mobile

4. **Keep Updated**
   - Add new projects as you create them
   - Update skills quarterly
   - Refresh CV when it changes

5. **Monitor Performance**
   - Enable GitHub Insights
   - Add Google Analytics (optional)
   - Track which projects get clicks

---

## ✅ Success Checklist

- [ ] GitHub Pages enabled
- [ ] Site loads at URL
- [ ] Navigation works
- [ ] Projects display
- [ ] CV is accessible
- [ ] Mobile view works
- [ ] Content is accurate
- [ ] Links verified
- [ ] Shared on LinkedIn
- [ ] Added to resume

---

## 🎉 You're Done!

Congratulations! Your professional portfolio is now live and ready to share with the world.

**Your Live Portfolio**: https://valgsit.github.io/ValGSgit/

### Share it with:
- Potential employers
- Recruiters on LinkedIn
- Your professional network
- Friends and mentors for feedback
- On Twitter/X with #100DaysOfCode
- In job applications

### What You've Achieved:
✅ Professional online presence
✅ Showcase for your GitHub projects
✅ Accessible CV/resume
✅ Complete personal brand
✅ Portfolio that updates automatically

---

**Need help?** Check the full documentation or create an issue in the repository.

**Ready to customize more?** See SETUP_INSTRUCTIONS.md for advanced options.

**Want to add features?** Check PROJECT_SUMMARY.md for ideas.

---

*Created: November 2025*
*Your portfolio journey starts now! 🚀*
