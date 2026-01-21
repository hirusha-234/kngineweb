import React from 'react';
import { ArrowRightIcon } from '../constants';

const TicketOptions: React.FC = () => {
  const tickets = [
    { type: 'STANDARD', price: '$299', perks: ['Main stage access', 'Workshops', 'Networking'] },
    { type: 'PREMIUM', price: '$599', perks: ['Priority seating', 'VIP Lounge', 'Exclusive Dinners'], featured: true },
    { type: 'CORPORATE', price: '$2499', perks: ['5 Tickets', 'Logo inclusion', 'Private Room'] }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-16">Ticket Options</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tickets.map((t, idx) => (
            <div 
              key={idx} 
              className={`rounded-[32px] p-10 md:p-12 flex flex-col justify-between h-auto border transition-all duration-300 ${
                t.featured ? 'bg-[#2563EB] border-[#2563EB] shadow-[0_20px_50px_rgba(37,99,235,0.2)]' : 'bg-[#121212] border-white/5'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${t.featured ? 'bg-white/20' : 'bg-[#2563EB]/10 text-[#2563EB]'}`}>
                    {t.type}
                  </span>
                </div>
                <div className="text-5xl font-black text-white mb-8 tracking-tighter">{t.price}</div>
                <ul className="space-y-4 mb-12">
                  {t.perks.map((p, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm font-medium ${t.featured ? 'text-white' : 'text-[#9CA3AF]'}`}>
                      <div className={`w-1 h-1 rounded-full ${t.featured ? 'bg-white' : 'bg-[#2563EB]'}`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all active:scale-95 ${
                t.featured ? 'bg-white text-[#2563EB] hover:bg-white/90' : 'bg-transparent border border-white/10 text-white hover:bg-white/5'
              }`}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketOptions;