const rows = [
  { label: "Gold", n: 3, size: "lg" },
  { label: "Silver", n: 4, size: "md" },
  { label: "In-kind", n: 6, size: "sm" },
];

export function Sponsors() {
  return (
    <section id="sponsors" className="py-20">
      <div className="wrap">
        <p className="kick">Sponsors</p>
        <h2 className="sec-h">
          The people who keep
          <br />
          the ice <em>frozen</em>.
        </h2>
        <p className="lede">
          Logos go here. Until then, these are empty slots.
        </p>
        {rows.map((row) => (
          <div key={row.label} className="sponsor-row">
            <p className="kick">{row.label}</p>
            <div className={`sponsor-grid ${row.size} stagger`}>
              {Array.from({ length: row.n }, (_, i) => (
                <div key={i} className="sponsor-slot" aria-hidden="true" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
