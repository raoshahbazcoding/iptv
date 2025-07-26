"use client"

import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from "framer-motion";

export function ServiceBanner() {
    const { language } = useLanguage()
    const t = translations[language].ServiceBanner_section

    return (
        <section className="relative w-full h-[85vh] sm:h-[90vh] lg:h-screen overflow-hidden bg-black">
            {/* Background Image Container */}
            <motion.div 
                className="grid lg:grid-cols-2 lg:absolute top-0 right-0 w-full lg:w-2/3 lg:h-screen md:h-[30%] h-[25%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <Image
                    src="/service.png" // Ensure the image is in /public folder
                    alt="Streaming device showing sports content"
                    fill
                    quality={100}
                    priority
                    className="lg:object-cover object-contain lg:h-screen object-top mt-10"
                />
                {/* Gradient Overlay */}
                <div className="hero-section opacity-0 lg:opacity-100" />
            </motion.div>

            {/* Content Container */}
            <div className="relative h-full container mx-auto px-6 sm:px-10 flex items-center">
                <div className="w-full md:w-[90%] lg:w-[50%] space-y-6 md:space-y-8">
                    <motion.h1
                        className="text-2xl md:text-5xl/[1.2] font-bold text-white text-center lg:text-left"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        {t.title} <span className="text-[#2EAE8C] block mt-2">{t.heading}</span> {t.highlighted_text}
                        <span className="text-[#2EAE8C] block mt-2">{t.subheading}</span>
                    </motion.h1>

                    <motion.p
                        className="text-gray-300 text-sm md:text-lg max-w-2xl leading-relaxed text-center lg:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        {t.description}
                    </motion.p>

                    <motion.div
                        className="pt-4 w-full flex lg:justify-start justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.4, ease: "easeInOut" }}
                    >
                        <Button className="button text-white text-lg w-40 h-12 rounded-full transition-all duration-300 shadow-lg">
                            {t.button_text}
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
