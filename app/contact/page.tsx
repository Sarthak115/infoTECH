"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, Users, Award } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MouseEffects from "@/components/mouse-effects"
import FloatingElements from "@/components/floating-elements"
import MagneticButton from "@/components/magnetic-button"

export default function ContactPage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <MouseEffects />
      <FloatingElements />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <motion.div style={{ y }} className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-semibold">
                📞 Get In Touch
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-600">Us</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your career? Let's discuss how infoTECH can help you achieve your goals in the tech
              industry.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {[
              { icon: MessageCircle, title: "24/7 Support", desc: "Always here to help" },
              { icon: Users, title: "Expert Team", desc: "Industry professionals" },
              { icon: Award, title: "Proven Results", desc: "1000+ success stories" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{stat.title}</h3>
                <p className="text-slate-600 dark:text-gray-300">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <motion.div style={{ y }} className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-slate-700 shadow-2xl border-0 rounded-3xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Send us a Message</h2>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                          First Name
                        </label>
                        <Input
                          placeholder="John"
                          className="bg-slate-50 dark:bg-slate-600 border-slate-200 dark:border-slate-500 text-slate-900 dark:text-white rounded-xl h-12 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                          Last Name
                        </label>
                        <Input
                          placeholder="Doe"
                          className="bg-slate-50 dark:bg-slate-600 border-slate-200 dark:border-slate-500 text-slate-900 dark:text-white rounded-xl h-12 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="john.doe@example.com"
                        className="bg-slate-50 dark:bg-slate-600 border-slate-200 dark:border-slate-500 text-slate-900 dark:text-white rounded-xl h-12 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Phone</label>
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="bg-slate-50 dark:bg-slate-600 border-slate-200 dark:border-slate-500 text-slate-900 dark:text-white rounded-xl h-12 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input
                        placeholder="Inquiry about internship programs"
                        className="bg-slate-50 dark:bg-slate-600 border-slate-200 dark:border-slate-500 text-slate-900 dark:text-white rounded-xl h-12 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your goals and how we can help you achieve them..."
                        rows={6}
                        className="bg-slate-50 dark:bg-slate-600 border-slate-200 dark:border-slate-500 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <MagneticButton className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold py-4 rounded-xl text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </MagneticButton>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h2>
                <p className="text-slate-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  We're here to help you take the next step in your tech career. Reach out to us through any of the
                  following channels and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "+91 98765 43210",
                    link: "tel:+919876543210",
                    desc: "Call us anytime",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "info@infotech.com",
                    link: "mailto:info@infotech.com",
                    desc: "Drop us a line",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    info: "Tech Hub, Innovation District, Bangalore, India",
                    link: "#",
                    desc: "Visit our office",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-start space-x-4 p-6 bg-white dark:bg-slate-700 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-600/50 hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-r from-cyan-500 to-teal-600 p-3 rounded-xl shadow-lg"
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-lg">{contact.title}</h4>
                      <a
                        href={contact.link}
                        className="text-slate-600 dark:text-gray-300 hover:text-cyan-400 transition-colors text-base block"
                      >
                        {contact.info}
                      </a>
                      <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">{contact.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-600/50"
              >
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-cyan-500 mr-3" />
                  <h4 className="font-semibold text-slate-900 dark:text-white text-lg">Office Hours</h4>
                </div>
                <div className="space-y-3 text-slate-600 dark:text-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-green-500">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="font-medium text-green-500">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-2xl border border-cyan-200/50 dark:border-cyan-700/50"
              >
                <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-3">Quick Response Guarantee</h4>
                <p className="text-slate-600 dark:text-gray-300">
                  We typically respond to all inquiries within{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">2-4 hours</span> during business
                  hours. For urgent matters, please call us directly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about our programs and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                q: "How long are the internship programs?",
                a: "Our internship programs range from 3-6 months, depending on the track you choose. Each program is designed to provide comprehensive hands-on experience.",
              },
              {
                q: "Do you provide job placement assistance?",
                a: "Yes! We have partnerships with 200+ companies and provide dedicated placement support including resume building, interview prep, and direct referrals.",
              },
              {
                q: "What are the prerequisites for joining?",
                a: "Basic computer knowledge and enthusiasm to learn are the main requirements. We welcome students from all backgrounds and provide foundational training.",
              },
              {
                q: "Are the certificates industry-recognized?",
                a: "Our certificates are recognized by leading tech companies and can be verified through our online verification system.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl"
              >
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-lg">{faq.q}</h4>
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
