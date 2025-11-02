"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function FooterContainer() {
  const [showAddress, setAddress] = useState(true);
  const handleClick = () => setAddress(!showAddress);
  const currentPath = usePathname();
  useEffect(() => setAddress(true), [currentPath]);

  const socialIcons = [
    {
      src: "/facebook-icon.svg",
      alt: "facebook",
      link: "https://www.facebook.com/itsgreensolution",
    },
    // {
    //   src: "/instagram-icon.svg",
    //   alt: "Instagram",
    //   link: "https://www.instagram.com/",
    // },
    // { src: "/twitter-new.svg", alt: "twitter", link: "https://twitter.com/" },
    {
      src: "/linkedin-icon.svg",
      alt: "Linkedin",
      link: "https://www.linkedin.com/company/itsgreensolution",
    },
    // { src: "/youtube.png", alt: "Youtube", link: "https://www.youtube.com/" },
  ];

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background: "#10b981",
          backgroundImage:
            "linear-gradient(356deg, #0f172a 0%, #1e293b 45%, #0f172a 100%)",
        }}
      ></div>
      <div className="relative flex flex-col items-center py-8 w-full">
        <div className="w-full max-w-[1582px] lg:px-10 px-5 grid xl:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="flex flex-col xl:col-span-1">
            <div className="text-lg font-light text-white">
              <div>
                <h1 className="text-3xl font-bold text-[#10b981] mb-4">
                  GreenSolution
                </h1>
                <p className="mt-4 max-w-sm text-gray-300 leading-relaxed">
                  Process-driven web development company specializing in custom 
                  solutions for SMEs and international clients. Building scalable 
                  digital products with modern technologies.
                </p>
              </div>
              <div className="mt-6 flex gap-4">
                {socialIcons.map((icon, i) => (
                  <Link
                    key={i}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#10b981] rounded-full p-2 transition-all duration-300"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <div className="text-white flex flex-col items-start">
              <div className="text-xl font-semibold text-[#10b981] mb-4">Quick Links</div>
              <div className="text-base font-light flex flex-col gap-3">
                <Link href="/" className="hover:text-[#10b981] transition-colors duration-300">
                  Home
                </Link>
                <Link href="/services" className="hover:text-[#10b981] transition-colors duration-300">
                  Services
                </Link>
                <Link href="/about" className="hover:text-[#10b981] transition-colors duration-300">
                  About Us
                </Link>
                <Link href="/contact-us" className="hover:text-[#10b981] transition-colors duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <div className="text-white flex flex-col items-start">
              <div className="text-xl font-semibold text-[#10b981] mb-4">Our Services</div>
              <div className="text-base font-light flex flex-col gap-3">
                <Link href="/services" className="hover:text-[#10b981] transition-colors duration-300">
                  Custom Web Development
                </Link>
                <Link href="/services" className="hover:text-[#10b981] transition-colors duration-300">
                  E-commerce Solutions
                </Link>
                <Link href="/services" className="hover:text-[#10b981] transition-colors duration-300">
                  Medical Clinic Solutions
                </Link>
                <Link href="/services" className="hover:text-[#10b981] transition-colors duration-300">
                  Educational Institute Solutions
                </Link>
                <Link href="/services" className="hover:text-[#10b981] transition-colors duration-300">
                  Recurring Maintenance
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <div className="text-white flex flex-col items-start">
              <div className="text-xl font-semibold text-[#10b981] mb-4">Contact Info</div>
              <div className="text-base font-light space-y-4">
               
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:syed@itsgreensolution.com" className="hover:text-[#10b981] transition-colors duration-300">
                    syed@itsgreensolution.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    Hyderabad, Pakistan<br />
                    Serving clients globally
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
                    </svg>
                  </div>
                  <a 
                    href="https://wa.me/923321380511" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#10b981] transition-colors duration-300"
                  >
                  +92 332 1380511
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20 w-full max-w-[1582px]">
          <div className="text-center text-gray-300 text-sm">
            <p>Copyright © 2025 GreenSolution - Process-Driven Web Development Company. All rights reserved.</p>
            <p className="mt-1 text-xs text-gray-400">
              Specializing in SME digital transformation and international web solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}