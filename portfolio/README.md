# Personal Portfolio Website

A modern, responsive portfolio website featuring smooth animations with Animate.js library. Built with vanilla HTML5, CSS3, and JavaScript.

## Features

✨ **Modern Design** - Clean, professional interface with contemporary aesthetics
🎨 **Smooth Animations** - Powered by Animate.js library for engaging user interactions
📱 **Fully Responsive** - Mobile-first design that works on all devices
⚡ **High Performance** - Optimized for fast loading and smooth 60fps animations
♿ **Accessible** - WCAG compliant with keyboard navigation and screen reader support
🔍 **SEO Ready** - Proper semantic HTML and meta tags for search engines

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Main stylesheet with CSS variables
├── js/
│   └── script.js          # Main JavaScript file
├── assets/
│   ├── images/            # Portfolio project images
│   └── fonts/             # Custom fonts (if any)
├── .gitignore             # Git ignore rules
├── README.md              # This file
└── package.json           # Project metadata (optional)
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor or IDE (VS Code recommended)
- Git (for version control)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Open with Live Server**
   - Using VS Code: Install "Live Server" extension and right-click `index.html` → "Open with Live Server"
   - Using Python: `python -m http.server 8000` (Python 3)
   - Using Node.js: `npx http-server` or `npx serve`

3. **Open in Browser**
   - Navigate to `http://localhost:8000` (or the port shown in your server)

### Project Setup Steps

1. **Update Portfolio Data**
   - Edit `portfolioData` in `js/script.js` with your projects
   - Add project images to `assets/images/`

2. **Update Services**
   - Edit `servicesData` in `js/script.js` with your services
   - Customize service icons (using emoji or icon fonts)

3. **Customize Styling**
   - Modify CSS variables in `css/styles.css` (`:root` selector)
   - Adjust colors, fonts, and spacing as needed

4. **Add Your Information**
   - Update meta tags in `index.html` for SEO
   - Change portfolio title and description
   - Add your contact information

5. **Optimize Images**
   - Compress portfolio images using online tools
   - Use WebP format with PNG fallback for better performance
   - Keep image dimensions optimized (typically 400x300px or similar)

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS Variables, Flexbox, CSS Grid
- **JavaScript (Vanilla)** - No frameworks, pure JS for better performance
- **Animate.js** - CDN-based animation library
- **Google Fonts** - Professional typography (Inter & Playfair Display)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Graceful degradation for older browsers without IntersectionObserver or modern CSS features.

## Features Implementation

### Navigation
- Sticky navigation bar with smooth scroll
- Mobile hamburger menu
- Active section indicator
- Keyboard navigation support

### Hero Section
- Full-height introduction with gradient background
- Animated entrance effects
- Call-to-action button
- Responsive text sizing

### Portfolio Section
- Responsive grid layout
- Scroll-triggered animations
- Hover effects with elevation
- Project card interactions
- Lazy image loading

### Services Section
- Service card grid
- Icon and description display
- Call-to-action buttons
- Staggered animations

### Contact Section
- Contact form with validation
- Real-time feedback messages
- Form submission handling (localStorage-based for demo)
- Accessible form elements

### Smooth Scroll
- Smooth scroll behavior between sections
- Scroll-triggered animations
- Parallax effects (optional)
- Motion preference detection for accessibility

## Performance Optimization

- Minified CSS and JavaScript (optional)
- Image lazy loading with Intersection Observer
- CSS animations with GPU acceleration
- Debounced scroll events
- Optimized animation frame requests

## Accessibility Features

- Semantic HTML elements
- Proper heading hierarchy
- Form labels and associations
- Keyboard navigation
- ARIA attributes where needed
- Motion preference detection (`prefers-reduced-motion`)
- Color contrast compliance

## Deployment

### GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin <repository-url>
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages
   - Select main branch as source
   - Wait for deployment

3. **Access your portfolio**
   - Your site will be available at `https://username.github.io/portfolio`

### Netlify

1. **Connect Repository**
   - Go to netlify.com
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**
   - Build command: (leave empty for static sites)
   - Publish directory: `.` (root directory)

3. **Deploy**
   - Netlify will automatically deploy on every push

### Custom Domain

1. Update DNS settings with your domain registrar
2. Point domain to hosting provider
3. Set up SSL/TLS certificate (usually automatic)

## Development Tips

### Adding New Sections

1. Add HTML in `index.html`
2. Add CSS in `css/styles.css`
3. Add JavaScript functionality in `js/script.js`
4. Update navigation links in navbar
5. Add to smooth scroll navigation

### Working with Animate.js

- Fallback CSS animations are provided
- All animations can be customized in `js/script.js`
- Adjust animation duration in `CONFIG` object
- Add new animations using standard Animate.js syntax

### Performance Debugging

- Use Chrome DevTools (F12)
- Check Lighthouse audit for performance score
- Monitor Network tab for slow assets
- Profile JS execution in Performance tab

## Troubleshooting

### Animations not working
- Check browser console for errors (F12)
- Verify Animate.js CDN is loaded
- Fallback CSS animations should still work
- Check `prefers-reduced-motion` setting

### Images not loading
- Verify image paths are correct
- Check file extensions (.jpg, .png, .webp)
- Use relative paths: `assets/images/file.jpg`
- Compress images if too large

### Menu not closing on mobile
- Check hamburger menu JavaScript
- Verify click outside detection
- Test on actual mobile device (not just responsive mode)

### Slow performance
- Optimize and compress images
- Minify CSS and JavaScript
- Reduce animation duration
- Enable lazy loading

## SEO Optimization

- Update meta descriptions
- Add Open Graph tags
- Create sitemap.xml
- Submit to Google Search Console
- Add structured data (Schema.org)
- Use descriptive alt text for images
- Optimize page titles and headings

## Future Enhancements

- [ ] Add blog section
- [ ] Implement backend contact form
- [ ] Add dark mode toggle
- [ ] Service Worker for PWA
- [ ] Advanced filtering for portfolio
- [ ] Client testimonials section
- [ ] Newsletter signup
- [ ] Analytics integration

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, please contact the project maintainer.

---

**Built with ❤️ using modern web technologies**

Last Updated: May 20, 2024
