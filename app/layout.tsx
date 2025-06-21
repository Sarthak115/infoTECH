import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/contexts/theme-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "infoTECH - Transform Your Career",
  description:
    "Join top-rated internship programs designed to launch your career in today's competitive tech world — from coding to analytics, we've got you covered.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-slate-900">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
