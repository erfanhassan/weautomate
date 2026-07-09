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
  title: "WeAutomate | Enterprise AI Systems & Workflow Automation",
  description:
    "We design, build, and deploy custom AI architectures and automation pipelines for global brands. Transform complex operational bottlenecks into seamless, scalable systems.",
  keywords: [
    "AI automation",
    "enterprise AI",
    "workflow automation",
    "LLM architecture",
    "conversational AI",
  ],
  openGraph: {
    title: "WeAutomate | Enterprise AI Systems & Workflow Automation",
    description:
      "Custom AI architectures and automation pipelines for global brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-white text-foreground"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
