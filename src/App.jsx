import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { useStateContext } from './context'
import {
  About,
  Contact,
  Experience,
  Certificates,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  LoadingScreen,
  Cursor,
} from "./components"

const App = () => {
  const { appLoaded } = useStateContext()
  return (
    <>
      <LoadingScreen  />
      <BrowserRouter>
        <div className="overflow-hidden relative z-0 bg-primary scrollbar-thin scrollbar-thumb-pinkish scrollbar-track-gray-900">
          <div className="bg-hero-pattern bg-no-repeat bg-left">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Certificates />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
      {appLoaded && <Cursor />}
    </>
  )
}

export default App
