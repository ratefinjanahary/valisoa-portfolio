"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu lors du changement de section (clic sur un lien)
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Compétences", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? "py-4 bg-base-100/80 backdrop-blur-md shadow-lg" : "py-6 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-primary tracking-wide">
            V<span className="text-accent">alisoa</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="/diary-valisoa-cv.pdf" 
              download="diary-valisoa-cv.pdf" 
              className="btn btn-primary btn-soft gap-2 ml-4"
            >
              <MdOutlineFileDownload size={20} />Mon CV
            </a>
          </div>

          {/* Mobile Right Section */}
          <div className="flex md:hidden items-center gap-2">
            <a 
              href="/diary-valisoa-cv.pdf" 
              download="diary-valisoa-cv.pdf" 
              className="btn btn-primary btn-circle shadow-md"
              aria-label="Télécharger CV"
            >
              <MdOutlineFileDownload size={20} />
            </a>
            <button 
              className="btn btn-ghost btn-circle text-primary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Barre de progression de scroll */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
          style={{ scaleX }}
        />
      </nav>

      {/* Mobile Bottom Sheet Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm md:hidden"
            />
            
            {/* Sheet Panel */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-70 bg-[#1a103d]/95 backdrop-blur-2xl border-t border-primary/30 p-8 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] md:hidden"
            >
              {/* Handle */}
              <div className="w-12 h-1.5 bg-primary/30 rounded-full mx-auto mb-10" />
              
              <ul className="flex flex-col gap-6 items-center">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full text-center"
                  >
                    <Link 
                      href={link.href} 
                      onClick={closeMenu}
                      className="text-lg font-bold hover:text-primary transition-all py-2 block uppercase tracking-widest"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 text-center text-sm opacity-50 tracking-widest">
                Valisoa Portfolio — 2026
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
