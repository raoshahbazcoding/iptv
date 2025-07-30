"use client"

import React, { useEffect } from 'react';
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Supports } from "@/components/Supports";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";
import { Custombutton } from "@/components/Custombutton";

export function Header() {
  const [openSupport, setopenSupport] = useState(false);
  const [openLanguage, setopenLanguage] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].header;
  const navigation = [
    { name: t.Home, href: "/" },
    { name: t.Free_Trail, href: "#" },
    { name: t.Services, href: "/services" },
    { name: t.Guides, href: "/guides" },
    { name: t.Pricing, href: "/pricing" },
    { name: t.About_us, href: "/about" },
    { name: t.Reseller, href: "#" },
    { name: "language", href: "" },
    { name: t.Blog, href: "/blog" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (!isOpen) {
      setopenSupport(false)
      setopenLanguage(false)
    }
  }, [isOpen])
  return (
    <header className="fixed xl:top-5 w-full flex justify-center z-50">
      <div className="w-full xl:w-[1400px] 2xl:w-[1800px] py-2  bg-[#131313] xl:bg-white/10 backdrop-blur-sm xl:rounded-full px-6">
        <div className="mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/">
            <Image
              src="./logo.png"
              alt="Streaming device showing sports Logo"
              width={200}
              height={200}
              className=""
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center  2xl:gap-8">
            {navigation.map((item, index) => (
              item.name == "language" ? <LanguageSwitcher Language={openLanguage} openLanguage={setopenLanguage} openSupport={setopenSupport} /> :
              <Link
                key={index}
                href={item.href}
                className={`${pathname == item.href ? "text-[#2EAE8C] hover:text-white" : "text-white "} transition cursor-pointer text-[17px]  font-medium w-auto text-center hover:bg-[#239579] rounded-full px-5 py-2`}
              >
                {item.name}
              </Link>
            ))}
            <Supports Support={openSupport} openSupport={setopenSupport} openLanguage={setopenLanguage} />
            
          </nav>

          {/* Mobile Navigation */}
          <div className="xl:hidden">
            <Button variant="ghost" size="icon" className="text-white w-12" onClick={() => setIsOpen(true)}>
              <div className="w-12 h-11 bg-[#1a1a1a4b] border-[#26262649] border-4 rounded-md flex justify-center items-center">
                <Image
                  src="./Icon.png"
                  alt="Toggle menu"
                  width={30}
                  height={30}
                />
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
          {/* Desktop Get Started Button */}
          <Button className="hidden w-auto px-5 xl:inline-flex button text-white rounded-full text-md font-medium">
            {t.button_text}
          </Button>
          {/* <Custombutton /> */}
        </div>
      </div>
      <div className="xl:hidden">
        <div className={`absolute w-full h-screen top-0 left-0 text-white  ${isOpen ? "block" : "hidden"}`}>
          <div className={`bg-[#0E0E0E]/10 w-full h-[1000vh] backdrop-blur-[6px] absolute top-0 left-0`} />
          <div className={`absolute left-3 z-100 pl-5 `}>
            <div className={`flex flex-col gap-4 mt-8`}>
              <Link href="/">
                <Image
                  src="./logo.png"
                  alt="Streaming device showing sports Logo"
                  width={180}
                  height={180}
                />
              </Link>
              {navigation.map((item, index) => (
                item.name == "language" ? <LanguageSwitcher Language={openLanguage} openLanguage={setopenLanguage} openSupport={setopenSupport} /> :
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${pathname == item.href ? "text-[#2EAE8C]" : "text-white"} transition py-2`}
                >
                  {item.name}
                </Link>
              ))}
              <Supports Support={openSupport} openSupport={setopenSupport} openLanguage={setopenLanguage} />
              <div className="mt-4">
                <Button
                  className="w-36 rounded-full button text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {t.button_text}
                </Button>
              </div>
              <div className="flex justify-end w-screen" onClick={() => setIsOpen(false)}>
                <div className="close">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}