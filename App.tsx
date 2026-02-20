
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from './types';
import { translations } from './translations';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AiTech from './components/AiTech';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = useMemo(() => translations[lang], [lang]);
  const isRtl = lang === 'ar';

  return (
    <div className={`min-h-screen selection:bg-[#D4AF37] selection:text-black ${isRtl ? 'font-arabic' : 'font-english'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-[#D4AF37]/20 py-4' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-bold gold-shimmer tracking-tighter"
          >
            P. PANCHAL
          </motion.div>

          <div className="hidden lg:flex gap-8 text-[10px] md:text-xs font-medium uppercase tracking-widest items-center">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">{t.navAbout}</a>
            <a href="#skills" className="hover:text-[#D4AF37] transition-colors">{t.navSkills}</a>
            <a href="#projects" className="hover:text-[#D4AF37] transition-colors">{t.navProjects}</a>
            <a href="#experience" className="hover:text-[#D4AF37] transition-colors">{t.navExperience}</a>
            <a href="#contact" className="px-5 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
              {t.navContact}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#141414] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all rounded-full group"
            >
              <span className="text-[10px] md:text-xs uppercase group-hover:text-[#D4AF37] transition-colors">
                {lang === 'en' ? 'العربية' : 'English'}
              </span>
            </button>

            <button className="lg:hidden text-[#D4AF37]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black border-b border-[#D4AF37]/20 px-6 py-8 flex flex-col gap-6 uppercase text-[10px] tracking-widest"
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.navAbout}</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>{t.navSkills}</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t.navProjects}</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)}>{t.navExperience}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#D4AF37]">{t.navContact}</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="burj-line left-[10%] top-0 h-screen" />
        <div className="burj-line left-[40%] top-0 h-screen" />
        <div className="burj-line left-[70%] top-0 h-screen" />
        <div className="burj-line left-[90%] top-0 h-screen" />
      </div>

      <main className="relative z-10">
        <Hero t={t} lang={lang} />
        <About t={t} />
        <Skills t={t} />
        <Experience t={t} />
        <Projects t={t} />

        <AiTech t={t} />

        {/* Certification Section - Glassmorphic (Moved to end of project content) */}
        <section className="py-24 relative px-6 overflow-hidden">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col gap-12">
              {[
                {
                  title: "Azure AI Essentials Professional",
                  issuer: "LinkedIn Learning | Microsoft",
                  desc: "Validated by LinkedIn Learning & Microsoft for expertise in Azure AI.",
                  tags: ["AI", "Microsoft Azure", "Professional"],
                  image: "/images/Certifactesjpg/1stCertificate.jpg",
                  url: "https://www.linkedin.com/learning/certificates/dffc54b7f7cb4e58b56269fc5d6eec4d7edee11fcd7426666ccb79dd4b01151d?trk=share_certificate",
                  delay: 0
                },
                {
                  title: "Azure AI Workloads & ML",
                  issuer: "LinkedIn Learning | Microsoft",
                  desc: "Validated by LinkedIn Learning & Microsoft for expertise in Machine Learning Workloads on Azure.",
                  tags: ["Machine Learning", "Azure", "AI Workloads"],
                  image: "/images/Certifactesjpg/2ndCertificate.jpg",
                  url: "https://www.linkedin.com/learning/certificates/22dce11d0db1634c09baa1c4cb30c50e2e35dedbc963f75ff2952fc0c88e139e?trk=share_certificate",
                  delay: 0.1
                },
                {
                  title: "Practical GitHub Actions",
                  issuer: "LinkedIn Learning",
                  desc: "Validated by LinkedIn Learning for expertise in CI/CD automation with GitHub Actions.",
                  tags: ["CI/CD", "GitHub Actions", "DevOps"],
                  image: "/images/Certifactesjpg/3rdCertificate.jpg",
                  url: "https://www.linkedin.com/learning/certificates/487386563fb06e1d09964b0c44a7a872f547c1cb8a204af36038d90eb2bbb8f6?trk=share_certificate",
                  delay: 0.2
                }
              ].map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: cert.delay }}
                  className="glassmorphism p-6 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden"
                >
                  {/* Decorative glow */}
                  <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-[100px]" />

                  <div className={`w-full md:w-1/2 relative group ${idx % 2 === 1 ? 'md:order-last' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, rotateY: 5 }}
                      className="relative overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-white/5 perspective-1000 aspect-[4/3] flex items-center justify-center p-2"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <span className="text-white text-[10px] uppercase tracking-widest font-bold">{cert.issuer}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.4em] mb-4">Industrial Certification</h4>
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight mobile-text-wrap">{cert.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-light">
                      {cert.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-10">
                      {cert.tags.map((tag) => (
                        <span key={tag} className="text-[8px] px-3 py-1.5 rounded-full border border-white/10 text-[#D4AF37] uppercase tracking-widest bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 px-8 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#F9E79F] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#D4AF37]/20"
                    >
                      Verify Certification
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact t={t} />
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-[#D4AF37]/10 bg-black text-center">
        <div className="container mx-auto px-6">
          <p className="text-[#D4AF37]/60 text-sm tracking-widest mb-6">PARAS PANCHAL &copy; 2026</p>
          <div className="flex justify-center gap-8">
            <a href="https://github.com/paras245" target="_blank" className="hover:text-[#D4AF37] transition-colors text-[10px] tracking-widest">GITHUB</a>
            <a href="https://www.linkedin.com/in/paras-panchal-718679223/" target="_blank" className="hover:text-[#D4AF37] transition-colors text-[10px] tracking-widest">LINKEDIN</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
