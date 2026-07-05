"use client";

import { useState } from "react";
import SectionWrapper from "../layout/SectionWrapper";
import { motion } from "framer-motion";
import { LuMail, LuSend, LuCircleCheck, LuCircleAlert } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://formsubmit.co/ajax/tefyniaina11@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden bg-base-300/40 backdrop-blur-md">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 italic">Parlons <span className="text-primary">Code</span></h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Un projet en tête ou simplement envie de discuter technique ? N'hésitez pas à me laisser un message !
            </p>

            <div className="space-y-6">
              <a href="mailto:tefyniaina11@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="w-10 h-10 text-primary rounded-full bg-base-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <LuMail size={18} />
                </div>
                tefyniaina11@gmail.com
              </a>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/i-m-diary-valisoa" className="btn btn-circle btn-outline btn-md border-white/10 hover:border-primary hover:text-primary">
                  <FaGithub size={18} />
                </a>
                <a href="#" className="btn btn-circle btn-outline btn-md border-white/10 hover:border-primary hover:text-primary">
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* FormSubmit specific hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="form-control">
              <input type="text" name="name" required placeholder="Nom" className="input input-bordered bg-base-300/40 focus:input-primary transition-all rounded-md h-11" disabled={isSubmitting} />
            </div>
            <div className="form-control">
              <input type="email" name="email" required placeholder="Email" className="input input-bordered bg-base-300/40 focus:input-primary transition-all rounded-md h-11" disabled={isSubmitting} />
            </div>
            <div className="form-control">
              <textarea name="message" required placeholder="Message" className="textarea textarea-bordered bg-base-300/40 focus:input-primary transition-all rounded-md h-32" disabled={isSubmitting}></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary w-full h-11 rounded-lg group" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer
                  <LuSend size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="alert alert-success rounded-lg p-3 text-sm flex items-center"
              >
                <LuCircleCheck size={18} />
                <span>Message envoyé avec succès !</span>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="alert alert-error rounded-lg p-3 text-sm flex items-center"
              >
                <LuCircleAlert size={18} />
                <span>Une erreur est survenue lors de l'envoi.</span>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
