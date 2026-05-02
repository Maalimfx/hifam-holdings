"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X, Upload, CheckCircle2, MapPin } from 'lucide-react';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function CareersPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [applyingFor, setApplyingFor] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({ applicant_name: '', phone: '', email: '', experience: '' });
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await supabase.from('jobs').select('*').order('created_at', { ascending: false });
      if (data) setJobs(data);
    };
    fetchJobs();
  }, []);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      let publicUrl = null;

      if (file) {
        setStatus("Uploading Resume...");
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(fileName, file);

        if (uploadError) {
          console.error("Upload Error:", uploadError);
          throw new Error("Resume upload failed. Check Supabase Storage.");
        }

        const { data: { publicUrl: url } } = supabase.storage.from('resumes').getPublicUrl(fileName);
        publicUrl = url;
      }

      setStatus("Saving Application...");
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          job_title: applyingFor.title,
          resume_url: publicUrl,
          experience: formData.experience || "No details provided."
        }),
      });

      if (!res.ok) throw new Error("API Route Failed");

      setStatus("Application Sent Successfully!");
      setTimeout(() => {
        setApplyingFor(null);
        setStatus("");
        setFile(null);
        setFormData({ applicant_name: '', phone: '', email: '', experience: '' });
      }, 2000);

    } catch (err: any) {
      console.error(err);
      setStatus("Error: " + err.message);
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
      <Navbar />
      <section className="py-24 bg-hifam-blue text-white text-center">
        <h1 className="text-5xl font-black mb-4">JOIN THE TEAM</h1>
        <p className="text-blue-100 text-xl font-medium">Build your legacy with Hifam Holdings Limited.</p>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="space-y-6">
          {jobs.map(job => (
            <div key={job.id} className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <span className="text-hifam-red font-black uppercase text-[10px] tracking-widest">{job.category}</span>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white">{job.title}</h3>
                </div>
                <button onClick={() => setApplyingFor(job)} className="bg-hifam-blue text-white px-8 py-3 rounded-full font-bold hover:bg-hifam-red transition shadow-lg">Apply Now</button>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-400 whitespace-pre-wrap">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      {applyingFor && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2.5rem] p-8 md:p-12 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button onClick={() => setApplyingFor(null)} className="absolute top-8 right-8 text-slate-400 hover:text-hifam-red"><X size={28}/></button>
            <h2 className="text-3xl font-black mb-1 dark:text-white">Apply for {applyingFor.title}</h2>
            <p className="text-slate-500 mb-8 font-bold uppercase text-xs">Direct Submission</p>
            
            <form onSubmit={handleApply} className="space-y-5">
              <input type="text" placeholder="Full Name" required className="w-full p-4 rounded-2xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:border-hifam-blue" onChange={e => setFormData({...formData, applicant_name: e.target.value})} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Phone" required className="w-full p-4 rounded-2xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:border-hifam-blue" onChange={e => setFormData({...formData, phone: e.target.value})} />
                <input type="email" placeholder="Email" required className="w-full p-4 rounded-2xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:border-hifam-blue" onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <textarea placeholder="Experience/Message (Optional)" rows={3} className="w-full p-4 rounded-2xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:border-hifam-blue" onChange={e => setFormData({...formData, experience: e.target.value})} />
              
              <div className="relative border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center hover:border-hifam-blue transition-colors group bg-slate-50 dark:bg-slate-800/50">
                <input type="file" accept=".pdf,.doc,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
                <div className="flex flex-col items-center gap-2">
                  <Upload className="text-slate-400 group-hover:text-hifam-blue transition-colors" size={32} />
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{file ? file.name : "Add Resume (Optional)"}</p>
                </div>
              </div>

              <button type="submit" className="w-full bg-hifam-blue text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-hifam-red transition shadow-xl">
                 {status || "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}