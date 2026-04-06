import { profile } from '../data/profile'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center px-4 pb-20 pt-36 sm:px-6 sm:pb-28 sm:pt-40"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-1/4 top-0 h-[min(85vw,520px)] w-[min(85vw,520px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_62%)] blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 h-[min(75vw,440px)] w-[min(75vw,440px)] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.14),transparent_58%)] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[min(60vw,360px)] w-[min(60vw,360px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.12),transparent_55%)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              <span className="text-accent">{profile.location}</span>
              <span className="hidden text-border-strong sm:inline" aria-hidden>
                ·
              </span>
              <span>Portfolio</span>
            </div>
            {profile.availability ? (
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                {profile.availability}
              </span>
            ) : null}
          </div>

          <h1 className="text-gradient mt-8 font-display text-[clamp(2.35rem,6.5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-xl font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-[1.125rem] sm:leading-[1.75]">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#work"
              className="card-glow inline-flex items-center justify-center rounded-2xl bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-indigo-500/25 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/35"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-accent-teal/40 bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-accent-teal transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-accent-teal"
            >
              Contact
            </a>
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center justify-center rounded-2xl border border-border-strong bg-surface-raised px-7 py-3.5 text-sm font-semibold tracking-wide text-ink transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Download CV
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[min(100%,420px)] lg:max-w-none lg:justify-self-end">
          <div
            className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 opacity-80 blur-2xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 opacity-70 blur-2xl"
            aria-hidden
          />
          <div className="card-glow relative z-[1] overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-4 ring-white">
            <img
              src={profile.heroSystemsImage}
              alt={profile.heroSystemsAlt}
              width={480}
              height={560}
              className="w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
            <div className="absolute bottom-4 right-4 w-[min(32%,7.5rem)] sm:bottom-5 sm:right-5 sm:w-[min(30%,8.5rem)]">
              <img
                src={profile.portrait}
                alt={profile.portraitAlt}
                width={400}
                height={480}
                className="rounded-2xl border-2 border-white object-cover shadow-xl ring-2 ring-indigo-100"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
