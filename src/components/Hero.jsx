import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-10 py-24">
        <div className="">
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
            <div className="rounded-xl bg-white/70 border border-slate-200 p-4">
              <p className="text-2xl font-semibold text-slate-900">10x</p>
              <p className="text-xs text-slate-600">Adoption velocity</p>
            </div>
            <div className="rounded-xl bg-white/70 border border-slate-200 p-4">
              <p className="text-2xl font-semibold text-slate-900">95%</p>
              <p className="text-xs text-slate-600">Executive satisfaction</p>
            </div>
            <div className="rounded-xl bg-white/70 border border-slate-200 p-4">
              <p className="text-2xl font-semibold text-slate-900">24m</p>
              <p className="text-xs text-slate-600">Avg. partnership</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
