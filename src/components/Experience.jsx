import { Float, OrbitControls, Sky } from "@react-three/drei";
import Background from "./Background";
import { Boat } from "./Boat";
import { Ocean } from "./Ocean";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Background />
      <Float floatIntensity={0.5} speed={1.5} rotationIntensity={0.2}>
        <Boat
          rotation-y={Math.PI}
          scale={[0.3, 0.3, 0.3]}
          position={[0, 0, 0]}
        />
      </Float>
      <Ocean />
      <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
    </>
  );
};
