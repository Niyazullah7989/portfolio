import { useRef, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Html, Line, OrbitControls, RoundedBox } from '@react-three/drei'
import type { Group } from 'three'

export type ProjectVisual3D = 'ecommerce' | 'cloud' | 'ai' | 'website'

type SceneProps = {
  hovered: boolean
  inView: boolean
  reducedMotion: boolean
}

function SceneMotion({
  children,
  hovered,
  inView,
  reducedMotion,
  baseSpin = 0.32,
}: SceneProps & { children: ReactNode; baseSpin?: number }) {
  const ref = useRef<Group>(null)
  const reveal = useRef(inView ? 1 : 0)
  const spin = useRef(1)

  useFrame((_, dt) => {
    const targetReveal = inView ? 1 : 0.85
    reveal.current += (targetReveal - reveal.current) * dt * 4.5

    const targetSpin = reducedMotion ? 0.4 : hovered ? 3.2 : 1
    spin.current += (targetSpin - spin.current) * dt * 7

    if (!ref.current) return
    const scale = 0.92 + reveal.current * 0.28
    ref.current.scale.setScalar(scale)
    ref.current.rotation.y += dt * baseSpin * spin.current * Math.max(reveal.current, 0.5)
    ref.current.position.y = -0.12 + reveal.current * 0.12
  })

  return <group ref={ref}>{children}</group>
}

function TechLogoBadge({
  label,
  color,
  orbitRadius,
  orbitSpeed,
  phase,
  hovered,
  reducedMotion,
}: {
  label: string
  color: string
  orbitRadius: number
  orbitSpeed: number
  phase: number
  hovered: boolean
  reducedMotion: boolean
}) {
  const ref = useRef<Group>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return
    const boost = reducedMotion ? 0.5 : hovered ? 1.75 : 1
    const t = clock.elapsedTime * orbitSpeed * boost + phase
    ref.current.position.set(
      Math.cos(t) * orbitRadius,
      0.42 + Math.sin(t * 1.8) * 0.1,
      Math.sin(t) * orbitRadius,
    )
    ref.current.rotation.y = -t
  })

  return (
    <group ref={ref}>
      <RoundedBox args={[0.62, 0.62, 0.12]} radius={0.12} castShadow>
        <meshStandardMaterial color={color} metalness={0.45} roughness={0.28} />
      </RoundedBox>
      <Html center transform distanceFactor={2.4} style={{ pointerEvents: 'none' }}>
        <span className="project-tech-label">{label}</span>
      </Html>
    </group>
  )
}

function WebsiteBuild({ hovered, inView, reducedMotion }: SceneProps) {
  const props = { hovered, inView, reducedMotion }
  return (
    <SceneMotion {...props} baseSpin={0.28}>
      <Float speed={1.4} floatIntensity={0.4} rotationIntensity={0.15}>
        <group position={[0.35, 0, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.85, 1.15, 0.07]} />
            <meshStandardMaterial color="#f8fafc" metalness={0.2} roughness={0.35} />
          </mesh>
          <mesh position={[0, 0.62, 0.04]} castShadow>
            <boxGeometry args={[1.85, 0.14, 0.08]} />
            <meshStandardMaterial color="#06b6d4" metalness={0.35} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.02, 0.04]} castShadow>
            <boxGeometry args={[1.45, 0.72, 0.03]} />
            <meshStandardMaterial color="#e0f2fe" metalness={0.15} roughness={0.4} />
          </mesh>
        </group>
        <group position={[-1.05, -0.05, 0.15]} rotation={[0, 0.35, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.32, 0.58, 0.05]} />
            <meshStandardMaterial color="#1e293b" metalness={0.55} roughness={0.3} />
          </mesh>
        </group>
      </Float>
      <TechLogoBadge label="R" color="#0891b2" orbitRadius={1.35} orbitSpeed={0.65} phase={0} {...props} />
    </SceneMotion>
  )
}

function EcommerceBuild({ hovered, inView, reducedMotion }: SceneProps) {
  const props = { hovered, inView, reducedMotion }
  return (
    <SceneMotion {...props} baseSpin={0.38}>
      <Float speed={1.55} floatIntensity={0.45} rotationIntensity={0.2}>
        <mesh position={[0, -0.12, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.05, 0.62, 0.75]} />
          <meshStandardMaterial color="#fb923c" metalness={0.38} roughness={0.42} />
        </mesh>
        <mesh position={[0, 0.38, -0.05]} castShadow>
          <boxGeometry args={[0.62, 0.35, 0.55]} />
          <meshStandardMaterial color="#f97316" metalness={0.42} roughness={0.36} />
        </mesh>
      </Float>
      <TechLogoBadge label="SB" color="#16a34a" orbitRadius={1.3} orbitSpeed={0.7} phase={0.4} {...props} />
    </SceneMotion>
  )
}

