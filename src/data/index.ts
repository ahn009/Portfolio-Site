import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiFirebase,
  SiDocker,
  SiFigma,
  SiPython,
  SiOpenai,
  SiBootstrap,
  SiSanity,
  SiStripe,
  SiSupabase,
  SiGraphql,
  SiPhp,
  SiVite,
} from "react-icons/si";
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IconType } from "react-icons";

// Navigation Links for Multi-Page Site
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

// Hero Section Data
export const heroData = {
  name: "Muhammad Awais",
  headline: "Full Stack Developer | AI Solutions Engineer | MERN & Next.js Specialist",
  subheadline:
    "Results-driven Full Stack Developer with 2.5+ years of experience building high-performance web applications and AI-powered products. Expert in MERN Stack, Next.js, RAG chatbots, and AI agents.",
  profileImage: "/images/profile.jpg",
  ctas: {
    primary: { text: "View My Work", href: "/projects" },
    secondary: { text: "Download Resume", href: "/m_resume.pdf" },
    tertiary: { text: "Get In Touch", href: "/contact" },
  },
};

// About Section Data
export const aboutData = {
  title: "About Me",
  paragraphs: [
    "Results-driven Full Stack Developer with 2.5+ years of hands-on experience building high-performance, scalable web applications and AI-powered products. Deep expertise in the MERN stack, Next.js, and modern frontend frameworks including Vite and PHP-based backends.",
    "Proven track record of delivering production-ready eCommerce platforms, CMS solutions, admin dashboards, and live AI products including RAG chatbots, intelligent agents, and automation workflows. Passionate about synchronizing AI capabilities with web development to create next-generation digital experiences.",
    "Adept at leading cross-functional teams, optimizing application performance, and driving end-to-end product delivery from architecture to deployment. Committed to shipping quality code that makes a measurable business impact.",
  ],
  highlights: [
    "2.5+ years building production applications",
    "Full Stack: Next.js, MERN, AI Solutions",
    "RAG Chatbots, AI Agents & Automation",
    "Performance optimization & scalable deployments",
  ],
};

// Timeline Data
export const timelineData = [
  {
    year: "2025",
    title: "Full Stack Developer & AI Solutions Engineer",
    subtitle: "S-Tech Innovative",
    description: "Leading full-stack development and AI-powered feature delivery for production applications.",
  },
  {
    year: "2025",
    title: "BS Computer Science",
    subtitle: "KFUEIT, Rahim Yar Khan",
    description: "Graduated with a strong foundation in software engineering and computer science.",
  },
  {
    year: "2025",
    title: "Web Developer",
    subtitle: "Byte-Forge Solutions (Remote)",
    description: "Built innovative web applications for European clients with 25% performance improvements.",
  },
  {
    year: "2024",
    title: "Freelance Full Stack Developer",
    subtitle: "Self-Employed (Remote)",
    description: "Delivered 10+ client projects including eCommerce stores, dashboards, and AI-powered products.",
  },
  {
    year: "2021",
    title: "High School Graduate",
    subtitle: "APSACS, Rahim Yar Khan",
    description: "Completed intermediate education with focus on science and mathematics.",
  },
];

