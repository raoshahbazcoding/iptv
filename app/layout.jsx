import "@/styles/globals.css"
import { Poppins } from "next/font/google";
import { LanguageProvider } from "@/components/contexts/LanguageContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"] // Specify the weights you need
})

export const metadata = {
  title: {
    default: "Express IPTV",
    template: "%s | Express IPTV",
  },
  icons: {
    icon: "/favicon_32x32.png",
    apple: "/favicon_32x32.png",
  },
  description:
    "Experience a superior level of entertainment tailored for the modern viewer with Express IPTV's unmatched streaming experience.",
  keywords: ["IPTV", "streaming", "live TV", "on-demand", "entertainment"],
  authors: [{ name: "Express IPTV" }],
  creator: "Express IPTV",
  publisher: "Express IPTV",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.expressiptv.com/",
    siteName: "Express IPTV",
    title: "Express IPTV - Future of Streaming",
    description:
      "Experience a superior level of entertainment tailored for the modern viewer with Express IPTV's unmatched streaming experience.",
    images: [
      {
        url: "https://www.expressiptv.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Express IPTV - Future of Streaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Express IPTV - Future of Streaming",
    description:
      "Experience a superior level of entertainment tailored for the modern viewer with Express IPTV's unmatched streaming experience.",
    images: ["https://www.expressiptv.com/twitter-image.jpg"],
    creator: "@expressiptv",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={poppins.className}>
        <div className=""><LanguageProvider>{children}</LanguageProvider></div>
      </body>
    </html>
  )
}