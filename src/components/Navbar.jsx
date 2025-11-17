import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-md border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-700" />
          <span className="font-semibold tracking-tight text-slate-900">RedRipple Advisory</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#approach" className="hover:text-slate-900 transition-colors">Approach</a>
          <a href="#capabilities" className="hover:text-slate-900 transition-colors">Capabilities</a>
          <a href="#proof" className="hover:text-slate-900 transition-colors">Proof</a>
          <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-colors">Start a conversation</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 text-slate-700">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
