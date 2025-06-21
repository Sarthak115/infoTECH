# 🌐 infoTECH - Internship Platform Website

Welcome to the official repository for **infoTECH**, a modern, interactive, and responsive website designed for internship programs across Cyber Security, Full Stack Development, Data Science, and more. This website emphasizes immersive user experience through animations, clean design, and responsive interactions.

---

## ✨ Features

### 🔥 Interactive Homepage
- Hero section with **animated background**, **parallax effects**, and **cursor-based interaction**
- **Microinteractions** on hover and button clicks
- Scroll-triggered image **morphing animation** (image → grid)

### ⚙️ Pages Included
- **Home:** Introduction, core offerings, animated stats, testimonials, contact form
- **About Us:** Company journey, internship roadmap, vision & mission, achievements, and stats
- **Programs:** Course listings with hover animations and "Learn More" CTA
- **Verify Certificate:** Simple form to validate internship certificate using Intern ID
- **What’s Special:** Unique aspects of infoTECH and why to choose us
- **Contact Us:** Smooth scroll form with animated footer
- **Login:** Auth interface with animated CTA

### 🌗 Dark / Light Mode
- Toggle switch to change theme with **smooth transitions**
- Theme state saved in **localStorage** for user preference

### 👥 Testimonials
- AI-generated faces for social proof
- Animated sliding cards with verified badges

### 📱 Responsive Design
- Mobile-first layout
- Scroll and touch-optimized across devices

---

## 🚀 Tech Stack

- **Framework:** React.js
- **Styling:** Tailwind CSS, SCSS
- **Animation Libraries:**
  - **Framer Motion**
  - **GSAP (ScrollTrigger, Timeline)**
- **Image Assets:** Unsplash, AI-generated placeholders
- **Fonts & Icons:** Google Fonts, Lucide Icons
- **Parallax + Scroll Effects:** Custom JS + CSS

---

## 📁 Folder Structure

```bash
src/
│
├── assets/             # Images, icons, logos
├── components/         # Reusable components (Navbar, Footer, Buttons, etc.)
├── pages/              # Home, About, Programs, Contact, etc.
├── animations/         # Scroll triggers, motion configs
├── styles/             # Global styles, theme toggles
├── App.js              # Main app structure
└── index.js            # Entry point
