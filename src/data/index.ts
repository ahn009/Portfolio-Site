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
  headline: "AI Solutions Engineer & Full Stack Developer",
  subheadline:
    "Websites & AI for Authors, Publishers & Businesses. 2.5+ years building production apps — RAG chatbots, AI agents, Next.js platforms, and LLM automation workflows. 15+ client projects shipped.",
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
    "AI Solutions Engineer & Full Stack Developer with 2.5+ years delivering production web applications and intelligent systems. Specialized in Next.js, MERN stack, and LLM-powered automation — RAG chatbots, AI agents, and LangChain/LangGraph pipelines.",
    "Niche focus: building digital platforms for authors, publishers, and content creators. 9+ author book websites, 4 publishing agency platforms, and AI-powered tools that replace manual workflows. Clients get fast sites, real analytics, and 24/7 AI assistants — not just pretty pages.",
    "Currently at S-Tech Innovative leading AI feature delivery. Previously built KinderCode (EdTech) for a European client at Byte-Forge Solutions. Graduated BS Computer Science, KFUEIT, April 2025.",
  ],
  highlights: [
    "15+ production projects shipped",
    "RAG Chatbots, AI Agents & LLM Pipelines",
    "9+ Author & Publishing Platforms",
    "Next.js, MERN, FastAPI, Vector DBs",
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
      { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
      { name: "JavaScript", icon: SiJavascript, level: "Expert" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
      { name: "Vite", icon: SiVite, level: "Advanced" },
      { name: "Bootstrap", icon: SiBootstrap, level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: "Expert" },
      { name: "Express.js", icon: SiExpress, level: "Advanced" },
      { name: "FastAPI", icon: SiPython, level: "Advanced" },
      { name: "GraphQL", icon: SiGraphql, level: "Intermediate" },
      { name: "REST APIs", icon: SiNodedotjs, level: "Expert" },
      { name: "PHP", icon: SiPhp, level: "Intermediate" },
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
    title: "AI & LLM",
    skills: [
      { name: "Python", icon: SiPython, level: "Advanced" },
      { name: "OpenAI SDK", icon: SiOpenai, level: "Advanced" },
      { name: "LangChain", icon: SiPython, level: "Advanced" },
      { name: "LangGraph", icon: SiPython, level: "Advanced" },
      { name: "RAG Pipelines", icon: SiOpenai, level: "Advanced" },
      { name: "Prompt Engineering", icon: SiOpenai, level: "Advanced" },
      { name: "Vector DBs", icon: SiPython, level: "Advanced" },
      { name: "AI Agents", icon: SiOpenai, level: "Advanced" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Vercel", icon: SiVercel, level: "Expert" },
      { name: "Git", icon: SiGit, level: "Expert" },
      { name: "GitHub Actions", icon: SiGithub, level: "Advanced" },
      { name: "Docker", icon: SiDocker, level: "Intermediate" },
      { name: "Figma", icon: SiFigma, level: "Advanced" },
      { name: "Sanity CMS", icon: SiSanity, level: "Advanced" },
      { name: "Stripe API", icon: SiStripe, level: "Advanced" },
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
    title: "Mary Pee Official — Admin Dashboard",
    description:
      "Production-grade RBAC admin panel for a publishing brand. Real-time analytics, dynamic CMS, and secure multi-role auth — end-to-end full-stack mastery with Prisma + Next.js.",
    features: [
      "Role-based access control (RBAC) with session management",
      "Real-time analytics dashboard with data visualization",
      "Dynamic content management via Prisma ORM",
      "Secure authentication with protected route middleware",
      "55+ commits — production deployed, actively maintained",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/mhaawais/admin.marypeeofficial",
    liveDemo: "https://admin-marypeeofficial.vercel.app",
    image: "/images/project-cms.png",
  },

  {
    title: "AI Book Website + RAG Chatbot",
    description:
      "Author marketing site with an embedded RAG chatbot trained on book content — enabling 24/7 domain-specific Q&A for readers. Built for the author niche: Next.js frontend + LangChain backend + vector DB.",
    features: [
      "RAG pipeline: OpenAI + vector embeddings for book-specific Q&A",
      "Semantic search with <800ms query response latency",
      "Next.js author marketing site with MDX content",
      "Chatbot answers domain-specific reader questions autonomously",
      "Hackathon project — shipped end-to-end in 24 hours",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Python", icon: SiPython },
      { name: "LangChain", icon: SiPython },
      { name: "OpenAI", icon: SiOpenai },
    ],
    github: "https://github.com/mhaawais/hackathon_book",
    liveDemo: "https://hackathon-book-ashy.vercel.app",
    image: "/images/project-agency.png",
  },

  {
    title: "AI Todo Manager + Chatbot",
    description:
      "AI-powered productivity app with an integrated chatbot for natural-language task management. Multi-phase architecture with GitHub Actions CI/CD — shows AI integration into real-world workflows.",
    features: [
      "Natural language task creation via AI chatbot",
      "Multi-phase full-stack architecture (TypeScript + Python)",
      "GitHub Actions CI/CD pipeline with Docker",
      "Conversational UI for task categorization and tracking",
      "Vercel deployment with automated workflow",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "OpenAI", icon: SiOpenai },
    ],
    github: "https://github.com/mhaawais/hackathon-2",
    liveDemo: "https://hackathon-2-khaki-psi.vercel.app",
    image: "/images/project-datasweeper.png",
  },

  {
    title: "ScriptForge — AI Video Script Generator",
    description:
      "LLM-powered tool for content creators — generates structured video scripts from prompts using LangChain pipelines. Targets the content creator economy with a clean, fast UI.",
    features: [
      "LangChain/LangGraph orchestration for multi-step script generation",
      "Prompt engineering for tone, style, and structure control",
      "Content creator-focused UX with instant output",
      "Supports YouTube, short-form, and long-form script formats",
      "FastAPI backend with Next.js frontend",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Python", icon: SiPython },
      { name: "LangChain", icon: SiPython },
      { name: "OpenAI", icon: SiOpenai },
    ],
    github: "https://github.com/mhaawais",
    liveDemo: "https://scriptforge-dun.vercel.app",
    image: "/images/project-cms.png",
  },

  {
    title: "KinderCode — Kids Coding & EdTech Platform",
    description:
      "Interactive EdTech platform for children with gamified coding lessons, story-based learning, and real-time progress tracking. Built with Next.js + Supabase for Byte-Forge Solutions (European client).",
    features: [
      "Gamified coding lessons with child-friendly UX",
      "Multi-role auth: parent dashboard + child learning view",
      "Real-time progress tracking via Supabase",
      "Story-based interactive modules for engagement",
      "25% performance improvement through optimization",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Supabase", icon: SiSupabase },
      { name: "TypeScript", icon: SiTypescript },
    ],
    github: "https://github.com/mhaawais/childrens-website",
    liveDemo: "https://www.kindercode.io/",
    image: "/images/project-kids-code.png",
  },

  {
    title: "DataSweeper — AI Data Processing Tool",
    description:
      "Python + Streamlit app for automated data cleaning and processing powered by AI. Demonstrates MLOps awareness and Python data engineering skills with Pandas/NumPy pipelines.",
    features: [
      "Automated data cleaning with AI-assisted detection",
      "Pandas/NumPy processing pipelines",
      "Streamlit deployment — MLOps-ready",
      "Upload CSV/Excel, get clean output instantly",
      "Data flow visualization and transformation logs",
    ],
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "OpenAI", icon: SiOpenai },
    ],
    github: "https://github.com/mhaawais",
    liveDemo: "https://datasweeper-python-growthmindset.streamlit.app",
    image: "/images/project-ecommerce.png",
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
  email: "mawaisfreelance2@gmail.com",
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
