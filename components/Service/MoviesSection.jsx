"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from "framer-motion";

export function MoviesSection() {
  const { language } = useLanguage();
  const t = translations[language].MoviesSection_section;
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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
    <div ref={divRef} className="w-screen h-auto flex flex-col items-center relative overflow-hidden">
      <Image
        src="/block.png"
        alt="Background"
        width={0}
        height={0}
        objectFit="cover"
        className="absolute z-0 w-full h-[97.3%]"        
      />

      {isVisible && (
        <motion.div
          className="relative flex flex-col items-center text-center w-full px-4 py-6 lg:py-12 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="movie_label text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] text-white/10">
            {t.title}
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl font-semibold -mt-5 lg:-mt-11">
            {t.heading}
          </h2>
        </motion.div>
      )}

      {/* Movie Posters Scroll */}
      <div className="relative w-full overflow-hidden">
        {isVisible && (
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...Array(8), ...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                className="rounded-lg flex-shrink-0 w-[85px] h-[136px] sm:w-[120px] sm:h-[169px] md:w-[150px] md:h-[200px] lg:w-[200px] lg:h-[300px] xl:w-[250px] xl:h-[359px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Image
                  src="/movie-poster.png"
                  alt="Movie Poster"
                  width={200}
                  height={300}
                  className="w-full h-full border-white/50 border-4 object-cover rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Bottom Image */}
      {isVisible && (
        <motion.div
          className="relative -mt-14 lg:-mt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.3 }}
        >
          <Image
            src="/image_2.png"
            alt="Movie Watch Man"
            width={400}
            height={500}
            className="w-auto h-[150px] sm:h-[200px] md:h-[250px] lg:h-[400px] xl:h-[500px] object-contain"
          />
        </motion.div>
      )}
    </div>
  );
}
