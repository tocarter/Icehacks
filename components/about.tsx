export function About() {
  return (
    <section id="about" className="py-20">
      <div className="wrap">
        <p className="kick">About the event</p>
        <h2 className="sec-h">
          Eight days on the ice,
          <br />
          and something that <em>runs</em>.
        </h2>
        <p className="lede">
          Ice Hacks is a free, online hackathon for high schoolers. You show
          up on November 8 with an idea, or with nothing at all, and you leave
          on November 15 with a working project and a demo.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-4 stagger">
          {[
            {
              t: "Built for first-timers",
              p: "Workshops start from absolute zero, mentors stay around all week, and you do not need a single line of code to apply.",
            },
            {
              t: "Everything is covered",
              p: "Entry is free. Software, hardware, design, weird ideas — if it can freeze, it can ship.",
            },
            {
              t: "Judged by people who build",
              p: "Mentors and judges who actually make things. The feedback is the prize most people remember.",
            },
          ].map((c) => (
            <div key={c.t} className="felt hang p-6">
              <h3 className="text-xl font-bold text-white mb-2">{c.t}</h3>
              <p className="text-[#d5eefc] leading-relaxed">{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
