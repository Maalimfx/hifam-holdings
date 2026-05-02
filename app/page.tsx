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
      
      {/* 1. HERO SECTION (REVERTED TO PROFESSIONAL IMAGE) */}
      <section className="relative h-[85vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Hifam Corporate Headquarters" 
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            One Brand. <br/>
            <span className="text-hifam-gold">Multiple Services.</span> <br/>
            Built for Everyday Life.
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mb-10 font-medium">
            Hifam Holdings Limited is a multi-business umbrella brand dedicated to quality, 
            consistency, and reliability across Kenya's essential service sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Hero Button Check */}
<Link 
  href="/services" 
  className="bg-hifam-blue hover:bg-hifam-red text-white px-10 py-4 rounded-full font-bold transition shadow-xl"
>
  Explore Our Services
</Link>
            <Link href="/contact" className="backdrop-blur-md bg-white/10 border-2 border-white/30 hover:bg-white hover:text-slate-900 text-white px-10 py-4 rounded-full font-bold text-center transition inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-hifam-blue py-16 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><h3 className="text-4xl font-black mb-2 text-hifam-gold">7+</h3><p className="text-xs font-bold uppercase tracking-widest text-blue-100">Business Units</p></div>
          <div><h3 className="text-4xl font-black mb-2 text-hifam-gold">10k+</h3><p className="text-xs font-bold uppercase tracking-widest text-blue-100">Happy Clients</p></div>
          <div><h3 className="text-4xl font-black mb-2 text-hifam-gold">24/7</h3><p className="text-xs font-bold uppercase tracking-widest text-blue-100">Support</p></div>
          <div><h3 className="text-4xl font-black mb-2 text-hifam-gold">100%</h3><p className="text-xs font-bold uppercase tracking-widest text-blue-100">Reliability</p></div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES GRID */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black mb-4 text-hifam-blue dark:text-white">Our Core Businesses</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">Diverse services, one standard of excellence.</p>
            </div>
            <Link href="/services" className="text-hifam-red font-bold flex items-center mt-4 md:mt-0 hover:underline dark:text-hifam-gold transition">
              View All Businesses <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16 text-slate-900 dark:text-white">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "James Omondi", text: "Hifam Dry Cleaners is the only service I trust with my executive suits. Best in Nairobi!" },
              { name: "Sarah Wanjiku", text: "The logistics team helped us move offices seamlessly. Very professional and fast." },
              { name: "Anita Kerubo", text: "Excellent cleaning service. The team was thorough, vetted, and very polite." }
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="text-hifam-gold mb-4 text-xl">★★★★★</div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                <h4 className="font-bold text-slate-900 dark:text-white">— {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}