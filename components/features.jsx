"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image"
import { motion } from 'framer-motion';
import { useLanguage } from "@/components/contexts/LanguageContext";
import { translations } from "@/components/translations";


export function Features() {
  const { language } = useLanguage()
  const t = translations[language].features_section

  const featuresLeft = [
    { icon: "./Live_TV_fea.png", title: t.Live_TV.title, description: t.Live_TV.description },
    { icon: "./video-play.png", title: t.video_play.title, description: t.video_play.description },
    { icon: "./Catch-up_Tv.png", title: t.Catchup_Tv.title, description: t.Catchup_Tv.description },
  ]
  const featuresRight = [
    { icon: "./EPG.png", title: t.EPG.title, description: t.EPG.description },
    { icon: "./Multi-Language.png", title: t.Multi_Language.title, description: t.Multi_Language.description },
    { icon: "./Search&Filter_Options.png", title: t.Search_Filter_Options.title, description: t.Search_Filter_Options.description },
  ]

  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 30% of the component is visible
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

  return (
    <div
      className={`flex lg:w-full flex-col gap-6 leading-[normal] text-white`}
      ref={divRef}
    >
      <div className="relative flex flex-col items-center text-center w-full px-4 py-12">
        <h1 className="Features_label text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px]">
          {t.Title}
        </h1>
        <h2 className="text-xl sm:text-base md:text-lg lg:text-2xl font-bold absolute top-[65%] transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
          {t.heading}
          <span className="text-[#2EAE8C]"> {t.highlighted_text}</span>
        </h2>
      </div>
      <div className="flex  justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center xl:w-[1200px] 2xl:w-[1500px]  justify-center  font-medium " >
          <div className="flex flex-col gap-[29px] self-stretch text-[13px] leading-[23px]" >
            {isVisible && featuresLeft.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 1 }}
              >
                <FeatureCard icon={item.icon} title={item.title} description={item.description} />
              </motion.div>
            ))}
          </div>
          {isVisible && <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <div className="w-[300px] lg:w-[400px]  h-[756px] relative my-10">
              <div className="w-full h-[830px] xl left-0 top-0 absolute bg-[#141414] rounded-[30px] border-8 border-white/10  overflow-hidden">
                <div className="absolute top-5 right-5 z-50 w-14 h-14 bg-[#1A1A1A] border-[#26262649] border-4 rounded-xl flex justify-center content-center">
                  <Image
                    src="./Icon.png"
                    alt="Toggle menu"
                    width={30}
                    height={30}
                    className="object-contain" />
                </div>
                <div className="h-[670px]  absolute flex-col justify-start items-center ">
                  <div className="self-stretch h-[550px] flex-col justify-start items-center gap-2.5 flex overflow-hidden">
                    <div className="w-auto h-40 justify-start items-start gap-2.5 inline-flex">
                      <Image
                        src="./Sub_Container.png"
                        alt="Sub Container"
                        width={0}
                        height={0}
                        className="object-contain w-auto h-auto" />
                    </div>
                  </div>
                  <div className="w-[300px] lg:w-[400px] h-[239px] flex-col  items-start   gap-[30px] flex -mt-12 ">
                    <div className="h-[157px] flex-col justify-center items-center gap-2.5 flex">
                      <div className=" text-white sm:text-[25px] text-[22px] font-bold leading-[42px] px-6 sm:w-[80%]">{t.best_stream_section.title}</div>
                      <div className=" text-[#999999] sm:text-[16px] text-[12px] px-6 font-normal leading-[21px] sm:w-[80%]">{t.best_stream_section.        description}</div>
                      </div>
                      <div className="px-6 py-3.5 bg-[#30a079] rounded-lg justify-center ml-5 sm:ml-[15%] items-center gap-1 inline-flex">
                      <div className="w-6 h-6 pl-[4.50px] pr-[4.21px] py-[3.78px] justify-center items-center flex overflow-hidden" />
                      <div className="text-white text-sm  font-semibold leading-[21px] flex gap-2">
                        <Image
                          src="./Play.png"
                          alt="Play Video Icon"
                          width={0}
                          height={0}
                          className="object-contain w-6 h-6 rounded-lg" />
                        {t.Button_text}</div>
                      </div>
                  </div>
                </div>
                <div className="w-[200.92px] h-[168.92px]  left-[128.08px] max-sm:left-[90px] top-[168.06px] absolute">
                  <Image
                    src="./Feature_Card.png"
                    alt="Feature Card"
                    width={0}
                    height={0}
                    className="object-contain w-auto h-auto" />
                </div>
              </div>
            
            </div>
          </motion.div>}
          <div className="flex flex-col items-end max-sm:my-20 gap-[29px] self-stretch text-[13px] leading-[23px]" >
            {isVisible && featuresRight.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 1 }}
              >
                <FeatureCard icon={item.icon} title={item.title} description={item.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex max-sm:w-[300px]  xl:w-[350px] 2xl:w-[400px] flex-col items-start justify-center gap-3 rounded-[35px] border-x-[0.95px] border-t-[0.95px] border-solid border-x-white/20 border-y-white/20 bg-neutral-900 pb-[34px] pl-[34px] pr-11 pt-11 [border-bottom-width:0.95px] cursor-pointer transition-all duration-300 hover:scale-105" >
    <div className="relative flex items-center p-5 ">
      <div className="bg-[#30A179] w-20 h-20 rounded-full flex justify-center content-center items-center">
        <Image
          src={icon}
          alt={title}
          width={0}
          height={0}
          className="w-9 h-9" />
      </div>
    </div>
    <div className="pt-[13px] text-left text-[20px] ">
      {title}
    </div>
    <div className="flex  items-start">
      <p>
        {description}
      </p>
    </div>
  </div>
);