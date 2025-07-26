"use client";

import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import Image from "next/image";
import Link from "next/link";


export const Supports = ({ Support, openSupport, openLanguage }) => {

    const { language } = useLanguage()
    const t = translations[language].header

    // Array of supported languages
    const languages = [
        { name: t.FAQ, href: "/faq" },
        { name: t.Troubleshooting, href: "/troubleshooting" },
        { name: t.Privacy_Policy, href: "/Privacy_Policy" },
        { name: t.Refund_Policy, href: "/Refund_Policy" },
        { name: t.Get_in_Touch, href: "/getintouch" },
        { name: t.Terms_of_Conditions, href: "/Terms_of_Conditions" },
    ];
    // Find the current language; fallback to the first language if not found
    const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

    return (
        <div className="relative inline-block text-left px-0 z-50">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center gap-x-1.5 rounded-md bg-transparent 2xl:px-3 py-2 text-md 2xl:text-xl font-medium text-white"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => {
                        openLanguage(false)
                        openSupport(!Support)
                    }}
                >
                    {/* Display the current language name */}
                    {t.Support}
                    <Image
                        src="./icon_Polygon.png"
                        alt="Droudown Icon"
                        width={0}
                        height={0}
                        className={`w-3 h-3 object-contain mt-2 ${Support ? "rotate-180" : ""} ml-1`}
                    />
                </button>
            </div>

            <div
                className={`option absolute left-24 top-1 xl:left-0 xl:top-14 mt-2 w-[300px] h-[340px] origin-top-right rounded-lg bg-[#1a1a1a] ${Support ? "block" : "hidden"} overflow-scroll scrollbar-hidden`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button">
                <div className="py-1">
                    {languages.map((lang, index) => (
                        <Link
                            href={lang.href}
                            key={index}
                            className="cursor-pointer text-white py-2 text-lg font-normal pl-5 border-b-2 h-14 flex items-center"
                            role="menuitem"
                            onClick={() => openSupport(false)}>
                            {lang.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
