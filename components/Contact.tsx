
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TranslationStrings } from '../types';

interface ContactProps {
  t: TranslationStrings;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-5xl font-bold gold-shimmer mb-8">{t.contactTitle}</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">{t.contactSubtitle}</p>
            
            <div className="space-y-8">
               <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-[#D4AF37]/60 tracking-widest">Email</p>
                    <a href="mailto:paraspanchal5555@gmail.com" className="text-white font-medium hover:text-[#D4AF37] transition-colors">paraspanchal5555@gmail.com</a>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-[#D4AF37]/60 tracking-widest">Phone</p>
                    <a href="tel:+971502877414" className="text-white font-medium hover:text-[#D4AF37] transition-colors">+971 50 287 7414</a>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-[#D4AF37]/60 tracking-widest">Location</p>
                    <p className="text-white font-medium">{t.location}</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#141414] border border-[#D4AF37]/10 p-10 relative overflow-hidden"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-[400px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mb-6">
                   <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                <p className="text-gray-500">I will get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-[#D4AF37]/60">{t.formName}</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-black/50 border border-white/5 p-4 focus:border-[#D4AF37] outline-none transition-all text-white placeholder:text-gray-700" 
                    placeholder="E.g. Jumeirah Holdings"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-[#D4AF37]/60">{t.formEmail}</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-black/50 border border-white/5 p-4 focus:border-[#D4AF37] outline-none transition-all text-white placeholder:text-gray-700" 
                    placeholder="name@company.ae"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-[#D4AF37]/60">{t.formMessage}</label>
                  <textarea 
                    required 
                    rows={4} 
                    className="w-full bg-black/50 border border-white/5 p-4 focus:border-[#D4AF37] outline-none transition-all text-white placeholder:text-gray-700 resize-none" 
                    placeholder="Brief overview of your project goals..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.2em] hover:bg-[#F9E79F] transition-all transform hover:-translate-y-1 active:scale-95"
                >
                  {t.formSubmit}
                </button>
              </form>
            )}
            {/* Burj lines on form */}
            <div className="absolute top-0 right-10 w-[1px] h-10 bg-[#D4AF37]/30" />
            <div className="absolute bottom-0 left-10 w-[1px] h-10 bg-[#D4AF37]/30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
