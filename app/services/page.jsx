import React from 'react';
import { Header } from "@/components/header";
import { ServiceBanner } from "@/components/Service/ServiceBanner";
import { ChannelsSection } from "@/components/Service/ChannelsSection";
import { MoviesSection } from "@/components/Service/MoviesSection";
import { Count } from "@/components/Service/Count";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <main>
            <Header />
            <ServiceBanner />
            <ChannelsSection />
            <MoviesSection />
            <Count />
            <FeedbackForm />
            <Footer />
        </main>
    )
}

