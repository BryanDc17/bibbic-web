import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SocialProof from "@/components/SocialProof";
import EngagementLoop from "@/components/EngaagementLoop";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <EngagementLoop />
      <Features />
      <HowItWorks />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}

