"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from "framer-motion";

export function OurValuesCard() {
    const { language } = useLanguage();
    const t = translations[language].OurValuesCard_section;

    const values = [
        {
            title: t.Customer_Centricity_Card.title,
            description: t.Customer_Centricity_Card.description,
            imageSrc: "/Customer-Centricity.png",
        },
        {
            title: t.Quality_Reliability_Card.title,
            description: t.Quality_Reliability_Card.description,
            imageSrc: "/Quality&Reliability.png",
        },
        {
            title: t.Innovation_Card.title,
            description: t.Innovation_Card.description,
            imageSrc: "/Innovation.png",
        },
    ];

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
        <div className="w-full max-w-[1920px] px-6 lg:px-16 py-10 lg:py-20 flex flex-col justify-start items-center gap-10" ref={divRef}>
            {/* Heading Section */}
            <div className="relative flex flex-col items-center text-center w-full px-4">
                <h1 className="Features_label text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px]">
                    {t.Title}
                </h1>
                <h2 className="text-xs sm:text-base md:text-lg lg:text-4xl font-semibold absolute top-[75%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] md:w-full">
                    {t.heading}
                </h2>
            </div>

            {/* Cards Section */}
            <div className="flex flex-wrap gap-8 w-full justify-center pt-10">
                {isVisible && values.map((value, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}>
                        <div className="relative w-full sm:max-w-[380px] min-h-[320px] bg-[#292929] rounded-[12px] border border-white/10 p-6 flex flex-col gap-4 shadow-lg cursor-pointer hover:scale-105 transition-all duration-200">
                            <Image
                                src={value.imageSrc}
                                alt={value.title}
                                width={64}
                                height={80}
                                className="object-contain w-16 h-20 rounded-lg"
                            />

                            {/* Title */}
                            <h3 className="text-white text-2xl font-medium leading-relaxed">
                                {value.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white text-md font-normal leading-7">
                                {value.description}
                            </p>

                            {/* Background Blur Effect */}
                            <div className="absolute right-0 top-0 w-[130px] h-[130px] bg-[#30a079] rounded-full blur-[180px]" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
