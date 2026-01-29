import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

const BINANCE_REFERRAL_LINK = "https://accounts.binance.com/register?ref=876543543";

export const metadata: Metadata = {
  title: "How to Buy ItCoin - Step-by-Step Guide | ItCoin.app",
  description: "Learn how to buy ItCoin cryptocurrency on Binance and other exchanges. Complete step-by-step guide for beginners with wallet recommendations.",
  keywords: ["how to buy itcoin", "buy itcoin", "itcoin binance", "purchase itcoin", "itcoin wallet"],
};

export default function HowToBuy() {
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
          How to Buy ItCoin
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Follow this comprehensive guide to purchase ItCoin cryptocurrency on Binance, the world's leading crypto exchange
        </p>

        {/* Quick CTA */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-gray-700">
                Sign up on Binance in minutes and start trading ItCoin today
              </p>
            </div>
            <a
              href={BINANCE_REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all whitespace-nowrap"
            >
              Create Binance Account
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="max-w-4xl space-y-12">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mb-6">
                    1
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Create a Binance Account
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>
                        Visit{" "}
                        <a
                          href={BINANCE_REFERRAL_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline font-semibold"
                        >
                          Binance.com
                        </a>{" "}
                        and click "Register" or use our direct sign-up link
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Enter your email address and create a secure password</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Verify your email address and enable 2FA security</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href={BINANCE_REFERRAL_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all"
                    >
                      Sign Up on Binance
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="lg:w-1/2 bg-gray-50 rounded-xl border border-dashed border-gray-300 flex items-center justify-center min-h-[200px]">
                  <p className="text-gray-400 font-medium italic">Screenshot: Binance Registration Page</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mb-6">
                    2
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Identity Verification (KYC)
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Go to your profile and click on "Identification"</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Submit your government-issued ID and a selfie</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Wait for the verification process to complete (usually minutes)</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 bg-gray-50 rounded-xl border border-dashed border-gray-300 flex items-center justify-center min-h-[200px]">
                  <p className="text-gray-400 font-medium italic">Screenshot: Identity Verification Flow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mb-6">
                    3
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Deposit Funds
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Navigate to "Wallet" → "Fiat and Spot" → "Deposit"</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Select your fiat currency (USD, EUR, GBP, etc.)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Choose Bank Transfer or Credit/Debit Card to fund your wallet</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 bg-gray-50 rounded-xl border border-dashed border-gray-300 flex items-center justify-center min-h-[200px]">
                  <p className="text-gray-400 font-medium italic">Screenshot: Binance Deposit Options</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mb-6">
                    4
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Market Buy ItCoin
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Go to "Trade" → "Spot" and search for ITCOIN</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Select ITCOIN/USDT or your preferred trading pair</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p>Enter the amount and click "Buy ITCOIN"</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 bg-gray-50 rounded-xl border border-dashed border-gray-300 flex items-center justify-center min-h-[200px]">
                  <p className="text-gray-400 font-medium italic">Screenshot: Spot Trading Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Step 5 */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Secure Your ItCoin
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold">Recommended wallet options:</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Keep on Binance:</strong> Convenient for trading, protected by Binance security
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Hardware Wallet (Ledger/Trezor):</strong> Maximum security for long-term holding
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Software Wallet (MetaMask/Trust Wallet):</strong> Balance of security and convenience
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p>Never share your private keys or seed phrases with anyone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Buy ItCoin?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Join millions of traders on Binance
          </p>
          <a
            href={BINANCE_REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-10 py-5 rounded-xl transition-all transform hover:scale-105"
          >
            Start Trading Now
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
