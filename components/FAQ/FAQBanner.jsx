"use client"

import React from 'react';
import { motion } from "framer-motion"; // Import Framer Motion
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function FAQBanner() {
    const { language } = useLanguage();
    const t = translations[language].FAQBanner_section;

    return (
        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
            {/* Background Overlay with Zoom Animation */}
            <motion.div 
                className="absolute inset-0 bg-[#050505] flex justify-center items-center py-12 lg:py-36"
                initial={{ scale: 1.2 }} 
                animate={{ scale: 1 }} 
                transition={{ duration: 1.5, ease: "easeOut" }} // Smooth zoom-in effect
            >
                <div className="relative w-full h-[400px]">
                    <motion.img
                        className="absolute inset-0 w-full h-full opacity-40 object-cover"
                        src="./Faq-banner.png"
                        alt="FAQ background"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 1.2 }} // Smooth fade-in
                    />
                </div>
            </motion.div>

            {/* Text Content with Fade-in & Slight Slide-up Animation */}
            <motion.div 
                className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }} // Fade in after slight delay
            >
                <div className="text-center text-6xl font-bold">
                    <span className="text-[#30a079] ">
                        {t.Title}
                    </span>
                </div>
                <div className="text-center text-white text-xl font-normal ">
                    {t.heading}
                </div>
            </motion.div>
        </div>
    );
}
