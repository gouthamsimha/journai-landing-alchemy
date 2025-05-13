
# JournAI Landing Page

A state-of-the-art landing page for JournAI, a modern journaling app with AI capabilities. Built with React, TypeScript, Framer Motion, and Tailwind CSS.

## Features

- 📱 Fully responsive design
- 🎨 Dynamic theme switching (light/dark mode)
- ✨ Smooth animations with Framer Motion
- 🧩 Component-based architecture
- 📈 Interactive visualizations
- 🛠️ Optimized for performance
- 🔍 SEO-friendly

## Quick Start

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd journai-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Deployment

### Deploying to Vercel (One-Click)

1. Fork this repository to your GitHub account
2. Create a new project on [Vercel](https://vercel.com)
3. Import the forked repository
4. Vercel will automatically detect the configuration and deploy your site
5. Your landing page will be live at `https://your-project-name.vercel.app`

### Customizing Content

1. **Text & Copy**: Edit the content in each component file under `src/components/`
2. **Colors & Branding**: Modify theme colors in `src/index.css` and `tailwind.config.ts`
3. **Images & Media**: Replace placeholder images in code with your own assets
4. **Animation Settings**: Adjust animation parameters in `src/hooks/use-animation.ts`

## Project Structure

- `/src/components/` - Contains all UI components
- `/src/hooks/` - Custom React hooks for animations and theme
- `/src/pages/` - Page components
- `/public/` - Static assets

## Customization Tips

### Updating Brand Colors

Edit the CSS variables in `src/index.css` to match your brand colors:

```css
:root {
  --bg-primary: 42 45% 91%;  /* Your light mode background */
  --fg-primary: 0 0% 7%;     /* Your light mode text */
  --accent: 255 48% 57%;     /* Your accent color */
  /* ... other variables ... */
}

.dark {
  --bg-primary: 0 0% 11%;    /* Your dark mode background */
  --fg-primary: 0 0% 96%;    /* Your dark mode text */
  /* ... other variables ... */
}
```

### Replacing Images and Media

1. Add your images to the `/public/` directory
2. Replace image references in components with your own assets

### Adding New Sections

1. Create a new component in `/src/components/`
2. Import and add it to the main `Index.tsx` file
3. Style it using Tailwind CSS classes

## Performance Optimization

This landing page is optimized for performance:
- Code splitting
- Lazy loading of images
- Minimal third-party dependencies
- Optimized animations with reduced motion support

## License

MIT
