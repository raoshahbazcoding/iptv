"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion for animation
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function ContectCard() {
  const { language } = useLanguage();
  const t = translations[language].ContectCard_section;

  const contactInfo = [
    {
      title: t.Mobile_Contect_Card.title,
      value: "+1 (206) 239-254",
      icon: "./call.png", // Replace with an actual icon if using a library like Lucide or FontAwesome
    },
    {
      title: t.Email_Contect_Card.title,
      value: "supports@expressiptv.com",
      icon: "./mail.png",
    },
    {
      title: t.Address_Contect_Card.title,
      value: "2739 Codboro Bay",
      icon: "./address.png",
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
    <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-5 py-12 lg:py-24" ref={divRef}>
      {isVisible && contactInfo.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered delay for smooth effect
        >
          <div className="relative bg-[#292929] rounded-lg border border-white/10 p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-200 hover:scale-105">
          {/* Background Glow Effect */}
          <div className="absolute w-[125px] h-[125px] top-[-50px] right-[20px] bg-[#30a079] rounded-full blur-[120px]" />

          {/* Icon Placeholder */}
          <div className="w-[70px] h-[70px] flex justify-center items-center text-4xl">
            <Image
              src={item.icon}
              alt={item.title}
              className="object-contain w-12 h-12"
              width={0}
              height={0}
            />
          </div>

          {/* Title */}
          <h3 className="text-white text-2xl font-medium mt-4">{item.title}</h3>

          {/* Content */}
          <p className="text-white text-lg opacity-80 mt-2">{item.value}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
