'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { Roller } from "@fecapark/number-rolling";

export function Stats() {
  const { language } = useLanguage();
  const t = translations[language].stats_section;
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

  const stats = [
    {
      icon: "./county.png",
      value: 130,
      suffix: "+",
      label: t.county,
    },
    {
      icon: "./user.png",
      value: 150,
      suffix: "K+",
      label: t.user,
    },
    {
      icon: "./Live_tv.png",
      value: 45,
      suffix: "K+",
      label: t.Live_tv,
    },
    {
      icon: "./movie_series.png",
      value: 100,
      suffix: "K+",
      label: t.movie_series,
    },
  ];

  return (
    <section className="bg-[#30A179] py-8" ref={divRef}>
      <div className="container mx-auto px-1">
        <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center justify-center max-sm:gap-7 sm:gap-2 max-2xl:gap-2 2xl:gap-24  sm:flex-wrap">
          {stats.map((stat, index) => (
            <div key={index} className="card-shadow w-72 text-left bg-[#30A179]/3 flex rounded-lg">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-4">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={0}
                  height={0}
                  className="pt-3 w-14 h-14 object-contain"
                />
              </div>
              <div className="pt-5">
                {isVisible && (
                  <Roller
                    value={stat.value}
                    suffix={stat.suffix}
                    suffixPosition="back"
                    align="left"
                    fontSize={35}
                    rollDuration={4}
                    shiftDuration={0.45}
                    staggering={false}
                    diff={false}
                    rollWay="up"
                  />
                )}
                <div className="text-xl text-white mt-2">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}