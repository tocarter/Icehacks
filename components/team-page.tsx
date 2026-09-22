const people = [
  "Smaran",
  "Carter",
  "Pranav",
  "Reynash",
  "Arfan",
  "Aljer",
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
          {people.map((name) => (
            <div key={name} className="felt p-5">
              <img src="/logo.png" alt="" className="w-10 h-10 object-contain mb-6" />
              <p className="text-lg font-bold text-white">{name}</p>
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#c5ebff] mt-1">
                Organizer
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
