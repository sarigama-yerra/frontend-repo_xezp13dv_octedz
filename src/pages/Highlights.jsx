import Navbar from '../components/Navbar';
import Section from '../components/Section';
import { HighlightsGrid } from '../components/Grids';

export default function Highlights() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600/30">
      <Navbar />
      <div className="pt-24" />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_200px_at_50%_-100px,rgba(239,68,68,0.18),transparent)] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-semibold">Project Highlights</h1>
          <p className="mt-3 text-white/70 max-w-2xl">Selected work that showcases clarity, speed, and precision across products and platforms.</p>
        </div>
      </div>

      <Section id="highlights" title="Highlights" subtitle="Snapshots of impact and craft.">
        <HighlightsGrid />
      </Section>

      <footer className="py-12 border-t border-white/10 text-center text-white/50">
        © {new Date().getFullYear()} Diganta Roy — Highlights
      </footer>
    </div>
  );
}
