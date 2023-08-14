import { useProgress } from "@react-three/drei"
import { useEffect } from "react"
import { useStateContext } from '../context'

const LoadingScreen = () => {
  const progress = useProgress()
  const { appLoaded, setAppLoaded } = useStateContext()

  useEffect(() => {
    document.body.classList.add("no-scroll")
    if (progress.progress === 100) {
      setTimeout(() => {
        setAppLoaded(true)
        document.body.classList.remove("no-scroll")
      }, 100)
    }
    return () => {
      document.body.classList.remove("no-scroll")
    }
  }, [progress])
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000
      flex items-center justify-center bg-black-100 
      ${appLoaded ? "hidden" : "opacity-100"}`}
    >
      <div className="text-5xl md:text-9xl font-bold text-[#D9017A] relative">
        <div
          className="absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500"
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
