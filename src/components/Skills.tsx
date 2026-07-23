import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const accents = [
  'skill-card--cyan',
  'skill-card--violet',
  'skill-card--pink',
  'skill-card--amber',
] as const

const shortLabels = ['PL', 'AU', 'QA', 'API', 'BE', 'FE', 'DB', 'Ops']

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  )
}

function IconAutomation({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  )
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function IconApi({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

function IconServer({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <circle cx="7" cy="7" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconLayout({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path strokeLinecap="round" d="M3 9h18M9 9v12" />
    </svg>
  )
}

function IconDatabase({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  )
}

function IconDevOps({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  )
}

const categoryIcons = [
  IconCode,
  IconAutomation,
  IconCheck,
  IconApi,
  IconServer,
  IconLayout,
  IconDatabase,
  IconDevOps,
]

export function Skills() {
  return (
    <section
      id="skills"
      className="skills-section scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Skills" />
          <p className="-mt-8 mb-12 text-center text-sm text-muted sm:mb-14">
            Aligned skill stacks — hover any box to pop it forward.
          </p>

          <div className="skills-grid">
            {profile.skillGroups.map((group, index) => {
              const Icon = categoryIcons[index % categoryIcons.length]
              const accent = accents[index % accents.length]
              return (
                <article
                  key={group.title}
                  className={`skill-card ${accent} ${index < 2 ? 'skill-card--wide' : ''}`}
                >
                  <div className="skill-card__ribbon" aria-hidden />
                  <div className="skill-card__glow" aria-hidden />
                  <span className="skill-card__watermark font-display" aria-hidden>
                    {shortLabels[index]}
                  </span>

                  <header className="skill-card__head">
                    <div className="skill-card__icon-wrap">
                      <Icon className="skill-card__icon" />
                      <span className="skill-card__step font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="skill-card__intro">
                      <h3 className="skill-card__title font-display">{group.title}</h3>
                      <p className="skill-card__count font-mono">
                        {group.items.length} tools
                      </p>
                    </div>
                  </header>

                  <div className="skill-card__divider" aria-hidden />

                  <ul className="skill-card__tags">
                    {group.items.map((skill) => (
                      <li key={skill} className="skill-card__tag-item">
                        <span className="skill-tag">{skill}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="skill-card__shine" aria-hidden />
                </article>
              )
            })}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
