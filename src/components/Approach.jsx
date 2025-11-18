import { motion, useScroll, useTransform } from 'framer-motion';

export default function Approach() {
  const items = [
    {
      k: '01',
      t: 'Model behaviours, not assumptions',
      d: 'We map incentives and interactions to understand how change truly propagates in your context.'
    },
    {
      k: '02',
      t: 'Design with data and empathy',
      d: 'We combine qualitative insight with algorithmic representation to craft pragmatic pathways.'
    },
    {
      k: '03',
      t: 'Embed and measure adoption',
      d: 'We enable leaders to role‑model, reinforce, and measure the shifts that matter.'
    }
  ];

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section id="approach" className="relative py-24 bg-white overflow-hidden">
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div style={{ opacity }} initial={{ opacity: 0 }}>
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Behavioural change, algorithmically informed</h2>
            <p className="mt-4 text-slate-700/80">From diagnosis to activation, we turn human dynamics into repeatable outcomes.</p>
          </div>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200 p-6 bg-slate-50/50 hover:bg-white transition-colors"
            >
              <span className="text-xs font-medium text-rose-600">{it.k}</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{it.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
