"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from 'framer-motion';
import "@/styles/social.css"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer
  const navigation = [
    { name: t.Home, href: "/" },
    { name: t.About_us, href: "/about" },
    { name: t.Pricing, href: "/Pricing" },
    { name: t.Blogs, href: "/blog" },
    { name: t.FAQs, href: "/faq" },
    { name: t.Troubleshoot, href: "/Troubleshoot" },
  ];
  const navigation2 = [
    { name: t.Apple_TV, href: "/" },
    { name: t.Smart_Tv, href: "/" },
    { name: t.Mobil_Surfplatta, href: "/" },
    { name: t.Datorn, href: "/" },
    { name: t.Android_Box, href: "/" },
    { name: t.Formuler_Box, href: "/" },
    { name: t.TVIP_Box, href: "/" },
    { name: t.Onyx_Box, href: "/" },
  ];

  const [isVisible, setIsVisible] = useState(true);
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
    <div ref={divRef} className="  flex flex-wrap lg:flex-nowrap items-center justify-center bg-gray-900 text-white">
      {isVisible &&
        <motion.div
          className="px-6  w- xl:max-w-[1400px]  md:px-1 lg:px-1 flex flex-wrap lg:flex-nowrap justify-between  lg:gap-[200px] bg-gray-900 text-white pb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-[600px] flex flex-col justify-start items-start   mt-14"
            initial={{ x: -220, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Image
                  src="./logo.png"
                  alt="Streaming device showing sports Logo"
                  width={200}
                  height={200}
                />
              </div>
              <p className="opacity-70 text-lg leading-7">
                Stream over 45,000 live channels, movies on demand, and 4K content with ExpressIPTV — fast, secure, and completely buffer-free on all your devices. Try it free today at <Link  href="/" className="text-semibold text-white"> ExpressIPTV.com </Link>
              </p>
              <div className={`pt-10`}>
                <div className="mb-5 w-full text-lg font-medium">
                  Subscribe our News letter
                </div>
                <div className="w-full">
                  <div className="flex w-10/12 items-center gap-4 bg-white/10 rounded-full lg:py-2 px-4 backdrop-blur-sm h-14 lg:h-14">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="flex-auto bg-transparent border-none outline-none text-md placeholder-white w-16 pl-2"
                    />
                    <button className="flex rounded-full button w-16 h-10 justify-center items-center">
                      <Image src="./Simplification.png" alt="Simplification" width={0} height={0} className="w-5 h-5 object-contain" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`flex space-x-6 mt-10 lg:mt-0`}>
              <div className="icon icon-fill w-14 h-14 rounded-full flex items-center justify-center">
                <Image src="./Facebook.png" alt="Social Icon" className="w-8 h-auto z-50" width={0} height={0} />
              </div>
              <div className="icon icon-fill w-14 h-14 rounded-full flex items-center justify-center">
                <Image src="./Twitter.png" alt="Social Icon" className="w-8 h-auto z-50" width={0} height={0} />
              </div>
              <div className="icon icon-fill w-14 h-14 rounded-full flex items-center justify-center">
                <Image src="./LinkedIn.png" alt="Social Icon" className="w-8 h-auto z-50" width={0} height={0} />
              </div>
            </div>
          </motion.div>

          {/* 1st Footer Navigation Section */}
          <motion.div
            className="flex flex-col space-y-4 mt-14 w-40"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold">Short Links</h3>
            <div className="space-y-2">
              <nav className="grid items-center gap-3">
                {navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-400 text-lg hover:text-[#2EAE8C] transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
          {/* 2nd Navigation Section */}
          <motion.div
            className="flex flex-col space-y-4 mt-14 w-40"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold">Instruktioner</h3>
            <div className="space-y-2">
              <nav className="grid items-center gap-3">
                {navigation2.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-400 text-lg hover:text-[#2EAE8C] transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full lg:w-[550px] flex flex-col gap-6 xl:gap-2 mt-14"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <Image src="./Localtion.png" alt="Location" className="object-contain w-10 h-auto" width={0} height={0} />
                <p className="text-lg">Available daily from 10:00 AM to 12:00 AM</p>
              </div>
              <div className="flex space-x-4">
                <Image src="./Localtion.png" alt="Location" className="object-contain w-10 h-auto" width={0} height={0} />
                <p className="text-lg">Suite 587 74192 Cherri Dale, East Ardis, IA 79090-2972</p>
              </div>
              <div className="flex space-x-4">
                <Image src="./Email.png" alt="Email" className="object-contain w-10 h-auto" width={0} height={0} />
                <p className="text-lg">info@expressiptv.com help@expressiptv.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>}
    </div>
  );
}
