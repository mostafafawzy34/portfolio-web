'use client';

import { motion } from 'framer-motion';
// Removed 'Github' from lucide-react import
import { ExternalLink, Smartphone, Cpu, Sparkles } from 'lucide-react';

// Custom GitHub SVG component replacing the removed lucide-react brand icon
const Github = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const projects = [
  {
    title: 'NutriGen — AI Nutrition Advisor',
    category: 'Full-Stack Mobile & AI',
    description: 'A mobile application powered by Node.js REST endpoints and Python FastAPI microservices. Utilizes machine learning models for intelligent macro targeting and automated meal generation.',
    tags: ['Flutter', 'Dart', 'Node.js', 'FastAPI', 'TensorFlow', 'MongoDB'],
    icon: Smartphone,
    gradient: 'from-purple-600/20 via-indigo-600/10 to-transparent',
    borderColor: 'group-hover:border-purple-500/50',
  },
  {
    title: 'Autonomous Pesticide Spraying Robot',
    category: 'Embedded Robotics',
    description: 'An autonomous field spraying hardware prototype engineered with ESP32 microcontroller logic, relay-switched pumps, and high-torque L298N motor drivers.',
    tags: ['ESP32', 'C++', 'L298N Drivers', 'Hardware Wiring', 'Robotics'],
    icon: Cpu,
    gradient: 'from-indigo-500/20 via-cyan-500/10 to-transparent',
    borderColor: 'group-hover:border-indigo-500/50',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#1a1d36] selection:bg-purple-500/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <span className="text-xs font-mono px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 uppercase tracking-wider">
          Featured Engineering Work
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Selected Projects
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Implementations spanning mobile client software, scalable cloud APIs, and embedded physical computing.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`group relative rounded-3xl border border-[#232745] bg-[#121528]/80 backdrop-blur-2xl p-8 hover:border-purple-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between ${project.borderColor}`}
            >
              <div className="space-y-6">
                <div className={`h-40 rounded-2xl bg-gradient-to-br ${project.gradient} border flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group-hover:scale-[1.02] transition-transform`}>
                  <div className="w-16 h-16 rounded-2xl bg-[#0b0e1d]/80 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)] mb-3">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono text-purple-300 uppercase tracking-widest">{project.category}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0b0e1d] text-purple-300 border border-[#232745]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a href="#" className="flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Preview
                  </a>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> Code Repository
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}