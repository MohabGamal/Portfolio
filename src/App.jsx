import { BrowserRouter } from "react-router-dom"
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
  return (
    <>
      <LoadingScreen  />
      <BrowserRouter>
        <div className="relative z-0 overflow-hidden bg-primary scrollbar-thin scrollbar-thumb-pinkish scrollbar-track-gray-900">
          <div className="bg-left bg-no-repeat bg-hero-pattern">
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
      <Cursor />
    </>
  )
}

export default App
