# Quick Start: Deploy to GitHub Pages in 5 Minutes

## Option 1: Using Vercel (Easiest - Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Done! Your site is live at `yourproject.vercel.app`

**That's it!** No configuration needed. Vercel auto-detects Vite projects.

---

## Option 2: Using GitHub Pages + GitHub Actions

### Step 1: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
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
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

### Step 2: Push to GitHub
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **gh-pages** branch and **/ (root)**
5. Click **Save**

### Step 4: Wait for Deployment
- GitHub Actions will automatically build and deploy
- Check the "Actions" tab to see the build status
- Your site will be live at `https://YOUR_USERNAME.github.io/govprocess-guide/`

---

## Option 3: Using Netlify

### Step 1: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select your GitHub repository

### Step 2: Configure
- **Build command:** `pnpm build`
- **Publish directory:** `dist/public`

### Step 3: Deploy
Click "Deploy site" and you're done!

---

## Verify Your Deployment

After deployment, test these:
- ✅ Home page loads
- ✅ Search works
- ✅ Categories display correctly
- ✅ Click on a process to view details
- ✅ Checklist functionality works
- ✅ FAQ page loads
- ✅ Mobile responsive design works

---

## Common Issues & Fixes

### Issue: Blank Page
**Fix:** The build output might be in the wrong directory. Check that your deployment points to `dist/public` (not `dist`).

### Issue: 404 on Refresh
**Fix:** This is normal for client-side routing. GitHub Pages needs special configuration:
- Create `public/404.html` with the same content as `index.html`
- Or use hash-based routing (add `/#/` to URLs)

### Issue: Assets Not Loading
**Fix:** Ensure the `base` path in `vite.config.ts` is correct:
- For project site: `base: '/govprocess-guide/'`
- For user site: `base: '/'`

---

## Next Steps

1. **Choose your platform** (Vercel is easiest)
2. **Follow the steps above**
3. **Share your live URL!**
4. **Optional:** Add a custom domain in platform settings

---

## Useful Commands

```bash
# Build locally to test
pnpm build

# Preview the build
pnpm preview

# Check for errors
pnpm check

# Format code
pnpm format
```

---

## Support

For detailed instructions, see `GITHUB_DEPLOYMENT.md` in the project root.
