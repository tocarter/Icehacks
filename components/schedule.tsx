const slots = [
  { t: "Nov 8 · 6:00 PM PST", h: "Opening + workshops", p: "Check in, hear the rules, then we start." },
  { t: "Nov 8", h: "Team formation", p: "Show up solo or with friends. Teams are 1–4." },
  { t: "Nov 8", h: "Hacking begins", p: "The freeze starts. Build anything you want." },
  { t: "Nov 9–14", h: "Build week", p: "Workshops, mentors, and late-night hacking." },
  { t: "Nov 15", h: "Submissions", p: "Last push, then everything gets locked." },
  { t: "Nov 15", h: "Demos + awards", p: "Show it off, then we close the ice." },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-20">
      <div className="wrap">
        <p className="kick">The week</p>
        <h2 className="sec-h">
          Eight <em>days</em>.
        </h2>
        <div className="sched stagger mt-10">
          {slots.map((s) => (
            <div key={s.h} className="sched-row">
              <time>{s.t}</time>
              <div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
