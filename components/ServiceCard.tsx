import React from 'react';
import Link from 'next/link';
import { WashingMachine, Coffee, Truck, ShoppingBag, Utensils, Sparkles, Sprout, ArrowRight } from 'lucide-react';

const iconMap: any = { WashingMachine, Coffee, Truck, ShoppingBag, Utensils, Sparkles, Sprout };

export default function ServiceCard({ name, description, icon, href }: any) {
  const Icon = iconMap[icon] || Sparkles;
  return (
    <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all">
      <div className="w-14 h-14 bg-slate-50 dark:bg-slate-700 text-hifam-blue dark:text-hifam-gold rounded-xl flex items-center justify-center mb-6 group-hover:bg-hifam-blue group-hover:text-white transition-colors">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-bold mb-3 dark:text-white">{name}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{description}</p>
      {/* Inside ServiceCard return... */}
<Link 
  href={href} 
  className="inline-flex items-center font-bold text-hifam-red hover:text-hifam-blue dark:hover:text-hifam-gold transition"
>
  Learn More <ArrowRight className="ml-2 w-4 h-4" />
</Link>
    </div>
  );
}