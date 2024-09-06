import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Overlay } from "./components/Overlay";

function App() {
  return (
    <>
      <Canvas>
        <ScrollControls pages={20} damping={1}>
          <Experience />
        </ScrollControls>
      </Canvas>
      <Overlay />
    </>
  );
}

export default App;
