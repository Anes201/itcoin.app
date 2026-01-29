'use client';

import useSWR from 'swr';
import { TrendingUp, TrendingDown } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function PriceWidget() {
  const { data, error, isLoading } = useSWR('/api/price', fetcher, {
    refreshInterval: 60000, // Refresh every 60 seconds
  });

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600">Failed to load price data</p>
      </div>
    );
  }

  // TODO: Change 'bitcoin' back to 'itcoin' when ItCoin is listed on CoinGecko
  const coinData = data?.bitcoin || data?.itcoin;
  
  if (isLoading || !coinData) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
        <div className="h-12 bg-gray-200 rounded w-48 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>
    );
  }

  const price = coinData.usd;
  const change24h = coinData.usd_24h_change || 0;
  const marketCap = coinData.usd_market_cap;
  const volume = coinData.usd_24h_vol;
  const isPositive = change24h >= 0;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">ItCoin Price (Placeholder Data)</h2>
      
      <div className="flex items-baseline gap-4 mb-4">
        <p className="text-5xl font-bold text-gray-900">
          ${price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 }) || '0.00'}
        </p>
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
          isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="font-semibold">
            {isPositive ? '+' : ''}{change24h.toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-600">Market Cap</p>
          <p className="font-semibold text-gray-900">
            ${marketCap ? (marketCap / 1000000).toFixed(2) + 'M' : 'N/A'}
          </p>
        </div>
        <div>
          <p className="text-gray-600">24h Volume</p>
          <p className="font-semibold text-gray-900">
            ${volume ? (volume / 1000000).toFixed(2) + 'M' : 'N/A'}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        📊 Note: Displaying Bitcoin data as placeholder until ItCoin is listed on CoinGecko
      </p>
    </div>
  );
}
