
import React from 'react';
import { motion } from 'framer-motion';
import { TranslationStrings } from '../types';

interface AboutProps {
  t: TranslationStrings;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-[#D4AF37]/40" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gold-shimmer">{t.aboutTitle}</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-[#D4AF37]/10">
                <div>
                  <h4 className="text-[#D4AF37] font-bold text-2xl">2.9+</h4>
                  <p className="text-xs uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-[#D4AF37] font-bold text-2xl">10+</h4>
                  <p className="text-xs uppercase tracking-widest">Systems Delivered</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
               <div className="aspect-[4/5] bg-[#141414] border border-[#D4AF37]/20 p-2 grayscale hover:grayscale-0 transition-all cursor-pointer overflow-hidden">
                  <img src="https://picsum.photos/400/500?grayscale&v=1" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="Office 1" />
               </div>
               <div className="aspect-square bg-[#141414] border border-[#D4AF37]/20 p-2 grayscale hover:grayscale-0 transition-all cursor-pointer overflow-hidden">
                  <img src="https://picsum.photos/400/400?grayscale&v=2" className="w-full h-full object-cover opacity-60" alt="Dubai 1" />
               </div>
            </div>
            <div className="space-y-4">
               <div className="aspect-square bg-[#141414] border border-[#D4AF37]/20 p-2 grayscale hover:grayscale-0 transition-all cursor-pointer overflow-hidden">
                  <img src="https://picsum.photos/400/400?grayscale&v=3" className="w-full h-full object-cover opacity-60" alt="Code 1" />
               </div>
               <div className="aspect-[4/5] bg-[#141414] border border-[#D4AF37]/20 p-2 grayscale hover:grayscale-0 transition-all cursor-pointer overflow-hidden">
                  <img src="https://picsum.photos/400/500?grayscale&v=4" className="w-full h-full object-cover opacity-60" alt="Burj Khalifa" />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
