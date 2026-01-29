import Link from "next/link";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ItCoin News & Blog - Latest Updates and Market Analysis | ItCoin.app",
  description: "Stay updated with the latest ItCoin news, price predictions, market analysis, and guides. The best resource for ItCoin cryptocurrency information.",
  keywords: ["itcoin news", "itcoin blog", "itcoin price prediction", "itcoin analysis", "cryptocurrency news"],
};

const blogPosts = [
  {
    title: "ItCoin Price Prediction 2026-2030: Can It Reach New Heights?",
    description: "A deep dive into the technical indicators and market sentiment surrounding ItCoin's future price action. We analyze potential growth scenarios and risk factors.",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    slug: "itcoin-price-prediction-2026-2030",
    category: "Analysis",
  },
  {
    title: "Is ItCoin a Good Investment? What You Need to Know Before Buying",
    description: "Evaluating ItCoin's utility, community strength, and market position to determine if it's a solid addition to your crypto portfolio in 2026.",
    date: "Jan 25, 2026",
    readTime: "8 min read",
    slug: "is-itcoin-a-good-investment",
    category: "Guides",
  },
  {
    title: "ItCoin vs. Bitcoin: The Key Differences and Similarities",
    description: "Comparing the world's first cryptocurrency with the rapidly growing ItCoin. We look at technology, adoption rates, and investment potential.",
    date: "Jan 22, 2026",
    readTime: "5 min read",
    slug: "itcoin-vs-bitcoin-comparison",
    category: "Education",
  },
  {
    title: "How to Store ItCoin Safely: The Best Wallets for 2026",
    description: "Security is paramount in crypto. Learn about hardware wallets, software wallets, and best practices for keeping your ItCoin secure from hackers.",
    date: "Jan 19, 2026",
    readTime: "7 min read",
    slug: "how-to-store-itcoin-safely-best-wallets",
    category: "Security",
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-display">
              ItCoin News & <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay ahead of the market with our expert analysis, price predictions, and comprehensive guides on everything related to ItCoin.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group cursor-pointer">
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex flex-col h-full">
                    <div className="mb-6 flex items-center gap-4 text-sm font-medium">
                      <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full capitalize">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-lg mb-6 flex-grow leading-relaxed">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center text-blue-600 font-bold gap-2">
                      Read full article
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Don't miss the next ItCoin pump
              </h2>
              <p className="text-gray-600 text-lg">
                Join 50,000+ traders receiving our weekly market analysis and price alerts directly in their inbox.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all w-full md:w-auto"
              >
                Sign Up for Alerts
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
