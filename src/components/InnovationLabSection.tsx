"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: "ava",
    name: "Ava",
    tagline: "Medical AI",
    status: "Live",
    statusColor: "bg-accent",
    description:
      "We built avahealthai.com from the ground up. It is a live AI medical assistant designed specifically for doctors. Right now, it has about 15000+ active users and it helps them diagnose reports, answer medical queries, and handle clinical work.",
    website: "avahealthai.com",
    // Add your Ava app screenshot here (place file in /public/screenshots/ as ava.png)
    screenshots: [
      "/screenshots/ava.png",
    ],
  },
  {
    id: "jwala",
    name: "Jwala",
    tagline: "Advanced LLM Routing",
    website: "jwalaai.com",
    status: "Active",
    statusColor: "bg-accent-light",
    description:
      'This is a unique AI we created to help give people mental clarity. It is programmed with two totally different personalities. If you need raw, unfiltered honesty, the "Clowngod" persona will tell you the absolute truth without caring about your feelings. But if you need support, the "Skyboy" persona takes over to be soft, caring, and considerate.',
    // Add your Jwala app screenshot here (place file in /public/screenshots/ as jwala.png)
    screenshots: [
      "/screenshots/jwala.png",
    ],
  },
];

export default function InnovationLabSection() {
  return (
    <section id="lab" className="py-28 bg-[#f5faf7] grid-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/8 border border-accent/15 text-sm font-medium text-accent-dark mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            WeAutomate Labs
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-text-primary leading-tight mb-6"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Our Proprietary{" "}
            <span className="gradient-text">AI Frameworks</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            We don&apos;t just integrate tools; we engineer our own AI platforms
            from the ground up.
          </p>
        </motion.div>

        {/* Product showcases — stacked full-width */}
        <div className="flex flex-col gap-20 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              {/* Two-column layout: info left, screenshot right (alternating) */}
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 lg:gap-14 items-center`}
              >
                {/* Text / Info side */}
                <div className="flex-1 min-w-0">
                  <div className="relative py-8 md:py-10">
                    {/* Status indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        {product.icon && (
                          <div className="p-3 rounded-2xl bg-accent/5 text-accent-dark transition-colors duration-300">
                            {product.icon}
                          </div>
                        )}
                        <div>
                          <h3
                            className="text-2xl font-bold text-text-primary"
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                          >
                            {product.name}
                          </h3>
                          <span className="text-sm text-text-muted">
                            {product.tagline}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${product.statusColor} animate-[glow-pulse_2s_ease-in-out_infinite]`}
                        />
                        <span className="text-xs font-medium text-accent-dark">
                          {product.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Feature highlights */}
                    <div className="flex flex-wrap gap-2">
                      {product.id === "ava" && (
                        <>
                          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/8 text-accent-dark border border-accent/10">
                            Clinical Workflows
                          </span>
                          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/8 text-accent-dark border border-accent/10">
                            Report Diagnostics
                          </span>
                          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/8 text-accent-dark border border-accent/10">
                            Medical Queries
                          </span>
                        </>
                      )}
                      {product.id === "jwala" && (
                        <>
                          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/8 text-accent-dark border border-accent/10">
                            Dual-Persona Routing
                          </span>
                          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/8 text-accent-dark border border-accent/10">
                            Behavioral AI
                          </span>
                          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/8 text-accent-dark border border-accent/10">
                            Custom Architecture
                          </span>
                        </>
                      )}
                    </div>

                    {/* Website Link */}
                    {product.website && (
                      <div className="mt-8">
                        <a href={`https://${product.website}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20">
                          Visit {product.website}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Screenshot / Image side */}
                <div className="flex-1 min-w-0 w-full flex justify-center">
                  <div className="relative w-full max-w-sm">
                    {/* Primary screenshot — direct image with shadow */}
                    <div className="rounded-[3rem] overflow-hidden drop-shadow-2xl hover:drop-shadow-[0_20px_40px_rgba(0,200,83,0.15)] transition-all duration-500">
                      {/* Screenshot image area */}
                      <div className="relative aspect-[724/1024]">
                        <Image
                          src={product.screenshots[0]}
                          alt={`${product.name} app interface`}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 400px"
                        />
                        {/* Fallback overlay — shows when image hasn't loaded yet */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-text-muted/40 pointer-events-none peer-[img:not([src])]:block">
                          <svg className="w-16 h-16 mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
