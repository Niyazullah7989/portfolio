import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border-strong bg-white/60 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          © {year} {profile.name}
          <span className="mx-2 text-border-strong" aria-hidden>
            /
          </span>
          Built with intent
        </p>
        <a
          href="#top"
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent transition-colors hover:text-accent-warm"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
