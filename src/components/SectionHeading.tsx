type Props = {
  title: string
  centered?: boolean
}

export function SectionHeading({ title, centered = true }: Props) {
  return (
    <div className={`mb-12 sm:mb-14 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-gradient font-display text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight">
        {title}
      </h2>
    </div>
  )
}
