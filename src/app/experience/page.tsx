import { Metadata } from "next";
import ExperiencePageContent from "./ExperiencePageContent";

export const metadata: Metadata = {
  title: "Experience | Muhammad Awais - Full Stack Developer",
  description:
    "Professional experience of Muhammad Awais. Full Stack Developer & AI Solutions Engineer at S-Tech Innovative, Byte-Forge Solutions, and Freelance. Building scalable applications and AI-powered products.",
  openGraph: {
    title: "Work Experience - Muhammad Awais",
    description:
      "Full Stack Developer & AI Solutions Engineer with 2.5+ years of experience. Expertise in Next.js, MERN Stack, RAG chatbots, AI agents, and eCommerce platforms.",
    url: "https://muhammadawais.dev/experience",
  },
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
