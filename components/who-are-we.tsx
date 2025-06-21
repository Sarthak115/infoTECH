"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import MagneticButton from "@/components/magnetic-button"

export default function WhoAreWe() {
  const [activeImage, setActiveImage] = useState(0)

  const images = [
    {
      title: "Expert Team",
      description: "Industry professionals with years of experience",
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art learning environment",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Global Network",
      description: "Connected with leading companies worldwide",
      color: "from-green-500 to-teal-600",
    },
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">Who Are We</h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate educators and industry experts committed to transforming careers through
            practical learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Images */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  onHoverStart={() => setActiveImage(index)}
                  whileHover={{ scale: 1.05, z: 10 }}
                  className={`relative h-32 bg-gradient-to-br ${image.color} rounded-xl cursor-pointer overflow-hidden ${
                    activeImage === index ? "ring-4 ring-cyan-400" : ""
                  }`}
                  style={{ zIndex: activeImage === index ? 20 : 10 }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.h3
              key={activeImage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-slate-900 dark:text-white mb-4"
            >
              {images[activeImage].title}
            </motion.h3>

            <motion.p
              key={activeImage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-slate-600 dark:text-gray-300 mb-6"
            >
              {images[activeImage].description}
            </motion.p>

            <motion.div
              key={activeImage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-slate-500 dark:text-gray-400 mb-8"
            >
              <p>
                At infoTECH, we believe in practical learning that prepares students for real-world challenges. Our
                industry-aligned curriculum and expert mentorship ensure that every graduate is job-ready and confident.
              </p>
            </motion.div>

            <MagneticButton
              href="/about"
              className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-full"
            >
              Learn More About Us
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
