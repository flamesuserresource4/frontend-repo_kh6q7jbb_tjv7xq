import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0F172A] py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-semibold"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-slate-300"
        >
          I'm a passionate Full Stack Developer pursuing B.Tech in Computer Science & Engineering (IoT) from Techno International New Town.
          I specialize in building modern, AI-powered web applications that solve real-world problems. I enjoy working with React.js,
          TypeScript, and Next.js to craft intuitive user experiences while integrating backend APIs and emerging AI technologies like
          Gemini API and Llama 3.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {['Full Stack Development', 'AI & Machine Learning', 'Cloud Computing', 'IoT Systems'].map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
