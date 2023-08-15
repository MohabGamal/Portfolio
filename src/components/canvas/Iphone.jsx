import React, { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

useGLTF.preload("models/iphone/model.gltf")

const Iphone = () => {
  const { nodes, materials } = useGLTF("models/iphone/model.gltf")
  const group = useRef()
  return (
    <group ref={group} dispose={null}>
      <group position={[0, 0.3, 0]} scale={1.6}>
        <mesh
          geometry={nodes.Circle038.geometry}
          material={nodes.Circle038.material}
        />
        <mesh
          geometry={nodes.Circle038_1.geometry}
          material={materials["Front.001"]}
        />
        <mesh
          geometry={nodes.Circle038_2.geometry}
          material={nodes.Circle038_2.material}
        />
        <mesh
          geometry={nodes.Circle038_3.geometry}
          material={materials["BackGrey.001"]}
        />
        <mesh
          geometry={nodes.Circle038_4.geometry}
          material={materials["Rubber.001"]}
        />
        <mesh
          geometry={nodes.AntennaLineBottom001.geometry}
          material={nodes.AntennaLineBottom001.material}
          position={[0, -2.68, 0]}
        />
        <mesh
          geometry={nodes.AntennaLineTop001.geometry}
          material={nodes.AntennaLineTop001.material}
          position={[0, 0.02, 0]}
        />
        <mesh
          geometry={nodes.AppleLogo001.geometry}
          material={materials["AppleLogo.001"]}
          position={[0.17, 0.52, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraBottomLens001.geometry}
          material={nodes.BackCameraBottomLens001.material}
          position={[0.7, 0.88, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraP1001.geometry}
          material={materials["Black.015"]}
          position={[0.7, 1.03, -0.09]}
        />
        <mesh
          geometry={nodes.BackCameraBottomGreyRing001.geometry}
          material={nodes.BackCameraBottomGreyRing001.material}
          position={[0.7, 0.88, -0.09]}
        />
        <mesh
          geometry={nodes.BackCameraBottomGreyRing001.geometry}
          material={nodes.BackCameraBottomGreyRing001.material}
          position={[0.7, 1.03, -0.09]}
        />
        <mesh
          geometry={nodes.BackCameraTopLens001.geometry}
          material={nodes.BackCameraTopLens001.material}
          position={[0.695, 1.03, -0.09]}
        />
        <mesh
          geometry={nodes.BackCameraTopLens001.geometry}
          material={nodes.BackCameraTopLens001.material}
          position={[0.7, 1.18, -0.08]}
        />
        <mesh
          geometry={nodes.FrontCameraContainer001.geometry}
          material={materials["FrontCameraBlack.002"]}
          position={[0.34, 1.32, 0.08]}
        />
        <mesh
          geometry={nodes.FrontSpeakerBG001.geometry}
          material={materials["FrontSpeaker.001"]}
          position={[0.16, 1.32, 0.08]}
        />
        <mesh
          geometry={nodes.CameraBump001.geometry}
          material={nodes.CameraBump001.material}
          position={[0.7, 1.04, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraTopGreyRing001.geometry}
          material={nodes.BackCameraTopGreyRing001.material}
          position={[0.7, 1.18, -0.09]}
        />
        <mesh
          geometry={nodes.MuteSwitch001.geometry}
          material={nodes.MuteSwitch001.material}
          position={[-0.65, 0.92, 0.01]}
        />
        <mesh
          geometry={nodes.iPhoneLogo001.geometry}
          material={materials["iPhoneLogo.001"]}
          position={[0.2, -1.18, -0.08]}
        />
        <group position={[0.97, 0.56, 0]}>
          <mesh
            geometry={nodes.Circle032.geometry}
            material={nodes.Circle032.material}
          />
          <mesh
            geometry={nodes.Circle032_1.geometry}
            material={nodes.Circle032_1.material}
          />
        </group>
        <group position={[0.98, -0.04, 0]}>
          <mesh
            geometry={nodes.Circle031.geometry}
            material={materials["Black.014"]}
          />
          <mesh
            geometry={nodes.Circle031_1.geometry}
            material={nodes.Circle031_1.material}
          />
        </group>
        <mesh
          geometry={nodes.VolumeButtons001.geometry}
          material={nodes.VolumeButtons001.material}
          position={[-0.66, 0.21, 0]}
        />
        <mesh
          geometry={nodes.SCREEN.geometry}
          material={materials["Display.002"]}
        />
      </group>
    </group>
  )
}

const IphoneCanvas = (props) => {
  const ref = useRef()

  return (
    <Canvas
      {...props}
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onMouseUp={(e) => (e.target.style.cursor = "grab")}
      onMouseDown={(e) => (e.target.style.cursor = "grabbing")}
      onMouseEnter={(e) => (e.target.style.cursor = "grab")}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          controls={ref}
          autoRotate={true}
          autoRotateSpeed={3}
          enableZoom={true}
          rotateSpeed={3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          //   minDistance={0.8} maxDistance={1}
        />
        <Stage
          controls={ref}
          preset="rembrandt"
          intensity={1}
          environment={{ files: "enviroments/venice_sunset_1k.hdr" }}
          adjustCamera={false}
        ></Stage>

        <Iphone />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default IphoneCanvas
