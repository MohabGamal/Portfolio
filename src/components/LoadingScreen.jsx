import { useProgress } from "@react-three/drei"
import { useEffect } from "react"
import { useStateContext } from "../context"

const LoadingScreen = () => {
	const progress = useProgress()
	const { isAppLoaded, setIsAppLoaded } = useStateContext()

	useEffect(() => {
		document.body.classList.add("no-scroll")
		// console.log(progress.loaded, progress.progress)
		setIsAppLoaded(false)
		if (progress.progress === 100) {
			if (progress.loaded > 99) { // hard coded
				setTimeout(() => {
					setIsAppLoaded(true)
					document.body.classList.remove("no-scroll")
				}, 250)
			}
		}
		return () => {
			document.body.classList.remove("no-scroll")
		}
	}, [progress])

	return (
		<div
			className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000
      flex items-center justify-center bg-black-100 
      ${isAppLoaded ? "hidden" : "opacity-100"}`}
		>
			<div className="text-5xl md:text-9xl font-bold text-[#D9017A] relative">
				<div
					className="absolute top-0 left-0 overflow-hidden truncate transition-all duration-500 text-clip"
					style={{
						width: `${progress.progress}%`,
					}}
				>
					Mohab Gamal
				</div>
				<div className="opacity-50">Mohab Gamal</div>
			</div>
		</div>
	)
}

export default LoadingScreen
