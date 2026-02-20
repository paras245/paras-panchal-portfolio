
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TranslationStrings } from '../types';

const projects = [
  {
    id: 1,
    title: "Invoice Management Pro",
    description: "Fintech-grade billing system with server-side reconciliation and transactional accuracy. Built on high-performance .NET architecture.",
    tech: ["ASP.NET Core", "EF Core", "MSSQL", "SignalR"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/paras245/InvoiceManagementPro"
  },
  {
    id: 2,
    title: "Predaking PDF AI Bot",
    description: "Intelligent .NET 9 PDF assistant leveraging AI for semantic document interrogation and context-aware responses.",
    tech: [".NET 9", "AI APIs", "Vector Search"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/paras245/PredakingPDFBot"
  },
  {
    id: 3,
    title: "Burj Khalifa Experience",
    description: "A luxury high-performance landing page inspired by Dubai's architecture, featuring premium animations and seamless UX.",
    tech: ["HTML5", "CSS3", "JS", "GSAP"],
    image: "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?auto=format&fit=crop&q=80&w=800",
    demo: "https://burjkhalifawebsite.netlify.app/"
  },
  {
    id: 4,
    title: "3D Image Slider",
    description: "A cutting-edge 3D visualization component for image portfolios, utilizing advanced CSS transforms and interactive logic.",
    tech: ["React", "CSS3 3D", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    demo: "https://crazy-image-slider-3d.netlify.app/"
  },
  {
    id: 5,
    title: "Union Hardware",
    description: "Full-scale responsive retail portal for industrial hardware distribution, optimized for performance and fluid navigation.",
    tech: ["Angular", "Tailwind CSS", "REST API"],
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
    demo: "https://union-hardware.netlify.app/"
  },
  {
    id: 6,
    title: "Dahilia Creations",
    description: "Enterprise project repository featuring scalable code patterns and mission-critical business logic.",
    tech: [".NET Ecosystem", "C#", "Clean Arch"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/paras245/DahiliaCreations"
  }
];

interface ProjectsProps {
  t: TranslationStrings;
}

const ProjectCard: React.FC<{ p: any, idx: number }> = ({ p, idx }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Alternating parallax direction
  const xRange = idx % 2 === 0 ? [-80, 0] : [80, 0];
  const x = useTransform(scrollYProgress, [0, 0.4], xRange);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{ x, opacity, scale }}
      className="group relative bg-[#141414] border border-[#D4AF37]/10 overflow-hidden flex flex-col rounded-xl shadow-xl hover:shadow-[#D4AF37]/5 transition-all duration-500"
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-95" />
      </div>

      <div className="p-6 flex-grow flex flex-col relative">
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-3 tracking-tight">{p.title}</h3>
        <p className="text-gray-400 mb-6 text-xs md:text-sm leading-relaxed font-light line-clamp-2">{p.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {p.tech.map((tag: string, ti: number) => (
              <span key={ti} className="text-[8px] uppercase tracking-[0.2em] px-2.5 py-1 bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37] font-bold">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-6">
            {p.github && (
              <a href={p.github} target="_blank" className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest hover:text-white flex items-center gap-2 transition-colors">
                Source <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest hover:text-white flex items-center gap-2 transition-colors">
                Live <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Burj accent line */}
      <div className="absolute top-0 right-0 w-[1px] h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-700" />
    </motion.div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ t }) => {
  return (
    <section id="projects" className="py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold gold-shimmer uppercase tracking-[0.2em]">{t.projectsTitle}</h2>
            <p className="text-gray-500 mt-2 font-light tracking-widest text-xs md:text-sm">Scalable Solutions for Global Enterprise</p>
          </motion.div>
          <a href="https://github.com/paras245" target="_blank" className="text-[#D4AF37] hover:underline tracking-widest text-[10px] uppercase font-bold px-4 py-2 border border-[#D4AF37]/20 rounded-sm hover:bg-[#D4AF37]/5 transition-all">
            Explore All Repositories
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} p={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
