import Navbar from '../components/Navbar';
import Section from '../components/Section';

export default function CaseStudies() {
  const cases = [
    { id: '01', title: 'In‑Car HMI System', desc: 'End‑to‑end UI system for EV cluster + center stack with motion + accessibility at scale.', tags: ['Automotive', 'HMI', 'Motion'] },
    { id: '02', title: 'Design System at Scale', desc: 'Tokenized, platform‑agnostic design language with performance‑first components.', tags: ['Design System', 'Tokens', 'Accessibility'] },
    { id: '03', title: 'Mobility App Redesign', desc: 'From research to launch — simplified booking flows and clearer state models.', tags: ['Product', 'Research', 'IA'] },
    { id: '04', title: 'Telemetry Dashboard', desc: 'Realtime data viz with purposeful motion, dark UI, and responsive primitives.', tags: ['SaaS', 'Data Viz', 'Realtime'] },
    { id: '05', title: 'Onboarding Rework', desc: 'Reduced time‑to‑value with progressive disclosure and guided setup.', tags: ['Onboarding', 'UX Writing', 'Funnels'] },
    { id: '06', title: 'Voice + Gesture HMI', desc: 'Multimodal interactions and safety‑first UX for in‑car contexts.', tags: ['HMI', 'Voice', 'Gesture'] },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600/30">
      <Navbar />
      <div className="pt-24" />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_200px_at_50%_-100px,rgba(239,68,68,0.18),transparent)] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-semibold">Case Studies</h1>
          <p className="mt-3 text-white/70 max-w-2xl">Deep dives into process, rationale, and measurable impact — from systems and HMI to data‑rich SaaS.</p>
        </div>
      </div>

      <Section id="cases" title="Selected Work" subtitle="Each case includes goals, constraints, design rationale, and outcomes.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <article key={c.id} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(600px_200px_at_50%_-80px,rgba(239,68,68,0.18),transparent)]" />
              <div className="p-6">
                <p className="text-xs tracking-wider text-red-300">CASE {c.id}</p>
                <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded border border-white/10 text-white/70">{t}</span>
                  ))}
                </div>
                <button className="mt-5 text-red-300 hover:text-white inline-flex items-center gap-1">Read Case →</button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <footer className="py-12 border-t border-white/10 text-center text-white/50">
        © {new Date().getFullYear()} Diganta Roy — Case Studies
      </footer>
    </div>
  );
}
