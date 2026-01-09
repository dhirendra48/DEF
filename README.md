# Dhirendra's Physics Portfolio Website

A modern, responsive portfolio website showcasing physics research, projects, and achievements.

## Features

✨ **Modern Design**
- Responsive grid layout
- Smooth animations and transitions
- Dark mode support
- 3D background effects
- Mobile-first approach

📱 **Responsive Layout**
- Desktop, tablet, and mobile optimized
- Hamburger menu for mobile navigation
- Flexible grid systems

🎨 **Interactive Elements**
- Smooth scrolling navigation
- Typing effect in hero section
- Hover effects on cards
- Profile image 3D tilt effect
- Scroll-to-top button

🌙 **Theme Support**
- Light and dark mode toggle
- System preference detection
- Theme persistence with localStorage

📧 **Contact System**
- EmailJS integration for form submission
- Real-time form validation
- Auto-reply functionality
- Success/error notifications

## Project Structure

```
DEF/
├── index.html                 # Main HTML file
├── css/
│   ├── style.css             # Main styles
│   ├── footer.css            # Footer styles
│   ├── certifications.css    # Workshops section
│   ├── blog.css              # Blog section
│   └── background.css        # Background & animations
├── js/
│   ├── main.js               # Main JavaScript
│   └── background.js         # Background animations
└── Image/                    # Images folder (add your photos here)
```


## Setup Instructions

### 1. **Add Your Profile Image**
Place your profile image in the `Image/` folder:
```
Image/
└── Def.jpg (your profile picture)
```

### 2. **Update Personal Information**
Edit `index.html` and update:
- Your name and title
- Social media links (Facebook, LinkedIn, GitHub, ResearchGate)
- Contact email and phone number
- Projects and achievements
- Blog posts
- Workshop information

### 3. **Configure EmailJS**
If you want the contact form to work:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the service ID and template ID in `index.html`:

```javascript
// Contact email: dhirendraup07@gmail.com
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Note**: All contact form messages will be sent to `dhirendraup07@gmail.com`

### 4. **Host Your Website**
Options:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop or connect GitHub
- **GitHub Pages**: Push to `gh-pages` branch
- **Any web server**: Upload files via FTP/SSH

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #1d4ed8;
    --secondary-color: #0f766e;
    --accent-color: #f59e0b;
    /* ... more variables */
}
```

### Typography
Fonts are loaded from Google Fonts. Edit the link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

### Animations
Adjust animation timing in respective CSS files:
- `css/style.css` - Main animations
- `css/background.css` - Background & form animations
- `js/background.js` - Particle animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress images before adding to `Image/` folder
2. **Lazy Loading**: Images use lazy loading by default
3. **CSS**: Minify CSS in production
4. **JavaScript**: Defer non-critical JS
5. **Caching**: Set up browser caching on your server

## Dependencies

- **Font Awesome**: Icon library (CDN)
- **Google Fonts**: Typography (CDN)
- **EmailJS**: Contact form handling (CDN)
- **Cloudflare**: Email protection (optional)

## Accessibility Features

- ARIA labels for screen readers
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance
- Alt text for images
- Focus management

## License

Feel free to use this template for your own portfolio!

## Support

For issues or questions, refer to:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

---

**Last Updated**: January 2026
