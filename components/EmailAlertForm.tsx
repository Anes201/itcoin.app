'use client';

import { useState } from 'react';
import { BellRing, CheckCircle2, Loader2 } from 'lucide-react';

export function EmailAlertForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] p-12 flex flex-col items-center animate-scale-up border border-white/5 shadow-2xl">
        <CheckCircle2 className="w-20 h-20 text-[#F7931A] mb-6" />
        <h3 className="text-3xl font-black text-white mb-3 tracking-tight">ALERT ACTIVATED</h3>
        <p className="text-gray-400 font-bold">We will notify you immediately of institutional Bitcoin movements.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-white/40 hover:text-white text-[10px] font-black uppercase tracking-[0.4em] transition-all"
        >
          Add another email
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          required
          placeholder="Institutional email preferred"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-8 py-6 rounded-[2rem] bg-[#0A0A0A] border border-white/10 text-white font-bold placeholder:text-gray-600 focus:ring-4 focus:ring-[#F7931A]/20 outline-none transition-all shadow-2xl"
        />
        <button
          disabled={status === 'loading'}
          className="bg-white text-black px-10 py-6 rounded-[2rem] font-black text-lg hover:bg-[#F7931A] hover:text-white disabled:opacity-50 transition-all flex items-center justify-center gap-3 shadow-2xl"
        >
          {status === 'loading' ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              ACTIVATE <BellRing className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
      {status === 'error' && (
        <p className="mt-6 text-red-400 font-black bg-red-400/5 py-3 rounded-2xl border border-red-400/10">Error processing request. Please retry.</p>
      )}
      <p className="mt-6 text-gray-600 text-[10px] font-black tracking-widest uppercase opacity-60">
        🔒 End-to-end encrypted alerts. 
      </p>
    </div>
  );
}
