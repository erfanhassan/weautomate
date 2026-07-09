import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofMarquee from "@/components/SocialProofMarquee";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ImplementationsSection from "@/components/ImplementationsSection";
import InnovationLabSection from "@/components/InnovationLabSection";
import ProcessSection from "@/components/ProcessSection";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofMarquee />
        <CapabilitiesSection />
        <ImplementationsSection />
        <InnovationLabSection />
        <ProcessSection />
      </main>
      <FooterCTA />
    </>
  );
}
