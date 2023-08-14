import { useState, useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Points,
  PointMaterial,
  Preload,
} from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"
import CanvasLoader from "../Loader"

const Stars = (props) => {
  const ref = useRef()
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.1 })
  )

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / -100
    ref.current.rotation.y -= delta / 100
    // ref.current.rotation.z -= delta / 100
    // console.log(delta)
  })

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<CanvasLoader />}>
          <Stars />
          {/* <NeonStripe /> */}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}




export default StarsCanvas
