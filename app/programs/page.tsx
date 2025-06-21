"use client"

import { motion } from "framer-motion"
import { Shield, Code, Database, BarChart3, Brain, Server, Palette, Cpu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import MouseEffects from "@/components/mouse-effects"

export default function ProgramsPage() {
  const programs = [
    {
      icon: Shield,
      title: "Ethical Hacking & Cyber Security",
      duration: "6 Months",
      level: "Intermediate",
      description:
        "Master ethical hacking, penetration testing, and cybersecurity fundamentals with hands-on labs and real-world scenarios.",
      features: [
        "Penetration Testing",
        "Network Security",
        "Digital Forensics",
        "Security Auditing",
        "Incident Response",
      ],
      color: "from-red-500 to-pink-600",
      popular: true,
    },
    {
      icon: Code,
      title: "Full Stack Development",
      duration: "8 Months",
      level: "Beginner to Advanced",
      description:
        "Build modern web applications using cutting-edge technologies like React, Node.js, and cloud platforms.",
      features: ["Frontend Development", "Backend APIs", "Database Design", "Cloud Deployment", "DevOps Basics"],
      color: "from-blue-500 to-cyan-600",
      popular: true,
    },
    {
      icon: Database,
      title: "Data Science",
      duration: "7 Months",
      level: "Intermediate",
      description: "Dive deep into machine learning, AI, and big data analytics to solve complex business problems.",
      features: ["Machine Learning", "Data Visualization", "Statistical Analysis", "AI Models", "Big Data"],
      color: "from-green-500 to-teal-600",
      popular: false,
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      duration: "5 Months",
      level: "Beginner",
      description: "Transform raw data into actionable insights using advanced analytics tools and techniques.",
      features: ["Excel Mastery", "SQL Queries", "Power BI", "Python Analytics", "Business Intelligence"],
      color: "from-orange-500 to-yellow-600",
      popular: false,
    },
    {
      icon: Brain,
      title: "AI & ML",
      duration: "9 Months",
      level: "Advanced",
      description:
        "Explore artificial intelligence and machine learning with deep learning, neural networks, and AI applications.",
      features: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP", "AI Applications"],
      color: "from-purple-500 to-indigo-600",
      popular: false,
    },
    {
      icon: Server,
      title: "DevOps",
      duration: "6 Months",
      level: "Intermediate",
      description:
        "Learn modern DevOps practices, CI/CD pipelines, containerization, and cloud infrastructure management.",
      features: ["CI/CD Pipelines", "Docker & Kubernetes", "Cloud Platforms", "Infrastructure as Code", "Monitoring"],
      color: "from-gray-500 to-slate-600",
      popular: false,
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      duration: "4 Months",
      level: "Beginner",
      description: "Master user interface and user experience design with modern design tools and methodologies.",
      features: ["Design Thinking", "Figma/Adobe XD", "Prototyping", "User Research", "Responsive Design"],
      color: "from-pink-500 to-rose-600",
      popular: false,
    },
    {
      icon: Cpu,
      title: "IoT & Embedded Systems",
      duration: "7 Months",
      level: "Intermediate",
      description: "Build smart devices and IoT solutions with embedded programming and hardware integration.",
      features: ["Arduino/Raspberry Pi", "Sensor Integration", "IoT Protocols", "Embedded C", "Hardware Design"],
      color: "from-emerald-500 to-green-600",
      popular: false,
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
              Our <span className="text-cyan-400">Programs</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
              Choose from our comprehensive range of internship programs designed to launch your career in today's most
              in-demand tech fields.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <Card className="h-full bg-white dark:bg-slate-700 shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                  {program.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">Popular</Badge>
                    </div>
                  )}

                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${program.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <program.icon className="w-12 h-12 mb-4 relative z-10" />
                      <h3 className="text-xl font-bold mb-2 relative z-10">{program.title}</h3>
                      <div className="flex justify-between items-center relative z-10">
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {program.duration}
                        </Badge>
                        <span className="text-sm opacity-90">{program.level}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">{program.description}</p>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-3">What you'll learn:</h4>
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span className="text-sm text-slate-600 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="w-full bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 dark:from-cyan-500 dark:to-teal-600 dark:hover:from-cyan-600 dark:hover:to-teal-700 text-white group-hover:scale-105 transition-all duration-300">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
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
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our programs are designed with industry input to ensure you gain the most relevant and practical skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry-Relevant Curriculum",
                description:
                  "Our courses are designed in collaboration with industry experts to ensure maximum relevance.",
              },
              {
                title: "Hands-on Projects",
                description:
                  "Work on real-world projects that you can showcase in your portfolio to potential employers.",
              },
              {
                title: "Expert Mentorship",
                description: "Learn from industry professionals with years of experience in their respective fields.",
              },
              {
                title: "Flexible Learning",
                description:
                  "Choose from full-time or part-time options to fit your schedule and learning preferences.",
              },
              {
                title: "Career Support",
                description: "Get comprehensive placement assistance, interview preparation, and career guidance.",
              },
              {
                title: "Industry Certifications",
                description: "Earn recognized certifications that add significant value to your professional profile.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-400 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-gray-300">{feature.description}</p>
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
