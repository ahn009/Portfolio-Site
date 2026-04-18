export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Awais",
    url: "https://muhammad-awais-portfolio.vercel.app/",
    image: "https://muhammad-awais-portfolio.vercel.app/images/profile.jpg",
    email: "awais8640107@gmail.com",
    jobTitle: "Full Stack Developer & AI Solutions Engineer",
    description:
      "Full Stack Developer & AI Solutions Engineer specializing in Next.js, MERN Stack, RAG chatbots, and AI agents with 2.5+ years of production experience.",
    sameAs: [
      "https://linkedin.com/in/muhammad-awais-5b37742ba",
      "https://github.com/mhaawais",
      "https://muhammad-awais-portfolio.vercel.app/",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Tailwind CSS",
      "Full Stack Development",
      "Web Performance Optimization",
      "AI Integration",
      "LangChain",
      "LangGraph",
      "RAG Chatbots",
      "AI Agents",
      "GraphQL",
      "Python",
      "OpenAI SDK",
    ],
    workLocation: {
      "@type": "Place",
      name: "Karachi, Pakistan",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Awais - Full Stack Developer",
    url: "https://muhammad-awais-portfolio.vercel.app/",
    description:
      "Portfolio and professional profile of Muhammad Awais, a Full Stack Developer specializing in Next.js, React, and modern web technologies.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://muhammad-awais-portfolio.vercel.app//projects",
      },
    },
  };
}

export function generateProjectSchema(project: {
  title: string;
  description: string;
  liveDemo?: string;
  github: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Person",
      name: "Muhammad Awais",
    },
    url: project.liveDemo || project.github,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
  };
}
