import { Zap, Globe, Lock, BarChart, Rocket, Heart } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'What is Bitcoin (BTC)? | Official Bitcoin Protocol Overview',
  description: 'Understand the technology and philosophy behind Bitcoin (BTC). Learn why Bitcoin is considered digital gold and the future of global finance.',
};

export default function WhatIsItCoin() {
  const BINANCE_LINK = "https://accounts.binance.com/register?ref=876543543";

  return (
    <div className="pt-48 pb-32 bg-[#050505]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-[0.9]">
              THE SOUNDEST <br /> <span className="text-[#F7931A]">MONEY.</span>
            </h1>
            <p className="text-xl text-gray-500 font-bold leading-relaxed mb-12 max-w-xl">
              Bitcoin (BTC) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/how-to-buy" className="bg-white text-black px-10 py-5 rounded-[1.5rem] font-black hover:bg-[#F7931A] hover:text-white transition-all text-center">
                Get Started
              </Link>
              <a href={BINANCE_LINK} className="border-2 border-white/5 bg-white/5 px-10 py-5 rounded-[1.5rem] font-black text-white hover:border-[#F7931A] transition-all text-center">
                Trade on Binance
              </a>
            </div>
          </div>
          <div className="bg-[#0A0A0A] border border-white/5 rounded-[4rem] p-16 aspect-square flex items-center justify-center relative overflow-hidden group shadow-2xl">
             <div className="absolute inset-0 bg-[#F7931A]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="text-[14rem] font-black text-white/5 select-none relative z-10">BTC</div>
             <div className="absolute bottom-16 left-16 right-16 bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative z-20">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-4 h-4 rounded-full bg-[#F7931A] animate-pulse shadow-[0_0_15px_rgba(247,147,26,0.5)]" />
                 <span className="text-xs font-black text-white uppercase tracking-[0.3em]">Network Active</span>
               </div>
               <div className="space-y-3">
                 <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-[#F7931A]" />
                 </div>
                 <div className="flex justify-between text-[10px] font-black text-gray-500 tracking-widest">
                    <span>GENESIS: 2009</span>
                    <span>SUPPLY: 19.6M+</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080808] border-y border-white/5 py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-white mb-6 tracking-tight leading-none">THE CORE PRINCIPLES</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-bold text-lg">Bitcoin is built on code, not trust in centralized institutions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap className="w-10 h-10 text-[#F7931A]" />, 
                title: "Decentralized", 
                desc: "No single entity controls the network. It is secured by thousands of nodes globally." 
              },
              { 
                icon: <Lock className="w-10 h-10 text-[#F7931A]" />, 
                title: "Immutable", 
                desc: "Once a transaction is confirmed, it can never be altered or reversed." 
              },
              { 
                icon: <Rocket className="w-10 h-10 text-[#F7931A]" />, 
                title: "Scarcity", 
                desc: "Hard-capped at 21 million units. Inflation-resistant by design." 
              }
            ].map((p, i) => (
              <div key={i} className="bg-[#0A0A0A] p-12 rounded-[3.5rem] border border-white/5 hover:border-[#F7931A]/20 transition-all">
                <div className="mb-10 p-5 rounded-2xl bg-white/5 inline-block">{p.icon}</div>
                <h3 className="text-3xl font-black text-white mb-6">{p.title}</h3>
                <p className="text-gray-500 font-bold leading-relaxed text-lg">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            <div className="flex gap-10 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-[1.5rem] bg-[#F7931A] text-white flex items-center justify-center text-2xl font-black shadow-2xl">1</div>
              <div>
                <h3 className="text-4xl font-black text-white mb-6 tracking-tight">The Halving Protocol</h3>
                <p className="text-gray-500 text-xl leading-relaxed font-bold">
                  Approximately every four years, the mining reward is cut in half. This deflationary mechanic reduces new supply and historically acts as a catalyst for market adoption.
                </p>
              </div>
            </div>
            <div className="flex gap-10 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-[1.5rem] bg-[#F7931A] text-white flex items-center justify-center text-2xl font-black shadow-2xl">2</div>
              <div>
                <h3 className="text-4xl font-black text-white mb-6 tracking-tight">Institutional Adoption</h3>
                <p className="text-gray-500 text-xl leading-relaxed font-bold">
                  Major financial institutions and corporations now hold Bitcoin on their balance sheets, recognizing it as the ultimate hedge against monetary debasement.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-32 p-1.5 bg-gradient-to-r from-[#F7931A] to-blue-600 rounded-[3rem]">
             <div className="bg-[#0A0A0A] rounded-[2.8rem] py-20 px-10 text-center">
                <h4 className="text-4xl font-black text-white mb-6 tracking-tight leading-none">PRO TRADER TOOLS</h4>
                <p className="text-gray-500 mb-12 font-bold text-lg">Harness institutional-grade liquidity on the world's leading exchange.</p>
                <a href={BINANCE_LINK} className="bg-white text-black px-16 py-6 rounded-[2rem] font-black text-xl hover:bg-[#F7931A] hover:text-white transition-all inline-block shadow-2xl">
                  GO TO BINANCE
                </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
