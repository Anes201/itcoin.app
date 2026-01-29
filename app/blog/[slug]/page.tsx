import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ChevronRight, Share2, Twitter, Facebook } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Post {
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  content: React.ReactElement;
}

const posts: Record<string, Post> = {
  "itcoin-price-prediction-2026-2030": {
    title: "ItCoin Price Prediction 2026-2030: Can It Reach New Heights?",
    description: "A deep dive into the technical indicators and market sentiment surrounding ItCoin's future price action.",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    slug: "itcoin-price-prediction-2026-2030",
    category: "Analysis",
    content: (
      <>
        <p>As we move further into 2026, the cryptocurrency market is entering a new phase of institutional adoption and technological maturity. ItCoin, with its massive global search volume of 25 million monthly queries, stands at the forefront of this evolution. But what does the future hold for its price?</p>
        
        <h2>2026: The Year of Mainstream Integration</h2>
        <p>Market analysts suggest that 2026 will be a pivotal year for ItCoin. With increasing utility in decentralized finance (DeFi) and potential listings on even more major exchanges, many experts predict a price range of <strong>$0.05 to $0.15</strong> by the end of the year, depending on the broader market sentiment and Bitcoin's performance.</p>
        
        <h2>Technical Analysis Insights</h2>
        <p>Recent chart patterns indicate a strong support level at current prices, with a "Golden Cross" becoming visible on the daily timeframe. This technical indicator has historically preceded significant upward movements in major crypto assets.</p>
        
        <h2>Long-term Outlook (2027-2030)</h2>
        <p>Looking further ahead, the scarcity model built into ItCoin's tokenomics suggests significant upward pressure. By 2030, if adoption continues at its current trajectory, some ambitious models suggest ItCoin could challenge major altcoins, with price targets ranging from <strong>$0.50 to $1.20</strong>.</p>
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <p className="text-blue-900 font-semibold mb-0">Disclaimer: Cryptocurrency investments carry high risk. Always do your own research before investing.</p>
        </div>
      </>
    )
  },
  "is-itcoin-a-good-investment": {
    title: "Is ItCoin a Good Investment? What You Need to Know Before Buying",
    description: "Evaluating ItCoin's utility, community strength, and market position.",
    date: "Jan 25, 2026",
    readTime: "8 min read",
    slug: "is-itcoin-a-good-investment",
    category: "Guides",
    content: (
      <>
        <p>With thousands of cryptocurrencies in existence, choosing the right one for your portfolio is a daunting task. ItCoin has emerged as a top contender, but is it actually a "good" investment? Let's break down the fundamentals.</p>
        
        <h2>The Search Volume Story</h2>
        <p>One cannot ignore the 25 million monthly searches for "ItCoin". In the world of crypto, attention often precedes liquidity. This massive public interest provides a strong foundation for community growth and market stability.</p>
        
        <h2>Utility and Use Cases</h2>
        <p>Unlike many meme coins, ItCoin is focusing on real-world utility. Its development roadmap includes cross-chain bridges, a dedicated NFT marketplace, and integration with major retail payment processors. This focus on "doing things" rather than just "existing" is a positive sign for long-term investors.</p>
        
        <h2>Risk vs. Reward</h2>
        <p>Like any digital asset, ItCoin is volatile. Investors should be prepared for 20-30% price swings in a single week. However, the potential upside, driven by its massive reach and growing utility, makes it an attractive option for those with a moderate to high risk tolerance.</p>
      </>
    )
  },
  "itcoin-vs-bitcoin-comparison": {
    title: "ItCoin vs. Bitcoin: The Key Differences and Similarities",
    description: "Comparing the world's first cryptocurrency with the rapidly growing ItCoin.",
    date: "Jan 22, 2026",
    readTime: "5 min read",
    slug: "itcoin-vs-bitcoin-comparison",
    category: "Education",
    content: (
      <>
        <p>While Bitcoin remains the king of the crypto world, ItCoin is carving out its own unique niche. Understanding the relationship between these two assets is crucial for any modern investor.</p>
        
        <h2>Technological Underpinnings</h2>
        <p>Bitcoin is often described as "digital gold"—a store of value with a Proof-of-Work consensus. ItCoin, on the other hand, utilizes a more energy-efficient Proof-of-Stake mechanism, allowing for faster transaction times and lower fees.</p>
        
        <h2>Market Correlation</h2>
        <p>Data shows that while ItCoin generally follows Bitcoin's macro trends, it often displays higher volatility during bull runs, potentially offering higher percentage gains for short-term traders.</p>
        
        <h2>Supply and Scarcity</h2>
        <p>Both assets have fixed maximum supplies, ensuring they remain deflationary over time. This shared "digital scarcity" is why many investors treat both as hedges against traditional fiat inflation.</p>
      </>
    )
  },
  "how-to-store-itcoin-safely-best-wallets": {
    title: "How to Store ItCoin Safely: The Best Wallets for 2026",
    description: "Learn about hardware wallets, software wallets, and best practices for keeping your ItCoin secure.",
    date: "Jan 19, 2026",
    readTime: "7 min read",
    slug: "how-to-store-itcoin-safely-best-wallets",
    category: "Security",
    content: (
      <>
        <p>The phrase "not your keys, not your crypto" is as relevant as ever in 2026. If you've purchased ItCoin, keeping it safe should be your number one priority.</p>
        
        <h2>Hardware Wallets: The Gold Standard</h2>
        <p>For large holdings, we recommend using a hardware wallet like Ledger or Trezor. These devices keep your private keys offline, making them immune to online hacking attempts. Both now support ItCoin natively.</p>
        
        <h2>Software Wallets for Convenience</h2>
        <p>If you're an active trader, software wallets like MetaMask or Trust Wallet offer a good balance of security and accessibility. Make sure you only download these from official sources and never share your seed phrase.</p>
        
        <h2>Security Checklist</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Enable Two-Factor Authentication (2FA) on all exchange accounts.</li>
          <li>Never use the same password for multiple services.</li>
          <li>Store your recovery seed phrase in a physical, fireproof location.</li>
          <li>Regularly update your wallet software to the latest version.</li>
        </ul>
      </>
    )
  }
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug];
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | ItCoin.app Blog`,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Article Header */}
      <header className="bg-gray-50 border-b py-16 md:py-24 mb-16">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm font-medium mb-6">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider">
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
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              {post.description}
            </p>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <main className="w-full lg:w-2/3">
            <div className="prose prose-lg prose-blue max-w-none">
              {post.content}
            </div>
            
            {/* Share Buttons */}
            <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-900 font-bold uppercase text-sm tracking-widest">Share this Article:</span>
                <div className="flex gap-3">
                  <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                    <Twitter className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              {/* Binance CTA */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-black shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Start Trading ItCoin</h3>
                <p className="font-medium mb-6 opacity-90">
                  Join millions of users on Binance and start building your ItCoin portfolio today.
                </p>
                <a
                  href="https://accounts.binance.com/register?ref=876543543"
                  className="block w-full text-center bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-900 transition-colors shadow-lg"
                >
                  Create Account
                </a>
              </div>

              {/* Newsletter */}
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Newsletter</h3>
                <p className="text-gray-400 mb-6">
                  Get the latest price alerts and market insights delivered to your inbox.
                </p>
                <Link
                  href="/"
                  className="block w-full text-center border-2 border-blue-500 text-blue-500 font-bold py-3 rounded-xl hover:bg-blue-500 hover:text-white transition-all"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
