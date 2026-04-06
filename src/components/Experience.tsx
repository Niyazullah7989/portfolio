import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  const primary = profile.experience[0]
  const companyShort =
    primary?.company.split('—')[0]?.trim() ?? 'Professional'

  return (
    <section
      id="experience"
      className="scroll-mt-28 border-t border-border px-4 py-28 sm:px-6 sm:py-36"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="04"
            eyebrow="Experience"
            title={`${companyShort} — sustained impact`}
            description="A single long arc: full-stack contribution, cloud validation, and automation that compounds."
          />
          <ol className="relative space-y-0 pl-0">
            {profile.experience.map((job) => (
              <li key={job.title + job.period} className="relative pb-4">
                <div
                  className="absolute bottom-0 left-[7px] top-3 w-px bg-gradient-to-b from-accent via-violet-400/60 to-transparent sm:left-[9px]"
                  aria-hidden
                />
                <div className="relative pl-10 sm:pl-12">
                  <span
                    className="absolute left-0 top-2 flex h-[11px] w-[11px] rounded-full border-[3px] border-white bg-accent shadow-[0_0_0_3px_rgba(79,70,229,0.25)] sm:top-2.5"
                    aria-hidden
                  />
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {job.period}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{job.company}</p>
                  <p className="mt-5 max-w-3xl text-[0.95rem] leading-[1.75] text-muted">
                    {job.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  )
}
