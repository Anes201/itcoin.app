'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitcoin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Markets', href: '/' },
  { name: 'How to Buy', href: '/how-to-buy' },
  { name: 'About BTC', href: '/what-is-itcoin' },
  { name: 'Analysis', href: '/blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050505]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-[#F7931A] p-2 rounded-xl group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(247,147,26,0.3)]">
              <Bitcoin className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black text-white tracking-tighter">
              BITCOIN<span className="text-gray-500">.APP</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-bold transition-all hover:text-[#F7931A]",
                  pathname === item.href ? "text-[#F7931A]" : "text-gray-400"
                )}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://accounts.binance.com/register?ref=876543543"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-xl font-black text-sm transition-all hover:bg-[#F7931A] hover:text-white shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
            >
              START TRADING
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-gray-100 bg-white overflow-hidden shadow-xl"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl font-bold transition-colors",
                    pathname === item.href ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://accounts.binance.com/register?ref=876543543"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-gray-900 text-center py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-transform"
              >
                Trade ItCoin Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
