import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

useGLTF.preload("models/hacker_laptop/scene.gltf")

const Console = () => {
  const consoleModel = useGLTF("models/hacker_laptop/scene.gltf")
  const ref = useRef()

  return (
    <primitive
      ref={ref}
      object={consoleModel.scene}
      scale={0.00066}
      position-y={-0.7}
      position-x={0.12}
      //   position-z={-1.5}
      // rotation-x={0.8}
      rotation-y={-1.5}
      rotation-z={-0.18}
      // rotation={[0.3, -1.55, 0]}
    />
  )
}

const ConsoleCanvas = (props) => {
  const ref = useRef()

  return (
    <Canvas
      {...props}
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 25,
        near: 0.1,
        far: 50,
      }}
      onMouseUp={(e) => (e.target.style.cursor = "grab")}
      onMouseDown={(e) => (e.target.style.cursor = "grabbing")}
      onMouseEnter={(e) => (e.target.style.cursor = "grab")}
    >
      <directionalLight intensity={2.3} color={"white"} position={[-1, 5, 2]} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          controls={ref}
          autoRotate={false}
          enableZoom={false}
          rotateSpeed={3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          //   minDistance={0.8} maxDistance={1}
        />
        {/* <Sky></Sky> */}
        {/* <Stage
          controls={ref}
          preset="rembrandt"
          intensity={0.002}
          environment={{ files: "enviroments/colorful_studio_1k.hdr" }}
          //   center={true}
          adjustCamera={false}
        ></Stage> */}
        <Console />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default ConsoleCanvas
