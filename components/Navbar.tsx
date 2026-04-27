"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-950 border-b dark:border-slate-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Hifam Logo" 
              className="h-16 md:h-20 w-auto object-contain dark:brightness-110" 
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8 font-bold text-slate-700 dark:text-slate-200">
            <Link href="/" className="hover:text-hifam-blue dark:hover:text-hifam-gold transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-hifam-blue dark:hover:text-hifam-gold transition">
              About
            </Link>
            <Link href="/services" className="hover:text-hifam-blue dark:hover:text-hifam-gold transition">
              Services
            </Link>
            <Link href="/contact" className="hover:text-hifam-blue dark:hover:text-hifam-gold transition">
              Contact
            </Link>
            
            {/* THEME TOGGLE (MOON/SUN) */}
            <ThemeToggle />

            {/* WHATSAPP BUTTON */}
            <a 
              href="https://wa.me/254729989616" 
              className="bg-hifam-blue text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-hifam-red transition shadow-lg"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          {/* MOBILE BUTTONS (TOGGLE & MENU) */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-hifam-blue dark:text-white"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 p-6 space-y-4 flex flex-col shadow-2xl border-t dark:border-slate-800">
          <Link onClick={() => setIsOpen(false)} href="/" className="text-lg font-bold">Home</Link>
          <Link onClick={() => setIsOpen(false)} href="/about" className="text-lg font-bold">About</Link>
          <Link onClick={() => setIsOpen(false)} href="/services" className="text-lg font-bold">Services</Link>
          <Link onClick={() => setIsOpen(false)} href="/contact" className="text-lg font-bold">Contact</Link>
          <a 
            href="https://wa.me/254729989616" 
            className="bg-hifam-blue text-white p-4 rounded-xl text-center font-bold"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;