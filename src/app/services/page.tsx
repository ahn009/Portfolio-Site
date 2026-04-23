import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web Development & AI Services - Muhammad Awais',
  description:
    'AI Solutions Engineer & Full Stack Developer specializing in websites and AI tools for authors, publishers, and businesses. RAG chatbots, Next.js platforms, LangChain agents.',
  keywords: [
    'AI development services',
    'Author website development',
    'RAG chatbot development',
    'Next.js development',
    'LangChain developer',
    'Publishing platform development',
    'AI agents for authors',
    'Freelance AI developer',
  ],
  openGraph: {
    type: 'website',
    title: 'Web Development Services',
    description:
      'Professional web development services including Next.js, React, MERN Stack, and AI integration.',
    url: 'https://muhammad-awais-portfolio.vercel.app/services',
    images: [
      {
        url: 'https://muhammad-awais-portfolio.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Development Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://muhammad-awais-portfolio.vercel.app/services',
  },
};

const services = [
  {
    title: 'Author Websites & Publishing Platforms',
    slug: 'nextjs-development',
    description: 'Custom book websites, author brands, and publishing agency platforms. 9+ live author sites. Fast, SEO-optimized, and built to convert readers.',
    icon: '📚',
    highlight: true,
  },
  {
    title: 'RAG Chatbots & AI Agents',
    slug: 'ai-integration-development',
    description: 'Domain-specific RAG chatbots trained on your content. AI agents for workflow automation with LangChain, LangGraph, and OpenAI. 24/7 intelligent assistants.',
    icon: '🤖',
    highlight: true,
  },
  {
    title: 'Full Stack Web Development',
    slug: 'nextjs-development',
    description: 'Production Next.js and MERN Stack apps — scalable, SEO-friendly, and fast. Admin dashboards, APIs, and complete web platforms.',
    icon: '⚡',
    highlight: false,
  },
  {
    title: 'eCommerce Solutions',
    slug: 'mern-stack-development',
    description: 'Full-featured stores with Stripe payments, Sanity CMS, cart management, and order tracking. Deployed on Vercel with 99.9% uptime.',
    icon: '🛒',
    highlight: false,
  },
  {
    title: 'AI Automation Workflows',
    slug: 'ai-integration-development',
    description: 'LangGraph state-machine agents, data pipeline automation, and prompt-engineered LLM tools. Reduces manual workflows by 40%+.',
    icon: '⚙️',
    highlight: false,
  },
  {
    title: 'CMS & Content Platforms',
    slug: 'ai-integration-development',
    description: 'Headless CMS with Sanity — non-technical teams manage content independently. Perfect for authors and marketing teams.',
    icon: '📝',
    highlight: false,
  },
  {
    title: 'Performance & DevOps',
    slug: 'nextjs-development',
    description: 'Core Web Vitals optimization, CI/CD pipelines with GitHub Actions, Docker, and Vercel. Sub-3s load times guaranteed.',
    icon: '🚀',
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-400 font-semibold mb-2 uppercase tracking-widest text-sm">AI Solutions Engineer & Full Stack Developer</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Websites & AI for Authors, Publishers & Businesses</h1>
          <p className="text-xl text-gray-400">
            Specialized in building digital platforms for the publishing industry — from author book sites to AI chatbots trained on your content. 15+ production projects shipped.
          </p>
        </div>

        {/* Featured Services */}
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {services.filter(s => s.highlight).map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-900/50 to-purple-900/50 hover:from-blue-800/60 hover:to-purple-800/60 transition-all duration-300 border border-blue-500/40 hover:border-blue-400/60 p-8"
            >
              <div className="absolute top-3 right-3 text-xs bg-blue-500 text-white px-2 py-1 rounded-full font-semibold">Specialized</div>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <div className="text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

        {/* Other Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.filter(s => !s.highlight).map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group relative rounded-lg overflow-hidden bg-slate-800 hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-slate-600 p-6"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h2>
              <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
              <div className="text-blue-400 group-hover:text-blue-300 flex items-center gap-1 text-sm">
                Learn More →
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="p-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-100 mb-6">
            Let's discuss your project and how I can help bring your ideas to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  );
}
