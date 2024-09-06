import { Text, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { a, useSpring } from "@react-spring/three";

const SkillListPopup = ({ boatRef }) => {
  const [visible, setVisible] = useState(false);

  const popupRef = useRef();

  // Check boat's position to trigger popup
  useFrame(() => {
    if (boatRef.current) {
      const boatPosition = new THREE.Vector3();
      boatRef.current.getWorldPosition(boatPosition);

      const distance = boatPosition.distanceTo(
        new THREE.Vector3(25, 1.5, -150)
      );
      if (distance < 50) {
        setVisible(true); // Show when the boat is close
      } else {
        setVisible(false); // Hide when the boat moves away
      }
    }
  });

  // Animation for the pop-up
  const { scale, opacity } = useSpring({
    scale: visible ? [1, 1, 1] : [0, 0, 0],
    opacity: visible ? 1 : 0,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <a.group ref={popupRef} position={[25, 1.5, -150]} scale={scale}>
      {/* Glass Square */}
      <group scale={[1, 2, 1]}>
        <a.mesh>
          <Box args={[2.5, 3, 0.1]}>
            <meshBasicMaterial
              opacity={0.5}
              color={"#7CB9E8"}
              roughness={0.1}
              metalness={0.5}
            />
          </Box>
        </a.mesh>
      </group>

      {/* Skill List */}
      <group position={[-1.2, 1.3, 0.1]}>
        <Text
          
          fontSize={0.25}
          color="white"
          maxWidth={2.3} // Limit the width to prevent text overflow
          lineHeight={1}
          position={[0.2, 1.2  * 0.4, 0.05]}
          anchorX="left"
          anchorY="middle"
          font="font/DMSerifDisplay-Regular.ttf"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          beatae, totam molestiae ipsam aspernatur porro accusantium excepturi
          sequi provident eaque, recusandae odio suscipit delectus blanditiis
          consectetur! Distinctio est ut iusto.
        </Text>
      </group>
    </a.group>
  );
};

export default SkillListPopup;
