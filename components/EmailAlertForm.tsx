'use client';

import { useState } from 'react';
import { Bell, CheckCircle2 } from 'lucide-react';

export function EmailAlertForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-200 rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">Get ItCoin Price Alerts</h3>
      </div>
      
      <p className="text-gray-700 mb-4">
        Subscribe to receive email notifications when ItCoin price hits important milestones
      </p>

      {status === 'success' ? (
        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-3 rounded-lg">
          <CheckCircle2 className="w-5 h-5" />
          <p className="font-semibold">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'loading'}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          
          {status === 'error' && (
            <p className="text-red-600 text-sm">{message}</p>
          )}
          
          <p className="text-xs text-gray-600">
            We'll never share your email. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}
