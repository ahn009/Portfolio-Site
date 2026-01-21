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
  SiVercel, 
  SiFirebase, 
  SiDocker, 
  SiFigma, 
  SiPython, 
  SiOpenai,
  SiBootstrap,
  SiSupabase,
  SiSanity
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
  headline: "Full Stack Developer | MERN Stack & AI Developer",
  subheadline:
    "Crafting high-performance web applications with Next.js, React, and Node.js. Passionate about AI-driven solutions and seamless user experiences.",
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
    "I'm a passionate Full Stack Developer with 3+ years of experience building modern, scalable web applications. My expertise lies in the MERN stack, Next.js, and integrating AI-driven solutions to create intelligent, user-focused products.",
    "I thrive on solving complex problems and turning ideas into reality through clean, efficient code. My approach combines technical excellence with a deep understanding of user needs, ensuring every project delivers both functionality and exceptional user experience.",
    "When I'm not coding, I'm exploring the latest in AI technology, contributing to open-source projects, and continuously expanding my skill set. I believe in the power of collaboration and continuous learning to push the boundaries of what's possible in web development.",
  ],
  highlights: [
    "3+ years of professional experience",
    "Expert in MERN Stack & Next.js",
    "AI Integration specialist",
    "User-focused development approach",
  ],
};

// Timeline Data
export const timelineData = [
  {
    year: "2025",
    title: "Full Stack Developer",
    subtitle: "S-Tech Innovative",
    description: "Leading full-stack development projects and building scalable applications.",
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
    description: "Built innovative web applications for European clients.",
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
      { name: "Bootstrap", icon: SiBootstrap, level: "Advanced" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: "Expert" },
      { name: "Express.js", icon: SiExpress, level: "Advanced" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Advanced" },
      { name: "MongoDB", icon: SiMongodb, level: "Expert" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, level: "Expert" },
      { name: "Vercel", icon: SiVercel, level: "Expert" },
      { name: "Firebase", icon: SiFirebase, level: "Advanced" },
      { name: "Docker", icon: SiDocker, level: "Intermediate" },
      { name: "Figma", icon: SiFigma, level: "Advanced" },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "Python", icon: SiPython, level: "Advanced" },
      { name: "OpenAI SDK", icon: SiOpenai, level: "Advanced" },
      { name: "AI", icon: SiPython, level: "Advanced" },
      { name: "ML", icon: SiPython, level: "Advanced" },
      { name: "Agentic AI", icon: SiOpenai, level: "Advanced" },
      { name: "Gen AI", icon: SiOpenai, level: "Advanced" },
    ],
  },
];

export const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Agile Methodology",
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
    title: "Kids Code & Stories",
    description:
      "An interactive educational platform designed to teach coding concepts to children through engaging stories and hands-on exercises. Features a gamified learning experience with progress tracking.",
    features: [
      "User authentication & profiles",
      "Interactive coding exercises",
      "Real-time progress updates",
      "Gamified learning experience",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Supabase", icon: SiSupabase },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/Awais-codes/code-stories",
    liveDemo: "https://kids-code-stories.vercel.app",
    image: "/images/project-kids-code.png",
  },
  {
    title: "Content Management System",
    description:
      "A comprehensive CMS platform with role-based access control, real-time collaborative editing, and a responsive dashboard. Built for enterprise-level content management needs.",
    features: [
      "Role-based access control",
      "Real-time collaborative editing",
      "Responsive admin dashboard",
      "SEO optimization tools",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    github: "https://github.com/Awais-codes/cms-project",
    image: "/images/project-cms.png",
  },
  {
    title: "E-Commerce Store",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, secure checkout, and admin dashboard. Integrated with Sanity CMS for content management.",
    features: [
      "Product catalog & search",
      "Shopping cart & checkout",
      "Admin dashboard",
      "Payment integration",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Sanity", icon: SiSanity },
      { name: "TypeScript", icon: SiTypescript },
    ],
    github: "https://github.com/Awais-codes/ecommerce-store",
    liveDemo: "https://ecommerce-store-demo.vercel.app",
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
    role: "Full Stack Developer",
    duration: "April 2025 – Present",
    location: "On-site",
    current: true,
    responsibilities: [
      "Lead full-stack development projects using Next.js and Node.js",
      "Develop and maintain CMS platform serving multiple clients",
      "Built and optimized databases for 5+ production applications",
      "Implemented API integrations improving data retrieval efficiency by 30%",
      "Collaborate with design team to create responsive, accessible UIs",
    ],
  },
  {
    company: "Byte-Forge Solutions",
    role: "Web Developer",
    duration: "January 2025 – March 2025",
    location: "Europe (Remote)",
    responsibilities: [
      "Developed 'Kids Code & Stories' educational platform",
      "Improved application performance by 25% through optimization",
      "Implemented real-time features using Supabase",
      "Collaborated with international team across time zones",
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
    year: "2025",
    description: "Focused on software engineering, algorithms, and web technologies.",
  },
  {
    degree: "Intermediate / High School",
    institution: "APSACS",
    location: "Rahim Yar Khan, Pakistan",
    year: "2021",
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
      url: "https://myportfolio-website-six.vercel.app/",
      icon: FaGlobe,
    },
  ],
};

export { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt };
