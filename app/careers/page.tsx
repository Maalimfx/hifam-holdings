import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Users, Star } from 'lucide-react';

export default function CareersPage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <Navbar />
      <section className="py-20 bg-hifam-blue text-white text-center">
        <h1 className="text-5xl font-black mb-4">Join the Hifam Team</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          We are always looking for talented individuals to join our various business units across Kenya.
        </p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl">
            <Users className="mx-auto text-hifam-red mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Culture</h3>
            <p className="text-slate-600 dark:text-slate-400">A supportive environment where every voice matters.</p>
          </div>
          <div className="text-center p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl">
            <Star className="mx-auto text-hifam-gold mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Growth</h3>
            <p className="text-slate-600 dark:text-slate-400">Opportunities to move across different business sectors.</p>
          </div>
          <div className="text-center p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl">
            <Briefcase className="mx-auto text-hifam-blue mb-4" size={40} />
            <h3 className="text-xl font-bold mb-2 dark:text-white">Benefits</h3>
            <p className="text-slate-600 dark:text-slate-400">Competitive packages and a focus on work-life balance.</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Current Openings</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            While we don't have active listings today, we are always accepting CVs for 
            Logistics, Cleaning, and Hospitality roles.
          </p>
          <a href="mailto:hifamholdingsltd26@gmail.com" className="bg-hifam-blue text-white px-10 py-4 rounded-full font-bold hover:bg-hifam-red transition inline-block">
            Submit Your CV
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}