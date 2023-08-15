// import Tilt from "react-tilt"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github, externalLink } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  website_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        perspective={800}
        transitionSpeed={1500}
        scale={1.1}
        gyroscope={true}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="#ffffff"
        glareBorderRadius="20px"
        className="bg-tertiary p-5 rounded-2xl sm:w-[380px] flex flex-col   gap-2"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            loading="lazy"
            className="object-cover w-full h-full rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
            {website_link && (
              <a
                href={website_link}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full black-gradient hover:scale-125"
              >
                <img
                  src={externalLink}
                  alt="source code"
                  className="w-[50%] h-[50%] object-contain"
                />
              </a>
            )}
            <a
              href={source_code_link}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full black-gradient hover:scale-125"
            >
              <img
                src={github}
                alt="source code"
                className="object-contain w-1/2 h-1/2"
              />
            </a>
          </div>
        </div>

          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className=" text-secondary text-[14px]">{description}</p>
        <div className="flex flex-wrap gap-1 ">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[13px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="">
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-16 mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")
