import { Metadata } from "next";
import ProjectsPageContent from "./ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects | Muhammad Awais - Full Stack Developer",
  description: "Explore Muhammad Awais's portfolio of web development projects including Next.js, React, and MERN stack applications.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
