import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import "react-vertical-timeline-component/style.min.css"

import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import { useState } from "react"

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#23142c",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #23142c" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            loading="lazy"
            className={`object-contain ${experience.iconSize || 'w-[79%] h-[79%]'}
            hover:scale-110 transition-all duration-300`}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {experience.points.map((point, index) => {
          const [expanded, setExpanded] = useState(false)
          const MAX_CHAR = 150
          const trimmedPoint = point.slice(0, MAX_CHAR)
          return (
            <li
              key={`point-${index}`}
              onClick={() => setExpanded(!expanded)}
              className="text-secondary text-[14px] pl-1 leading-8 tracking-wider group"
            >
              <p>
                {expanded ? point : trimmedPoint}
                {point.length > MAX_CHAR && (
                  <span
                    className="m-1 text-xl cursor-pointer text-pinkish group-hover:underline"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? "See less" : "...See more"}
                  </span>
                )}
              </p>
            </li>
          )
        })}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education & Experience.
        </h2>
      </motion.div>

      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")
