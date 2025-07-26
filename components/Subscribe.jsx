"use client"

import React from 'react';
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function Subscribe() {
    const { language } = useLanguage()
    const t = translations[language].subscribe_section
    return (
        <div className="relative w-full h-72 lg:h-96 overflow-hidden pt-52 lg:pt-52">
            <div className="absolute inset-0">
                <Image
                    src="/Image_Grid.png"
                    width={0}
                    height={0}
                    alt="Background Grid"
                    className="w-full h-72 lg:h-96 object-cover"
                />
            </div>
            <div className="absolute z-10 flex flex-col items-start justify-center px-4 sm:px-12 lg:px-64 text-white top-0 h-72 lg:h-96 w-full
                      bg-gradient-to-r from-[#041610] via-[#041610] to-[#30a179]/50">
                <div className="mb-4 w-full text-lg lg:text-3xl font-medium">
                    {t.heading}
                </div>
                <div className="mb-8 w-full text-2xl lg:text-5xl font-bold">
                    {t.description}
                </div>
                <div className="w-full">
                    <div className="flex w-10/12 items-center gap-4 bg-white/10 rounded-full lg:py-2 px-4 backdrop-blur-sm h-14 lg:h-16">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-auto bg-transparent border-none outline-none text0md lg:text-2xl placeholder-white w-16 pl-2"
                        />
                        <button className="flex rounded-full bg-[#30A179] w-16 h-10 justify-center items-center">
                            <Image src="./Simplification.png" alt="Simplification" width={0} height={0} className="w-5 h-5 object-contain" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
