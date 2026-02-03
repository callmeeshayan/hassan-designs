# Contributing Guide

Thank you for your interest in contributing! Here's how to get started.

## Code of Conduct

Be respectful and professional. We welcome all contributors.

## How to Contribute

### Reporting Bugs

1. Check if the bug already exists in Issues
2. Include:
   - Browser and OS version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

1. Use Discussions (not Issues)
2. Describe the feature and why it's useful
3. Include mockups if UI-related

### Submitting Code

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/thumbnail-redesign.git
   cd thumbnail-redesign
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments for complex logic
   - Test thoroughly locally

4. **Commit with clear messages**
   ```bash
   git commit -m "Add: brief description of changes"
   ```

5. **Push and create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Code Style

### JavaScript
- Use camelCase for variables and functions
- Add JSDoc comments for functions
- Keep functions focused and small
- Use const/let (not var)

Example:
```javascript
/**
 * Brief description of what function does
 * @param {type} paramName - Description
 * @returns {type} What it returns
 */
function myFunction(paramName) {
    return result;
}
```

### HTML
- Use semantic elements (header, nav, main, section, footer)
- Add ARIA labels for accessibility
- Keep structure clean and hierarchical

### CSS
- Use CSS variables for colors
- Keep selectors simple
- Mobile-first approach
- Add comments for non-obvious styles

## Pull Request Process

1. Update README.md if needed
2. Test in multiple browsers
3. Ensure no console errors
4. Follow the PR template
5. Assign reviewers
6. Address feedback promptly

## Development Workflow

### Local Development

```bash
# Start local server
python -m http.server 8000

# Open browser
http://localhost:8000
```

### Testing Checklist

- [ ] Functionality works as intended
- [ ] No console errors
- [ ] Responsive on mobile (375px, 768px, 1920px)
- [ ] Keyboard navigation works
- [ ] Images load correctly
- [ ] Email link functions
- [ ] Slider is smooth

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Chrome
- Mobile Safari

## File Structure

Don't create unnecessary files. Current structure:
```
.
├── index.html          # Main page
├── script.js           # Logic
├── data.js             # Client database
├── styles.css          # Styles
├── .gitignore          # Git ignore
├── README.md           # Documentation
├── DEPLOYMENT.md       # Deploy guide
├── LICENSE             # License
├── package.json        # Metadata
└── img/                # Images
```

## Commit Message Guidelines

Use conventional commits:

```
type(scope): subject

type options:
- add:      New feature
- fix:      Bug fix
- docs:     Documentation
- style:    Formatting
- refactor: Code reorganization
- test:     Test additions
- chore:    Build/dependencies
- perf:     Performance

Example:
add(slider): keyboard navigation support
fix(data): remove duplicate client IDs
docs(readme): add browser support info
```

## Asking Questions

- GitHub Discussions for questions
- Issues only for bugs/features
- Check existing issues first

## Recognition

- Contributors listed in README (with permission)
- Meaningful contributions may be showcased

## Areas for Contribution

- [ ] New client campaign templates
- [ ] Accessibility improvements
- [ ] Performance optimizations
- [ ] Documentation improvements
- [ ] Browser compatibility fixes
- [ ] Mobile responsiveness
- [ ] New features (with discussion first)

## Performance Guidelines

- Keep JavaScript under 50KB
- Images should be optimized
- Avoid unnecessary dependencies
- Test on slower connections

## Accessibility Standards

Maintain WCAG 2.1 AA compliance:
- ✅ Keyboard navigation
- ✅ ARIA labels
- ✅ Color contrast (4.5:1)
- ✅ Semantic HTML
- ✅ Focus indicators

## Questions?

- Open a Discussion
- Check README.md
- Review existing code
- Test locally first

Thank you for contributing! 🎉
