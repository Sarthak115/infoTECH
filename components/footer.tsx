"use client"

import { motion } from "framer-motion"
import { Code, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 dark:border-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full flex items-center justify-center"
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              <div className="font-bold text-xl text-white">
                info<span className="text-cyan-400">TECH</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering the next generation of tech professionals through practical, industry-aligned education.
            </p>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "github", "youtube"].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  <span className="text-sm font-bold">{social[0].toUpperCase()}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6 text-white text-lg">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Programs", "Verify Certificate", "Contact Us"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6 text-white text-lg">Programs</h4>
            <div className="space-y-3">
              {["Cyber Security", "Full Stack Development", "Data Science", "Data Analysis"].map((program) => (
                <motion.a
                  key={program}
                  href="#programs"
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {program}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-6 text-white text-lg">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="hover:text-cyan-400 transition-colors duration-300">+91 98765 43210</div>
              <div className="hover:text-cyan-400 transition-colors duration-300">info@infotech.com</div>
              <div className="hover:text-cyan-400 transition-colors duration-300">Bangalore, India</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} infoTECH. All rights reserved.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-slate-700 text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
