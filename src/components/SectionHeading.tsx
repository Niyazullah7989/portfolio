type Props = {
  index?: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ index, eyebrow, title, description }: Props) {
  return (
    <div className="mb-12 max-w-3xl sm:mb-16">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {index ? (
          <span className="font-mono text-xs font-medium tabular-nums text-accent">
            {index}
          </span>
        ) : null}
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-display text-[clamp(1.85rem,4.2vw,2.85rem)] font-bold leading-[1.1] tracking-tight text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
      <div
        className="mt-10 h-px w-20 bg-gradient-to-r from-accent/70 to-transparent sm:w-28"
        aria-hidden
      />
    </div>
  )
}
