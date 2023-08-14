import { motion } from "framer-motion"

import { styles } from "../styles"
import { AvatarCanvas } from "./canvas"
import MoveHere from "./MoveHere"
import { useEffect, useState } from "react"
import { playgroundAnimations, repeatedOnceAnimations } from "../constants"
import { SmallArrowSvg } from "../assets"

const Hero = () => {
  const [showPlayground, setShowPlayground] = useState(true)
  const [redo, setRedo] = useState(false)
  const [animation, setAnimation] = useState("none")
  const animations = ["none", ...playgroundAnimations]
  const playgroundActive = animation !== "none" ? true : false

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)")
    const handleMediaQueryChange = (event) => {
      setShowPlayground(!event.matches)
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [showPlayground])

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Playground Settings */}
      <div
        className={`z-10 absolute top-[13%] right-6 rounded-2xl shadow-md shadow-primary transition-all duration-300 ease-in-out ${
          !showPlayground && "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative p-2 px-5 bg-black-200 rounded-t-xl">
          <h3 className="text-xl text-white text-center">Playground Settings</h3>
          <SmallArrowSvg
            className="absolute -right-5 top-9 w-7 h-5 fill-[#e8eaed] hover:fill-white transform -rotate-90 cursor-pointer"
            onClick={() => setShowPlayground(false)}
          />  
        </div>
        <div className="-mt-2 bg-tertiary text-white rounded-b-xl flex items-center gap-2 p-3 pt-4">
          <p className="">Animation</p>
          <div className="w-full bg-black-200 rounded-md relative flex items-center justify-between px-1">
            <select
              className="absolute inset-0 opacity-0"
              onChange={(e) => setAnimation(e.target.value)}
            >
              {animations.map((animation, index) => (
                <option key={index} value={animation} className="bg-gray-700">
                  {animation}
                </option>
              ))}
            </select>
            <p>{animation}</p>
            <SmallArrowSvg className="fill-white w-[0.8rem] h-[0.8rem]" />
          </div>
          {repeatedOnceAnimations.includes(animation) && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="2rem"
              height="2rem"
              viewBox="0 0 32 32"
              version="1.1"
              onClick={() => setRedo(!redo)}
              className="cursor-pointer"
            >
              <title>redo</title>
              <path d="M0 16q0-2.784 1.088-5.312t2.912-4.384 4.384-2.912 5.344-1.088q2.784 0 5.312 1.088t4.384 2.912 2.912 4.384 1.088 5.312h2.304q0.736 0 1.28 0.416t0.8 1.024 0.16 1.28-0.64 1.184l-4.576 4.576q-0.672 0.672-1.6 0.672t-1.632-0.672l-4.576-4.576q-0.512-0.512-0.608-1.184t0.128-1.28 0.8-1.024 1.312-0.416h2.272q0-2.464-1.216-4.576t-3.328-3.328-4.576-1.216-4.608 1.216-3.328 3.328-1.216 4.576 1.216 4.608 3.328 3.328 4.608 1.216q1.728 0 3.36-0.64l3.424 3.392q-3.136 1.824-6.784 1.824-2.816 0-5.344-1.088t-4.384-2.912-2.912-4.384-1.088-5.344z" />
            </svg>
          )}
        </div>
      </div>
      <SmallArrowSvg
        className={`w-10 h-10 z-10 absolute top-[18%] -right-2 fill-[#e8eaed] hover:fill-white transform rotate-90 cursor-pointer  transition-all duration-300 ${
          showPlayground && "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowPlayground(true)}
      />
      {/* End Playground Settings */}
      {!playgroundActive && (
        <div
          className={`${styles.paddingX} absolute inset-0 top-[14%] max-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-pinkish" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-pink-500 " />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-pinkish">Mohab</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a computer science graduate.
              <br className="sm:block hidden" />I develop full-stack Web
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
      <MoveHere />
      <div className="absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center">
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
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
