
import React from 'react';
import { motion } from 'framer-motion';
import { TranslationStrings } from '../types';

interface ContactProps {
  t: TranslationStrings;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const contactMethods = [
    {
      name: "WhatsApp",
      value: "+971 50 287 7414",
      label: "Message Now",
      href: "https://wa.me/971502877414",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: "from-[#25D366] to-[#128C7E]",
      bg: "bg-[#25D366]/5"
    },
    {
      name: "Call",
      value: "+971 50 287 7414",
      label: "Instant Dial",
      href: "tel:+971502877414",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: "from-[#D4AF37] to-[#AA8A2E]",
      bg: "bg-[#D4AF37]/5"
    },
    {
      name: "Email",
      value: "paraspanchal5555@gmail.com",
      label: "Official Inquiry",
      href: "mailto:paraspanchal5555@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-[#ffffff] to-[#717171]",
      bg: "bg-white/5"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.4em] mb-4">Direct Communication</h4>
            <h2 className="text-5xl md:text-7xl font-bold gold-shimmer mb-8 tracking-tighter">{t.contactTitle}</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md font-light">
              Connect directly with a Full Stack Architect. Whether it's a mission-critical system or a luxury digital experience, let's start the conversation.
            </p>

            <div className="hidden lg:block">
              <div className="flex items-center gap-4 text-[#D4AF37]/40 text-[10px] uppercase tracking-widest">
                <div className="w-12 h-[1px] bg-[#D4AF37]/20" />
                Based in Dubai, UAE
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-6"
          >
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.href}
                target={method.name === "Email" ? "" : "_blank"}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`glassmorphism group p-8 flex items-center justify-between rounded-2xl relative overflow-hidden transition-all border-[#D4AF37]/10 hover:border-[#D4AF37]/40`}
              >
                <div className="flex items-center gap-8 relative z-10">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-tr ${method.color} text-black shadow-xl group-hover:rotate-12 transition-transform`}>
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold mb-1">{method.name}</h4>
                    <p className="text-white text-lg font-medium">{method.label}</p>
                    <p className="text-gray-500 text-xs font-light">{method.value}</p>
                  </div>
                </div>

                <div className="relative z-10">
                  <svg className="w-6 h-6 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Subtle Background Accent */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
