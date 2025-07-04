"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-slate-700 dark:bg-slate-600 rounded-full p-1 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 0 : 20,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === "dark" ? <Moon className="w-3 h-3 text-slate-700" /> : <Sun className="w-3 h-3 text-yellow-500" />}
      </motion.div>
    </motion.button>
  )
}
