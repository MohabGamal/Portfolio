import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Preload, useTexture } from "@react-three/drei"
import CanvasLoader from "../Loader"
import * as THREE from 'three';


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
			onCreated={(state) => {
				state.gl.toneMapping = THREE.ACESFilmicToneMapping
				state.gl.outputColorSpace = THREE.LinearSRGBColorSpace
			}}
		>
			<directionalLight position={[-2, 0.5, 1.5]} intensity={0.7} />
			<directionalLight position={[2, -0.5, -1.5]} intensity={0.1} />
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate={true}
					enableZoom={false}
					rotateSpeed={3}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={0}
				/>
				<Earth />

				<Preload all />
			</Suspense>
		</Canvas>
	)
}

const Earth = () => {
	const earthGroup = useRef()
	// Load textures
	const [map, bumpMap, specularMap, lightsMap, cloudsMap, cloudsAlphaMap] =
		useTexture([
			"/models/earth/textures/00_earthmap1k.webp",
			"/models/earth/textures/01_earthbump1k.webp",
			"/models/earth/textures/02_earthspec1k.webp",
			"/models/earth/textures/03_earthlights1k.webp",
			"/models/earth/textures/04_earthcloudmap.webp",
			"/models/earth/textures/05_earthcloudmaptrans.webp",
		])
	const geometry = new THREE.IcosahedronGeometry(1, 12)

	useFrame(() => {
		if (earthGroup.current) {
			earthGroup.current.rotation.y += 0.002
		}
	})
  
	return (
		<group ref={earthGroup} scale={ 2} rotation={[0, 0, (-23.4 * Math.PI) / 180]}>
			{/* Earth */}
			<mesh geometry={geometry}>
				<meshPhongMaterial
					map={map}
					bumpMap={bumpMap}
					bumpScale={0.04}
					specularMap={specularMap}
				/>
			</mesh>
			{/* Lights */}
			<mesh geometry={geometry}>
				<meshBasicMaterial map={lightsMap} blending={THREE.AdditiveBlending} />
			</mesh>
			{/* Clouds */}
			<mesh geometry={geometry} scale={[1.003, 1.003, 1.003]}>
				<meshStandardMaterial
					map={cloudsMap}
					transparent
					opacity={0.8}
					blending={THREE.AdditiveBlending}
					alphaMap={cloudsAlphaMap}
				/>
			</mesh>
			{/* Fresnel Glow */}
			<mesh geometry={geometry} scale={[1.01, 1.01, 1.01]}>
				<primitive attach="material" object={getFresnelMat()} />
			</mesh>
		</group>
	)
}

function getFresnelMat({ rimHex = '#f4eef7', facingHex = 0x000000 } = {}) {
  const uniforms = {
    color1: { value: new THREE.Color(rimHex) },
    color2: { value: new THREE.Color(facingHex) },
    fresnelBias: { value: 0.1 },
    fresnelScale: { value: 1.0 },
    fresnelPower: { value: 4.0 },
  };

  const vs = `
  uniform float fresnelBias;
  uniform float fresnelScale;
  uniform float fresnelPower;
  
  varying float vReflectionFactor;
  
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
    vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
    vec3 I = worldPosition.xyz - cameraPosition;
  
    vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
  
    gl_Position = projectionMatrix * mvPosition;
  }
  `;

  const fs = `
  uniform vec3 color1;
  uniform vec3 color2;
  
  varying float vReflectionFactor;
  
  void main() {
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
  }
  `;

  const fresnelMat = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vs,
    fragmentShader: fs,
    transparent: true,
    blending: THREE.AdditiveBlending,
  });

  return fresnelMat;
}


export default EarthCanvas