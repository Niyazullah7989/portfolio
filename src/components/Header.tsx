import { useState } from 'react'
import { profile } from '../data/profile'
import { useScrolled } from '../hooks/useScrolled'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const scrolled = useScrolled(32)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 sm:px-6">
      <div
        className={`pointer-events-auto relative flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-2xl transition-[background-color,box-shadow,border-color] duration-500 sm:px-6 ${
          scrolled
            ? 'border-border-strong bg-surface/95 shadow-lg shadow-slate-900/5'
            : 'border-border bg-surface/80 shadow-sm'
        }`}
      >
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-tight text-ink transition-colors hover:text-accent"
        >
          {profile.name}
        </a>
        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:bg-surface-raised hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-xl bg-accent px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Hire
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-surface-raised text-ink lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h10"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-nav"
            className="absolute left-2 right-2 top-[calc(100%+8px)] rounded-2xl border border-border-strong bg-surface p-4 shadow-xl lg:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-xl px-4 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-muted hover:bg-surface-raised hover:text-ink"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-border pt-2">
                <a
                  href="#contact"
                  className="block rounded-xl bg-accent px-4 py-3 text-center font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
