'use client';

import { motion } from 'framer-motion';

export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Radial Gradient Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage: 'radial-gradient(circle at 50% 30%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 40%, transparent 80%)',
        }}
      />

      {/* Floating Glowing Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -90, 50, 0],
          y: [0, 70, -50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]"
      />

      <motion.div
        animate={{
          x: [0, 50, -60, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[150px]"
      />

      {/* Floating Decorative Glass Geometry */}
      <motion.div
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ rotate: { duration: 40, repeat: Infinity, ease: 'linear' }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute top-24 left-[10%] w-24 h-24 border border-cyan-500/20 rounded-3xl backdrop-blur-3xl bg-cyan-500/5 hidden lg:block"
      />

      <motion.div
        animate={{ rotate: -360, y: [0, 25, 0] }}
        transition={{ rotate: { duration: 50, repeat: Infinity, ease: 'linear' }, y: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute top-1/2 right-[8%] w-32 h-32 border border-indigo-500/20 rounded-full backdrop-blur-3xl bg-indigo-500/5 hidden lg:block"
      />
    </div>
  );
}