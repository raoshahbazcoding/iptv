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
            name: "Stream Movies & Series Anytime You Want",
            image: "https://iptvking.com/wp-content/uploads/2025/07/mahrous-houses-C7UbVbwTyjs-unsplash-scaled-1.webp",
            alt: "Client image 1",
            rating: 5,
            testimonial:
                "Enjoy unlimited entertainment with instant access to your favorite movies and series. Watch whenever it suits you best—no restrictions, no interruptions. Our on-demand IPTV service puts the power of entertainment at your fingertips.",
        },
        {
            id: 2,
            name: "All Your Favorite TV & Sports in One Place",
            image: "https://iptvking.com/wp-content/uploads/2025/07/360_F_517637806_QEUyQnGVjJjjT4zn4HvXjBRUg9KSLTp1.webp",
            alt: "Client image 2",
            rating: 4,
            testimonial:
                "Enjoy top-quality IPTV with premium sports and entertainment from around the world. Stream over 100,000 movies and series in stunning FHD/4K, complete with Swedish subtitles. Experience seamless access to global content—all in one powerful IPTV platform.",
        },
        {
            id: 3,
            name: "Entertainment for Kids of All Ages",
            image: "https://iptvking.com/wp-content/uploads/2025/07/young-boy-watching-television.webp",
            alt: "Client image 3",
            rating: 5,
            testimonial:
                "Our IPTV service provides a safe and enjoyable streaming experience specifically designed for children. From timeless Disney classics to the latest kid-friendly shows, there’s something for every age. Keep your little ones entertained with fun, educational, and age-appropriate content—all in one place.",
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
                    Streaming
                </h1>
                <h2 className="text-md md:text-2xl lg:text-4xl font-semibold absolute top-[60%] lg:top-[64%] transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
                    Movies, Sports & Kids Shows
                </h2>
            </motion.div>

            <div className="w-full lg:max-w-7xl  2xl:max-w-[1500px] px-4 sm:px-0 flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
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
                              
                                <div className="lg:pt-5 text-left">
                                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2">
                                        {slides[currentSlide].name}
                                    </h2>
                                    <div className="flex justify-start items-center gap-2 mb-4">
                                        
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

        </div >
    );
}
