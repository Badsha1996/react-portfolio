import { Environment, Sphere } from "@react-three/drei";
import React from "react";
import { Gradient, LayerMaterial, Depth } from "lamina";
import * as THREE from "three";
const Background = () => {
  return (
    <>
      <Environment preset="dawn" />
      <Sphere scale={(100, 100, 100)} rotation-y={Math.PI / 2}>
        <LayerMaterial
          color="#ffffff" //
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={"blue"}
            colorB={"white"}
            axes={"y"}
            start={0}
            end={-0.5}
          ></Gradient>
          <Depth
            colorA={"blue"}
            colorB={"white"}
            alpha={0.5}
            mode="multiply"
            near={0}
            far={2}
            origin={[1, 1, 1]}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
};

export default Background;
