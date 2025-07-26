"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from "framer-motion";

export function Count() {
    const { language } = useLanguage();
    const t = translations[language].Count_section;

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
        <div ref={divRef} className="w-full px-4 py-10 lg:py-20 xl:px-16 2xl:px-64 flex flex-col xl:flex-row items-center justify-center gap-10 2xl:gap-20">
            
            {/* Mobile View */}
            <div className="px-5 w-full lg:w-[40%] mt-10 lg:hidden">
                {isVisible && <motion.div
                    className="flex justify-center w-full z-50 gap-2 -ml-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="bg-[#30A179] w-60 h-36 rounded-2xl flex flex-wrap gap-0 pl-8 pt-5">
                        <motion.h2
                            className="text-[50px] font-bold text-left h-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            10K+
                        </motion.h2>
                        <motion.h2
                            className="text-xl font-medium text-left"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            {t.Live_tv_Channel}
                        </motion.h2>
                    </div>
                    <div className="w-32 h-32 bg-gradient-to-r from-[#0C2D2C]/50 to-[#0C2D2C]/10 rounded-2xl -mt-7 flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            <Image src="./live.png" alt="Live Icon" className="w-24 h-2w-24 object-contain" width={0} height={0} />
                        </motion.div>
                    </div>
                </motion.div>}

                {isVisible && <motion.div
                    className="flex w-full -mt-5 gap-2 -ml-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className="w-32 h-32 bg-gradient-to-l from-[#0C2D2C]/50 to-[#0C2D2C]/10 rounded-2xl mt-7 flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            <Image src="./vod.png" alt="VOD Icon" className="w-24 h-2w-24 object-contain" width={0} height={0} />
                        </motion.div>
                    </div>
                    <div className="bg-[#0C2D2C] w-60 h-36 rounded-2xl flex flex-wrap gap-0 pl-8 pt-5">
                        <motion.h2
                            className="text-[50px] font-bold text-left h-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.4 }}
                        >
                            100K+
                        </motion.h2>
                        <motion.h2
                            className="text-xl font-medium text-left"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.6 }}
                        >
                            {t.Movie_TV_Shows}
                        </motion.h2>
                    </div>
                </motion.div>}
            </div>

            {/* Desktop View */}
            <div className="w-full md:w-[50%] flex flex-col gap-10 text-white">
                {isVisible && <motion.h1
                    className="text-3xl lg:text-4xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-[#30a079]">{t.highlighted_text}</span> {t.heading}
                </motion.h1>}
                {isVisible && <motion.p
                    className="text-lg md:text-xl text-white/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {t.description}
                </motion.p>}
                <div className="pt-4 w-full flex lg:justify-start">
                    {isVisible && <motion.button
                        className="button text-white text-lg px-6 md:px-10 py-3 rounded-full transition-all duration-300 shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        {t.button_text}
                    </motion.button>}
                </div>
            </div>

            {/* Desktop View - Second set */}
            <div className="px-5 w-full lg:w-[40%] ml-40 mt-10 hidden lg:block">
                {isVisible && <motion.div
                    className="flex w-full -ml-20 z-50 gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.8 }}
                >
                    <div className="bg-[#30A179] w-60 h-36 rounded-2xl flex flex-wrap gap-0 pl-8 pt-5">
                        <motion.h2
                            className="text-[50px] font-bold text-left h-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2 }}
                        >
                            10K+
                        </motion.h2>
                        <motion.h2
                            className="text-xl font-medium text-left"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2.2 }}
                        >
                            {t.Live_tv_Channel}
                        </motion.h2>
                    </div>
                    <div className="w-32 h-32 bg-gradient-to-r from-[#0C2D2C]/50 to-[#0C2D2C]/10 rounded-2xl -mt-7 flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2.4 }}
                        >
                            <Image src="./live.png" alt="Live Icon" className="w-24 h-2w-24 object-contain" width={0} height={0} />
                        </motion.div>
                    </div>
                </motion.div>}

                {isVisible && <motion.div
                    className="flex w-full -mt-5 -ml-20 gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.6 }}
                >
                    <div className="w-32 h-32 bg-gradient-to-l from-[#0C2D2C]/50 to-[#0C2D2C]/10 rounded-2xl mt-7 flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 2.8 }}
                        >
                            <Image src="./vod.png" alt="VOD Icon" className="w-24 h-2w-24 object-contain" width={0} height={0} />
                        </motion.div>
                    </div>
                    <div className="bg-[#0C2D2C] w-60 h-36 rounded-2xl flex flex-wrap gap-0 pl-8 pt-5">
                        <motion.h2
                            className="text-[50px] font-bold text-left h-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 3 }}
                        >
                            100K+
                        </motion.h2>
                        <motion.h2
                            className="text-xl font-medium text-left"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 3.2 }}
                        >
                            {t.Movie_TV_Shows}
                        </motion.h2>
                    </div>
                </motion.div>}
            </div>
        </div>
    );
}
