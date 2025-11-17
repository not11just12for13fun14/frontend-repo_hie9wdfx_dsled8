import { Target, LineChart, Users } from "lucide-react";

export default function Capabilities() {
  const caps = [
    { icon: Target, title: 'Strategy to activation', desc: 'Translate strategy into concrete adoption plans that people follow.' },
    { icon: LineChart, title: 'Operating model shifts', desc: 'Design structures, metrics, and rituals that support new ways of working.' },
    { icon: Users, title: 'Leadership enablement', desc: 'Coach leaders to communicate, role-model, and reinforce desired change.' }
  ];

  return (
    <section id="capabilities" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-4 text-slate-700/80">Hands-on partnership from the C-suite to the front line.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <Icon className="h-6 w-6 text-rose-600" />
              <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
