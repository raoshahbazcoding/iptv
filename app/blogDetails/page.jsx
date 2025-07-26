"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { FeedbackForm } from "@/components/FeedbackForm";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function page() {
  const [platform, setplatform] = useState({})
  useEffect(() => {
    setplatform(JSON.parse(localStorage.getItem("article")))
  }, [])
  return (
    <>
      <Header />
      <div className="w-full h-auto bg-black pb-[6vh]">
        <div className="relative flex justify-center pt-32">
          <div className="absolute inset-0 bg-[#050505] h-[60vh] flex flex-col justify-center items-center py-12 lg:py-40 px-4 text-center">
            <p className="text-[#2ddb81] font-bold border border-[#2ddb81] py-1 px-3 rounded-full text-sm md:text-base">
              Blog Details
            </p>
            <h1 className="text-3xl w-6/12 md:text-5xl/[1.5] font-medium mt-12 z-10">
              {platform.title}
            </h1>
          </div>
          <img
            className="absolute inset-0 w-full h-[60vh] opacity-20 object-cover"
            src="./blog_image.png"
            alt="Cinema background"
          />
        </div>

        <div className="flex items-center justify-center pt-[50vh] md:pt-[65vh] px-4">
          <Image
            src="./blogdetiles.jpg"
            width={120}
            height={0}
            className="w-full max-w-6xl h-auto rounded-2xl"
            alt=""
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-10">
          <h1 className="text-3xl md:text-5xl font-semibold">The World of Productivity and Task Management</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Discover strategies to refine your daily routines, explore new
            features that enhance collaboration, and learn how to navigate the
            complexities of modern project management. Whether you're an
            individual looking to stay organized or a team aiming to
            improve coordination, our curated content is designed to inspire and
            empower.
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold mt-10">Stay Informed, Work Smarter</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Explore expert insights, actionable tips, and the latest trends in
            task management to elevate your productivity and achieve your goals.
          </p>

          <ul className="list-disc text-base md:text-lg text-gray-400 mt-5 pl-5 space-y-4">
            <li><strong className="text-white">Latest Trends Uncovered:</strong> Stay ahead with updates on technology & strategies shaping the task management world.</li>
            <li><strong className="text-white">Actionable Productivity Tips:</strong> Discover practical advice to streamline your workflows and make the most of your time.</li>
            <li><strong className="text-white">Expert Insights:</strong> Learn from industry leaders and gain valuable perspectives to optimize your team’s collaboration.</li>
            <li><strong className="text-white">Success Stories:</strong> Be inspired by real-world examples of how businesses and individuals achieve their goals with smarter task management.</li>
            <li><strong className="text-white">How-To Guides:</strong> Step-by-step articles that simplify complex processes and help you master new tools and techniques.</li>
          </ul>

          <h1 className="text-3xl md:text-5xl font-semibold mt-10">Discover Strategies to Refine Your Daily Routines</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Explore new features that enhance collaboration, and learn how to navigate the complexities of modern project management.
            Whether you're an individual looking to stay organized or a team aiming to improve coordination, our curated content is designed to inspire and empower.
          </p>

          <div className="bg-gray-800 py-10 rounded-xl w-full text-center mt-16 px-4">
            <p className="text-xl md:text-3xl font-bold text-white">
              "Productivity isn’t about doing more; it’s about doing what matters most. Stay informed, stay focused, and transform the way you work."
            </p>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold mt-10">Conclusion</h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-relaxed">
            Integrating effective task management strategies into your daily workflow is the key to boosting productivity and achieving your goals.
            By embracing modern tools, staying informed about industry trends, and optimizing your processes, you set yourself up for success.
            Whether you’re managing individual tasks or leading a team, the right approach can make all the difference in how efficiently and effectively you work.
          </p>
        </div>
      </div>
      <FeedbackForm />
      <Footer />
    </>
  );
};