"use client";

const flakes = [
  { l: "6%", d: "0s", s: "10s", z: 8 },
  { l: "14%", d: "1.2s", s: "12s", z: 6 },
  { l: "22%", d: "3.1s", s: "9s", z: 11 },
  { l: "31%", d: "0.6s", s: "14s", z: 7 },
  { l: "39%", d: "4.4s", s: "11s", z: 9 },
  { l: "47%", d: "2.2s", s: "13s", z: 5 },
  { l: "55%", d: "5s", s: "10s", z: 12 },
  { l: "63%", d: "1.8s", s: "15s", z: 8 },
  { l: "71%", d: "3.6s", s: "9.5s", z: 6 },
  { l: "79%", d: "0.3s", s: "12.5s", z: 10 },
  { l: "87%", d: "2.9s", s: "11.5s", z: 7 },
  { l: "93%", d: "4.8s", s: "13.5s", z: 9 },
  { l: "18%", d: "6s", s: "16s", z: 5 },
  { l: "58%", d: "7.2s", s: "14s", z: 8 },
  { l: "84%", d: "5.5s", s: "17s", z: 6 },
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
          }}
        />
      ))}
    </div>
  );
}
