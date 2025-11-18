import { Target, LineChart, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Capabilities() {
  const caps = [
    { icon: Target, title: 'Change strategy → activation', desc: 'Translate strategy into adoption plans grounded in how people actually behave.' },
    { icon: LineChart, title: 'Org & operating model', desc: 'Design structures, metrics, and rituals that reinforce new behaviours at scale.' },
    { icon: Users, title: 'Leadership & teams', desc: 'Coach leaders and teams to role‑model, communicate, and sustain momentum.' }
  ];

  return (
    <section id="capabilities" className="py-24 bg-slate-50 relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-rose-700/10 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Capabilities</h2>
          <p className="mt-4 text-slate-700/80">Behavioural change amplified by algorithmic insight.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-rose-600/0 group-hover:from-rose-500/5 group-hover:to-rose-600/10"
                initial={false}
                animate={{}}
              />
              <Icon className="h-6 w-6 text-rose-600 relative z-10" />
              <h3 className="mt-3 font-semibold text-slate-900 relative z-10">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 relative z-10">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
