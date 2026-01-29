# Vercel Deployment Guide for Bitcoin.app

## Quick Start

Your project is now fully optimized for Vercel deployment. Follow these steps:

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub (or your preferred auth method)
3. Click "New Project" and select your GitHub repository
4. Vercel will automatically detect Next.js configuration

### 2. Set Environment Variables

In your Vercel project dashboard, go to **Settings → Environment Variables** and add:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Replace `yourdomain.com` with your actual domain.

### 3. Connect Your Domain

1. In Vercel dashboard, go to **Domains**
2. Click "Add Domain"
3. Enter your custom domain (e.g., `itcoin.app`)
4. Follow the DNS setup instructions provided by Vercel
5. Wait for DNS propagation (typically 5-30 minutes)

### 4. Deploy

Once connected, Vercel will automatically deploy your project whenever you push to your main branch.

## Key Optimizations Already Configured

✅ **React Compiler** - Enabled for automatic optimization of React components  
✅ **Security Headers** - CORS, XSS, and clickjacking protection  
✅ **Caching Strategy** - Static assets cached globally, API routes uncached  
✅ **Performance** - Compression enabled, powered-by header hidden  
✅ **SEO** - OpenGraph and Twitter card metadata configured  
✅ **Node Version** - Pinned to Node 20.x for stability

## Affiliate Link Configuration

Your Binance affiliate link is currently hardcoded in `/app/page.tsx`:

```javascript
const BINANCE_LINK = "https://accounts.binance.com/register?ref=876543543";
```

To easily update this across your app, consider moving it to an environment variable. Update as needed by modifying the code.

## Monitoring Your Deployment

- **Analytics**: Check Vercel dashboard for performance metrics
- **Error Tracking**: View deployment logs in the Vercel dashboard
- **Monitoring**: Set up alerts in Vercel Settings → Monitoring

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your domain for SEO metadata | `https://itcoin.app` |

## Tips for Success

1. **Domain Setup**: Make sure your domain is properly configured in Vercel
2. **Cache Invalidation**: Vercel automatically revalidates ISR content
3. **Monitoring**: Use Vercel Analytics to track performance
4. **Rollbacks**: Can rollback deployments instantly from Vercel dashboard
5. **Email Alerts**: Subscribe to email alerts for failed deployments

## Troubleshooting

**Domain not connecting?**
- Verify DNS records are correct in Vercel
- Wait for DNS propagation (can take 24 hours)
- Check your domain registrar settings

**Build failing?**
- Check the build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify Node version compatibility

**Affiliate link not updating?**
- Clear browser cache (Ctrl+Shift+Del)
- Force deploy from Vercel dashboard
- Check that the link is correct in the code

---

For more help, visit [Vercel Documentation](https://vercel.com/docs)
