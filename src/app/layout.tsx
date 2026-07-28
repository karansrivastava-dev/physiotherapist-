import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dr. Deepti Mishra | Premium Physiotherapy & Rehabilitation",
  description: "Expert physiotherapy by Dr. Deepti Mishra. Helping you move better and live pain-free with personalized, evidence-based care in a premium environment.",
  openGraph: {
    title: "Dr. Deepti Mishra | Premium Physiotherapy",
    description: "Expert physiotherapy care. Helping you move better and live pain-free.",
    url: "https://deeptimishra.com", // Placeholder
    siteName: "Dr. Deepti Mishra Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-brand-bg text-brand-secondary selection:bg-brand-primary selection:text-white flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
