export default function KitchenRefurbishmentsPage() {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-5xl px-4 py-9 sm:px-8 sm:py-14 md:px-10">
        <header
          className="flex flex-col gap-4 border-b pb-6 sm:pb-8"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="section-label">Service</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Kitchen refurbishments in London
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            End-to-end kitchen refurbishments: strip-out, first fix, units,
            worktops, electrics, plumbing, flooring, tiling and finishing. We
            manage the trades so you don&apos;t have to.
          </p>
          <div className="grid gap-3 pt-2 sm:flex sm:flex-wrap sm:items-center">
            <a
              href="https://wa.me/447473711666"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full sm:w-auto"
            >
              WhatsApp for a quick quote
              <span className="sr-only"> Opens WhatsApp in a new tab.</span>
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
          <section className="card-soft p-6" aria-labelledby="cover-heading">
            <h2 id="cover-heading" className="section-label">
              What we cover
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              <li>Design support and practical layout advice</li>
              <li>Plumbing and electrical first and second fix</li>
              <li>Unit install, worktops, splashbacks and finishing</li>
              <li>Flooring, tiling, decorating and snagging</li>
            </ul>
          </section>

          <section className="card-soft p-6" aria-labelledby="great-heading">
            <h2 id="great-heading" className="section-label">
              Great for
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              <li>Landlords upgrading a rental to re-let quickly</li>
              <li>Homeowners modernising tired kitchens</li>
              <li>Managing agents needing reliable delivery</li>
            </ul>
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
