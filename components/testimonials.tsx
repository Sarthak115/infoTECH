"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Cybersecurity Analyst",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote:
        "infoTECH transformed my career completely. The hands-on approach and real-world projects gave me the confidence to excel in cybersecurity. The mentorship was exceptional!",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote:
        "The internship program at infoTECH was incredible. I worked on live projects and gained practical experience that no classroom could provide. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Data Scientist",
      company: "DataTech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote:
        "From zero to hero in data science! infoTECH's comprehensive curriculum and industry connections helped me land my dream job. The placement assistance was outstanding.",
      rating: 5,
    },
    {
      name: "Alex Rodriguez",
      role: "Data Analyst",
      company: "Analytics Pro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote:
        "The practical approach to learning at infoTECH is unmatched. I gained real skills that employers actually want. The certification opened many doors for me.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "UI/UX Designer",
      company: "Design Studio",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      quote:
        "The design program at infoTECH gave me both technical skills and creative confidence. Working on real client projects was invaluable for my portfolio.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      company: "Cloud Systems Inc",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      quote:
        "The DevOps track prepared me perfectly for the industry. The hands-on experience with cloud platforms and automation tools was exactly what I needed.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

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
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">
              💬 Success Stories
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            What Our Interns Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real stories from real people who transformed their careers with infoTECH
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block"
          >
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-white dark:hover:bg-slate-700 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block"
          >
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white hover:bg-white dark:hover:bg-slate-700 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Testimonial Content */}
          <div className="mx-0 md:mx-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
              >
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center mb-8">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 mb-10 italic leading-relaxed font-medium">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-6">
                    <motion.div whileHover={{ scale: 1.1 }} className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-teal-600 shadow-lg">
                        <img
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-slate-800"></div>
                    </motion.div>
                    <div className="text-left">
                      <div className="font-bold text-xl text-slate-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-slate-600 dark:text-gray-400 font-medium">
                        {testimonials[currentIndex].role}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-gray-500">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-cyan-400 to-teal-600 scale-125"
                    : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-4 mt-8 md:hidden">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
