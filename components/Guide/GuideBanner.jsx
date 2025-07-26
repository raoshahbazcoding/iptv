"use client"

import React from 'react';
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from 'framer-motion';

export function GuideBanner() {
    const { language } = useLanguage();
    const t = translations[language].ContactBanner_section;

    return (
        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
            {/* Background Overlay with animation */}
            <motion.div
                className="absolute inset-0 bg-[#131313] flex justify-center items-center py-12 lg:py-36"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="relative w-full h-[400px]">
                    <motion.img
                        className="absolute inset-0 w-full h-full opacity-20 object-cover"
                        src="./Contect_banner.png"
                        alt="Cinema background"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>
            </motion.div>

            {/* Text Content with animation */}
            <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="text-center text-3xl lg:text-6xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="text-[#30a079]">
                        Installation Tutorial
                    </span>
                </motion.div>

                <motion.div
                    className="text-center text-white text-md lg:text-xl font-normal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Setting up your IPTV service with Express IPTV is quick and easy! Follow these simple steps to get started.
                </motion.div>
            </motion.div>
        </div>
    );
}
