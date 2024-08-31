import {
  Environment,
  Float,
  Line,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  useScroll,
} from "@react-three/drei";
// import Background from "./Background";
import { Boat } from "./Boat";
import { Ocean } from "./Ocean";
import { Lighthouse } from "./Lighthouse";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { Land } from "./Land";

export const Experience = () => {
  // CONSTANTS
  const LINE_TOTAL_POINTS = 1000;
  const CURVE_DISTANCE = 100;
  const CURVE_AHEAD_CAMERA = 0.008;
  const CURVE_AHEAD_BOAT = 0.02;
  const BOAT_MAX_ANGLE = 20;

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

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_TOTAL_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  // CAMERA prospective
  const cameraGroup = useRef();
  const cameraRail = useRef();
  const camera = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);

  // scroll defination

  // const { play, setHasScroll, end, setEnd } = usePlay();

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
  });

  const boat = useRef();

  return (
    <>
      {/* <OrbitControls /> */}
      <color attach="background" args={["#87CEEB"]} />{" "}
      {/* Sky Blue background */}
      <fog attach="fog" args={["#87CEEB", 0, 300]} />{" "}
      {/* Sky Blue fog for distance blending */}
      <ambientLight intensity={Math.PI / 5} />
      <Lighthouse scale={[0.5, 0.5, 0.5]} position={[10, 0, -50]} />
      <Land scale={[10, 10, 10]} position={[-12, 18, -710]} />
      <group ref={cameraGroup}>
        <PerspectiveCamera position={[0, 1.5, 5]} makeDefault />
        <group ref={boat}>
          <Float floatIntensity={0.5} speed={1.5} rotationIntensity={0.2}>
            <Boat
              rotation-y={Math.PI}
              rotation-z={Math.PI / 8}
              scale={[0.2, 0.2, 0.2]}
              position={[0, 0, 0]}
            />
          </Float>
        </group>
      </group>
      <Ocean boatRef={boat} />
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
