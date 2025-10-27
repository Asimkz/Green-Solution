
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 
  title: "Software Development Company in the USA & PAKISTAN | Green-Solution",
  description: "GreenSolution is the leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
  keywords: [
    "GreenSolution",
    "software development company",
    "software development services",
  ],
  openGraph: {
    type: "website",
    url: "",
    title: "Software Development Company in the USA | GreenSolution",
    description: "GreenSolution is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
    images: [{ url: "", width: 1200, height: 630, alt: "GreenSolution Logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32X32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
