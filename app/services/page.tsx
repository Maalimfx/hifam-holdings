import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { HIFAM_BUSINESSES } from '@/lib/data'; // Uses your master list

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-hifam-blue py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Our Businesses</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-medium italic">
            "One Brand. Multiple Services. Built for Everyday Life in Kenya."
          </p>
        </div>
      </section>

      {/* Grid of Businesses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* We map through your real business data from lib/data.ts */}
            {HIFAM_BUSINESSES.map((business) => (
              <ServiceCard 
                key={business.id}
                name={business.name}
                description={business.description}
                icon={business.id === 'dry-cleaners' ? 'WashingMachine' : 
                      business.id === 'logistics' ? 'Truck' : 
                      business.id === 'cafeteria' ? 'Coffee' : 
                      business.id === 'butchery' ? 'Utensils' : 
                      business.id === 'cleaning' ? 'Sparkles' : 
                      business.id === 'retail' ? 'ShoppingBag' : 'Sprout'}
                href={`/services/${business.id}`} // Links to the dynamic page
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Need a Corporate Solution?</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
            Hifam Holdings Limited provides tailored contracts for cleaning, logistics, and catering for large organizations and office blocks.
          </p>
          <a href="/contact" className="bg-hifam-red text-white px-10 py-4 rounded-full font-black text-lg hover:bg-hifam-blue transition shadow-xl uppercase tracking-widest">
            Talk to Our Team
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}