import { profile } from '../data/profile'
import { useInView } from '../hooks/useInView'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { IconArrowUpRight, IconGithub } from './Icons'
import { ProjectCard3D } from './ProjectCard3D'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const accents = ['project-card--cyan', 'project-card--amber', 'project-card--violet', 'project-card--pink']

function ProjectCard({
  project,
  index,
  reducedMotion,
  featured = false,
}: {
  project: (typeof profile.projects)[number]
  index: number
  reducedMotion: boolean
  featured?: boolean
}) {
  const { ref, inView } = useInView<HTMLElement>(0.12)
  const accent = accents[index % accents.length]

  return (
    <article
      ref={ref}
      className={`project-card ${accent} ${featured ? 'project-card--featured project-card--horizontal' : 'project-card--compact'} ${inView ? 'project-card--scroll-in' : ''} group`}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="project-card__ribbon" aria-hidden />
      <div className="project-card__shine" aria-hidden />

      <div className="project-card__inner">
        <div className="project-card__media">
          <ProjectCard3D
            visual={project.visual3d}
            reducedMotion={reducedMotion}
            inView={inView}
            compact={!featured}
          />
          <div className="project-card__overlay project-card__overlay--3d" aria-hidden />
          <span className="project-card__case font-mono">
            Case {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="project-card__body">
          <div className="project-card__head">
            <h3 className="project-card__title font-display">{project.title}</h3>
            {featured ? (
              <span className="project-card__badge font-mono">Featured</span>
            ) : null}
          </div>

          <p className="project-card__desc">{project.description}</p>

          <ul className="project-card__tags">
            {project.tags.map((tag) => (
              <li key={tag}>
                <span className="project-tag">{tag}</span>
              </li>
            ))}
          </ul>

          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="project-card__cta"
          >
            <IconGithub className="project-card__cta-icon" />
            <span>{project.label}</span>
            <IconArrowUpRight className="project-card__cta-arrow" />
          </a>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const reducedMotion = usePrefersReducedMotion()
  const [featured, ...rest] = profile.projects

  return (
    <section
      id="projects"
      className="projects-section scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32"
    >
      <Reveal>
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="Projects" />
          <p className="projects-section__lead">
            Featured build up top — compact 3D cards below. Hover to lift, spin, and glow.
          </p>

          <div className="projects-bento">
            <ProjectCard
              project={featured}
              index={0}
              reducedMotion={reducedMotion}
              featured
            />

            <ul className="projects-bento__row">
              {rest.map((project, i) => (
                <li key={project.title}>
                  <ProjectCard
                    project={project}
                    index={i + 1}
                    reducedMotion={reducedMotion}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
