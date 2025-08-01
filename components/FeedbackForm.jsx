"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

export function FeedbackForm() {
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
        <div className="relative w-full    h-[550px] lg:h-[550px] overflow-hidden" ref={divRef}>
            {isVisible && (
                <>
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Image
                            src="/Image_Grid.png"
                            width={0}
                            height={0}
                            alt="Background Grid"
                            className="w-full h-[550px] lg:h-[550px] object-cover "
                        />
                    </motion.div>

                    <motion.div
                        className="absolute   z-10 flex flex-col items-center justify-center   text-white top-0 h-[550px] lg:h-[550px] w-full  bg-gradient-to-r from-[#041610] via-[#041610]/90 to-[#30a179]/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <div className='xl:max-w-[1400px] 2xl:max-w-[1500px]'>
                          <motion.div
                            className="w-full lg:max-w-[800px]  p-6 rounded-xl shadow-lg xl:max-w-[80%]"
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <h2 className="text-left text-white text-2xl lg:text-5xl font-semibold mb-6">
                                Express IPTV Express IPTV is a leader in smart IPTV solutions.
                            </h2>
                            <p className="text-left text-white text-md lg:text-2xl mb-6">
                                Enjoy the best and high-performance of our IPTV with the best IPTV server technology. Have a buffer-free streaming experience on any of your devices. Also, you can contact us anytime of the year, 24 hours a day, 7 days a week, as our customer support works around the clock.

                            </p>
                            <motion.button
                                className="w-40 h-12 bg-[#30a179] text-white rounded-full text-md 2xl:text-xl font-medium flex items-center justify-center"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                View Pricing
                            </motion.button>
                        </motion.div>
                      </div>
                    </motion.div>
                </>
            )}
        </div>
    );
}