import Navbar from "@/components/layout/Navbar";
import CommandPalette from "@/components/ui/CommandPalette";
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
      <Navbar />
      <CommandPalette />

      <main>
        <Hero />

        <div className="page-shell">
          <Work />
          <About />
          <Experience />
          <Certifications />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}