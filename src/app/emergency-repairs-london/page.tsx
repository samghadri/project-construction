export default function EmergencyRepairsLondonPage() {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-5xl px-4 py-9 sm:px-8 sm:py-14 md:px-10">
        <header
          className="flex flex-col gap-4 border-b pb-6 sm:pb-8"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="section-label">Service</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Emergency repairs London (24/7)
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            Fast response for urgent issues including leaks, electrical faults,
            damaged doors and locks, and safety-critical repairs. Fully insured,
            clear communication, and tidy workmanship.
          </p>
          <div className="grid gap-3 pt-2 sm:flex sm:flex-wrap sm:items-center">
            <a href="tel:+447473711666" className="btn btn-primary w-full sm:w-auto">
              Call now — 24/7 response
            </a>
            <a href="/" className="btn btn-ghost w-full sm:w-auto">
              Back to homepage
            </a>
          </div>
        </header>

        <main
          id="main-content"
          className="grid gap-8 py-8 pb-28 sm:grid-cols-2 sm:gap-12 sm:py-14"
          tabIndex={-1}
        >
          <section className="card-soft p-6" aria-labelledby="typical-heading">
            <h2 id="typical-heading" className="section-label">
              Typical call-outs
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              <li>Leaks, burst pipes, isolation and emergency plumbing</li>
              <li>Electrical faults, tripping circuits, urgent replacements</li>
              <li>Damaged locks, doors, hinges and security issues</li>
              <li>Make-safe work after water damage or impact damage</li>
            </ul>
          </section>

          <section className="card-soft p-6" aria-labelledby="how-heading">
            <h2 id="how-heading" className="section-label">
              How it works
            </h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[var(--text-secondary)] marker:text-[var(--accent)]">
              <li>
                <span className="font-semibold text-[var(--text-primary)]">
                  Call
                </span>{" "}
                and describe the issue (photos help).
              </li>
              <li>
                <span className="font-semibold text-[var(--text-primary)]">
                  We dispatch
                </span>{" "}
                the right trade and give an ETA.
              </li>
              <li>
                <span className="font-semibold text-[var(--text-primary)]">
                  Make safe, fix,
                </span>{" "}
                and share before/after updates.
              </li>
            </ol>
          </section>
        </main>

        <div className="mobile-cta sm:hidden" role="region" aria-label="Quick contact">
          <div className="mobile-cta__inner">
            <a href="tel:+447473711666" className="btn btn-primary mobile-cta__btn">
              Call
            </a>
            <a
              href="https://wa.me/447473711666"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mobile-cta__btn"
            >
              WhatsApp
              <span className="sr-only"> Opens WhatsApp in a new tab.</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
