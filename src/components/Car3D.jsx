import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

function Wheel({ position }) {
  return (
    <group position={position}>
      <mesh>
        <torusGeometry args={[0.28, 0.1, 20, 48]} />
        <meshStandardMaterial color="#0c0c0c" roughness={0.95} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.055, 32]} />
        <meshStandardMaterial color="#6e6e6e" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.09, 16]} />
        <meshStandardMaterial color="#444" metalness={0.95} roughness={0.1} />
      </mesh>
      {[...Array(5)].map((_, i) => {
        const a = (Math.PI * 2 / 5) * i
        return (
          <mesh key={i} position={[Math.cos(a) * 0.12, Math.sin(a) * 0.12, 0]} rotation={[0, 0, a + Math.PI / 2]}>
            <boxGeometry args={[0.025, 0.22, 0.038]} />
            <meshStandardMaterial color="#b0b0b0" metalness={0.8} roughness={0.2} />
          </mesh>
        )
      })}
    </group>
  )
}

function CarMesh() {
  const bodyMat  = useMemo(() => new THREE.MeshStandardMaterial({ color: '#1d1d23', metalness: 0.55, roughness: 0.42 }), [])
  const glassMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#5588aa', transparent: true, opacity: 0.38, side: THREE.DoubleSide, roughness: 0.05, metalness: 0.2 }), [])
  const drlMat   = useMemo(() => new THREE.MeshStandardMaterial({ color: '#fff', emissive: '#fff', emissiveIntensity: 2.5 }), [])
  const tailMat  = useMemo(() => new THREE.MeshStandardMaterial({ color: '#ff1122', emissive: '#ff0011', emissiveIntensity: 1.8 }), [])
  const blueMat  = useMemo(() => new THREE.MeshStandardMaterial({ color: '#1a56db', emissive: '#1a56db', emissiveIntensity: 0.8 }), [])
  const grillMat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#111', metalness: 0.6, roughness: 0.4 }), [])

  // IONIQ side-profile extruded body
  const bodyGeom = useMemo(() => {
    const s = new THREE.Shape()
    // front bumper
    s.moveTo(2.1, 0.56)
    s.lineTo(2.2, 0.7)
    s.lineTo(2.14, 0.9)
    // hood
    s.lineTo(1.82, 0.98)
    s.lineTo(0.82, 1.04)
    // windshield (bezier = smooth A-pillar)
    s.bezierCurveTo(0.62, 1.04, 0.35, 1.3, 0.2, 1.46)
    // roof flat
    s.lineTo(-0.8, 1.46)
    // fastback rear window slope
    s.bezierCurveTo(-1.05, 1.46, -1.38, 1.2, -1.6, 0.9)
    // small spoiler ledge
    s.lineTo(-1.74, 0.93)
    // rear end
    s.lineTo(-2.1, 0.86)
    s.lineTo(-2.2, 0.68)
    s.lineTo(-2.12, 0.56)
    // bottom line back to front
    s.lineTo(2.1, 0.56)

    const g = new THREE.ExtrudeGeometry(s, {
      depth: 1.74,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 0.055,
      bevelThickness: 0.055,
    })
    g.translate(0, 0, -0.87)
    return g
  }, [])

  return (
    <group>
      <mesh geometry={bodyGeom} material={bodyMat} castShadow receiveShadow />

      {/* Blue accent stripe at bottom */}
      <mesh position={[0, 0.57, 0]} material={blueMat}>
        <boxGeometry args={[4.08, 0.038, 1.76]} />
      </mesh>

      {/* Front grille */}
      <mesh position={[2.17, 0.68, 0]} material={grillMat}>
        <boxGeometry args={[0.05, 0.22, 1.2]} />
      </mesh>

      {/* Front DRL headlights */}
      <mesh position={[2.2, 0.76, 0.58]} material={drlMat}>
        <boxGeometry args={[0.055, 0.065, 0.36]} />
      </mesh>
      <mesh position={[2.2, 0.76, -0.58]} material={drlMat}>
        <boxGeometry args={[0.055, 0.065, 0.36]} />
      </mesh>
      {/* DRL lower strip */}
      <mesh position={[2.2, 0.63, 0.52]} material={drlMat}>
        <boxGeometry args={[0.04, 0.03, 0.24]} />
      </mesh>
      <mesh position={[2.2, 0.63, -0.52]} material={drlMat}>
        <boxGeometry args={[0.04, 0.03, 0.24]} />
      </mesh>

      {/* Rear taillights — angular IONIQ style */}
      <mesh position={[-2.17, 0.78, 0.56]} material={tailMat}>
        <boxGeometry args={[0.07, 0.28, 0.42]} />
      </mesh>
      <mesh position={[-2.17, 0.78, -0.56]} material={tailMat}>
        <boxGeometry args={[0.07, 0.28, 0.42]} />
      </mesh>
      {/* Center tail bar connecting both sides */}
      <mesh position={[-2.19, 0.86, 0]} material={tailMat}>
        <boxGeometry args={[0.04, 0.04, 0.56]} />
      </mesh>

      {/* Windshield */}
      <mesh position={[0.28, 1.22, 0]} rotation={[0, 0, -0.5]} material={glassMat}>
        <planeGeometry args={[0.62, 1.66]} />
      </mesh>

      {/* Side windows */}
      <mesh position={[-0.3, 1.18, 0.888]} material={glassMat}>
        <planeGeometry args={[1.68, 0.37]} />
      </mesh>
      <mesh position={[-0.3, 1.18, -0.888]} material={glassMat}>
        <planeGeometry args={[1.68, 0.37]} />
      </mesh>

      {/* Rear window */}
      <mesh position={[-1.24, 1.22, 0]} rotation={[0, 0, 0.5]} material={glassMat}>
        <planeGeometry args={[0.62, 1.66]} />
      </mesh>

      {/* Side mirrors */}
      {[1, -1].map(s => (
        <mesh key={s} position={[1.56, 1.04, s * 0.92]} material={bodyMat}>
          <boxGeometry args={[0.11, 0.07, 0.13]} />
        </mesh>
      ))}

      {/* Door handles */}
      {[1, -1].map(s => (
        <group key={s}>
          <mesh position={[0.48, 0.92, s * 0.89]} material={grillMat}>
            <boxGeometry args={[0.14, 0.03, 0.015]} />
          </mesh>
          <mesh position={[-0.55, 0.92, s * 0.89]} material={grillMat}>
            <boxGeometry args={[0.14, 0.03, 0.015]} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function Scene() {
  const groupRef = useRef()
  useFrame(() => { groupRef.current.rotation.y += 0.004 })

  return (
    <group ref={groupRef}>
      <CarMesh />
      <Wheel position={[1.28, 0.38, 0.93]} />
      <Wheel position={[1.28, 0.38, -0.93]} />
      <Wheel position={[-1.2, 0.38, 0.93]} />
      <Wheel position={[-1.2, 0.38, -0.93]} />
    </group>
  )
}

export default function Car3DSection() {
  return (
    <section style={{ padding: '80px 24px 60px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 28 }}
        >
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#52525b', marginBottom: 10 }}>
            הרכב שלנו
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 700, color: '#f1f5f9', margin: 0 }}>
            Hyundai IONIQ Hybrid
          </h2>
          <p style={{ color: '#3f3f46', fontSize: '0.8rem', marginTop: 8 }}>◉ גרור לסיבוב</p>
        </motion.div>

        <div style={{ height: 400, borderRadius: 20, overflow: 'hidden', background: '#0c0c12' }}>
          <Canvas camera={{ position: [5.5, 2.4, 4.8], fov: 40 }} shadows>
            <ambientLight intensity={0.28} />
            <directionalLight position={[7, 9, 5]} intensity={2.2} castShadow shadow-mapSize={[2048, 2048]} />
            <directionalLight position={[-5, 4, -3]} intensity={0.5} color="#2244ee" />
            <pointLight position={[0, 5, 0]} intensity={0.3} color="#ffffff" />
            <Suspense fallback={null}>
              <Scene />
              <ContactShadows position={[0, 0, 0]} opacity={0.65} scale={13} blur={2.8} far={1} />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 7}
              maxPolarAngle={Math.PI / 2.15}
            />
          </Canvas>
        </div>
      </div>
    </section>
  )
}
