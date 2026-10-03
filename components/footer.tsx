import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="wrap footer-grid">
        <div>
          <Link href="/#top" className="flex items-center gap-2 font-bold text-white mb-4">
            <img src="/logo.png" alt="" className="w-6 h-6 object-contain" />
            Ice Hacks
          </Link>
          <p className="text-[#c5ebff] text-sm">
            The coolest hackathon of the season. Built by high schoolers, for high schoolers.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/#about" className="text-[#c5ebff] hover:text-white">About</Link>
            <Link href="/#tracks" className="text-[#c5ebff] hover:text-white">Tracks</Link>
            <Link href="/#schedule" className="text-[#c5ebff] hover:text-white">Schedule</Link>
            <Link href="/#faq" className="text-[#c5ebff] hover:text-white">FAQ</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Event</h3>
          <div className="flex flex-col gap-2 text-sm text-[#c5ebff]">
            <span>November 8–15, 2026</span>
            <span>Online · 100% free</span>
            <span>200+ hackers</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-white mb-4">Connect</h3>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/team" className="text-[#c5ebff] hover:text-white">Team</Link>
            <a href="mailto:outreach@codestarters.org" className="text-[#c5ebff] hover:text-white">Email</a>
            <span className="text-[#c5ebff] hover:text-white cursor-pointer">Twitter</span>
            <span className="text-[#c5ebff] hover:text-white cursor-pointer">Discord</span>
            <span className="text-[#c5ebff] hover:text-white cursor-pointer">GitHub</span>
          </div>
        </div>
      </div>
      <div className="wrap mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-[11px] text-[#d5eefc]">
        <span>© 2026 Ice Hacks · organized by CodeStarters</span>
        <span>stay frost ❄️</span>
      </div>
    </footer>
  );
}
