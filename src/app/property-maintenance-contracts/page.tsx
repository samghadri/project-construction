export default function PropertyMaintenanceContractsPage() {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8 sm:py-14 md:px-10">
        <header
          className="flex flex-col gap-4 border-b pb-8"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="section-label">Service</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Property maintenance contracts (London)
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            Planned and reactive maintenance for single properties and
            portfolios. Ideal for landlords, homeowners and managing agents who
            want one dependable team to keep everything running smoothly.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://wa.me/447473711666"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              WhatsApp for a quick quote
              <span className="sr-only"> Opens WhatsApp in a new tab.</span>
            </a>
            <a href="/" className="link link-muted text-sm">
              Back to homepage
            </a>
          </div>
        </header>

        <main id="main-content" className="grid gap-10 py-10 sm:grid-cols-2 sm:gap-12 sm:py-14" tabIndex={-1}>
          <section className="card-soft p-6" aria-labelledby="included-heading">
            <h2 id="included-heading" className="section-label">
              Included options
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              <li>Regular inspections and preventative maintenance</li>
              <li>Priority response for reactive repairs</li>
              <li>Quote and schedule larger refurbishment works</li>
              <li>Photo updates and clear job reporting</li>
            </ul>
          </section>

          <section className="card-soft p-6" aria-labelledby="suited-heading">
            <h2 id="suited-heading" className="section-label">
              Suited to
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              <li>Landlords (single lets to multi-property portfolios)</li>
              <li>Homeowners needing a reliable ongoing maintenance partner</li>
              <li>Managing agents who need dependable contractors</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
