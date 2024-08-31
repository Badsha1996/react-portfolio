import React from "react";
import { useGLTF } from "@react-three/drei";

export function Lighthouse(props) {
  const { nodes, materials } = useGLTF("models/lighthouse/Lighthouse.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.lighthouse_glass.geometry}
        material={materials.mia_material1SG}
      />
      <mesh
        geometry={nodes.lighthouse_01.geometry}
        material={materials.lambert3SG}
      />
      <mesh
        geometry={nodes.lighthouse_light.geometry}
        material={materials.LightSG}
      />
    </group>
  );
}

useGLTF.preload("models/lighthouse/Lighthouse.glb");
