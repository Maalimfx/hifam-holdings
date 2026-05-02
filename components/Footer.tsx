import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        
        {/* Column 1: Brand & Socials */}
        <div className="col-span-1 md:col-span-1">
          <div className="bg-white inline-block p-2 rounded-xl mb-6 shadow-lg shadow-white/5">
             <img src="/logo.png" alt="Hifam Logo" className="h-14 w-auto object-contain" />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs mx-auto md:mx-0">
            Hifam Holdings Limited: A premier multi-sector conglomerate delivering excellence in Logistics, Garment Care, Cleaning, and Food Services across Kenya.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://wa.me/254729989616" className="p-3 bg-hifam-blue rounded-full hover:bg-hifam-red transition-all duration-300 shadow-md">
              <MessageCircle size={18}/>
            </a>
            <a href="tel:+254729989616" className="p-3 bg-hifam-blue rounded-full hover:bg-hifam-red transition-all duration-300 shadow-md">
              <Phone size={18}/>
            </a>
          </div>
        </div>
        
        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-black text-lg mb-6 text-hifam-gold uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-slate-400 font-bold text-sm">
            <li><Link href="/" className="hover:text-white transition flex items-center justify-center md:justify-start gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-hifam-red transition-all"/> Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition flex items-center justify-center md:justify-start gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-hifam-red transition-all"/> About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition flex items-center justify-center md:justify-start gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-hifam-red transition-all"/> Our Businesses</Link></li>
            <li><Link href="/careers" className="hover:text-white transition flex items-center justify-center md:justify-start gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-hifam-red transition-all"/> Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition flex items-center justify-center md:justify-start gap-2 group"><ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-hifam-red transition-all"/> Contact</Link></li>
            
            {/* --- OFFICIAL ADMIN ENTRANCE (Staff Portal) --- */}
            <li className="pt-6 border-t border-slate-900">
              <Link 
                href="/login" 
                className="text-[10px] uppercase font-black text-slate-600 hover:text-hifam-gold tracking-[0.2em] transition-opacity opacity-50 hover:opacity-100"
              >
                Staff Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Business Units Summary */}
        <div>
          <h4 className="font-black text-lg mb-6 text-hifam-gold uppercase tracking-widest">Our Sectors</h4>
          <ul className="space-y-3 text-slate-500 text-sm font-medium">
            <li className="hover:text-slate-300 transition-colors cursor-default">Hifam Dry Cleaners</li>
            <li className="hover:text-slate-300 transition-colors cursor-default">Hifam Logistics</li>
            <li className="hover:text-slate-300 transition-colors cursor-default">Hifam Cafeteria</li>
            <li className="hover:text-slate-300 transition-colors cursor-default">Hifam Butchery</li>
            <li className="hover:text-slate-300 transition-colors cursor-default">Hifam Cleaning</li>
            <li className="hover:text-slate-300 transition-colors cursor-default">Retail & Agro</li>
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div>
          <h4 className="font-black text-lg mb-6 text-hifam-gold uppercase tracking-widest">Direct Support</h4>
          <ul className="space-y-6">
            <li className="flex items-start justify-center md:justify-start gap-4">
              <div className="p-2 bg-slate-900 rounded-lg text-hifam-red shadow-inner">
                <Phone size={18} />
              </div>
              <div className="flex flex-col text-left">
                 <span className="text-[10px] text-slate-500 font-black uppercase tracking-wider">Phone / SMS</span>
                 <span className="text-slate-200 font-black text-sm">+254 729 989 616</span>
              </div>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-4">
              <div className="p-2 bg-slate-900 rounded-lg text-hifam-red shadow-inner">
                <Mail size={18} />
              </div>
              <div className="flex flex-col text-left">
                 <span className="text-[10px] text-slate-500 font-black uppercase tracking-wider">Corporate Email</span>
                 <span className="text-slate-200 font-bold text-xs truncate max-w-[180px]">hifamholdingsltd26@gmail.com</span>
              </div>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-4">
              <div className="p-2 bg-slate-900 rounded-lg text-hifam-red shadow-inner">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col text-left">
                 <span className="text-[10px] text-slate-500 font-black uppercase tracking-wider">Headquarters</span>
                 <span className="text-slate-200 font-bold text-sm">Nairobi, Kenya</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} HIFAM HOLDINGS LIMITED. ALL RIGHTS RESERVED.</p>
        <p className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Operational Excellence
        </p>
      </div>
    </footer>
  );
};

export default Footer;