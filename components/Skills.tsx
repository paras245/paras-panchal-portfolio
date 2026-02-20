
import React from 'react';
import { motion } from 'framer-motion';
import { TranslationStrings, SkillCategory } from '../types';

const skillData: SkillCategory[] = [
  { title: "Languages", skills: ["C#", "JavaScript", "TypeScript", "Python", "Java"] },
  { title: "Backend", skills: [".NET Core / ASP.NET Web API", "REST", "SOAP", "GraphQL", "MVC"] },
  { title: "Frontend", skills: ["Angular", "React (foundational)", "HTML5", "CSS3", "Bootstrap", "Tailwind"] },
  { title: "Databases & ORM", skills: ["MSSQL Server", "Relational Db", "Entity Framework Core", "Dapper"] },
  { title: "Architecture", skills: ["RESTful APIs", "Microservices basics", "OOP", "Clean Architecture", "SOLID Principle"] },
  { title: "Messaging & Realtime", skills: ["SignalR", "RabbitMQ", "Temporal", "Background Jobs"] },
  { title: "AI & Dev Tools", skills: ["Github Copilot", "ChatGPT", "Claude", "Gemini", "Grok", "Antigravity", "WindSurf"] },
  { title: "Tools & Cloud", skills: ["Git", "GitHub", "IIS", "Swagger", "Jira", "Agile/Scrum", "Bitbucket", "Slack", "Docker", "Postman", "PowerBI"] }
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
