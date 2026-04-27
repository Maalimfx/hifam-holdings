import { HIFAM_BUSINESSES } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, MessageCircle, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 1. Added 'async' here
// 2. Added 'Promise' type for params
export default async function BusinessPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 3. We 'await' the params to get the ID
  const resolvedParams = await params;
  const business = HIFAM_BUSINESSES.find(b => b.id === resolvedParams.id);
  
  if (!business) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-slate-900 h-[45vh] relative flex items-center">
        <img 
          src={business.image} 
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
          alt={business.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 w-full text-white">
          <Link href="/services" className="flex items-center text-white/70 hover:text-white mb-6 transition">
             <ArrowLeft size={18} className="mr-2" /> Back to All Services
          </Link>
          <h1 className="text-5xl md:text-6xl font-black mb-4">{business.name}</h1>
          <p className="text-xl text-[#f9b233] font-bold tracking-widest uppercase">{business.tagline}</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-[#0b4d92]">Service Overview</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {business.description}
            </p>
            
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Professional Offerings:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {business.services.map((service) => (
                <div key={service} className="flex items-center p-5 bg-slate-50 rounded-2xl border-l-4 border-[#0b4d92]">
                  <CheckCircle2 className="text-[#d71921] mr-4 shrink-0" />
                  <span className="font-bold text-slate-800">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0b4d92] text-white p-8 rounded-3xl shadow-2xl sticky top-28">
              <h3 className="text-2xl font-bold mb-4">Book Service</h3>
              <p className="text-blue-100 mb-8">Direct contact with the Hifam unit team.</p>
              
              <div className="space-y-4">
                <a href="https://wa.me/254729989616" className="flex items-center justify-center w-full bg-white text-[#0b4d92] py-4 rounded-xl font-black hover:bg-[#f9b233] transition gap-3">
                  <MessageCircle size={22} /> WhatsApp
                </a>
                <a href="tel:+254729989616" className="flex items-center justify-center w-full border-2 border-white/30 text-white py-4 rounded-xl font-bold hover:bg-white/10 transition gap-3">
                  <Phone size={20} /> Call Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}