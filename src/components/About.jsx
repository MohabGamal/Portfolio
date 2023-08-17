import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import MoveHere from "./MoveHere"

const ServiceCard = ({ title, index, Model }) => {
  return (
    <div className="w-[90%] xs:w-[350px] ">
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="w-full violet-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-5 h-[380px] relative">
          <MoveHere/>
          <Model />
        </div>
        <h3
          className="text-secondary text-[28px] font-bold text-center px-1"
          style={{ userSelect: "none" }}
        >
          {title}
        </h3>
      </motion.div>
    </div>
  )
}

const About = () => {
  return (
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>About Me.</h2>
      <div
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex flex-col gap-3"
      >
        <p>
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in tools like Node.js, express.js, and
          React.
          I am passionate about Fintech, Blockchain, and AI. I am highly
          concerned about performance.
        </p>
        
        <p>
          I have gained my computer science education through my bachelor
          degree, in math, physics, computer architecture, data structures &
          algorithms, and low-level programming.
        </p>
        
        <p>
          I am currently living in Cairo, Egypt, and talking Arabic natively and
          English professionally.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-12 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(About, "about")
