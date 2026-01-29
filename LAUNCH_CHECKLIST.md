# 🚀 Launch Checklist for ItCoin.app

## Pre-Launch Setup

### 1. MongoDB Atlas Setup ⏱️ 5 minutes
- [ ] Create account at [cloud.mongodb.com](https://cloud.mongodb.com)
- [ ] Create FREE M0 cluster
- [ ] Set cluster name: `itcoin-cluster`
- [ ] Create database user:
  - Username: `itcoin_admin`
  - Password: (generate secure password - save it!)
- [ ] Whitelist IPs: `0.0.0.0/0` (allow all)
- [ ] Get connection string:
  - Click "Connect" → "Connect your application"
  - Copy the string
  - Replace `<password>` with your password
  - Should look like: `mongodb+srv://itcoin_admin:PASSWORD@cluster0.xxxxx.mongodb.net/itcoin`

### 2. GitHub Repository ⏱️ 3 minutes
- [ ] Create new repo at [github.com/new](https://github.com/new)
  - Name: `itcoin.app`
  - Visibility: Public or Private
  - Don't initialize with README (already exists)
- [ ] Copy the remote URL
- [ ] Run these commands:
```bash
cd /home/atheer/dev/itcoin.app
git init
git add .
git commit -m "Initial commit: ItCoin.app cryptocurrency info site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/itcoin.app.git
git push -u origin main
```

### 3. Vercel Deployment ⏱️ 5 minutes
- [ ] Sign up/login at [vercel.com](https://vercel.com)
- [ ] Click "New Project"
- [ ] Import from GitHub: Select `itcoin.app` repository
- [ ] Configure build:
  - Framework: Next.js (auto-detected)
  - Root Directory: `./`
  - Build Command: `npm run build` (auto-detected)
  - Output Directory: `.next` (auto-detected)
- [ ] Add Environment Variables:
  - Variable: `MONGODB_URI`
  - Value: (paste your MongoDB connection string from step 1)
- [ ] Click "Deploy"
- [ ] Wait for deployment (~2 minutes)
- [ ] Copy your live URL: `https://your-project.vercel.app`

### 4. Test Live Site ⏱️ 3 minutes
- [ ] Open deployed URL in browser
- [ ] Check homepage loads with price widget
- [ ] Navigate to "How to Buy" page
- [ ] Navigate to "What is ItCoin" page
- [ ] Test email alert signup form
- [ ] Click Binance affiliate link (verify ref parameter)
- [ ] Test on mobile device
- [ ] Check browser console for errors

---

## Custom Domain Setup (Optional)

### Add Domain to Vercel ⏱️ 2 minutes
- [ ] In Vercel project settings, go to "Domains"
- [ ] Click "Add Domain"
- [ ] Enter: `itcoin.app`
- [ ] Also add: `www.itcoin.app`

### Update DNS Records ⏱️ 5 minutes + propagation time
Go to your domain registrar (GoDaddy, Namecheap, etc.):

**For root domain (itcoin.app):**
- [ ] Type: `A Record`
- [ ] Name: `@`
- [ ] Value: `76.76.21.21`
- [ ] TTL: `3600` or Auto

**For www subdomain:**
- [ ] Type: `CNAME`
- [ ] Name: `www`
- [ ] Value: `cname.vercel-dns.com`
- [ ] TTL: `3600` or Auto

### Verify Domain ⏱️ 10-60 minutes
- [ ] Wait for DNS propagation (check at [whatsmydns.net](https://www.whatsmydns.net))
- [ ] Vercel will auto-provision SSL certificate
- [ ] Site live at `https://itcoin.app` ✅

---

## SEO & Analytics Setup

### Google Search Console ⏱️ 5 minutes
- [ ] Go to [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Click "Add Property"
- [ ] Enter domain: `itcoin.app`
- [ ] Verify ownership:
  - Option 1: DNS TXT record
  - Option 2: Upload HTML file to `/public`
- [ ] Submit sitemap: `https://itcoin.app/sitemap.xml`

### Google Analytics (Optional) ⏱️ 5 minutes
- [ ] Create account at [analytics.google.com](https://analytics.google.com)
- [ ] Create property for `itcoin.app`
- [ ] Get tracking ID (G-XXXXXXXXXX)
- [ ] Add to `app/layout.tsx`:
```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### Bing Webmaster Tools (Optional) ⏱️ 3 minutes
- [ ] Sign up at [bing.com/webmasters](https://www.bing.com/webmasters)
- [ ] Add site: `itcoin.app`
- [ ] Submit sitemap

---

## Content & Marketing

### Social Media Setup
- [ ] Create Twitter/X account: @ItCoinApp (or similar)
- [ ] Create Open Graph image (1200x630px)
- [ ] Upload to `/public/og-image.png`
- [ ] Update metadata in `app/layout.tsx`

### Content Marketing
- [ ] Share on Reddit: r/CryptoCurrency
- [ ] Share on Twitter/X
- [ ] Submit to crypto directories
- [ ] Post in relevant Discord servers

### Affiliate Marketing
- [ ] Verify Binance referral link works
- [ ] Track clicks in Binance dashboard
- [ ] Consider adding UTM parameters:
  ```
  https://accounts.binance.com/register?ref=876543543&utm_source=itcoin_app&utm_medium=website
  ```

---

## Monitoring & Maintenance

### Week 1 Checklist
- [ ] Monitor Vercel dashboard for errors
- [ ] Check MongoDB metrics (connections, storage)
- [ ] Review Google Search Console for crawl errors
- [ ] Track Binance referral signups
- [ ] Check email subscription count

### Monthly Tasks
- [ ] Review analytics (traffic, bounce rate, conversions)
- [ ] Update npm dependencies: `npm update`
- [ ] Check for security vulnerabilities: `npm audit`
- [ ] Backup MongoDB data
- [ ] Review and optimize slow pages

---

## Performance Optimization

### Speed Test
- [ ] Test on [PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Target: 90+ score on mobile and desktop
- [ ] Check Core Web Vitals

### Improvements (if needed)
- [ ] Add image optimization
- [ ] Enable Vercel Edge Functions
- [ ] Add Redis caching layer
- [ ] Implement lazy loading

---

## Security Checklist

### Environment Variables
- [ ] Never commit `.env.local` to Git
- [ ] Keep `.env.example` updated
- [ ] Rotate MongoDB password quarterly

### API Security
- [ ] Monitor API usage (CoinGecko limits)
- [ ] Consider adding rate limiting
- [ ] Enable CORS if needed

### Monitoring
- [ ] Set up Vercel error alerts
- [ ] Monitor MongoDB Atlas alerts
- [ ] Check for unusual traffic patterns

---

## Backup Strategy

### MongoDB Backups
- [ ] Enable automated backups in MongoDB Atlas
- [ ] Export email list weekly
- [ ] Store backups in separate location

### Code Backups
- [ ] Code is on GitHub (already backed up)
- [ ] Keep local copy of repository
- [ ] Document any manual configuration

---

## Growth Metrics to Track

### Traffic
- [ ] Daily visitors
- [ ] Page views
- [ ] Bounce rate
- [ ] Average session duration

### Conversions
- [ ] Binance referral clicks
- [ ] Email signups
- [ ] Page engagement time

### SEO
- [ ] Keyword rankings (itcoin price, buy itcoin, etc.)
- [ ] Organic traffic growth
- [ ] Backlinks acquired

---

## When Things Go Wrong

### Site is Down
1. Check Vercel status: [vercel-status.com](https://www.vercel-status.com)
2. Check deployment logs in Vercel dashboard
3. Verify domain DNS settings

### API Errors
1. Check CoinGecko API status
2. Review API rate limits
3. Check browser console for specific errors

### MongoDB Connection Issues
1. Verify MONGODB_URI is set in Vercel
2. Check IP whitelist in MongoDB Atlas
3. Test connection string locally

### Build Failures
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

---

## Success Criteria

### Launch Day ✅
- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] API calls working
- [ ] Mobile responsive
- [ ] SSL certificate active

### Week 1 🎯
- [ ] 100+ unique visitors
- [ ] 10+ email signups
- [ ] 5+ Binance referral clicks
- [ ] Indexed by Google

### Month 1 🚀
- [ ] 1,000+ unique visitors
- [ ] 100+ email signups
- [ ] 50+ Binance referrals
- [ ] Ranking on page 2-3 for target keywords

---

## Quick Reference

### Important URLs
- **Live Site:** https://itcoin.app
- **Vercel Dashboard:** https://vercel.com/dashboard
- **MongoDB Atlas:** https://cloud.mongodb.com
- **GitHub Repo:** https://github.com/YOUR_USERNAME/itcoin.app
- **Binance Affiliate:** https://www.binance.com/en/my/affiliate

### Key Credentials
- MongoDB URI: (in `.env.local`)
- Binance Referral ID: `876543543`
- Vercel Account: (your email)

### Support Resources
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/help
- MongoDB Support: https://support.mongodb.com

---

## Final Pre-Launch Check

Right before going live:
- [ ] All environment variables set in Vercel
- [ ] MongoDB connection tested
- [ ] All Binance links have correct referral ID
- [ ] Meta tags reviewed for SEO
- [ ] Sitemap accessible
- [ ] Robots.txt configured
- [ ] Mobile responsive checked
- [ ] Performance tested
- [ ] Error pages work

**Ready to launch? Let's go! 🚀**

---

## Post-Launch Celebration 🎉

Once live:
- [ ] Share on social media
- [ ] Email friends/network
- [ ] Submit to Product Hunt (optional)
- [ ] Join crypto communities and share (respectfully)
- [ ] Start tracking metrics

**Congratulations on launching ItCoin.app!**
