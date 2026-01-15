
import React from 'react';
import { motion } from 'framer-motion';
import { TranslationStrings, SkillCategory } from '../types';

const skillData: SkillCategory[] = [
  { title: "Frontend", skills: ["Angular (v10-v18)", "TypeScript", "JavaScript", "Bootstrap", "Tailwind CSS", "HTML5/CSS3"] },
  { title: "Backend & Frameworks", skills: ["C#", "ASP.NET Core (v6-v9)", "MVC", "Web API", "Minimal APIs", ".NET Framework"] },
  { title: "Database & ORM", skills: ["MS SQL Server", "EF Core", "Dapper ORM", "LINQ", "Vector Search"] },
  { title: "Architecture", skills: ["Clean Architecture", "SOLID Principles", "CQRS", "MediatR", "OOP"] },
  { title: "Real-time & Tooling", skills: ["SignalR", "RabbitMQ", "Swagger", "NUnit", "SonarLint", "IIS Hosting"] },
  { title: "AI & Modern Tools", skills: ["AI API Integration", "GitHub Copilot", "Prompt Engineering", "Jira", "Agile SCRUM"] }
];

interface SkillsProps {
  t: TranslationStrings;
}

const Skills: React.FC<SkillsProps> = ({ t }) => {
  return (
    <section id="skills" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold gold-shimmer mb-4 uppercase tracking-[0.2em]">{t.skillsTitle}</h2>
          <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto opacity-40" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillData.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-[#141414] border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-300 relative group"
            >
              <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center opacity-5 group-hover:opacity-20 transition-opacity">
                 <div className="text-3xl font-black text-[#D4AF37]">0{idx + 1}</div>
              </div>
              <h3 className="text-[#D4AF37] text-lg font-bold mb-6 tracking-widest uppercase">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, si) => (
                  <span key={si} className="text-[10px] py-1.5 px-3 border border-white/5 bg-white/[0.02] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all text-gray-400 font-medium tracking-wide">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
