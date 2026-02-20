
import React from 'react';
import { motion } from 'framer-motion';
import { TranslationStrings } from '../types';

interface AiTechProps {
  t: TranslationStrings;
}

const AiTech: React.FC<AiTechProps> = ({ t }) => {
  return (
    <section className="py-40 relative overflow-hidden bg-black">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.05),_transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="inline-block px-4 py-1 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] mb-8"
          >
            Pioneering Intelligence
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black gold-shimmer mb-8 tracking-tighter">{t.aiTitle}</h2>
          <p className="text-gray-400 text-xl font-light mb-16 leading-relaxed">
            {t.aiSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Semantic Search", icon: "🔍", desc: "Implementing vector embeddings for intelligent document retrieval." },
              { title: "AI-Agents", icon: "🤖", desc: "Building autonomous .NET agents for workflow automation." },
              { title: "Token Optimization", icon: "⚡", desc: "Strategic prompt engineering for cost-effective AI operations." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{item.icon}</div>
                <h4 className="text-[#D4AF37] font-bold mb-2 uppercase text-xs tracking-widest">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Burj Architecture Decor */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 border-r border-t border-[#D4AF37]/10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/4 h-1/4 border-l border-b border-[#D4AF37]/10 pointer-events-none" />
    </section>
  );
};

export default AiTech;
