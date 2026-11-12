
import React from 'react';
import { motion } from 'framer-motion';
import { TranslationStrings } from '../types';

interface AboutProps {
  t: TranslationStrings;
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative w-full"
        >
          {/* Decorative Gold Corner */}
          <div className="absolute -top-6 -left-3 sm:-top-10 sm:-left-6 w-20 h-20 sm:w-40 sm:h-40 border-t-2 border-l-2 border-[#D4AF37]/40 pointer-events-none" />

          {/* About Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 gold-shimmer">
            {t.aboutTitle}
          </h2>

          {/* About Content */}
          <div className="space-y-5 sm:space-y-6 text-gray-400 text-base sm:text-lg leading-relaxed w-full">
            <p>{t.aboutP1}</p>

            <p>{t.aboutP2}</p>

            {/* Experience Statistics */}
            <div className="pt-6 sm:pt-8 grid grid-cols-2 gap-6 sm:gap-12 border-t border-[#D4AF37]/10">
              <div>
                <h4 className="text-[#D4AF37] font-bold text-2xl sm:text-3xl">
                  2.5+
                </h4>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">
                  Years Experience
                </p>
              </div>

              <div>
                <h4 className="text-[#D4AF37] font-bold text-2xl sm:text-3xl">
                  5+
                </h4>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">
                  Systems Delivered
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
