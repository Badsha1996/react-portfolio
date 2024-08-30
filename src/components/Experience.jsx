import { Environment, Float, OrbitControls, Sky } from "@react-three/drei";
import Background from "./Background";
import { Boat } from "./Boat";
import { Ocean } from "./Ocean";

export const Experience = () => {
  return (
    <>
      <color attach="background" args={["#87CEEB"]} />{" "}
      {/* Sky Blue background */}
      <fog attach="fog" args={["#87CEEB", 0, 300]} />{" "}
      {/* Sky Blue fog for distance blending */}
      <ambientLight intensity={Math.PI / 5} />
      <OrbitControls />
      <Float floatIntensity={0.5} speed={1.5} rotationIntensity={0.2}>
        <Boat
          rotation-y={Math.PI}
          scale={[0.2, 0.2, 0.2]}
          position={[0, 0, 0]}
        />
      </Float>
      <Ocean />
      {/* MORE REALISTIC SKY COMPONENT */}
      {/* <Sky
        scale={1000}
        sunPosition={[500, 150, -1000]}
        turbidity={0.1}
        rayleigh={0.5}
        mieCoefficient={0.005}
        mieDirectionalG={0.7}
      /> */}
      <Environment preset="sunset" />
    </>
  );
};



