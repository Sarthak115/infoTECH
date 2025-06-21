"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Loader from "@/components/loader"
import MouseEffects from "@/components/mouse-effects"
import FloatingElements from "@/components/floating-elements"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import InternshipHighlight from "@/components/internship-highlight"
import WhatWeDo from "@/components/what-we-do"
import WhoAreWe from "@/components/who-are-we"
import StatsSection from "@/components/stats-section"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function InfoTechHomepage() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadComplete = () => {
    setIsLoaded(true)
  }

  return (
    <>
      {!isLoaded && <Loader onComplete={handleLoadComplete} />}

      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-white dark:bg-slate-900"
        >
          <MouseEffects />
          <FloatingElements />
          <Navigation />
          <HeroSection />
          <InternshipHighlight />
          <WhatWeDo />
          <WhoAreWe />
          <StatsSection />
          <Testimonials />
          <ContactForm />
          <Footer />
        </motion.div>
      )}
    </>
  )
}
