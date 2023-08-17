import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

useGLTF.preload("models/planet/scene.gltf")

const Earth = () => {
  const earth = useGLTF("models/planet/scene.gltf")

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
      rotation={[-0.05, -0.2, 0.4]}
    />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
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
          autoRotate={true}
          enableZoom={false}
          rotateSpeed={3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />
        {/* <Sky sunPosition={[100, 20, 100]} />
        <ContactShadows opacity={0.4} width={10} height={10} blur={1} far={10} />
        <Stage environment={{ files: "venice_sunset_1k.hdr"}} center></Stage> */}
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
