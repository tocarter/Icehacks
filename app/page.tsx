import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { Schedule } from "@/components/schedule";
import { SectionDivider } from "@/components/section-divider";
import { Sponsors } from "@/components/sponsors";
import { Stats } from "@/components/stats";
import { Ticker } from "@/components/ticker";
import { Tracks } from "@/components/tracks";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Reveal>
          <Stats />
        </Reveal>
        <SectionDivider />
        <Reveal>
          <About />
        </Reveal>
        <SectionDivider />
        <Reveal>
          <Tracks />
        </Reveal>
        <SectionDivider />
        <Reveal>
          <Schedule />
        </Reveal>
        <SectionDivider />
        <Reveal>
          <Sponsors />
        </Reveal>
        <SectionDivider />
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
