import SiteChrome from "@/components/SiteChrome";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Marquee from "@/components/sections/Marquee";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <SiteChrome>
      <main>
        <Hero />
        <About />
        <Marquee />
        <Work />
        <Services />
        <Experience />
      </main>
      <Contact />
    </SiteChrome>
  );
}
