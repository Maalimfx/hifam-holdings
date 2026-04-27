import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-black text-hifam-blue mb-6">Contact Us</h1>
            <p className="text-lg text-slate-600 mb-10">
              For bookings, inquiries, or business partnerships, reach out to Hifam Holdings Limited directly.
            </p>
            
            <div className="space-y-6">
              <a href="https://wa.me/254729989616" className="flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-6">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp Chat</h4>
                  <p className="text-slate-600">+254 729 989 616</p>
                </div>
              </a>

              <a href="tel:+254729989616" className="flex items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 text-hifam-blue rounded-full flex items-center justify-center mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call/SMS</h4>
                  <p className="text-slate-600">+254 729 989 616</p>
                </div>
              </a>

              <div className="flex items-center p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-red-100 text-hifam-red rounded-full flex items-center justify-center mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Address</h4>
                  <p className="text-slate-600">hifamholdingsltd26@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-hifam-blue">
            <h3 className="text-2xl font-bold mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" placeholder="Full Name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service</label>
                <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <option>Dry Cleaning</option>
                  <option>Logistics</option>
                  <option>Cafeteria</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-hifam-blue hover:bg-hifam-red text-white font-bold py-4 rounded-xl transition">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}