// CustomOrbitControls.js
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const CustomOrbitControls = ({ cameraRef }) => {
  const controlsRef = useRef();

  //   useFrame(() => {
  //     if (cameraRef.current) {
  //       const cameraY = cameraRef.current.position.y;
  //       if (controlsRef.current) {
  //         controlsRef.current.enabled = cameraY >= 0; // Disable controls if y < 0
  //       }
  //     }
  //   });

  return <OrbitControls ref={controlsRef} />;
};

export default CustomOrbitControls;
