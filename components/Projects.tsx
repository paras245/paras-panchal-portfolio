import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { TranslationStrings, Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Dubai Elite Car Rentals",
    badge: "Supercar & Luxury Rental",
    description: "Dubai's premier luxury & sports car rental platform featuring exotic supercars, hypercars, VIP chauffeur booking, and seamless UAE fleet reservations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Netlify", "UAE Fleet"],
    image: "/projects/elite-car-rentals.jpg",
    demo: "https://eliteuae-car-rentals.netlify.app/",
    category: "live",
    featured: true
  },
  {
    id: 2,
    title: "Zenhouz International",
    badge: "Bilingual FMCG Corporate",
    description: "SEO-structured bilingual EN/AR corporate web platform for a Dubai FMCG trading & distribution enterprise — featuring optimized meta tags, Open Graph architecture, and localized content delivery.",
    tech: ["React", "TypeScript", "Tailwind CSS", "SEO / OG", "EN/AR i18n"],
    image: "/projects/zenhouz.jpg",
    demo: "https://zenhouzinternational.netlify.app/en",
    category: "live",
    featured: true
  },
  {
    id: 3,
    title: "UAE Vision Real Estate",
    badge: "Dubai Luxury Property",
    description: "High-end luxury real estate showcase for Dubai premium penthouses and architectural developments, featuring dynamic property discovery, rich gallery views, and mobile-optimized speed.",
    tech: ["React", "Cloud Run", "Tailwind CSS", "REST API", "Luxury UI"],
    image: "/projects/uae-vision-real-estate.jpg",
    demo: "https://uae-vision-real-estate-553525085338.europe-west1.run.app/",
    category: "live",
    featured: true
  },
  {
    id: 4,
    title: "Cosmic Dubai — NASA API Explorer",
    badge: "Space Telemetry & APOD",
    description: "Interactive cosmic exploration application powered by NASA Open APIs, delivering Astronomy Picture of the Day (APOD), Mars Rover telemetry, and celestial observation streams.",
    tech: ["NASA Open APIs", "React", "TypeScript", "Cloud Run", "Data Streams"],
    image: "/projects/nasa-api-explorer.jpg",
    demo: "https://cosmic-dubai-553525085338.europe-west1.run.app/",
    category: "live",
    featured: true
  },
  {
    id: 5,
    title: "RoyalBite Dubai — Gourmet Dining",
    badge: "Culinary & Delivery",
    description: "Premium culinary delivery and dining showcase platform engineered for Dubai foodies, featuring interactive curated menus, chef specials, and instant order integration.",
    tech: ["React", "Tailwind CSS", "Gourmet UX", "Order Integration"],
    image: "/projects/royalbite.jpg",
    demo: "https://royalbite-dubai-premium-uae-food-delivery.ai.studio/",
    category: "live",
    featured: true
  },
  {
    id: 6,
    title: "Paras Panchal Portfolio",
    badge: "Live Production Hub",
    description: "Official interactive portfolio showcasing full-stack .NET & Angular engineering solutions, Dubai career milestones, downloadable credentials, and dual-language design.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
    image: "/projects/paras-portfolio.jpg",
    demo: "https://paras-panchal.netlify.app/",
    category: "live"
  },
  {
    id: 7,
    title: "Invoice Management Pro",
    badge: "Fintech Billing System",
    description: "Fintech-grade billing system with server-side reconciliation and transactional accuracy. Built on high-performance .NET enterprise architecture with SignalR real-time updates.",
    tech: ["ASP.NET Core", "EF Core", "MSSQL", "SignalR"],
    image: "/projects/invoice-management-pro.jpg",
    github: "https://github.com/paras245/InvoiceManagementPro",
    category: "enterprise"
  },
  {
    id: 8,
    title: "Predaking PDF AI Bot",
    badge: "Gen-AI Assistant",
    description: "Intelligent .NET 9 PDF assistant leveraging advanced AI models for semantic document interrogation, vector search queries, and context-aware enterprise responses.",
    tech: [".NET 9", "AI APIs", "Vector Search", "C#"],
    image: "/projects/predaking-pdf-bot.jpg",
    github: "https://github.com/paras245/PredakingPDFBot",
    category: "ai"
  },
  {
    id: 9,
    title: "Burj Khalifa Experience",
    badge: "Architectural Showcase",
    description: "A luxury high-performance landing page inspired by Dubai's iconic architecture, featuring choreographed animations, fluid transitions, and immersive UX.",
    tech: ["HTML5", "CSS3", "JS", "GSAP"],
    image: "/projects/burj-khalifa.jpg",
    demo: "https://burjkhalifawebsite.netlify.app/",
    category: "showcase"
  },
  {
    id: 10,
    title: "3D Image Slider",
    badge: "Interactive 3D CSS",
    description: "Cutting-edge 3D visualization carousel component for media portfolios, utilizing hardware-accelerated CSS transforms and responsive touch logic.",
    tech: ["React", "CSS3 3D", "Framer Motion"],
    image: "/projects/3d-image-slider.jpg",
    demo: "https://crazy-image-slider-3d.netlify.app/",
    category: "showcase"
  },
  {
    id: 11,
    title: "Union Hardware",
    badge: "Retail Distribution",
    description: "Full-scale responsive retail portal for industrial hardware distribution, optimized for high throughput, catalog search, and fluid navigation.",
    tech: ["Angular", "Tailwind CSS", "REST API"],
    image: "/projects/union-hardware.jpg",
    demo: "https://union-hardware.netlify.app/",
    category: "live"
  },
  {
    id: 12,
    title: "Dahilia Creations",
    badge: "Enterprise .NET",
    description: "Enterprise project repository featuring scalable Clean Architecture patterns, domain-driven design, and mission-critical business logic.",
    tech: [".NET Ecosystem", "C#", "Clean Arch"],
    image: "/projects/dahilia-creations.jpg",
    github: "https://github.com/paras245/DahiliaCreations",
    category: "enterprise"
  }
];

