# ItCoin.app

A high-converting cryptocurrency information website for ItCoin - featuring live price tracking, charts, and educational content.

## Features

- 📊 **Live Price Dashboard** - Real-time ItCoin price updates every 60 seconds
- 📈 **Interactive Charts** - Historical price data with 7D, 30D, 90D, and 1Y views
- 🎯 **SEO Optimized** - Targeting 25M+ monthly searches for ItCoin keywords
- 💼 **Binance Affiliate Integration** - Monetized with referral links
- 📧 **Email Alerts** - Price notification subscription system
- 📱 **Responsive Design** - Mobile-first, beautiful UI with Tailwind CSS

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Fetching:** SWR
- **Charts:** Recharts
- **Database:** MongoDB Atlas
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB Atlas account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/itcoin.app.git
cd itcoin.app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your MongoDB connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/itcoin
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
itcoin.app/
├── app/
│   ├── api/
│   │   ├── price/          # Live price endpoint
│   │   ├── chart/          # Historical data endpoint
│   │   ├── info/           # Coin info endpoint
│   │   └── subscribe/      # Email subscription endpoint
│   ├── how-to-buy/         # How to buy guide page
│   ├── what-is-itcoin/     # Educational page
│   ├── layout.tsx          # Root layout with SEO
│   └── page.tsx            # Homepage
├── components/
│   ├── PriceWidget.tsx     # Live price display
│   ├── StatsGrid.tsx       # Market stats grid
│   ├── PriceChart.tsx      # Interactive chart
│   └── EmailAlertForm.tsx  # Subscription form
├── lib/
│   └── mongodb.ts          # MongoDB connection
└── public/
```

## API Endpoints

### GET /api/price
Returns live ItCoin price data from CoinGecko
- Price (USD)
- 24h change
- Market cap
- Volume

### GET /api/chart?days=7
Returns historical price data
- Query param: `days` (7, 30, 90, 365)

### GET /api/info
Returns detailed coin information
- Circulating supply
- All-time high
- Market data

### POST /api/subscribe
Subscribe to email price alerts
```json
{
  "email": "user@example.com"
}
```

## Deployment to Vercel

1. Push your code to GitHub

2. Import the project in Vercel:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. Configure environment variables in Vercel:
   - Add `MONGODB_URI`

4. Deploy!

## SEO Keywords Targeted

- itcoin price
- buy itcoin
- what is itcoin
- itcoin cryptocurrency
- how to buy itcoin
- itcoin price prediction

## Binance Affiliate

Referral ID: `876543543`
All buy buttons link to: `https://accounts.binance.com/register?ref=876543543`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
