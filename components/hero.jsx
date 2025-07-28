'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from 'framer-motion';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero_section;

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Ensure the animation starts after the component has mounted
    const timeout = setTimeout(() => setHasLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-screen h-[1000px] overflow-hidden bg-black">
      {/* Background Image Container */}
      <div className={`grid lg:grid-cols-2 lg:absolute top-0 right-0 w-full lg:w-2/3 lg:h-screen md:h-[30%] h-[25%] transition-all duration-1000 transform ${hasLoaded ? 'scale-[1.7] lg:scale-105 opacity-100' : ' scale-[2.0] lg:scale-110 opacity-0'}`}>
        <Image
          src="/Image_Container.png" // Ensure the image is in /public folder
          alt="Streaming device showing sports content"
          fill
          quality={100}
          priority
          className="lg:object-cover object-contain lg:h-screen object-top mt-10"
        />
        {/* Gradient Overlay */}
        <div className="hero-section opacity-0 lg:opacity-100" />
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-6 sm:px-10 flex items-center">
        <div className="w-full md:w-[90%] lg:w-[70%] space-y-6 md:space-y-8">
          <motion.h1
            className="text-2xl md:text-5xl  xl:text-6xl/[1.3] font-semibold leading-tight text-white text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {t.heading}
            <span className="text-[#2EAE8C] block mt-2">{t.highlighted_text}</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-sm md:text-lg lg:text-xl max-w-2xl leading-relaxed text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            {t.subheading}
          </motion.p>

          <motion.div
            className="pt-4 w-full h-14 flex lg:justify-start justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.3 }}
          >
            <Button className="button text-white text-lg w-50  h-12 rounded-full transition-all duration-300 shadow-lg">
              {t.button_text}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
