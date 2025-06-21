"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  variant = "default",
  size = "default",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * 0.15
    const deltaY = (e.clientY - centerY) * 0.15

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      className="relative inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-orange-500/20 blur-xl"
        animate={{
          scale: isHovered ? 1.2 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Button */}
      <motion.div
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <Button
          ref={buttonRef}
          variant={variant}
          size={size}
          onClick={onClick}
          className={`relative z-10 transition-all duration-300 ${
            isHovered ? "shadow-2xl shadow-cyan-500/25" : ""
          } ${className}`}
        >
          {children}
        </Button>
      </motion.div>
    </motion.div>
  )
}
