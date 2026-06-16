import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IPC — Building the Future of Indigenous Communities" },
      { name: "description", content: "Indigenous Procurement Corp delivers modular housing, procurement, energy innovation, training and special projects across Canada." },
      { property: "og:title", content: "IPC — The Future of Indigenous Infrastructure" },
      { property: "og:description", content: "Modular housing, sovereign energy and community development — designed with Nations, not for them." },
    ],
  }),
  component: Index,
});

function Index() {
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
