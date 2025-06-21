"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { Calendar, Rocket, Users, Globe, Award, Target } from "lucide-react"

export default function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  const journeySteps = [
    {
      year: "2018",
      title: "Foundation",
      description: "Started with a vision to bridge the gap between education and industry requirements.",
      icon: Target,
      color: "from-blue-500 to-cyan-600",
    },
    {
      year: "2019",
      title: "First Programs",
      description: "Launched our first internship programs in web development and data science.",
      icon: Rocket,
      color: "from-green-500 to-teal-600",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adapted to remote learning and expanded our online presence during the pandemic.",
      icon: Globe,
      color: "from-purple-500 to-indigo-600",
    },
    {
      year: "2021",
      title: "Industry Partnerships",
      description: "Formed strategic partnerships with leading tech companies for better placement opportunities.",
      icon: Users,
      color: "from-orange-500 to-red-600",
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded to multiple domains including AI/ML, cybersecurity, and DevOps.",
      icon: Award,
      color: "from-pink-500 to-rose-600",
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Achieved industry recognition for excellence in practical education and student outcomes.",
      icon: Calendar,
      color: "from-emerald-500 to-green-600",
    },
  ]

  const stepProgresses = journeySteps.map((_, index) =>
    useTransform(smoothProgress, [index / journeySteps.length, (index + 1) / journeySteps.length], [0, 1]),
  )

  const stepOpacities = stepProgresses.map((stepProgress) => useTransform(stepProgress, [0, 0.5, 1], [0, 1, 1]))

  const stepScales = stepProgresses.map((stepProgress) => useTransform(stepProgress, [0, 0.5, 1], [0.8, 1, 1]))

  const stepXs = stepProgresses.map((stepProgress) => useTransform(stepProgress, [0, 1], [0, 0]))

  return (
    <section ref={containerRef} className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Journey</h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
            From a small startup to a leading education platform, here's how we've grown over the years
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 dark:bg-slate-700">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-cyan-400 via-teal-500 to-orange-500 origin-top"
            />
          </div>

          {journeySteps.map((step, index) => {
            return (
              <motion.div
                key={index}
                style={{ opacity: stepOpacities[index], scale: stepScales[index], x: stepXs[index] }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-600 relative overflow-hidden group"
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                      viewport={{ once: true }}
                      className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4 ${
                        index % 2 === 0 ? "ml-auto" : "mr-auto"
                      }`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="text-2xl font-bold text-cyan-400 mb-2">{step.year}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-slate-600 dark:text-gray-300 relative z-10">{step.description}</p>
                  </motion.div>
                </div>

                {/* Animated Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className={`w-6 h-6 bg-gradient-to-r ${step.color} rounded-full border-4 border-white dark:border-slate-800 shadow-lg`}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
