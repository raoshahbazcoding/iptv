import React from 'react';
import { Header } from "@/components/header";
import { AboutBanner } from "@/components/Aboutus/AboutBanner";
import { Aboutdetails } from "@/components/Aboutus/Aboutdetails";
import { AboutFeatures } from "@/components/Aboutus/AboutFeatures";
import { AboutCard } from "@/components/Aboutus/AboutCard";
import { OurValuesCard } from "@/components/Aboutus/OurValuesCard";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <main>
            <Header />
            <AboutBanner />
            <Aboutdetails />
            <AboutFeatures />
            <AboutCard />
            <OurValuesCard />
            <FeedbackForm />
            <Footer />
        </main>
    );
}
