export function CTA() {
  return (
    <section id="apply" className="py-24">
      <div className="wrap">
        <div className="cta-aurora text-center relative z-10">
          <h2 className="sec-h text-4xl md:text-5xl">Come build something.</h2>
          <p className="lede mx-auto">
            Online · November 8–15, 2026 · 100% free
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:outreach@codestarters.org?subject=Apply%20to%20Ice%20Hacks"
              className="btn btn-ice btn-glow"
            >
              Apply now
            </a>
            <a href="mailto:outreach@codestarters.org" className="btn btn-quiet">
              outreach@codestarters.org
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
