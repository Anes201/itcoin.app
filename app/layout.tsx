import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ItCoin Price | Live Market Data, Charts & How to Buy | ItCoin.app",
  description: "Track live ItCoin cryptocurrency price, charts, market cap, and volume. Get real-time updates and learn how to buy ItCoin on major exchanges.",
  keywords: [
    "itcoin",
    "itcoin price",
    "buy itcoin",
    "itcoin crypto",
    "itcoin chart",
    "itcoin news",
    "bitcoin price"
  ],
  openGraph: {
    title: "ItCoin Price | Live Market Data & Analysis",
    description: "Real-time ItCoin price tracking and market insights. Join millions of users searching for ItCoin.",
    type: "website",
    siteName: "ItCoin.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "ItCoin Price | Live Market Data",
    description: "Track live ItCoin price and charts. Stay updated with the latest crypto news.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 min-h-screen`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <footer className="py-12 border-t border-gray-100 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">ItCoin.app</h3>
                <p className="text-gray-600 text-sm">Providing real-time cryptocurrency data and insights for the global ItCoin community.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li><Link href="/how-to-buy" className="hover:text-blue-600 transition-colors">How to Buy</Link></li>
                  <li><Link href="/what-is-itcoin" className="hover:text-blue-600 transition-colors">What is ItCoin?</Link></li>
                  <li><Link href="/blog" className="hover:text-blue-600 transition-colors">News & Blog</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Support</h3>
                <p className="text-gray-600 text-sm">Contact us: hello@itcoin.app</p>
                <p className="mt-2 text-xs text-gray-400">Affiliate Disclosure: This site contains affiliate links to exchanges. We may receive a commission for referrals at no extra cost to you.</p>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-200 text-center text-gray-400 text-xs">
              <p>© {new Date().getFullYear()} ItCoin.app. All prices are for informational purposes. Not financial advice.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
