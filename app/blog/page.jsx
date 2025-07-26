import React from 'react';
import { Header } from "@/components/header";
import { BlogBanner } from "@/components/Blog/BlogBanner";
import { IPTVArticles } from "@/components/Blog/IPTVArticles";
import { FeedbackForm } from "@/components/FeedbackForm";
import { Footer } from "@/components/Footer";

export default function page() {
    return (
        <main>
            <Header />
            <BlogBanner />
            <IPTVArticles />
            <FeedbackForm />
            <Footer />
        </main>
    )
}
