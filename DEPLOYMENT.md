# Railway Deployment Guide

## Quick Start

### Step 1: Prepare Your Repository

Make sure your code is committed and pushed to GitHub/GitLab/Bitbucket:

```bash
git add .
git commit -m "Ready for Railway deployment"
git push origin main
```

### Step 2: Deploy on Railway

1. **Login to Railway**

   - Go to [railway.app](https://railway.app)
   - Sign in with your GitHub account (or create an account)

2. **Create New Project**

   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Authorize Railway to access your repositories
   - Select your portfolio repository

3. **Railway Auto-Detection**

   - Railway will automatically detect Next.js
   - It will use the `packageManager` field in `package.json` to use pnpm
   - Build and start commands are already configured

4. **Wait for Deployment**

   - Railway will automatically:
     - Install dependencies (`pnpm install`)
     - Build your app (`pnpm build`)
     - Start the server (`pnpm start`)
   - You can watch the build logs in real-time

5. **Get Your URL**
   - Once deployed, Railway provides a `*.railway.app` URL
   - Your site is live! 🎉

## Configuration Files

The project includes these Railway-specific files:

### `railway.json`

Railway configuration for build and deploy settings.

### `nixpacks.toml`

Build configuration that ensures:

- Node.js 20 is used
- pnpm is installed
- Dependencies are installed with `--frozen-lockfile`
- Build command: `pnpm build`
- Start command: `pnpm start`

## Environment Variables

For a basic portfolio, you typically don't need any environment variables. However, if you add features that require them:

1. Go to your Railway project
2. Click on your service
3. Go to "Variables" tab
4. Add your environment variables

## Custom Domain

To use your own domain:

1. Go to your Railway project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `arshbansal.dev`)
4. Railway will provide DNS records to add:
   - Add a CNAME record pointing to Railway's provided URL
   - Or add an A record with Railway's IP address
5. Railway will automatically provision SSL certificates

## Updating Your Site

Every time you push to your main branch, Railway will automatically:

1. Detect the changes
2. Rebuild your application
3. Deploy the new version

No manual deployment needed! 🚀

## Troubleshooting

### Build Fails

1. **Check Build Logs**

   - Go to your Railway project
   - Click on "Deployments"
   - View the build logs for errors

2. **Common Issues**

   - **Missing dependencies**: Ensure `pnpm-lock.yaml` is committed
   - **Node version**: Railway uses Node 20 by default (configured in `nixpacks.toml`)
   - **Build timeout**: Large builds might timeout; consider optimizing

3. **Verify Configuration**
   - Build command should be: `pnpm build`
   - Start command should be: `pnpm start`
   - Ensure `packageManager` is set in `package.json`

### Port Issues

Next.js automatically uses the `PORT` environment variable provided by Railway. The start script is configured to use it.

### Images Not Loading

- Ensure images are in the `public/` directory
- Use absolute paths starting with `/` (e.g., `/images/developer.jpg`)
- Check that image files are committed to your repository

## Railway CLI (Optional)

You can also deploy using Railway CLI:

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up
```

## Cost

Railway offers:

- **Free tier**: $5 credit per month
- **Hobby plan**: $5/month for more resources
- **Pro plan**: $20/month for production workloads

For a portfolio site, the free tier is usually sufficient!

## Support

- Railway Docs: [docs.railway.app](https://docs.railway.app)
- Railway Discord: [discord.gg/railway](https://discord.gg/railway)
