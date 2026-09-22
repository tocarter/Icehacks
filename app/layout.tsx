import type { Metadata } from "next";
import { Geist_Mono, Iceland } from "next/font/google";
import { FrostField } from "@/components/frost-field";
import { IceBits } from "@/components/ice-bits";
import "./globals.css";

const geist = Geist_Mono({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const iceland = Iceland({
  variable: "--font-ice",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ice Hacks 2026",
  description:
    "An online high school hackathon. November 8–15, 2026. Opening ceremony 6:00 PM PST on Nov 8. Free to attend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${iceland.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <FrostField />
        <IceBits />
        {children}
      </body>
    </html>
  );
}
