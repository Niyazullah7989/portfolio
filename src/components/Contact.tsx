import { profile } from '../data/profile'
import { ContactForm } from './ContactForm'
import { IconGithub, IconLinkedIn, IconMail, IconPhone, IconWhatsApp } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const whatsappMessage = encodeURIComponent(
  `Hi ${profile.name.split(' ')[0]}, I saw your portfolio and would like to connect.`,
)

const whatsappHref = `${profile.contact.whatsapp}?text=${whatsappMessage}`

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
      className="contact-section scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32"
    >
      <Reveal>
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Contact" />
          <p className="-mt-8 mb-12 text-center text-sm text-muted sm:mb-14">
            Send a message or reach out directly — open to full-time &amp; contract roles.
          </p>

          <div className="contact-split">
            <div className="contact-panel contact-panel--form">
              <h3 className="contact-panel__title font-display">Send a message</h3>
              <ContactForm />
            </div>

            <div className="contact-panel contact-panel--info">
              <h3 className="contact-panel__title font-display">Get in touch</h3>
              <p className="contact-panel__text">
                Open to full-time and contract roles — especially where Java/Spring, React, and
                disciplined QA intersect.
              </p>

              <ul className="contact-details">
                {profile.contact.emails.map((addr) => (
                  <li key={addr}>
                    <a href={`mailto:${addr}`} className="contact-details__link">
                      <span className="contact-details__icon">
                        <IconMail className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="contact-details__label font-mono">Email</span>
                        <span className="contact-details__value">{addr}</span>
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`tel:${profile.contact.phoneTel}`} className="contact-details__link">
                    <span className="contact-details__icon">
                      <IconPhone className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="contact-details__label font-mono">Phone</span>
                      <span className="contact-details__value">{profile.contact.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
              </ul>

              <ul className="contact-links">
                {links.map(({ label, href, icon: Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="contact-links__pill"
                    >
                      <Icon className="h-4 w-4 text-accent-cyan" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="contact-whatsapp"
              >
                <IconWhatsApp className="h-5 w-5 shrink-0" />
                <span>
                  <span className="contact-whatsapp__title">Chat on WhatsApp</span>
                  <span className="contact-whatsapp__sub font-mono">Quick reply · pre-filled hello</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
