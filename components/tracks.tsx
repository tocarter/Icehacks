const tracks = [
  { n: "01", t: "Best Overall", p: "The project that makes the whole room quiet down.", tilt: "-1.6deg" },
  { n: "02", t: "Best First Hack", p: "Only open to people at their first hackathon. Ever.", tilt: "1.8deg" },
  { n: "03", t: "AI & Machine Learning", p: "Models, agents, and things that think a little.", tilt: "-0.8deg" },
  { n: "04", t: "Social Impact", p: "Something your own community would actually use.", tilt: "1.2deg" },
  { n: "05", t: "Design & Craft", p: "The one that looks and feels unreasonably good.", tilt: "-1.4deg" },
];

export function Tracks() {
  return (
    <section id="tracks" className="py-20">
      <div className="wrap">
        <p className="kick">Project tracks</p>
        <h2 className="sec-h">
          Five categories,
          <br />
          five sets of <em>prizes</em>.
        </h2>
        <p className="lede">
          Build whatever you want. These are just the buckets we hand trophies
          out of.
        </p>
        <div className="track-board stagger">
          {tracks.map((t) => (
            <article
              key={t.n}
              className="felt hang track-tile"
              style={{ ["--tilt"]: t.tilt } as { [key: string]: string }}
            >
              <b>{t.n}</b>
              <h3>{t.t}</h3>
              <p>{t.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
