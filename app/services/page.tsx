import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { ShieldCheck, Star, MessageCircle, ArrowRight } from 'lucide-react';

const featuredServices = [
  { name: 'Hifam Dry Cleaners', description: 'Premium garment care with free pickup and delivery.', icon: 'WashingMachine', href: '/services/dry-cleaners' },
  { name: 'Hifam Cafeteria', description: 'Freshly brewed coffee and gourmet meals served daily.', icon: 'Coffee', href: '/services/cafeteria' },
  { name: 'Hifam Logistics', description: 'Fast, safe, and reliable delivery solutions across Kenya.', icon: 'Truck', href: '/services/logistics' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <Navbar />
      
      {/* 1. HERO SECTION WITH LOGO BACKGROUND */}
      <section className="relative h-[85vh] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Logo Layer */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img 
            src="/logo.png" 
            className="w-[80%] h-[80%] object-contain" 
            alt="Hifam Watermark" 
          />
        </div>
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-950"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            One Brand. <br/>
            <span className="text-hifam-gold">Multiple Services.</span> <br/>
            Built for Everyday Life.
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-10 font-medium">
            Hifam Holdings Limited: Excellence, consistency, and reliability across Kenya's essential service sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/services" className="bg-hifam-blue hover:bg-hifam-red text-white px-10 py-4 rounded-full font-bold transition shadow-xl text-center">
              Explore Services
            </Link>
            <Link href="/contact" className="backdrop-blur-md bg-white/10 border-2 border-white/30 hover:bg-white hover:text-slate-900 text-white px-10 py-4 rounded-full font-bold transition text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-hifam-blue py-16 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><h3 className="text-4xl font-black mb-2 text-hifam-gold">7+</h3><p className="text-xs font-bold uppercase tracking-widest">Business Units</p></div>
          <div><h3 className="text-4xl font-black mb-2 text-hifam-gold">10k+</h3><p className="text-xs font-bold uppercase tracking-widest">Happy Clients</p></div>
          <div><h3 className="text-4xl font-black mb-2 text-hifam-gold">24/7</h3><p className="text-xs font-bold uppercase tracking-widest">Support</p></div>
          <div><h3 className="text-4xl font-black mb-2 text-hifam-gold">100%</h3><p className="text-xs font-bold uppercase tracking-widest">Reliability</p></div>
        </div>
      </section>

      {/* 2.5 THE HIFAM ADVANTAGE */}
<section className="py-24 bg-white dark:bg-slate-950">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div>
      <h2 className="text-4xl font-black text-hifam-blue dark:text-white mb-6 leading-tight">
        The Hifam Advantage: <br/>
        <span className="text-hifam-red">Quality in Every Detail</span>
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
        Hifam Holdings Limited isn't just a collection of businesses. It is a promise of 
        standardized excellence. Whether you are ordering a meal or trusting us with 
        your logistics, you experience the same high-tier corporate responsibility.
      </p>
      <ul className="space-y-4">
        {[
          "Vetted and Highly Trained Professional Staff",
          "Modern Technology & Eco-friendly Processes",
          "Seamless Cross-Service Customer Support",
          "Transparent Pricing with No Hidden Costs"
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-200">
            <div className="w-6 h-6 bg-hifam-gold rounded-full flex items-center justify-center text-white text-xs">✓</div>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
      <img 
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974" 
        className="w-full h-full object-cover" 
        alt="Hifam Team" 
      />
      <div className="absolute inset-0 bg-hifam-blue/20"></div>
    </div>
  </div>
</section>

      {/* 3. SERVICES GRID */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black mb-4 text-hifam-blue dark:text-white">Our Core Businesses</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">One standard of excellence across all sectors.</p>
            </div>
            <Link href="/services" className="text-hifam-red font-bold flex items-center hover:underline dark:text-hifam-gold">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16 dark:text-white">Trusted by Thousands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "James Omondi", text: "Hifam Dry Cleaners is the only service I trust with my executive suits." },
              { name: "Sarah Wanjiku", text: "The logistics team helped us move offices seamlessly and fast." },
              { name: "Anita Kerubo", text: "Excellent cleaning service. Thorough, vetted, and very polite." }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="text-hifam-gold mb-4 text-xl">★★★★★</div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <h4 className="font-bold dark:text-white">— {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}