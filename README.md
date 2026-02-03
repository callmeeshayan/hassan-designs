# Hassan Designs - Thumbnail Redesign Service
## Professional Before/After Thumbnail Comparisons for Content Creators

A modern, interactive web application that showcases thumbnail redesigns with an engaging before/after slider. Built for content creators who want to boost their click-through rates (CTR).

### ✨ Features

- **Interactive Slider**: Drag-to-compare before and after thumbnails with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Accessibility First**: WCAG compliant with keyboard navigation and screen reader support
- **Dynamic Content**: Easy-to-manage client database for multiple campaigns
- **Performance Optimized**: Fast loading, minimal dependencies, pure JavaScript
- **Modern Stack**: Tailwind CSS for styling, semantic HTML5
- **Dark Theme**: Professional dark mode design that reduces eye strain

### 🚀 Getting Started

#### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (for development)

#### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hassan-designs.git
cd hassan-designs
```

2. Serve locally (choose one):

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

**Using VS Code Live Server:**
- Install the Live Server extension
- Right-click `index.html` and select "Open with Live Server"

3. Open your browser and navigate to:
```
http://localhost:8000
```

### 📁 Project Structure

```
.
├── index.html          # Main HTML template
├── script.js           # Application logic
├── data.js             # Client database
├── styles.css          # Custom stylesheets
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── img/                # Image assets directory
```

### 💻 Usage

#### Viewing a Client Campaign

Access a specific client's campaign using the URL query parameter:

```
http://localhost:8000/?id=default
http://localhost:8000/?id=tech-creator-01
http://localhost:8000/?id=beauty-creator-02
```

#### Adding a New Client Campaign

Edit `data.js` and add a new entry to the `database` object:

```javascript
'your-client-id': {
  greeting: "Your personalized greeting",
  subtext: "What you observed about their thumbnails",
  explanation: "Your detailed strategy explanation",
  thumbnails: [
    {
      title: "Campaign Title",
      before: "https://image-url/before.jpg",
      after: "https://image-url/after.jpg",
    },
  ],
},
```

Then share the link:
```
http://yourdomain.com/?id=your-client-id
```

### 🎨 Customization

#### Colors
Modify the gradient colors in `index.html` and CSS variables in `styles.css`:

```css
:root {
    --primary-color: #dc2626;      /* Red */
    --accent-color: #ea580c;       /* Orange */
    --bg-dark: #09090b;            /* Dark background */
}
```

#### Contact Email
Update the contact email in `script.js`:

```javascript
const CONFIG = {
    contactEmail: 'contact@hassandesigns.com'
};
```

Also update the `mailto:` link in `index.html`.

### 🔧 Configuration

Key configuration options in `script.js`:

```javascript
const CONFIG = {
    defaultClientId: 'default',        // Default client if no ID provided
    errorMessage: 'Unable to load...',  // Error message text
    contactEmail: 'contact@thumbnoai.com'
};
```

### ♿ Accessibility

This project follows WCAG 2.1 AA standards:

- ✅ Semantic HTML5 structure
- ✅ Keyboard navigation support
- ✅ ARIA labels and roles
- ✅ Screen reader friendly
- ✅ High contrast color scheme
- ✅ Reduced motion support
- ✅ Focus indicators

### 📊 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Android Chrome 80+

### 🚀 Deployment

#### Deploy to GitHub Pages

1. Create a `gh-pages` branch:
```bash
git checkout -b gh-pages
```

2. Push to GitHub:
```bash
git push origin gh-pages
```

3. Enable GitHub Pages in repository settings
3. Access your site at: `https://yourusername.github.io/hassan-designs/`

#### Deploy to Other Platforms

- **Netlify**: Connect your GitHub repo and deploy automatically
- **Vercel**: Similar process to Netlify
- **Traditional Hosting**: Upload files via FTP/SFTP

### 🔒 Security

- No backend dependencies (static site)
- HTML escaping to prevent XSS attacks
- No sensitive data stored
- Safe for public deployment

### 📝 License

This project is open source and available under the [MIT License](LICENSE).

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### 📧 Support

For questions or support, please open an issue on GitHub or contact Hassan Designs.

### 🎯 Future Enhancements

- [ ] Multiple thumbnail comparisons per campaign
- [ ] Analytics integration
- [ ] Client feedback form
- [ ] Portfolio page
- [ ] Dark/Light theme toggle
- [ ] Testimonials section
- [ ] Pricing calculator

---

**Made with ❤️ for content creators**
