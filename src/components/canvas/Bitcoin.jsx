import { Suspense, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

useGLTF.preload('models/bitcoin/scene.gltf')

const Bitcoin = () => {
  const bitcoin = useGLTF('models/bitcoin/scene.gltf')

  return (
    <primitive
      object={bitcoin.scene}
      scale={0.062}
      position-y={-2.7}
    />
  )
}

const BitcoinCanvas = (props) => {
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
          enableZoom={false}
          rotateSpeed={3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          //   minDistance={0.8} maxDistance={1}
        />
        <Stage
          controls={ref}
          preset="soft"
          intensity={0.04}
          environment={{ files: 'enviroments/venice_sunset_1k.hdr' }}
          adjustCamera={false}
        ></Stage>
        {/* <Sky sunPosition={[100, 20, 100]} />
        <ContactShadows opacity={0.4} width={10} height={10} blur={1} far={10} />
        <Stage environment={{ files: "./enviroments/venice_sunset_1k.hdr"}} center></Stage> */}
        <Bitcoin />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default BitcoinCanvas
