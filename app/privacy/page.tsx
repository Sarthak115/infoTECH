"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MouseEffects from "@/components/mouse-effects"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <MouseEffects />
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
                At infoTECH, we are committed to protecting your privacy and personal information.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Information We Collect</h2>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                We collect information you provide directly to us, such as when you create an account, enroll in
                programs, or contact us for support.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                We use the information we collect to provide, maintain, and improve our services, process transactions,
                and communicate with you.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Information Sharing</h2>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Data Security</h2>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Contact Us</h2>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                If you have questions about this privacy policy, please contact us at privacy@infotech.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
