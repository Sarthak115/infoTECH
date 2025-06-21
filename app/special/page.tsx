"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Zap, Award, Target, Globe, Heart, Lightbulb, Star } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MouseEffects from "@/components/mouse-effects"

export default function SpecialPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Personalized Learning Paths",
      description: "Customized curriculum based on your skill level, interests, and career goals for maximum impact.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Users,
      title: "1:1 Industry Mentorship",
      description:
        "Direct access to experienced professionals who guide you through real-world challenges and career decisions.",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Zap,
      title: "Live Project Experience",
      description: "Work on actual industry projects with real deadlines, stakeholders, and business impact.",
      color: "from-orange-500 to-yellow-600",
    },
    {
      icon: Award,
      title: "Industry-Recognized Certifications",
      description: "Earn certificates that are valued by top companies and recognized across the industry.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: Target,
      title: "100% Placement Support",
      description: "Comprehensive career services including resume building, interview prep, and job matching.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Globe,
      title: "Global Learning Community",
      description: "Connect with peers, alumni, and professionals from around the world in our vibrant community.",
      color: "from-emerald-500 to-green-600",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "/placeholder-user.jpg",
      quote:
        "The personalized mentorship at infoTECH was game-changing. My mentor helped me navigate complex projects and land my dream job at Google.",
      rating: 5,
    },
    {
      name: "Raj Patel",
      role: "Data Scientist at Microsoft",
      image: "/placeholder-user.jpg",
      quote:
        "Working on live projects gave me the confidence to tackle real-world problems. The experience was invaluable for my career growth.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Cybersecurity Analyst at IBM",
      image: "/placeholder-user.jpg",
      quote:
        "The industry connections and placement support at infoTECH are unmatched. They truly care about your success beyond graduation.",
      rating: 5,
    },
  ]

  const uniqueApproach = [
    {
      icon: Heart,
      title: "Student-Centric Approach",
      description: "Every decision we make is centered around student success and career outcomes.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven Learning",
      description: "We constantly update our curriculum to include the latest technologies and industry trends.",
    },
    {
      icon: Star,
      title: "Excellence in Everything",
      description: "From course content to career support, we maintain the highest standards of quality.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <MouseEffects />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              What Makes Us <span className="text-cyan-400">Special</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
              Discover the unique features and approaches that set infoTECH apart from traditional education platforms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Unique Features</h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience learning like never before with our innovative approach to tech education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-600 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 relative z-10`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">{feature.title}</h3>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed relative z-10">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Unique Approach */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Philosophy</h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              The core principles that drive everything we do at infoTECH
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {uniqueApproach.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <approach.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{approach.title}</h3>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">Success Stories</h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our graduates who are now thriving in their dream careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-slate-700 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-600"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-slate-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-600 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of successful graduates who chose infoTECH for their career transformation
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-cyan-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
