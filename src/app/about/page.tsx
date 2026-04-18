import { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About | Muhammad Awais - Full Stack Developer",
  description:
    "Learn about Muhammad Awais's journey as a Full Stack Developer & AI Solutions Engineer. 2.5+ years of experience building scalable applications with Next.js, MERN Stack, RAG chatbots, and AI agents.",
  openGraph: {
    title: "About Muhammad Awais - Full Stack Developer & AI Solutions Engineer",
    description:
      "Full Stack Developer & AI Solutions Engineer with expertise in Next.js, MERN Stack, RAG chatbots, and AI agents. Passionate about performance optimization and AI-driven products.",
    url: "https://muhammadawais.dev/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
