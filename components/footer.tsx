import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/15 py-8">
      <div className="wrap flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link href="/#top" className="flex items-center gap-2 font-bold text-white">
          <img src="/logo.png" alt="" className="w-6 h-6 object-contain" />
          Ice Hacks
        </Link>
        <p className="text-[11px] text-[#d5eefc]">
          2026 Ice Hacks · stay frost · organized by CodeStarters
        </p>
        <div className="flex gap-4 text-[11px] uppercase tracking-wider">
          <Link href="/team" className="text-[#c5ebff] hover:text-white">
            Team
          </Link>
          <a href="mailto:outreach@codestarters.org" className="text-[#c5ebff] hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
