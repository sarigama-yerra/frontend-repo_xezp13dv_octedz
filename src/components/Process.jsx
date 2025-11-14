import { ArrowRight, Target, Lightbulb, Ruler, Rocket } from 'lucide-react';

const steps = [
  { icon: Target, title: 'Discover', desc: 'Understand users, define goals, align on vision.' },
  { icon: Lightbulb, title: 'Define', desc: 'Scope features, map flows, set success metrics.' },
  { icon: Ruler, title: 'Design', desc: 'Systems, wireframes, visuals, motion principles.' },
  { icon: Rocket, title: 'Deliver', desc: 'Prototypes, specs, QA support, iterate with data.' },
];

export default function Process() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {steps.map(({ icon: Icon, title, desc }, i) => (
        <div key={i} className="relative rounded-xl border border-white/10 bg-black/40 p-6">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-red-600/10 to-transparent" />
          <div className="relative">
            <Icon className="text-red-400" />
            <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-1 text-white/70 text-sm">{desc}</p>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-white/20" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
