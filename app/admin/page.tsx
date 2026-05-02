"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { Mail, User, Trash2, Briefcase, Plus, LogOut, MessageSquare, Users, Phone, FileText, Clock, ExternalLink, AlertCircle } from 'lucide-react';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'messages' | 'careers' | 'applicants'>('messages');
  const [data, setData] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [applicants, setApplicants] = useState<any[]>([]);
  const [newJob, setNewJob] = useState({ title: '', category: 'Logistics', description: '' });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push('/login'); return; }
      await Promise.all([fetchMessages(), fetchJobs(), fetchApplicants()]);
      setLoading(false);
    };
    init();
  }, [router]);

  const fetchMessages = async () => {
    const { data: iq } = await supabase.from('inquiries').select('*').order('created_at', { ascending: false });
    if (iq) setData(iq);
  };

  const fetchJobs = async () => {
    const { data: j } = await supabase.from('jobs').select('*').order('created_at', { ascending: false });
    if (j) setJobs(j);
  };

  const fetchApplicants = async () => {
    const { data: ap } = await supabase.from('applications').select('*').order('created_at', { ascending: false });
    if (ap) setApplicants(ap);
  };

  const deleteMessage = async (id: string) => {
    if (confirm("Delete this inquiry?")) {
      await supabase.from('inquiries').delete().eq('id', id);
      fetchMessages();
    }
  };

  const deleteApplicant = async (id: string) => {
    if (confirm("Remove applicant record?")) {
      await supabase.from('applications').delete().eq('id', id);
      fetchApplicants();
    }
  };

  const postJob = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('jobs').insert([newJob]);
    if (!error) {
      alert("Job Published!");
      setNewJob({ title: '', category: 'Logistics', description: '' });
      fetchJobs();
    }
  };

  const deleteJob = async (id: string) => {
    if (confirm("Delete vacancy?")) {
      await supabase.from('jobs').delete().eq('id', id);
      fetchJobs();
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center font-black animate-pulse bg-slate-950 text-white tracking-widest uppercase">Securing Connection...</div>;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-black text-hifam-blue dark:text-white uppercase tracking-tighter">Command Center</h1>
            <p className="text-hifam-red font-bold text-xs uppercase tracking-widest">Hifam Holdings Internal Portal</p>
          </div>
          <button onClick={async () => { await supabase.auth.signOut(); router.push('/login'); }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 py-2 rounded-full text-slate-500 font-bold flex items-center gap-2 hover:text-hifam-red transition shadow-sm"><LogOut size={16}/> Exit Dashboard</button>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <button onClick={() => setActiveTab('messages')} className={`px-8 py-3 rounded-2xl font-black transition-all ${activeTab === 'messages' ? 'bg-hifam-blue text-white shadow-xl' : 'bg-white dark:bg-slate-900 dark:text-slate-400'}`}>Messages ({data.length})</button>
          <button onClick={() => setActiveTab('applicants')} className={`px-8 py-3 rounded-2xl font-black transition-all ${activeTab === 'applicants' ? 'bg-hifam-blue text-white shadow-xl' : 'bg-white dark:bg-slate-900 dark:text-slate-400'}`}>Applicants ({applicants.length})</button>
          <button onClick={() => setActiveTab('careers')} className={`px-8 py-3 rounded-2xl font-black transition-all ${activeTab === 'careers' ? 'bg-hifam-blue text-white shadow-xl' : 'bg-white dark:bg-slate-900 dark:text-slate-400'}`}>Jobs</button>
        </div>

        {activeTab === 'messages' && (
          <div className="space-y-4">
            {data.map(lead => (
              <div key={lead.id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex justify-between items-center shadow-sm">
                <div>
                  <span className="bg-slate-100 dark:bg-slate-800 text-hifam-blue text-[10px] font-black px-2 py-0.5 rounded uppercase">{lead.service}</span>
                  <h3 className="font-black text-xl dark:text-white mt-1">{lead.name}</h3>
                  <p className="text-slate-500 italic mt-1 leading-relaxed">"{lead.message}"</p>
                  <p className="text-hifam-blue dark:text-hifam-gold text-xs font-bold mt-3 flex items-center gap-2"><Mail size={12}/> {lead.email}</p>
                </div>
                <button onClick={() => deleteMessage(lead.id)} className="text-slate-300 hover:text-hifam-red p-4 transition"><Trash2 /></button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'applicants' && (
          <div className="space-y-4">
            {applicants.map(app => (
              <div key={app.id} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-hifam-red font-black uppercase text-[10px] tracking-[0.2em]">{app.job_title}</p>
                    <h3 className="text-2xl font-black dark:text-white">{app.applicant_name}</h3>
                  </div>
                  <div className="flex gap-2">
                     {app.resume_url ? (
                       <a href={app.resume_url} target="_blank" className="bg-green-600 text-white px-5 py-2.5 rounded-xl hover:bg-hifam-blue transition flex items-center gap-2 text-sm font-bold shadow-lg">
                         <FileText size={18}/> View Resume
                       </a>
                     ) : (
                        <div className="bg-slate-100 dark:bg-slate-800 text-slate-400 px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2">
                           <AlertCircle size={18}/> No Resume
                        </div>
                     )}
                     <button onClick={() => deleteApplicant(app.id)} className="text-slate-300 hover:text-hifam-red p-2.5 transition border dark:border-slate-700 rounded-xl"><Trash2 size={18}/></button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t dark:border-slate-800">
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Professional Intro</p>
                    <p className="text-sm dark:text-slate-300 leading-relaxed italic">{app.experience || "Not provided."}</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <p className="flex items-center gap-3 text-sm font-bold dark:text-slate-300"><Phone size={16} className="text-hifam-blue" /> {app.phone}</p>
                    <p className="flex items-center gap-3 text-sm font-bold dark:text-slate-300"><Mail size={16} className="text-hifam-blue" /> {app.email}</p>
                    <p className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Clock size={16} /> Applied: {new Date(app.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'careers' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-black mb-6 dark:text-white flex items-center gap-2"><Plus className="text-hifam-red" /> New Vacancy</h2>
              <form onSubmit={postJob} className="space-y-4">
                <input type="text" placeholder="Title" className="w-full p-4 rounded-2xl border dark:bg-slate-800 dark:text-white" required value={newJob.title} onChange={e => setNewJob({...newJob, title: e.target.value})} />
                <select className="w-full p-4 rounded-2xl border dark:bg-slate-800 dark:text-white font-bold" value={newJob.category} onChange={e => setNewJob({...newJob, category: e.target.value})}>
                  <option>Logistics</option><option>Garment Care</option><option>Cleaning</option><option>Cafeteria</option><option>Management</option>
                </select>
                <textarea placeholder="Job Requirements..." className="w-full p-4 rounded-2xl border dark:bg-slate-800 dark:text-white" rows={5} required value={newJob.description} onChange={e => setNewJob({...newJob, description: e.target.value})} />
                <button className="w-full bg-hifam-blue text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-hifam-red transition shadow-lg">Post Live</button>
              </form>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-black mb-6 dark:text-white">Active Listings</h2>
              {jobs.map(job => (
                <div key={job.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex justify-between items-center shadow-sm">
                  <div>
                    <h4 className="font-black text-hifam-blue dark:text-hifam-gold uppercase text-lg">{job.title}</h4>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{job.category}</p>
                  </div>
                  <button onClick={() => deleteJob(job.id)} className="p-3 text-slate-300 hover:text-hifam-red transition"><Trash2/></button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}