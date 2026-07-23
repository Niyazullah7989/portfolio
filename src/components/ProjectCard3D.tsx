import { useState } from 'react'
import { Project3DScene, type ProjectVisual3D } from './three/Project3DScene'

type Props = {
  visual: ProjectVisual3D
  reducedMotion: boolean
  inView: boolean
  compact?: boolean
}

export function ProjectCard3D({ visual, reducedMotion, inView, compact = false }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`project-scene ${inView ? 'project-scene--in-view' : ''} ${hovered ? 'project-scene--hover' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Project3DScene
        visual={visual}
        hovered={hovered}
        inView={inView}
        reducedMotion={reducedMotion}
        compact={compact}
      />
      {!compact ? (
        <span className="project-scene__hint font-mono">Hover to spin · Drag to orbit</span>
      ) : null}
    </div>
  )
}
