"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, contactData } from "@/data";
import { FaHeart, FaArrowUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  // GSAP Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Footer content animation
      gsap.from(contentRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#0a0a0a] border-t border-[#262626] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#10b981]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div ref={contentRef} className="py-16 md:py-20">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-6">
              <Link href="/" className="inline-block group">
                <span className="text-4xl font-bold text-gradient">MA</span>
              </Link>
              <p className="text-[#a3a3a3] text-base leading-relaxed max-w-md">
                Full Stack Developer specializing in building exceptional
                digital experiences with modern web technologies. Let&apos;s create
                something amazing together.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                {contactData.social.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-[#737373] hover:text-[#10b981] hover:border-[#10b981]/30 hover:bg-[#10b981]/10 transition-all duration-300"
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#f5f5f5] font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#737373] hover:text-[#10b981] text-sm transition-colors link-hover inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[#f5f5f5] font-semibold text-lg mb-6">Get In Touch</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-[#737373] hover:text-[#10b981] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#10b981]/10 flex items-center justify-center group-hover:bg-[#10b981]/20 transition-colors">
                      <span className="text-[#10b981] text-xs">@</span>
                    </span>
                    {contactData.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-[#737373] hover:text-[#10b981] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                      <span className="text-[#d4af37] text-xs">📞</span>
                    </span>
                    {contactData.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center">
                    <span className="text-[#3b82f6] text-xs">📍</span>
                  </span>
                  <span className="text-[#737373]">{contactData.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-[#262626]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-[#f5f5f5] font-semibold mb-2">Stay Updated</h4>
              <p className="text-[#737373] text-sm">Get notified about my latest projects and updates.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-[#111111] border border-[#262626] rounded-lg text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#10b981] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-green text-[#0a0a0a] font-semibold rounded-lg hover:opacity-90 transition-opacity btn-interactive"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#737373] text-sm flex items-center gap-2">
            &copy; {currentYear} Muhammad Awais. Built with{" "}
            <FaHeart className="text-red-500 text-xs animate-pulse" /> using Next.js
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 text-[#737373] hover:text-[#10b981] text-sm transition-colors bg-[#111111] rounded-full border border-[#262626] hover:border-[#10b981]/30"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
            <FaArrowUp className="text-xs" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
