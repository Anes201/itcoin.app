import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bitcoin.app | Official Bitcoin (BTC) Price & Market Tracker',
  description: 'Stay ahead with live Bitcoin (BTC) price charts, institutional market analysis, and secure trading guides. The definitive source for Bitcoin digital gold.',
  keywords: 'bitcoin, btc price, buy bitcoin, bitcoin news, binance referral, digital gold',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050505] text-white selection:bg-[#F7931A] selection:text-white`}>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-[#050505] text-white pt-32 pb-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
              <div className="col-span-1 md:col-span-2">
                <Link href="/" className="text-3xl font-black tracking-tighter text-white mb-8 block">
                  BITCOIN<span className="text-[#F7931A]">.APP</span>
                </Link>
                <p className="text-gray-500 max-w-sm mb-10 font-bold leading-relaxed">
                  Bitcoin.app is a non-custodial data aggregator and research hub dedicated to the world's first decentralized currency.
                </p>
                <div className="flex gap-6">
                  {/* Social placeholders */}
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#F7931A] transition-all cursor-pointer border border-white/5">𝕏</div>
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#F7931A] transition-all cursor-pointer border border-white/5">💬</div>
                </div>
              </div>
              <div>
                <h4 className="font-black mb-8 uppercase tracking-[0.3em] text-[10px] text-gray-500">Navigation</h4>
                <ul className="space-y-6 font-bold">
                  <li><Link href="/how-to-buy" className="text-gray-400 hover:text-white transition-colors">How to Buy</Link></li>
                  <li><Link href="/what-is-itcoin" className="text-gray-400 hover:text-white transition-colors">About BTC</Link></li>
                  <li><Link href="/api/price" className="text-gray-400 hover:text-white transition-colors">Real-time API</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black mb-8 uppercase tracking-[0.3em] text-[10px] text-gray-500">Official Partner</h4>
                <ul className="space-y-6 font-bold">
                  <li><a href="https://accounts.binance.com/register?ref=876543543" className="text-[#F7931A] hover:text-white transition-colors">Binance Global</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Market Data</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-10 text-center text-gray-600 text-[10px] font-black tracking-[0.5em] uppercase">
              <p>© {new Date().getFullYear()} BITCOIN.APP — NOT FINANCIAL ADVICE</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
