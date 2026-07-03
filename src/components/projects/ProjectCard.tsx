"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuExternalLink, LuX } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative"
      >
        <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        
        <div className="relative glass-card rounded-2xl overflow-hidden h-full flex flex-col border border-white/5 hover:border-primary/30 transition-all duration-500">
          {/* Placeholder pour l'image (en attendant tes vraies images) */}
          <div className="h-48 bg-base-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-t from-base-100 to-transparent opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-bold text-4xl select-none group-hover:scale-110 transition-transform duration-700 uppercase tracking-tighter">
              {project.title}
            </div>
          </div>

          <div className="p-6 grow flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-mono px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-6 grow">{project.description}</p>
            
            <div className="flex items-center gap-4 mt-auto">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-md bg-base-300 hover:bg-primary/20 hover:text-primary transition-all">
                  <FaGithub size={18} />
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-md bg-base-300 hover:bg-primary/20 hover:text-primary transition-all">
                  <LuExternalLink size={18} />
                </a>
              )}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-md font-bold tracking-widest text-accent hover:text-primary transition-colors ml-auto"
              >
                Détails →
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-base-100 rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <h2 className="text-2xl font-bold">{project.title} - Galerie</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full bg-transparent hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <LuX size={24} />
                </button>
              </div>
              
              <div className="overflow-y-auto p-6 grow custom-scrollbar">
                {project.gallery && project.gallery.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((imgSrc, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden bg-base-300 aspect-video relative group">
                        {/* Remplacez par le tag Image de next/image si vous voulez optimiser */}
                        <img 
                          src={imgSrc} 
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                    <p className="mb-2">Les images de ce projet ne sont pas encore disponibles.</p>
                    {/* <p className="text-sm">Ajoutez-les dans le dossier public/images/projects/{project.id}/</p> */}
                  </div>
                )}
                
                <div className="mt-8 p-6 rounded-2xl bg-base-300/15 border border-white/5">
                  <h3 className="text-lg font-semibold mb-2">À propos du projet</h3>
                  <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
