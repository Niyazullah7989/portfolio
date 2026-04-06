import { lazy, Suspense } from 'react'
import { profile } from '../data/profile'
import { useClientMounted } from '../hooks/useClientMounted'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { IconArrowUpRight } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const Project3DScene = lazy(() =>
  import('./three/Project3DScene').then((m) => ({ default: m.Project3DScene })),
)

const topBar = [
  'from-amber-400 via-orange-500 to-rose-500',
  'from-sky-400 via-blue-500 to-indigo-600',
  'from-violet-400 via-fuchsia-500 to-pink-500',
]

export function Projects() {
  const mounted = useClientMounted()
  const reducedMotion = usePrefersReducedMotion()
  const show3D = mounted && !reducedMotion

  return (
    <section
      id="work"
      className="scroll-mt-28 border-t border-border bg-white/50 px-4 py-28 sm:px-6 sm:py-36"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="03"
            eyebrow="Selected work"
            title="Projects that balance build and proof"
            description="Each card has a dedicated 3D scene — auto-rotating models you can orbit with the pointer."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {profile.projects.map((project, i) => (
              <article
                key={project.title}
                className="card-glow group flex flex-col overflow-hidden rounded-3xl border border-border-strong bg-surface transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-accent/20"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-raised">
                  <div
                    className={`absolute inset-x-0 top-0 z-10 h-1.5 bg-gradient-to-r ${topBar[i % topBar.length]}`}
                    aria-hidden
                  />
                  {show3D ? (
                    <Suspense
                      fallback={
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          width={640}
                          height={400}
                          className="h-full w-full object-cover object-center"
                        />
                      }
                    >
                      <Project3DScene
                        visual={project.visual3d}
                        className="absolute inset-0 h-full w-full"
                      />
                    </Suspense>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
                  <span className="font-mono absolute bottom-3 left-4 z-20 inline-flex rounded-lg bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-800 shadow-sm backdrop-blur-sm">
                    Case {String(i + 1).padStart(2, '0')}
                  </span>
                  {show3D ? (
                    <span className="font-mono absolute right-3 top-9 z-20 rounded-md bg-indigo-600/90 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                      3D
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span className="rounded-lg border border-border bg-surface-raised px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-muted">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent transition-colors group-hover:text-accent-warm"
                  >
                    {project.label}
                    <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
