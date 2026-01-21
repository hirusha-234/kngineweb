import React from 'react';
import { ArrowRightIcon } from '../constants';

const FeatureCards: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Tall Left Card: Speakers */}
          <div className="bg-[#2563EB] rounded-[40px] p-10 md:p-12 flex flex-col justify-between min-h-[500px] md:min-h-[600px] shadow-2xl transition-transform hover:-translate-y-1">
            <div>
              <h3 className="text-4xl font-black text-white tracking-tighter uppercase mb-12">Speakers</h3>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-8">
                <ArrowRightIcon className="w-6 h-6 text-white -rotate-45" />
              </div>
              <p className="text-white font-medium text-lg md:text-xl leading-relaxed max-w-xs">
                Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    src={`https://i.pravatar.cc/100?u=${i}`} 
                    alt="Speaker" 
                    className="w-12 h-12 rounded-full border-2 border-[#2563EB] object-cover" 
                  />
                ))}
              </div>
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-colors">
                And more <ArrowRightIcon className="w-4 h-4 -rotate-45" />
              </button>
            </div>
          </div>

          {/* Right Stacked Column */}
          <div className="flex flex-col gap-6">
            {/* Top Right: Technologies */}
            <div className="bg-[#2563EB] rounded-[40px] p-10 md:p-12 flex flex-col justify-between min-h-[240px] md:min-h-[290px] shadow-xl transition-transform hover:-translate-y-1">
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Technologies</h3>
              <p className="text-white/90 font-medium text-base md:text-lg leading-relaxed max-w-sm">
                Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.
              </p>
            </div>

            {/* Bottom Right: Networking */}
            <div className="bg-[#D1D5DB] rounded-[40px] p-10 md:p-12 flex flex-col justify-between min-h-[240px] md:min-h-[290px] shadow-xl transition-transform hover:-translate-y-1">
              <h3 className="text-3xl font-black text-[#0B0B0B] tracking-tighter uppercase">Networking Opportunities</h3>
              <p className="text-[#4B5563] font-medium text-base md:text-lg leading-relaxed max-w-sm">
                Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureCards;