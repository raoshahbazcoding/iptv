"use client";

import React from 'react';
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { motion } from "framer-motion";

export function Form() {
  const { language } = useLanguage();
  const t = translations[language].Form_section;

  return (
    <div className="px-5 -mt-5 z-50 flex justify-center">
      <div className="relative -top-16 w-full max-w-3xl bg-[#1b1b1b] rounded-2xl border border-white/20 p-8 shadow-lg px-3 lg:px-5">
        <h2 className="text-center text-white text-3xl font-medium font-['Poppins'] mb-6">
          {t.title}
        </h2>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <input
                type="text"
                placeholder={t.First_Name}
                className="w-full mt-1 p-3 bg-[#252525] text-white placeholder-white/50 text-lg rounded-lg border focus:ring-2 focus:ring-[#30a079]"
              />
            </motion.div>

            {/* Last Name */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <input
                type="text"
                placeholder={t.Last_Name}
                className="w-full mt-1 p-3 bg-[#252525] text-white placeholder-white/50 text-lg rounded-lg border focus:ring-2 focus:ring-[#30a079]"
              />
            </motion.div>
          </div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="email"
              placeholder={t.Email}
              className="w-full mt-1 p-3 bg-[#252525] text-white placeholder-white/50 text-lg rounded-lg border focus:ring-2 focus:ring-[#30a079]"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <textarea
              rows="5"
              placeholder={t.Message}
              className="w-full mt-1 p-3 bg-[#252525] text-white placeholder-white/50 text-lg rounded-lg border focus:ring-2 focus:ring-[#30a079]"
            />
          </motion.div>

          {/* Submit Button */}
          <div className="pt-4 w-full flex justify-center">
            <motion.button
              className="button text-white text-lg px-6 md:px-10 py-2 rounded-full transition-all duration-300 shadow-lg"
            >
              {t.button_text}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}
