"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

export function Platforms() {
    const PlatformsArray = [
        { name: "Android TV", Icon: "/Android_TV.png" },
        { name: "Apple TV", Icon: "/Apple_TV_Plus.png" },
        { name: "Amazon Fire TV", Icon: "/Amazon_Fire_TV.png" },
        { name: "Roku TV", Icon: "/Roku.png" },
        { name: "LG WebOS TV", Icon: "/lg-webos.png" },
        { name: "Tizen Studio TV", Icon: "/Tizen.png" },
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
            { threshold: 0.5 } // Trigger when 50% of the component is visible
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
        <motion.div
            className="my-10 py-10 bg-[#30a079] flex flex-col items-center"
            ref={divRef}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-[1500px] px-4">
                {/* Marquee for desktop */}
                <div className="lg:block hidden overflow-hidden">
                    <motion.div
                        className="flex gap-4"
                        animate={{ x: ["0%", "-50%"] }} // Move from 0 to -50% for seamless loop
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20, // Adjust speed of marquee
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Duplicate items for seamless looping */}
                        {[...PlatformsArray, ...PlatformsArray].map((Item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: (index % 2) === 0 ? 50 : -50 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 1.0, delay: (index % PlatformsArray.length) * 0.2 }}
                                className="flex-shrink-0"
                            >
                                <div className="w-48 h-24 lg:w-52 lg:h-28 bg-white rounded-xl shadow-xl border border-[#efefef] flex justify-center items-center cursor-pointer transition-all duration-200 hover:scale-110">
                                    <motion.div
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Image
                                            src={Item.Icon}
                                            alt={Item.name}
                                            width={100}
                                            height={100}
                                            className="object-contain"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                {/* Flex layout for mobile */}
                <div className="lg:hidden flex flex-wrap justify-center gap-10">
                    {PlatformsArray.map((Item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: (index % 2) === 0 ? 50 : -50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.0, delay: index * 0.2 }}
                        >
                            <div className="w-48 h-24 lg:w-52 lg:h-28 bg-white rounded-xl shadow-xl border border-[#efefef] flex justify-center items-center cursor-pointer transition-all duration-200 hover:scale-110">
                                <motion.div
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <Image
                                        src={Item.Icon}
                                        alt={Item.name}
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}