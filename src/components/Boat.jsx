import React from "react";
import { useGLTF } from "@react-three/drei";

export function Boat(props) {
  const { nodes, materials } = useGLTF("models/boat/Boat.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Tugboat_mesh.geometry}
        material={materials.Tugboat_mat1}
      />
    </group>
  );
}

useGLTF.preload("models/boat/Boat.glb");
