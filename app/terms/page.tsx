"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MouseEffects from "@/components/mouse-effects"

export default function TermsPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8">Terms and Conditions</h1>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
                Welcome to infoTECH. By using our services, you agree to these terms and conditions.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                By accessing and using infoTECH services, you accept and agree to be bound by the terms and provision of
                this agreement.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Program Enrollment</h2>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                Enrollment in our programs is subject to availability and meeting prerequisite requirements. We reserve
                the right to modify program content and schedules as needed.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Payment Terms</h2>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                Payment for programs must be completed before the start date. Refund policies apply as per our refund
                policy document.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">4. Intellectual Property</h2>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                All course materials, content, and resources provided by infoTECH are protected by intellectual property
                rights and are for personal use only.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">5. Contact Information</h2>
              <p className="text-slate-600 dark:text-gray-300 mb-6">
                For questions about these terms, please contact us at info@infotech.com or +91 98765 43210.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
