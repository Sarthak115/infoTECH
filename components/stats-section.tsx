"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface StatProps {
  end: number
  label: string
  suffix?: string
}

function AnimatedCounter({ end, label, suffix = "" }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const duration = 2000 // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        setCount(Math.floor(progress * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, end])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-bold text-cyan-400 mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-slate-600 dark:text-gray-300 text-lg">{label}</div>
    </motion.div>
  )
}

export default function StatsSection() {
  const stats = [
    { end: 12000, label: "INTERNS TRAINED", suffix: "+" },
    { end: 18000, label: "PROJECTS COMPLETED", suffix: "+" },
    { end: 97, label: "PLACEMENT ASSISTANCE", suffix: "%" },
    { end: 60, label: "TOP INDUSTRY MENTORS", suffix: "+" },
  ]

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Impact</h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and student success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter key={index} end={stat.end} label={stat.label} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  )
}
