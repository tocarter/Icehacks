const items = [
  "Online",
  "November 8–15, 2026",
  "High school hackathon",
  "100% free",
  "Opening 6:00 PM PST",
  "Software, hardware, anything",
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row.map((t, i) => (
          <span key={i}>
            {t}
            <i>•</i>
          </span>
        ))}
      </div>
    </div>
  );
}
