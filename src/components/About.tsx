import { profile } from '../data/profile'
import { IconGithub, IconLinkedIn } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32"
    >
      <Reveal>
        <div className="mx-auto max-w-4xl">
          <div className="about-social">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="about-social__link"
              aria-label="GitHub profile"
            >
              <IconGithub className="about-social__icon" />
              <span className="about-social__label font-mono">GitHub</span>
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="about-social__link"
              aria-label="LinkedIn profile"
            >
              <IconLinkedIn className="about-social__icon" />
              <span className="about-social__label font-mono">LinkedIn</span>
            </a>
          </div>

          <SectionHeading title="About Me" />

          <div className="about-card rounded-2xl p-8 sm:p-10">
            <div className="about-card__ribbon" aria-hidden />
            <div className="about-card__shine" aria-hidden />

            {profile.about.map((paragraph, i) => (
              <p
                key={i}
                className={`text-base leading-8 text-muted ${i > 0 ? 'mt-6' : ''}`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 border-t border-border pt-8">
              <h3 className="text-lg font-bold text-accent-cyan">Core Competencies</h3>
              <p className="mt-4 text-base leading-8 text-muted">
                {profile.coreCompetencies.join(' · ')}
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <h3 className="text-lg font-bold text-accent-cyan">Languages</h3>
              <p className="mt-4 text-base leading-8 text-muted">
                {profile.languages.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
