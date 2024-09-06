import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Text, Billboard, TrackballControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "WebGL",
  "Three.js",
  "Git",
  "TypeScript",
  "GraphQL",
  "MongoDB",
  "Express",
];

// Gradient color array
const gradientColors = [
  "#00b4d8",
  "#0077b6",
  "#023e8a",
  "#90e0ef",
  "#caf0f8",
  "#48cae4",
  "#ade8f4",
];

function Word({ children, position, index }) {
  const color = new THREE.Color();
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const onHover = () => setHovered(true);
  const onUnhover = () => setHovered(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const gradientIndex = (index + Math.floor(elapsedTime * 0.5)) % gradientColors.length;
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : gradientColors[gradientIndex]),
      0.1
    );
  });

  return (
    <Billboard position={position}>
      <Text
        ref={ref}
        font="font/DMSerifDisplay-Regular.ttf"
        fontSize={2.5}
        anchorX="center"
        anchorY="middle"
        onPointerOver={onHover}
        onPointerOut={onUnhover}
      >
        {children}
      </Text>
    </Billboard>
  );
}

const SphericalWorldCloud = ({ count = 8, radius = 20 }) => {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const position = new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * i, thetaSpan * j)
        );
        temp.push([position, skills[Math.floor(Math.random() * skills.length)], temp.length]);
      }
    }
    return temp;
  }, [count, radius]);

  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.001; // Slow rotation
  });

  return (
    <>
      <group ref={groupRef}>
        {words.map(([pos, skill, index]) => (
          <Word key={index} position={pos} index={index}>
            {skill}
          </Word>
        ))}
      </group>
    </>
  );
};

export default SphericalWorldCloud;
