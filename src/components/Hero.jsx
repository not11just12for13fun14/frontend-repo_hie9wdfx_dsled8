import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700">
            Premium Consultancy • Sustainable Change
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Help for leaders creating
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700"> sustainable change</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-700/80 max-w-xl">
            We partner with executives to design, activate, and scale transformations that last—combining pragmatic strategy with human-centered adoption.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800 transition-colors">Book an intro call</a>
            <a href="#approach" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm border border-slate-300 hover:bg-slate-50 transition-colors">Our approach</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            {[
              { n: '10x', l: 'Adoption velocity' },
              { n: '95%', l: 'Executive satisfaction' },
              { n: '24m', l: 'Avg. partnership' },
            ].map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }} className="rounded-xl bg-white/70 border border-slate-200 p-4">
                <p className="text-2xl font-semibold text-slate-900">{s.n}</p>
                <p className="text-xs text-slate-600">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="hidden lg:block" />
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-600"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="mx-auto h-8 w-4 rounded-full border border-slate-400/70 flex items-start justify-center p-1">
          <motion.span className="block h-1.5 w-1.5 rounded-full bg-slate-500" animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
        </div>
      </motion.div>
    </section>
  );
}
