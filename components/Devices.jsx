'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';  // Importing framer-motion for animations
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function Devices() {
  const { language } = useLanguage();
  const t = translations[language].device_section;
  const devices = [
    { name: t.TV, image: "/Tv.png", alt: "Stream on TV" },
    { name: t.Mobiles, image: "/Mobiles.png", alt: "Stream on Mobiles" },
    { name: t.Laptop, image: "/Laptop.png", alt: "Stream on Laptop" },
    { name: t.Desktop, image: "/Desktop.png", alt: "Stream on Desktop" },
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
    <div className="flex flex-col gap-5 py-10 text-white" ref={divRef}>
      {/* Heading Section */}
      {isVisible && <div className="flex w-full flex-col items-center text-center px-4 md:px-8 lg:px-16">
        <motion.div
          className="Features_label border-solid border-emerald-600/50 text-[80px] md:text-[120px] lg:text-[160px] font-bold uppercase text-emerald-600/10 h-16 lg:h-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t.Title}
        </motion.div>

        <motion.div
          className="text-[24px] md:text-[32px] lg:text-[40px] xl:max-w-[1200px] font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {t.heading}
          <span className="text-[#2EAE8C]">{t.highlighted_text}</span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-center max-w-3xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {t.description}
        </motion.p>
      </div>}

      {/* Devices Section */}
      {isVisible && <div className="flex flex-wrap justify-center gap-10 mt-10">
        {devices.map((device, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
          >
            <div className="bg-[#30A179]/20 w-36 h-36 flex justify-center items-center rounded-full transition-all duration-150 cursor-pointer hover:scale-110">
              <Image
                src={device.image}
                alt={device.alt}
                width={device.name == t.Mobiles ? 100 : 120}
                height={device.name == t.Mobiles ? 100 : 120}
                className="object-contain p-5"
              />
            </div>
            <div className="text-3xl font-medium">{device.name}</div>
          </motion.div>
        ))}
      </div>}
    </div>
  );
}
