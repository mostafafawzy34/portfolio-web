'use client';

import { motion } from 'framer-motion';
import { Award, Code, Cpu, CheckCircle2 } from 'lucide-react';

const stats = [
  { icon: Award, number: '3+', label: 'Years Experience', color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
  { icon: Code, number: '15+', label: 'Projects Completed', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10' },
  { icon: Cpu, number: '10+', label: 'Hardware Prototypes', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
  { icon: CheckCircle2, number: '100%', label: 'Client & Academic Score', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#1a1d36]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Bio Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-block text-xs font-mono px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            I'm passionate about creating complete digital & hardware solutions
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            I am an Information Systems engineer with hands-on experience designing modern React & Next.js web applications, building cross-platform Flutter mobile apps, training ML models, and programming microcontrollers like ESP32.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            Whether architecting REST API backends with Express & FastAPI or assembling physical robotic components, I focus on clean architecture, optimized code performance, and seamless user experience.
          </p>
        </motion.div>

        {/* Right 2x2 Stats Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-[#232745] bg-[#121528]/70 backdrop-blur-xl p-6 space-y-3 hover:border-purple-500/40 transition-all shadow-lg"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-black text-white font-mono">{stat.number}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}