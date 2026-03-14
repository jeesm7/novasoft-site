import type { Metadata } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HotProspectTracker from "@/components/HotProspectTracker";
import { OrganizationSchema, WebsiteSchema, SoftwareApplicationSchema } from "@/components/SchemaMarkup";

// Display font - distinctive, modern, geometric
const sora = Sora({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sora',
  weight: ['400', '500', '600', '700'],
});

// Body font - highly readable, professional
const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-source-sans',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://novasoftai.com'),
  title: {
    default: "Novasoft AI - AI Assistant for Small Business Automation",
    template: "%s | Novasoft AI"
  },
  description: "AI-powered business assistant that handles customer communication, appointment scheduling, lead follow-up, and more. 24/7 automation for small businesses. Start free trial.",
  keywords: ["AI assistant for small business", "business automation", "AI chatbot", "customer service automation", "virtual assistant AI", "appointment scheduling AI", "lead response automation", "small business AI tools"],
  authors: [{ name: "Novasoft AI" }],
  creator: "Novasoft AI",
  publisher: "Novasoft AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Novasoft AI - AI Assistant for Small Business Automation",
    description: "Stop hiring. Start automating. AI assistant that handles customer communication, scheduling, and follow-ups 24/7.",
    type: "website",
    locale: "en_US",
    siteName: "Novasoft AI",
    url: "https://novasoftai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novasoft AI - AI Assistant for Small Business",
    description: "AI-powered assistant that handles customer communication 24/7. Start free trial.",
    creator: "@novasoftai",
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
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://novasoftai.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${sourceSans.variable}`}>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <SoftwareApplicationSchema />
      </head>
      <body className="min-h-screen flex flex-col w-full">
        <HotProspectTracker />
        <Header />
        <main className="flex-1 pt-16 md:pt-20 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
