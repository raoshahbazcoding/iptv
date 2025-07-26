import React from 'react';
import { Header } from "@/components/header";
import { ContectBanner } from "@/components/Contact/ContectBanner";
import { Form } from "@/components/Contact/Form";
import { ContectCard } from "@/components/Contact/ContectCard";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Footer } from "@/components/Footer";

export default function Page() {
    return (
        <main>
            <Header />
            <ContectBanner />
            <Form />
            <ContectCard />
            <FeedbackForm />
            <Footer />
        </main>
    );
}
