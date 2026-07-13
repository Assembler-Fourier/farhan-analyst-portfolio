"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function SignalObject({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (reducedMotion || !group.current || !core.current) return;

    group.current.rotation.y += delta * 0.14;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.14,
      0.035,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -state.pointer.x * 0.1,
      0.035,
    );
    core.current.rotation.x -= delta * 0.22;
    core.current.rotation.y += delta * 0.28;
  });

  return (
    <Float speed={reducedMotion ? 0 : 1.25} rotationIntensity={0.25} floatIntensity={0.45}>
      <group ref={group} rotation={[0.18, -0.45, -0.12]}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.16, 2]} />
          <meshPhysicalMaterial
            color="#63f3cf"
            roughness={0.24}
            metalness={0.25}
            transmission={0.22}
            thickness={0.75}
            transparent
            opacity={0.94}
          />
        </mesh>

        <mesh scale={1.02}>
          <icosahedronGeometry args={[1.24, 1]} />
          <meshBasicMaterial color="#f5f8fb" wireframe transparent opacity={0.34} />
        </mesh>

        <mesh rotation={[Math.PI / 2.4, 0.35, 0]}>
          <torusGeometry args={[1.78, 0.015, 8, 180]} />
          <meshBasicMaterial color="#f5f8fb" transparent opacity={0.48} />
        </mesh>
        <mesh rotation={[0.35, Math.PI / 2.15, 0.5]}>
          <torusGeometry args={[1.52, 0.012, 8, 180]} />
          <meshBasicMaterial color="#a793ff" transparent opacity={0.78} />
        </mesh>
        <mesh rotation={[0.95, 0.15, Math.PI / 2.7]}>
          <torusGeometry args={[1.98, 0.01, 8, 180]} />
          <meshBasicMaterial color="#69b7ff" transparent opacity={0.5} />
        </mesh>

        {[
          [1.62, 0.61, 0.28],
          [-1.04, -1.2, 0.45],
          [0.48, -0.48, 1.72],
          [-1.55, 0.72, -0.48],
        ].map((position, index) => (
          <mesh key={position.join("-")} position={position as [number, number, number]}>
            <sphereGeometry args={[index === 0 ? 0.11 : 0.065, 18, 18]} />
            <meshBasicMaterial color={index % 2 === 0 ? "#63f3cf" : "#f5f8fb"} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export function FinanceOrb() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <div className="orb-stage" role="img" aria-label="Interactive finance signal sculpture">
      <div className="orb-grid" aria-hidden="true" />
      <Canvas
        aria-hidden="true"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.25], fov: 42 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        frameloop="demand"
      >
        <ambientLight intensity={1.8} />
        <directionalLight position={[3, 4, 5]} intensity={3.2} color="#f5f8fb" />
        <pointLight position={[-3, -2, 2]} intensity={8} color="#a793ff" />
        <Sparkles count={36} size={1.2} scale={6} speed={reducedMotion ? 0 : 0.18} color="#f5f8fb" />
        <SignalObject reducedMotion={reducedMotion} />
      </Canvas>

      <div className="orb-readout orb-readout-top" aria-hidden="true">
        <span>Signal</span>
        <strong>91.00</strong>
      </div>
      <div className="orb-readout orb-readout-bottom" aria-hidden="true">
        <span>Mode</span>
        <strong>Analyse → Act</strong>
      </div>
    </div>
  );
}
