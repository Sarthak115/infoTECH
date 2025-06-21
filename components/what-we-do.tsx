"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle, Users, Award, FileText, Shield, Briefcase } from "lucide-react"

export default function WhatWeDo() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const services = [
    {
      icon: Users,
      title: "Hands-on Projects",
      description: "Work on real industry projects that matter",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Briefcase,
      title: "Real Internship Experience",
      description: "Gain authentic workplace experience",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Shield,
      title: "Industry Mentorship",
      description: "Learn from experienced professionals",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: FileText,
      title: "Career Certification",
      description: "Earn recognized industry certificates",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Award,
      title: "Placement Assistance",
      description: "100% job placement support",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: CheckCircle,
      title: "Skill Development",
      description: "Build future-ready technical skills",
      color: "from-emerald-500 to-green-600",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm font-semibold">
              🎯 Our Services
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            What We Do
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive internship programs that bridge the gap between academic learning and industry
            requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative bg-white dark:bg-slate-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-600/50 overflow-hidden"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">{service.title}</h3>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed relative z-10">{service.description}</p>

              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
