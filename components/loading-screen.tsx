"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import { Code } from "lucide-react"

// 3D Loading Sphere
function LoadingSphere() {
  return (
    <Sphere args={[1, 32, 32]} scale={1.5}>
      <MeshDistortMaterial color="#0891b2" attach="material" distort={0.5} speed={2} roughness={0} />
    </Sphere>
  )
}

// Loading Progress Bar
function LoadingProgress({ progress }: { progress: number }) {
  return (
    <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  )
}

// Animated Logo
function AnimatedLogo() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex items-center space-x-3 mb-8"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full flex items-center justify-center"
      >
        <Code className="w-8 h-8 text-white" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-white font-bold text-2xl"
      >
        INLIGHN TECH
      </motion.div>
    </motion.div>
  )
}

// Floating Particles
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Loading Messages
const loadingMessages = [
  "Initializing Inlighn Tech...",
  "Loading cutting-edge technology...",
  "Preparing your learning journey...",
  "Setting up interactive elements...",
  "Almost ready to transform your career...",
]

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    // Cycle through loading messages
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length)
    }, 1000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(messageInterval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 flex items-center justify-center"
        >
          {/* Floating Particles */}
          <FloatingParticles />

          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl"
            />
          </div>

          {/* 3D Background */}
          <div className="absolute inset-0 opacity-30">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <LoadingSphere />
            </Canvas>
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Animated Logo */}
            <AnimatedLogo />

            {/* Loading Spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-20 h-20 border-4 border-white/20 border-t-cyan-400 rounded-full mb-8"
            />

            {/* Loading Message */}
            <motion.div
              key={messageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white text-xl font-medium mb-8 h-8"
            >
              {loadingMessages[messageIndex]}
            </motion.div>

            {/* Progress Bar */}
            <LoadingProgress progress={progress} />

            {/* Progress Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-white/70 text-sm mt-4"
            >
              {Math.round(progress)}%
            </motion.div>

            {/* Pulsing Dots */}
            <div className="flex space-x-2 mt-8">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: dot * 0.2,
                  }}
                  className="w-3 h-3 bg-cyan-400 rounded-full"
                />
              ))}
            </div>

            {/* Loading Tips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-20 text-center"
            >
              <p className="text-white/60 text-sm">💡 Tip: Explore our interactive 3D elements and smooth animations</p>
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-10 right-10 w-16 h-16 border-2 border-cyan-400/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-10 left-10 w-12 h-12 border-2 border-orange-400/30 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
