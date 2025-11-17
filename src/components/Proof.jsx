export default function Proof() {
  const logos = ['Acme', 'Northwind', 'Globex', 'Umbrella', 'Initech', 'Stark'];

  return (
    <section id="proof" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50/50">
          <p className="text-xs font-medium text-slate-600">TRUSTED BY LEADERS AT</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {logos.map(l => (
              <div key={l} className="h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 text-sm">
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
