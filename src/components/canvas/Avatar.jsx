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

useGLTF.preload("/models/desktop_pc/desktop_pc.glb")
useFBX.preload("/models/avatar/model.fbx")
defaultAnimations.forEach((ani) => useFBX.preload(`animations/${ani}.fbx`))

const Computers = () => {
	const computer = useGLTF("/models/desktop_pc/desktop_pc.glb")
	const { isMobile } = useStateContext()
	return (
		<mesh>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.35 : 0.6}
				position={isMobile ? [0.5, -4.0, -2.2] : [-1.9, -3.1, -1.04]}
				rotation={isMobile ? [0.0, -1.56, 0.02] : [-0.2, -1.56, -0.18]}
			/>
		</mesh>
	)
}

const Avatar = () => {
	const { isAppLoaded, isMobile } = useStateContext()
	const group = useRef()
	const obj = useFBX("/models/avatar/model.fbx")
	const [animation, setAnimation] = useState("Waving")

	const animations = defaultAnimations.map(
		(ani) => useFBX(`animations/${ani}.fbx`).animations
	)
	const animationClips = animations.flat()
	animationClips.forEach((ani, i) => (ani.name = defaultAnimations[i]))
	const { actions } = useAnimations(animationClips, group)
	// console.log(actions)

	useEffect(() => {
		if (isAppLoaded)
			setTimeout(() => {
				setAnimation("Standing")
			}, actions["Waving"]?._clip.duration * 1000)
	}, [isAppLoaded])

	useEffect(() => {
		actions[animation]?.reset().fadeIn(0.5).play()
		return () => {
			actions[animation]?.reset().fadeOut(0.5)
		}
	}, [animation])

	// useFrame((state) => {
	//   if (animation === "Waving") {
	//     // group.current?.getObjectByName("Head").lookAt(state.camera.position)
	//     // group.current?.getObjectByName("Neck").lookAt(state.camera.position)
	//   }
	// })

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

const PlaygroundAvatar = ({ animation, redo }) => {
	const defaultPosition = [0, -3.2, -0.9]
	const defaultRotation = [0, 0, 0]

	const group = useRef()
	const obj = useFBX("models/avatar/model.fbx")
	const [position, setPosition] = useState(defaultPosition)
	const [rotation, setRotation] = useState(defaultRotation)
	const { isMobile } = useStateContext()

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

const AvatarCanvas = ({ isAppLoaded, animation, playgroundActive, redo }) => {
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
			<hemisphereLight intensity={1.9} color={"purple"} groundColor="black" />
			<ambientLight intensity={2.0} color={"white"} />
			{/* <directionalLight intensity={2.3} color={"white"} position={[-1, 5, 2]} /> */}
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
				intensity={0.1}
				environment={{ files: "enviroments/colorful_studio_1k.hdr" }}
				adjustCamera={false}
				environmentIntensity={0.1}
			></Stage>
			{playgroundActive ? (
				<PlaygroundAvatar animation={animation} redo={redo} />
			) : (
				<Suspense fallback={<CanvasLoader />}>
					<group rotation={isTouchScreen ? [-0.26, 0, 0] : [0, 0, 0]}>
						<Avatar isAppLoaded={isAppLoaded} />
						<Computers />
					</group>
				</Suspense>
			)}
			<Preload all />
		</Canvas>
	)
}

export default AvatarCanvas
