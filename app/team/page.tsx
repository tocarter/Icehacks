import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { TeamPage } from "@/components/team-page";

export const metadata = {
  title: "Team | Ice Hacks",
  description: "The people putting Ice Hacks together.",
};

export default function Team() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Reveal>
          <TeamPage />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
