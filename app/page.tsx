import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { PriceWidget } from "@/components/PriceWidget";
import { StatsGrid } from "@/components/StatsGrid";
import { PriceChart } from "@/components/PriceChart";
import { EmailAlertForm } from "@/components/EmailAlertForm";

const BINANCE_REFERRAL_LINK = "https://accounts.binance.com/register?ref=876543543";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            ItCoin Price & Info
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Track live ItCoin cryptocurrency prices, charts, market data, and learn how to buy ItCoin today
          </p>
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={BINANCE_REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <TrendingUp className="w-5 h-5" />
              Buy ItCoin on Binance
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/how-to-buy"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              How to Buy Guide
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Price Widget */}
        <div className="max-w-2xl mx-auto mb-16">
          <PriceWidget />
        </div>

        {/* Stats Grid */}
        <StatsGrid />
      </section>

      {/* Price Chart Section */}
      <section className="container mx-auto px-4 py-12">
        <PriceChart />
      </section>

      {/* Email Alert Form */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <EmailAlertForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Trading ItCoin?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join millions of users on Binance, the world's leading cryptocurrency exchange
          </p>
          <a
            href={BINANCE_REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-10 py-5 rounded-xl transition-all transform hover:scale-105 shadow-xl"
          >
            Start Trading Now
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/how-to-buy" className="group p-6 bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
              How to Buy ItCoin
            </h3>
            <p className="text-gray-600 mb-4">
              Step-by-step guide to purchasing ItCoin on Binance and other exchanges
            </p>
            <span className="text-blue-600 font-semibold inline-flex items-center gap-1">
              Learn more <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/what-is-itcoin" className="group p-6 bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
              What is ItCoin?
            </h3>
            <p className="text-gray-600 mb-4">
              Learn about ItCoin cryptocurrency, its technology, and use cases
            </p>
            <span className="text-blue-600 font-semibold inline-flex items-center gap-1">
              Learn more <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/price-prediction" className="group p-6 bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
              ItCoin Price Prediction
            </h3>
            <p className="text-gray-600 mb-4">
              Analysis and forecasts for ItCoin price trends and market outlook
            </p>
            <span className="text-blue-600 font-semibold inline-flex items-center gap-1">
              Coming soon <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
