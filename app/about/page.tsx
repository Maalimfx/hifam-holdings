import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, ShieldCheck, Heart, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')] bg-cover"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Building a Legacy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Hifam Holdings Limited is a diversified investment company dedicated to improving 
            the lives of Kenyans through excellence in essential services.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-12 rounded-3xl shadow-xl border-t-8 border-[#0b4d92]">
            <div className="w-16 h-16 bg-blue-50 text-[#0b4d92] rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To provide unparalleled convenience and quality across all our business sectors, 
              ensuring that every interaction with a Hifam brand is a standard of excellence.
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-xl border-t-8 border-[#d71921]">
            <div className="w-16 h-16 bg-red-50 text-[#d71921] rounded-2xl flex items-center justify-center mb-6">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Our Vision</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To become the most trusted multi-sector household brand in East Africa, 
              driving economic growth and setting the benchmark for service delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0b4d92] mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#f9b233] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck />, title: "Integrity", desc: "We operate with total transparency and honesty in all our business dealings." },
              { icon: <Heart />, title: "Customer Centric", desc: "The needs and satisfaction of our customers are the heart of our operations." },
              { icon: <Award />, title: "Excellence", desc: "We don't just provide services; we provide the best version of that service." },
              { icon: <Users />, title: "Teamwork", desc: "Our strength lies in the unity and diversity of our 200+ employees." },
              { icon: <Target />, title: "Innovation", desc: "Continuously improving our processes with modern technology." },
              { icon: <ShieldCheck />, title: "Reliability", desc: "When we promise, we deliver. Count on Hifam every single time." }
            ].map((val, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#0b4d92] group-hover:bg-[#0b4d92] group-hover:text-white transition-all duration-300">
                  {React.cloneElement(val.icon as React.ReactElement, { size: 36 })}
                </div>
                <h4 className="text-2xl font-bold mb-3">{val.title}</h4>
                <p className="text-slate-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Structure Call to Action */}
      <section className="py-24 bg-[#0b4d92] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Part of a Growing Ecosystem</h2>
          <p className="text-xl text-blue-100 mb-12">
            From logistics to dry cleaning, Hifam Holdings Limited manages a high-performing 
            portfolio of businesses designed to serve your needs.
          </p>
          <div className="flex justify-center gap-6">
            <a href="/services" className="bg-[#f9b233] text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition">Explore Businesses</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}