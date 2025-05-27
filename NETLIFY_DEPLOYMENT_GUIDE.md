# Netlify Deployment Guide for SUNVEST CONSULTANCY LLP

## Quick Fix for Current Issue

The deployment issue you're experiencing is due to Netlify not finding the Next.js build output in the expected directory. Here's how to fix it:

### 1. Install Dependencies

First, install the required Netlify plugin:

```bash
npm install --save-dev @netlify/plugin-nextjs@^5.7.2
```

### 2. Netlify Site Configuration

In your Netlify dashboard:

1. Go to **Site settings** → **Build & deploy** → **Build settings**
2. Set the following:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Functions directory**: `.netlify/functions` (optional, will be auto-detected)

### 3. Environment Variables

In Netlify dashboard → **Site settings** → **Environment variables**, add:

```
NODE_VERSION=18
NEXT_TELEMETRY_DISABLED=1
```

### 4. Deploy

The `netlify.toml` file has been created with the correct configuration. Simply push your changes and redeploy:

```bash
git add .
git commit -m "Add Netlify configuration for Next.js deployment"
git push origin main
```

## Configuration Files Added

### netlify.toml
- Configures build command and publish directory
- Sets up Next.js plugin
- Handles API routes and static files
- Adds security headers

### Updated package.json
- Added `@netlify/plugin-nextjs` dependency

### Updated next.config.js
- Added Netlify-specific configuration
- Disabled trailing slashes for better compatibility

## How It Works

1. **Build Process**: Netlify runs `npm run build` which creates the `.next` directory
2. **Plugin**: The `@netlify/plugin-nextjs` plugin automatically handles:
   - Converting Next.js API routes to Netlify Functions
   - Setting up proper redirects for client-side routing
   - Optimizing static assets
3. **Deployment**: The `.next` directory is published as the site

## Troubleshooting

### If deployment still fails:

1. **Clear build cache**: In Netlify dashboard → **Deploys** → **Deploy settings** → **Clear cache and deploy site**

2. **Check build logs**: Look for specific error messages in the deploy log

3. **Verify Node version**: Ensure Node.js 18 is being used (set in environment variables)

4. **Manual build test**: Run locally to ensure build works:
   ```bash
   npm run build
   ```

### Common Issues and Solutions:

1. **"Module not found" errors**: 
   - Run `npm install` to ensure all dependencies are installed
   - Check that all imports use correct paths

2. **API routes not working**:
   - Ensure API routes are in `src/app/api/` directory
   - Check that the Netlify plugin is properly configured

3. **Static files not loading**:
   - Verify images are in the `public/` directory
   - Check that image paths don't start with `/public/`

## Performance Optimizations

The configuration includes:

- **Caching**: Static assets cached for 1 year
- **Compression**: Automatic gzip compression
- **Security Headers**: CSP, XSS protection, etc.
- **Image Optimization**: Next.js Image component with Unsplash optimization

## Next Steps

After successful deployment:

1. **Test all functionality**: Check forms, chatbot, navigation
2. **Monitor performance**: Use Netlify Analytics
3. **Set up custom domain**: If needed, configure DNS
4. **Enable HTTPS**: Automatic with Netlify

## Support

If you continue to experience issues:

1. Check the [Netlify Next.js documentation](https://docs.netlify.com/integrations/frameworks/next-js/)
2. Review the [deployment logs](https://app.netlify.com) for specific errors
3. Ensure all environment variables are properly set

---

**Note**: This configuration is optimized for the current Next.js App Router setup with API routes and maintains all existing functionality while ensuring proper Netlify deployment. 