import { motion } from 'framer-motion'
import { Cpu, Database, Wrench, Bot } from 'lucide-react'

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C'],
  Frameworks: ['React.js', 'Next.js', 'Express.js', 'FastAPI', 'Node.js'],
  Databases: ['PostgreSQL', 'MongoDB', 'Supabase'],
  Tools: ['Postman', 'Git', 'Docker', 'Vercel', 'Shadcn UI', 'Material UI', 'Clerk Auth', 'Cursor AI'],
  'AI Tools': ['Gemini API', 'Cerebras API', 'Meta Llama 3', 'n8n', 'LMArena', 'OpenCV', 'Pandas', 'NumPy'],
}

const icons = {
  Languages: Cpu,
  Frameworks: Wrench,
  Databases: Database,
  Tools: Wrench,
  'AI Tools': Bot,
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0B1220] py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold"
        >
          Skills
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, list]) => {
            const Icon = icons[group] || Cpu
            return (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Icon size={18} className="text-indigo-400" />
                  <h3 className="text-lg font-medium">{group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {list.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
