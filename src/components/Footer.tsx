import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
        <a
          href="#top"
          className="text-sm font-medium text-accent transition-colors hover:text-accent-pink"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
