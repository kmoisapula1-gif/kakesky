import { useRef, Suspense, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Pallet() {
  const groupRef = useRef<THREE.Group>(null!);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    const targetRotX = mouse.y * 0.2 + Math.sin(t * 0.2) * 0.1;
    const targetRotY = mouse.x * 0.2 + t * 0.05;
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
  });

  // Memoize the material so it isn't re-created on every render.
  const mat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#D48148', roughness: 0.8, metalness: 0.2 }),
    [],
  );

  return (
    <group ref={groupRef} scale={[1.2, 1.2, 1.2]}>
      {/* 4 vertical stringers */}
      {[-1.8, -0.6, 0.6, 1.8].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]} material={mat}>
          <boxGeometry args={[0.15, 0.4, 4]} />
        </mesh>
      ))}
      {/* Top deck boards */}
      {[-1.7, 0, 1.7].map((z, i) => (
        <mesh key={`top-${i}`} position={[0, 0.225, z]} material={mat}>
          <boxGeometry args={[4, 0.05, 0.8]} />
        </mesh>
      ))}
      {/* Bottom deck boards */}
      {[-1.7, 0, 1.7].map((z, i) => (
        <mesh key={`bot-${i}`} position={[0, -0.225, z]} material={mat}>
          <boxGeometry args={[4, 0.05, 0.8]} />
        </mesh>
      ))}
    </group>
  );
}

function PalletFallback() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox="0 0 280 200"
        style={{
          width: '80%',
          maxWidth: 340,
          filter: 'drop-shadow(0 20px 40px rgba(212,129,72,0.45))',
        }}
      >
        <rect x="10" y="156" width="260" height="20" rx="3" fill="#C87040" />
        <rect x="10" y="156" width="78" height="20" rx="3" fill="#D48148" />
        <rect x="100" y="156" width="78" height="20" rx="3" fill="#D48148" />
        <rect x="190" y="156" width="80" height="20" rx="3" fill="#D48148" />
        <rect x="18" y="96" width="28" height="62" rx="3" fill="#B8703A" />
        <rect x="114" y="96" width="28" height="62" rx="3" fill="#B8703A" />
        <rect x="210" y="96" width="28" height="62" rx="3" fill="#B8703A" />
        <rect x="10" y="76" width="260" height="20" rx="3" fill="#D48148" />
        <rect x="10" y="52" width="260" height="20" rx="3" fill="#D48148" />
        <rect x="10" y="28" width="260" height="20" rx="3" fill="#D48148" />
        <rect x="90" y="28" width="3" height="68" rx="1" fill="#1A1A1A" opacity="0.12" />
        <rect x="183" y="28" width="3" height="68" rx="1" fill="#1A1A1A" opacity="0.12" />
        <circle cx="140" cy="128" r="6" fill="#1B4332" />
      </svg>
    </div>
  );
}

function checkWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

export default function Hero3D() {
  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);
  useEffect(() => {
    setWebglAvailable(checkWebGL());
  }, []);

  return (
    <div style={{ width: '100%', height: 400, minHeight: 400, position: 'relative' }}>
      {webglAvailable === null || !webglAvailable ? (
        <PalletFallback />
      ) : (
        <Suspense fallback={<PalletFallback />}>
          <Canvas camera={{ position: [0, 4, 8], fov: 45 }} style={{ width: '100%', height: '100%' }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} />
            <pointLight position={[0, -5, 0]} intensity={5} color="#C87040" distance={20} />
            <Pallet />
          </Canvas>
        </Suspense>
      )}
    </div>
  );
}
