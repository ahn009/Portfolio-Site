import { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About | Muhammad Awais - Full Stack Developer",
  description: "Learn about Muhammad Awais, a Full Stack Developer with 3+ years of experience in MERN stack, Next.js, and AI integration.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
