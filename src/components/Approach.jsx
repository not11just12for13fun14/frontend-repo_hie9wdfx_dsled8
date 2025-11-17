export default function Approach() {
  const items = [
    {
      k: '01',
      t: 'Diagnose with clarity',
      d: 'We map incentives, behaviors, and systems to uncover root causes—not just symptoms.'
    },
    {
      k: '02',
      t: 'Design pragmatic paths',
      d: 'We co-create choices that fit your culture and constraints, sequencing moves for momentum.'
    },
    {
      k: '03',
      t: 'Activate and embed',
      d: 'We equip leaders and teams to adopt, measure, and sustain change over time.'
    }
  ];

  return (
    <section id="approach" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">A calm, proven approach</h2>
          <p className="mt-4 text-slate-700/80">Less theater. More outcomes. We focus on compounding wins that endure.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.k} className="rounded-2xl border border-slate-200 p-6 bg-slate-50/50 hover:bg-white transition-colors">
              <span className="text-xs font-medium text-rose-600">{it.k}</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{it.t}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
