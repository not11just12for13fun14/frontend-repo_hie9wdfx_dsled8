import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-rose-600/20 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to create sustainable change?
        </motion.h2>
        <motion.p
          className="mt-4 text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Tell us where you want to be in 12 months. We'll help you design the path and make it stick.
        </motion.p>
        <motion.form
          className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <input type="text" placeholder="Name" className="col-span-3 sm:col-span-1 h-12 rounded-xl border border-slate-700 bg-slate-800/60 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          <input type="email" placeholder="Work email" className="col-span-3 sm:col-span-1 h-12 rounded-xl border border-slate-700 bg-slate-800/60 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          <input type="text" placeholder="Company" className="col-span-3 sm:col-span-1 h-12 rounded-xl border border-slate-700 bg-slate-800/60 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500" />
          <button className="col-span-3 inline-flex items-center justify-center h-12 rounded-xl bg-rose-600 text-white font-medium hover:bg-rose-500 transition-colors">Request a conversation</button>
        </motion.form>
      </div>
    </section>
  );
}
