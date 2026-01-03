import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import CapacityDiagram from "@/components/CapacityDiagram";
import HowItWorks from "@/components/HowItWorks";
import WhyItMatters from "@/components/WhyItMatters";
import Safety from "@/components/Safety";
import WhoWeSupport from "@/components/WhoWeSupport";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <CapacityDiagram />
      <HowItWorks />
      <WhyItMatters />
      <Safety />
      <WhoWeSupport />
      <CTA />
      <Footer />
    </main>
  );
}
