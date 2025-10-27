// import Link from "next/link";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import HomePageSlider from "./components/HomePageSlider";
const Faqs = dynamic(() => import("./components/Faqs"), {
  suspense: true,
});
// import ScrollAnimation from "./components/ScrollAnimation";
import CoreExpertise from "./components/Expertise-home";
// import HomePageForm from "./components/Homepage-form";
// import CaseStudiesHome from "./components/CaseStudies-Home";
// import TechnologiesSection from "./components/HomePage-Tech";
import Script from "next/script";
// import HeroVideo from "./components/HeroSectionVideo";
// import Image from "next/image";
import HomeData from "@/app/data/Home.json";
// import ScrollAnimation from "./components/ScrollAnimation";
import HeroParticles from "./components/HeroParticles";

// StatItem Component
const StatItem = ({
  imageSrc,
  heading,
  text,
  alt,
}: {
  imageSrc: string;
  heading: string;
  text: string;
  alt: string;
}) => (
  <div className="flex flex-col py-4 text-lg font-light leading-6 text-center w-full min-h-[220px] transition-shadow ease-in-out duration-500">
    {/* Icon container with animated background */}
    <div className="flex justify-center mb-6">
      <div className="relative p-4 rounded-full bg-gradient-to-br from-[#10b981] to-[#10b981] group-hover:scale-110 transition-transform duration-300">
        <div className="absolute inset-0 rounded-full bg-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
        <img
          loading="lazy"
          src={imageSrc}
          alt={alt}
          className="relative z-10 w-16 h-16 filter brightness-0 invert"
        />

        {/* Floating particles effect */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#10b981] rounded-full animate-ping opacity-75"></div>
        <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>
    </div>

    {/* Description text */}
    <div className="flex-grow flex flex-col items-center justify-center">
      <p className="mb-2 font-semibold">{heading}</p>
      <div className="max-w-[280px] text-gray-700 leading-relaxed text-base font-medium group-hover:text-gray-900 transition-colors duration-300">
        {text}
      </div>
    </div>
  </div>
);

export default function Home() {
  const stats = [
    {
      imageSrc: "/stats1.png",
      alt: "Enterprise Software Development",
      heading: "Enterprise Partnerships",
      text: "Partnered with over 250 enterprises worldwide to deliver scalable and future-ready software solutions",
    },
    {
      imageSrc: "/stats2.png",
      alt: "Software Development Company - Successful Deliveries",
      heading: "Successful Deliveries",
      text: "Delivered 400+ successful projects, empowering businesses with innovative digital products",
    },
    {
      imageSrc: "/stats3.png",
      alt: "Global App Development and Testing",
      heading: "App Development & Testing",
      text: "Evaluated and optimized 350+ applications to meet the highest performance and security standards",
    },
    {
      imageSrc: "/stats4.png",
      alt: "Software Quality Assurance - Issues Resolved",
      heading: "Quality Assurance",
      text: "Resolved more than 180k software issues, ensuring seamless user experiences across all platforms",
    },
  ];

  return (
    <div>
      {/* Structured Data for Webpage */}
      <Script
        id="structured-data-webpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "http://schema.org",
            "@graph": [
              {
                "@type": "Webpage",
                "name": "Software Development Company | Green Solution",
                "headline": "Software Development Company - Green Solution",
                "url": "",
                "@id": "",
                "inLanguage": "en-US",
                "datePublished": "2024-10-17",
                "description": "Green Solution is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
                "image": "",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "Software Development Company"
                },
                "isPartOf": {
                  "@type": "WebSite",
                  "@id": ""
                },
                "mainEntity": [{"@id": ""}],
                "hasPart": {"@id": ""}
              },
              {
                "@type": "CreativeWorkSeries",
                "@id": "",
                "isPartOf": {"@id": ""},
                "name": "Software Development Company | Green Solution",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "bestRating": "5",
                  "ratingValue": "4.9",
                  "reviewCount": "49",
                  "url": ""
                }
              },
              {
                "@type": "Service",
                "@id": "",
                "mainEntityOfPage": {"@id": ""},
                "name": "Software Development Company | Green Solution",
                "serviceType": ["Software Development Company"],
                "image": "",
                "provider": {
                  "@type": "Organization",
                  "url": "",
                  "name": "Green Solution",
                  "mainEntityOfPage": {"@id": ""}
                },
                "areaServed": {
                  "@type": "AdministrativeArea",
                  "name": ""
                },
                "audience": {
                  "@type": "Audience",
                  "name": "Software Development Company | Green Solution"
                }
              }
            ]
          }
          `,
        }}
      />
      {/* Structured Data for Website Organization */}
      <Script
        id="structured-data-website-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          [
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "",
              "headline": "Software Development Company",
              "name": "Green Solution",
              "description": "Green Solution is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
              "url": "",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "",
              "name": "Green Solution",
              "url": "",
              "sameAs": [],
              "logo": {
                "@type": "ImageObject",
                "url": "",
                "width": "1800",
                "height": "1200"
              }
            }
          ]
          `,
        }}
      />
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-20">
          <HeroParticles />
        </div>

        {/* Main overlay - Changed to green gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(356deg,#0b0a0a_0%,#1a3a2e_45%,#000000_100%)] z-1"></div>

        {/* Content container */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
          {/* Main content */}
          <div className="w-full max-w-7xl mx-auto text-center md:py-0 py-32">
            {/* Slider content */}
            <div className="md:mb-12 mb-0">
              <HomePageSlider />
            </div>
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#10b981] rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Excellence Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        {/* Background with geometric patterns */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

          {/* Geometric pattern overlay - Changed to green */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 2px, transparent 2px),
                                 radial-gradient(circle at 75% 75%, #10b981 1px, transparent 1px)`,
              backgroundSize: "50px 50px, 30px 30px",
            }}
          ></div>

          {/* Floating shapes - Changed to green */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#10b981]/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-[#10b981]/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#10b981]/15 transform rotate-45 animate-spin"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-[1920px] mx-auto">
            <div className="flex flex-col items-center justify-center text-center mb-16">
              {/* Badge - Changed to green */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-[#10b981]/10 text-[#10b981] text-sm font-semibold rounded-full uppercase tracking-wide">
                  Our Excellence
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight lg:leading-[72px] text-black">
                {HomeData.about.title}
              </h1>

              <h3 className="text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed font-medium">
                {HomeData.about.description}
              </h3>

              {/* Decorative line - Changed to green */}
              <div className="flex justify-center mt-8">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#10b981] to-transparent"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex justify-center">
                  <div className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform transition-all duration-500 ease-out hover:-translate-y-2 w-full max-w-[320px] min-h-[280px] border border-gray-100">
                    {/* Green accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-t-2xl"></div>

                    <StatItem
                      imageSrc={stat.imageSrc}
                      heading={stat.heading}
                      text={stat.text}
                      alt={stat.alt}
                    />

                    {/* Bottom decoration - Changed to green */}
                    <div className="flex justify-center mt-4">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#10b981] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Hover overlay effect - Changed to green */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#10b981]/5 to-[#059669]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background Decorative Elements - Changed to green */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-100 to-transparent rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-50 to-transparent rounded-full opacity-40 translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <h3 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Comprehensive End-to-End
              <span className="block text-[#10b981] lg:mt-3">
                Software Development Solutions
              </span>
            </h3>

            <p className="text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {HomeData.servicesCard.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {HomeData.servicesCard.services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Green accent line */}
                <div className="absolute top-0 left-8 w-12 rounded-full"></div>

                {/* Icon container with green background */}
                <div className="flex md:flex-row flex-col items-start md:space-x-6 max-[768px]:gap-3">
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center shadow-lg">
                      <img
                        src={service.icon}
                        alt={service.alt}
                        className="w-10 h-10 filter brightness-0 invert"
                      />
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-100 rounded-full border-4 border-white"></div>
                  </div>

                  <div className="flex-1 pt-2">
                    <h4 className="text-xl lg:text-2xl font-bold text-black mb-4 group-hover:text-black transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#10b981] to-[#059669] transition-all duration-500 group-hover:w-full rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        {/* Background Decorative Elements - Changed to green */}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-bl from-green-100 to-transparent rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-green-50 to-transparent rounded-full opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header Section */}
          <div className="text-center mb-0 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>

            <h4 className="text-3xl md:text-5xl font-bold text-black md:mb-6 mb-2">
              Who We <span className="text-[#10b981]">Are</span>
            </h4>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Main Description Card */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are a{" "}
                    <span className="font-semibold text-[#10b981]">
                      global leader in IT software development
                    </span>
                    , building and managing high-performance remote
                    engineering teams for ambitious businesses. Since day one,
                    our focus has been on delivering innovative, scalable, and
                    tailored digital solutions that help our clients achieve
                    lasting success.
                  </p>

                  <div className="w-16 h-1 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full"></div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    Powered by a culture of{" "}
                    <span className="font-semibold text-[#10b981]">
                      excellence, innovation, and integrity
                    </span>
                    , we combine cutting-edge technology with deep industry
                    expertise to deliver reliable solutions that make a
                    measurable impact.
                  </p>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {HomeData.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-lg flex items-center justify-center text-white"
                      dangerouslySetInnerHTML={{ __html: highlight.icon }}
                    ></div>
                    <span className="text-sm font-medium text-gray-700">
                      {highlight.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative">
                {/* Decorative background shapes - Changed to green */}
                <div className="absolute -inset-6 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-3xl opacity-10 transform rotate-6"></div>
                <div className="absolute -inset-3 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-2xl opacity-15 transform -rotate-3"></div>

                {/* Main image container */}
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                  <img
                    src="/who-we-are-2.jpg"
                    alt="Software Development Company"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>

                {/* Floating achievement badges - Changed to green */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hidden lg:block">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#10b981]">
                      2018
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      Founded
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hidden lg:block">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#10b981]">
                      5+
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background Decorative Elements - Changed to green */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-100 to-transparent rounded-full opacity-30 -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-green-50 to-transparent rounded-full opacity-40 translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight max-w-4xl mx-auto">
              Why Partner With Us for
              <span className="block text-[#10b981] lg:mt-3">
                Cutting-Edge Software Solutions?
              </span>
            </h3>

            <p className="text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Collaborate with our team to access world-class custom software
              development and innovative digital solutions designed to give
              your business a competitive edge.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Decorative background shape - Changed to green */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-3xl opacity-10 transform rotate-3"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-2xl opacity-20 transform -rotate-2"></div>

                {/* Main image container */}
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                  <img
                    src="/choose-us-main.png"
                    alt="Software Development Services"
                    className="w-full rounded-xl"
                  />
                </div>

                {/* Floating stats card - Changed to green */}
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hidden lg:block">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#10b981]">
                      100+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Projects Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {HomeData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Number Badge - Changed to green */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {feature.number}
                        </div>
                        {/* Connecting line for visual flow */}
                        {index < HomeData.features.length - 1 && (
                          <div className="hidden lg:block absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-green-300 to-transparent"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-bold text-black mb-2 group-hover:text-black transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom accent line - Changed to green */}
                    <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-[#10b981] to-[#059669] group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Background Decorative Elements - Changed to green */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#10b981]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#10b981]/15 to-transparent rounded-full blur-3xl"></div>

        {/* Geometric Background Pattern - Changed to green */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#10b981] rotate-45 rounded-lg"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-[#10b981] rotate-12 rounded-lg"></div>
          <div className="absolute bottom-1/4 left-3/4 w-20 h-20 border-2 border-[#10b981] -rotate-45 rounded-lg"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - CTA Content */}
            <div className="text-white space-y-8">
              {/* Main Heading */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#10b981]/10 border border-[#10b981]/20 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
                  <span className="text-[#10b981] text-sm font-medium">
                    Let's Build Something Extraordinary
                  </span>
                </div>

                <h4 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Looking to Create a
                  <span className="block text-[#10b981]">
                    Custom Software Solution?
                  </span>
                </h4>

                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  Unlock your business potential with innovative,
                  high-performance software tailored precisely to your needs —
                  designed to boost efficiency, scalability, and growth.
                </p>
              </div>

              {/* Additional Features */}
              <div className="flex flex-wrap gap-4 pt-6">
                {[
                  "Free Project Consultation",
                  "Fully Customized Solutions",
                  "24/7 Expert Support",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Stats Grid */}
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
              {HomeData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-[#10b981]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#10b981]/10"
                >
                  <div className="space-y-4">
                    {/* Icon - Changed to green */}
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div
                        className="w-8 h-8 filter invert"
                        dangerouslySetInnerHTML={{
                          __html: stat.fallbackIcon,
                        }}
                      ></div>
                      <div className="text-white hidden">
                        {stat.fallbackIcon}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="text-center">
                      <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-[#10b981] transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 font-medium text-sm lg:text-base">
                        {stat.label}
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line - Changed to green */}
                  <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-[#10b981] to-[#059669] group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Testimonial/Trust Section */}
          <div className="mt-20 pt-12 border-t border-gray-700/50 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-[#10b981] rounded-full border-2 border-gray-900 flex items-center justify-center"
                    >
                      <span className="text-xs font-bold text-white">★</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium">
                  Trusted by Global Industry Leaders
                </span>
              </div>

              <div className="hidden md:block w-px h-6 bg-gray-600"></div>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[#10b981]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">
                  100% Secure & Confidential Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <div className="relative max-md:max-w-7xl lg:px-20 px-6 md:py-20 xl:py-28 py-12 bg-white">
        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#10b981] text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-black mb-4">
              {HomeData.process.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              {HomeData.process.description}
            </p>
            <div className="w-24 h-1 bg-[#10b981] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:order-1 order-2">
              <div className="space-y-8">
                {/* Feature Cards */}
                {HomeData.process.cards.map((card, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#10b981] rounded-lg flex items-center justify-center flex-shrink-0">
                          <div
                            className="w-6 h-6 text-white"
                            dangerouslySetInnerHTML={{ __html: card.icon }}
                          ></div>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-black mb-2">
                            {card.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:order-2 order-1 relative">
              <div className="relative">
                <img
                  src={HomeData.process.processImage}
                  className="w-full h-auto object-cover rounded-xl"
                  alt="Green Solution Development Methodology Process"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development Process Section */}
      <div className="max-w-7xl mx-auto lg:px-10 px-6 md:py-20 py-12 bg-white">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#10b981] text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            Our Workflow
          </div>
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-black mb-4">
            Our Development Journey
          </h2>
          <div className="w-24 h-1 bg-[#10b981] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A clear, proven process that transforms ideas into impactful
            solutions—every step aligned with your vision and business goals.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {HomeData.developmentProcess.processes.map((process, index) => {
            return (
              <div key={index} className="group relative">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-[#10b981] transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                  {/* Background decoration - Changed to green */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#10b981] opacity-5 rounded-full transform translate-x-10 -translate-y-10"></div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center shadow-lg">
                      <img
                        loading="lazy"
                        src={process.image}
                        className="w-8 h-8"
                        alt="process-image"
                      />
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    0{index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#10b981] transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>

                  {/* Progress Bar - Changed to green */}
                  <div className="mt-6 w-full bg-gray-200 rounded-full h-1">
                    <div
                      className={`bg-[#10b981] h-1 rounded-full ${`w-${(index + 1) * 1}/6`} group-hover:w-full transition-all duration-500`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-20">
            {/* Subtitle with green accent */}
            <div className="inline-flex items-center gap-3 bg-[#10b981] bg-opacity-10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
              <span className="text-[#10b981] font-medium text-sm md:text-base uppercase tracking-wider">
                Frequently Asked Questions
              </span>
              <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#000000] mb-6">
              <span className="block">Got</span>
              <span className="block text-[#10b981]">Questions?</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Explore answers to our most common queries and learn more about
              our services, processes, and capabilities. Can't find the
              information you need? Our team is just a message away and ready
              to assist you.
            </p>

            {/* Decorative line */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-px bg-gray-300 w-16"></div>
              <div className="w-3 h-3 bg-[#10b981] rounded-full mx-4"></div>
              <div className="h-px bg-gray-300 w-16"></div>
            </div>
          </div>

          {/* FAQ Content */}
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center py-20">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-[#10b981] border-opacity-30 rounded-full animate-spin">
                    <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-[#10b981] rounded-full animate-spin"></div>
                  </div>
                </div>
                <p className="mt-6 text-gray-600 text-lg font-medium">
                  Loading FAQs...
                </p>
                <p className="mt-2 text-gray-500 text-sm">
                  Please wait while we prepare the latest answers for you.
                </p>
              </div>
            }
          >
            <Faqs />
          </Suspense>
        </div>
      </section>
    </div>
  );
}