import React, { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei"
import CanvasLoader from "../Loader"
import { DoubleSide } from "three"
import { technologies } from "../../constants"

technologies.forEach((t) => {
  useTexture.preload(t.icon)
  if (t.pairTechnologyIcon) {
    useTexture.preload(t.pairTechnologyIcon)
  }
})

const Ball = ({ imgUrl, backImgUrl }) => {
  const [decal] = useTexture([imgUrl])
  let decalBack
  if (backImgUrl) [decalBack] = useTexture([backImgUrl])

  const [flip, setFlip] = useState(false)

  return (
    <Float
      speed={2.25}
      rotationIntensity={1}
      floatIntensity={3}
      onClick={() => {
        setFlip(!flip)
      }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[0.05, 0.07, 0.07]} />
      <directionalLight position={[0.05, 0.07, -0.07]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        rotation={backImgUrl && flip ? [0, Math.PI, 0] : [0, 0, 0]} // Rotate to the backside when isBackside is true
      >
        <dodecahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.9}
          map={decal}
          flatShading
        />
        {decalBack && (
          <Decal
            position={[0, 0, -1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={0.9}
            map={decalBack}
            flatShading
            side={DoubleSide}
          />
        )}
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ imgUrl, backImgUrl }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      onMouseUp={(e) => (e.target.style.cursor = "grab")}
      onMouseDown={(e) => (e.target.style.cursor = "grabbing")}
      onMouseEnter={(e) => (e.target.style.cursor = "grab")}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // autoRotate={true}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={imgUrl} backImgUrl={backImgUrl} />
      </Suspense>

      {/* <Preload all /> */}
    </Canvas>
  )
}

export default BallCanvas
