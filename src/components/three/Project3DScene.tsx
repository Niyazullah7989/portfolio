import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import type { Group } from 'three'

export type ProjectVisual3D = 'ecommerce' | 'cloud' | 'ai'

function EcommerceBuild() {
  const g = useRef<Group>(null)
  useFrame((_, dt) => {
    if (g.current) g.current.rotation.y += dt * 0.42
  })
  return (
    <group ref={g}>
      <Float speed={1.6} floatIntensity={0.45} rotationIntensity={0.2}>
        <mesh position={[0, -0.15, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.65, 0.48, 1.05]} />
          <meshStandardMaterial
            color="#fb923c"
            metalness={0.38}
            roughness={0.42}
          />
        </mesh>
        <mesh position={[0, 0.52, 0]} castShadow>
          <boxGeometry args={[0.72, 0.42, 0.72]} />
          <meshStandardMaterial
            color="#f97316"
            metalness={0.42}
            roughness={0.36}
          />
        </mesh>
        <mesh
          position={[-0.88, -0.38, 0.52]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.14, 0.14, 0.08, 20]} />
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.55}
            roughness={0.35}
          />
        </mesh>
        <mesh
          position={[0.88, -0.38, 0.52]}
          rotation={[Math.PI / 2, 0, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.14, 0.14, 0.08, 20]} />
          <meshStandardMaterial
            color="#1e293b"
            metalness={0.55}
            roughness={0.35}
          />
        </mesh>
      </Float>
    </group>
  )
}

function CloudBuild() {
  const g = useRef<Group>(null)
  useFrame((_, dt) => {
    if (g.current) g.current.rotation.y += dt * 0.28
  })
  return (
    <group ref={g}>
      <Float speed={1.4} floatIntensity={0.5} rotationIntensity={0.15}>
        <mesh position={[-0.55, 0.1, 0]} castShadow>
          <sphereGeometry args={[0.52, 32, 32]} />
          <meshStandardMaterial
            color="#bae6fd"
            metalness={0.12}
            roughness={0.28}
          />
        </mesh>
        <mesh position={[0.35, 0.2, 0.1]} castShadow>
          <sphereGeometry args={[0.62, 32, 32]} />
          <meshStandardMaterial
            color="#e0f2fe"
            metalness={0.08}
            roughness={0.22}
          />
        </mesh>
        <mesh position={[0.85, -0.05, -0.15]} castShadow>
          <sphereGeometry args={[0.45, 32, 32]} />
          <meshStandardMaterial
            color="#7dd3fc"
            metalness={0.15}
            roughness={0.26}
          />
        </mesh>
        <mesh position={[0, -0.35, 0.35]} castShadow>
          <sphereGeometry args={[0.38, 24, 24]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.2}
            roughness={0.3}
          />
        </mesh>
      </Float>
    </group>
  )
}

function AIBuild() {
  const g = useRef<Group>(null)
  useFrame((_, dt) => {
    if (g.current) {
      g.current.rotation.x += dt * 0.18
      g.current.rotation.y += dt * 0.35
    }
  })
  return (
    <group ref={g}>
      <Float speed={2} floatIntensity={0.55} rotationIntensity={0.35}>
        <mesh castShadow>
          <torusKnotGeometry args={[0.52, 0.16, 120, 24]} />
          <meshStandardMaterial
            color="#7c3aed"
            metalness={0.48}
            roughness={0.22}
          />
        </mesh>
        <mesh scale={1.06}>
          <torusKnotGeometry args={[0.52, 0.16, 48, 12]} />
          <meshStandardMaterial
            color="#c4b5fd"
            wireframe
            transparent
            opacity={0.28}
          />
        </mesh>
        <mesh position={[0.95, 0.65, 0.35]}>
          <icosahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[-0.75, -0.55, 0.5]}>
          <octahedronGeometry args={[0.2]} />
          <meshStandardMaterial
            color="#22d3ee"
            metalness={0.5}
            roughness={0.25}
          />
        </mesh>
      </Float>
    </group>
  )
}

function ProjectModel({ visual }: { visual: ProjectVisual3D }) {
  switch (visual) {
    case 'ecommerce':
      return <EcommerceBuild />
    case 'cloud':
      return <CloudBuild />
    case 'ai':
      return <AIBuild />
    default:
      return <EcommerceBuild />
  }
}

export function Project3DScene({
  visual,
  className = '',
}: {
  visual: ProjectVisual3D
  className?: string
}) {
  return (
    <div className={className}>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [3.4, 2.1, 5.2], fov: 42 }}
      >
        <color attach="background" args={['#f1f5f9']} />
        <ambientLight intensity={0.78} />
        <directionalLight position={[6, 10, 7]} intensity={1.25} castShadow />
        <directionalLight
          position={[-4, 2, -3]}
          intensity={0.35}
          color="#fda4af"
        />
        <ProjectModel visual={visual} />
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.35, 0]}
          receiveShadow
        >
          <planeGeometry args={[14, 14]} />
          <shadowMaterial opacity={0.1} />
        </mesh>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.95}
          maxPolarAngle={Math.PI / 2.05}
          minPolarAngle={Math.PI / 5}
        />
      </Canvas>
    </div>
  )
}
