'use client';

import useSWR from 'swr';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function PriceWidget() {
  const { data, error, isLoading, mutate } = useSWR('/api/price', fetcher, {
    refreshInterval: 60000,
  });

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center shadow-sm">
        <p className="text-red-600 font-medium">Failed to load price data</p>
      </div>
    );
  }

  // Force Bitcoin data
  const coinData = data?.bitcoin;
  
  if (isLoading || !coinData) {
    return (
      <div className="bg-[#111] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl animate-pulse">
        <div className="h-6 bg-white/5 rounded w-1/3 mb-6"></div>
        <div className="h-12 bg-white/5 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-white/5 rounded w-1/4"></div>
      </div>
    );
  }

  const price = coinData.usd;
  const change24h = coinData.usd_24h_change || 0;
  const isPositive = change24h >= 0;

  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={() => mutate()}
          className="p-2 text-gray-500 hover:text-white transition-colors"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-black text-gray-500 uppercase tracking-[0.2em]">Current Bitcoin Value</h2>
      </div>
      
      <div className="flex flex-col mb-8">
        <div className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 tabular-nums">
          ${price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-black ${
            isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
          }`}>
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {isPositive ? '+' : ''}{change24h.toFixed(2)}%
          </div>
          <span className="text-gray-500 text-sm font-bold tracking-tight">24H PERFORMANCE</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
        <div>
          <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-2">Market Cap</p>
          <p className="text-lg font-bold text-gray-300">
            ${coinData.usd_market_cap ? (coinData.usd_market_cap / 1000000000).toFixed(2) + 'B' : 'N/A'}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-2">24h Volume</p>
          <p className="text-lg font-bold text-gray-300">
            ${coinData.usd_24h_vol ? (coinData.usd_24h_vol / 1000000000).toFixed(2) + 'B' : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}
