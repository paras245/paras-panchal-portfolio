
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
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
      location: "Ahmedabad (US Healthcare Project)",
      period: "06/2023 - 11/2025",
      details: [
        "Architected RESTful APIs for 'Precise RadFlow 360', a US-based radiology platform (MRI, X-RAY, CT).",
        "Optimized data management with Dapper ORM/EF Core and integrated SignalR for real-time patient record updates.",
        "Integrated enterprise tools: Keploy, Entelligence AI, QuickBooks, RabbitMQ, Temporal, Bitwarden, Tebra API, and NDepend.",
        "Implemented Infinite Scrolling in DevExtreme Grid and built automated Cron Jobs for case management.",
        "Engineered secure medical file upload systems and ID-based data normalization strategies.",
        "Led .NET Core 6 to 8 upgrades and Angular 10 to 18 migrations while maintaining high code quality via SonarLint."
      ],
      tech: "C#, .NET Core 6/8, Angular, MSSQL, SignalR, Dapper, EF Core, RabbitMQ, NUnit"
    },
    {
      role: "Software Trainee",
      company: "TechnoBrains Business Solutions",
      link: "https://technobrains.io/",
      location: "Ahmedabad, India",
      period: "03/2023 - 06/2023",
      details: [
        "Mastered OOP principles, SOLID design patterns, and C# fundamentals for enterprise scalability.",
        "Developed RESTful Web APIs using both Controller-based and Minimal API architectures.",
        "Built expertise in MSSQL (Stored Procedures, Triggers) and frontend development with Angular.",
        "Practiced professional DevOps workflows with Git, IIS deployment, and Agile SCRUM."
      ],
      tech: "C#, .NET Core, Web API, MVC, Angular, MSSQL, EF Core, Git, LINQ"
    },
    {
      role: "Intern",
      company: "SushmaTechnology",
      link: "https://sushmatechnology.com/",
      location: "Mumbai, India",
      period: "6-Month Internship",
      details: [
        "Foundation in .NET Framework and web development essentials (HTML, CSS, JS/jQuery).",
        "Implemented CRUD operations and AJAX-based client-server communication.",
        "Contributed to database operations using MSSQL and participated in debugging sessions."
      ],
      tech: ".NET Framework, C#, MSSQL, jQuery, AJAX, HTML/CSS"
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
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
