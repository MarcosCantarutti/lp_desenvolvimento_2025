# Vercel Deployment Guide

This project is configured to work with both Netlify and Vercel platforms.

## Prerequisites

- A Vercel account ([sign up here](https://vercel.com))
- Replicate API token (for AI chat functionality)

## Deployment Steps

### 1. Install Vercel CLI (optional, for local testing)

```bash
npm i -g vercel
```

### 2. Deploy to Vercel

#### Option A: Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Vite configuration
5. Add environment variable:
   - `REPLICATE_API_TOKEN` - Your Replicate API token
6. Click "Deploy"

#### Option B: Using Vercel CLI

```bash
vercel
```

Follow the prompts and add the `REPLICATE_API_TOKEN` environment variable when asked.

### 3. Environment Variables

Set the following environment variable in your Vercel project settings:

- **REPLICATE_API_TOKEN**: Your Replicate API token (required for AI chat)

To set environment variables:
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add `REPLICATE_API_TOKEN` with your token value

### 4. API Endpoints

The project automatically detects the platform and uses the correct API endpoint:

- **Vercel**: `/api/getAIResponse`
- **Netlify**: `/.netlify/functions/getAIResponse`

You can also override this by setting `VITE_API_ENDPOINT` in your environment variables.

## Project Structure

```
├── api/
│   └── getAIResponse.ts    # Vercel serverless function
├── netlify/
│   └── functions/
│       └── getAIResponse.js # Netlify function (for backward compatibility)
├── vercel.json              # Vercel configuration
└── src/
    └── hooks/
        └── useChat.ts       # Auto-detects platform and uses correct endpoint
```

## Configuration Files

### vercel.json

The `vercel.json` file configures:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: `vite`
- **Rewrites for SPA routing** - This is crucial! It ensures that when you refresh the page (F5) on routes like `/about`, `/program`, etc., Vercel serves `index.html` instead of returning a 404. This allows React Router to handle the routing client-side.
- Cache headers for static assets

**Important**: The rewrite rule `"source": "/(.*)", "destination": "/index.html"` catches all routes and serves `index.html`, which allows React Router to handle client-side routing. Vercel automatically serves static files (JS, CSS, images) from the `dist` folder before applying rewrites, so your assets will load correctly.

### API Function

The Vercel API function (`api/getAIResponse.ts`) is a TypeScript serverless function that:
- Handles POST requests
- Validates input
- Calls Replicate API
- Returns formatted responses

## Troubleshooting

### API endpoint not working

1. Check that `REPLICATE_API_TOKEN` is set in Vercel environment variables
2. Verify the API function is deployed (check Functions tab in Vercel dashboard)
3. Check browser console for errors

### Build fails

1. Ensure all dependencies are in `package.json`
2. Check build logs in Vercel dashboard
3. Verify Node.js version compatibility (Vercel uses Node.js 18.x by default)

### Routing issues

The `vercel.json` includes rewrites to handle React Router's client-side routing. If you encounter 404 errors:
- Verify `vercel.json` is in the root directory
- Check that rewrites are correctly configured

## Differences from Netlify

| Feature | Netlify | Vercel |
|---------|---------|--------|
| Functions | `netlify/functions/` | `api/` |
| Config | `netlify.toml` | `vercel.json` |
| Function Runtime | Node.js (configurable) | Node.js 18.x |
| TypeScript Support | Via `@netlify/functions` | Native |

## Local Development

To test Vercel functions locally:

```bash
vercel dev
```

This will start a local development server that mimics Vercel's environment.

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Vite on Vercel](https://vercel.com/docs/frameworks/vite)
