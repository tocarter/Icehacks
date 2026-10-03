const people = [
  { name: "Smaran", role: "Lead Organizer" },
  { name: "Carter", role: "Tech Lead" },
  { name: "Pranav", role: "Design Lead" },
  { name: "Reynash", role: "Operations" },
  { name: "Arfan", role: "Outreach" },
  { name: "Aljer", role: "Marketing" },
];

export function TeamPage() {
  return (
    <section className="pt-16 pb-24">
      <div className="wrap">
        <p className="kick">Crew</p>
        <h1 className="sec-h">The people on the ice.</h1>
        <p className="lede mb-12">
          High schoolers running Ice Hacks. Want in? Email us.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {people.map((p) => (
            <div key={p.name} className="felt p-5">
              <div className="team-avatar mb-6">{p.name[0]}</div>
              <p className="text-lg font-bold text-white">{p.name}</p>
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#c5ebff] mt-1">
                {p.role}
              </p>
            </div>
          ))}
        </div>
        <a
          href="mailto:outreach@codestarters.org?subject=Join%20the%20Ice%20Hacks%20team"
          className="btn btn-ice mt-10"
        >
          Join the crew
        </a>
      </div>
    </section>
  );
}
