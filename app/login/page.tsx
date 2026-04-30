"use client";

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Lock, ShieldCheck, AlertCircle } from 'lucide-react';

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) {
        setErrorMessage(error.message);
      } else if (data.user) {
        // SUCCESS: Go to Admin Dashboard
        router.push('/admin');
      }
    } catch (err) {
      setErrorMessage("A connection error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      
      <div className="max-w-md mx-auto pt-24 px-4 pb-20">
        <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800">
          
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-hifam-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-hifam-blue/20">
                <Lock className="text-hifam-blue" size={32} />
            </div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">Staff Entrance</h1>
            <p className="text-slate-500 text-xs mt-2 font-bold uppercase tracking-[0.2em]">Hifam Holdings Limited</p>
          </div>

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl flex items-center gap-3 text-red-600 dark:text-red-400 text-sm font-medium animate-shake">
              <AlertCircle size={18} />
              {errorMessage}
            </div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest mb-2 text-slate-400">Corporate Email</label>
              <input 
                type="email" 
                required
                placeholder="name@hifam.com"
                className="w-full p-4 rounded-2xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700 outline-none focus:ring-2 focus:ring-hifam-blue transition-all dark:text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-xs font-black uppercase tracking-widest mb-2 text-slate-400">Password</label>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full p-4 rounded-2xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700 outline-none focus:ring-2 focus:ring-hifam-blue transition-all dark:text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-hifam-blue text-white font-black py-5 rounded-2xl hover:bg-hifam-red transition-all duration-300 shadow-xl shadow-hifam-blue/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Authenticating...
                </>
              ) : (
                "Access Dashboard"
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-slate-400 text-xs flex items-center justify-center gap-2">
              <ShieldCheck size={14} /> Secured by Supabase Auth
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}