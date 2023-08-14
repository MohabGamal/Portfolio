import React, { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useScroll, useSpring } from "framer-motion"
import lottie from "lottie-web"
import { styles } from "../styles"
import { CV_FILE, CV_LINK, navLinks, socialLinks } from "../constants"
import {
  logo,
  menu,
  close,
  DownloadFileSvg,
  externalLink,
  cv,
  githubGIF,
  facebookGIF,
  ArrowSvg,
} from "../assets"

const Navbar = () => {
  const gitAnimationContainer = useRef(null)
  const gitAnimationContainerSm = useRef(null)
  const fbAnimationContainer = useRef(null)
  const fbAnimationContainerSm = useRef(null)
  const [active, setActive] = useState("")
  const [navToggle, setNavToggle] = useState(false)
  const [cvToggle, setCvToggle] = useState(false)
  const [topOfPage, setTopOfPage] = useState(true)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  scaleX.on("change", (prev) => {
    if (prev == 0) setTopOfPage(true)
    else setTopOfPage(false)
  })

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: navToggle
        ? gitAnimationContainerSm.current
        : gitAnimationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: githubGIF,
    })

    const fbAnimation = lottie.loadAnimation({
      container: navToggle
        ? fbAnimationContainerSm.current
        : fbAnimationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: facebookGIF,
    })

    // Cleanup on unmount
    return () => {
      animation.destroy()
      fbAnimation.destroy()
    }
  }, [navToggle])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center pt-2 pb-1 fixed top-0 z-20 bg-tertiary duration-200 ease-in-out transition-all
       ${topOfPage && "sm:bg-opacity-0"}`}
    >
      <motion.div
        className="fixed inset-0 h-1.5 bg-pinkish transform origin-top-left"
        style={{ scaleX }}
      />
      <div className="flex items-center justify-between w-full gap-4 m-1 mx-auto max-w-7xl">
        {/* <MoveHere /> */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center justify-center gap-3"
            onClick={() => {
              setActive("")
              window.scrollTo(0, 0)
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="object-contain w-[50px] h-[38px] rounded-full shadow-md shadow-primary hover:scale-125 ease-in-out transition-all duration-300"
            ></img>
            <p className="text-white text-[20px] font-extrabold cursor-pointer ">
              Mohab Gamal
            </p>
          </Link>
          <ul className="flex-row hidden gap-10 list-none md:flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-pinkish text-[18px] font-medium group cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
                <div className="h-1 duration-200 w-9 bg-secondary group-hover:bg-pinkish group-hover:w-full transation-all" />
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center justify-center hidden gap-1 md:flex">
          {socialLinks.map((website, index) => (
            <a key={index} href={website.link} target="_blank">
              <website.icon
                key={index}
                className="w-10 h-10 transition-all duration-300 hover:scale-125"
              />
            </a>
          ))}
          <a
            ref={fbAnimationContainer}
            href="https://www.facebook.com/mohab.gamal.50767/"
            target="_blank"
            className="w-10 h-10 transition-all duration-300 hover:scale-125"
          />
          <a
            ref={gitAnimationContainer}
            href="https://github.com/MohabGamal"
            target="_blank"
            className="w-10 h-10 transition-all duration-300 bg-white rounded-full shadow-md hover:scale-125 shadow-primary"
          />
          {/* Résumé button */}
          <div className="relative ml-2 py-2.5 px-4 rounded-xl text-white font-bold bg-pinkish hidden md:flex items-center justify-center gap-2 shadow-md shadow-primary hover:bg-[#d34570]">
            <a href={CV_LINK} target="_blank" className="pr-2 border-r-2">
              Résumé
            </a>
            <button onClick={() => setCvToggle(!cvToggle)}>
              <ArrowSvg
                className={`fill-white w-[1rem] h-[1rem] transform transition-all duration-300 ease-in-out
              ${cvToggle && "rotate-180"}`}
              />
            </button>
            <div
              className={`absolute right-0 top-[3.2rem] rounded-lg bg-tertiary transition-all duration-300 ease-in-out
              ${!cvToggle && "opacity-0 pointer-events-none"}`}
            >
              <a
                href={CV_LINK}
                target="_blank"
                onClick={() => setCvToggle(!cvToggle)}
                className="flex items-center justify-between gap-5 p-2 rounded-lg cursor-pointer hover:bg-pinkish"
              >
                <p>Preview</p>
                <img className="w-5 h-5" src={externalLink} />
              </a>
              <a
                href={CV_FILE}
                target="_blank"
                onClick={() => setCvToggle(!cvToggle)}
                className="flex items-center justify-center gap-5 p-2 rounded-lg cursor-pointer hover:bg-pinkish"
              >
                <p>Download</p>
                <DownloadFileSvg />
              </a>
            </div>
          </div>
          {/* Résumé button end */}
        </div>
        {/* small screens menu */}
        <div className="flex items-center justify-between md:hidden">
          <img
            src={navToggle ? close : menu}
            alt="menu"
            className={`w-[28px] h-[28px] object-contain transition ease transform duration-300 hover:scale-125 cursor-pointer ${
              navToggle && "-rotate-90"
            }`}
            onClick={() => setNavToggle(!navToggle)}
          />
          <div
            className={`${
              !navToggle && "opacity-0 pointer-events-none"
            } flex flex-col gap-3 bg-tertiary absolute top-14 right-0 mx-2 my-2 w-[130px] z-10 rounded-xl ease transform duration-300 `}
          >
            <ul className="flex flex-col items-start justify-end flex-1 list-none ">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins rounded-md font-medium cursor-pointer px-4 py-2 w-full text-[16px] hover:bg-pinkish ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setNavToggle(!navToggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center justify-center gap-1 mb-2">
              <a href={CV_LINK} target="_blank">
                <img
                  src={cv}
                  alt="CV"
                  className="w-8 h-8 transition-all duration-300 hover:scale-125"
                />
              </a>
              {socialLinks.map((website, index) => (
                <a key={index} href={website.link} target="_blank">
                  <website.icon
                    key={index}
                    className="w-8 h-8 transition-all duration-300 hover:scale-125"
                  />
                </a>
              ))}
              <a
                ref={fbAnimationContainerSm}
                href="https://www.facebook.com/mohab.gamal.50767/"
                target="_blank"
                className="w-8 h-8 transition-all duration-300 hover:scale-125"
              />
              <a
                ref={gitAnimationContainerSm}
                href="https://github.com/MohabGamal"
                target="_blank"
                className="w-8 h-8 transition-all duration-300 bg-white rounded-full shadow-md hover:scale-125 shadow-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
