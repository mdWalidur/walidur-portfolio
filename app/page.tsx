import Navbar from "@/components/layout/Navbar";
import CommandPalette from "@/components/ui/CommandPalette";
import Hero3DDecor from "@/components/sections/Hero3DDecor";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--text-primary)]">
      {/* Persistent 3D Particle Globe Canvas */}
      <Hero3DDecor />

      <Navbar />
      <CommandPalette />

      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}