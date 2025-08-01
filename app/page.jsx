import React from 'react';
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { BlogSectin } from "@/components/BlogSection";
import { HelpCenter } from "@/components/HelpCenter";
import { Features } from "@/components/features";
import { AboutCard } from "@/components/Aboutus/AboutCard";
import { Devices } from "@/components/Devices";
import { Platforms } from "@/components/Platforms";
import { NonStopEntertainment } from "@/components/NonStopEntertainment";
import { StreamingAnywhere } from "@/components/StreamingAnywhere";
import { Price } from "@/components/Pricing/Price";
import { HowItWorks } from "@/components/HowItWorks";
import { Client } from "@/components/Client";
import { Footer } from "@/components/Footer";
import { FeedbackForm } from "@/components/FeedbackForm";

export const metadata = {
  title: "Express IPTV",
  icons: {
    icon: "/favicon_32x32.png",
    apple: "/favicon_32x32.png",
  },
  description: "Discover Express IPTV's cutting-edge streaming technology. Access live TV, on-demand content, and exclusive features for the ultimate entertainment experience.",
  openGraph: {
    title: "Express IPTV",
    description: "Discover Express IPTV's cutting-edge streaming technology. Access live TV, on-demand content, and exclusive features for the ultimate entertainment experience.",
  },
}

export default function HomePage() {
  return (
    <div >
      <Header /> 
      <Hero />  
      <Stats />
      <Features />
      <AboutCard />
      <Devices />
      <Platforms />
      <NonStopEntertainment />
      <StreamingAnywhere />
      <Price />
      <HowItWorks />
      {/* <Client /> */}
      <HelpCenter />
      <BlogSectin/>
      <FeedbackForm />
      <Footer />
    </div>
  )
}