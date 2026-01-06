"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import gsap from "gsap";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.from(logoRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Links stagger animation
      if (linksRef.current) {
        gsap.from(linksRef.current.children, {
          y: -20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        });
      }
    }, navRef);

    return () => ctx.revert();
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass border-b border-[#262626]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              ref={logoRef}
              className="flex items-center space-x-2 group"
            >
              <span className="text-2xl font-bold text-gradient">MA</span>
              <span className="hidden sm:block text-sm font-medium text-[#737373] group-hover:text-[#10b981] transition-colors">
                | Developer
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div ref={linksRef} className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors link-hover ${
                    isActive(link.href)
                      ? "text-[#10b981]"
                      : "text-[#a3a3a3] hover:text-[#f5f5f5]"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#10b981] to-[#d4af37]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className="hidden md:block px-5 py-2.5 bg-gradient-green text-[#0a0a0a] font-semibold text-sm rounded-full hover:opacity-90 transition-opacity btn-interactive"
            >
              Hire Me
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#f5f5f5]"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden glass border-b border-[#262626]"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-[#10b981] bg-[#10b981]/10"
                        : "text-[#a3a3a3] hover:text-[#f5f5f5] hover:bg-[#1a1a1a]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-4 px-4 py-3 bg-gradient-green text-[#0a0a0a] font-semibold text-center rounded-full"
                >
                  Hire Me
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
