import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    name: 'Civic-Eye',
    description:
      'A civic issue reporting platform combining web dashboard and mobile app for citizen service management.',
    technologies: ['React.js', 'Tailwind CSS', 'Vercel', 'Material UI', 'Supabase', 'Aceternity UI'],
    github: 'https://github.com/Devnil434/Civic-Eye.git',
  },
  {
    name: 'Event-a-Way',
    description:
      'Next-gen event management platform with AI-powered networking, facial recognition check-ins, and real-time analytics.',
    technologies: ['Vite', 'TypeScript', 'React 18', 'PostgreSQL', 'Shadcn UI', 'Cursor AI'],
    github: 'https://github.com/Devnil434/event-a-way.git',
  },
  {
    name: 'LawMind',
    description:
      'AI-powered legal document analysis platform that provides intelligent summaries and risk assessments using Llama 3 and FastAPI.',
    technologies: ['Next.js 15', 'FastAPI', 'Cerebras API', 'Meta Llama 3', 'Docker'],
    github: 'https://github.com/Devnil434/LawMind.git',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0F172A] py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold"
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.name}
              href={p.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10"
            >
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium">{p.name}</h3>
                  <ExternalLink size={18} className="opacity-70 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-slate-300">{p.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
