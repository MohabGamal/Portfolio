import { useEffect, useRef, useState } from "react"

const CURSOR_SPEED = 0.05

let mouseX = -10
let mouseY = -10
let outlineX = 0
let outlineY = 0

const Cursor = () => {
  const cursorOutline = useRef()
  const [hoverButton, setHoverButton] = useState(false)

  const animate = () => {
    let distX = mouseX - outlineX
    let distY = mouseY - outlineY

    outlineX = outlineX + distX * CURSOR_SPEED
    outlineY = outlineY + distY * CURSOR_SPEED

    cursorOutline.current.style.left = `${outlineX}px`
    cursorOutline.current.style.top = `${outlineY}px`
    requestAnimationFrame(animate)
  }

  useEffect(() => {
    const mouseEventsListener = document.addEventListener(
      "mousemove",
      function (event) {
        mouseX = event.clientX
        mouseY = event.clientY
      }
    )
    const animateEvent = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener("mousemove", mouseEventsListener)
      cancelAnimationFrame(animateEvent)
    }
  }, [])

  useEffect(() => {
    const mouseEventListener = document.addEventListener(
      "mouseover",
      function (e) {
        // console.log(e.target.tagName.toLowerCase())
        if (
          e.target.tagName.toLowerCase() === "button" ||
          e.target.tagName.toLowerCase() === "a" ||
          e.target.tagName.toLowerCase() === "input" ||
          e.target.tagName.toLowerCase() === "textarea" ||
          e.target.tagName.toLowerCase() === "path" ||
          e.target.tagName.toLowerCase() === "svg" ||
          e.target.tagName.toLowerCase() === "canvas" ||
          e.target.tagName.toLowerCase() === "img" ||
          e.target.tagName.toLowerCase() === "p" ||
          e.target.tagName.toLowerCase() === "span"
        ) {
          setHoverButton(true)
        } else {
          setHoverButton(false)
        }
      }
    )
    return () => {
      document.removeEventListener("mouseover", mouseEventListener)
    }
  }, [])

    return (
      <>
        <div
          className={`invisible md:visible z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform 
        pulse opacity-80 ${
          hoverButton
            ? "bg-transparent border-2 border-pinkish w-5 h-5"
            : "bg-pinkish w-3 h-3"
        }`}
          ref={cursorOutline}
        >
          <span style={{ "--i": 0 }} />
          <span style={{ "--i": 1 }} />
          <span style={{ "--i": 2 }} />
        </div>
      </>
    )
}

export default Cursor
