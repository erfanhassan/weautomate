"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-surface to-white">
      {/* 3D Background */}
      <Scene3D />

      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,white_70%)]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8 inline-flex">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/15 text-sm font-medium text-accent-dark">
            <span className="w-2 h-2 rounded-full bg-accent animate-[glow-pulse_2s_ease-in-out_infinite]" />
            AI-Powered Enterprise Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.08] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Automating Enterprise{" "}
          <br className="hidden sm:block" />
          Workflows with{" "}
          <span className="gradient-text">Intelligent AI</span>{" "}
          Systems.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary leading-relaxed mb-12"
        >
          We design, build, and deploy custom AI architectures and automation
          pipelines for global brands, turning complex operational bottlenecks
          into seamless, scalable systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="mailto:info@sonictch.com"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold text-base shadow-[0_4px_30px_rgba(0,200,83,0.25)] hover:shadow-[0_8px_40px_rgba(0,200,83,0.35)] hover:bg-accent-dark transition-all duration-300"
          >
            Schedule a Technical Audit
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

          {/* Secondary CTA */}
          <a
            href="#services"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-border-custom text-text-primary font-semibold text-base hover:border-accent hover:text-accent-dark hover:shadow-[0_0_25px_rgba(0,200,83,0.1)] transition-all duration-300"
          >
            Explore Our Systems
            <svg
              className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-text-muted tracking-widest uppercase">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-border-custom flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
