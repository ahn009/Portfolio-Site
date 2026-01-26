export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Awais",
    url: "https://muhammadawais.dev",
    image: "https://muhammadawais.dev/images/profile.jpg",
    email: "awais8640107@gmail.com",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and AI-powered solutions with 3+ years of production experience.",
    sameAs: [
      "https://linkedin.com/in/muhammad-awais-5b37742ba",
      "https://github.com/mhaawais",
      "https://muhammadawais.dev",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "Full Stack Development",
      "Web Performance Optimization",
      "AI Integration",
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
    url: "https://muhammadawais.dev",
    description:
      "Portfolio and professional profile of Muhammad Awais, a Full Stack Developer specializing in Next.js, React, and modern web technologies.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://muhammadawais.dev/projects",
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
