import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { LoadingSvg, email } from "../assets"
import MoveHere from "./MoveHere"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  function validateForm() {
    const { name, email, message } = form

    // Check if name is empty or not a string
    if (!name.trim() || typeof name !== "string") {
      alert("Please enter your name.")
      return false
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return false
    }

    // Check if message is empty or not a string
    if (!message.trim() || typeof message !== "string") {
      alert("Please enter a message.")
      return false
    }

    return true
  }

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (!validateForm()) return
    try {
      await emailjs.send(
        'service_tvh8xmr',
        'template_zsivzut',
        {
          from_name: form.name,
          to_name: "Mohab Gamal",
          from_email: form.email,
          to_email: "mohabgamal112233@gmail.com",
          message: form.message,
        },
        'IinM89tZ4idiwWPbU'
      )
      alert("Thank you. I will get back to you as soon as possible.")
      setForm({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        style={{userSelect: 'none'}}
        className="flex-[0.75] xl:max-w-[600px] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form?.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="px-6 py-4 font-medium text-white outline-none border border-none focus:border-secondary focus:ring-2 focus:ring-secondary rounded-lg  bg-tertiary placeholder:text-secondary placeholder:opacity-50"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your email</span>
            <input
              type="email"
              name="email"
              required
              value={form?.email}
              onChange={handleChange}
              placeholder="Contact me with your email."
              className="px-6 py-4 font-medium text-white outline-none border border-none focus:border-secondary focus:ring-2 focus:ring-secondary rounded-lg bg-tertiary placeholder:text-secondary placeholder:opacity-50"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form?.message}
              onChange={handleChange}
              placeholder="send a message to my email (mohabgamal112233@gmail.com)"
              className="px-6 py-4 font-medium text-white outline-none border border-none focus:border-secondary focus:ring-2 focus:ring-secondary rounded-lg bg-tertiary placeholder:text-secondary placeholder:opacity-50"
            />
          </label>
          <button
            type="submit"
            className={`flex items-center bg-pinkish py-3 px-8 rounded-2xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:scale-110 cursor-pointer transition-all duration-300
              hover:bg-[#d34570] ${loading && "pointer-events-none"}`}
          >
            {loading ? (
              <>
                <p>Sending...</p>
                <LoadingSvg />
              </>
            ) : (
              <>
                <p>Send</p>
                <img src={email} className="h-6 w-6 ml-2" />
              </>
            )}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:max-w-[600px] xl:h-auto md:h-[550px] h-[350px]"
      >
        <MoveHere className={''} />
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
