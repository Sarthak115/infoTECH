"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MousePosition {
  x: number
  y: number
}

interface Sparkle {
  id: number
  x: number
  y: number
}

export default function MouseEffects() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [trailPositions, setTrailPositions] = useState<MousePosition[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Update trail positions
      setTrailPositions((prev) => {
        const newTrail = [newPosition, ...prev.slice(0, 8)]
        return newTrail
      })
    }

    const handleClick = (e: MouseEvent) => {
      const newSparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }
      setSparkles((prev) => [...prev, newSparkle])

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles((prev) => prev.filter((sparkle) => sparkle.id !== newSparkle.id))
      }, 1000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Mouse Trail */}
      {trailPositions.map((position, index) => (
        <motion.div
          key={index}
          className="absolute w-4 h-4 bg-cyan-400 rounded-full"
          style={{
            left: position.x - 8,
            top: position.y - 8,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: 0.8 - index * 0.1,
            scale: 1 - index * 0.1,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}

      {/* Main Cursor Glow */}
      <motion.div
        className="absolute w-8 h-8 bg-cyan-400 rounded-full blur-sm"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Sparkle Bursts */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute"
            style={{
              left: sparkle.x,
              top: sparkle.y,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Multiple sparkle particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  x: Math.cos((i * 45 * Math.PI) / 180) * 30,
                  y: Math.sin((i * 45 * Math.PI) / 180) * 30,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
