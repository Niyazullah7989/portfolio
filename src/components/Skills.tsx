import { lazy, Suspense } from 'react'
import { profile } from '../data/profile'
import { useClientMounted } from '../hooks/useClientMounted'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const Skills3DScene = lazy(() =>
  import('./three/Skills3DScene').then((m) => ({ default: m.Skills3DScene })),
)

const groupTint = [
  'hover:border-indigo-200 hover:bg-indigo-50/50',
  'hover:border-pink-200 hover:bg-pink-50/50',
  'hover:border-amber-200 hover:bg-amber-50/50',
  'hover:border-teal-200 hover:bg-teal-50/50',
  'hover:border-sky-200 hover:bg-sky-50/50',
  'hover:border-violet-200 hover:bg-violet-50/50',
  'hover:border-orange-200 hover:bg-orange-50/50',
  'hover:border-emerald-200 hover:bg-emerald-50/50',
]

export function Skills() {
  const mounted = useClientMounted()
  const reducedMotion = usePrefersReducedMotion()
  const show3D = mounted && !reducedMotion

  return (
    <section
      id="skills"
      className="scroll-mt-28 border-t border-border px-4 py-28 sm:px-6 sm:py-36"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="02"
            eyebrow="Capabilities"
            title="Stack, organized by intent"
            description="Languages through delivery — with an interactive 3D view of the tools landscape (drag to orbit)."
          />
          <div className="mb-10 overflow-hidden rounded-3xl border border-border-strong bg-slate-50 shadow-md shadow-slate-900/5">
            {show3D ? (
              <Suspense
                fallback={
                  <img
                    src={profile.skillsBanner}
                    alt=""
                    width={1200}
                    height={200}
                    className="h-[min(300px,58vw)] min-h-[240px] w-full object-cover sm:min-h-[280px] md:h-[320px]"
                    role="presentation"
                  />
                }
              >
                <Skills3DScene className="h-[min(300px,58vw)] w-full min-h-[240px] sm:min-h-[280px] md:h-[320px]" />
              </Suspense>
            ) : (
              <img
                src={profile.skillsBanner}
                alt=""
                width={1200}
                height={200}
                className="h-auto w-full object-cover"
                loading="lazy"
                decoding="async"
                role="presentation"
              />
            )}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {profile.skillGroups.map((group, gi) => (
              <div
                key={group.title}
                className={`group flex flex-col rounded-2xl border border-border-strong bg-surface p-6 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-0.5 ${groupTint[gi % groupTint.length]}`}
              >
                <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <span className="inline-block rounded-lg border border-border bg-white px-2.5 py-1 text-[13px] text-ink/95 shadow-sm transition-colors group-hover:border-border-strong">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
