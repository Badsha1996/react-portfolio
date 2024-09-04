import React, { useMemo, useRef } from "react";
import { useFrame, extend, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water.js";
import { OrbitControls } from "@react-three/drei";

extend({ Water });

export function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
  );

  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x0099ff,
      distortionScale: 1.5,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );

  useFrame((state, delta) => {
    ref.current.material.uniforms.time.value += delta / 5;
  });

  return (
    <>
      <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
    </>
  );
}
