import { motion } from "framer-motion"
import { styles } from "../styles"
import { AvatarCanvas } from "./canvas"
import { useEffect, useState } from "react"
import { playgroundAnimations, repeatedOnceAnimations } from "../constants"
import { ArrowSvg } from "../assets"

const Hero = () => {
  const mdMediaQuery = window.matchMedia("(max-width: 768px)")

  const [showPlayground, setShowPlayground] = useState(!mdMediaQuery.matches)
  const [redo, setRedo] = useState(false)
  const [animation, setAnimation] = useState("none")
  const animations = ["none", ...playgroundAnimations]
  const playgroundActive = animation !== "none" ? true : false
  
  
  useEffect(() => {
    const handleMdMediaQueryChange = (event) => {
      setShowPlayground(!event.matches)
    }
    mdMediaQuery.addEventListener("change", handleMdMediaQueryChange)
    return () => {
      mdMediaQuery.removeEventListener("change", handleMdMediaQueryChange)
    }
  }, [showPlayground])

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Playground Mode */}
      <div
        className={`z-10 absolute top-[13%] right-8 rounded-2xl shadow-md shadow-primary transition-all duration-300 ease-in-out ${
          !showPlayground && "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative p-2 px-5 bg-black-200 rounded-t-xl">
          <h3 className="text-xl text-center text-white">
            Playground Mode
          </h3>
          <ArrowSvg
            className="absolute h-5 transition-all duration-300 transform -rotate-90 cursor-pointer -right-5 top-9 w-7 fill-white hover:scale-150"
            onClick={() => setShowPlayground(false)}
          />
        </div>
        <div className="flex items-center gap-2 p-3 pt-4 -mt-2 text-white bg-tertiary rounded-b-xl">
          <p className="">Animation</p>
          <div className="relative flex items-center justify-between w-full gap-1 px-1 rounded-md bg-black-200">
            <select
              className="absolute inset-0 w-full opacity-0"
              onChange={(e) => setAnimation(e.target.value)}
            >
              {animations.map((animation, index) => (
                <option key={index} value={animation} className="bg-gray-700">
                  {animation}
                </option>
              ))}
            </select>
            <p>{animation}</p>
            <ArrowSvg className="fill-white w-[0.8rem] h-[0.8rem]" />
          </div>
          {repeatedOnceAnimations.includes(animation) && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="2.2rem"
              height="2.2rem"
              viewBox="0 0 32 32"
              version="1.1"
              onClick={() => setRedo(!redo)}
              className="transition-all duration-300 ease-in-out cursor-pointer hover:scale-150 hover:fill-pinkih"
            >
              <title>redo</title>
              <path d="M0 16q0-2.784 1.088-5.312t2.912-4.384 4.384-2.912 5.344-1.088q2.784 0 5.312 1.088t4.384 2.912 2.912 4.384 1.088 5.312h2.304q0.736 0 1.28 0.416t0.8 1.024 0.16 1.28-0.64 1.184l-4.576 4.576q-0.672 0.672-1.6 0.672t-1.632-0.672l-4.576-4.576q-0.512-0.512-0.608-1.184t0.128-1.28 0.8-1.024 1.312-0.416h2.272q0-2.464-1.216-4.576t-3.328-3.328-4.576-1.216-4.608 1.216-3.328 3.328-1.216 4.576 1.216 4.608 3.328 3.328 4.608 1.216q1.728 0 3.36-0.64l3.424 3.392q-3.136 1.824-6.784 1.824-2.816 0-5.344-1.088t-4.384-2.912-2.912-4.384-1.088-5.344z" />
            </svg>
          )}
        </div>
      </div>
      <ArrowSvg
        className={`w-10 h-10 z-10 absolute top-[18%] -right-2 fill-white hover:fill-pinkish transform rotate-90 cursor-pointer transition-all duration-300 ${
          showPlayground && "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowPlayground(true)}
      />
      {/* End Playground Mode */}
      {!playgroundActive && (
        <div
          className={`${styles.paddingX} absolute inset-0 top-[14%] max-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col items-center justify-center mt-5">
            <div className="w-5 h-5 rounded-full bg-pinkish" />
            <div className="w-1 h-40 sm:h-80 bg-gradient-to-b from-pink-500 " />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-pinkish">Mohab</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a computer science graduate.
              <br className="hidden sm:block" /> I develop full-stack Web
              Applications.
            </p>
          </div>
        </div>
      )}
      <AvatarCanvas
        animation={animation}
        playgroundActive={playgroundActive}
        redo={redo}
      />
      <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-5">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-pinkish flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
