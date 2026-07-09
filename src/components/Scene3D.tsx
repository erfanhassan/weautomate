"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({
  position,
  scale,
  speed,
  color,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={0.4}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function NetworkNodes() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const nodeCount = 60;

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(nodeCount * 3);
    const vel = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      vel[i * 3] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return { positions: pos, velocities: vel };
  }, []);

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const posArray = posAttr.array as Float32Array;

    // Animate nodes
    for (let i = 0; i < nodeCount; i++) {
      posArray[i * 3] += velocities[i * 3];
      posArray[i * 3 + 1] += velocities[i * 3 + 1];
      posArray[i * 3 + 2] += velocities[i * 3 + 2];

      // Boundary bounce
      for (let j = 0; j < 3; j++) {
        const limit = j === 0 ? 7 : j === 1 ? 5 : 4;
        if (Math.abs(posArray[i * 3 + j]) > limit) {
          velocities[i * 3 + j] *= -1;
        }
      }
    }
    posAttr.needsUpdate = true;

    // Build connection lines
    const linePositions: number[] = [];
    const threshold = 3.0;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < threshold) {
          linePositions.push(
            posArray[i * 3],
            posArray[i * 3 + 1],
            posArray[i * 3 + 2],
            posArray[j * 3],
            posArray[j * 3 + 1],
            posArray[j * 3 + 2]
          );
        }
      }
    }

    const lineGeom = linesRef.current.geometry;
    lineGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    lineGeom.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={nodeCount}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#00c853"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#00c853" transparent opacity={0.08} />
      </lineSegments>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.4} />

        <NetworkNodes />

        <FloatingShape
          position={[4, 2, -2]}
          scale={1.5}
          speed={1.2}
          color="#00c853"
        />
        <FloatingShape
          position={[-4, -1, -3]}
          scale={2}
          speed={0.8}
          color="#69f0ae"
        />
        <FloatingShape
          position={[1, -3, -1]}
          scale={1}
          speed={1.5}
          color="#00c853"
        />
        <FloatingShape
          position={[-2, 3, -4]}
          scale={1.8}
          speed={0.6}
          color="#b9f6ca"
        />
      </Canvas>
    </div>
  );
}
