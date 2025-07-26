'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export function StreamingAnywhere() {
    const countyListRef = useRef(null);
    const videoRef = useRef(null);
    const componentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isPlay, setIsPlay] = useState(false);

    useEffect(() => {
        console.log(countyListRef);

        const scrollContainer = countyListRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        let isScrolling = true;

        const scrollStep = () => {
            if (!isScrolling) return;

            scrollAmount += 1;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
                scrollAmount = 0;
            } else {
                scrollContainer.scrollLeft += 1;
            }

            requestAnimationFrame(scrollStep);
        };

        requestAnimationFrame(scrollStep);

        return () => {
            isScrolling = false;
        };
    }, [countyListRef]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                        setIsPlay(true);
                    }, 1000);
                } else {
                    setIsPlay(false);
                }
            },
            { threshold: 0.2 }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    }, []);

    return (
        <div ref={componentRef} className="w-full flex flex-wrap gap-5 py-10 text-white justify-center">
            {/* Heading Section */}
            {isVisible && <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex w-full flex-col items-center text-center px-4 md:px-8 lg:px-16"
            >
                <div className="Features_label border-solid border-emerald-600/50 text-[35px] md:text-[60px] lg:text-[100px] font-bold uppercase text-emerald-600/10 h-8 lg:h-20">
                    Streaming Anywhere
                </div>
                <div className="text-[12px] md:text-[20px] lg:text-[30px] font-medium">
                    Your World of Entertainment, Anytime, Anywhere!
                </div>
            </motion.div>}

            {/* Video with Animation */}
            <div className="relative w-full max-w-[1650px] h-auto aspect-[2/1] lg:aspect-[3/1] flex justify-center items-center overflow-hidden">
                {isPlay && <motion.video
                    ref={videoRef}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isPlay ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    autoPlay={isPlay}
                    muted
                    playsInline
                    loop
                >
                    <source src="/Group.webm" type="video/webm" />
                </motion.video>}
            </div>

            {/* Country List Scroll Animation */}
            <div
                ref={countyListRef}
                className="w-full max-w-[80vw] h-24 lg:h-40 overflow-hidden flex items-center whitespace-nowrap rounded-full relative"
            >
                {isVisible && <motion.div className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    transition={{ duration: 0.8 }}>
                    {[...Array(2)].map((_, repeatIndex) => (
                        [
                            ...[...Array(7)].map((_, index) => (
                                <div
                                    key={`country-${repeatIndex}-${index}`}
                                    className="rounded-lg flex-shrink-0 w-20 h-20 lg:w-40 lg:h-40"
                                >
                                    <Image
                                        src={`/Country_${index + 1}.png`}
                                        alt={`Country ${index + 1}`}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                            )),
                            ...[...Array(7)].map((_, index) => (
                                <div
                                    key={`country-${repeatIndex}-${index}`}
                                    className="rounded-lg flex-shrink-0 w-20 h-20 lg:w-40 lg:h-40"
                                >
                                    <Image
                                        src={`/Country_${index + 1}.png`}
                                        alt={`Country ${index + 1}`}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-contain rounded-full"
                                    />
                                </div>
                            ))
                        ]
                    ))}
                </motion.div>}
            </div>
        </div >
    );
}