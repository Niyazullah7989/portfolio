import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-t border-border bg-white/30 px-4 py-28 sm:px-6 sm:py-36"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="01"
            eyebrow="Profile"
            title="Engineering and verification, one thread"
            description="From Spring Boot services to React surfaces — with automation and API rigor so teams ship with confidence."
          />
          <div
            className={
              profile.yearsExperience
                ? 'grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16 lg:items-start'
                : ''
            }
          >
            {profile.yearsExperience ? (
              <div className="card-glow relative overflow-hidden rounded-3xl border border-border-strong bg-surface p-9 sm:p-10">
                <div
                  className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-400"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-mist blur-2xl"
                  aria-hidden
                />
                <p className="font-display text-6xl font-extrabold leading-none tracking-tight text-ink sm:text-7xl">
                  {profile.yearsExperience.value}
                  <span className="text-accent">{profile.yearsExperience.suffix}</span>
                </p>
                <p className="mt-5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {profile.yearsExperience.caption}
                </p>
              </div>
            ) : null}
            <div
              className={
                profile.yearsExperience
                  ? 'space-y-7 text-[1.05rem] leading-[1.75] text-muted'
                  : 'max-w-3xl space-y-7 text-[1.05rem] leading-[1.75] text-muted'
              }
            >
              {profile.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
