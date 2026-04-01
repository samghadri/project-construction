import Link from "next/link";

export default function Home() {
  const phoneDisplay = "+44 7473 711666";
  const phoneHref = "tel:+447473711666";
  const whatsappHref = "https://wa.me/447473711666";
  const checkatradeHref = "https://www.checkatrade.com/";
  const googleReviewsHref = "https://www.google.com/search?q=google+reviews";

  return (
    <div className="page-shell">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <header className="mb-10 flex flex-col gap-6 sm:mb-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="builder-brand m-0">
              <span className="builder-brand__icon" aria-hidden="true">
                🛠️
              </span>
              <span>London builders &amp; fixers</span>
            </p>
            <div className="flex flex-col gap-2 sm:items-end sm:text-right">
              <a
                href={phoneHref}
                className="link no-underline text-[var(--text-primary)]"
              >
                <span className="text-[var(--text-muted)]">Ring us</span>{" "}
                <span className="whitespace-nowrap">{phoneDisplay}</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sky px-5 py-2.5 text-sm sm:self-end"
              >
                WhatsApp — quick quote
                <span className="sr-only"> Opens WhatsApp in a new tab.</span>
              </a>
            </div>
          </div>
          <p className="max-w-xl text-sm font-semibold text-[var(--text-secondary)] sm:text-base">
            Maintenance · repairs · refurb · construction — fully insured, all
            over London.
          </p>
        </header>

        <main
          id="main-content"
          className="flex flex-1 flex-col gap-12 pb-10 sm:gap-16"
          tabIndex={-1}
        >
          <section aria-labelledby="hero-heading" className="relative">
            <div className="card-services p-6 sm:p-8 md:p-10">
              <p className="section-label">24/7 when you need us</p>
              <h1
                id="hero-heading"
                className="font-display mt-3 text-balance text-[1.75rem] font-bold leading-[1.12] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl"
              >
                <span className="text-[var(--accent)]">London trusted crew</span>{" "}
                for homes &amp; rentals — we build it, we fix it, we keep it
                running.
              </h1>
              <p className="font-display mt-5 max-w-2xl text-pretty text-base font-medium leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                From “help, it&apos;s leaking!” to full refurb — done properly
                first time. Landlords, homeowners &amp; agents welcome.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={phoneHref} className="btn btn-primary">
                  Call now — 24/7
                </a>
                <p className="max-w-[16rem] text-sm font-semibold leading-snug text-[var(--text-muted)]">
                  <span className="text-[var(--text-primary)]">10+ yrs</span> on
                  the tools · fast across town
                </p>
              </div>
            </div>
          </section>

          <hr className="builder-divider" aria-hidden="true" />

          <section aria-labelledby="services-heading">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 id="services-heading" className="section-label">
                  Pick your job
                </h2>
                <p className="font-display mt-2 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                  What are we building today?
                </p>
              </div>
              <p className="text-sm font-semibold text-[var(--text-muted)]">
                Tap a block for the full story ↓
              </p>
            </div>
            <div className="fun-bento">
              <Link href="/property-maintenance-contracts">
                <span className="font-display text-lg sm:text-xl">
                  Property maintenance
                </span>
                <span className="mt-2 block text-sm font-semibold leading-snug text-[var(--text-secondary)]">
                  Planned + reactive care for flats, houses &amp; portfolios.
                </span>
              </Link>
              <Link href="/emergency-repairs-london">
                <span className="font-display text-lg sm:text-xl">
                  Emergency repairs
                </span>
                <span className="mt-2 block text-sm font-semibold leading-snug text-[var(--text-secondary)]">
                  Leaks, sparks, locks — same-day &amp; call-outs.
                </span>
              </Link>
              <Link href="/kitchen-refurbishments">
                <span className="font-display text-lg sm:text-xl">
                  Kitchens &amp; bathrooms
                </span>
                <span className="mt-2 block text-sm font-semibold leading-snug text-[var(--text-secondary)]">
                  Rip-out to sparkle — units, wet rooms, tiling.
                </span>
              </Link>
              <div className="fun-bento-tile">
                <span className="font-display text-lg sm:text-xl">
                  Construction
                </span>
                <span className="mt-2 block text-sm font-semibold leading-snug text-[var(--text-secondary)]">
                  Extensions, lofts &amp; structural — tell us the dream.
                </span>
              </div>
            </div>
          </section>

          <div
            className="flex flex-wrap items-center gap-2 text-sm font-bold"
            aria-label="Reviews and trust"
          >
            <span className="chip">Trusted</span>
            <a
              href={checkatradeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-muted"
            >
              Checkatrade
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span className="text-[var(--text-subtle)]" aria-hidden="true">
              ·
            </span>
            <a
              href={googleReviewsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-muted"
            >
              Google reviews
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <section className="card-soft p-5 sm:p-6">
            <p className="section-label">Certifications</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <div className="fun-cert">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/certs/gas-safe.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-auto shrink-0"
                />
                <span className="text-sm font-extrabold text-[var(--text-primary)]">
                  Gas Safe registered
                </span>
              </div>
              <div className="fun-cert">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/certs/niceic.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-auto shrink-0"
                />
                <span className="text-sm font-extrabold text-[var(--text-primary)]">
                  NICEIC approved
                </span>
              </div>
            </div>
          </section>

          <hr className="builder-divider" aria-hidden="true" />

          <section
            aria-labelledby="why-heading"
            className="grid gap-8 sm:grid-cols-3 sm:gap-10"
          >
            <div>
              <h2 id="why-heading" className="section-label">
                Why us?
              </h2>
              <p className="font-display mt-3 text-lg font-bold text-[var(--text-primary)]">
                Less faff. More fixed.
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-[var(--text-secondary)]">
                Happy tenants, happy landlords, fewer call-backs.
              </p>
            </div>
            <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2">
              <div className="fun-stat">
                <p className="font-display text-4xl font-bold text-[var(--accent)]">
                  10+
                </p>
                <p className="mt-2 text-sm font-extrabold text-[var(--text-primary)]">
                  Years on site
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[var(--text-muted)]">
                  Maintenance, refurbs &amp; builds across London.
                </p>
              </div>
              <div className="fun-stat">
                <p className="font-display text-3xl font-bold text-[var(--accent-sky)] sm:text-4xl">
                  Top reviews
                </p>
                <p className="mt-2 text-sm font-extrabold text-[var(--text-primary)]">
                  Landlords &amp; homeowners
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[var(--text-muted)]">
                  Agents &amp; private clients who want stuff done right.
                </p>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="areas-heading"
            className="grid gap-8 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] sm:gap-10"
          >
            <div>
              <h2 id="areas-heading" className="section-label">
                Where we roll up
              </h2>
              <p className="font-display mt-3 text-lg font-bold text-[var(--text-primary)]">
                London zones on our van route
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-[var(--text-secondary)]">
                Outside the list? Still ask — we&apos;ll be honest if it&apos;s
                a stretch.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="fun-stat">
                <p className="section-label text-[var(--text-muted)]">
                  Regions
                </p>
                <p className="font-display mt-3 text-lg font-bold text-[var(--text-primary)]">
                  North · West · Central
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--text-muted)]">
                  All over those patches of the map.
                </p>
              </div>
              <div className="fun-stat">
                <p className="section-label text-[var(--text-muted)]">
                  Neighbourhoods
                </p>
                <p className="mt-3 text-sm font-bold leading-relaxed text-[var(--text-secondary)]">
                  Notting Hill Gate, Westminster, Hyde Park, Chelsea,
                  Kensington, Islington, Hampstead.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="recent-heading">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 id="recent-heading" className="section-label">
                  Site diary
                </h2>
                <p className="font-display mt-2 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                  Recent wins
                </p>
              </div>
              <p className="text-xs font-bold text-[var(--text-subtle)]">
                Placeholder pics — drop in real job photos anytime.
              </p>
            </div>
            <div className="fun-portfolio grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <figure className="card overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/recent-works/bathroom.svg"
                  alt="Illustration: bathroom refurbishment in Woodford"
                  className="h-44 w-full object-cover"
                  width={800}
                  height={400}
                  loading="lazy"
                />
                <figcaption className="border-t-[3px] border-[var(--border-ink)] p-4">
                  <p className="font-display text-sm font-bold text-[var(--text-primary)]">
                    Bathroom refurb — Woodford
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-muted)]">
                    Rip-out, tanking, tiles, fit-off.
                  </p>
                </figcaption>
              </figure>
              <figure className="card overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/recent-works/leak.svg"
                  alt="Illustration: emergency leak repair in Notting Hill Gate"
                  className="h-44 w-full object-cover"
                  width={800}
                  height={400}
                  loading="lazy"
                />
                <figcaption className="border-t-[3px] border-[var(--border-ink)] p-4">
                  <p className="font-display text-sm font-bold text-[var(--text-primary)]">
                    Leak SOS — Notting Hill Gate
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-muted)]">
                    Isolate, repair, stop the mess.
                  </p>
                </figcaption>
              </figure>
              <figure className="card overflow-hidden sm:col-span-2 lg:col-span-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/recent-works/kitchen.svg"
                  alt="Illustration: kitchen refurbishment in Kensington"
                  className="h-44 w-full object-cover"
                  width={800}
                  height={400}
                  loading="lazy"
                />
                <figcaption className="border-t-[3px] border-[var(--border-ink)] p-4">
                  <p className="font-display text-sm font-bold text-[var(--text-primary)]">
                    Kitchen glow-up — Kensington
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--text-muted)]">
                    Units, sparks, pipes, finishes.
                  </p>
                </figcaption>
              </figure>
            </div>
          </section>
        </main>

        <footer className="mt-auto border-t-[3px] border-[var(--border-ink)] pt-6 text-xs font-semibold leading-relaxed text-[var(--text-muted)] sm:flex sm:items-start sm:justify-between sm:gap-6">
          <p>
            ©{" "}
            <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            London Property Maintenance.
          </p>
          <p className="mt-3 sm:mt-0">
            SOS?{" "}
            <a href={phoneHref} className="link link-muted text-sm">
              {phoneDisplay}
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
