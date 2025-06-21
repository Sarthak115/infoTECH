"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface StickyRevealSectionProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  backgroundImage?: string
  className?: string
}

export default function StickyRevealSection({
  title,
  subtitle,
  children,
  backgroundImage,
  className = "",
}: StickyRevealSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["100%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 1.1])

  return (
    <div ref={containerRef} className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Sticky Title */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-20">
        <motion.div style={{ opacity, scale }} className="text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
      </div>

      {/* Sliding Content */}
      <motion.div style={{ y }} className="relative z-30 bg-white dark:bg-slate-900 min-h-screen">
        {children}
      </motion.div>

      {/* Background Pattern */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-10 opacity-5 dark:opacity-10"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
    </div>
  )
}
