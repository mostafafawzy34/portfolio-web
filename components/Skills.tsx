'use client';

import { motion } from 'framer-motion';

const skillBars = [
  { name: 'HTML5 / CSS3 / Tailwind', level: 95, category: 'Frontend' },
  { name: 'React.js / Next.js', level: 90, category: 'Frontend' },
  { name: 'JavaScript / TypeScript', level: 88, category: 'Frontend' },
  { name: 'Node.js / Express.js', level: 88, category: 'Backend' },
  { name: 'Flutter & Dart', level: 85, category: 'Mobile' },
  { name: 'Python / FastAPI / TensorFlow', level: 85, category: 'AI & Data' },
  { name: 'MongoDB & Database Design', level: 88, category: 'Database' },
  { name: 'ESP32 / Embedded Systems / C++', level: 82, category: 'Hardware' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#1a1d36]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <span className="text-xs font-mono px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 uppercase tracking-wider">
          My Skills
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technologies I Master
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Proven tech stack expertise across modern web development, mobile applications, and embedded systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {skillBars.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="p-5 rounded-2xl border border-[#232745] bg-[#121528]/80 backdrop-blur-xl space-y-3"
          >
            <div className="flex items-center justify-between font-mono text-sm">
              <span className="text-slate-200 font-semibold">{skill.name}</span>
              <span className="text-purple-400 font-bold">{skill.level}%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="h-3 w-full bg-[#0b0e1d] rounded-full overflow-hidden p-0.5 border border-[#1f233d]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.6)]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}