# Government Process Guide - GitHub Deployment Guide

This guide explains how to host the Government Process Guide website on GitHub Pages or other hosting platforms.

## Table of Contents
1. [GitHub Pages Deployment (Recommended)](#github-pages-deployment)
2. [Vercel Deployment](#vercel-deployment)
3. [Netlify Deployment](#netlify-deployment)
4. [Self-Hosted on GitHub](#self-hosted-on-github)

---

## GitHub Pages Deployment (Recommended)

GitHub Pages is the easiest way to host static websites for free directly from your GitHub repository.

### Prerequisites
- GitHub account
- Git installed on your computer
- The project repository

### Step 1: Prepare Your Repository

1. **Clone or create a repository** on GitHub named `govprocess-guide` (or any name you prefer)

2. **Push the project to GitHub:**
   ```bash
   cd govprocess-guide
   git remote add origin https://github.com/YOUR_USERNAME/govprocess-guide.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Configure for GitHub Pages

1. **Update `vite.config.ts`** to set the base path (if hosting as a project site):
   
   If hosting at `https://YOUR_USERNAME.github.io/govprocess-guide/`:
   ```typescript
   export default defineConfig({
     base: '/govprocess-guide/',
     // ... rest of config
   })
   ```
   
   If hosting at `https://YOUR_USERNAME.github.io/` (user/org site):
   ```typescript
   export default defineConfig({
     base: '/',
     // ... rest of config
   })
   ```

2. **Build the project locally:**
   ```bash
   npm run build
   # or
   pnpm build
   ```

### Step 3: Deploy Using GitHub Actions (Automated)

1. **Create `.github/workflows/deploy.yml`:**
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     pull_request:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '20'

         - name: Install pnpm
           uses: pnpm/action-setup@v2
           with:
             version: 10

         - name: Install dependencies
           run: pnpm install

         - name: Build
           run: pnpm build

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Commit and push:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push
   ```

3. **Enable GitHub Pages in repository settings:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select **gh-pages** branch and **/ (root)** folder
   - Click **Save**

4. **Your site will be live at:**
   - `https://YOUR_USERNAME.github.io/govprocess-guide/` (project site)
   - or `https://YOUR_USERNAME.github.io/` (user/org site)

---

## Vercel Deployment

Vercel offers free hosting with automatic deployments from GitHub.

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **"New Project"**
4. Select your `govprocess-guide` repository
5. Vercel will auto-detect it as a Vite project

### Step 2: Configure Build Settings

- **Framework Preset:** Vite
- **Build Command:** `pnpm build`
- **Output Directory:** `dist`
- **Install Command:** `pnpm install`

### Step 3: Deploy

Click **Deploy** and your site will be live at a Vercel URL (e.g., `govprocess-guide.vercel.app`)

### Step 4: Custom Domain (Optional)

1. Go to **Project Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed by Vercel

---

## Netlify Deployment

Netlify is another excellent free hosting platform with continuous deployment.

### Step 1: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click **"New site from Git"**
4. Select your `govprocess-guide` repository

### Step 2: Configure Build Settings

- **Build command:** `pnpm build`
- **Publish directory:** `dist`

### Step 3: Deploy

Click **Deploy site** and your site will be live at a Netlify URL (e.g., `govprocess-guide.netlify.app`)

### Step 4: Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Add your custom domain
3. Update DNS records as instructed by Netlify

---

## Self-Hosted on GitHub (Manual Deployment)

If you prefer manual control, you can use the `gh-pages` branch method.

### Step 1: Install gh-pages Package

```bash
npm install --save-dev gh-pages
# or
pnpm add -D gh-pages
```

### Step 2: Update package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "gh-pages -d dist",
    "build-and-deploy": "npm run build && npm run deploy"
  }
}
```

### Step 3: Build and Deploy

```bash
npm run build-and-deploy
# or
pnpm build-and-deploy
```

### Step 4: Enable GitHub Pages

- Go to your repository **Settings** → **Pages**
- Select **gh-pages** branch as the source
- Your site will be live at `https://YOUR_USERNAME.github.io/govprocess-guide/`

---

## Troubleshooting

### Issue: Blank Page After Deployment

**Solution:** Check that the `base` path in `vite.config.ts` matches your deployment URL.

### Issue: Assets Not Loading

**Solution:** Ensure all image paths are relative or use the `base` path correctly.

### Issue: Routing Not Working

**Solution:** GitHub Pages doesn't support client-side routing by default. You may need to:
1. Use hash-based routing (`/#/process/passport`)
2. Create a `_redirects` file (for Netlify)
3. Use a 404.html file (for GitHub Pages)

---

## Recommended Approach

**For beginners:** Use **Vercel** or **Netlify** - they handle everything automatically.

**For GitHub enthusiasts:** Use **GitHub Pages with GitHub Actions** - it's free and keeps everything on GitHub.

**For advanced users:** Self-host on your own server or use Docker.

---

## Environment Variables

If you add environment variables in the future:

1. **For GitHub Pages/Vercel/Netlify:** Add them in the platform's settings
2. **For local development:** Create a `.env.local` file
3. **Never commit `.env` files to GitHub**

---

## Next Steps

1. Choose your hosting platform
2. Follow the steps above
3. Test the deployed site
4. Share your live URL!

For more help, refer to:
- [GitHub Pages Documentation](https://pages.github.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
