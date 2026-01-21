"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { contactData, FaEnvelope, FaPhone, FaMapMarkerAlt } from "@/data";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Only register ScrollTrigger once at module load
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPageContent() {
  const [mounted, setMounted] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  // Formspree hook with ID
  const [state, handleSubmit] = useForm("mjgkkepv");

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !pageRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current && headerRef.current.children.length > 0) {
        Array.from(headerRef.current.children).forEach((child: Element) => {
          (child as HTMLElement).style.opacity = "1";
          (child as HTMLElement).style.transform = "translateY(0)";
        });
      }

      // Info cards animation
      if (infoRef.current && infoRef.current.children.length > 0) {
        Array.from(infoRef.current.children).forEach((child: Element) => {
          (child as HTMLElement).style.opacity = "1";
          (child as HTMLElement).style.transform = "translateX(0)";
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#0a0a0a] pt-24">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div ref={headerRef} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-[#10b981] text-sm font-medium bg-[#10b981]/10 rounded-full mb-4">
              Let&apos;s Connect
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-[#737373] max-w-2xl mx-auto text-lg mb-6">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I&apos;m always open to discussing new opportunities.
            </p>
            <div className="w-24 h-1 bg-gradient-green mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div ref={infoRef} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#f5f5f5] mb-6">
                  Contact Information
                </h3>
                <p className="text-[#a3a3a3] leading-relaxed mb-8">
                  I&apos;m currently available for freelance work and full-time
                  positions. If you have a project that needs coding or you want
                  to hire me, feel free to contact me through any of the following.
                </p>
              </div>

              {/* Contact Cards */}
              <motion.a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-5 p-6 bg-[#111111] rounded-2xl border border-[#262626] hover:border-[#10b981]/30 transition-all group"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-xl bg-[#10b981]/10 flex items-center justify-center group-hover:bg-[#10b981]/20 transition-colors">
                  <FaEnvelope className="w-7 h-7 text-[#10b981]" />
                </div>
                <div>
                  <p className="text-[#737373] text-sm mb-1">Email</p>
                  <p className="text-[#f5f5f5] font-semibold text-lg">
                    {contactData.email}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${contactData.phone}`}
                className="flex items-center gap-5 p-6 bg-[#111111] rounded-2xl border border-[#262626] hover:border-[#d4af37]/30 transition-all group"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-xl bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                  <FaPhone className="w-7 h-7 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-[#737373] text-sm mb-1">Phone</p>
                  <p className="text-[#f5f5f5] font-semibold text-lg">
                    {contactData.phone}
                  </p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-5 p-6 bg-[#111111] rounded-2xl border border-[#262626]"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="w-7 h-7 text-[#3b82f6]" />
                </div>
                <div>
                  <p className="text-[#737373] text-sm mb-1">Location</p>
                  <p className="text-[#f5f5f5] font-semibold text-lg">
                    {contactData.location}
                  </p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-[#737373] text-sm mb-4">Connect with me on</p>
                <div className="flex gap-4">
                  {contactData.social.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:text-[#10b981] hover:border-[#10b981]/30 hover:bg-[#10b981]/5 transition-all"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-[#111111] rounded-2xl p-8 md:p-10 border border-[#262626]"
            >
              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-8">
                Send me a message
              </h3>

              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-6 bg-[#10b981]/10 border border-[#10b981]/30 rounded-xl text-[#10b981] text-center justify-center flex-col"
                >
                  <FaCheckCircle className="w-6 h-6" />
                  <p className="text-lg font-semibold">Thanks for your message! I&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#a3a3a3] mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#262626] rounded-xl text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#10b981] transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#a3a3a3] mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#262626] rounded-xl text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#10b981] transition-colors"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#a3a3a3] mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#262626] rounded-xl text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#10b981] transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#a3a3a3] mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#262626] rounded-xl text-[#f5f5f5] placeholder-[#737373] focus:outline-none focus:border-[#10b981] transition-colors resize-none"
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-green text-[#0a0a0a] font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {state.submitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-80 bg-[#111111] relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <FaMapMarkerAlt className="w-12 h-12 text-[#10b981] mx-auto mb-4" />
            <p className="text-[#737373]">Based in {contactData.location}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />
      </section>
    </div>
  );
}
