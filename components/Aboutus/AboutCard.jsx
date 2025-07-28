'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';  // Importing framer-motion for animations
import { AmbientBackground } from "@/components/AmbientBackground";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function AboutCard() {
    const { language } = useLanguage();
    const t = translations[language].about_section;
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Trigger when 30% of the component is visible
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, []);
    return (
        <div className="relative w-full h-auto min-h-[677px] flex flex-col justify-center p-4 items-center mt-20 px-10" ref={divRef}>
            <AmbientBackground />

            {isVisible && <motion.div
                className="relative w-full max-sm:[300px] xl:max-w-[1200px] h-[95%]  2xl:max-w-[1500px] bg-[#272626]/80 rounded-[30px] backdrop-blur-[17.3px] py-6 px-4 flex flex-col lg:flex-row items-center lg:items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Image Section */}
                <div className="relative w-full lg:w-[50%] max-w-[671px] h-full flex justify-center items-center">
                    <Image
                        src="./stream_tv.png"
                        alt="Stream Tv About"
                        width={0}
                        height={0}
                        className="relative w-[90%] max-w-[827px] rounded-[11px]"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col items-center lg:items-start w-full lg:w-[50%] text-center lg:text-left">
                    <motion.h1
                        className="text-[#30a079]/10 text-[50px] max-sm:text-[35px] lg:text-[60px] font-bold uppercase Features_label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        {t.Title}
                    </motion.h1>

                    <motion.p
                        className="text-white text-lg font-medium opacity-80 max-w-[641px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        {t.heading}
                    </motion.p>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                        >
                            <div className="relative bg-[#292929] rounded-[10px] border border-white/10 p-6 flex flex-col items-center text-white  py-10 gap-1 cursor-pointer transition-all duration-300 hover:scale-105 h-[95%]">
                                <Image
                                    src="./mission.png"
                                    alt="Our Mission"
                                    width={0}
                                    height={0}
                                    className="object-contain w-16 h-20 rounded-[11px]"
                                />
                                <h2 className="text-2xl font-medium">{t.Our_Mission_Card.title}</h2>
                                <p className="text-base font-normal leading-relaxed mt-4">
                                    {t.Our_Mission_Card.description}
                                </p>
                                <div className="w-[100px] h-[100px] absolute top-[0] right-[0] bg-[#30a079] rounded-full blur-[190px]" />
                            </div>
                        </motion.div>

                        {/* Story Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                        >
                            <div className="relative bg-[#292929] rounded-[10px] border border-white/10 p-6 flex flex-col items-center text-white py-10 gap-1 cursor-pointer transition-all duration-300 hover:scale-105 h-[95%] ">
                                <Image
                                    src="./story.png"
                                    alt="Our Story"
                                    width={0}
                                    height={0}
                                    className="object-contain w-16 h-20 rounded-[11px]"
                                />
                                <h2 className="text-2xl font-medium">{t.Our_Story_Card.title}</h2>
                                <p className="text-base font-normal leading-relaxed mt-4">
                                    {t.Our_Story_Card.description}
                                </p>
                                <div className="w-[100px] h-[100px] absolute top-[-20px] right-[-20px] bg-[#30a079] rounded-full blur-[190px]" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>}
        </div>
    );
}
