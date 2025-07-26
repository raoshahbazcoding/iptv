"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Aboutdetails() {
    return (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center my-8 pt-10 gap-6 lg:gap-32 px-5 py-10 lg:h-[500px]">

            {/* Image Section */}
            <motion.div
                className="w-full max-w-[550px] h-[300px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/service.png"
                    alt="Express IPTV Service"
                    width={550}
                    height={350}
                    className="w-full h-full object-cover rounded-xl"
                    priority
                />
            </motion.div>

            {/* Text Section */}
            <motion.div
                className="w-full max-w-[600px] px-4 lg:px-0 flex items-center text-white text-lg lg:text-xl leading-relaxed font-normal text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                At Express IPTV, we believe in the future of entertainment. Founded by a team of passionate media professionals and technology enthusiasts, our mission is to deliver a seamless viewing experience that transcends traditional television. With a commitment to innovation and customer satisfaction, we've established ourselves as a leading provider of high-quality IPTV services.
            </motion.div>
        </div>
    );
}
