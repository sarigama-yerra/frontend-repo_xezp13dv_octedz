import { Layers, Cpu, Compass, Zap, PenTool, MonitorSmartphone, Sparkles, LayoutGrid } from 'lucide-react';

export function SkillsGrid() {
  const items = [
    { icon: PenTool, title: 'UX Strategy', desc: 'Research, IA, journeys, flows' },
    { icon: LayoutGrid, title: 'UI Systems', desc: 'Design systems, tokens, components' },
    { icon: MonitorSmartphone, title: 'Product Design', desc: 'Responsive, native patterns' },
    { icon: Layers, title: 'Prototyping', desc: 'Interactive, motion, micro-interactions' },
    { icon: Cpu, title: 'HMI/Automotive', desc: 'Infotainment, clusters, mobility' },
    { icon: Zap, title: 'Performance', desc: 'Data-driven, fast, accessible' },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(({ icon: Icon, title, desc }, i) => (
        <div key={i} className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-red-500/50 transition">
          <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(400px_120px_at_var(--mx,_50%)_-20px,rgba(239,68,68,0.2),transparent)]" />
          <Icon className="text-red-400" />
          <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-white/70 text-sm">{desc}</p>
        </div>
      ))}
    </div>
  );
}

export function ToolsStrip() {
  const tools = ['Figma', 'Framer', 'After Effects', 'Illustrator', 'Spline', 'Notion', 'Jira', 'Miro'];
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-orange-500/10 to-red-600/10" />
      <div className="relative flex gap-6 whitespace-nowrap p-6 animate-[marquee_18s_linear_infinite]">
        {tools.concat(tools).map((t, i) => (
          <span key={i} className="text-white/80 text-sm px-4 py-2 rounded border border-white/15 bg-black/30">{t}</span>
        ))}
      </div>
      <style>{`@keyframes marquee {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

export function HighlightsGrid() {
  const items = [
    {
      title: 'EV Charging Experience',
      tag: 'HMI • Mobility',
      desc: 'End-to-end flows for charging, route planning, and energy insights.',
    },
    {
      title: 'Connected Car App',
      tag: 'Mobile • Product',
      desc: 'Remote start, vehicle health, and smart alerts with a bold UI system.',
    },
    {
      title: 'Infotainment OS',
      tag: 'Systems • UI',
      desc: 'Modular UI framework for clusters and center stacks with motion language.',
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((it, i) => (
        <article key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
          <div className="absolute -right-10 -top-10 h-40 w-40 rotate-45 bg-gradient-to-tr from-red-600/30 to-orange-500/30 blur-2xl" />
          <div className="p-6">
            <p className="text-xs tracking-wider text-red-300">{it.tag}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{it.title}</h3>
            <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
            <button className="mt-4 text-red-300 hover:text-white inline-flex items-center gap-1">
              View Project <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
