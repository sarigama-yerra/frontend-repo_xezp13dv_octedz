export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-24 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_400px_at_50%_-80px,rgba(239,68,68,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
        </div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  );
}
