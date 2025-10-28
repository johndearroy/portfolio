# Senior Software Engineer Portfolio

A modern, performant, and mobile-friendly portfolio website built with React, TypeScript, and Tailwind CSS. Fully PWA-enabled for offline access and installable on mobile devices.

## ✨ Features

- 🎨 Modern dark theme with smooth animations
- 📱 Fully responsive and mobile-first design
- ⚡ Progressive Web App (PWA) with offline support
- 🚀 Optimized for performance (90+ Lighthouse score)
- 📊 Interactive project gallery and experience timeline
- 🔧 Easy to customize with JSON data files
- 📦 Ready for GitHub Pages deployment

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **PWA**: vite-plugin-pwa

## 📋 Project Structure

```
├── public/
│   ├── profile.jpg          # Your professional photo
│   ├── icon-192.png         # PWA icon (192x192)
│   └── icon-512.png         # PWA icon (512x512)
├── src/
│   ├── components/
│   │   ├── Hero.tsx         # Hero section with intro
│   │   ├── Skills.tsx       # Technical skills display
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Projects.tsx     # Project gallery
│   │   ├── Contact.tsx      # Contact information
│   │   └── Navigation.tsx   # Responsive navigation
│   ├── data/
│   │   ├── profile.json     # Personal info and links
│   │   ├── skills.json      # Technical skills by category
│   │   ├── experience.json  # Work history
│   │   └── projects.json    # Project portfolio
│   └── pages/
│       └── Index.tsx        # Main page layout
└── DEPLOYMENT.md            # Detailed deployment guide
```

## 🚀 Quick Start

### Prerequisites

- Node.js v16 or higher
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:8080 in your browser

## 🎨 Customization

### Update Your Information

Edit the JSON files in `src/data/`:

1. **profile.json** - Your name, title, summary, email, and social links
2. **skills.json** - Your technical skills organized by category
3. **experience.json** - Your work history with achievements
4. **projects.json** - Your portfolio projects with tech stacks

### Replace Profile Photo

Replace `public/profile.jpg` with your own professional photo (recommended: 512x512px or larger, square format).

### Customize Colors

Edit `src/index.css` to adjust the color scheme:
- Primary color (cyan/teal accent)
- Background colors
- Gradients and shadows

## 📦 Building for Production

Build the static site:

```bash
npm run build
```

The output will be in the `dist` folder, ready for deployment.

## 🌐 Deployment to GitHub Pages

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to GitHub Pages.

Quick deploy:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 📱 PWA Features

This portfolio includes full Progressive Web App support:

- ✅ Installable on mobile devices
- ✅ Offline access to static pages
- ✅ Service worker for caching
- ✅ Web app manifest
- ✅ Optimized loading performance

## 🎯 Performance

Optimized for high PageSpeed Insights scores:

- Code splitting and lazy loading
- Optimized images and assets
- Minimal JavaScript bundle
- CSS optimization
- Service worker caching

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- Email: royatrangpur@gmail.com
- GitHub: [Update in profile.json]
- LinkedIn: [Update in profile.json]

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

