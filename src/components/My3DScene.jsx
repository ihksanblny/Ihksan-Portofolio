import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';

// Komponen partikel debu kosmik yang bergerak lambat
function CosmicDust() {
  const mesh = useRef();

  useFrame((state) => {
    // Rotasi lambat untuk efek dinamis
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={mesh}>
      <sphereGeometry args={[15, 64, 64]} />
      <pointsMaterial
        size={0.02}
        color="#D4AF37" // Emas pudar
        transparent
        opacity={0.4}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function My3DScene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true }}>
        {/* Background Warna Hitam Pekat */}
        <color attach="background" args={['#050505']} />

        {/* Fog untuk kedalaman, menyatu dengan background */}
        <fog attach="fog" args={['#050505', 5, 20]} />

        {/* Pencahayaan Minimalis */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#D4AF37" />

        {/* Stars: Bintang latar belakang yang halus */}
        <Stars
          radius={50}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Sparkles: Partikel emas yang melayang dekat kamera */}
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sparkles
            count={50}
            scale={10}
            size={2}
            speed={0.2}
            opacity={0.5}
            color="#D4AF37" // Gold sparkles
            noise={1}
          />
        </Float>

        {/* Cosmic Dust: Struktur bola partikel halus untuk tekstur */}
        <CosmicDust />

      </Canvas>

      {/* Overlay Gradient untuk memastikan teks terbaca & menyatu dengan footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/20 to-dark-bg pointer-events-none" />
    </div>
  );
}
