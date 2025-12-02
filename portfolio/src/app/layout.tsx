import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valentino Garcia Susini | Full-Stack Software Developer",
  description:
    "Full-stack software developer specializing in systems programming (C, C++), web technologies (React, Next.js), and building robust applications. Currently studying at 42 Vienna.",
  keywords: [
    "software developer",
    "full-stack developer",
    "systems programming",
    "C",
    "C++",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "42 Vienna",
    "Vienna",
    "Austria",
  ],
  authors: [{ name: "Valentino Garcia Susini" }],
  openGraph: {
    title: "Valentino Garcia Susini | Full-Stack Software Developer",
    description:
      "Full-stack software developer specializing in systems programming and web technologies.",
    url: "https://valgsit.vercel.app",
    siteName: "Valentino Garcia Susini Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentino Garcia Susini | Full-Stack Software Developer",
    description:
      "Full-stack software developer specializing in systems programming and web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-gray-950 text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
