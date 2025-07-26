"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { FeedbackForm } from "@/components/FeedbackForm";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function page() {
  const [platform, setplatform] = useState({})
  useEffect(() => {
    setplatform(JSON.parse(localStorage.getItem("platform")))
  }, [])
  return (
    <>
      <Header />
      <div className="w-full h-auto bg-black mb-10">
        <div className="relative flex justify-center h-[50vh]">
          <div className="absolute inset-0 bg-[#050505] h-[50vh] flex flex-col justify-center items-center py-12 lg:py-40 px-4 text-center gap-7">
            <p className="font-bold text-3xl md:text-5xl">
              {platform.name}
            </p>
            <h1 className="text-xl md:text-3xl font-semibold z-10 text-[#30a079]">
              {platform.description}
            </h1>
          </div>
          <img
            className="absolute inset-0 w-full h-[50vh] opacity-20 object-cover"
            src="./blog_image.png"
            alt="Cinema background"
          />
        </div>


        <div className="max-w-5xl mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto px-4 mt-10 flex justify-center mb-5 py-5">
            <Image
              src="./blogdetiles.jpg"
              width={120}
              height={0}
              className="w-full max-w-2xl h-auto rounded-2xl "
              alt=""
            />
          </div>
          <h1 className="text-xl md:text-3xl font-semibold">1. The World of Productivity and Task Management</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Discover strategies to refine your daily routines, explore new
            features that enhance collaboration, and learn how to navigate the
            complexities of modern project management. Whether you're an
            individual looking to stay organized or a team aiming to
            improve coordination, our curated content is designed to inspire and
            empower.
          </p>
          <h1 className="text-xl md:text-3xl font-semibold mt-10">2. Stay Informed, Work Smarter</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Explore expert insights, actionable tips, and the latest trends in
            task management to elevate your productivity and achieve your goals.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto px-4 mt-10 flex justify-center mb-5 py-5">
            <Image
              src="./blogdetiles.jpg"
              width={120}
              height={0}
              className="w-full max-w-2xl h-auto rounded-2xl "
              alt=""
            />
          </div>
          <h1 className="text-xl md:text-3xl font-semibold">3. The World of Productivity and Task Management</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Discover strategies to refine your daily routines, explore new
            features that enhance collaboration, and learn how to navigate the
            complexities of modern project management. Whether you're an
            individual looking to stay organized or a team aiming to
            improve coordination, our curated content is designed to inspire and
            empower.
          </p>

          <h1 className="text-xl md:text-3xl font-semibold mt-10">4. Stay Informed, Work Smarter</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Explore expert insights, actionable tips, and the latest trends in
            task management to elevate your productivity and achieve your goals.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto px-4 mt-10 flex justify-center mb-5 py-5">
            <Image
              src="./blogdetiles.jpg"
              width={120}
              height={0}
              className="w-full max-w-2xl h-auto rounded-2xl "
              alt=""
            />
          </div>
          <h1 className="text-xl md:text-3xl font-semibold">5. The World of Productivity and Task Management</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Discover strategies to refine your daily routines, explore new
            features that enhance collaboration, and learn how to navigate the
            complexities of modern project management. Whether you're an
            individual looking to stay organized or a team aiming to
            improve coordination, our curated content is designed to inspire and
            empower.
          </p>

          <h1 className="text-xl md:text-3xl font-semibold mt-10">6. Stay Informed, Work Smarter</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Explore expert insights, actionable tips, and the latest trends in
            task management to elevate your productivity and achieve your goals.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-10">
          <div className="max-w-5xl mx-auto px-4 mt-10 flex justify-center mb-5 py-5">
            <Image
              src="./blogdetiles.jpg"
              width={120}
              height={0}
              className="w-full max-w-2xl h-auto rounded-2xl "
              alt=""
            />
          </div>
          <h1 className="text-xl md:text-3xl font-semibold">7. The World of Productivity and Task Management</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Discover strategies to refine your daily routines, explore new
            features that enhance collaboration, and learn how to navigate the
            complexities of modern project management. Whether you're an
            individual looking to stay organized or a team aiming to
            improve coordination, our curated content is designed to inspire and
            empower.
          </p>

          <h1 className="text-xl md:text-3xl font-semibold mt-10">8. Stay Informed, Work Smarter</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Explore expert insights, actionable tips, and the latest trends in
            task management to elevate your productivity and achieve your goals.
          </p>
        </div>
      </div>
      <FeedbackForm />
      <Footer />
    </>
  );
};