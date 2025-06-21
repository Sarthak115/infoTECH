"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, AlertCircle, Search } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MouseEffects from "@/components/mouse-effects"

export default function VerifyPage() {
  const [certificateId, setCertificateId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<any>(null)

  const handleVerify = async () => {
    if (!certificateId.trim()) return

    setIsVerifying(true)

    // Simulate API call
    setTimeout(() => {
      // Mock verification result
      if (certificateId.toLowerCase().includes("valid")) {
        setVerificationResult({
          valid: true,
          studentName: "John Doe",
          program: "Full Stack Development",
          issueDate: "2023-12-15",
          certificateId: certificateId,
        })
      } else {
        setVerificationResult({
          valid: false,
          message: "Certificate not found or invalid ID",
        })
      }
      setIsVerifying(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <MouseEffects />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Verify <span className="text-cyan-400">Certificate</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
              Validate the authenticity of infoTECH certificates with our secure verification system
            </p>
          </motion.div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-slate-700 shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <Shield className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      Certificate Verification Portal
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300">
                      Enter your certificate ID to verify its authenticity
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                        Certificate ID
                      </label>
                      <Input
                        placeholder="Enter your certificate ID (e.g., IT-2024-001234)"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-600 border-slate-300 dark:border-slate-500 text-slate-900 dark:text-white"
                      />
                    </div>

                    <Button
                      onClick={handleVerify}
                      disabled={isVerifying || !certificateId.trim()}
                      className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold py-3 disabled:opacity-50"
                    >
                      {isVerifying ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Search className="mr-2 w-5 h-5" />
                      )}
                      {isVerifying ? "Verifying..." : "Verify Certificate"}
                    </Button>
                  </div>

                  {/* Verification Result */}
                  {verificationResult && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mt-8"
                    >
                      {verificationResult.valid ? (
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                          <div className="flex items-center mb-4">
                            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                            <h4 className="text-lg font-semibold text-green-800 dark:text-green-400">
                              Certificate Verified
                            </h4>
                          </div>
                          <div className="space-y-2 text-green-700 dark:text-green-300">
                            <p>
                              <strong>Student Name:</strong> {verificationResult.studentName}
                            </p>
                            <p>
                              <strong>Program:</strong> {verificationResult.program}
                            </p>
                            <p>
                              <strong>Issue Date:</strong> {verificationResult.issueDate}
                            </p>
                            <p>
                              <strong>Certificate ID:</strong> {verificationResult.certificateId}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                          <div className="flex items-center mb-4">
                            <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                            <h4 className="text-lg font-semibold text-red-800 dark:text-red-400">
                              Verification Failed
                            </h4>
                          </div>
                          <p className="text-red-700 dark:text-red-300">{verificationResult.message}</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 dark:text-blue-400">Secure Verification</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          All certificates are blockchain-verified and tamper-proof. Each certificate contains unique
                          identifiers that ensure authenticity.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How Verification Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our verification system ensures the authenticity and integrity of every certificate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Enter Certificate ID",
                description: "Input the unique certificate ID found on your infoTECH certificate",
              },
              {
                step: "2",
                title: "System Verification",
                description: "Our system checks the certificate against our secure blockchain database",
              },
              {
                step: "3",
                title: "Instant Results",
                description: "Get immediate verification results with detailed certificate information",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-slate-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