// Skills Data
export interface Skill {
  name: string;
  icon: IconType;
  level: "Expert" | "Advanced" | "Intermediate";
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, level: "Expert" },
      { name: "React", icon: SiReact, level: "Expert" },
      { name: "Vite", icon: SiVite, level: "Advanced" },
      { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
      { name: "JavaScript", icon: SiJavascript, level: "Expert" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
      { name: "Bootstrap", icon: SiBootstrap, level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: "Expert" },
      { name: "Express.js", icon: SiExpress, level: "Advanced" },
      { name: "PHP", icon: SiPhp, level: "Intermediate" },
      { name: "GraphQL", icon: SiGraphql, level: "Intermediate" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced" },
      { name: "MongoDB", icon: SiMongodb, level: "Expert" },
      { name: "Supabase", icon: SiSupabase, level: "Advanced" },
      { name: "Firebase", icon: SiFirebase, level: "Advanced" },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "Python", icon: SiPython, level: "Advanced" },
      { name: "OpenAI SDK", icon: SiOpenai, level: "Advanced" },
      { name: "LangChain", icon: SiPython, level: "Advanced" },
      { name: "LangGraph", icon: SiPython, level: "Advanced" },
      { name: "RAG Chatbots", icon: SiOpenai, level: "Advanced" },
      { name: "AI Agents", icon: SiOpenai, level: "Advanced" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: SiGit, level: "Expert" },
      { name: "GitHub", icon: SiGithub, level: "Expert" },
      { name: "Docker", icon: SiDocker, level: "Intermediate" },
      { name: "Vercel", icon: SiVercel, level: "Expert" },
      { name: "Figma", icon: SiFigma, level: "Advanced" },
    ],
  },
];

export const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Adaptability",
  "Project Management",
  "Critical Thinking",
];

// Projects Data
export interface Project {
  title: string;
  description: string;
  features: string[];
  techStack: { name: string; icon: IconType }[];
  github: string;
  liveDemo?: string;
  image: string;
}

export const projectsData: Project[] = [
  {
    title: "Admin Management System (Mary Pee Official)",
    description:
      "Production-grade admin dashboard with role-based access control, real-time analytics, and dynamic content management capabilities.",
    features: [
      "Role-based access control (RBAC)",
      "Real-time analytics dashboard",
      "Dynamic content management",
      "Secure authentication & session handling",
      "Responsive admin interface",
    ],
    techStack: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/mhaawais/admin.marypeeofficial",
    image: "/images/project-cms.png",
  },

  {
    title: "Ecommerce Hackathon Platform",
    description:
      "Full-featured eCommerce store with product catalog, cart management, checkout flow, payment integration, and headless CMS for dynamic product updates.",
    features: [
      "Dynamic product catalog with advanced filtering",
      "Secure checkout flow with Stripe payment integration",
      "Headless CMS with Sanity for product management",
      "Cart management & order tracking",
      "Responsive mobile-first design",
    ],
    techStack: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Sanity CMS", icon: SiSanity },
      { name: "Stripe", icon: SiStripe },
    ],
    github: "https://github.com/mhaawais/Ecommerce-Hackathon",
    liveDemo: "https://final-hackathon-two.vercel.app/",
    image: "/images/project-ecommerce.png",
  },

  {
    title: "AI Agents & Automation Suite",
    description:
      "Collection of intelligent AI agents for workflow automation, data pipeline processing, and conversational AI assistants deployed in production environments.",
    features: [
      "Intelligent workflow automation agents",
      "Data pipeline processing with AI",
      "Conversational AI assistants",
      "LangGraph state-machine orchestration",
      "Production-ready deployment",
    ],
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "OpenAI SDK", icon: SiOpenai },
      { name: "LangGraph", icon: SiPython },
      { name: "LangChain", icon: SiPython },
    ],
    github: "https://github.com/mhaawais/ai_agents",
    image: "/images/project-datasweeper.png",
  },

  {
    title: "RAG Chatbot for Web Applications",
    description:
      "Retrieval-Augmented Generation chatbot integrated into web apps, enabling context-aware conversations with domain-specific knowledge bases for enhanced user support.",
    features: [
      "Context-aware RAG pipeline",
      "Domain-specific knowledge base integration",
      "Vector database for semantic search",
      "OpenAI-powered response generation",
      "Web app integration ready",
    ],
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "LangChain", icon: SiPython },
      { name: "OpenAI", icon: SiOpenai },
    ],
    github: "https://github.com/mhaawais",
    image: "/images/project-agency.png",
  },

  {
    title: "Kids Code & Stories Platform",
    description:
      "Interactive children's educational web app with gamified coding lessons, story-based learning modules, and a responsive, accessible UI designed for young learners.",
    features: [
      "Gamified coding lessons for children",
      "Story-based learning modules",
      "Multi-role authentication (parent, child)",
      "Real-time progress tracking",
      "Accessible, responsive UI",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Supabase", icon: SiSupabase },
    ],
    github: "https://github.com/mhaawais/childrens-website",
    liveDemo: "https://www.kindercode.io/#/",
    image: "/images/project-kids-code.png",
  },

  {
    title: "Library Manager CLI",
    description:
      "Command-line library management system with clean architecture, CRUD operations, search functionality, and structured data persistence.",
    features: [
      "Full CRUD operations for books & records",
      "Search functionality by title, author, genre",
      "Structured data persistence",
      "Clean CLI interface with navigation",
      "Modular, extensible architecture",
    ],
    techStack: [
      { name: "Python", icon: SiPython },
    ],
    github: "https://github.com/mhaawais/library-manager-python",
    image: "/images/project-datasweeper.png",
  },
];


