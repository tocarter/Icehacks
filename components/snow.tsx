"use client";

const flakes = [
  { l: "4%", d: "0s", s: "10s", z: 8, o: 0.7 },
  { l: "10%", d: "1.2s", s: "12s", z: 5, o: 0.5 },
  { l: "16%", d: "3.1s", s: "9s", z: 11, o: 0.8 },
  { l: "22%", d: "0.6s", s: "14s", z: 6, o: 0.55 },
  { l: "28%", d: "4.4s", s: "11s", z: 9, o: 0.65 },
  { l: "34%", d: "2.2s", s: "13s", z: 4, o: 0.4 },
  { l: "40%", d: "5s", s: "10s", z: 12, o: 0.85 },
  { l: "46%", d: "1.8s", s: "15s", z: 7, o: 0.6 },
  { l: "52%", d: "3.6s", s: "9.5s", z: 5, o: 0.45 },
  { l: "58%", d: "0.3s", s: "12.5s", z: 10, o: 0.75 },
  { l: "64%", d: "2.9s", s: "11.5s", z: 6, o: 0.5 },
  { l: "70%", d: "4.8s", s: "13.5s", z: 8, o: 0.65 },
  { l: "76%", d: "6s", s: "16s", z: 4, o: 0.35 },
  { l: "82%", d: "7.2s", s: "14s", z: 9, o: 0.7 },
  { l: "88%", d: "5.5s", s: "17s", z: 5, o: 0.45 },
  { l: "94%", d: "1.5s", s: "10.5s", z: 7, o: 0.55 },
  { l: "13%", d: "8s", s: "18s", z: 3, o: 0.3 },
  { l: "37%", d: "6.5s", s: "15.5s", z: 13, o: 0.9 },
  { l: "61%", d: "3s", s: "12s", z: 4, o: 0.35 },
  { l: "85%", d: "9s", s: "19s", z: 6, o: 0.5 },
];

export function Snow() {
  return (
    <div className="snow" aria-hidden="true">
      {flakes.map((f, i) => (
        <span
          key={i}
          style={{
            left: f.l,
            animationDelay: f.d,
            animationDuration: f.s,
            width: f.z,
            height: f.z,
            opacity: f.o,
            boxShadow:
              f.z > 9
                ? `0 0 ${f.z}px rgba(232, 247, 255, 0.6)`
                : `0 0 ${f.z - 2}px rgba(232, 247, 255, 0.4)`,
          }}
        />
      ))}
    </div>
  );
}
