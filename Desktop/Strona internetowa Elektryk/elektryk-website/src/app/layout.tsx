import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import JsonLd from "@/components/SEO/JsonLd";
import CustomCursor from "@/components/ui/CustomCursor";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elektryk Toruń – Profesjonalne Usługi Elektryczne 24/7",
  description: "Elektryk Toruń – kompleksowe usługi: montaż, modernizacja i konserwacja instalacji. Awaryjne naprawy i szybki dojazd. Zaufaj profesjonalistom.",
  keywords: "elektryk Toruń, elektryk Warszawa, usługi elektryczne, instalacje elektryczne, naprawy elektryczne, modernizacje, oświetlenie LED, inteligentny dom, monitoring, fotowoltaika, pomiary elektryczne, Kołłątaja Toruń",
  authors: [{ name: "Elektryk Toruń" }],
  creator: "Elektryk Toruń",
  publisher: "Elektryk Toruń",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://elektrykpro.pl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Elektryk Toruń – Profesjonalne Usługi Elektryczne 24/7",
    description: "Elektryk Toruń – kompleksowe usługi: montaż, modernizacja i konserwacja instalacji. Awaryjne naprawy i szybki dojazd. Zaufaj profesjonalistom.",
    url: 'https://elektrykpro.pl',
    siteName: 'Elektryk Toruń',
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: '/images/UX Pilot Design.png',
        width: 1200,
        height: 630,
        alt: 'Elektryk Toruń - Profesjonalne usługi elektryczne',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elektryk Toruń – Profesjonalne Usługi Elektryczne 24/7",
    description: "Elektryk Toruń – kompleksowe usługi: montaż, modernizacja i konserwacja instalacji. Awaryjne naprawy i szybki dojazd.",
    images: ['/images/UX Pilot Design.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={manrope.variable}>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
        <JsonLd />
      </head>
      <body className="antialiased">
        <CustomCursor />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}