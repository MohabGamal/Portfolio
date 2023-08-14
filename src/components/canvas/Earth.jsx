import { Suspense, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import {
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei"

import CanvasLoader from "../Loader"

useGLTF.preload('models/planet/scene.gltf');
 
const Earth = ({ isXlarge }) => {
  const earth = useGLTF('models/planet/scene.gltf')
  return (
    <primitive
      object={earth.scene}
      scale={isXlarge ? 2 : 3.2}
      position-y={0}
      rotation-y={0}
      rotation={[-0.05, -0.2, 0.4]}
    />
  )
}

const EarthCanvas = () => {
  const [isXlarge, setIsXlarge] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1280px)")

    // Set the initial value of the `isMobile` state variable
    setIsXlarge(!mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsXlarge(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [isXlarge])
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
          minPolarAngle={Math.PI / 2}
        />
        {/* <Sky sunPosition={[100, 20, 100]} />
        <ContactShadows opacity={0.4} width={10} height={10} blur={1} far={10} />
        <Stage environment={{ files: "venice_sunset_1k.hdr"}} center></Stage> */}
        <Earth isXlarge={isXlarge} />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas
