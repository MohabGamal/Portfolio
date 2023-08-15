import { useProgress } from "@react-three/drei"
import { useEffect } from "react"
import { useStateContext } from "../context"

const LoadingScreen = () => {
  const progress = useProgress()
  const { appLoaded, setAppLoaded } = useStateContext()
  console.log(progress)
  useEffect(() => {
    document.body.classList.add("no-scroll")
    setAppLoaded(false)
    if (progress.progress === 100) {
      if (progress.loaded === 129 || progress.loaded === 139) {
        // hardcoded values for playground loading (not iffiecient)
        setTimeout(() => {
          setAppLoaded(true)
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
      ${appLoaded ? "hidden" : "opacity-100"}`}
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
