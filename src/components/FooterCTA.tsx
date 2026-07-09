"use client";

import { motion } from "framer-motion";

export default function FooterCTA() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <section className="py-28 bg-gradient-to-b from-white via-surface to-[#f0f7f2] relative">
        {/* Decorative blobs */}
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-accent/3 blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Ready to modernize your{" "}
              <span className="gradient-text">infrastructure</span>?
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
              Stop losing time to messy workflows. Let&apos;s build your
              automated future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="mailto:info@sonictech.com"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent text-white font-semibold text-lg shadow-[0_4px_40px_rgba(0,200,83,0.3)] hover:shadow-[0_8px_60px_rgba(0,200,83,0.4)] hover:bg-accent-dark transition-all duration-300 hover:scale-[1.02]"
            >
              Book a Technical Discovery Call
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-[#f0f7f2] border-t border-border-light">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <span className="text-white font-bold text-xs">W</span>
              </div>
              <span
                className="text-lg font-bold text-text-primary tracking-tight"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                We<span className="gradient-text">Automate</span>
              </span>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:info@sonictech.com"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-dark transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                info@sonictech.com
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border-light my-8" />

          {/* SEO Text Section */}
          <div className="mb-6 text-xs text-text-muted/70 text-center max-w-4xl mx-auto leading-relaxed">
            WeAutomate is a leading AI automation agency providing AI integration in business across the USA, Europe, Australia, and Bangladesh. 
            We build scalable workflows, enterprise AI architectures, and intelligent solutions including AI automatic message replies for Facebook, Instagram, and other social media platforms.
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted">
            <span>© {currentYear} WeAutomate. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:text-accent-dark transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-accent-dark transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
