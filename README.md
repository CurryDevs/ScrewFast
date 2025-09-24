# 🔧 Torque Craft

A modern, responsive website template for hardware tools and construction services, built with Astro, Tailwind CSS, and featuring a stunning red-to-blue gradient design theme.

## ✨ Features

### 🎨 Design & UI
- **Modern Gradient Theme**: Beautiful red-to-blue gradient color scheme throughout
- **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **Dark/Light Mode**: Complete theme switching with system preference detection
- **Glass Morphism Effects**: Modern backdrop blur and transparency effects
- **Smooth Animations**: Enhanced user experience with fade-in and hover effects

### 🚀 Performance & SEO
- **Lightning Fast**: Built with Astro for optimal performance
- **SEO Optimized**: Meta tags, structured data, and sitemap included
- **Image Optimization**: Automatic image compression and format conversion
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### 🛠️ Technical Features
- **Multi-language Support**: English and French localization ready
- **Component-Based**: Modular Astro components for easy customization
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Responsive Navigation**: Mobile-first navbar with hamburger menu

### 📱 Responsive Design
- **Mobile-First**: Optimized for smallest screens first
- **Breakpoint System**: Custom responsive utilities for all screen sizes
- **Flexible Layouts**: Grid and flexbox layouts that adapt seamlessly
- **Touch-Friendly**: Large touch targets and mobile-optimized interactions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd torque-craft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 📁 Project Structure

```
torque-craft/
├── public/                 # Static assets
│   ├── images/            # Image files
│   └── favicon.ico        # Site favicon
├── src/
│   ├── components/        # Reusable components
│   │   ├── sections/      # Page sections
│   │   ├── ui/           # UI components
│   │   └── BrandLogo.astro
│   ├── content/          # Content collections
│   │   ├── blog/         # Blog posts
│   │   ├── products/     # Product data
│   │   └── insights/     # Insights content
│   ├── data_files/       # Configuration data
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions
├── astro.config.mjs      # Astro configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies
```

## 🎨 Customization

### Brand Colors
The project uses a red-to-blue gradient theme. To customize colors, edit:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      }
    }
  }
}
```

### Logo
Replace the logo by editing `src/components/BrandLogo.astro`:

```astro
<!-- Update the SVG content with your logo -->
<svg xmlns="http://www.w3.org/2000/svg" ...>
  <!-- Your logo SVG content -->
</svg>
```

### Content
- **Products**: Edit files in `src/content/products/`
- **Blog Posts**: Add/edit files in `src/content/blog/`
- **Site Info**: Update `src/data_files/constants.ts`

## 🌐 Multi-language Support

The template supports multiple languages:

- **English** (default): `/`
- **French**: `/fr/`

To add a new language:

1. Create translation files in `src/utils/[language]/`
2. Add content files in `src/content/[collection]/[language]/`
3. Update `astro.config.mjs` with the new locale

## 📱 Responsive Breakpoints

```css
/* Custom breakpoints */
xs: '320px'   /* Extra small devices */
sm: '640px'   /* Small devices */
md: '768px'   /* Medium devices */
lg: '1024px'  /* Large devices */
xl: '1280px'  /* Extra large devices */
2xl: '1536px' /* 2X large devices */
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Maintenance
npm run astro check  # Check for issues
npm run astro sync   # Sync content types
```

## 🎯 Key Components

### Navigation
- **Navbar**: Responsive navigation with mobile hamburger menu
- **Footer**: Multi-column footer with links and social media

### Sections
- **Hero Section**: Eye-catching hero with gradient background
- **Features**: Showcase product/service features
- **Pricing**: Flexible pricing cards
- **Testimonials**: Customer reviews and ratings
- **FAQ**: Expandable question/answer sections

### UI Components
- **Buttons**: Primary and secondary CTA buttons
- **Cards**: Product and blog post cards
- **Forms**: Contact and newsletter forms
- **Icons**: SVG icon system

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Astro and configure build settings
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Works out of the box
- **GitHub Pages**: Requires static adapter
- **Self-hosted**: Build and serve the `dist/` folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Astro**: For the amazing static site generator
- **Tailwind CSS**: For the utility-first CSS framework
- **Preline UI**: For UI components and interactions
- **Unsplash**: For beautiful stock photography

## 📞 Support

If you have any questions or need help with customization:

- 📧 Email: support@torquecraft.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/torque-craft/issues)
- 📖 Documentation: [Astro Docs](https://docs.astro.build)

---

**Built with ❤️ using Astro, Tailwind CSS, and modern web technologies.**
