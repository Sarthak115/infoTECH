"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactForm() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
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
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
              📞 Get In Touch
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            Contact Us
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to start your journey? Get in touch with us and let's discuss how we can help you achieve your goals
          </p>
        </motion.div>

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
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send us a Message</h3>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Name</label>
                    <Input
                      placeholder="Your full name"
                      className="bg-slate-50 dark:bg-slate-600 border-slate-200 dark:border-slate-500 text-slate-900 dark:text-white rounded-xl h-12 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-slate-50 dark:bg-slate-600 border-slate-200 dark:border-slate-500 text-slate-900 dark:text-white rounded-xl h-12 focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your goals and how we can help..."
                      rows={5}
                      className="bg-slate-50 dark:bg-slate-600 border-slate-200 dark:border-slate-500 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold py-4 rounded-xl text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
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
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h3>
              <p className="text-slate-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                We're here to help you take the next step in your tech career. Reach out to us through any of the
                following channels.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone", info: "+91 98765 43210", link: "tel:+919876543210" },
                { icon: Mail, title: "Email", info: "info@infotech.com", link: "mailto:info@infotech.com" },
                { icon: MapPin, title: "Address", info: "Tech Hub, Innovation District, Bangalore, India", link: "#" },
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
                      className="text-slate-600 dark:text-gray-300 hover:text-cyan-400 transition-colors text-base"
                    >
                      {contact.info}
                    </a>
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
              <div className="space-y-2 text-slate-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-red-500">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
