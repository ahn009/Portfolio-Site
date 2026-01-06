import { Metadata } from "next";
import ExperiencePageContent from "./ExperiencePageContent";

export const metadata: Metadata = {
  title: "Experience | Muhammad Awais - Full Stack Developer",
  description: "Professional work experience of Muhammad Awais as a Full Stack Developer at S-Tech Innovative and Byte-Forge Solutions.",
};

export default function ExperiencePage() {
  return <ExperiencePageContent />;
}
