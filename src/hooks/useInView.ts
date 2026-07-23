import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.28) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true)
      },
      { threshold, rootMargin: '0px 0px 8% 0px' },
    )

    observer.observe(el)

    const checkVisible = () => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08) {
        setInView(true)
      }
    }

    checkVisible()
    requestAnimationFrame(checkVisible)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
