"use client"

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqList() {
    const faqs = [
        {
            question: "What devices are compatible with IPTV?",
            answer:
                "Most IPTV services are compatible with Smart TVs (Samsung, LG), Streaming devices (Roku, Fire TV), Smartphones (iOS, Android), Computers (Windows, Mac), and Set-top boxes (MAG, Android boxes).",
        },
        {
            question: "Do I need a fast internet connection for IPTV?",
            answer:
                "A stable internet connection is required. A minimum of 10 Mbps is recommended for SD streaming, while HD and 4K may require 25 Mbps or more.",
        },
        {
            question: "How can I access IPTV content on multiple devices?",
            answer:
                "Many IPTV providers allow simultaneous connections on multiple devices, but it depends on the service plan.",
        },
        {
            question: "Can I watch IPTV on my smartphone or tablet?",
            answer:
                "Yes, most IPTV services offer apps for iOS and Android devices for on-the-go streaming.",
        },
        {
            question: "Are smart TVs compatible with IPTV services?",
            answer:
                "Yes, most Smart TVs support IPTV through apps like Smart IPTV, TiviMate, or custom provider apps.",
        },
        {
            question: "What are some popular IPTV service providers?",
            answer:
                "Some popular IPTV providers include Express IPTV, Eternal TV, Vader Streams, and Sapphire Secure.",
        },
        {
            question: "Is there a difference between IPTV and traditional cable TV?",
            answer:
                "Yes, IPTV streams content via the internet, while cable TV uses physical cables for transmission.",
        },
        {
            question: "How can I set up IPTV on my device?",
            answer:
                "You can set up IPTV by installing the IPTV app, entering your subscription credentials, and configuring the service provider's settings.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 py-10 px-5">
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    className={`bg-[#1b1b1b] rounded-lg border p-5 cursor-pointer ${openIndex === index ? "border-[#30a079]" : "border-white/20"}`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    {/* Question Section */}
                    <div className="flex justify-between items-center">
                        <h3 className="text-white text-lg font-medium">{(index + 1) + " . " + faq.question}</h3>
                        <span className="text-[#30a079] text-2xl">
                            {openIndex === index ? (
                                <Image src="./down.png" className="w-5 h-5 object-contain" alt="Down Arrow" width={0} height={0} />
                            ) : (
                                <Image src="./right.png" className="w-5 h-5 object-contain" alt="Right Arrow" width={0} height={0} />
                            )}
                        </span>
                    </div>

                    {/* Answer Section with Framer Motion Animation */}
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                className="w-full border-t-2 mt-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <p className="text-white/70 text-base mt-3">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
    );
}
