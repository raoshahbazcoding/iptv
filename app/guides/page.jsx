import React from 'react';
import { Header } from "@/components/header";
import { GuideBanner } from "@/components/Guide/GuideBanner";
import { IptvInstallationGuide } from "@/components/Guide/IptvInstallationGuide";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Footer } from "@/components/Footer";

export default function page() {
    return (
        <main>
            <Header />
            <GuideBanner />
            <IptvInstallationGuide />
            <FeedbackForm />
            <Footer />
        </main>
    )
}
