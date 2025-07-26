"use client";

import React from 'react';
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from "framer-motion";

export function ContectBanner() {
  const { language } = useLanguage();
  const t = translations[language].ContactBanner_section;

  return (
    <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#050505] flex justify-center items-center py-12 lg:py-36">
        <motion.div
          className="relative w-full h-[400px]"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            className="absolute inset-0 w-full h-full opacity-40 object-cover"
            src="./Contect_banner.png"
            alt="Cinema background"
          />
        </motion.div>
      </div>
      
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4">
        <motion.div
          className="text-center text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-[#30a079] ">
            {t.Title}
          </span>
        </motion.div>
        
        <motion.div
          className="text-center text-white text-xl font-normal"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {t.heading}
        </motion.div>
      </div>
    </div>
  );
}
