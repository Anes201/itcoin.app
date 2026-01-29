import Link from "next/link";
import { ArrowLeft, ArrowRight, Coins, Users, TrendingUp, Shield } from "lucide-react";
import type { Metadata } from "next";

const BINANCE_REFERRAL_LINK = "https://accounts.binance.com/register?ref=876543543";

export const metadata: Metadata = {
  title: "What is ItCoin? | ItCoin Cryptocurrency Explained | ItCoin.app",
  description: "Learn about ItCoin cryptocurrency, its technology, use cases, tokenomics, and why it's one of the most searched crypto assets. Complete beginner's guide to ItCoin.",
  keywords: ["what is itcoin", "itcoin crypto", "itcoin cryptocurrency", "itcoin explained", "itcoin blockchain"],
};

export default function WhatIsItCoin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What is ItCoin?
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          ItCoin is a cryptocurrency that has captured global attention with 25 million monthly searches. Learn about its technology, use cases, and potential.
        </p>

        {/* Overview */}
        <div className="max-w-4xl space-y-8">
          <section className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ItCoin is a digital cryptocurrency built on blockchain technology, designed to provide fast, secure, and decentralized transactions. With millions of users worldwide and substantial trading volume, ItCoin has established itself as a significant player in the cryptocurrency market.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As one of the most searched cryptocurrency terms globally (25M+ monthly searches), ItCoin represents the growing interest in decentralized digital assets and blockchain technology.
            </p>
          </section>

          {/* Key Features */}
          <section className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Secure Transactions</h3>
                  <p className="text-gray-700 text-sm">
                    Built on robust blockchain technology with cryptographic security ensuring safe and tamper-proof transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">High Liquidity</h3>
                  <p className="text-gray-700 text-sm">
                    Available on major exchanges like Binance with significant daily trading volume for easy buying and selling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Global Community</h3>
                  <p className="text-gray-700 text-sm">
                    Backed by a worldwide community of traders, developers, and enthusiasts driving adoption and innovation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Coins className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Decentralized</h3>
                  <p className="text-gray-700 text-sm">
                    Operates without central authority, giving users full control over their digital assets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Use Cases</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Digital Payments</h3>
                <p className="text-gray-700">
                  Send and receive payments globally with low fees and fast confirmation times, bypassing traditional banking systems.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Investment & Trading</h3>
                <p className="text-gray-700">
                  Trade ItCoin on major exchanges to capitalize on price movements and diversify your cryptocurrency portfolio.
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Store of Value</h3>
                <p className="text-gray-700">
                  Hold ItCoin as a long-term investment, similar to digital gold, to preserve and potentially grow wealth.
                </p>
              </div>
              <div className="border-l-4 border-yellow-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Cross-Border Transactions</h3>
                <p className="text-gray-700">
                  Facilitate international transactions without expensive wire transfer fees or currency conversion costs.
                </p>
              </div>
            </div>
          </section>

          {/* Tokenomics */}
          <section className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tokenomics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Market Cap</p>
                <p className="text-2xl font-bold text-gray-900">Variable</p>
                <p className="text-xs text-gray-500 mt-1">View current data on homepage</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Circulating Supply</p>
                <p className="text-2xl font-bold text-gray-900">Dynamic</p>
                <p className="text-xs text-gray-500 mt-1">Updated in real-time</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Trading Volume</p>
                <p className="text-2xl font-bold text-gray-900">24h Active</p>
                <p className="text-xs text-gray-500 mt-1">High liquidity on exchanges</p>
              </div>
            </div>
          </section>

          {/* How to Get Started */}
          <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">How to Get Started with ItCoin</h2>
            <p className="text-blue-100 mb-6">
              Ready to buy your first ItCoin? Follow our step-by-step guide or sign up on Binance now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/how-to-buy"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Read Full Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={BINANCE_REFERRAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Buy on Binance
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Is ItCoin safe to invest in?</h3>
                <p className="text-gray-700">
                  Like all cryptocurrencies, ItCoin carries investment risk. Only invest what you can afford to lose and conduct your own research. ItCoin is available on reputable exchanges like Binance with strong security measures.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Where can I buy ItCoin?</h3>
                <p className="text-gray-700">
                  ItCoin is available on major cryptocurrency exchanges including Binance, the world's largest crypto exchange. Visit our{" "}
                  <Link href="/how-to-buy" className="text-blue-600 hover:underline">
                    How to Buy guide
                  </Link>{" "}
                  for detailed instructions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What wallet should I use for ItCoin?</h3>
                <p className="text-gray-700">
                  You can store ItCoin on exchange wallets (Binance), hardware wallets (Ledger, Trezor), or software wallets (MetaMask, Trust Wallet). For long-term holding, hardware wallets offer the best security.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Why is ItCoin so popular?</h3>
                <p className="text-gray-700">
                  With 25 million monthly searches, ItCoin has garnered significant global interest due to its accessibility, strong community, presence on major exchanges, and potential for growth in the cryptocurrency market.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to ItCoin Price & Charts
          </Link>
        </div>
      </div>
    </div>
  );
}