// Work Experience Data
export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  current?: boolean;
}

export const experienceData: Experience[] = [
  {
    company: "S-Tech Innovative",
    role: "Full Stack Developer & AI Solutions Engineer",
    duration: "April 2025 – Present",
    location: "Karachi, Pakistan",
    current: true,
    responsibilities: [
      "Lead full-stack development of production web applications, managing end-to-end delivery from architecture design through live deployment on Vercel and cloud platforms.",
      "Architect and maintain functional databases powering 5+ web applications, with integrated payment gateways and robust backend servers ensuring 99.9% uptime.",
      "Develop and deploy AI-powered features including RAG chatbots and intelligent automation agents, enhancing user engagement and reducing manual workflows by 40%.",
      "Conduct rigorous code reviews, resolve complex bugs, and integrate third-party APIs, achieving a 30% improvement in data retrieval speed and overall UX performance.",
      "Implement CMS platforms with modern content workflows, enabling non-technical teams to manage dynamic web content independently.",
    ],
  },
  {
    company: "Byte-Forge Solutions",
    role: "Web Developer",
    duration: "January 2025 – March 2025",
    location: "Europe (Remote)",
    responsibilities: [
      "Built a full-stack interactive web application ('Code & Stories') for children using Next.js, React, and Supabase, collaborating with cross-functional international teams.",
      "Boosted overall website performance by 25% through front-end and back-end optimizations, lazy loading, and CMS integration for seamless content updates.",
      "Designed and implemented secure, well-documented RESTful APIs for third-party integrations without compromising application performance or security.",
    ],
  },
  {
    company: "Self-Employed",
    role: "Freelance Full Stack Developer",
    duration: "October 2023 – December 2024",
    location: "Remote",
    responsibilities: [
      "Delivered 10+ client projects including eCommerce stores, landing pages, and admin dashboards using Next.js, React, Tailwind CSS, and Node.js.",
      "Built and deployed AI-powered products integrating OpenAI APIs, LangChain, and RAG pipelines for intelligent search and automated customer support.",
      "Developed responsive, mobile-first web interfaces with a focus on accessibility, SEO best practices, and cross-browser compatibility.",
    ],
  },
];

// Education Data
export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
}

export const educationData: Education[] = [
  {
    degree: "BS Computer Science",
    institution: "KFUEIT",
    location: "Rahim Yar Khan, Pakistan",
    year: "April 2025",
    description: "Focused on software engineering, algorithms, and web technologies.",
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "APSACS",
    location: "Rahim Yar Khan, Pakistan",
    year: "April 2021",
    description: "Completed with focus on science and mathematics.",
  },
];

// Contact Data
export const contactData = {
  email: "awais8640107@gmail.com",
  phone: "+92 317 5597654",
  location: "Karachi, Pakistan",
  social: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/muhammad-awais-5b37742ba",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/mhaawais",
      icon: FaGithub,
    },
    {
      name: "Portfolio",
      url: "https://muhammad-awais-portfolio.vercel.app/",
      icon: FaGlobe,
    },
  ],
};

export { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt };
