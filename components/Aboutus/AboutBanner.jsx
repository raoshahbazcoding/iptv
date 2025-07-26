"use client"

import React from 'react';
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from "framer-motion";

export function AboutBanner() {
    const { language } = useLanguage();
    const t = translations[language].AboutBanner_section;

    return (
        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-[#050505] flex justify-center items-center py-12 lg:py-36">
                <motion.div
                    className="relative w-full h-[400px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}>
                    <Image
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                        src="/Faq-banner.png"
                        alt="Cinema background"
                        layout="fill"
                        priority
                    />
                </motion.div>
            </div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 px-4">
                <motion.h1
                    className="text-center text-3xl lg:text-6xl font-bold text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {t.heading}
                </motion.h1>

                <motion.p
                    className="text-center text-white text-md lg:text-xl font-normal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {t.description}
                </motion.p>
            </div>
        </div>
    );
}