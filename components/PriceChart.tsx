'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type TimeRange = '7' | '30' | '90' | '365';

export function PriceChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7');

  const { data, error, isLoading } = useSWR(
    `/api/chart?days=${timeRange}`,
    fetcher,
    {
      refreshInterval: 300000, // Refresh every 5 minutes
    }
  );

  const chartData = data?.prices?.map(([timestamp, price]: [number, number]) => ({
    time: new Date(timestamp).toLocaleDateString(),
    price: price,
  })) || [];

  const timeRanges: { label: string; value: TimeRange }[] = [
    { label: '7D', value: '7' },
    { label: '30D', value: '30' },
    { label: '90D', value: '90' },
    { label: '1Y', value: '365' },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Price Chart</h2>
        <div className="flex gap-2">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setTimeRange(range.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                timeRange === range.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="h-80 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : error ? (
        <div className="h-80 flex items-center justify-center text-red-600">
          Failed to load chart data
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="time"
              stroke="#9ca3af"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                // Show fewer ticks for better readability
                return value;
              }}
            />
            <YAxis
              stroke="#9ca3af"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${value.toFixed(6)}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
              }}
              formatter={(value: number | undefined) => [
                value ? `$${value.toFixed(6)}` : 'N/A',
                'Price',
              ]}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
