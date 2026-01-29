import { Shield, Smartphone, CreditCard, ShoppingCart, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'How to Buy Bitcoin (BTC) - Step-by-Step 2024 Guide',
  description: 'Learn the safest and fastest way to buy Bitcoin (BTC) using Binance. Follow our pro guide to secure your digital gold in minutes.',
};

export default function HowToBuy() {
  const BINANCE_REF = "https://accounts.binance.com/register?ref=876543543";

  return (
    <div className="pt-48 pb-32 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-none">
          SECURE YOUR <br /> <span className="text-[#F7931A]">BITCOIN.</span>
        </h1>
        <p className="text-xl text-gray-500 font-bold max-w-2xl mx-auto">
          The world's most valuable asset is now accessible to everyone. Follow these steps to join the Bitcoin network.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {[
          {
            icon: <Smartphone className="w-10 h-10" />,
            title: "1. Create a Binance Account",
            desc: "Binance is the gold standard for Bitcoin liquidity. Sign up using our verified partner link below.",
            cta: "JOIN BINANCE NOW",
            link: BINANCE_REF,
            primary: true,
            highlight: "Preferred Choice"
          },
          {
            icon: <Shield className="w-10 h-10" />,
            title: "2. Verify Identity",
            desc: "Complete the KYC process to unlock unlimited trading and institutional security features.",
            link: BINANCE_REF,
            cta: "Verify Account",
          },
          {
            icon: <CreditCard className="w-10 h-10" />,
            title: "3. Deposit Funds",
            desc: "Add USD, EUR, or your local currency via bank transfer, credit card, or P2P.",
            link: BINANCE_REF,
            cta: "Add Liquidity"
          },
          {
            icon: <ShoppingCart className="w-10 h-10" />,
            title: "4. Buy Bitcoin",
            desc: "Execute a market or limit order. Your Bitcoin is now secured in your professional wallet.",
            link: BINANCE_REF,
            cta: "Buy BTC Now"
          }
        ].map((step, i) => (
          <div 
            key={i} 
            className={`relative group p-10 md:p-16 rounded-[3rem] border transition-all ${
              step.primary 
              ? 'border-[#F7931A]/30 bg-[#F7931A]/5 shadow-[0_0_80px_rgba(247,147,26,0.1)]' 
              : 'border-white/5 bg-[#0A0A0A] hover:border-white/10'
            }`}
          >
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
              <div className={`p-6 rounded-3xl ${step.primary ? 'bg-[#F7931A] text-white shadow-2xl' : 'bg-white/5 text-gray-400'}`}>
                {step.icon}
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                  <h3 className="text-3xl font-black text-white">{step.title}</h3>
                  {step.highlight && (
                    <span className="bg-[#F7931A] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                      {step.highlight}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 font-bold leading-relaxed mb-10 max-w-xl text-lg">
                  {step.desc}
                </p>
                <a 
                  href={step.link}
                  className={`inline-flex items-center gap-3 px-10 py-5 rounded-[1.5rem] font-black tracking-tight transition-all ${
                    step.primary 
                    ? 'bg-white text-black hover:bg-[#F7931A] hover:text-white shadow-2xl' 
                    : 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/10'
                  }`}
                >
                  {step.cta} <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
        <div className="bg-[#111] rounded-[4rem] py-24 px-10 text-center border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#F7931A]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-5xl font-black text-white mb-8 relative z-10">Limited Time Offer</h2>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto relative z-10 font-bold text-lg">
            New users signing up through Bitcoin.app receive a **20% discount** on all trading commissions for life.
          </p>
          <a 
            href={BINANCE_REF}
            className="bg-[#F7931A] text-white px-16 py-7 rounded-[2rem] font-black text-2xl hover:bg-white hover:text-black transition-all inline-flex items-center gap-4 relative z-10 shadow-2xl active:scale-95"
          >
            GET MY DISCOUNT <ArrowRight className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
