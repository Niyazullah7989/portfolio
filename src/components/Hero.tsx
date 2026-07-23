import { profile } from '../data/profile'
import { IconDownload, IconMail, IconMapPin, IconPhone } from './Icons'

export function Hero() {
  const statSkills = profile.skillGroups.reduce((n, g) => n + g.items.length, 0)

  return (
    <section
      id="top"
      className="hero-section relative flex min-h-svh flex-col items-center justify-center px-4 pb-20 pt-28 text-center sm:px-6 sm:pb-24 sm:pt-32"
    >
      <div className="hero-panel mx-auto w-full max-w-4xl">
        <div className="hero-panel__glow" aria-hidden />
        <p className="hero-panel__eyebrow font-mono">Full Stack · QA · Cloud</p>

        <h1 className="hero-panel__name text-gradient-name font-display text-[clamp(2.35rem,7.5vw,4.25rem)] font-extrabold uppercase leading-[1.05] tracking-tight">
          {profile.name}
        </h1>

        <div className="hero-roles mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {profile.roleTitles.map((title) => (
            <span key={title} className="hero-role-pill font-mono">
              {title}
            </span>
          ))}
        </div>

        <p className="hero-panel__summary mx-auto mt-7 max-w-3xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
          {profile.heroSummary}
        </p>

        <ul className="hero-stats mt-8">
          <li className="hero-stat">
            <span className="hero-stat__value font-display">
              {profile.yearsExperience.value}
              {profile.yearsExperience.suffix}
            </span>
            <span className="hero-stat__label font-mono">Years Exp.</span>
          </li>
          <li className="hero-stat">
            <span className="hero-stat__value font-display">{statSkills}+</span>
            <span className="hero-stat__label font-mono">Skills</span>
          </li>
        </ul>

        <ul className="hero-contact mt-8 flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
          <li className="min-w-0">
            <span className="hero-contact-chip">
              <IconMapPin className="h-4 w-4 shrink-0 text-accent-cyan" />
              <span className="hero-contact-chip__text">{profile.location}</span>
            </span>
          </li>
          <li className="min-w-0">
            <a
              href={`mailto:${profile.contact.email}`}
              className="hero-contact-chip hero-contact-chip--link"
            >
              <IconMail className="h-4 w-4 shrink-0 text-accent-cyan" />
              <span className="hero-contact-chip__text">{profile.contact.email}</span>
            </a>
          </li>
          <li className="min-w-0">
            <a
              href={`tel:${profile.contact.phoneTel}`}
              className="hero-contact-chip hero-contact-chip--link"
            >
              <IconPhone className="h-4 w-4 shrink-0 text-accent-cyan" />
              <span className="hero-contact-chip__text">{profile.contact.phoneDisplay}</span>
            </a>
          </li>
        </ul>

        <div className="hero-actions mt-10 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <a
            href="#contact"
            className="btn-gradient hero-btn hero-btn--primary inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white sm:w-auto"
          >
            Contact Me
          </a>
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              download
              className="hero-btn hero-btn--outline inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-accent/30 bg-surface/80 px-8 py-3.5 text-sm font-semibold text-accent backdrop-blur-sm sm:w-auto"
            >
              <IconDownload className="h-4 w-4" />
              Download Resume
            </a>
          ) : null}
        </div>

        {profile.availability ? (
          <p className="availability-badge hero-availability mt-8 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full px-4 py-1.5 text-center text-xs font-semibold uppercase tracking-wider">
            <span className="hero-availability__dot" aria-hidden />
            {profile.availability}
          </p>
        ) : null}
      </div>

      <a
        href="#about"
        className="hero-scroll-hint font-mono"
        aria-label="Scroll to About section"
      >
        <span className="hero-scroll-hint__line" aria-hidden />
        Scroll
      </a>
    </section>
  )
}
