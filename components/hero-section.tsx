"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import InteractiveBackground from "@/components/interactive-background"
import { useRef } from "react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Smooth spring animations for better performance
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Hero zoom and fade effects
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1.5])
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 1, 0.5, 0])
  const blur = useTransform(smoothProgress, [0, 0.5, 1], [0, 2, 8])
  const y = useTransform(smoothProgress, [0, 1], ["0%", "-50%"])

  // Background parallax
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"])
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.1])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-[150vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Interactive Background with Parallax */}
      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
          filter: `blur(${blur}px)`,
        }}
        className="absolute inset-0"
      >
        <InteractiveBackground />
      </motion.div>

      {/* Hero Content with Zoom Effect */}
      <motion.div
        style={{
          scale,
          opacity,
          y,
          filter: `blur(${blur}px)`,
        }}
        className="container mx-auto px-4 z-10 pt-20 md:pt-0 sticky top-0 h-screen flex items-center justify-center"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
              Level Up Your Skills
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-500 to-orange-500 bg-clip-text text-transparent">
                with infoTECH
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Launch your tech career with internship tracks optimized for impact—real projects, expert mentors, proven
            pathways.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold px-8 py-4 rounded-full text-lg backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
