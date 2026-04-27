import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex flex-col mb-6">
            <span className="text-3xl font-black tracking-tighter leading-none">HIFAM</span>
            <span className="text-xs tracking-[0.2em] font-bold text-amber-500 uppercase">Holdings</span>
          </Link>
          <p className="text-slate-400 max-w-sm mb-8">
            Providing excellence across multiple sectors including cleaning, food, logistics, and retail. 
            One brand, every service.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-amber-600 transition"><MessageCircle size={20}/></a>
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-amber-600 transition"><Phone size={20}/></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact Info</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start">
              <MapPin className="mr-3 text-amber-500 shrink-0" size={18} />
              <span>Nairobi, Kenya</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-3 text-amber-500 shrink-0" size={18} />
              <span>+254 729989616</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-3 text-amber-500 shrink-0" size={18} />
              <span>contact@hifamholdings.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} Hifam Holdings Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;