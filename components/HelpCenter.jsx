"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from "framer-motion";

export function HelpCenter() {
    const { language } = useLanguage()
    const t = translations[language].NonStop_Entertainment_section
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
        <div ref={divRef} className='flex justify-center '>
            {isVisible &&
                <motion.div
                    className="flex flex-col lg:flex-row-reverse  max-w-[1400px] 2xl:max-w-[1500px]  bg-neutral-950  py-16 items-center text-white gap-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 0.5 }}
                    >
                        <Image
                            className="lg:hidden w-full  max-w-[787px]   object-cover mt-8 px-4 md:mt-0"
                            src="./NonStopEntertainment.png"
                            alt="Entertainment Preview"
                            width={0}
                            height={0}
                        />
                    </motion.div>

                    <motion.div
                        className="flex flex-col px-2 text-center lg:text-left gap-6 mt-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl/normal font-bold">
                            {t.heading} <br />
                            <span className="text-[#2EAE8C]">{t.highlighted_text}</span>
                        </h2>
                        <p className=" text-lg md:text-2xl">
                            {t.pricing_description}
                            <span className="font-bold text-[#2EAE8C]"> {t.pricing}</span>, {t.pricing_description_othertext}
                        </p>
                        <ul className="space-y-4 text-md md:text-xl xl:text-[16px] text-left">
                            <motion.li className="bg-neutral-800/50 p-4 rounded-lg">{t.option.first_option}</motion.li>
                            <motion.li className="bg-neutral-800/50 p-4 rounded-lg">{t.option.second_option}</motion.li>
                            <motion.li className="bg-neutral-800/50 p-4 rounded-lg">{t.option.third_option}</motion.li>
                        </ul>
                        <motion.div className="flex justify-center lg:justify-start">
                            <motion.button
                                className="button text-white text-xl font-medium rounded-full mt-4 w-40 h-12"
                            >
                                {t.button_text}
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.0, delay: 0.5 }}
                        className='flex justify-center'
                    >
                        <Image
                            className="hidden lg:block w-full md:w-[80%] max-w-[787px] h-auto object-cover mt-8 md:mt-0"
                            src="./NonStopEntertainment.png"
                            alt="Entertainment Preview"
                            width={0}
                            height={0}
                        />
                    </motion.div>
                </motion.div>}
        </div>
    );
}
