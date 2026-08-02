"use client";

import SectionWrapper from "../layout/SectionWrapper";
import ProjectCard from "../projects/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-base-100/30">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">
            Mes <span className="text-primary">Réalisations</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-md">
            Une sélection de projets où j'ai pu exprimer ma créativité technique et résoudre des problématiques complexes.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
