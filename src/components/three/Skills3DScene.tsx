import { useRef, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import type { Group } from 'three'

function RotatingCluster({ children }: { children: ReactNode }) {
  const ref = useRef<Group>(null)
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.11
  })
  return <group ref={ref}>{children}</group>
}

function TechShapes() {
  return (
    <RotatingCluster>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.55}>
        <mesh position={[-2.35, 0.55, 0]} castShadow>
          <octahedronGeometry args={[0.72]} />
          <meshStandardMaterial
            color="#f97316"
            metalness={0.48}
            roughness={0.32}
          />
        </mesh>
      </Float>
      <Float speed={2.1} rotationIntensity={0.4} floatIntensity={0.5}>
        <mesh position={[0.15, -0.15, 0.6]} castShadow>
          <torusGeometry args={[0.52, 0.16, 24, 48]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.38}
            roughness={0.22}
          />
        </mesh>
      </Float>
      <Float speed={1.95} rotationIntensity={0.3} floatIntensity={0.52}>
        <mesh position={[2.25, 0.35, -0.15]} castShadow>
          <boxGeometry args={[0.88, 0.88, 0.88]} />
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.42}
            roughness={0.28}
          />
        </mesh>
      </Float>
      <Float speed={1.55} rotationIntensity={0.45} floatIntensity={0.42}>
        <mesh position={[0.45, 1.15, -0.95]} castShadow>
          <icosahedronGeometry args={[0.48, 0]} />
          <meshStandardMaterial
            color="#10b981"
            metalness={0.52}
            roughness={0.18}
          />
        </mesh>
      </Float>
      <Float speed={2.35} rotationIntensity={0.25} floatIntensity={0.62}>
        <mesh position={[-1.1, -0.75, -0.55]} castShadow>
          <cylinderGeometry args={[0.32, 0.42, 0.48, 28]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.35}
            roughness={0.38}
          />
        </mesh>
      </Float>
      <Float speed={1.85} rotationIntensity={0.38} floatIntensity={0.48}>
        <mesh position={[2.65, -0.55, 0.45]} castShadow>
          <dodecahedronGeometry args={[0.42]} />
          <meshStandardMaterial
            color="#a855f7"
            metalness={0.58}
            roughness={0.22}
          />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.32} floatIntensity={0.45}>
        <mesh position={[-2.8, 0.2, 0.8]} castShadow>
          <tetrahedronGeometry args={[0.55]} />
          <meshStandardMaterial
            color="#14b8a6"
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
      </Float>
    </RotatingCluster>
  )
}

export function Skills3DScene({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        shadows
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        camera={{ position: [0, 1.55, 9.2], fov: 40 }}
      >
        <color attach="background" args={['#f8fafc']} />
        <ambientLight intensity={0.72} />
        <directionalLight position={[7, 11, 9]} intensity={1.4} castShadow />
        <directionalLight
          position={[-5, 3, -4]}
          intensity={0.45}
          color="#c4b5fd"
        />
        <pointLight position={[2, 5, 2]} intensity={0.35} color="#fde68a" />
        <TechShapes />
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.65, 0]}
          receiveShadow
        >
          <planeGeometry args={[24, 24]} />
          <shadowMaterial opacity={0.12} />
        </mesh>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.55}
          maxPolarAngle={Math.PI / 2.08}
          minPolarAngle={Math.PI / 4.8}
        />
      </Canvas>
    </div>
  )
}
