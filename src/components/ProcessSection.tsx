"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Technical Review",
    description:
      "We audit your current communication setups, legacy infrastructure, and workflow processes to identify friction.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Architectural Design",
    description:
      "We map out a custom AI implementation strategy focused entirely on operational speed and tangible ROI.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Deployment & Scaling",
    description:
      "We implement, integrate, and scale the bespoke AI systems directly into your existing ecosystem securely.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.6", "end 0.8"],
  });

  return (
    <section id="process" ref={sectionRef} className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-accent-dark mb-4 block">
            Our Process
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-text-primary leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            From audit to{" "}
            <span className="gradient-text">deployment</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Background line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-border-light" />

          {/* Animated progress line */}
          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent to-accent-light"
          />

          {/* Phase items */}
          <div className="space-y-16">
            {phases.map((phase, index) => {
              return (
                <ProcessItem
                  key={phase.number}
                  phase={phase}
                  index={index}
                  scrollProgress={scrollYProgress}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessItem({
  phase,
  index,
  scrollProgress,
}: {
  phase: (typeof phases)[number];
  index: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const threshold = (index + 0.5) / phases.length;
  const isActive = useTransform(scrollProgress, (v) => v >= threshold);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-20 md:pl-28"
    >
      {/* Node dot */}
      <motion.div
        className="absolute left-[22px] md:left-[38px] top-2 w-5 h-5 rounded-full border-2 flex items-center justify-center z-10"
        style={{
          borderColor: useTransform(isActive, (v) =>
            v ? "#00c853" : "#e0e7e3"
          ),
          backgroundColor: useTransform(isActive, (v) =>
            v ? "#00c853" : "#ffffff"
          ),
          boxShadow: useTransform(isActive, (v) =>
            v ? "0 0 20px rgba(0,200,83,0.3)" : "none"
          ),
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: useTransform(isActive, (v) =>
              v ? "#ffffff" : "#e0e7e3"
            ),
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="group">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-sm font-bold text-accent-dark tracking-wider"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Phase {phase.number}
          </span>
        </div>
        <h3
          className="text-xl md:text-2xl font-bold text-text-primary mb-3 flex items-center gap-3"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <span className="p-2 rounded-xl bg-accent/5 text-accent-dark">
            {phase.icon}
          </span>
          {phase.title}
        </h3>
        <p className="text-text-secondary leading-relaxed text-base max-w-lg">
          {phase.description}
        </p>
      </div>
    </motion.div>
  );
}
