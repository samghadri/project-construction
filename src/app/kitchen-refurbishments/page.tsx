import Link from "next/link";

export default function KitchenRefurbishmentsPage() {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 md:px-8">
        <header className="flex flex-col gap-4 border-b-[3px] border-[var(--border-ink)] pb-8">
          <p className="section-label">Service</p>
          <h1 className="font-display text-balance text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            Kitchen refurbishments in London
          </h1>
          <p className="max-w-2xl text-pretty text-base font-semibold leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            End-to-end kitchen refurbishments: strip-out, first fix, units,
            worktops, electrics, plumbing, flooring, tiling and finishing. We
            manage the trades so you don&apos;t have to.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://wa.me/447473711666"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sky"
            >
              WhatsApp — quick quote
              <span className="sr-only"> Opens WhatsApp in a new tab.</span>
            </a>
            <Link href="/" className="btn btn-ghost text-sm">
              ← Home
            </Link>
          </div>
        </header>

        <main
          id="main-content"
          className="grid gap-8 py-10 sm:grid-cols-2 sm:gap-10 sm:py-14"
          tabIndex={-1}
        >
          <section className="card-soft p-6" aria-labelledby="cover-heading">
            <h2 id="cover-heading" className="section-label">
              What we cover
            </h2>
            <ul className="mt-5 space-y-3 text-sm font-semibold leading-relaxed text-[var(--text-secondary)]">
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
            <ul className="mt-5 space-y-3 text-sm font-semibold leading-relaxed text-[var(--text-secondary)]">
              <li>Landlords upgrading a rental to re-let quickly</li>
              <li>Homeowners modernising tired kitchens</li>
              <li>Managing agents needing reliable delivery</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
