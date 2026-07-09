"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const implementations = [
  {
    id: "four-seasons",
    client: "Four Seasons Hotel Dubai",
    industry: "Hospitality",
    description:
      "Architected a completely automated AI booking system. We streamlined their complex reservation processes, handling global inquiries in real-time and drastically elevating the luxury guest experience.",
    image: "/case-hospitality.png",
  },
  {
    id: "sk-overseas",
    client: "SK Overseas",
    industry: "HR Tech",
    description:
      "Executed a massive workflow overhaul. By integrating advanced automation into their day-to-day administrative tasks, we eliminated friction, saving countless hours and accelerating operational speed.",
    image: "/case-hr.png",
  },
  {
    id: "retail-scale",
    client: "Al Futtaim, Emma Sleep & bKash",
    industry: "Retail & Scale",
    description:
      "Developed intelligent, high-volume conversational AI systems. We engineered automation pipelines capable of resolving complex customer interactions flawlessly at enterprise scale.",
    image: "/case-retail.png",
  },
];

export default function ImplementationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id="implementations"
      ref={containerRef}
      className="py-28 bg-surface relative overflow-hidden"
    >
      {/* Subtle moving bg */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/3 blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-accent-dark mb-4 block">
            Recent Implementations
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-text-primary leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Proven results across{" "}
            <span className="gradient-text">global industries</span>
          </h2>
        </motion.div>

        {/* Implementation cards — split layout */}
        <div className="space-y-8">
          {implementations.map((impl, index) => (
            <motion.div
              key={impl.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative grid grid-cols-1 md:grid-cols-5 gap-0 rounded-3xl border border-border-light bg-white overflow-hidden hover:border-accent/20 hover:shadow-[0_0_60px_rgba(0,200,83,0.05)] transition-all duration-500"
            >
              {/* Text side */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-accent/5 text-xs font-medium text-accent-dark tracking-wider uppercase mb-4">
                  {impl.industry}
                </span>
                <h3
                  className="text-xl md:text-2xl font-bold text-text-primary mb-4"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {impl.client}
                </h3>
                <p className="text-text-secondary leading-relaxed text-base">
                  {impl.description}
                </p>
              </div>

              {/* Image side */}
              <div className="md:col-span-2 relative min-h-[240px] md:min-h-0 overflow-hidden">
                <Image
                  src={impl.image}
                  alt={`${impl.client} case study`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle overlay to blend with the card */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
