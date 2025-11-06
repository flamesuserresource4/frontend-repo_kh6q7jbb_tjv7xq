import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1220] py-10 text-slate-300">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center justify-between gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-xl font-semibold text-slate-100">Nilanjan Saha</h4>
            <p className="text-sm">Full Stack Developer • AI & IoT Enthusiast</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <a href="mailto:snil576dev@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Mail size={16} /> Email
            </a>
            <a href="tel:+916289849736" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Phone size={16} /> Call
            </a>
            <a href="https://www.linkedin.com/in/devnil-674580189/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href="https://github.com/Devnil434" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} Nilanjan Saha. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
