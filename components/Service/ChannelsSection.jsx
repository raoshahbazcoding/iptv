"use client"

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from "framer-motion";

const countries = [
    "United States", "Canada", "Japan", "Australia", "Italy",
    "South Africa", "India", "Spain", "France", "Germany", "Mexico"
];

const channels = {
    "United States": [
        "LIVE ENTERTAINMENT NETWORK", "FAMILY FUN CHANNEL", "HOME & HEART CHANNEL",
        "FAMILY TIME NETWORK", "FAMILY VIEWING CHANNEL", "FAMILY ADVENTURE NETWORK",
        "FAMILY ENTERTAINMENT CHANNEL", "FAMILY CONNECTIONS CHANNEL",
        "FAMILY HARMONY NETWORK", "FAMILY JOY CHANNEL", "FAMILY DREAMS NETWORK"
    ],
    "Canada": ["Canada Entertainment", "Canada News", "Canada Sports", "Family Channel Canada"],
    "Japan": ["NHK World", "Fuji TV", "TV Asahi", "TBS Japan"],
    "Australia": ["ABC Australia", "SBS Australia", "7 Network", "10 Network"],
    "Italy": ["Rai 1", "Canale 5", "Italia 1", "Sky Italia"],
    "South Africa": ["SABC 1", "eTV", "SuperSport", "Mzansi Magic"],
    "India": ["Star Plus", "Sony TV", "Zee TV", "Colors TV"],
    "Spain": ["La 1", "Antena 3", "Cuatro", "Telecinco"],
    "France": ["TF1", "France 2", "M6", "Canal+"],
    "Germany": ["ZDF", "RTL", "ProSieben", "ARD"],
    "Mexico": ["Televisa", "Azteca Uno", "Las Estrellas", "Imagen TV"]
};

export function ChannelsSection() {
    const { language } = useLanguage()
    const t = translations[language].ChannelsSection_section
    const [selectedCountry, setSelectedCountry] = useState("United States");

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
        <div className="flex flex-col items-center bg-[#0e0e0e] py-16 text-white" ref={divRef}>
            <div className="relative flex flex-col items-center text-center w-full">
                <h1 className="border-emerald-600/50 font-bold uppercase text-emerald-600/10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px]">
                    {t.title}
                </h1>
                <h2 className="text-xs sm:text-base md:text-lg lg:text-2xl font-bold absolute top-[75%] transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-[100%] md:w-full">
                    {t.heading}  <span className="text-[#30a079]">{t.highlighted_text}</span>{t.subheading}
                </h2>
            </div>

            {/* Country Selector & Channel List */}
            {isVisible && <div className="flex flex-col lg:flex-row gap-8 mt-10 w-full max-w-6xl px-5 lg:px-0">

                {/* Country List */}
                <motion.div
                    className="flex flex-col w-full lg:w-1/3 space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {countries.map((country, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col w-auto space-y-2"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div
                                onClick={() => setSelectedCountry(country)}
                                className={`flex items-center justify-between px-6 py-4 text-lg lg:text-xl font-medium rounded-md transition cursor-pointer ${selectedCountry === country ? "bg-[#30a079] text-white" : "bg-[#1b1b1b] text-white hover:bg-[#2e2e2e]"
                                    }`}
                            >
                                {country}
                                <span className="text-lg">▼</span>
                            </div>
                            <motion.div
                                className={`flex-1 bg-[#1b1b1b] rounded-lg p-6 space-y-4 ${selectedCountry === country ? "block lg:hidden" : "hidden"}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                {channels[selectedCountry].map((channel, index) => (
                                    <p key={index} className="text-sm lg:text-xl font-normal">{selectedCountry} – {channel}</p>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Channel Display */}
                <motion.div
                    className="hidden lg:block flex-1 bg-[#1b1b1b] rounded-lg p-6 space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {channels[selectedCountry].map((channel, index) => (
                        <motion.p
                            key={index}
                            className="text-sm lg:text-xl font-normal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {selectedCountry} – {channel}
                        </motion.p>
                    ))}
                </motion.div>

            </div>}
        </div >
    );
}
