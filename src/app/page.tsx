export default function Home() {
  const phoneDisplay = "+44 7473 711666";
  const phoneHref = "tel:+447473711666";
  const whatsappHref = "https://wa.me/447473711666";
  const checkatradeHref = "https://www.checkatrade.com/";
  const googleReviewsHref = "https://www.google.com/search?q=google+reviews";

  return (
    <div className="page-shell">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">
        <header
          className="mb-10 flex flex-col gap-6 border-b pb-6 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <div className="min-w-0">
            <p className="section-label">London Property Specialists</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
              Maintenance, repairs, refurbishments & construction — fully insured
              trades for London properties.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:items-end sm:text-right">
            <a href={phoneHref} className="link no-underline text-[var(--text-primary)]">
              <span className="text-[var(--text-muted)]">Call us</span>{" "}
              <span className="whitespace-nowrap">{phoneDisplay}</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-5 py-2.5 sm:self-end"
            >
              WhatsApp for a Quick Quote
              <span className="sr-only"> Opens WhatsApp in a new tab.</span>
            </a>
          </div>
        </header>

        <main
          id="main-content"
          className="flex flex-1 flex-col gap-14 pb-10 sm:gap-20"
          tabIndex={-1}
        >
          <section
            aria-labelledby="hero-heading"
            className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-start md:gap-12"
          >
            <div>
              <h1
                id="hero-heading"
                className="text-balance text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-[2.65rem] md:leading-[1.1]"
              >
                <span className="text-[var(--accent)]">London trusted experts</span>{" "}
                in property maintenance, repairs & construction — 24/7
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                From urgent repairs to full refurbishment — done right, first
                time. Fully insured trades people for landlords, homeowners and
                managing agents.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={phoneHref} className="btn btn-primary">
                  Call now — 24/7 response
                </a>
                <p className="max-w-[14rem] text-sm leading-snug text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text-secondary)]">
                    10+ years experience
                  </span>
                  <span className="block">Fast response across London.</span>
                </p>
              </div>

              <div
                className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm"
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

              <div className="card-soft mt-8 p-5">
                <p className="section-label">Certifications</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <div className="flex items-center gap-3 rounded-xl border px-3 py-2.5" style={{ borderColor: "var(--border-subtle)", background: "var(--surface-2)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/certs/gas-safe.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-auto shrink-0"
                    />
                    <span className="text-sm font-semibold text-[var(--text-primary)]">
                      Gas Safe registered
                    </span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border px-3 py-2.5" style={{ borderColor: "var(--border-subtle)", background: "var(--surface-2)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/certs/niceic.svg"
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-auto shrink-0"
                    />
                    <span className="text-sm font-semibold text-[var(--text-primary)]">
                      NICEIC approved
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <aside
              className="card p-6 md:p-7"
              style={{
                background:
                  "linear-gradient(165deg, rgba(232,165,75,0.12) 0%, rgba(28,25,22,0.92) 42%, var(--surface-1) 100%)",
              }}
              aria-labelledby="services-heading"
            >
              <h2 id="services-heading" className="section-label">
                Services
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                All your property needs handled by one reliable team.
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <div>
                    <a href="/property-maintenance-contracts" className="link">
                      Property maintenance
                    </a>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                      Planned and reactive maintenance for flats, houses and
                      portfolios.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <div>
                    <a href="/emergency-repairs-london" className="link">
                      Repairs (emergency & same-day)
                    </a>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                      Joinery, plumbing, electrical and emergency call-outs.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <div>
                    <a href="/kitchen-refurbishments" className="link">
                      Refurbishment (kitchens & bathrooms)
                    </a>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                      Kitchens, bathrooms and full property refreshes.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">
                      Construction
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                      Extensions, loft conversions and structural works.
                    </p>
                  </div>
                </li>
              </ul>
            </aside>
          </section>

          <section
            aria-labelledby="why-heading"
            className="grid gap-8 border-y py-10 sm:grid-cols-3 sm:gap-10 sm:py-12"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <div className="sm:col-span-1">
              <h2 id="why-heading" className="section-label">
                Why work with us
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                We keep your properties in top condition and your tenants happy.
              </p>
            </div>
            <div className="grid gap-8 sm:col-span-2 sm:grid-cols-2 sm:gap-10">
              <div className="card-soft p-5">
                <p className="text-3xl font-semibold tracking-tight text-[var(--accent)]">
                  10+
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
                  Years experience
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  Delivering maintenance, refurbishments and construction
                  projects across London.
                </p>
              </div>
              <div className="card-soft p-5">
                <p className="text-3xl font-semibold tracking-tight text-[var(--accent)]">
                  Trusted
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
                  By landlords & homeowners
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  Working with private landlords, managing agents and
                  owner-occupiers who need a dependable partner.
                </p>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="areas-heading"
            className="grid gap-8 sm:grid-cols-[minmax(0,1.5fr)_minmax(0,2fr)] sm:gap-12"
          >
            <div>
              <h2 id="areas-heading" className="section-label">
                Areas we cover
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Rapid response across London. If you&apos;re just outside these
                areas, get in touch and we&apos;ll see if we can help.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-soft p-5">
                <p className="section-label text-[var(--text-muted)]">
                  Regions
                </p>
                <p className="mt-3 text-lg font-semibold text-[var(--text-primary)]">
                  London (north, west & central)
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  North London, West London, Central London.
                </p>
              </div>
              <div className="card-soft p-5">
                <p className="section-label text-[var(--text-muted)]">
                  Local areas
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  Notting Hill Gate, Westminster, Hyde Park, Chelsea, Kensington,
                  Islington, Hampstead.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="recent-heading" className="grid gap-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 id="recent-heading" className="section-label">
                  Recent works
                </h2>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">
                  A few recent jobs completed across London.
                </p>
              </div>
              <p className="text-xs text-[var(--text-subtle)]">
                Placeholder images — replace with your own project photos.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                <figcaption className="border-t p-4" style={{ borderColor: "var(--border-subtle)" }}>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Bathroom refurbishment — Woodford
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Full rip-out, waterproofing, tiling and final fit-off.
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
                <figcaption className="border-t p-4" style={{ borderColor: "var(--border-subtle)" }}>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Emergency leak repair — Notting Hill Gate
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Rapid isolation, repair, and damage prevention.
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
                <figcaption className="border-t p-4" style={{ borderColor: "var(--border-subtle)" }}>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Kitchen refurbishment — Kensington
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    New units, electrics, plumbing, finishes and snagging.
                  </p>
                </figcaption>
              </figure>
            </div>
          </section>
        </main>

        <footer
          className="mt-auto border-t pt-6 text-xs leading-relaxed text-[var(--text-muted)] sm:flex sm:items-start sm:justify-between sm:gap-6"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p>
            ©{" "}
            <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            London Property Maintenance.
          </p>
          <p className="mt-3 sm:mt-0">
            Need urgent help? Call{" "}
            <a href={phoneHref} className="link link-muted text-sm">
              {phoneDisplay}
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
