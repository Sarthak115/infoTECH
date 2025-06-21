"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Zap, Star, Circle, Triangle, Square } from "lucide-react"

export default function FloatingElements() {
  const { scrollYProgress } = useScroll()

  const elements = [
    {
      icon: Code,
      x: "10%",
      y: "20%",
      delay: 0,
      color: "text-cyan-400",
      size: "w-8 h-8",
    },
    {
      icon: Zap,
      x: "85%",
      y: "15%",
      delay: 0.5,
      color: "text-orange-400",
      size: "w-6 h-6",
    },
    {
      icon: Star,
      x: "15%",
      y: "70%",
      delay: 1,
      color: "text-yellow-400",
      size: "w-5 h-5",
    },
    {
      icon: Circle,
      x: "80%",
      y: "60%",
      delay: 1.5,
      color: "text-teal-400",
      size: "w-4 h-4",
    },
    {
      icon: Triangle,
      x: "25%",
      y: "45%",
      delay: 2,
      color: "text-purple-400",
      size: "w-6 h-6",
    },
    {
      icon: Square,
      x: "70%",
      y: "35%",
      delay: 2.5,
      color: "text-pink-400",
      size: "w-5 h-5",
    },
  ]

  const y1 = elements.map((_, index) => useTransform(scrollYProgress, [0, 1], [0, -200 - index * 50]))
  const y2 = elements.map((_, index) => useTransform(scrollYProgress, [0, 1], [0, 100 + index * 30]))
  const rotate = elements.map((_, index) => useTransform(scrollYProgress, [0, 1], [0, 360 + index * 180]))

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => {
        return (
          <motion.div
            key={index}
            className="absolute opacity-20 dark:opacity-30"
            style={{
              left: element.x,
              top: element.y,
              y: index % 2 === 0 ? y1[index] : y2[index],
              rotate: rotate[index],
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <element.icon className={`${element.size} ${element.color}`} />
          </motion.div>
        )
      })}
    </div>
  )
}
