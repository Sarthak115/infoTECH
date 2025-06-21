"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

export default function ImageTransition() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Single image transformations
  const singleImageScale = useTransform(smoothProgress, [0, 0.3, 0.7], [1, 1.1, 0.8])
  const singleImageY = useTransform(smoothProgress, [0, 0.5, 1], ["0%", "-20%", "-100%"])
  const singleImageOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0])

  // Grid images transformations
  const gridOpacity = useTransform(smoothProgress, [0, 0.5, 0.8, 1], [0, 0, 0.8, 1])
  const gridScale = useTransform(smoothProgress, [0.5, 1], [0.8, 1])
  const gridY = useTransform(smoothProgress, [0.5, 1], ["50%", "0%"])

  const images = [
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces",
      alt: "Team collaboration",
      delay: 0,
    },
    {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&crop=faces",
      alt: "Coding workspace",
      delay: 0.1,
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop&crop=faces",
      alt: "Learning environment",
      delay: 0.2,
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces",
      alt: "Innovation lab",
      delay: 0.3,
    },
  ]

  return (
    <div ref={containerRef} className="relative h-[200vh] overflow-hidden">
      {/* Single Large Image */}
      <motion.div
        style={{
          scale: singleImageScale,
          y: singleImageY,
          opacity: singleImageOpacity,
        }}
        className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="relative w-80 h-60 md:w-96 md:h-72 lg:w-[500px] lg:h-[350px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=faces"
            alt="Best internship experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Real Experience</h3>
            <p className="text-white/90">Industry-level projects</p>
          </div>
        </div>
      </motion.div>

      {/* 2x2 Grid Images */}
      <motion.div
        style={{
          opacity: gridOpacity,
          scale: gridScale,
          y: gridY,
        }}
        className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="grid grid-cols-2 gap-4 md:gap-6 w-80 md:w-96 lg:w-[500px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                delay: image.delay,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <motion.div
        style={{ opacity: useTransform(smoothProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]) }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </motion.div>
    </div>
  )
}
