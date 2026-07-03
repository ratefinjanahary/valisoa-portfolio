"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

export default function TechBadge({ name, icon: Icon, color }: { name: string, icon?: IconType, color?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-4 py-2 rounded-lg bg-base-300/50 backdrop-blur-sm border border-primary/30 text-sm font-mono text-white flex items-center gap-2 hover:border-primary hover:bg-primary/10 transition-all cursor-default group"
    >
      {Icon ? (
        <Icon 
          className="text-xl transition-transform group-hover:scale-110" 
          style={{ color: color || "currentColor" }}
        />
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      )}
      {name}
    </motion.div>
  );
}
