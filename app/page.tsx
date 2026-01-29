import { PriceWidget } from '@/components/PriceWidget';
import { StatsGrid } from '@/components/StatsGrid';
import { EmailAlertForm } from '@/components/EmailAlertForm';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'Bitcoin.app | Institutional Bitcoin Market Tracker',
  description: 'Real-time Bitcoin (BTC) market data, institutional alerts, and professional trading entry points. Secure your position on the Bitcoin standard.',
};

export default function Home() {
  const BINANCE_LINK = "https://accounts.binance.com/register?ref=876543543";

  return (
    <div className="flex flex-col bg-[#050505]">
      {/* Hero & Price Dashboard */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#F7931A] rounded-full blur-[160px] opacity-20" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[160px] opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-10 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7931A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F7931A]"></span>
                </span>
                Global Bitcoin Market Data
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.85] mb-10">
                OWN THE <br /> <span className="text-[#F7931A]">STANDARD.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed font-bold">
                Bitcoin is the world's first and most secure decentralized digital currency. Join millions of investors moving to the soundest money ever created.
              </p>
              
              <div className="flex flex-col gap-6">
                <a 
                  href={BINANCE_LINK} 
                  className="relative group overflow-hidden bg-white text-black px-12 py-6 rounded-[2rem] font-black text-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.15)] text-center flex items-center justify-center gap-3"
                >
                  <div className="absolute inset-0 bg-[#F7931A] translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                  TRADE ON BINANCE <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </a>
                <div className="flex items-center justify-center gap-8 px-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                  <span className="text-[10px] font-black tracking-widest text-gray-500">TRUSTED BY OVER 180M USERS GLOBALLY</span>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <PriceWidget />
              <div className="absolute -inset-4 bg-[#F7931A]/10 blur-3xl -z-10 rounded-[3rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-sm font-black text-gray-500 uppercase tracking-[0.4em] mb-4 text-center">Protocol Statistics</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsGrid />
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tight leading-tight">WHY <span className="text-[#F7931A]">BITCOIN?</span></h2>
              <div className="space-y-12">
                {[
                  { icon: <ShieldCheck className="w-10 h-10 text-[#F7931A]" />, title: "Digital Gold", desc: "Limited to 21 million units, Bitcoin is a mathematically enforced store of value." },
                  { icon: <Zap className="w-10 h-10 text-[#F7931A]" />, title: "Unstoppable", desc: "No central authority can censor transactions or debase the currency supply." }
                ].map((f, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0">{f.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{f.title}</h3>
                      <p className="text-gray-500 font-bold leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0A0A0A] border border-white/5 p-16 rounded-[4rem] text-center">
               <h3 className="text-3xl font-black text-white mb-6">Ready to start?</h3>
               <p className="text-gray-500 font-bold mb-10">Get a 20% discount on trading fees when you join via ItCoin.app today.</p>
               <a 
                href={BINANCE_LINK}
                className="block w-full bg-[#f7931a] text-white py-6 rounded-[2rem] font-black text-xl hover:bg-white hover:text-black transition-all shadow-[0_20px_40px_rgba(247,147,26,0.2)]"
               >
                 CLAIM MY BONUS
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-32 bg-[#080808] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center box-content">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">INSTITUTIONAL INSIGHTS.</h2>
          <p className="text-xl text-gray-400 text-center mb-12 font-bold max-w-2xl mx-auto">
            Join 50k+ pro traders receiving real-time Bitcoin whale alerts and macroeconomic analysis.
          </p>
          <EmailAlertForm />
        </div>
      </section>
    </div>
  );
}
