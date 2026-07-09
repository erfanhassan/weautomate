"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Client 1", src: "/logos/logo-1.png" },
  { name: "Client 2", src: "/logos/logo-2.png" },
  { name: "Client 3", src: "/logos/logo-3.png" },
  { name: "Client 4", src: "/logos/logo-4.png" },
  { name: "Client 5", src: "/logos/logo-5.png" },
  { name: "Client 6", src: "/logos/logo-6.png" },
  { name: "Client 7", src: "/logos/logo-7.png" },
];

function ClientLogo({ client }: { client: { name: string; src: string } }) {
  return (
    <div className="flex-shrink-0 px-2 md:px-4 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-500">
      <div className="relative w-64 h-32 md:w-96 md:h-48">
        <Image
          src={client.src}
          alt={client.name}
          fill
          className="object-contain scale-125 md:scale-150"
        />
      </div>
    </div>
  );
}

export default function SocialProofMarquee() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#003310] via-accent-dark to-[#003310] border-y border-accent-dark/50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="text-sm font-medium tracking-widest uppercase text-white/80">
          Trusted by global industry leaders
        </span>
      </motion.div>

      <div className="marquee-container relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#003310] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#003310] to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="marquee-track flex w-max animate-marquee">
          {/* Duplicate the list for seamless looping */}
          {[...clients, ...clients, ...clients, ...clients].map(
            (client, i) => (
              <ClientLogo key={`${client.name}-${i}`} client={client} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
