# Deployment Instructions for GitHub Pages

This portfolio is configured as a static site and can be easily deployed to GitHub Pages.

## Prerequisites

- Node.js (v16 or higher) and npm installed
- Git repository initialized
- GitHub account

## Step 1: Update Configuration

1. Update the GitHub repository URL in `vite.config.ts`:
   - If your repository is at `https://github.com/username/repo-name`, update the `base` property:
   ```typescript
   base: "/repo-name/", // Use "/repo-name/" for project pages or "/" for user pages
   ```

2. Update your personal information in the JSON files:
   - `src/data/profile.json` - Your name, email, GitHub, LinkedIn, photo
   - `src/data/skills.json` - Your technical skills
   - `src/data/experience.json` - Your work experience
   - `src/data/projects.json` - Your projects

3. Replace the profile photo at `public/profile.jpg` with your own professional photo.

## Step 2: Build the Site

Run the build command to generate the static files:

```bash
npm install
npm run build
```

This will create a `dist` folder with all the static files ready for deployment.

## Step 3: Deploy to GitHub Pages

### Option A: Using gh-pages Package (Recommended)

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add deployment scripts to `package.json`:
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

### Option B: Manual Deployment

1. Build the site (if not already done):
```bash
npm run build
```

2. Push the `dist` folder to the `gh-pages` branch:
```bash
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

### Option C: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Step 4: Configure GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** > **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**
5. Your site will be available at `https://username.github.io/repo-name/`

## Performance Optimization

The site is already optimized for performance with:
- ✅ PWA (Progressive Web App) support
- ✅ Offline functionality
- ✅ Code splitting and lazy loading
- ✅ Optimized assets
- ✅ Mobile-first responsive design

## Testing Locally

Before deploying, test your site locally:

```bash
npm run dev
```

Visit `http://localhost:8080` to preview your portfolio.

## Post-Deployment Checklist

- [ ] Verify all sections display correctly
- [ ] Test mobile responsiveness
- [ ] Check all links (email, GitHub, LinkedIn) work
- [ ] Test PWA functionality (try "Add to Home Screen" on mobile)
- [ ] Run Lighthouse audit for performance (aim for 90+ score)
- [ ] Update any remaining placeholder content

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Update the `base` property in `vite.config.ts` to `"/"`

For detailed instructions, see: [GitHub Pages Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Troubleshooting

### Blank page after deployment
- Check that the `base` property in `vite.config.ts` matches your repository structure
- Ensure all asset paths are relative

### 404 errors
- Verify the `gh-pages` branch has the built files
- Check GitHub Pages settings in repository settings

### PWA not working
- Ensure the manifest and service worker files are in the `dist` folder
- Check browser console for any service worker errors
- Test on HTTPS (GitHub Pages provides this automatically)

## Updating Your Portfolio

To update your portfolio:

1. Make changes to the code or JSON data files
2. Test locally with `npm run dev`
3. Run `npm run deploy` (if using gh-pages package)
4. Changes will be live in a few minutes

---

**Need Help?**
- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
