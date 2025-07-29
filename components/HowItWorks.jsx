"use client"

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function HowItWorks() {
    const { language } = useLanguage();
    const t = translations[language].HowItWorks_section;
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
        <div className="w-full  h-auto px-6 py-10 lg:py-20 flex flex-col justify-center items-center gap-6 lg:gap-[43px] overflow-hidden" ref={divRef}>
            {/* Heading Section */}
            <div className="relative flex flex-col items-center text-center w-full px-4">
                <h1 className="Features_label border-emerald-600/50 font-bold uppercase text-emerald-600/10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px]">
                    {t.Title}
                </h1>
                <h2 className="text-xs sm:text-base md:text-lg lg:text-2xl font-bold absolute top-[75%] transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
                    {t.heading}
                </h2>
            </div>
            {/* Cards Section */}
            <div className="w-full  flex  justify-center items-center xl:max-w-[1200px] 2xl:w-[1500px] max-sm:gap-6 gap-12 max-sm:flex-col">
                {isVisible && [{
                    id: 1,
                    img: "./mission.png",
                    alt: "Our Mission",
                    title: t.Choose_Your_Plan_Card.title,
                    description: t.Choose_Your_Plan_Card.description,
                    desktopAnimation: { x: [-80, 0], opacity: [0, 1] },
                    mobileAnimation: { y: [-80, 0], opacity: [0, 1] }
                }, {
                    id: 2,
                    img: "./StepIcon.png",
                    alt: "Make the Payment",
                    title: t.Make_the_Payment_Card.title,
                    description: t.Make_the_Payment_Card.description,
                    desktopAnimation: { scale: [0.8, 1], opacity: [0, 1] },
                    mobileAnimation: { scale: [0.8, 1], opacity: [0, 1] }
                }, {
                    id: 3,
                    img: "./Enjoy_Now.png",
                    alt: "Enjoy Now",
                    title: t.Enjoy_Now_Card.title,
                    description: t.Enjoy_Now_Card.description,
                    desktopAnimation: { x: [80, 0], opacity: [0, 1] },
                    mobileAnimation: { y: [80, 0], opacity: [0, 1] }
                }].map(({ id, img, alt, title, description, desktopAnimation, mobileAnimation }) => (
                    <motion.div
                        key={id}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: window.innerWidth < 640 ? mobileAnimation : desktopAnimation,
                            visible: { opacity: 1, x: 0, y: 0, scale: 1 }
                        }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        className="max-sm:w-full sm:gap-2 h-[480px] relative"
                    >
                        <div className=" sm:w-[450px] xl:w-[350px] 2xl:w-[450px] h-[450px] relative bg-[#292929] rounded-[10.96px] border border-white/10 overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105">
                            <div className="absolute left-[24px] top-16 h-[190.83px] p-[10.96px] flex flex-col justify-start items-start gap-[10.96px]">
                                <div className="flex flex-col justify-start items-start gap-2">
                                    <Image src={img} alt={alt} width={0} height={0} className="object-contain w-16 h-20 rounded-[11px]" />
                                    <div className="text-white text-[32.87px] font-medium">{title}</div>
                                    <div className=" text-white text-md font-normal leading-7 pr-5">{description}</div>
                                </div>
                            </div>
                            <div className="absolute lg:left-[274px] left-[80%] top-[10px] opacity-10 text-white text-[70px] md:text-[100px] font-bold leading-[137.69px]">
                                {id}.
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
