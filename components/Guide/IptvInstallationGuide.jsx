"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';

export function IptvInstallationGuide() {
  const router = useRouter();
  const platforms = [
    { image: "image(8).png", name: "Apple TV", description: "How to Install IPTV on your Apple TV" },
    { image: "image(2).png", name: "iOS Mobile", description: "How to Install IPTV on your iOS Mobile" },
    { image: "image(4).png", name: "Amazon Fire TV", description: "How to Install IPTV on your Amazon Fire TV Stick" },
    { image: "image(5).png", name: "LG TV", description: "How to Install IPTV on your LG TV" },
    { image: "image(1).png", name: "Android TV", description: "How to Install IPTV on your Android TV" },
    { image: "image(3).png", name: "Android Mobile", description: "How to Install IPTV on your Android Mobile" },
    { image: "image(7).png", name: "Windows", description: "How to Install IPTV on your Windows desktop" },
    { image: "image(6).png", name: "Samsung TV", description: "How to Install IPTV on your Samsung TV" },
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

  const handleImageClick = (platform, id) => {
    localStorage.setItem("platform", JSON.stringify(platform))
    router.push(`/guideDetails?id=${id}`);
  };
  return (
    <div className="w-full p-5 gap-10 flex flex-wrap my-20 px-10 justify-center">
      {platforms.map((platform, index) => (
        <motion.div
          initial={{ opacity: 0, x : index % 2 == 0 ? -200 : 200 }}
          animate={{ opacity: 1, x : 0 }}
          transition={{ duration: 1 }}
        >
          <div
            key={index}
            className="flex lg:flex-row w-96 lg:w-[700px] flex-col bg-[#1b1b1b] rounded-lg p-5 items-center gap-5 shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <img
              className="w-full max-w-[250px] h-[200px] rounded-lg object-cover"
              src={platform.image}
              alt={platform.name}
            />
            <div className="flex flex-col items-center sm:items-start gap-3">
              <div className="px-4 py-1 bg-[#0b2c2b] rounded-md text-[#30a079] text-base sm:text-lg font-medium">
                {platform.name}
              </div>
              <div className="text-white text-lg sm:text-xl font-medium text-center sm:text-left">
                {platform.description}
              </div>
              <div className="text-white text-base sm:text-lg font-medium underline hover:text-[#30a079] flex justify-center items-center gap-2 cursor-pointer" onClick={() => handleImageClick(platform, index)} >
                Learn More
                <img src="./rightlong.png" className="w-8 h-3 object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
