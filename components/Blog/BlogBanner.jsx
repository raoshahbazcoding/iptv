"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function BlogBanner() {
    const { language } = useLanguage();
    const t = translations[language].BlogBanner_section; // Corrected translation key

    return (
        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[#050505] flex justify-center items-center py-12 lg:py-36">
                <motion.div 
                    className="relative w-full h-[400px]"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Image
                        src="/blog_image.png" 
                        alt="Blog background"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-20"
                        priority
                    />
                </motion.div>
            </div>

            {/* Text Content with Animation */}
            <motion.div 
                className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
                <motion.h1 
                    className="text-center text-3xl lg:text-6xl font-bold text-[#30a079]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                    IPTV Blog
                </motion.h1>
                <motion.p 
                    className="text-center text-white text-md lg:text-xl font-normal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                >
                    Stay Informed, Entertained, and Connected!
                </motion.p>
            </motion.div>
        </div>
    );
}
