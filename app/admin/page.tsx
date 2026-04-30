"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Mail, User, Clock, Briefcase, LogOut, ShieldCheck } from 'lucide-react';

// Initialize Supabase connection
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminDashboard() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUserAndFetchLeads = async () => {
      // 1. Check if user is logged in
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        // If not logged in, redirect to login page
        router.push('/login');
        return;
      }

      // 2. If logged in, fetch the inquiries from the database
      const { data: leads, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (!error && leads) {
        setData(leads);
      }
      setLoading(false);
    };

    checkUserAndFetchLeads();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="w-12 h-12 border-4 border-hifam-blue border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="font-black text-hifam-blue animate-pulse uppercase tracking-widest">Verifying Admin Access...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
                <h1 className="text-4xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                  <ShieldCheck className="text-hifam-blue" size={36} /> 
                  Management Portal
                </h1>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">
                  Hifam Holdings Internal Lead Database
                </p>
            </div>
            <button 
              onClick={handleLogout} 
              className="flex items-center gap-2 bg-white dark:bg-slate-900 px-6 py-2.5 rounded-full font-bold border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-hifam-red dark:hover:text-hifam-red transition shadow-sm"
            >
                <LogOut size={18} /> Logout
            </button>
        </div>
        
        {/* Statistics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-hifam-blue p-6 rounded-3xl text-white shadow-lg">
            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">Total Inquiries</p>
            <h2 className="text-4xl font-black">{data.length}</h2>
          </div>
        </div>

        {/* Leads List */}
        <div className="grid grid-cols-1 gap-6">
          {data.length === 0 ? (
            <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-[2rem] border border-dashed border-slate-300 dark:border-slate-700">
              <Mail className="mx-auto text-slate-300 mb-4" size={48} />
              <p className="text-slate-500 font-medium text-lg">No customer inquiries received yet.</p>
            </div>
          ) : (
            data.map((lead) => (
                <div key={lead.id} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between gap-6 hover:shadow-md transition-shadow">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 bg-hifam-red/10 text-hifam-red px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px]">
                      <Briefcase size={12}/> {lead.service}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <User size={20} className="text-slate-400" /> {lead.name}
                    </h3>
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                       <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">"{lead.message}"</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center items-start md:items-end md:border-l md:pl-8 border-slate-100 dark:border-slate-800 min-w-[200px]">
                    <div className="flex items-center gap-2 text-hifam-blue dark:text-hifam-gold mb-2 font-bold break-all">
                      <Mail size={16} className="shrink-0" /> {lead.email}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-medium uppercase tracking-tighter">
                      <Clock size={14} /> Received: {new Date(lead.created_at).toLocaleDateString()} at {new Date(lead.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </main>
  );
}