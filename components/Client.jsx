"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Client() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [SlideStatus, setSlideStatus] = useState(true);
    const slides = [
        {
            id: 1,
            name: "Emily R.",
            image: "/client.png",
            alt: "Client image 1",
            rating: 5,
            testimonial:
                "Excellent service! Customer support was quick to respond to my queries, and I appreciate the wide range of channels available.",
        },
        {
            id: 2,
            name: "Michael T.",
            image: "/client.png",
            alt: "Client image 2",
            rating: 4,
            testimonial:
                "I’ve tried various IPTV services, but Express IPTV is the best. The streaming quality is excellent, and the customer support is always ready to help when I need assistance.",
        },
        {
            id: 3,
            name: "Sarah K",
            image: "/client.png",
            alt: "Client image 3",
            rating: 5,
            testimonial:
                "I love Express IPTV! The range of live channels and the ability to catch up on shows makes it my go-to option for home entertainment.",
        },
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    let myInterval
    useEffect(() => {
        console.log(SlideStatus);
        
        if (SlideStatus) {
            myInterval = setInterval(() => {
                handleNextSlide()
            }, 3000);
        }else{
            clearInterval(myInterval);
        }
    }, [])

    return (
        <div className="px-2 lg:px-10 bg-[#1b1a1a] flex flex-col items-center gap-5">
            {/* Heading Section */}
            <motion.div
                className="relative flex flex-col items-center text-center w-full px-4 py-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="Features_label text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px]">
                    CLIENT
                </h1>
                <h2 className="text-md md:text-2xl lg:text-4xl font-semibold absolute top-[60%] lg:top-[64%] transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
                    What They say about us
                </h2>
            </motion.div>

            <div className="w-full lg:max-w-7xl 2xl:max-w-[1500px] px-4 sm:px-0 flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
                {/* Left Arrow */}
                <div className="block flex-shrink-0 cursor-pointer" onClick={handlePrevSlide}>
                    <Image
                        src="/left.png"
                        alt="Previous"
                        width={24}
                        height={40}
                        className="w-4 h-6 md:w-6 md:h-10 lg:w-8 lg:h-12 object-contain"
                    />
                </div>

                {/* Slide Content with Animation */}
                <motion.div
                    key={currentSlide}
                    className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-8 lg:gap-12 px-5 h-[400px] lg:h-[450px]  overflow-hidden cursor-pointer"
                    initial={{ x: currentSlide * 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -1000 * currentSlide, opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    {slides.map((clien, index) => (
                        <div className="flex flex-col lg:flex-row lg:items-start gap-10 md:gap-6 w-[80vw] px-16">
                            <div className="relative w-full max-w-[300px] lg:hidden">
                                <div className="bg-[#30A179] w-full aspect-[4/3] rounded-2xl" />
                                <Image
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].alt}
                                    fill
                                    className="absolute -translate-x-4 -translate-y-4 rounded-2xl bg-black shadow-xl"
                                />
                            </div>

                            <div className="flex flex-col lg:flex-row lg:items-start gap-10 md:gap-6 w-[1200px]" key={index} >
                                <Image
                                    src="/Vector.png"
                                    alt="Quote"
                                    width={80}
                                    height={80}
                                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain lg:-mt-8"
                                />
                                <div className="lg:pt-5 text-left">
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4">
                                        {slides[currentSlide].name}
                                    </h2>
                                    <div className="flex justify-start items-center gap-2 mb-4">
                                        {[...Array(slides[currentSlide].rating)].map((_, i) => (
                                            <Image
                                                key={i}
                                                src="/yellowStar.png"
                                                alt="Star"
                                                width={24}
                                                height={24}
                                                className="w-4 h-4 md:w-6 md:h-6"
                                            />
                                        ))}
                                        {[...Array(5 - slides[currentSlide].rating)].map((_, i) => (
                                            <Image
                                                src="/Star.png"
                                                alt="Star"
                                                width={24}
                                                height={24}
                                                className="w-4 h-4 md:w-6 md:h-6"
                                            />
                                        ))}
                                        <span className="ml-2 text-lg md:text-xl text-white">{slides[currentSlide].rating}.0</span>
                                    </div>
                                    <p className="text-base  md:text-lg lg:text-xl text-white  leading-relaxed">
                                        {slides[currentSlide].testimonial}
                                    </p>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative w-full max-w-[420px] hidden lg:block">
                                <div className="bg-[#30A179] w-full aspect-[4/3] rounded-2xl" />
                                <Image
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].alt}
                                    fill
                                    className="absolute -translate-x-4 -translate-y-4 rounded-2xl bg-black shadow-xl"
                                />
                            </div>
                        </div>
                    ))
                    }
                </motion.div>
                {/* Right Arrow */}
                <div className="block flex-shrink-0 cursor-pointer" onClick={handleNextSlide}>
                    <Image
                        src="/right.png"
                        alt="Next"
                        width={24}
                        height={40}
                        className="w-4 h-6 md:w-6 md:h-10 lg:w-8 lg:h-12 object-contain"
                    />
                </div>
            </div >

            {/* Rating Card */}
            < motion.div
                className="w-full max-w-4xl xl:max-w-[1500px] px-4 lg:px-10 sm:px-0 py-6 md:py-8 relative"
                initial={{ opacity: 0 }
                }
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="w-full h-full relative bg-[#232323] rounded-xl md:rounded-2xl border border-[#30a079] overflow-hidden">
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#30a079]/30 to-[#30a079]/02" />
                        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#30a079]/30 to-[#30a079]/02" />
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-4 md:gap-8">
                        {/* Left Images */}
                        <div className="hidden md:flex relative w-32 h-24 xl:w-48 xl:h-36 shrink-0">
                            {[0, 1, 2, 3, 4].map((position) => (
                                <Image
                                    key={`left-${position}`}
                                    src="/service.png"
                                    alt="Client"
                                    width={0}
                                    height={0}
                                    className={`absolute rounded-full ${position === 0
                                        ? "left-2 top-9 w-[71px] h-[71px] hidden xl:block"
                                        : position === 1
                                            ? "left-[156px] top-[77px] xl:left-[276px] xl:top-[107px] w-[29px] h-[29px]"
                                            : position === 2
                                                ? "left-[105px] top-[0px] xl:left-[215px] xl:top-[42px] w-[31px] h-[31px]"
                                                : position === 3
                                                    ? "left-[29px] top-[50px] xl:left-[119px] xl:top-[80px] w-[53px] h-[53px]"
                                                    : "-left-5 xl:left-[111px] -top-6 xl:top-0 w-[53px] h-[53px]"
                                        }`}
                                    style={{
                                        transform: `translate(${position * 10}%, ${position * 5}%)`,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Center Text */}
                        <div className="text-center space-y-2 md:space-y-4 flex-1">
                            <p className="text-white text-sm  xl:text-2xl font-medium">
                                Overall Customer Satisfaction:
                            </p>
                            <p className="text-white text-md md:text-xl xl:text-3xl font-semibold">
                                4.7 out of 5 based on 500 reviews
                            </p>
                        </div>

                        {/* Right Images */}
                        <div className="hidden md:flex relative w-32 h-24 xl:w-48 xl:h-36 shrink-0">
                            {[0, 1, 2, 3, 4].map((position) => (
                                <Image
                                    key={`right-${position}`}
                                    src="/service.png"
                                    alt="Client"
                                    width={0}
                                    height={0}
                                    className={`absolute rounded-full ${position === 0
                                        ? "-right-5 top-9 w-[71px] h-[71px] hidden xl:block"
                                        : position === 1
                                            ? "-left-10 -bottom-3 xl:-left-28 xl:bottom-0 w-[29px] h-[29px]"
                                            : position === 2
                                                ? "left-0 top-[0px] xl:-left-10 xl:top-[42px] w-[31px] h-[31px] "
                                                : position === 3
                                                    ? "left-[50px] top-[50px] xl:left-[50px] xl:top-[80px] w-[53px] h-[53px]"
                                                    : "left-[100px] -top-6 xl:left-[70px] xl:top-0 w-[53px] h-[53px]"
                                        }`}
                                    style={{
                                        transform: `translate(-${position * 10}%, ${position * 5}%)`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div >
        </div >
    );
}
