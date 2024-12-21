import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { certificates } from "../constants"

const FeedbackCard = ({
  index,
  name,
  image,
  position,
  logo,
  logoBg,
  logoSize,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="xs:w-[450px] w-full"
  >
    <Tilt scale={1.1}>
      <img src={image} className="rounded-sm h-[333px]" />
    </Tilt>
    <div className="bg-black-200 p-4 rounded-3xl mt-[2rem] shadow-md shadow-primary flex justify-between items-center gap-1 hover:scale-110 transition-all duration-300">
      <div className="flex flex-col flex-1">
        <p className="text-secondary font-medium text-[16px]">
          <span className="tailwind-blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">{position}</p>
      </div>
      <div
        className={`bg-[#E6DEDD] bg-[${logoBg}] flex justify-center items-center w-10 h-10 rounded-full`}
      >
        <img
          src={logo}
          alt={`feedback_by-${name}`}
          loading="lazy"
          className={`rounded-full object-cover
            w-[${logoSize || "80%"}] h-[${logoSize || "80%"}]`}
        />
      </div>
    </div>
  </motion.div>
)

const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Certificates I am proud of</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-evenly gap-7`}
      >
        {certificates.map((certificate, index) => (
          <FeedbackCard key={certificate.name} index={index} {...certificate} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Certificates, "")