function CloudBuild({ hovered, inView, reducedMotion }: SceneProps) {
  const props = { hovered, inView, reducedMotion }
  const packet = useRef<Group>(null)
  useFrame(({ clock }) => {
    if (!packet.current || reducedMotion) return
    const t = clock.elapsedTime * (hovered ? 1.4 : 0.85)
    packet.current.position.x = Math.sin(t) * 0.85
    packet.current.position.y = 0.15 + Math.sin(t * 2) * 0.08
  })

  return (
    <SceneMotion {...props} baseSpin={0.24}>
      <Float speed={1.3} floatIntensity={0.42} rotationIntensity={0.12}>
        {[-0.55, 0, 0.55].map((x, i) => (
          <mesh key={x} position={[x, -0.05 + i * 0.05, 0]} castShadow>
            <boxGeometry args={[0.42, 0.85 + i * 0.08, 0.38]} />
            <meshStandardMaterial color={i === 1 ? '#38bdf8' : '#7dd3fc'} metalness={0.25} roughness={0.32} />
          </mesh>
        ))}
        <Line points={[[-0.55, 0.2, 0], [0, 0.25, 0], [0.55, 0.2, 0]]} color="#38bdf8" lineWidth={1.5} />
      </Float>
      <group ref={packet}>
        <mesh castShadow>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#bae6fd" emissive="#38bdf8" emissiveIntensity={0.45} />
        </mesh>
      </group>
      <TechLogoBadge label="AWS" color="#f59e0b" orbitRadius={1.38} orbitSpeed={0.58} phase={0.8} {...props} />
    </SceneMotion>
  )
}

function AIBuild({ hovered, inView, reducedMotion }: SceneProps) {
  const props = { hovered, inView, reducedMotion }
  return (
    <SceneMotion {...props} baseSpin={0.3}>
      <Float speed={1.85} floatIntensity={0.5} rotationIntensity={0.28}>
        <mesh castShadow>
          <torusKnotGeometry args={[0.48, 0.14, 100, 20]} />
          <meshStandardMaterial color="#7c3aed" metalness={0.48} roughness={0.22} />
        </mesh>
      </Float>
      <TechLogoBadge label="AI" color="#7c3aed" orbitRadius={1.32} orbitSpeed={0.72} phase={0.2} {...props} />
    </SceneMotion>
  )
}

function ProjectModel({
  visual,
  hovered,
  inView,
  reducedMotion,
}: {
  visual: ProjectVisual3D
  hovered: boolean
  inView: boolean
  reducedMotion: boolean
}) {
  const props = { hovered, inView, reducedMotion }
  switch (visual) {
    case 'ecommerce':
      return <EcommerceBuild {...props} />
    case 'cloud':
      return <CloudBuild {...props} />
    case 'ai':
      return <AIBuild {...props} />
    case 'website':
      return <WebsiteBuild {...props} />
    default:
      return <EcommerceBuild {...props} />
  }
}

const sceneBg: Record<ProjectVisual3D, string> = {
  website: '#ecfeff',
  ecommerce: '#fff7ed',
  cloud: '#f0f9ff',
  ai: '#faf5ff',
}

function SceneControls({ hovered, inView, reducedMotion }: SceneProps) {
  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      autoRotate={inView && !reducedMotion}
      autoRotateSpeed={hovered ? 3.5 : 1.2}
      maxPolarAngle={Math.PI / 2.05}
      minPolarAngle={Math.PI / 5}
    />
  )
}

export function Project3DScene({
  visual,
  hovered = false,
  inView = true,
  reducedMotion = false,
  compact = false,
}: {
  visual: ProjectVisual3D
  hovered?: boolean
  inView?: boolean
  reducedMotion?: boolean
  compact?: boolean
}) {
  return (
    <Canvas
      className="project-scene__canvas"
      shadows
      dpr={compact ? [1, 1.5] : [1, 2]}
      frameloop="always"
      style={{ width: '100%', height: '100%', display: 'block' }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      camera={{
        position: compact ? [2.1, 1.35, 3.35] : [2.4, 1.55, 3.8],
        fov: compact ? 44 : 48,
      }}
    >
        <color attach="background" args={[sceneBg[visual]]} />
        <ambientLight intensity={0.85} />
        <directionalLight position={[6, 10, 7]} intensity={1.35} castShadow />
        <directionalLight position={[-4, 2, -3]} intensity={0.4} color="#fda4af" />
        <ProjectModel visual={visual} hovered={hovered} inView={inView} reducedMotion={reducedMotion} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.35, 0]} receiveShadow>
          <planeGeometry args={[14, 14]} />
          <shadowMaterial opacity={0.1} />
        </mesh>
        <SceneControls hovered={hovered} inView={inView} reducedMotion={reducedMotion} />
    </Canvas>
  )
}
