'use client';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 font-mono">
      <p>© {new Date().getFullYear()} Mostafa Mohamed Fawzy. Built with Next.js & Tailwind CSS.</p>
    </footer>
  );
}
