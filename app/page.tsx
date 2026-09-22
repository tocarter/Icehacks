import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { Schedule } from "@/components/schedule";
import { Stats } from "@/components/stats";
import { Ticker } from "@/components/ticker";
import { Tracks } from "@/components/tracks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Ticker />
      <main>
        <Hero />
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Tracks />
        </Reveal>
        <Reveal>
          <Schedule />
        </Reveal>
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
