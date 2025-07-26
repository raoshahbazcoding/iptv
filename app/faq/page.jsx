import React from 'react';
import { Header } from "@/components/header";
import { FAQBanner } from "@/components/FAQ/FAQBanner";
import { FaqList } from "@/components/FAQ/FaqList";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Footer } from "@/components/Footer";

export default function page() {
    return (
        <main>
            <Header />
            <FAQBanner />
            <FaqList />
            <FeedbackForm />
            <Footer />
        </main>
    )
}
