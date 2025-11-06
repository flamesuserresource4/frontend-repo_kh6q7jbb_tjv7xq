import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'

const palette = {
  primary: '#4F46E5',
  accent: '#22D3EE',
  background: '#0F172A',
  textPrimary: '#E2E8F0',
  textSecondary: '#94A3B8',
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden" style={{ background: palette.background }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-[#0F172A]/60 to-[#0F172A]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            Full Stack Developer • AI & IoT Enthusiast
          </span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl md:text-6xl">
            Hi, I’m <span style={{ color: palette.accent }}>Nilanjan Saha</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            I build modern, AI-powered web apps with React, TypeScript, and FastAPI — crafting intuitive experiences and integrating
            emerging AI like Gemini and Llama 3.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:snil576dev@gmail.com"
              className="group inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-slate-100 transition hover:bg-indigo-500"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/devnil-674580189/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-100 transition hover:bg-white/10"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/Devnil434"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-100 transition hover:bg-white/10"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="tel:+916289849736"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-slate-100 transition hover:bg-white/10"
            >
              <Phone size={18} /> +91 62898 49736
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
