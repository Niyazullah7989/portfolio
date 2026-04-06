import { profile } from '../data/profile'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const cardTint = [
  'bg-indigo-50/80 border-indigo-100',
  'bg-amber-50/80 border-amber-100',
  'bg-teal-50/80 border-teal-100',
]

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-28 border-t border-border bg-white/40 px-4 py-28 sm:px-6 sm:py-36"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="05"
            eyebrow="Education"
            title="Credentials"
            description="Computer science foundation underpinning systems thinking, test design, and software delivery."
          />
          <ul className="grid gap-5 sm:grid-cols-3">
            {profile.education.map((item, i) => (
              <li
                key={item.title}
                className={`rounded-3xl border p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-8 ${cardTint[i % cardTint.length]}`}
              >
                <p className="font-display text-lg font-bold leading-snug text-ink">
                  {item.title}
                </p>
                <p className="mt-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  {item.subtitle}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
