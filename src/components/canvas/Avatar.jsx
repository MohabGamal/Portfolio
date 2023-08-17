import { Suspense, useEffect, useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useStateContext } from "../../context"
import {
  OrbitControls,
  Preload,
  useGLTF,
  useFBX,
  useAnimations,
  Stage,
} from "@react-three/drei"

import CanvasLoader from "../Loader"
import {
  defaultAnimations,
  isTouchScreen,
  playgroundAnimations,
  repeatedOnceAnimations,
} from "../../constants"

useGLTF.preload("models/desktop_pc/scene.gltf")
useFBX.preload("models/avatar/model.fbx")
defaultAnimations.forEach((ani) => useFBX.preload(`animations/${ani}.fbx`))

const Computers = ({ isMobile }) => {
  const computer = useGLTF("models/desktop_pc/scene.gltf")

  const screenMaterials = [
    "Material.074_30",
    "Material.074_81",
    "Material.074_82",
  ]
  const [screenMaterial, setScreenMaterial] = useState(0)
  setTimeout(() => {
    setScreenMaterial((screenMaterial + 1) % screenMaterials.length)
  }, 2000)
  computer.nodes["MY_SCREEN_MY_SCREEN_0"].material =
    computer.materials[screenMaterials[screenMaterial]]
  computer.nodes["gigabyte-logo_gigabyte-logo_0"].material =
    computer.materials["Material.074"]
  computer.nodes["gigabyte-logo001_gigabyte-logo_0"].material =
    computer.materials["Material.074"]
  computer.nodes["Cube004_Material002_0"].material =
    computer.materials["Material.074"]
  return (
    <mesh>
      {/* <ambientLight intensity={1} color={0xffffff} /> */}
      {/* <directionalLight intensity={1} color={0xffffff} position={[1, 1, 1]} /> */}
      {/* <pointLight intensity={1} color={0xffffff} position={[0, 5, -5]} /> */}
      {/* <pointLight intensity={1} color={0xffffff} castShadow={true}/>
      <hemisphereLight intensity={3} color={0xffb3ff} groundColor='white' /> */}
      {/* <mesh name="MY_SCREEN_MY_SCREEN_0" geometry={computer.nodes.MY_SCREEN_MY_SCREEN_0.geometry} material={computer.materials[screenMaterials[screenMaterial]]} position={[-136.177, 300.132, 300.405]} rotation={[-Math.PI / 2, 1.501, Math.PI / 2]} scale={[331.621, 348.065, 331.621]} /> */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.6}
        position={isMobile ? [0.5, -4.0, -2.2] : [-1.9, -3.1, -1.04]}
        rotation={isMobile ? [0.0, -1.56, 0.02] : [-0.2, -1.56, -0.18]}
      />
    </mesh>
  )
}

const Avatar = ({ isMobile }) => {
  const { appLoaded } = useStateContext()
  const group = useRef()
  const obj = useFBX("models/avatar/model.fbx")
  const [animation, setAnimation] = useState("Waving")

  const animations = defaultAnimations.map(
    (ani) => useFBX(`animations/${ani}.fbx`).animations
  )
  const animationClips = animations.flat()
  animationClips.forEach((ani, i) => (ani.name = defaultAnimations[i]))
  const { actions } = useAnimations(animationClips, group)
  // console.log(actions)

  useEffect(() => {
    if (appLoaded)
      setTimeout(() => {
        setAnimation("Standing")
      }, actions["Waving"]?._clip.duration * 1000)
  }, [appLoaded])

  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play()
    return () => {
      actions[animation]?.reset().fadeOut(0.5)
    }
  }, [animation])

  useFrame((state) => {
    if (animation === "Waving") {
      group.current?.getObjectByName("Head").lookAt(state.camera.position)
    }
  })

  // console.log(animation)
  const avatarClickHandler = () => {
    setAnimation("Clapping")
    setTimeout(() => {
      setAnimation("Standing")
    }, actions["Clapping"]?._clip.duration * 2000)
  }

  return (
    <group
      ref={group}
      onClick={avatarClickHandler}
      onMouseDown={avatarClickHandler}
    >
      <mesh>
        <primitive
          object={obj}
          scale={isMobile ? 2 : 6.5}
          position={isMobile ? [0.1, -2, -2.2] : [4.5, -10.8, -2.5]}
          rotation={isMobile ? [0.2, 0, -0.01] : [0.2, -0.4, -0.01]}
        />
      </mesh>
    </group>
  )
}

