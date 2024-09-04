import {
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Text,
  useScroll,
} from "@react-three/drei";
import Background from "./Background";
import { Boat } from "./Boat";
import { Ocean } from "./Ocean";
import { Lighthouse } from "./Lighthouse";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { Land } from "./Land";
import { Ship } from "./Ship";
import { Boatv2 } from "./Boatv2";
import { Waves } from "./Wave";
import CustomOrbitControls from "./CustomOrbitControls";

// WATER TRAILS

export const Experience = () => {
  // CONSTANTS
  const LINE_TOTAL_POINTS = 1000;
  const CURVE_DISTANCE = 100;
  const CURVE_AHEAD_CAMERA = 0.008;
  const CURVE_AHEAD_BOAT = 0.02;
  const BOAT_MAX_ANGLE = 5;

  // CATMULLROM-CURVE ALGO ref - https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -CURVE_DISTANCE),
        new THREE.Vector3(50, 0, -2 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -3 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  // REFS
  const boat = useRef();
  const cameraGroup = useRef();
  const scroll = useScroll();

  const [lastScrollOffset, setLastScrollOffset] = useState(0);
  const [boatRotationX, setBoatRotationX] = useState(0);

  // scroll defination
  useFrame((_state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);
    const curPoint = curve.getPoint(scrollOffset);
    // CAMERA FOLLOW THE CURVE
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // CAMERA ROTATION
    const lookAtPoint = curve.getPoint(
      Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
    );
    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();
    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    // BOAT ROTATION
    const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_BOAT);
    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegree = (angle * 180) / Math.PI;
    angleDegree += 2.4;

    // LIMIT THE ANGLE FOR ROATATION
    if (angleDegree < 0) {
      angleDegree = Math.max(angleDegree, -BOAT_MAX_ANGLE);
    }

    if (angleDegree > 0) {
      angleDegree = Math.max(angleDegree, BOAT_MAX_ANGLE);
    }

    angle = (angleDegree * Math.PI) / 180;

    const targetBoatQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(boat.current.rotation.x, boat.current.position.y, angle)
    );

    boat.current.quaternion.slerp(targetBoatQuaternion, delta * 2);

    // IF BOAT STARTED MOVE MOMENTUM SHOULD LIFT THE BOAT
    const isScrolling = Math.abs(scrollOffset - lastScrollOffset) > 0.0001;
    const targetRotationX = isScrolling ? Math.PI / 35 : 0;

    setBoatRotationX((prev) =>
      THREE.MathUtils.lerp(prev, targetRotationX, delta * 5)
    );

    if (boat.current) {
      boat.current.rotation.x = boatRotationX;
    }
    setLastScrollOffset(scrollOffset);
  });

  return (
    <>
      {/* Sky Blue background 
      NOTE: comment out the SKY component before commenting out */}
      {/* <color attach="background" args={["#87CEEB"]} />{" "}
       */}
      <fog attach="fog" args={["#87CEEB", 0, 300]} />

      {/* <ambientLight intensity={Math.PI / 5} /> */}
      <Lighthouse scale={[0.5, 0.5, 0.5]} position={[10, 0, -50]} />
      <Land scale={[10, 10, 10]} position={[-12, 18, -710]} />

      <group ref={cameraGroup}>
        <PerspectiveCamera position={[0, 1.5, 5]} makeDefault />
        <group ref={boat}>
          <Float floatIntensity={0.5} speed={1} rotationIntensity={0.2}>
            {/* <Ship
              rotation-y={Math.PI}
              rotation-z={Math.PI / 8}
              position={[0, 0, 0]}
              scale={[0.03, 0.03, 0.03]}
            /> */}
            <Boatv2
              rotation-y={Math.PI}
              rotation-z={Math.PI / 20}
              scale={[0.2, 0.2, 0.2]}
              position={[0, 0, 0]}
            />
          </Float>
        </group>
      </group>
      <Ocean boatRef={boat} />

      {/* TEXT SECTION */}
      <group position={[0, 1.5, -60]}>
        <Text
          color={"#7CB9E8"}
          maxWidth={3}
          fontSize={1}
          anchorX="left"
          position-y={2}
          anchorY="middle"
          font="font/DMSerifDisplay-Regular.ttf"
        >
          WELCOME TO DUMMY {"\n"}
        </Text>
        <Text
          color={"white"}
          maxWidth={3}
          fontSize={0.2}
          anchorX="left"
          anchorY="top"
          font="font/DMSerifDisplay-Regular.ttf"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
          voluptatem.
        </Text>
      </group>
      <group position={[25, 1.5, -150]}>
        <Text
          color={"#7CB9E8"}
          maxWidth={3}
          fontSize={1}
          anchorX="left"
          position-y={2}
          anchorY="middle"
          font="font/DMSerifDisplay-Regular.ttf"
        >
          BADSHA LASKAR {"\n"}
        </Text>
        <Text
          color={"white"}
          maxWidth={3}
          fontSize={0.2}
          anchorX="left"
          anchorY="top"
          font="font/DMSerifDisplay-Regular.ttf"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
          voluptatem.
        </Text>
      </group>
      <group position={[5, 1.5, -270]}>
        <Text
          color={"#7CB9E8"}
          maxWidth={3}
          fontSize={1}
          anchorX="left"
          position-y={2}
          anchorY="middle"
          font="font/DMSerifDisplay-Regular.ttf"
        >
          THE END {"\n"}
        </Text>
        <Text
          color={"white"}
          maxWidth={3}
          fontSize={0.2}
          anchorX="left"
          anchorY="top"
          font="font/DMSerifDisplay-Regular.ttf"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
          voluptatem.
        </Text>
      </group>
      <group position={[-12, 12, -735]}>
        <Text
          color={"#7CB9E8"}
          maxWidth={105}
          fontSize={5.5}
          anchorX="left"
          position-y={2}
          anchorY="middle"
          font="font/DMSerifDisplay-Regular.ttf"
        >
          Thank You {"\n"}
        </Text>
      </group>
      {/* CURVE PATH */}
      <group position={[0, -2, 0]}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_TOTAL_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial
            color={"white"}
            // ref={lineMaterialRef}
            transparent
            envMapIntensity={2}
            // onBeforeCompile={fadeOnBeforeCompile}
          />
        </mesh>
      </group>
      {/* MORE REALISTIC SKY COMPONENT */}
      <Sky
        scale={2500}
        sunPosition={[500, 150, -1000]}
        turbidity={0.1}
        rayleigh={0.5}
        mieCoefficient={0.005}
        mieDirectionalG={0.7}
      />
      <Environment preset="sunset" />
    </>
  );
};
