import { profile } from '../data/profile'
import { IconGithub, IconLinkedIn, IconMail, IconPhone } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const links = [
  {
    label: 'Email',
    href: `mailto:${profile.contact.email}`,
    icon: IconMail,
    external: false,
  },
  {
    label: 'Phone',
    href: `tel:${profile.contact.phoneTel}`,
    icon: IconPhone,
    external: false,
  },
  {
    label: 'WhatsApp',
    href: profile.contact.whatsapp,
    icon: IconPhone,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: profile.contact.linkedin,
    icon: IconLinkedIn,
    external: true,
  },
  {
    label: 'GitHub',
    href: profile.contact.github,
    icon: IconGithub,
    external: true,
  },
] as const

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-border px-4 py-28 sm:px-6 sm:py-36"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="06"
            eyebrow="Contact"
            title="Let’s talk about your next release"
            description="Full-time or contract — especially where Java/Spring, React, and serious testing discipline intersect."
          />
          <div className="card-glow relative overflow-hidden rounded-3xl border border-border-strong bg-gradient-to-br from-white via-indigo-50/40 to-pink-50/30 p-8 sm:p-12">
            <div
              className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-mist blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-blush blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-3 lg:max-w-xl">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="font-display break-all text-2xl font-bold tracking-tight text-ink transition-colors hover:text-accent sm:break-normal sm:text-3xl"
                >
                  {profile.contact.email}
                </a>
                <a
                  href={`tel:${profile.contact.phoneTel}`}
                  className="font-display w-fit text-xl font-bold tracking-tight text-ink transition-colors hover:text-accent sm:text-2xl"
                >
                  {profile.contact.phoneDisplay}
                </a>
              </div>
              <ul className="flex flex-wrap gap-3">
                {links.map(({ label, href, icon: Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                      className="inline-flex items-center gap-2.5 rounded-2xl border border-border-strong bg-white/90 px-5 py-3.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted shadow-sm transition-[border-color,color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:text-ink hover:shadow-md"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
