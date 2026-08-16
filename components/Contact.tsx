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
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: "from-[#25D366] to-[#128C7E]",
      iconText: "text-black"
    },
    {
      name: "Direct Call",
      value: "+971 50 287 7414",
      label: "Instant Dial",
      href: "tel:+971502877414",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
      color: "from-[#D4AF37] to-[#AA8A2E]",
      iconText: "text-black"
    },
    {
      name: "Email",
      value: "paraspanchal5555@gmail.com",
      label: "Official Inquiry",
      href: "mailto:paraspanchal5555@gmail.com",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      color: "from-[#F9E79F] to-[#D4AF37]",
      iconText: "text-black"
    },
    {
      name: "LinkedIn",
      value: "paras-panchal-718679223",
      label: "Professional Network",
      href: "https://www.linkedin.com/in/paras-panchal-718679223/",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: "from-[#0A66C2] to-[#004182]",
      iconText: "text-white"
    },
    {
      name: "GitHub",
      value: "github.com/paras245",
      label: "Code Repositories",
      href: "https://github.com/paras245",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
      color: "from-[#6E7681] to-[#1F2428]",
      iconText: "text-white"
    },
    {
      name: "YouTube",
      value: "@paraspanchal9708",
      label: "YouTube Channel",
      href: "https://www.youtube.com/@paraspanchal9708",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: "from-[#FF0000] to-[#B30000]",
      iconText: "text-white"
    }
  ];

  return (
    <section id="contact" className="py-28 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Context */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.4em] mb-4">Direct Communication</h4>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold gold-shimmer mb-6 tracking-tighter">{t.contactTitle}</h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 font-light leading-relaxed">
              Connect directly with a Full Stack Architect. Whether it&apos;s enterprise .NET solutions, cloud platforms, modern Angular frontends, or AI engineering discussions, let&apos;s start the conversation.
            </p>

          </motion.div>

          {/* Right Column: Interactive Contact & Social Channels Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.href}
                target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={method.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.02, y: -2 }}
                className="glassmorphism group p-6 rounded-2xl relative overflow-hidden transition-all duration-300 border border-[#D4AF37]/15 hover:border-[#D4AF37]/50 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr ${method.color} ${method.iconText} shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <div className="text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-[#D4AF37] text-[10px] uppercase tracking-[0.25em] font-bold mb-1">{method.name}</h4>
                  <p className="text-white text-base font-semibold tracking-tight mb-0.5">{method.label}</p>
                  <p className="text-gray-400 text-xs font-light truncate">{method.value}</p>
                </div>

                {/* Subtle Background Accent */}
                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/15 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
