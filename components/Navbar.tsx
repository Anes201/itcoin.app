'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Bitcoin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'How to Buy', href: '/how-to-buy' },
  { name: 'What is ItCoin?', href: '/what-is-itcoin' },
  { name: 'News', href: '/blog' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-yellow-500 p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-sm">
              <Bitcoin className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              ItCoin.app
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-blue-600 relative py-1",
                  pathname === item.href ? "text-blue-600" : "text-gray-600"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600"
                  />
                )}
              </Link>
            ))}
            <a
              href="https://accounts.binance.com/register?ref=876543543"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg"
            >
              Trade Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-b border-gray-100 bg-white px-4 py-8 shadow-xl"
        >
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-xl font-bold",
                  pathname === item.href ? "text-blue-600" : "text-gray-900"
                )}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://accounts.binance.com/register?ref=876543543"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-yellow-500 text-gray-900 text-center py-4 rounded-2xl font-bold shadow-lg active:scale-95 transition-transform"
            >
              Trade ItCoin Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
