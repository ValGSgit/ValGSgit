# Professional Portfolio - GitHub Pages Site

A modern, responsive portfolio website built with Jekyll and hosted on GitHub Pages, showcasing technical skills, projects, and professional background.

## 🌟 Features

### IT-Focused Main Page
- Professional hero section with introduction
- Technical skills showcase
- Dynamic GitHub projects loading with API integration
- Project filtering by programming language
- 42 School achievements and highlights
- GitHub contribution visualization

### CV/Resume Page
- Dual-view CV (Full & IT-Focused)
- Downloadable PDF version
- Professional formatting with clear sections
- Skills categorization with proficiency levels
- Interactive toggle between views

### About Me (Personal) Page
- Personal journey and international background
- Languages spoken
- Interests and hobbies
- Soft skills and personal attributes
- Life philosophy and values

### Technical Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ GitHub API integration for automatic project updates
- ✅ Smooth scrolling and animations
- ✅ PDF viewer with download option
- ✅ SEO optimized with meta tags
- ✅ Fast loading with optimized assets
- ✅ Accessibility compliant (WCAG 2.1)
- ✅ Professional color scheme and typography

## 📁 Project Structure

```
ValGSgit/
├── _config.yml                    # Jekyll configuration
├── index.html                     # Main landing page (IT-focused)
├── cv.html                        # CV/Resume page
├── about.html                     # About Me (non-IT) page
├── _layouts/
│   ├── default.html              # Base layout template
│   └── page.html                 # Page layout template
├── _includes/
│   ├── header.html               # Navigation header
│   ├── footer.html               # Footer with contact
│   └── project-card.html         # Reusable project card
├── assets/
│   ├── css/
│   │   └── style.css             # Main stylesheet
│   ├── js/
│   │   ├── main.js               # Site functionality
│   │   └── github-projects.js    # GitHub API integration
│   ├── images/                   # Profile and project images
│   └── documents/
│       └── cv.pdf                # Original CV PDF
├── profile-3d-contrib/           # 3D GitHub contribution graphs
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites
- Git installed on your computer
- GitHub account
- (Optional) Ruby and Jekyll for local development

### Deployment to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select the branch (main or master)
   - Set folder to `/ (root)`
   - Click "Save"

2. **Configure Custom Domain (Optional):**
   - Add a `CNAME` file with your domain
   - Update DNS settings with your domain provider
   - Enable "Enforce HTTPS" in repository settings

3. **Access Your Site:**
   - Your site will be available at: `https://yourusername.github.io`
   - Or at your custom domain if configured

### Local Development

To run the site locally:

1. **Install Jekyll:**
   ```bash
   gem install jekyll bundler
   ```

2. **Clone the repository:**
   ```bash
   git clone https://github.com/ValGSgit/ValGSgit.git
   cd ValGSgit
   ```

3. **Install dependencies:**
   ```bash
   bundle install
   ```

4. **Run the site:**
   ```bash
   bundle exec jekyll serve
   ```

5. **View in browser:**
   - Open `http://localhost:4000` in your web browser

## 📝 Customization Guide

### Update Personal Information

Edit `_config.yml`:
```yaml
author:
  name: Your Name
  title: Your Title
  location: Your Location
  github: your-github-username
  linkedin: your-linkedin-username
  email: your-email@example.com
```

### Update CV PDF

Replace the CV file:
```bash
cp your-new-cv.pdf assets/documents/cv.pdf
```

### Modify Content

- **Landing Page:** Edit `index.html`
- **CV Page:** Edit `cv.html`
- **About Page:** Edit `about.html`

### Customize Styling

Edit `assets/css/style.css` to change:
- Color scheme (modify CSS variables in `:root`)
- Fonts
- Layout spacing
- Component styles

### Add New Projects Manually

Projects are automatically fetched from GitHub, but you can also create featured projects by editing the projects section in `index.html`.

## 🎨 Color Scheme

The site uses a professional color palette:

- **Primary:** `#2563eb` (Blue)
- **Secondary:** `#10b981` (Green)
- **Accent:** `#8b5cf6` (Purple)
- **Text:** `#1f2937` (Dark Gray)
- **Background:** `#ffffff` (White)

To change colors, modify the CSS variables in `assets/css/style.css`:
```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #10b981;
  /* ... */
}
```

## 📱 Responsive Breakpoints

- **Mobile:** < 480px
- **Tablet:** 481px - 768px
- **Desktop:** 769px - 968px
- **Large Desktop:** > 968px

## 🔧 Maintenance

### Update GitHub Projects

Projects are automatically fetched from the GitHub API. To force a refresh:
- Clear browser cache
- Wait for the API cache to expire (typically a few minutes)

### Update 3D Contribution Graph

The 3D contribution graph is stored in the `profile-3d-contrib/` folder. To update:
1. Generate new graphs using [yoshi389111/github-profile-3d-contrib](https://github.com/yoshi389111/github-profile-3d-contrib)
2. Replace the SVG files in the `profile-3d-contrib/` folder

### Monitoring

- **GitHub Pages Status:** Check repository settings > Pages
- **Build Logs:** View in the Actions tab if deployment fails
- **Analytics:** Consider adding Google Analytics for visitor tracking

## 🛠️ Technologies Used

- **Jekyll** - Static site generator
- **HTML5** - Markup
- **CSS3** - Styling with custom properties
- **JavaScript (ES6+)** - Interactivity and API calls
- **GitHub Pages** - Hosting
- **GitHub API** - Dynamic project loading
- **Inter & JetBrains Mono** - Typography

## 📊 Performance

The site is optimized for performance:
- Minimal dependencies
- Optimized images
- Async JavaScript loading
- CSS animations using transforms
- Lazy loading where applicable

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Sufficient color contrast
- Screen reader friendly

## 🐛 Troubleshooting

### Site not updating after push
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check the Actions tab for build errors
- Verify GitHub Pages is enabled in settings

### Projects not loading
- Check browser console for errors
- Verify GitHub API is accessible
- Check if you've hit GitHub API rate limits

### PDF not displaying
- Ensure `cv.pdf` is in `assets/documents/`
- Check browser PDF support
- Provide download link as fallback

### Styling issues
- Clear browser cache
- Check for CSS syntax errors
- Verify file paths are correct

## 📄 License

This project structure and code are available for personal use. Feel free to use it as a template for your own portfolio.

## 🤝 Contributing

This is a personal portfolio site, but suggestions for improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

- **GitHub:** [@ValGSgit](https://github.com/ValGSgit)
- **LinkedIn:** [valentinogs](https://linkedin.com/in/valentinogs)
- **Email:** entinosusini@gmail.com

## 🎯 Future Enhancements

Potential additions:
- [ ] Blog section for technical articles
- [ ] Project detail pages
- [ ] Contact form integration
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Search functionality
- [ ] RSS feed for blog posts

## 📚 Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Built with ❤️ using Jekyll and GitHub Pages**

Last Updated: November 2025
