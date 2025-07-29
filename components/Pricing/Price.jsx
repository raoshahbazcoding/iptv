"use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";

export function Price() {
  const { language } = useLanguage()
  const t = translations[language].pricing_section
  const [Price, setPrice] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isConnection, setIsConnection] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsConnection(true)
        }
      },
      { threshold: 0.5 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  function handleConnection(index){
    setIsConnection(false)
    setTimeout(()=>{
      setIsConnection(true)
    },5)
    setPrice(index)
  }
  return (
    <div className="w-full px-4 py-8 bg-[#1b1a1a] flex flex-col items-center gap-8">
      {/* Heading Section */}
      {isVisible && <motion.div
        className="text-[24px] md:text-[32px] lg:text-[40px] font-medium"
        initial={{ scale: .5, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="w-full max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#30a079]">{t.highlighted_text}</span>
            <span className="text-white"> {t.heading}</span>
          </h1>
          <p className="mt-4 text-white text-lg md:text-xl font-normal">
            {t.description}
          </p>
        </div>
      </motion.div>}
      {isVisible && <motion.div
        className="text-[24px] md:text-[32px] lg:text-[40px] font-medium"
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="w-full max-w-[310px] lg:max-w-[1420px] flex flex-wrap justify-center lg:justify-between h-auto items-center bg-[#2d2d2d] rounded-lg lg:rounded-full py-2 px-10">

          {/* Connection Options */}
          {["Scandinavian Package", "English Pakage", "Arabic Package"].map((item, index) => (
            <div key={index} className={`px-10 py-3 rounded-full text-white text-xl font-medium flex items-center justify-center 
      ${index === Price ? "bg-[#30A179] hover:text-white" : "hover:text-[#30A179]"} transition-all cursor-pointer`} onClick={() => handleConnection(index)}>
              {item}
            </div>
          ))}

        </div>
      </motion.div>}
      {/* Pricing Cards Section */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-6" ref={divRef}>
        {/* 1 Month Package */}
        {isConnection && <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <PriceCard t={t.one_Month} Price={Price + 1} />
        </motion.div>}
        {/* 6 Month Package */}
        {isConnection && <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div
            className="text-[24px] md:text-[32px] lg:text-[40px] font-medium"
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="w-[450px] 2xl:w-[450px]  max-sm:w-[350px] xl:w-[400px] relative overflow-hidden">
              <div className="transform sm:scale-100 scale-90 origin-top">
                <div className="relative w-full h-[1090px] rounded-[32.32px]">
                  <div className="absolute left-0 top-0 w-full h-[1079.97px] bg-[#30a079] rounded-[26px]" />
                  <div className="absolute left-0 top-[349.31px] w-full h-[0.87px] bg-[#aebdd6]" />
                  <div className="absolute left-[70.85px] top-[110.60px] text-center text-white text-[58px] font-semibold">
                    $ {(t.six_Month.plan_value * (Price + 1)).toString().slice(0, 6)}
                  </div>
                  <div className="absolute left-[70.85px] top-[41.24px] text-white text-[28.98px] font-medium">
                    {t.six_Month.heading}
                  </div>
                  <div className="absolute left-[70.19px] top-[85.30px] w-[217.30px] text-center text-white/70 text-base font-normal leading-normal">
                    {t.six_Month.plan_type}
                  </div>
                  <div className="absolute left-[70.19px] top-[198px] w-[217.30px] text-center text-white/70 text-base font-normal leading-normal">
                    {t.plan_connection}
                  </div>
               
                  <div className="absolute left-0 top-[430.35px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_one}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[365.56px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_two}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[559.64px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_three}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[688.92px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_four}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[818.20px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_five}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-[947.49px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_six}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[494.85px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_seven}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[624.13px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_eight}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[753.42px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_nine}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[882.70px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_ten}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[1.11px] top-[1011.98px] w-full h-[64.65px]">
                    <div className="absolute left-0 top-0 w-full h-full" />
                    <div className="absolute left-[22.71px] top-[20.25px] w-[436px] h-[27px]">
                      <div className="absolute left-[23.14px] top-0 text-white text-base font-medium leading-relaxed">
                        {t.six_Month.plan_features.features_elevene}
                      </div>
                      <div className="absolute left-0 top-[9.30px] w-[9.26px] h-[9.30px] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute left-[70.39px] top-[264.14px] w-[254.11px] h-[53.50px]">
                    <div className="absolute left-0 top-0 w-full h-full bg-white rounded-md" />
                    <div className="absolute w-[254.11px] h-[53.50px] flex justify-center items-center text-center text-[#30a079] text-lg font-semibold">
                      {t.button_text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>}
        {/* 1 Year Package */}
        {isConnection && <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <PriceCard t={t.one_year} Price={Price + 1} />
        </motion.div>}
      </div>
    </div>
  );
}

const PriceCard = ({ t, Price }) => {
  return (
    <div
      className="text-[24px] md:text-[32px] lg:text-[40px] font-medium"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="w-[350px] 2xl:w-[480px] xl:w-[375px]  relative overflow-hidden">
        <div className="transform sm:scale-100 scale-90 origin-top">
          <div className="relative w-full h-[978px] rounded-[29px]">
            <div className="absolute left-0 top-0 w-full h-[969px] bg-[#2d2d2d] rounded-[20px]" />
            <div className="absolute left-0 top-[313.42px] w-full h-[0.78px] bg-[#aebdd6]" />
            <div className="absolute left-[86px] top-[100px] text-center text-[#30a079] text-[51.09px] font-semibold">
              $ {(t.plan_value * Price).toString().slice(0, 6)}
            </div>
            <div className="absolute left-[86px] top-[37px] text-white text-[26px] font-medium">
              {t.heading}
            </div>
            <div className="absolute left-[89px] top-[76.53px] w-[194.97px] text-center text-white/70 text-sm font-normal leading-snug">
              {t.plan_type}
            </div>
            <div className="absolute left-[89px] top-[175px] w-[194.97px] text-center text-white/70 text-sm font-normal leading-snug">
              {t.plan_connection}
            </div>

            <div className="absolute left-0 top-[386.13px] w-full h-[58.01px]">
              <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
              <div className="absolute left-[20.38px] top-[18.16px] w-[392px] h-4">
                <div className="absolute left-[20.76px] top-0 text-white text-sm font-medium leading-normal">
                  {t.plan_features.features_one}
                </div>
                <div className="absolute left-0 top-[8.34px] w-[8.30px] h-[8.34px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1px] top-[328px] w-full h-[58.01px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[20.38px] top-[18.16px] w-[392px] h-4">
                <div className="absolute left-[20.76px] top-0 text-white text-sm font-medium leading-normal">
                  {t.plan_features.features_two}
                </div>
                <div className="absolute left-0 top-[8.34px] w-[8.30px] h-[8.34px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-0 top-[502.13px] w-full h-[58.01px]">
              <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
              <div className="absolute left-[20.38px] top-[18.16px] w-[392px] h-4">
                <div className="absolute left-[20.76px] top-0 text-white text-sm font-medium leading-normal">
                  {t.plan_features.features_three}
                </div>
                <div className="absolute left-0 top-[8.34px] w-[8.30px] h-[8.34px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-0 top-[618.13px] w-full h-[58.01px]">
              <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
              <div className="absolute left-[20.38px] top-[18.16px] w-[392px] h-4">
                <div className="absolute left-[20.76px] top-0 text-white text-sm font-medium leading-normal">
                  {t.plan_features.features_four}
                </div>
                <div className="absolute left-0 top-[8.34px] w-[8.30px] h-[8.34px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-0 top-[734.13px] w-full h-[58.01px]">
              <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
              <div className="absolute left-[20.38px] top-[18.16px] w-[392px] h-4">
                <div className="absolute left-[20.76px] top-0 text-white text-sm font-medium leading-normal">
                  {t.plan_features.features_five}
                </div>
                <div className="absolute left-0 top-[8.34px] w-[8.30px] h-[8.34px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1px] top-[850.13px] w-full h-[58.01px]">
              <div className="absolute left-0 top-0 w-full h-full bg-white/5" />
              <div className="absolute left-[20.38px] top-[18.16px] w-[392px] h-4">
                <div className="absolute left-[20.76px] top-0 text-white text-sm font-medium leading-normal">
                  {t.plan_features.features_six}
                </div>
                <div className="absolute left-0 top-[8.34px] w-[8.30px] h-[8.34px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1px] top-[444px] w-full h-[58.01px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[20.38px] top-[18.16px] w-[392px] h-4">
                <div className="absolute left-[20.76px] top-0 text-white text-sm font-medium leading-normal">
                  {t.plan_features.features_seven}
                </div>
                <div className="absolute left-0 top-[8.34px] w-[8.30px] h-[8.34px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1px] top-[560px] w-full h-[58.01px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[20.38px] top-[18.16px] w-[392px] h-4">
                <div className="absolute left-[20.76px] top-0 text-white text-sm font-medium leading-normal">
                  {t.plan_features.features_eight}
                </div>
                <div className="absolute left-0 top-[8.34px] w-[8.30px] h-[8.34px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1px] top-[676px] w-full h-[58.01px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[20.38px] top-[18.16px] w-[392px] h-4">
                <div className="absolute left-[20.76px] top-0 text-white text-sm font-medium leading-normal">
                  {t.plan_features.features_nine}
                </div>
                <div className="absolute left-0 top-[8.34px] w-[8.30px] h-[8.34px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1px] top-[792px] w-full h-[58.01px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[20.38px] top-[18.16px] w-[392px] h-4">
                <div className="absolute left-[20.76px] top-0 text-white text-sm font-medium leading-normal">
                  {t.plan_features.features_ten}
                </div>
                <div className="absolute left-0 top-[8.34px] w-[8.30px] h-[8.34px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[1px] top-[908px] w-full h-[58.01px]">
              <div className="absolute left-0 top-0 w-full h-full" />
              <div className="absolute left-[20.38px] top-[18.16px] w-[392px] h-4">
                <div className="absolute left-[20.76px] top-0 text-white text-sm font-medium leading-normal">
                  {t.plan_features.features_elevene}
                </div>
                <div className="absolute left-0 top-[8.34px] w-[8.30px] h-[8.34px] bg-[#30a079] rounded-full" />
              </div>
            </div>
            <div className="absolute left-[82px] top-[237px] w-[228px] h-12">
              <div className="absolute left-0 top-0 w-full h-full rounded-[5px]" />
              <div className="absolute button w-[228px] h-12 flex justify-center rounded-[5px] items-center text-center text-white text-lg font-semibold cursor-pointer">
                {t.button_text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}