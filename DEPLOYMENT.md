# Deployment Guide for ItCoin.app

## Quick Deploy to Vercel (Recommended)

### 1. Push to GitHub

```bash
cd /home/atheer/dev/itcoin.app
git init
git add .
git commit -m "Initial commit: ItCoin.app cryptocurrency info site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/itcoin.app.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Import your `itcoin.app` repository
4. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

5. Add Environment Variables:
   - `MONGODB_URI` = `your_mongodb_connection_string`
   
   Get MongoDB URI from MongoDB Atlas:
   - Go to [cloud.mongodb.com](https://cloud.mongodb.com)
   - Create a free cluster
   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace `<password>` with your database password
   - Format: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/itcoin?retryWrites=true&w=majority`

6. Click **"Deploy"**

Your site will be live at: `https://your-project-name.vercel.app`

### 3. Add Custom Domain

1. In Vercel project settings, go to **"Domains"**
2. Add `itcoin.app`
3. Update DNS records at your domain registrar:
   - **Type:** A Record
   - **Name:** @
   - **Value:** `76.76.21.21` (Vercel IP)
   
   OR
   
   - **Type:** CNAME
   - **Name:** @
   - **Value:** `cname.vercel-dns.com`

4. Wait for DNS propagation (5-60 minutes)
5. SSL certificate will be auto-provisioned

---

## Alternative: Manual Server Deployment

### Requirements
- Node.js 18+
- MongoDB Atlas account
- Domain with SSL

### Build & Run

```bash
# Install dependencies
npm install

# Build production
npm run build

# Start production server
npm start
```

Server runs on port 3000. Use nginx as reverse proxy:

```nginx
server {
    listen 80;
    server_name itcoin.app;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Environment Variables for Production

Create `.env.local` or set in Vercel:

```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/itcoin
```

---

## Post-Deployment Checklist

- [ ] Test live site at deployed URL
- [ ] Verify all pages load (/, /how-to-buy, /what-is-itcoin)
- [ ] Check API endpoints (/api/price, /api/chart, /api/info)
- [ ] Test email subscription form
- [ ] Verify Binance affiliate links work
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Monitor MongoDB connection

---

## MongoDB Atlas Setup

1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create account or sign in
3. Create a **FREE** M0 cluster (512 MB storage)
4. Choose AWS or Google Cloud + nearest region
5. Wait for cluster creation (~3-5 minutes)
6. Click **"Connect"**
7. Add connection IP: `0.0.0.0/0` (allow from anywhere)
8. Create database user:
   - Username: `itcoin_admin`
   - Password: (generate secure password)
9. Get connection string:
   - Select "Connect your application"
   - Copy MongoDB URI
   - Replace `<password>` with your password
   - Database name: `itcoin`

---

## Performance Optimization

### Enable Edge Caching
Already configured via Next.js revalidation:
- `/api/price` - 60 seconds
- `/api/chart` - 300 seconds (5 min)
- `/api/info` - 600 seconds (10 min)

### Image Optimization
Add Open Graph image:
```bash
# Add to /public/og-image.png (1200x630px)
```

Update [layout.tsx](app/layout.tsx):
```typescript
openGraph: {
  images: ['/og-image.png'],
}
```

---

## Monitoring & Analytics

### Vercel Analytics (Free)
Automatically enabled for Vercel deployments

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `itcoin.app`
3. Verify ownership (DNS or HTML tag)
4. Submit sitemap: `https://itcoin.app/sitemap.xml`

### Google Analytics (Optional)
Add to [layout.tsx](app/layout.tsx):
```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### MongoDB Connection Error
- Check MONGODB_URI is set correctly
- Verify IP whitelist in MongoDB Atlas
- Check username/password are correct

### Pages Not Loading
- Check build logs in Vercel
- Verify all environment variables are set
- Check browser console for errors

---

## Scaling Tips

### When to Upgrade
- **>100K visits/month**: Upgrade MongoDB to M10 ($0.08/hr)
- **>1M visits/month**: Consider Redis caching layer
- **High traffic**: Enable Vercel Pro ($20/mo) for better performance

### Future Enhancements
- Add Redis for API response caching
- Implement CDN for static assets
- Add rate limiting for API routes
- Set up automated backups for MongoDB

---

## Support & Maintenance

- Monitor Vercel dashboard for errors
- Check MongoDB metrics weekly
- Update dependencies monthly: `npm update`
- Review Google Search Console monthly for SEO insights

**Your ItCoin.app site is now ready to deploy!** 🚀
