'use client';

import { motion } from 'framer-motion';
import { Code2, Send } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070913]/80 backdrop-blur-xl border-b border-[#1a1d36]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 font-mono text-lg font-bold text-white tracking-tight">
          <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <Code2 className="w-5 h-5" />
          </div>
          <span>Mostafa<span className="text-purple-400">.dev</span></span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
          <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </nav>

        {/* Hire Me CTA */}
        <a
          href="mailto:mostafafawzy11120@gmail.com"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium px-5 py-2.5 rounded-xl transition-all text-sm shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] active:scale-95"
        >
          <Send className="w-4 h-4" />
          <span>Hire Me</span>
        </a>
      </div>
    </header>
  );
}