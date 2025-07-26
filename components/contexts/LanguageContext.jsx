"use client"

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("Language") || "en"
    setLanguage(storedLanguage)
  }, [])

  const updateLanguage = (newLang) => {
    setLanguage(newLang)
    localStorage.setItem("Language", newLang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
