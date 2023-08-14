import React, { useState } from "react"

import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import MoveHere from "./MoveHere"

const Tech = () => {
  const [activeTechnologies, setActiveTechnologies] = useState(technologies)

  const handleTechnologyDrag = (draggedTechnology) => {
    setActiveTechnologies((prev) =>
      prev.map((technology) =>
        technology.name === draggedTechnology.name
          ? { ...technology, active: false }
          : technology
      )
    )
  }
  return (
    <div
      className="flex flex-row flex-wrap justify-center gap-14"
      style={{ userSelect: "none" }}
    >
      {activeTechnologies.map((technology) => (
        <div
          className="relative w-28 h-28"
          key={technology.name}
          onMouseDown={() => handleTechnologyDrag(technology)}
        >
          {technology?.pairTechnologyIcon && technology.active && (
            <MoveHere className="top-1/2 left-[40%]" />
          )}
          <BallCanvas
            imgUrl={technology.icon}
            backImgUrl={technology?.pairTechnologyIcon}
          />
          <div
            className="text-center text-[14px] text-secondary mt-2"
            // style={{userSelect : 'none'}}
          >
            {technology.name}
          </div>
          {/* {technology?.pairTechnologyIcon && technology.active && (
              <div className="absolute rounded-full h-7 w-7 pulse bg-gradient-to-b from-pink-600 top-2 right-1 animate-bounce">
                <span style={{ "--i": 0 }} />
                <span style={{ "--i": 1 }} />
                <span style={{ "--i": 2 }} />
                <span style={{ "--i": 3 }} />
              </div>
            )} */}
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")
