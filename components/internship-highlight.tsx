"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, Users, Award } from "lucide-react"
import MagneticButton from "@/components/magnetic-button"

export default function InternshipHighlight() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-semibold mb-4">
                ✨ Why Choose Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight"
            >
              We Provide Best
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
                Internship For You
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Experience hands-on learning with real industry projects, expert mentorship, and comprehensive skill
              development that prepares you for your dream career.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <MagneticButton className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform shadow-2xl hover:shadow-orange-500/25">
                  Know More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </MagneticButton>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="relative w-full h-96 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 dark:from-cyan-500/20 dark:to-orange-500/20 rounded-3xl backdrop-blur-sm border border-slate-200/50 dark:border-white/10 overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-orange-600/20"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-orange-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <span className="text-3xl font-bold text-white">🚀</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Best Internship Experience</h3>
                  <p className="text-slate-600 dark:text-gray-300 mb-6">Real projects, real impact, real growth</p>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Live Projects", "Expert Mentors", "Industry Certification"].map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-slate-700 dark:text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-cyan-500" />
                  <div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">12K+</div>
                    <div className="text-xs text-slate-600 dark:text-gray-400">Interns</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">97%</div>
                    <div className="text-xs text-slate-600 dark:text-gray-400">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
