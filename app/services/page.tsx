"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'General Inquiry', message: '' });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending your message...");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Success! Your inquiry has been received. Hifam will contact you.");
        setFormData({ name: '', email: '', service: 'General Inquiry', message: '' });
      } else {
        setStatus("Error: Could not send. Please try WhatsApp.");
      }
    } catch (err) {
      setStatus("Check your internet and try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <Navbar />
      <section className="py-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-black text-hifam-blue dark:text-white mb-6 leading-tight">Let's Discuss <br/><span className="text-hifam-red">Your Needs.</span></h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">Reach out to Hifam Holdings Limited for business inquiries, service bookings, or corporate partnerships.</p>
          
          <div className="space-y-6">
            <div className="flex items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
               <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mr-6"><MessageCircle size={24}/></div>
               <div><h4 className="font-bold dark:text-white text-lg">WhatsApp</h4><p className="text-slate-500">+254 729 989 616</p></div>
            </div>
            <div className="flex items-center p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
               <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mr-6"><Mail size={24}/></div>
               <div><h4 className="font-bold dark:text-white text-lg">Official Email</h4><p className="text-slate-500 text-sm">hifamholdingsltd26@gmail.com</p></div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Your Name" required className="w-full p-4 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:border-hifam-blue" 
              onChange={e => setFormData({...formData, name: e.target.value})} value={formData.name} />
            
            <input type="email" placeholder="Email Address" required className="w-full p-4 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:border-hifam-blue" 
              onChange={e => setFormData({...formData, email: e.target.value})} value={formData.email} />
            
            <select className="w-full p-4 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:border-hifam-blue"
              onChange={e => setFormData({...formData, service: e.target.value})} value={formData.service}>
              <option>General Inquiry</option>
              <option>Dry Cleaning</option>
              <option>Logistics</option>
              <option>Cafeteria</option>
              <option>Butchery</option>
              <option>Cleaning Services</option>
            </select>

            <textarea placeholder="How can we help you?" rows={4} required className="w-full p-4 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:border-hifam-blue" 
              onChange={e => setFormData({...formData, message: e.target.value})} value={formData.message}></textarea>
            
            <button type="submit" className="w-full bg-hifam-blue text-white py-4 rounded-xl font-bold hover:bg-hifam-red transition shadow-lg uppercase tracking-widest">
              Send Message
            </button>
            {status && <p className="text-center font-bold text-hifam-blue dark:text-hifam-gold mt-4 animate-pulse">{status}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}