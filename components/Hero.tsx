import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TranslationStrings } from "../types";

interface HeroProps {
  t: TranslationStrings;
  lang: "en" | "ar";
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = t.heroTitle;
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Subtitle Loop
  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % t.heroSubtitle.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [t.heroSubtitle]);

  // Continuous Typing Animation Loop
  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setTypedName(fullName.slice(0, typedName.length + 1));
        setTypingSpeed(100);

        if (typedName === fullName) {
          // Pause at the end
          setTimeout(() => setIsDeleting(true), 3000);
          setTypingSpeed(500);
        }
      } else {
        // Deleting
        setTypedName(fullName.slice(0, typedName.length - 1));
        setTypingSpeed(50);

        if (typedName === "") {
          setIsDeleting(false);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedName, isDeleting, fullName, typingSpeed]);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 md:pt-20 overflow-hidden px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative z-10 order-2 lg:order-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            className="text-[#D4AF37] font-medium tracking-[0.4em] uppercase mb-4 text-[10px] md:text-sm"
          >
            {t.location}
          </motion.p>

          <div className="min-h-[80px] md:min-h-[120px] flex flex-col justify-center">
            <h1
              className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-tight whitespace-nowrap overflow-visible ${lang === "ar" ? "font-arabic" : "font-english"
                }`}
            >
              <span className="gold-shimmer">{typedName}</span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={subtitleIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-base md:text-2xl text-[#D4AF37]/80 font-light italic"
              >
                {t.heroSubtitle[subtitleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-lg mx-auto lg:mx-0 text-sm md:text-lg leading-relaxed mb-10 md:mb-12 font-light"
          >
            {t.heroIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center lg:justify-start"
          >
            <a
              href="/images/Resume/PARAS PANCHAL_FullStackResume.pdf"
              download="PARAS PANCHAL_FullStackResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-[#F9E79F] transition-all flex items-center justify-center gap-3"
            >
              {t.resumeBtn}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center"
            >
              {t.projectsBtn}
            </a>
          </motion.div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.1 }}
            className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden group border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,175,55,0.3)]"
          >
            {/* Image */}
            <img
              src="/images/heroimage.jpeg"
              alt="Paras Panchal"
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out" />

            {/* Inner Gold Border */}
            <div className="absolute inset-0 border-[1px] border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-3xl m-3 pointer-events-none transition-all duration-700" />

            {/* Bottom Gradient for seamless blending */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#D4AF37]/40 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-[#D4AF37]/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
