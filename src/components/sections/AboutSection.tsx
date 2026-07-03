"use client";

import SectionWrapper from "../layout/SectionWrapper";
import { motion } from "framer-motion";
import TechBadge from "../ui/TechBadge";
import { SiNextdotjs, SiReact, SiTypescript, SiPrisma, SiShadcnui, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiFramer } from "react-icons/si";

export default function AboutSection() {
  const mainTech = [
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
    { name: "Shadcn/ui", icon: SiShadcnui, color: "#FFFFFF" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" }
  ];

  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            <div className="absolute -inset-3 bg-linear-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-800"></div>
            <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden bg-base-300/40 backdrop-blur-md">
              <div className="absolute top-0 right-0 p-4 font-mono text-[80px] opacity-5 select-none">L3</div>
              <h2 className="text-4xl font-bold mb-6">Mon <span className="text-primary">Univers</span></h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Actuellement en <span className="text-accent font-semibold">L3 Informatique</span> (Parcours GBD) à l'ENI Fianarantsoa, je me passionne pour la création d'interfaces web qui sortent de l'ordinaire.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Mon approche combine rigueur technique et créativité visuelle. Je ne me contente pas de coder des fonctionnalités, je conçois des expériences numériques fluides et mémorables.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-accent mb-8 uppercase tracking-widest flex items-center gap-4">
            <span className="h-px w-12 bg-accent"></span>
            Ma Stack Technique
          </h3>
          <div className="flex flex-wrap gap-4">
            {mainTech.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} />
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-2xl bg-base-200/50 border border-white/5">
            "Le code est ma toile, React mon pinceau. J'aime transformer des logiques complexes en interfaces élégantes."
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
