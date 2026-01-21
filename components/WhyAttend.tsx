import React from 'react';

const WhyAttend: React.FC = () => {
  const reasons = [
    { id: '01', title: 'Cutting-Edge Insights', desc: 'Gain firsthand knowledge from top AI experts and pioneers shaping the industry.' },
    { id: '02', title: 'Hands-On Learning', desc: 'Participate in interactive workshops, live demos, and deep-dive technical sessions.' },
    { id: '03', title: 'Exclusive Networking', desc: 'Connect with AI leaders, investors, and fellow professionals at curated social events.' },
    { id: '04', title: 'Innovation Showcase', desc: 'Explore groundbreaking AI solutions from emerging startups and tech giants alike.' }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-[#0E0E0E]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section Aligned to Container */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 items-start">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">WHY<br />ATTEND?</h2>
          <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed max-w-lg">
            Discover why Next-Gen AI Summit is the must-attend event for AI professionals, innovators, and industry leaders. We bridge the gap between theory and application.
          </p>
        </div>

        {/* Reason Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="bg-[#121212] border border-white/5 p-8 md:p-12 rounded-[32px] group hover:border-[#2563EB]/50 transition-colors relative overflow-hidden h-full">
               <div className="text-7xl md:text-8xl font-black text-[#2563EB]/10 absolute top-[-10px] left-[-10px] select-none group-hover:text-[#2563EB]/20 transition-colors">
                 {reason.id}
               </div>
               <div className="relative z-10">
                 <h3 className="text-xl md:text-2xl font-bold text-white mb-4 uppercase tracking-tight">{reason.title}</h3>
                 <p className="text-[#9CA3AF] leading-relaxed text-sm md:text-base">{reason.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;