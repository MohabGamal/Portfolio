import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

useGLTF.preload('models/carbon_server_console/scene.gltf')

const Console = () => {
  const console = useGLTF('models/carbon_server_console/scene.gltf')
  const ref = useRef()

  return (
    <primitive
      ref={ref}
      object={console.scene}
      scale={2.362}
      position-y={0.4}
      position-x={1.9}
      //   position-z={-1.5}
      rotation-y={0}
      //   rotation-z={0.1}
      //   rotation={[0, 0, 0]}
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
        {/* <Stage
          controls={ref}
          preset="soft"
          intensity={3.04}
          environment={{ files: "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/dikhololo/dikhololo_night_1k.hdr" }}
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
