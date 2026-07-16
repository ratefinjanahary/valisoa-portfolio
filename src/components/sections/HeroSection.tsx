"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TypingEffect from "../ui/TypingEffect";

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 lg:pt-20 lg:pb-0 px-6 overflow-hidden bg-[#0a051d]"
    >

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texte à gauche */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 order-2 lg:order-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#b8a7ff] tracking-tight leading-tight uppercase lg:whitespace-nowrap">
            Développeur créatif
          </h1>
          
          <div className="text-xl md:text-3xl text-[#8e89b2] font-mono min-h-[1.2em]">
            <TypingEffect 
              text="Diary Valisoa, CS Student" 
              loop={true}
              speed={80}
              delay={1000}
            />
          </div>

          <p className="text-lg text-[#8e89b2] max-w-xl leading-relaxed text-justify">
            Je suis un étudiant passionné en L3 Informatique à l'ENI Fianarantsoa. 
            Je me spécialise dans la création d'interfaces modernes et performantes, 
            en transformant des concepts complexes en expériences numériques élégantes.
          </p>

          <motion.div
            whileHover={{ scale: 1.03, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="#projects" 
              className="bg-[#ec4899] text-[#1a103d] font-bold px-14 py-4 rounded-lg text-lg w-fit shadow-lg shadow-pink-500/20 hover:bg-[#f472b6] transition-all"
            >
              Voir mes projets
            </Link>
          </motion.div>
        </motion.div>

        {/* Placeholder Image à droite */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group order-1 lg:order-2"
        >
          <div className="relative w-full aspect-4/5 max-w-[380px] mx-auto lg:mx-0 lg:ml-auto">
            {/* Effet de lueur derrière l'image */}
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-90 group-hover:bg-primary/30 transition-all duration-500" />
            
            {/* Conteneur de l'image (Spider-Man placeholder) */}
            <div className="relative h-full w-full bg-[#130d2d] rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
              <Image
                src="/images/hero-picture.png"
                alt="Photo de Diary Valisoa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Décorations d'arrière-plan */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-500/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full -z-10" />
    </section>
  );
}
