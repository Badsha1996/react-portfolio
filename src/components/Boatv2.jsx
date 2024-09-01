import React from "react";
import { useGLTF } from "@react-three/drei";

export function Boatv2(props) {
  const { nodes, materials } = useGLTF("models/model/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Tugboat_mesh464.geometry}
        material={materials.Tugboat_mat1}
      />
    </group>
  );
}

useGLTF.preload("models/model/model.glb");
