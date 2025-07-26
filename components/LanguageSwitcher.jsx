"use client";

import { useLanguage } from "@/components/contexts/LanguageContext";
import Image from "next/image";

// Array of supported languages
const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Spanish" },
  { code: "de", name: "German" },
  { code: "it", name: "Italian" },
  { code: "nl", name: "Dutch" },
  { code: "zh", name: "Chinese" }
];

export const LanguageSwitcher = ({ Language, openLanguage, openSupport }) => {
  const { language, setLanguage } = useLanguage();

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
            openSupport(false)
            openLanguage(!Language)
          }}
        >
          {/* Display the current language name */}
          {currentLanguage.name}
          <Image
            src="./icon_Polygon.png"
            alt="Droudown Icon"
            width={0}
            height={0}
            className={`w-3 h-3 object-contain mt-2 ${Language ? "rotate-180" : ""} ml-1`}
          />
        </button>
      </div>

      <div
        className={`option absolute left-28 top-1 xl:left-0 xl:top-14 mt-2 w-[200px] h-[340px] origin-top-right rounded-lg bg-[#1a1a1a] ${Language ? "block" : "hidden"} overflow-scroll scrollbar-hidden`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1">
          {languages.map((lang, index) => (
            <div
              key={index}
              onClick={() => {
                localStorage.setItem("Language", lang.code)
                setLanguage(lang.code)
                openLanguage(false)
              }}
              className="cursor-pointer text-white py-2 text-lg font-normal pl-5 border-b-2 px-14 h-14 flex items-center"
              role="menuitem"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setLanguage(lang.code);
                }
              }}
            >
              {lang.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
