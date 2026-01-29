build a high-converting crypto info site for ItCoin.app. Here's your complete blueprint:
focus on keywords. this domain has 25M monthly global searches we need to leverage that.
## **Website Structure (Pages/Sections):**

### **1. Homepage (Hero + Price Dashboard)**
- Live ItCoin price widget
- 24h price change, volume, market cap
- Big CTA: "Buy ItCoin Now" (Binance affiliate link)
- Quick stats dashboard

### **2. "How to Buy ItCoin" Page**
- Step-by-step guide with screenshots
- Links to Binance (your main affiliate link)
- Alternative exchanges
- Wallet recommendations

### **3. "What is ItCoin?" Page**
- Brief explanation of ItCoin
- Tokenomics (if available)
- Use cases
- Community links

### **4. Price Charts & Analytics Page**
- Historical price charts
- Volume analysis
- Simple technical indicators

### **5. News/Blog Section** (Optional but good for SEO)
- Latest ItCoin updates
- Market analysis
- Can be 3-5 static articles initially

---

## **FREE APIs You Need:**

### **1. CoinGecko API (Primary - BEST for crypto data)**
```
Base URL: https://api.coingecko.com/api/v3/

Key Endpoints:

// Get current price, market cap, volume
GET https://api.coingecko.com/api/v3/simple/price?ids=itcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true

// Get historical data for charts
GET https://api.coingecko.com/api/v3/coins/itcoin/market_chart?vs_currency=usd&days=30

// Get detailed coin info
GET https://api.coingecko.com/api/v3/coins/itcoin

// Search to verify ItCoin exists
GET https://api.coingecko.com/api/v3/search?query=itcoin
```

**Limits:** 10-50 calls/minute (free tier) - more than enough

**Docs:** https://docs.coingecko.com/reference/introduction

### **2. CoinMarketCap API (Backup/Alternative)**
```
Base URL: https://pro-api.coinmarketcap.com/v1/

// Get latest quotes
GET https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ITCOIN

// API KEY
already setup in the global env variable $CMC_PRO_API_KEY 
```

**Limits:** 10,000 calls/month (free)

### **3. CryptoCompare API (For additional data)**
```
Base URL: https://min-api.cryptocompare.com/data/

// Real-time price
GET https://min-api.cryptocompare.com/data/price?fsym=ITCOIN&tsyms=USD,EUR,BTC

// Historical daily data
GET https://min-api.cryptocompare.com/data/v2/histoday?fsym=ITCOIN&tsym=USD&limit=30
```

**Docs:** https://min-api.cryptocompare.com/documentation

---

## **Affiliate Programs to Sign Up For:**

### **1. 🏆 BINANCE AFFILIATE (PRIORITY)**

**Link:** https://www.binance.com/en/activity/affiliate

**Commission:** 
- Default: 20% of trading fees
- Can go up to 50% for high-volume referrals

**Setup:**
2. My referral ID : 876543543
3. My link format: `https://accounts.binance.com/register?ref=876543543`


## **Key Features to Include:**

### **Must-Have Components:**

```javascript
// 1. Live Price Ticker (sticky header)
- Current price
- 24h change (red/green)
- Auto-refresh every 60 seconds

// 2. Price Chart Component
- Line chart with 7D, 30D, 90D, 1Y buttons
- Use Chart.js or Recharts (Next.js friendly)

// 3. Quick Stats Card Grid
- Market Cap
- 24h Volume  
- Circulating Supply
- All-Time High
- All-Time Low

// 4. "Buy Now" CTA Buttons
- Multiple CTAs throughout the page
- Track clicks (for your own analytics)
- Format: Binance referral link with UTM parameters

// 5. Price Alert Email Capture (Lead Gen)
- Simple form: "Get ItCoin price alerts"
- Store emails (use Supabase free tier or MongoDB Atlas free)
- Can sell these leads later OR email them with affiliate offers
```

---

## **Tech Stack Recommendations for Next.js:**

```bash
# Core
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS

# Data Fetching
- SWR or TanStack Query (for real-time updates)

# Charts
- Recharts (lightweight, Next.js friendly)
- or Chart.js

# UI Components
- shadcn/ui (copy-paste components)
- Lucide React (icons)

# Deployment
- Vercel (free, perfect for Next.js)
```

---

## **Sample Code Structure:**

```typescript
// app/api/price/route.ts
export async function GET() {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=itcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'
  );
  const data = await response.json();
  return Response.json(data);
}

// components/PriceWidget.tsx
'use client';
import useSWR from 'swr';

export function PriceWidget() {
  const { data } = useSWR('/api/price', {
    refreshInterval: 60000 // Update every 60s
  });
  
  return (
    <div className="price-card">
      <h2>ItCoin Price</h2>
      <p className="text-4xl">${data?.itcoin?.usd}</p>
      <p className={data?.itcoin?.usd_24h_change > 0 ? 'text-green' : 'text-red'}>
        {data?.itcoin?.usd_24h_change}%
      </p>
    </div>
  );
}
```

---

## **SEO Keywords to Target (for your content):**

- "itcoin price"
- "buy itcoin"
- "what is itcoin"
- "itcoin crypto"
- "itcoin cryptocurrency"
- "how to buy itcoin"
- "itcoin price prediction"

---

## **Monetization Elements (Where to place Binance links):**

1. **Hero CTA:** Big "Buy ItCoin on Binance" button
2. **After price chart:** "Start Trading ItCoin →"
3. **In "How to Buy" guide:** Step 1 - "Create Binance account" (affiliate link)
4. **Floating button:** Sticky "Buy Now" on mobile
5. **End of articles:** "Ready to buy? →"

---

## **Action Items - In Order:**

### **TODAY:**
1. ✅ Sign up for Binance Affiliate → Get your referral link
2. ✅ Test CoinGecko API → Make sure ItCoin data is available
3. ✅ Set up Next.js project with TypeScript + Tailwind

### **THIS WEEKEND:**
4. Build homepage with live price widget
5. Create "How to Buy ItCoin" page with Binance affiliate links
6. Deploy to Vercel
7. Point ItCoin.app DNS to Vercel

### **WEEK 2:**
8. Add price charts
9. Write 3-5 SEO articles
10. Set up email capture form

---

## **IMPORTANT: Check if ItCoin is on CoinGecko**

Before you start building, verify ItCoin is available:

```bash
curl "https://api.coingecko.com/api/v3/search?query=itcoin"
```

If it's NOT on CoinGecko, you'll need to use CoinMarketCap or manually scrape data from wherever ItCoin is listed.

---

## **Expected Timeline:**

- **Day 1-2:** Core site with live price (5-8 hours)
- **Day 3-4:** Charts + How to Buy page (4-6 hours)
- **Day 5-7:** Content + SEO optimization (6-10 hours)

**Total:** ~20 hours of work for a professional-looking crypto info site.

---

Want me to help you with any specific part? I can:
1. Generate the exact Next.js component code for the price widget
2. Write the "How to Buy ItCoin" content with your Binance affiliate link
3. Create the API routes for data fetching
4. Help with SEO meta tags and structured data

