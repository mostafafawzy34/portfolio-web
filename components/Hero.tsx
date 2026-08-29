// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Sparkles, ArrowRight, Download } from 'lucide-react';

// const techLogos = [
//   { name: 'React', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30' },
//   { name: 'Next.js', color: 'from-slate-700/30 to-slate-900/30 text-white border-slate-700/50' },
//   { name: 'Node.js', color: 'from-emerald-500/20 to-green-600/20 text-emerald-400 border-emerald-500/30' },
//   { name: 'Python', color: 'from-amber-500/20 to-yellow-600/20 text-amber-400 border-amber-500/30' },
//   { name: 'ESP32', color: 'from-purple-500/20 to-indigo-600/20 text-purple-400 border-purple-500/30' },
// ];

// export default function Hero() {
//   return (
//     <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 max-w-6xl mx-auto z-10 selection:bg-purple-500/30">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
//         {/* Left Text Column */}
//         <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left order-2 lg:order-1">
          
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/40 bg-purple-950/40 text-purple-300 text-xs font-mono shadow-[0_0_15px_rgba(168,85,247,0.2)]"
//           >
//             <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
//             <span>I'M A SOFTWARE & SYSTEMS ENGINEER</span>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="space-y-3 sm:space-y-4"
//           >
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
//               Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Mostafa</span>
//             </h1>

//             <p className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-200 tracking-tight leading-tight">
//               I build intelligent digital solutions for web, mobile & hardware.
//             </p>
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed"
//           >
//             I specialize in scalable full-stack web applications, ML microservices, Flutter cross-platform mobile apps, and custom embedded systems like ESP32 robotics.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
//           >
//             <a href="#projects" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] active:scale-95 text-sm">
//               <span>Explore Projects</span>
//               <ArrowRight className="w-4 h-4" />
//             </a>
//             <a href="#" className="inline-flex items-center gap-2.5 border border-[#262a4d] bg-[#121528]/80 hover:bg-[#181c35] text-slate-300 hover:text-white font-medium px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all text-sm active:scale-95">
//               <Download className="w-4 h-4 text-purple-400" />
//               <span>Download CV</span>
//             </a>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="pt-4 sm:pt-6 space-y-3"
//           >
//             <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">Technologies I Work With</span>
//             <div className="flex flex-wrap gap-2">
//               {techLogos.map(tech => (
//                 <div key={tech.name} className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border bg-gradient-to-r ${tech.color} text-xs font-mono font-medium backdrop-blur-md`}>
//                   {tech.name}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Right Photo Column */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="lg:col-span-5 flex justify-center order-1 lg:order-2"
//         >
//           <div className="relative w-full max-w-[280px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-500/40 bg-[#121528] shadow-[0_0_50px_rgba(168,85,247,0.25)] group hover:border-purple-400 transition-all duration-300">
//             <Image
//               src="/profile.jpg"
//               alt="Mostafa Mohamed Fawzy"
//               width={440}
//               height={580}
//               className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 block"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e1d] via-transparent to-transparent opacity-40 pointer-events-none" />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }






'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Download } from 'lucide-react';

const techLogos = [
  { name: 'React', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30' },
  { name: 'Next.js', color: 'from-slate-700/30 to-slate-900/30 text-white border-slate-700/50' },
  { name: 'Node.js', color: 'from-emerald-500/20 to-green-600/20 text-emerald-400 border-emerald-500/30' },
  { name: 'Python', color: 'from-amber-500/20 to-yellow-600/20 text-amber-400 border-amber-500/30' },
  { name: 'ESP32', color: 'from-purple-500/20 to-indigo-600/20 text-purple-400 border-purple-500/30' },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 max-w-6xl mx-auto z-10 selection:bg-purple-500/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        
        {/* Left Text Column */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left order-2 lg:order-1">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/40 bg-purple-950/40 text-purple-300 text-[11px] font-mono shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
            <span>I'M A SOFTWARE & SYSTEMS ENGINEER</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-2 sm:space-y-3"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Mostafa</span>
            </h1>

            <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-200 tracking-tight leading-tight">
              I build intelligent digital solutions for web, mobile & hardware.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed"
          >
            I specialize in scalable full-stack web applications, ML microservices, Flutter cross-platform mobile apps, and custom embedded systems like ESP32 robotics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-1"
          >
            <a href="#projects" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_25px_rgba(147,51,234,0.7)] active:scale-95 text-xs sm:text-sm">
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 border border-[#262a4d] bg-[#121528]/80 hover:bg-[#181c35] text-slate-300 hover:text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all text-xs sm:text-sm active:scale-95">
              <Download className="w-3.5 h-3.5 text-purple-400" />
              <span>Download CV</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-3 sm:pt-4 space-y-2"
          >
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">Technologies I Work With</span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {techLogos.map(tech => (
                <div key={tech.name} className={`px-2.5 py-1 rounded-lg border bg-gradient-to-r ${tech.color} text-[11px] font-mono font-medium backdrop-blur-md`}>
                  {tech.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Photo Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-500/40 bg-[#121528] shadow-[0_0_40px_rgba(168,85,247,0.25)] group hover:border-purple-400 transition-all duration-300">
            <Image
              src="/profile.jpg"
              alt="Mostafa Mohamed Fawzy"
              width={360}
              height={470}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 block"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e1d] via-transparent to-transparent opacity-40 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}