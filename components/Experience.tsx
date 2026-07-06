
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TranslationStrings } from '../types';

interface ExperienceProps {
  t: TranslationStrings;
}

// Added React.FC to sub-component to ensure reserved props like 'key' are handled correctly by the JSX compiler.
const ExperienceItem: React.FC<{ exp: any, i: number }> = ({ exp, i }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const xValue = i % 2 === 0 ? 50 : -50;
  const x = useTransform(scrollYProgress, [0, 1], [xValue, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="relative ltr:pl-10 md:ltr:pl-12 rtl:pr-10 md:rtl:pr-12 group"
    >
      <div className="absolute ltr:left-[-4px] rtl:right-[-4px] top-2 w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
        <div>
          <span className="text-[10px] text-[#D4AF37] font-bold tracking-[0.2em] mb-1 block">{exp.period}</span>
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:gold-shimmer transition-all">{exp.role}</h3>
          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-base md:text-lg text-[#D4AF37]/80 font-medium hover:underline flex items-center gap-2">
            {exp.company}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
        <div className="text-left md:text-right">
          <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 border border-white/10">{exp.location}</span>
        </div>
      </div>

      <ul className="space-y-2 md:space-y-3 mb-6">
        {exp.details.map((detail: string, di: number) => (
          <li key={di} className="text-gray-400 text-xs md:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-[#D4AF37] mt-1.5">•</span>
            {detail}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="text-[9px] md:text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest mr-2">Core Stack:</span>
        {exp.tech.split(', ').map((t: string, ti: number) => (
          <span key={ti} className="text-[8px] text-gray-500 border border-white/10 px-2 py-0.5 rounded-sm">{t}</span>
        ))}
      </div>
    </motion.div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ t }) => {
  const experiences = [
    {
      role: "Junior Software Developer",
      company: "TechnoBrains Business Solutions",
      link: "https://technobrains.io/",
      location: "Ahmedabad, India (US Healthcare Platform - Precise Imaging RadFlow 360)",
      period: "03/2024 - Present",
      details: [
        "Architected and delivered RESTful API endpoints using .NET Core 6/8, applying OOP, SOLID principles, JWT-based authentication and authorization, CORS configuration, and async/await patterns for high-throughput scalable workflows.",
        "Migrated production .NET Core 6 APIs to .NET 8 using the .NET Upgrade AI Assistant, and assisted in upgrading the Angular frontend from v10 to v18, reducing build size and extending the Microsoft support lifecycle.",
        "Assisted in integrating third-party services including QuickBooks, RabbitMQ, Temporal, Bitwarden Secret Manager, Tebra API, Keploy, Entelligence AI, JSDelivr, and NDepend into the live platform.",
        "Implemented SignalR real-time notifications for patient record updates, eliminating polling and delivering instant updates across active user sessions.",
        "Designed an ID-based data normalization strategy using master tables, replacing name-based references and improving data consistency across the system.",
        "Built a secure patient document upload and folder management system enabling clinical staff to store, browse, and download documents directly from the frontend.",
        "Developed optimized stored procedures, indexed views, triggers, and transactions in MSSQL Server for high-volume healthcare data.",
        "Implemented Infinite Scrolling in DevExtreme Grid with dynamic record fetching and append logic for large patient datasets.",
        "Built automated Cron Jobs for scheduled payment case tracking email notifications.",
        "Developed an admin user-log module capturing login events including IP address, browser, device information, and authentication method.",
        "Wrote NUnit unit tests for .NET Core Web API endpoints to improve reliability and regression testing.",
        "Leveraged GitHub Copilot, Claude Code, and ChatGPT throughout the development cycle to accelerate code generation, code reviews, and debugging."
      ],
      tech: "C#, .NET Core 6/8, Angular 18, MSSQL Server, EF Core, Dapper, SignalR, RabbitMQ, Temporal, NUnit"
    },
    {
      role: "Software Trainee",
      company: "TechnoBrains Business Solutions",
      link: "https://technobrains.io/",
      location: "Ahmedabad, India",
      period: "03/2023 - 02/2024",
      details: [
        "Completed intensive full-stack training in .NET Core, C#, Web API, Angular, and MSSQL Server.",
        "Delivered end-to-end sample applications covering RESTful API development, Angular UI integration, and relational database design.",
        "Collaborated using Git-based version control workflows and Agile development practices."
      ],
      tech: "C#, .NET Core, Web API, Angular, MSSQL Server, EF Core, Git"
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold gold-shimmer uppercase tracking-[0.2em]">{t.experienceTitle}</h2>
        </motion.div>

        <div className="relative max-w-5xl">
          <div className="absolute ltr:left-0 rtl:right-0 top-0 w-[1px] h-full bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
