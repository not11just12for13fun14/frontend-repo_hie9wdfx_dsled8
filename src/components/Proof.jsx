import { motion } from 'framer-motion';

export default function Proof() {
  const logos = ['Acme', 'Northwind', 'Globex', 'Umbrella', 'Initech', 'Stark'];

  return (
    <section id="proof" className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50/50 relative">
          <p className="text-xs font-medium text-slate-600">TRUSTED BY LEADERS AT</p>

          {/* Marquee animation */}
          <div className="mt-6 relative">
            <motion.div
              className="flex gap-6 will-change-transform"
              initial={{ x: 0 }}
              animate={{ x: [0, -600, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            >
              {[...logos, ...logos].map((l, i) => (
                <div key={`${l}-${i}`} className="h-12 w-40 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 text-sm">
                  {l}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
