import type { Metadata } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Script from "next/script";
import "../globals.css";
import HomeNavigationContainer from "./components/home-navigation-container";
import CookieConsent from "./components/CookieConsent";
import { Inter } from "next/font/google";

// ✅ Replace Google Fonts with `next/font`
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Makes font swap non-blocking
});

// ✅ Dynamic imports
const FooterContainer = dynamic(() => import("./components/footer-container"), { suspense: true });
const DeferredFormDisplay = dynamic(() => import("./components/DeferredFormDisplay"), { ssr: false, loading: () => null });
const DeferredScrollToTop = dynamic(() => import("./components/DeferredScrollToTop"), { ssr: false, loading: () => null });
// const GreetingPopup = dynamic(() => import("./components/GreetingPopup"), { suspense: true, ssr: false });

export const metadata: Metadata = {
  // metadataBase: new URL(""), // Fixed URL with proper domain
  title: "Software Development Company in the USA | GreenSolution",
  description: "GreenSolution is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
  keywords: ["GreenSolution", "software development company", "software development services"],
  alternates: { canonical: "" },
  openGraph: {
    type: "website",
    url: "",
    title: "Software Development Company in the USA | GreenSolution",
    description: "GreenSolution is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
    images: [{ url: "https://www.innovasynx.com/thankyou.jpg", width: 1200, height: 630, alt: "innovaSynx Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in the USA | GreenSolution",
    description: "GreenSolution is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
    images: ["https://www.innovasynx.com/thankyou.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32X32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}

        {/* ✅ JSON-LD business info */}
        <Script id="ld-business" type="application/ld+json" strategy="lazyOnload">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GreenSolution",
            "image": "https://www.innovasynx.com/logo.png",
            "url": "",
            "telephone": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "",
              "addressLocality": "",
              "addressRegion": "",
              "postalCode": "",
              "addressCountry": "US",
            },
            // "openingHours": "Mo-Fr 09:00-17:00",
            // "sameAs": [
            //   "https://www.linkedin.com/company/innovasnx",
            //   "https://www.facebook.com/innovasynx",
            // ],
          })}
        </Script>
      </head>
      <body className={inter.className}>

          {/* ✅ Page Content */}
          <div className="flex flex-col bg-white relative">
            <HomeNavigationContainer />
            <CookieConsent />
            {children}
            {/* <Suspense fallback={null}>
              <DeferredFormDisplay />
            </Suspense> */}
            <Suspense fallback={<div className="h-[300px] bg-gray-100 animate-pulse" />}>
              <FooterContainer />
            </Suspense>
            {/* <Suspense fallback={null}>
              <DeferredScrollToTop />
            </Suspense> */}
            {/* <Suspense fallback={<div className="h-[250px] bg-gray-100 animate-pulse" />}>
                <GreetingPopup />
              </Suspense> */}
          </div>

        {/* ✅ Additional JSON-LD */}
        <Script type="application/ld+json" strategy="lazyOnload" id="json-ld">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            name: "GreenSolution",
            headline: "Software Development Company in the USA | GreenSolution",
            url: "",
            inLanguage: "en-US",
            datePublished: "2024-08-20",
            description: "GreenSolution is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
            image: "https://www.innovasynx.com/logo.svg",
            isPartOf: { "@type": "WebSite", url: "" },
            mainEntity: [{ "@type": "Organization", name: "GreenSolution" }],
            aggregateRating: { "@type": "AggregateRating", bestRating: "5", ratingValue: "4.9", reviewCount: "100" },
          })}
        </Script>
      </body>
    </html>
  );
}
