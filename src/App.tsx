import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { Services } from "@/components/site/Services";
import { Impact } from "@/components/site/Impact";
import { Community } from "@/components/site/Community";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { Partners } from "@/components/site/Partners";
import { Contact } from "@/components/site/Contact";

export default function App() {
  return (
    <SmoothScroll>
      <main className="bg-[#020B42] text-white">
        <Nav />
        <Hero />
        <Manifesto />
        <Services />
        <Impact />
        <Community />
        <Projects />
        <About />
        <Partners />
        <Contact />
      </main>
    </SmoothScroll>
  );
}