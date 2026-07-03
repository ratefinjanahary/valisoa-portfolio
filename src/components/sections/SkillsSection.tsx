"use client";

import SectionWrapper from "../layout/SectionWrapper";
import { motion } from "framer-motion";
import { LuDatabase, LuLayoutList, LuServer } from "react-icons/lu";

const skillCategories = [
  {
    title: "Frontend",
    icon: <LuLayoutList className="text-primary" />,
    skills: ["React TS", "Next.js", "TailwindCSS", "Framer Motion", "DaisyUI"]
  },
  {
    title: "Backend",
    icon: <LuServer className="text-secondary" />,
    skills: ["Node.js", "Express", "Prisma", "REST API", "Auth JWT"]
  },
  {
    title: "Database & Tools",
    icon: <LuDatabase className="text-accent" />,
    skills: ["PostgreSQL", "MySQL", "Git / GitHub", "Docker", "Postman"]
  }
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -6, scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-xl bg-base-300/30 backdrop-blur-md border border-white/5 hover:border-primary/40 hover:bg-base-300/50 transition-all duration-200 cursor-default"
          >
            <div className="w-12 h-12 rounded-lg bg-base-300 flex items-center justify-center mb-6 shadow-inner">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              {cat.title}
              <span className="h-px grow bg-white/10"></span>
            </h3>
            <ul className="space-y-4">
              {cat.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-gray-400 font-mono text-sm group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-primary transition-colors"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
