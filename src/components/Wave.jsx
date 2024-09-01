// Waves.js
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Waves = ({ boatRef }) => {
  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current) {
      // Initial setup
      const geometry = meshRef.current.geometry;
      geometry.attributes.position.needsUpdate = true;
    }
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      const geometry = meshRef.current.geometry;
      const position = geometry.attributes.position.array;

      // Update wave positions
      for (let i = 0; i < position.length; i += 3) {
        const x = position[i];
        const z = position[i + 2];
        position[i + 1] =
          Math.sin(x * 0.5 + time) * 0.5 + Math.sin(z * 0.5 + time) * 0.5;
      }

      geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.5, 0]} scale={[50, 1, 50]}>
      <planeGeometry args={[1, 1, 128, 128]} />
      <meshStandardMaterial color="#red" />
    </mesh>
  );
};
