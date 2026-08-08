import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Certifications from "@/components/sections/Certifications";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Work />
        <Certifications />
        <Experience />
        <About />
        <Contact />
        
      </main>

      <Footer />
    </>
  );
}