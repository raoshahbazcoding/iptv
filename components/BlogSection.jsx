"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export function BlogSectin() {
  const router = useRouter();
  const articles = [
    {
      title: "Exploring the Future of IPTV: Trends to Watch in 2025",
      description: "Dive into emerging technologies and what they mean for the future of IPTV services.",
      image: "./image(9).png",
      author: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      title: "How to Optimize Your Internet Connection for Seamless Streaming",
      description: "Enhance your IPTV experience with these internet optimization tips.",
      image: "./image(9).png",
      author: "Tracey Wilson",
      date: "August 20, 2022",
    },
    {
      title: "A Beginner’s Guide to Setting Up Your IPTV Service",
      description: "Step-by-step guide to setting up IPTV for the first time.",
      image: "./image(9).png",
      author: "Tracey Wilson",
      date: "August 20, 2022",
    },

  ];

  const handleImageClick = (article, id) => {
    localStorage.setItem("article", JSON.stringify(article))
    router.push(`/blogDetails?id=${id}`);
  };

  return (
    <div className="flex flex-wrap p-4 justify-center w-full py-16 lg:py-32 ">
        {/* Heading Section */}
            <div className="relative flex flex-col items-center text-center w-full px-4 mb-20">
                <h1 className="Features_label border-emerald-600/50 font-bold uppercase text-emerald-600/10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px]">
                    Blogs
                </h1>
                <h2 className="text-xs sm:text-base md:text-lg lg:text-2xl font-bold absolute top-[75%] transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
                    More from out latest blogs
                </h2>
            </div>
      <div className="flex  gap-6 justify-center px-14">
        
        {articles.map((article, index) => (
          <motion.div
            onClick={() => handleImageClick(article, index)}
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5, duration: 0.5 }} // staggered animation
          >
            <div className="bg-[#1b1b1b] rounded-xl p-4 shadow-lg w-[350px] lg:w-[430px] 2xl:w-[470px] cursor-pointer transition-all duration-200 hover:scale-105">
              <motion.div
                className="relative"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={430}
                  height={250}
                  className="object-cover rounded-xl"
                />
              </motion.div>
              <div className="mt-4 space-y-3">
                <div className="flex space-x-3 mb-2">
                  <span className="bg-[#0b2c2b] text-[#30a079] px-4 py-1 rounded-md text-sm">
                    IPTV
                  </span>
                  <span className="bg-[#0b2c2b] text-[#30a079] px-4 py-1 rounded-md text-sm">
                    Streaming
                  </span>
                </div>
                <h2 className="text-white text-xl font-semibold leading-tight">
                  {article.title}
                </h2>
                <p className="text-white text-sm mt-2">{article.description}</p>
                <div className="flex items-center mt-4 space-x-3">
                  <Image
                    className="w-10 h-10 rounded-full"
                    src="./Rectangle.png"
                    alt="Author"
                    width={40}
                    height={40}
                  />
                  <div className="text-[#97989f]">
                    <p className="text-sm font-medium">{article.author}</p>
                    <p className="text-xs">{article.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
