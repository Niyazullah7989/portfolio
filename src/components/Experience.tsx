import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const accents = ['exp-card--cyan', 'exp-card--violet'] as const

function IconBriefcase({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 20V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M12 7V4" />
    </svg>
  )
}

function ExperienceCard({
  job,
  index,
}: {
  job: (typeof profile.experience)[number]
  index: number
}) {
  const { ref, inView } = useInView<HTMLLIElement>(0.18)
  const accent = accents[index % accents.length]

  return (
    <li
      ref={ref}
      className={`exp-card group ${accent} ${index === 0 ? 'exp-card--featured' : ''} ${inView ? 'exp-card--scroll-in' : ''}`}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="exp-card__ribbon" aria-hidden />
      <div className="exp-card__shine" aria-hidden />
      <span className="exp-card__dot" aria-hidden />

      <div className="exp-card__header">
        <div className="exp-card__icon-wrap">
          <IconBriefcase className="exp-card__icon" />
        </div>
        <div>
          <p className="exp-card__period font-mono">{job.period}</p>
          <h3 className="exp-card__title font-display">{job.title}</h3>
          <p className="exp-card__company">{job.company}</p>
        </div>
      </div>

      <ul className="exp-card__points">
        {job.points.map((point) => (
          <li key={point} className="exp-card__point">
            <span className="exp-card__bullet" aria-hidden />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </li>
  )
}

export function Experience() {
  return (
    <section
      id="experience"
      className="experience-section scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32"
    >
      <Reveal>
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Experience" />
          <p className="-mt-8 mb-12 text-center text-sm text-muted sm:mb-14">
            Scroll or hover a role — cards lift forward with a soft glow.
          </p>

          <div className="exp-timeline">
            <div className="exp-timeline__line" aria-hidden />
            <ol className="exp-list">
              {profile.experience.map((job, index) => (
                <ExperienceCard key={job.title + job.period} job={job} index={index} />
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