type CategoryFilter = 'all' | 'live' | 'enterprise' | 'ai_showcase';

interface ProjectsProps {
  t: TranslationStrings;
}

const ProjectCard: React.FC<{ p: Project; idx: number }> = ({ p, idx }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xRange = idx % 2 === 0 ? [-40, 0] : [40, 0];
  const x = useTransform(scrollYProgress, [0, 0.4], xRange);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.96, 1]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ x, opacity, scale }}
      layout
      className="group relative bg-[#141414] border border-[#D4AF37]/15 hover:border-[#D4AF37]/50 overflow-hidden flex flex-col rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all duration-500"
    >
      {/* Media & Badges */}
      <div className="aspect-video relative overflow-hidden bg-black/40">
        <img 
          src={p.image} 
          alt={p.title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/40 to-transparent opacity-90" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          {p.badge && (
            <span className="text-[9px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 bg-black/80 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] rounded-md">
              {p.badge}
            </span>
          )}
          {p.demo && (
            <span className="ml-auto inline-flex items-center gap-1.5 text-[8px] uppercase tracking-wider font-bold px-2 py-0.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 rounded-full backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col relative z-10">
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2 tracking-tight line-clamp-1">
          {p.title}
        </h3>
        <p className="text-gray-400 mb-5 text-xs leading-relaxed font-light line-clamp-3">
          {p.description}
        </p>

        <div className="mt-auto pt-2">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {p.tech.map((tag: string, ti: number) => (
              <span 
                key={ti} 
                className="text-[8px] uppercase tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 text-gray-300 group-hover:border-[#D4AF37]/20 group-hover:text-[#D4AF37] transition-colors rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-3 border-t border-white/5">
            {p.demo && (
              <a 
                href={p.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#D4AF37] text-black text-[9px] font-bold uppercase tracking-widest hover:bg-[#F9E79F] transition-all rounded"
              >
                View Live Site
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
            {p.github && (
              <a 
                href={p.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#D4AF37]/40 text-[#D4AF37] text-[9px] font-bold uppercase tracking-widest hover:bg-[#D4AF37]/10 transition-all rounded"
              >
                Source Code
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'live') return Boolean(p.demo);
    if (filter === 'enterprise') return p.category === 'enterprise';
    if (filter === 'ai_showcase') return p.category === 'ai' || p.category === 'showcase';
    return true;
  });

  const counts = {
    all: projects.length,
    live: projects.filter((p) => Boolean(p.demo)).length,
    enterprise: projects.filter((p) => p.category === 'enterprise').length,
    ai_showcase: projects.filter((p) => p.category === 'ai' || p.category === 'showcase').length
  };

  return (
    <section id="projects" className="py-28 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">Featured Deployments</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold gold-shimmer uppercase tracking-[0.15em]">{t.projectsTitle}</h2>
            <p className="text-gray-400 mt-2 font-light tracking-wide text-xs md:text-sm max-w-xl">
              Production-grade enterprise architectures, live cloud deployments, and specialized UAE bilingual platforms.
            </p>
          </motion.div>

          <a 
            href="https://github.com/paras245" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#D4AF37] tracking-widest text-[10px] uppercase font-bold px-5 py-2.5 border border-[#D4AF37]/30 rounded hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-2 shadow-lg shadow-black/40"
          >
            Explore All Repositories
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {[
            { id: 'all' as CategoryFilter, label: 'All Projects', count: counts.all },
            { id: 'live' as CategoryFilter, label: 'Live Deployments', count: counts.live },
            { id: 'enterprise' as CategoryFilter, label: 'Enterprise & .NET', count: counts.enterprise },
            { id: 'ai_showcase' as CategoryFilter, label: 'AI & Creative UI', count: counts.ai_showcase }
          ].map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 font-medium ${
                  isActive
                    ? 'bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-bold'
                    : 'bg-[#141414] text-gray-400 hover:text-white border border-white/5 hover:border-[#D4AF37]/30'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <ProjectCard key={p.id} p={p} idx={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
