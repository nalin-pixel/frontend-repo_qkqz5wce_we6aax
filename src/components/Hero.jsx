import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-2xl p-8 shadow-xl">
            <p className="text-cyan-300/90 text-sm font-medium tracking-widest uppercase">Company Secretary Portfolio</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white leading-tight">
              Compliance made simple for Indian businesses
            </h1>
            <p className="mt-4 text-slate-200/90">
              Incorporation, ROC filings, GST, ESOPs, FEMA and end-to-end secretarial support. Expert guidance with a modern, tech-enabled experience.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#services" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-cyan-500/20 transition">Explore Services</a>
              <a href="#blogs" className="px-5 py-3 rounded-xl bg-slate-900/70 border border-white/10 text-white font-semibold">Read Blogs</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
    </section>
  )
}
