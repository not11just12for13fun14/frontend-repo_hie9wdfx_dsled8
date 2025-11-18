import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setElevated(v > 4));
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md transition-colors ${
      elevated ? "bg-white/80 border-b border-slate-200/70" : "bg-white/40 border-b border-transparent"
    }`}>
      {/* Scroll progress */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 origin-left"
        style={{ scaleX: scrollY.on ? undefined : 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
        <a href="#" className="inline-flex items-center gap-2" aria-label="Erik Bohjort Consulting Home">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-700" />
          <span className="font-semibold tracking-tight text-slate-900">Erik Bohjort Consulting</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#approach" className="hover:text-slate-900 transition-colors">Approach</a>
          <a href="#capabilities" className="hover:text-slate-900 transition-colors">Capabilities</a>
          <a href="#proof" className="hover:text-slate-900 transition-colors">Clients</a>
          <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-colors">Start a conversation</a>
        </nav>
        <button
          aria-label="Open menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 text-slate-700"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-slate-200/70 bg-white/90"
          >
            <div className="px-4 py-4 grid gap-3 text-slate-800">
              <a href="#approach" onClick={() => setOpen(false)} className="py-2">Approach</a>
              <a href="#capabilities" onClick={() => setOpen(false)} className="py-2">Capabilities</a>
              <a href="#proof" onClick={() => setOpen(false)} className="py-2">Clients</a>
              <a href="#contact" onClick={() => setOpen(false)} className="py-2 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 h-11">Start a conversation</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
