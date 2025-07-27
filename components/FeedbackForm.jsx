"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export function FeedbackForm() {
    const { language } = useLanguage();
    const t = translations[language].subscribe_section;
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
        <div className="relative w-full  h-[550px] lg:h-[550px] overflow-hidden" ref={divRef}>
            {/* Background Image */}
            {isVisible && <> 
            <motion.div 
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}>
                <Image
                    src="/Image_Grid.png"
                    width={0}
                    height={0}
                    alt="Background Grid"
                    className="w-full h-[550px] lg:h-[550px] object-cover"
                />
            </motion.div>

             <motion.div
                className="absolute z-10 flex flex-col items-center justify-center px-4 sm:px-12 lg:px-64 text-white top-0 h-[550px] lg:h-[550px] w-full bg-gradient-to-r from-[#041610] via-[#041610]/90 to-[#30a179]/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Form Box */}
                <motion.div
                    className="w-full max-w-4xl p-6 rounded-xl shadow-lg"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2 className="text-left text-white text-2xl lg:text-3xl font-semibold mb-6">
                        Provide Your Feedback
                    </h2>

                    {/* Form Fields */}
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <motion.input
                                type="text"
                                placeholder="First Name"
                                className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/10 focus:outline-none"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                            <motion.input
                                type="text"
                                placeholder="Last Name"
                                className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/10 focus:outline-none"
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                        </div>
                        <motion.input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/10 focus:outline-none"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        />
                        <motion.textarea
                            placeholder="Message"
                            rows={6}
                            className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-white/10 focus:outline-none"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Button className="w-40 h-12 button text-white rounded-full text-md 2xl:text-xl font-medium flex items-center">
                                Submit
                            </Button>
                        </motion.div>
                    </form>
                </motion.div>
            </motion.div></>}
        </div>
    );
}
