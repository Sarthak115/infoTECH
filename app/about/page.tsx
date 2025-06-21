"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Target, Eye, Award, Users, Globe } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import StatsSection from "@/components/stats-section"
import MouseEffects from "@/components/mouse-effects"
import AnimatedTimeline from "@/components/animated-timeline"

export default function AboutPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const roadmapSteps = [
    {
      step: "1",
      title: "Application & Assessment",
      description: "Submit your application and complete our skill assessment to find the perfect program match.",
    },
    {
      step: "2",
      title: "Program Selection",
      description: "Choose from our diverse range of internship programs based on your interests and career goals.",
    },
    {
      step: "3",
      title: "Hands-on Learning",
      description: "Engage in real-world projects with industry mentors and gain practical experience.",
    },
    {
      step: "4",
      title: "Skill Development",
      description: "Build technical and soft skills through workshops, coding sessions, and collaborative projects.",
    },
    {
      step: "5",
      title: "Certification",
      description: "Earn industry-recognized certificates and build a strong portfolio of completed projects.",
    },
    {
      step: "6",
      title: "Career Launch",
      description: "Get placement assistance, interview preparation, and ongoing career support.",
    },
  ]

  const achievements = [
    { icon: Users, title: "12,000+ Interns Trained", description: "Successfully trained over 12,000 students" },
    { icon: Globe, title: "50+ Industry Partners", description: "Strong network of industry collaborations" },
    { icon: Award, title: "97% Placement Rate", description: "Exceptional placement success rate" },
    { icon: Target, title: "15+ Tech Domains", description: "Comprehensive coverage of technology fields" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <MouseEffects />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="text-cyan-400">infoTECH</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
              We are passionate about transforming careers through practical, industry-aligned education. Our mission is
              to bridge the gap between academic learning and real-world industry requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Timeline */}
      <AnimatedTimeline />

      {/* Internship Roadmap */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">Internship Roadmap</h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your step-by-step journey from application to career launch
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 mt-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Eye className="w-12 h-12 text-cyan-400 mr-4" />
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
                To become the global leader in practical technology education, empowering millions of students worldwide
                to achieve their career aspirations through hands-on learning and industry-relevant skills development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Target className="w-12 h-12 text-orange-400 mr-4" />
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
                To provide comprehensive, practical education that bridges the gap between academic learning and
                industry requirements, ensuring every student graduates with the skills, confidence, and experience
                needed to excel in their chosen field.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Achievements</h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Milestones that reflect our commitment to excellence and student success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-400 transition-all duration-300"
              >
                <achievement.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{achievement.title}</h3>
                <p className="text-slate-600 dark:text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  )
}
