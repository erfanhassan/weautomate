import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://weautomate.sonictch.com"),
  title: {
    default: "AI Automation Agency | WeAutomate - Global AI Integration",
    template: "%s | WeAutomate",
  },
  description:
    "WeAutomate is a top-tier AI automation agency providing AI integration in business across the USA, Europe, Australia, and Bangladesh. We specialize in custom AI architectures, workflow automation, and AI automatic message replies for Facebook, Instagram, and other social media.",
  keywords: [
    "AI automation",
    "AI integration in business",
    "AI in bangladesh",
    "AI in usa",
    "AI in australia",
    "AI in europe",
    "ai automatic message reply on facebook",
    "ai automatic message reply on instagram",
    "social media AI automation",
    "AI Automation Agency",
    "enterprise AI",
    "workflow automation",
    "business automation",
  ],
  authors: [{ name: "WeAutomate" }],
  creator: "WeAutomate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://weautomate.sonictch.com",
    title: "AI Automation Agency | WeAutomate - Global AI Integration",
    description:
      "Transform complex operational bottlenecks into seamless, scalable systems. Providing top AI automation and social media AI message replies across USA, Europe, Australia, and Bangladesh.",
    siteName: "WeAutomate",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Agency | WeAutomate - Global AI Integration",
    description:
      "Transform complex operational bottlenecks into seamless, scalable systems. Providing top AI automation and social media AI message replies across USA, Europe, Australia, and Bangladesh.",
  },
  alternates: {
    canonical: "https://weautomate.sonictch.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WeAutomate",
    url: "https://weautomate.sonictch.com",
    logo: "https://weautomate.sonictch.com/favicon.ico",
    description: "WeAutomate is a top-tier AI automation agency providing AI integration in business across the USA, Europe, Australia, and Bangladesh.",
    sameAs: [
      "https://www.facebook.com/WeAutomate",
      "https://www.instagram.com/WeAutomate"
    ],
    areaServed: ["US", "AU", "EU", "BD"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Bengali"]
    },
    knowsAbout: [
      "AI automation",
      "AI integration in business",
      "AI automatic message reply on Facebook",
      "AI automatic message reply on Instagram"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-white text-foreground"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