const PlaygroundAvatar = ({ isMobile, animation, redo }) => {
  const defaultPosition = [0, -3.2, -0.9]
  const defaultRotation = [0, 0, 0]

  const group = useRef()
  const obj = useFBX("models/avatar/model.fbx")
  const [position, setPosition] = useState(defaultPosition)
  const [rotation, setRotation] = useState(defaultRotation)

  const animations = playgroundAnimations.map(
    (ani) => useFBX(`animations/playground/${ani}.fbx`).animations
  )
  const animationClips = animations.flat()
  animationClips.forEach((ani, i) => (ani.name = playgroundAnimations[i]))
  const { actions } = useAnimations(animationClips, group)

  useEffect(() => {
    setPosition(defaultPosition)
    setRotation(defaultRotation)

    if (actions[animation]) {
      if (repeatedOnceAnimations.includes(animation)) {
        actions[animation].repetitions = 1
        actions[animation].clampWhenFinished = true
      }
      if (animation === "Knocked Unconscious") {
        setRotation([0, -3, 0])
      }
      if (animation === "Fliping") {
        setPosition([-0.1, -3.2, -0.9])
      }
      if (animation === "Crashing Screen") {
        setPosition([0.8, -3.5, -3.1])
      }
      if (animation === "Ninja") {
        setPosition([0, -3.4, -12.5])
      }
      if (animation === "Kicked in Groin") {
        setPosition([0, -3.4, -5.5])
      }
      if (animation === "Dying") {
        setPosition([0, -3.4, -5.5])
      }
    }

    actions[animation]?.reset().fadeIn(0.5).play()
    return () => {
      actions[animation]?.reset().fadeOut(0.5)
    }
  }, [animation, redo])

  // useFrame((state, delta) => {
  //   // group.current?.getObjectByName('Head').lookAt(state.camera.position)
  //   // group.current?.getObjectByName('Spine').lookAt(state.camera.position)
  // })

  return (
    <group ref={group}>
      <mesh>
        <primitive
          object={obj}
          scale={isMobile ? 2.1 : 2.9}
          position={position}
          rotation={rotation}
        />
      </mesh>
    </group>
  )
}

const AvatarCanvas = ({ appLoaded, animation, playgroundActive, redo }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)")

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])
  
  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 2, 7], fov: 50 }}
      gl={{ preserveDrawingBuffer: true }}
      onMouseUp={(e) => (e.target.style.cursor = "grab")}
      onMouseDown={(e) => (e.target.style.cursor = "grabbing")}
      onMouseEnter={(e) => (e.target.style.cursor = "grab")}
    >
      <hemisphereLight intensity={1.7} color={"white"} groundColor="black" />
      <ambientLight intensity={1.3} color={"white"} />
      {!isTouchScreen && (
        <OrbitControls
          enableZoom={false}
          rotateSpeed={0.4}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      )}
      <Stage
        preset="rembrandt"
        intensity={0.017}
        environment={{ files: "enviroments/venice_sunset_1k.hdr" }}
        adjustCamera={false}
      ></Stage>
      {playgroundActive ? (
        <PlaygroundAvatar
          isMobile={isMobile}
          animation={animation}
          redo={redo}
        />
      ) : (
        <Suspense fallback={<CanvasLoader />}>
          <group rotation={isTouchScreen ? [-0.26, 0, 0] : [0,0,0]}>
            <Avatar isMobile={isMobile} appLoaded={appLoaded} />
            <Computers isMobile={isMobile} />
          </group>
        </Suspense>
      )}
      <Preload all />
    </Canvas>
  )
}

export default AvatarCanvas
