"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language]?.Get_in_touch || translations["en"]?.Get_in_touch; // Fallback to English if translations are missing
  
  if (!t) return <div>Loading...</div>;

  return (
    <main>
      <Header />
      <div className="pt-32 text-white min-h-screen">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.heading}
          </motion.h1>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.p
              className="text-lg leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t.description}
            </motion.p>

            {Array.isArray(t.other_description) && t.other_description.map((item, index) => (
              <motion.div
                key={index}
                className="pt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <motion.h2
                  className="text-2xl font-semibold mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {item.heading}
                </motion.h2>

                {Array.isArray(item.description) && item.description.map((text, index) => (
                  <motion.p
                    key={index}
                    className="text-lg leading-relaxed mb-4 pl-10"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    • {text.text}
                  </motion.p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <FeedbackForm />
      <Footer />
    </main>
  );
}
