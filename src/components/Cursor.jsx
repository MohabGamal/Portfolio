import { useEffect, useRef, useState } from "react"
import { isTouchScreen } from "../constants"
import { useStateContext } from "../context"

const CURSOR_SPEED = 0.05

let mouseX = -10
let mouseY = -10
let outlineX = 0
let outlineY = 0

const Cursor = () => {
  const { isAppLoaded } = useStateContext()
  const cursorOutline = useRef()
  const [hoverButton, setHoverButton] = useState(false)

  // Don't return early, always execute hooks
  useEffect(() => {
    if (isTouchScreen || !isAppLoaded) return // This prevents the rest of the component rendering if the conditions are met, but hooks are still executed

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
  }, [isAppLoaded, isTouchScreen]) // Adding isTouchScreen and isAppLoaded as dependencies

  useEffect(() => {
    const mouseEventListener = document.addEventListener("mouseover", function (e) {
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
    })

    return () => {
      document.removeEventListener("mouseover", mouseEventListener)
    }
  }, [])

  // Animation logic that runs continuously
  const animate = () => {
    let distX = mouseX - outlineX
    let distY = mouseY - outlineY

    outlineX = outlineX + distX * CURSOR_SPEED
    outlineY = outlineY + distY * CURSOR_SPEED

    if (cursorOutline.current) {
      cursorOutline.current.style.left = `${outlineX}px`
      cursorOutline.current.style.top = `${outlineY}px`
    }

    requestAnimationFrame(animate)
  }

  // The condition for rendering the cursor should be outside the hooks
  if (isTouchScreen || !isAppLoaded) return null
  return (
    <div
      className={`z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform pulse opacity-80 ${
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
  )
}

export default Cursor
