import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const accents = ['edu-card--cyan', 'edu-card--violet', 'edu-card--pink'] as const

function IconGraduation({ className }: { className?: string }) {
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
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    </svg>
  )
}

export function Education() {
  return (
    <section
      id="education"
      className="education-section scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32"
    >
      <Reveal>
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="Education" />
          <p className="-mt-8 mb-12 text-center text-sm text-muted sm:mb-14">
            Academic milestones — hover a card to pop it forward.
          </p>

          <div className="edu-timeline">
            <div className="edu-timeline__line" aria-hidden />

            <ul className="edu-grid">
              {profile.education.map((item, index) => (
                <li
                  key={item.title}
                  className={`edu-card group ${accents[index % accents.length]} ${index === 0 ? 'edu-card--featured' : ''}`}
                >
                  <div className="edu-card__ribbon" aria-hidden />
                  <span className="edu-card__year font-display" aria-hidden>
                    {item.year}
                  </span>
                  <div className="edu-card__icon-wrap">
                    <IconGraduation className="edu-card__icon" />
                  </div>
                  <p className="edu-card__step font-mono">
                    {String(profile.education.length - index).padStart(2, '0')}
                  </p>
                  <h3 className="edu-card__title font-display">{item.title}</h3>
                  <p className="edu-card__subtitle font-mono">{item.subtitle}</p>
                  <span className="edu-card__shine" aria-hidden />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
