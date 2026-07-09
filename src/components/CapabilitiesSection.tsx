"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const capabilities = [
  {
    id: "llm",
    title: "Custom LLM Architectures",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    description:
      "Going beyond standard chatbots. We build proprietary, secure AI models trained on your specific data, featuring custom behavioral routing and dynamic personas to handle complex business logic.",
    tag: "Deep Learning",
  },
  {
    id: "workflow",
    title: "Enterprise Workflow Automation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    description:
      "Eradicating operational bottlenecks. We seamlessly connect your legacy systems, CRMs, and ERPs to automate heavy administrative tasks, HR workflows, and data routing, saving thousands of manual hours.",
    tag: "Integration",
  },
  {
    id: "conversational",
    title: "Conversational AI & Omnichannel Orchestration",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    description:
      "Designing intelligent routing systems capable of handling massive volumes of customer interactions globally, ensuring 100% consistency across retail, hospitality, and support channels.",
    tag: "Omnichannel",
  },
  {
    id: "strategy",
    title: "AI Strategy & Implementation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    description:
      "End-to-end consulting for enterprise scale. We audit your infrastructure, identify data friction, map out exact ROI, and ensure strict data governance and security compliance.",
    tag: "Consulting",
  },
];

export default function CapabilitiesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="services" className="py-28 bg-white relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-accent-dark mb-4 block">
            Capabilities
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-text-primary leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Systems engineered for{" "}
            <span className="gradient-text">enterprise scale</span>
          </h2>
        </motion.div>

        {/* Accordion items */}
        <div className="space-y-4">
          {capabilities.map((cap, index) => {
            const isActive = activeId === cap.id;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveId(isActive ? null : cap.id)}
                className={`group relative cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isActive
                    ? "border-accent/30 bg-accent/[0.02] shadow-[0_0_40px_rgba(0,200,83,0.06)]"
                    : "border-border-light hover:border-accent/20 bg-white hover:bg-accent/[0.01]"
                } ${
                  activeId && !isActive ? "opacity-50" : "opacity-100"
                }`}
              >
                {/* Glowing left accent */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-b from-accent to-accent-light"
                      : "bg-transparent group-hover:bg-accent/30"
                  }`}
                />

                <div className="p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-accent/10 text-accent-dark"
                            : "bg-surface text-text-muted group-hover:bg-accent/5 group-hover:text-accent-dark"
                        }`}
                      >
                        {cap.icon}
                      </div>
                      <div>
                        <h3
                          className="text-lg md:text-xl font-semibold text-text-primary"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {cap.title}
                        </h3>
                        <span
                          className={`text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
                            isActive ? "text-accent-dark" : "text-text-muted"
                          }`}
                        >
                          {cap.tag}
                        </span>
                      </div>
                    </div>

                    {/* Expand icon */}
                    <motion.div
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 flex-shrink-0 ${
                        isActive
                          ? "border-accent/30 bg-accent/10 text-accent-dark"
                          : "border-border-light text-text-muted group-hover:border-accent/20"
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-6 text-text-secondary leading-relaxed text-base md:text-lg max-w-3xl pl-16">
                          {cap.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
