'use client';

import useSWR from 'swr';
import { BarChart3 } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function StatsGrid() {
  const { data, error, isLoading } = useSWR('/api/info', fetcher, {
    refreshInterval: 300000, // Refresh every 5 minutes
  });

  if (error || isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
            <div className="h-8 bg-gray-200 rounded w-32"></div>
          </div>
        ))}
      </div>
    );
  }

  const marketData = data?.market_data;

  const stats = [
    {
      label: 'Market Cap',
      value: marketData?.market_cap?.usd
        ? `$${(marketData.market_cap.usd / 1000000).toFixed(2)}M`
        : 'N/A',
      icon: BarChart3,
    },
    {
      label: '24h Volume',
      value: marketData?.total_volume?.usd
        ? `$${(marketData.total_volume.usd / 1000000).toFixed(2)}M`
        : 'N/A',
      icon: BarChart3,
    },
    {
      label: 'All-Time High',
      value: marketData?.ath?.usd
        ? `$${marketData.ath.usd.toFixed(6)}`
        : 'N/A',
      icon: BarChart3,
    },
    {
      label: 'Circulating Supply',
      value: marketData?.circulating_supply
        ? `${(marketData.circulating_supply / 1000000).toFixed(2)}M`
        : 'N/A',
      icon: BarChart3,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-2 mb-3">
            <stat.icon className="w-5 h-5 text-blue-600" />
            <p className="text-sm font-medium text-gray-600">{stat.label}</p>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
