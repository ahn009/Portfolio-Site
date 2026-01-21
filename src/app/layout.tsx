import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadawais.dev"),
  title: "Muhammad Awais | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Muhammad Awais - Full Stack Developer specializing in MERN Stack, Next.js, React, and AI-driven solutions. Building high-performance web applications.",
  keywords: [
    "Muhammad Awais",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "AI Developer",
    "Web Developer",
    "Pakistan",
  ],
  authors: [{ name: "Muhammad Awais" }],
  creator: "Muhammad Awais",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadawais.dev",
    siteName: "Muhammad Awais Portfolio",
    title: "Muhammad Awais | Full Stack Developer & AI Enthusiast",
    description:
      "Crafting high-performance web applications with Next.js, React, and Node.js. Passionate about AI-driven solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Awais - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Awais | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN Stack, Next.js, and AI-driven solutions.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0a0a0a] text-[#f5f5f5] dark`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
