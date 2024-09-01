import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Ship(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF("models/ship/ship.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="4279c9e2ed2e464895c5348c2b75ab18fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="MastSupport"
                  position={[-7.441, 23.229, -8.567]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.585, 0.585, 1.42]}
                >
                  <mesh
                    name="MastSupport_DeckStuff_0"
                    geometry={nodes.MastSupport_DeckStuff_0.geometry}
                    material={materials.DeckStuff}
                  />
                </group>
                <group
                  name="MastSupport001"
                  position={[-7.441, 32.084, 66.457]}
                  rotation={[-1.484, 0, 0]}
                  scale={[0.321, 0.321, 0.779]}
                >
                  <mesh
                    name="MastSupport001_DeckStuff_0"
                    geometry={nodes.MastSupport001_DeckStuff_0.geometry}
                    material={materials.DeckStuff}
                  />
                </group>
                <group
                  name="Pulley002"
                  position={[-4.933, 72.105, 124.101]}
                  rotation={[-1.27, -1.149, -0.322]}
                  scale={[0.799, 1.457, 0.799]}
                >
                  <mesh
                    name="Pulley002_MastsRigging_0"
                    geometry={nodes.Pulley002_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley003"
                  position={[-34.856, 109.342, 79.738]}
                  rotation={[-Math.PI / 2, -Math.PI / 6, 0]}
                >
                  <mesh
                    name="Pulley003_MastsRigging_0"
                    geometry={nodes.Pulley003_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley004"
                  position={[-14.16, 121.914, 80.469]}
                  rotation={[-Math.PI / 2, -Math.PI / 6, 0]}
                >
                  <mesh
                    name="Pulley004_MastsRigging_0"
                    geometry={nodes.Pulley004_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley005"
                  position={[-62.892, 154.046, -6.383]}
                  rotation={[-Math.PI / 2, -0.262, 0]}
                >
                  <mesh
                    name="Pulley005_MastsRigging_0"
                    geometry={nodes.Pulley005_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley006"
                  position={[-16.593, 166.878, -6.383]}
                  rotation={[-Math.PI / 2, -0.262, 0]}
                >
                  <mesh
                    name="Pulley006_MastsRigging_0"
                    geometry={nodes.Pulley006_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley007"
                  position={[-35.93, 25.967, 40.104]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={0.426}
                >
                  <mesh
                    name="Pulley007_MastsRigging_0"
                    geometry={nodes.Pulley007_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley008"
                  position={[-35.082, 26.273, 42.058]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={0.426}
                >
                  <mesh
                    name="Pulley008_MastsRigging_0"
                    geometry={nodes.Pulley008_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley009"
                  position={[-34.054, 26.879, 44.621]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={0.426}
                >
                  <mesh
                    name="Pulley009_MastsRigging_0"
                    geometry={nodes.Pulley009_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley010"
                  position={[-33.87, 27.22, 46.555]}
                  rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                  scale={0.426}
                >
                  <mesh
                    name="Pulley010_MastsRigging_0"
                    geometry={nodes.Pulley010_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley011"
                  position={[-73.84, 142.67, -6.383]}
                  rotation={[-Math.PI / 2, 1.396, 0]}
                >
                  <mesh
                    name="Pulley011_MastsRigging_0"
                    geometry={nodes.Pulley011_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley012"
                  position={[-42.304, 24.372, -14.046]}
                  rotation={[-Math.PI / 2, 1.484, 0]}
                  scale={0.649}
                >
                  <mesh
                    name="Pulley012_MastsRigging_0"
                    geometry={nodes.Pulley012_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley013"
                  position={[-40.618, 24.519, 8.476]}
                  rotation={[-Math.PI / 2, 1.484, 0]}
                  scale={0.649}
                >
                  <mesh
                    name="Pulley013_MastsRigging_0"
                    geometry={nodes.Pulley013_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley014"
                  position={[-38.78, 98.793, 78.224]}
                  rotation={[-Math.PI / 2, 1.396, 0]}
                >
                  <mesh
                    name="Pulley014_MastsRigging_0"
                    geometry={nodes.Pulley014_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley016"
                  position={[-16.949, 37.029, 72.013]}
                  rotation={[-2.285, 1.29, 0.661]}
                  scale={0.649}
                >
                  <mesh
                    name="Pulley016_MastsRigging_0"
                    geometry={nodes.Pulley016_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley018"
                  position={[-38.934, 42.876, -63.656]}
                  rotation={[1.547, 0.802, 2.835]}
                  scale={0.649}
                >
                  <mesh
                    name="Pulley018_MastsRigging_0"
                    geometry={nodes.Pulley018_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley019"
                  position={[-33.04, 47.805, -88.852]}
                  rotation={[1.547, 0.802, 2.835]}
                  scale={0.649}
                >
                  <mesh
                    name="Pulley019_MastsRigging_0"
                    geometry={nodes.Pulley019_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley021"
                  position={[17.467, 48.006, -87.918]}
                  rotation={[-1.51, 1.292, -0.382]}
                  scale={0.649}
                >
                  <mesh
                    name="Pulley021_MastsRigging_0"
                    geometry={nodes.Pulley021_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley022"
                  position={[24.322, 42.347, -64.697]}
                  rotation={[-1.51, 1.292, -0.382]}
                  scale={0.649}
                >
                  <mesh
                    name="Pulley022_MastsRigging_0"
                    geometry={nodes.Pulley022_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Pulley023"
                  position={[-24.611, 33.009, 62.414]}
                  rotation={[-2.285, 1.29, 0.661]}
                  scale={0.649}
                >
                  <mesh
                    name="Pulley023_MastsRigging_0"
                    geometry={nodes.Pulley023_MastsRigging_0.geometry}
                    material={materials.MastsRigging}
                  />
                </group>
                <group
                  name="Hull"
                  position={[-7.377, 23.145, -11.189]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group
                    name="Hull_lo"
                    position={[0, -0.741, 0.959]}
                    scale={[2.037, 1.249, 2.073]}
                  >
                    <group name="Object_48" position={[0, -3.373, -11.627]}>
                      <mesh
                        name="Hull_lo_Hull_0"
                        geometry={nodes.Hull_lo_Hull_0.geometry}
                        material={materials.Hull}
                      />
                    </group>
                  </group>
                  <group
                    name="BackBorder"
                    position={[0, -0.543, 0.959]}
                    scale={[2.037, 1.249, 2.073]}
                  >
                    <group name="Object_51" position={[0, -3.373, -11.627]}>
                      <mesh
                        name="BackBorder_Hull_0"
                        geometry={nodes.BackBorder_Hull_0.geometry}
                        material={materials.Hull}
                      />
                    </group>
                  </group>
                  <group
                    name="Keel"
                    position={[0, -4.954, -23.145]}
                    scale={[2.037, 1.249, 2.073]}
                  >
                    <mesh
                      name="Keel_Hull_0"
                      geometry={nodes.Keel_Hull_0.geometry}
                      material={materials.Hull}
                    />
                  </group>
                  <group
                    name="Rudder"
                    position={[3.225, 81.879, -4.507]}
                    rotation={[1.309, 1.571, 0]}
                    scale={1.126}
                  >
                    <group name="Object_56" position={[5.464, 8.231, -0.571]}>
                      <mesh
                        name="Rudder_Hull_0"
                        geometry={nodes.Rudder_Hull_0.geometry}
                        material={materials.Hull}
                      />
                    </group>
                  </group>
                  <group
                    name="HullBackDetailPlate"
                    position={[0, -4.954, -23.145]}
                    scale={[2.037, 1.249, 2.073]}
                  >
                    <mesh
                      name="HullBackDetailPlate_Hull_0"
                      geometry={nodes.HullBackDetailPlate_Hull_0.geometry}
                      material={materials.Hull}
                    />
                  </group>
                  <group
                    name="HullDetails"
                    position={[0, -0.741, 0.959]}
                    scale={[2.037, 1.249, 2.073]}
                  >
                    <group name="Object_61" position={[0, -3.373, -11.627]}>
                      <mesh
                        name="HullDetails_Hull_0"
                        geometry={nodes.HullDetails_Hull_0.geometry}
                        material={materials.Hull}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Poopdeck"
                  position={[-7.377, 29.372, -8.877]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group
                    name="PoopDeck_lo"
                    position={[0, -2.642, -29.372]}
                    scale={[2.037, 1.249, 2.073]}
                  >
                    <mesh
                      name="PoopDeck_lo_Poopdeck_0"
                      geometry={nodes.PoopDeck_lo_Poopdeck_0.geometry}
                      material={materials.Poopdeck}
                    />
                  </group>
                  <group
                    name="UpperDeck_lo"
                    position={[0, -2.642, -37.464]}
                    scale={[2.037, 1.249, 2.073]}
                  >
                    <mesh
                      name="UpperDeck_lo_Poopdeck_0"
                      geometry={nodes.UpperDeck_lo_Poopdeck_0.geometry}
                      material={materials.Poopdeck}
                    />
                  </group>
                  <group
                    name="DeckDetailPlank001"
                    position={[-0.704, 9.057, -8.305]}
                    scale={[1.261, 0.59, 0.881]}
                  >
                    <mesh
                      name="DeckDetailPlank001_Poopdeck_0"
                      geometry={nodes.DeckDetailPlank001_Poopdeck_0.geometry}
                      material={materials.Poopdeck}
                    />
                  </group>
                  <group
                    name="UpperHatch_lo"
                    position={[0.375, 57.805, 11.111]}
                    scale={[2.037, 1.249, 2.073]}
                  >
                    <group name="Object_71" position={[0, -48.397, -23.432]}>
                      <mesh
                        name="UpperHatch_lo_Poopdeck_0"
                        geometry={nodes.UpperHatch_lo_Poopdeck_0.geometry}
                        material={materials.Poopdeck}
                      />
                    </group>
                  </group>
                  <group
                    name="Hatch"
                    position={[0, 21.983, -5.838]}
                    rotation={[0.035, 0, 0]}
                    scale={[0.806, 0.821, 0.618]}
                  >
                    <mesh
                      name="Hatch_Poopdeck_0"
                      geometry={nodes.Hatch_Poopdeck_0.geometry}
                      material={materials.Poopdeck}
                    />
                  </group>
                  <group
                    name="Hatch001"
                    position={[0, 61.737, -3.839]}
                    rotation={[0.035, 0, 0]}
                    scale={[0.337, 0.682, 0.513]}
                  >
                    <mesh
                      name="Hatch001_Poopdeck_0"
                      geometry={nodes.Hatch001_Poopdeck_0.geometry}
                      material={materials.Poopdeck}
                    />
                  </group>
                </group>
                <group
                  name="DeckStuff"
                  position={[-8.689, 35.003, -15.338]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group
                    name="Helm"
                    position={[1.312, 50.266, 11.885]}
                    scale={0.866}
                  >
                    <group
                      name="Box007"
                      position={[0.034, 2.79, -7.103]}
                      scale={[1.156, 0.54, 0.629]}
                    >
                      <mesh
                        name="Box007_DeckStuff_0"
                        geometry={nodes.Box007_DeckStuff_0.geometry}
                        material={materials.DeckStuff}
                      />
                    </group>
                    <group
                      name="Wheel"
                      position={[0, 1.817, 0.595]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={0.59}
                    >
                      <mesh
                        name="Wheel_DeckStuff_0"
                        geometry={nodes.Wheel_DeckStuff_0.geometry}
                        material={materials.DeckStuff}
                      />
                    </group>
                  </group>
                  <group
                    name="Fence001"
                    position={[4.095, 56.747, 6.99]}
                    scale={[0.407, 0.323, 0.407]}
                  >
                    <group
                      name="Object_84"
                      position={[-82.591, -49.273, 2.249]}
                      rotation={[0, 0, -0.179]}
                    >
                      <mesh
                        name="Fence001_DeckStuff_0"
                        geometry={nodes.Fence001_DeckStuff_0.geometry}
                        material={materials.DeckStuff}
                      />
                    </group>
                  </group>
                  <group
                    name="Ladder001"
                    position={[-26, 33.508, -10.635]}
                    scale={[0.044, 2.09, 0.841]}
                  >
                    <mesh
                      name="Ladder001_DeckStuff_0"
                      geometry={nodes.Ladder001_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                  <group
                    name="Bollard001"
                    position={[-21.171, -58.916, -10.06]}
                    rotation={[0, 0, 0.262]}
                    scale={[0.397, 0.397, 0.463]}
                  >
                    <mesh
                      name="Bollard001_DeckStuff_0"
                      geometry={nodes.Bollard001_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                  <group
                    name="MastSupport002"
                    position={[1.248, 74.445, 6.735]}
                    scale={[0.357, 0.357, 0.867]}
                  >
                    <mesh
                      name="MastSupport002_DeckStuff_0"
                      geometry={nodes.MastSupport002_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                  <group
                    name="Anchor"
                    position={[-24.396, -68.155, -12.481]}
                    rotation={[0.927, 0.479, 0.305]}
                  >
                    <mesh
                      name="Anchor_DeckStuff_0"
                      geometry={nodes.Anchor_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                  <group
                    name="AnchorWheelHousing"
                    position={[-6.275, -66.091, -7.977]}
                    scale={[0.887, 0.67, 0.67]}
                  >
                    <mesh
                      name="AnchorWheelHousing_DeckStuff_0"
                      geometry={nodes.AnchorWheelHousing_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                  <group
                    name="RatchetLever"
                    position={[1.312, -61.712, -9.668]}
                    scale={0.769}
                  >
                    <mesh
                      name="RatchetLever_DeckStuff_0"
                      geometry={nodes.RatchetLever_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                  <group
                    name="AnchorRopeWheel"
                    position={[-7.066, -66.252, -3.402]}
                    rotation={[0, 1.571, 0]}
                    scale={[0.568, 0.568, 0.508]}
                  >
                    <mesh
                      name="AnchorRopeWheel_DeckStuff_0"
                      geometry={nodes.AnchorRopeWheel_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                  <group
                    name="Cannon"
                    position={[-25.31, -7.036, -8.636]}
                    rotation={[1.833, -Math.PI / 2, 0]}
                    scale={[0.412, 0.412, 0.601]}
                  >
                    <group name="Object_101" position={[0, 0, -16.172]}>
                      <mesh
                        name="Cannon_DeckStuff_0"
                        geometry={nodes.Cannon_DeckStuff_0.geometry}
                        material={materials.DeckStuff}
                      />
                    </group>
                  </group>
                  <group
                    name="Cannon005"
                    position={[-25.646, -41.56, -8.636]}
                    rotation={[Math.PI / 2, -1.34, -0.262]}
                    scale={[0.412, 0.412, 0.601]}
                  >
                    <group name="Object_104" position={[0, 0, -16.172]}>
                      <mesh
                        name="Cannon005_DeckStuff_0"
                        geometry={nodes.Cannon005_DeckStuff_0.geometry}
                        material={materials.DeckStuff}
                      />
                    </group>
                  </group>
                  <group
                    name="Cannon006"
                    position={[26.601, -42.405, -8.636]}
                    rotation={[Math.PI / 2, 1.103, -0.262]}
                    scale={[0.412, 0.412, 0.601]}
                  >
                    <group name="Object_107" position={[0, 0, -16.172]}>
                      <mesh
                        name="Cannon006_DeckStuff_0"
                        geometry={nodes.Cannon006_DeckStuff_0.geometry}
                        material={materials.DeckStuff}
                      />
                    </group>
                  </group>
                  <group
                    name="Cannon007"
                    position={[26.856, -7.097, -8.636]}
                    rotation={[1.309, Math.PI / 2, 0]}
                    scale={[0.412, 0.412, 0.601]}
                  >
                    <group name="Object_110" position={[0, 0, -16.172]}>
                      <mesh
                        name="Cannon007_DeckStuff_0"
                        geometry={nodes.Cannon007_DeckStuff_0.geometry}
                        material={materials.DeckStuff}
                      />
                    </group>
                  </group>
                  <group name="Barrel001" position={[-12.457, 48.123, -9.951]}>
                    <mesh
                      name="Barrel001_DeckStuff_0"
                      geometry={nodes.Barrel001_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                  <group
                    name="Bollard007"
                    position={[23.311, -58.916, -10.06]}
                    rotation={[0, 0, 0.262]}
                    scale={[0.397, 0.397, 0.463]}
                  >
                    <mesh
                      name="Bollard007_DeckStuff_0"
                      geometry={nodes.Bollard007_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                  <group
                    name="Bollard008"
                    position={[7.54, -78.913, -3.613]}
                    rotation={[0, 0, 0.262]}
                    scale={[0.397, 0.397, 0.463]}
                  >
                    <mesh
                      name="Bollard008_DeckStuff_0"
                      geometry={nodes.Bollard008_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                  <group
                    name="Bollard009"
                    position={[1.197, -15.336, -13.051]}
                    rotation={[0, 0, 0.262]}
                    scale={[0.397, 0.397, 0.463]}
                  >
                    <mesh
                      name="Bollard009_DeckStuff_0"
                      geometry={nodes.Bollard009_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                  <group
                    name="Bollard010"
                    position={[1.197, 29.115, -8.656]}
                    rotation={[0, 0, 0.262]}
                    scale={[0.397, 0.397, 0.463]}
                  >
                    <mesh
                      name="Bollard010_DeckStuff_0"
                      geometry={nodes.Bollard010_DeckStuff_0.geometry}
                      material={materials.DeckStuff}
                    />
                  </group>
                </group>
                <group
                  name="Ladder002"
                  position={[12.563, 24.368, -48.846]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.044, 2.09, 0.841]}
                >
                  <mesh
                    name="Ladder002_DeckStuff_0"
                    geometry={nodes.Ladder002_DeckStuff_0.geometry}
                    material={materials.DeckStuff}
                  />
                </group>
                <group
                  name="DeckDetailPlank002"
                  position={[-8.081, 21.068, 30.122]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.996, 0.59, 0.881]}
                >
                  <mesh
                    name="DeckDetailPlank002_Poopdeck_0"
                    geometry={nodes.DeckDetailPlank002_Poopdeck_0.geometry}
                    material={materials.Poopdeck}
                  />
                </group>
                <group
                  name="UpperHatch001_lo"
                  position={[-7.377, 21.432, 6.775]}
                  rotation={[-Math.PI / 2, 0, -Math.PI]}
                  scale={[2.037, 1.249, 2.073]}
                >
                  <group name="Object_127" position={[0, -48.397, -23.432]}>
                    <mesh
                      name="UpperHatch001_lo_Poopdeck_0"
                      geometry={nodes.UpperHatch001_lo_Poopdeck_0.geometry}
                      material={materials.Poopdeck}
                    />
                  </group>
                </group>
                <group
                  name="MastsNRigging"
                  position={[-6.849, 97.793, 5.158]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group
                    name="AftMastHoldingRope004"
                    position={[3.133, 114.684, -58.676]}
                  >
                    <mesh
                      name="AftMastHoldingRope004_MastsRigging_0"
                      geometry={
                        nodes.AftMastHoldingRope004_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="AftMastHoldingRope003"
                    position={[-4.91, 85.123, -57.408]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <mesh
                      name="AftMastHoldingRope003_MastsRigging_0"
                      geometry={
                        nodes.AftMastHoldingRope003_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="AftMastEndPulleyRope001"
                    position={[27.707, 90.749, -62.703]}
                  >
                    <mesh
                      name="AftMastEndPulleyRope001_MastsRigging_0"
                      geometry={
                        nodes.AftMastEndPulleyRope001_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="AdtMastTopRope"
                    position={[-0.61, 99.974, 19.413]}
                    rotation={[-0.087, 0, 0]}
                    scale={[0.764, 0.764, 0.569]}
                  >
                    <mesh
                      name="AdtMastTopRope_MastsRigging_0"
                      geometry={nodes.AdtMastTopRope_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="AftMastEndPulleyRope"
                    position={[-12.502, 104.692, -1.596]}
                  >
                    <mesh
                      name="AftMastEndPulleyRope_MastsRigging_0"
                      geometry={
                        nodes.AftMastEndPulleyRope_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidMastRope005"
                    position={[1.254, 97.122, -0.254]}
                    rotation={[-0.249, -0.566, -0.146]}
                    scale={[0.559, 0.337, 0.403]}
                  >
                    <mesh
                      name="MidMastRope005_MastsRigging_0"
                      geometry={nodes.MidMastRope005_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidMastHoldingRope002"
                    position={[2.927, 28.663, -11.81]}
                  >
                    <mesh
                      name="MidMastHoldingRope002_MastsRigging_0"
                      geometry={
                        nodes.MidMastHoldingRope002_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidmastHoldingRope001"
                    position={[-4.267, 0.975, -13.559]}
                    rotation={[0, 0, Math.PI]}
                  >
                    <mesh
                      name="MidmastHoldingRope001_MastsRigging_0"
                      geometry={
                        nodes.MidmastHoldingRope001_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="ForeMastEndPulleyRope"
                    position={[-24.668, -74.325, -27.391]}
                  >
                    <mesh
                      name="ForeMastEndPulleyRope_MastsRigging_0"
                      geometry={
                        nodes.ForeMastEndPulleyRope_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidMastEndPulleyRope"
                    position={[-59.729, 10.282, 16.485]}
                  >
                    <mesh
                      name="MidMastEndPulleyRope_MastsRigging_0"
                      geometry={
                        nodes.MidMastEndPulleyRope_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidMastBoomRope"
                    position={[-65.002, 10.785, 52.382]}
                    rotation={[0.175, -Math.PI / 2, 0]}
                    scale={[0.617, 0.617, 0.523]}
                  >
                    <mesh
                      name="MidMastBoomRope_MastsRigging_0"
                      geometry={nodes.MidMastBoomRope_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="ForeMastSideRigging"
                    position={[-30.041, -57.623, -32.164]}
                  >
                    <mesh
                      name="ForeMastSideRigging_MastsRigging_0"
                      geometry={
                        nodes.ForeMastSideRigging_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="ForeMastBoomRope001"
                    position={[-30.865, -74.615, 8.183]}
                    rotation={[0.175, -Math.PI / 2, 0]}
                    scale={[0.617, 0.617, 0.523]}
                  >
                    <mesh
                      name="ForeMastBoomRope001_MastsRigging_0"
                      geometry={
                        nodes.ForeMastBoomRope001_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="ForeMastHoldingRope"
                    position={[4.86, -60.772, -52.736]}
                  >
                    <mesh
                      name="ForeMastHoldingRope_MastsRigging_0"
                      geometry={
                        nodes.ForeMastHoldingRope_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidMastAttachToEndRope"
                    position={[-33.108, 11.346, 63.031]}
                  >
                    <mesh
                      name="MidMastAttachToEndRope_MastsRigging_0"
                      geometry={
                        nodes.MidMastAttachToEndRope_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="ForeMastAttachtoEndRope"
                    position={[-17.364, -74.758, 18.14]}
                  >
                    <mesh
                      name="ForeMastAttachtoEndRope_MastsRigging_0"
                      geometry={
                        nodes.ForeMastAttachtoEndRope_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="ForeMastToFrontRope"
                    position={[1.136, -104.8, -0.994]}
                  >
                    <mesh
                      name="ForeMastToFrontRope_MastsRigging_0"
                      geometry={
                        nodes.ForeMastToFrontRope_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidMastTopRope"
                    position={[-0.533, 13.767, 66.107]}
                    scale={[1, 1, 0.745]}
                  >
                    <mesh
                      name="MidMastTopRope_MastsRigging_0"
                      geometry={nodes.MidMastTopRope_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidMastRope002"
                    position={[-34.546, -74.579, 7.314]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.559, 0.337, 0.403]}
                  >
                    <mesh
                      name="MidMastRope002_MastsRigging_0"
                      geometry={nodes.MidMastRope002_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="ClimbingRigging"
                    position={[-19.654, 17.934, 3.204]}
                  >
                    <mesh
                      name="ClimbingRigging_MastsRigging_0"
                      geometry={nodes.ClimbingRigging_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidMastRope001"
                    position={[-67.413, 10.858, 51.587]}
                    rotation={[0, -1.571, 0]}
                    scale={[0.559, 0.337, 0.403]}
                  >
                    <mesh
                      name="MidMastRope001_MastsRigging_0"
                      geometry={nodes.MidMastRope001_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="Sail002"
                    position={[-0.808, -76.456, 2.019]}
                    rotation={[1.833, 0, 0]}
                    scale={[0.719, 0.448, 0.859]}
                  >
                    <mesh
                      name="Sail002_MastsRigging_0"
                      geometry={nodes.Sail002_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="Sail001"
                    position={[-4.654, 98.172, -0.837]}
                    rotation={[1.747, -0.558, -0.882]}
                    scale={[0.837, 0.522, 1]}
                  >
                    <mesh
                      name="Sail001_MastsRigging_0"
                      geometry={nodes.Sail001_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="AnchorRope"
                    position={[-11.471, -55.772, -70.456]}
                  >
                    <mesh
                      name="AnchorRope_MastsRigging_0"
                      geometry={nodes.AnchorRope_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="ForeMastBoom"
                    position={[0, -74.593, 8.126]}
                    rotation={[0, 1.571, 0]}
                    scale={[0.519, 0.519, 0.523]}
                  >
                    <group name="Object_179" position={[0, 0, -66.613]}>
                      <mesh
                        name="ForeMastBoom_MastsRigging_0"
                        geometry={nodes.ForeMastBoom_MastsRigging_0.geometry}
                        material={materials.MastsRigging}
                      />
                    </group>
                  </group>
                  <group
                    name="AftMastBoom"
                    position={[0, 97.775, 2.918]}
                    rotation={[2.907, 0.569, -2.723]}
                    scale={[0.424, 0.424, 0.577]}
                  >
                    <group name="Object_182" position={[0, 0, -66.613]}>
                      <mesh
                        name="AftMastBoom_MastsRigging_0"
                        geometry={nodes.AftMastBoom_MastsRigging_0.geometry}
                        material={materials.MastsRigging}
                      />
                    </group>
                  </group>
                  <group
                    name="MidBoom"
                    position={[0, 10.775, 52.325]}
                    rotation={[0, 1.571, 0]}
                    scale={[0.519, 0.519, 1.037]}
                  >
                    <group name="Object_185" position={[0, 0, -66.613]}>
                      <mesh
                        name="MidBoom_MastsRigging_0"
                        geometry={nodes.MidBoom_MastsRigging_0.geometry}
                        material={materials.MastsRigging}
                      />
                    </group>
                  </group>
                  <group
                    name="FlagPole"
                    position={[-0.527, 106.835, -50.793]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[0.092, 0.065, 0.271]}
                  >
                    <mesh
                      name="FlagPole_MastsRigging_0"
                      geometry={nodes.FlagPole_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="FrontPoker"
                    position={[1.904, -54.1, -67.603]}
                    rotation={[1.028, 0, 0]}
                    scale={[0.278, 0.195, 0.819]}
                  >
                    <mesh
                      name="FrontPoker_MastsRigging_0"
                      geometry={nodes.FrontPoker_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="AftMast"
                    position={[-0.592, 94.755, -57.813]}
                    rotation={[-0.068, 0, -Math.PI]}
                    scale={[0.31, 0.31, 0.765]}
                  >
                    <mesh
                      name="AftMast_MastsRigging_0"
                      geometry={nodes.AftMast_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidMast"
                    position={[-0.592, 13.725, -77.11]}
                    scale={[0.585, 0.585, 1.42]}
                  >
                    <mesh
                      name="MidMast_MastsRigging_0"
                      geometry={nodes.MidMast_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="Foremast"
                    position={[-0.592, -60.843, -67.688]}
                    rotation={[0.155, 0, 0]}
                    scale={[0.31, 0.31, 0.915]}
                  >
                    <mesh
                      name="Foremast_MastsRigging_0"
                      geometry={nodes.Foremast_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="AftMastBoomRope001"
                    position={[-18.429, 104.486, 30.878]}
                    rotation={[-0.243, -0.575, -0.205]}
                    scale={[0.572, 0.572, 0.486]}
                  >
                    <mesh
                      name="AftMastBoomRope001_MastsRigging_0"
                      geometry={
                        nodes.AftMastBoomRope001_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="Pulley001"
                    position={[1.915, -118.464, -14.893]}
                    rotation={[0.539, 0.226, -0.133]}
                  >
                    <mesh
                      name="Pulley001_MastsRigging_0"
                      geometry={nodes.Pulley001_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="Pulley025"
                    position={[-19.306, 105.935, 26.794]}
                    rotation={[-2.678, -1.376, -2.67]}
                  >
                    <mesh
                      name="Pulley025_MastsRigging_0"
                      geometry={nodes.Pulley025_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="Pulley026"
                    position={[20.911, 89.714, -34.2]}
                    rotation={[-3.128, -1.223, 3.14]}
                  >
                    <mesh
                      name="Pulley026_MastsRigging_0"
                      geometry={nodes.Pulley026_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="ForeMastTopRope"
                    position={[-0.509, -75.468, 25.132]}
                    rotation={[0.132, 0, 0]}
                    scale={[0.728, 0.728, 0.542]}
                  >
                    <mesh
                      name="ForeMastTopRope_MastsRigging_0"
                      geometry={nodes.ForeMastTopRope_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidMast001"
                    position={[-0.592, 15.089, 71.296]}
                    scale={[0.037, 0.037, 0.154]}
                  >
                    <mesh
                      name="MidMast001_MastsRigging_0"
                      geometry={nodes.MidMast001_MastsRigging_0.geometry}
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidMastSailEndRope"
                    position={[-59.729, 34.939, 16.485]}
                  >
                    <mesh
                      name="MidMastSailEndRope_MastsRigging_0"
                      geometry={
                        nodes.MidMastSailEndRope_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                  <group
                    name="MidBoom001"
                    position={[-1.528, 5.152, -31.73]}
                    rotation={[1.571, 1.542, -1.571]}
                    scale={[0.519, 0.519, 0.872]}
                  >
                    <group name="Object_212" position={[0, 0, -66.613]}>
                      <mesh
                        name="MidBoom001_MastsRigging_0"
                        geometry={nodes.MidBoom001_MastsRigging_0.geometry}
                        material={materials.MastsRigging}
                      />
                    </group>
                  </group>
                  <group
                    name="MidMastBoomRope001"
                    position={[-55.32, 6.668, -31.73]}
                    rotation={[-Math.PI / 2, -1.54, -1.745]}
                    scale={[0.617, 0.617, 0.436]}
                  >
                    <mesh
                      name="MidMastBoomRope001_MastsRigging_0"
                      geometry={
                        nodes.MidMastBoomRope001_MastsRigging_0.geometry
                      }
                      material={materials.MastsRigging}
                    />
                  </group>
                </group>
                <group
                  name="Barrel002"
                  position={[-20.448, 25.052, -70.52]}
                  rotation={[-Math.PI / 2, 0, 1.004]}
                >
                  <mesh
                    name="Barrel002_DeckStuff_0"
                    geometry={nodes.Barrel002_DeckStuff_0.geometry}
                    material={materials.DeckStuff}
                  />
                </group>
                <group
                  name="Barrel003"
                  position={[-27.622, 25.052, -70.52]}
                  rotation={[-Math.PI / 2, 0, 0.72]}
                >
                  <mesh
                    name="Barrel003_DeckStuff_0"
                    geometry={nodes.Barrel003_DeckStuff_0.geometry}
                    material={materials.DeckStuff}
                  />
                </group>
                <group
                  name="Barrel004"
                  position={[-28.455, 25.052, -60.826]}
                  rotation={[-Math.PI / 2, 0, 1.786]}
                >
                  <mesh
                    name="Barrel004_DeckStuff_0"
                    geometry={nodes.Barrel004_DeckStuff_0.geometry}
                    material={materials.DeckStuff}
                  />
                </group>
                <group
                  name="Barrel005"
                  position={[11.672, 25.052, -64.28]}
                  rotation={[-Math.PI / 2, 0, -1.632]}
                >
                  <mesh
                    name="Barrel005_DeckStuff_0"
                    geometry={nodes.Barrel005_DeckStuff_0.geometry}
                    material={materials.DeckStuff}
                  />
                </group>
                <group
                  name="Barrel006"
                  position={[9.487, 25.052, -71.737]}
                  rotation={[-Math.PI / 2, 0, 0.154]}
                >
                  <mesh
                    name="Barrel006_DeckStuff_0"
                    geometry={nodes.Barrel006_DeckStuff_0.geometry}
                    material={materials.DeckStuff}
                  />
                </group>
                <group
                  name="SailAnim001"
                  position={[-8.276, 107.762, -5.242]}
                  scale={[0.987, 0.695, 0.859]}
                >
                  <mesh
                    name="0"
                    geometry={nodes["0"].geometry}
                    material={materials.Sail}
                    morphTargetDictionary={nodes["0"].morphTargetDictionary}
                    morphTargetInfluences={nodes["0"].morphTargetInfluences}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/ship/ship.glb");
