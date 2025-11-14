import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[540px] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black pointer-events-none" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-black/40 px-3 py-1 text-xs text-red-200 tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              Portfolio — UX/UI • Automotive • Mobility
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">Connected</span> Experiences
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              I craft high-performance digital interfaces with a premium, automotive-inspired aesthetic — sharp geometry, smooth motion, and purposeful details.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#cases" className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-red-600 to-orange-500 px-5 py-3 text-white font-semibold shadow-[0_0_30px_rgba(239,68,68,0.45)] hover:shadow-[0_0_40px_rgba(249,115,22,0.55)] transition">
                View Case Studies
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-black/40 px-5 py-3 text-white hover:border-red-500/60 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
