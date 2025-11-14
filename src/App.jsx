import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import { SkillsGrid, ToolsStrip, HighlightsGrid } from './components/Grids';
import Process from './components/Process';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600/30">
      <Navbar />
      <Hero />

      <Section id="about" title="About Me" subtitle="UX/UI Designer focused on connected, mobility-first experiences.">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-white/80 leading-relaxed">
            With a background in automotive HMI and consumer tech, I design crisp interfaces that feel fast, intuitive, and refined. My work blends strategy and craft — from systems and tokens to motion and micro-interactions — always grounded in user needs and business outcomes.
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              ['Years Experience', '7+'],
              ['Sectors', 'Automotive, Mobility, SaaS'],
              ['Focus', 'HMI, Design Systems, Motion'],
              ['Location', 'Remote / Onsite'],
            ].map(([k, v], i) => (
              <div key={i} className="rounded-lg border border-white/10 p-4 bg-white/[0.03]">
                <p className="text-white/50">{k}</p>
                <p className="text-white font-semibold mt-1">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills" subtitle="Strategy, systems, and execution with a performance mindset.">
        <SkillsGrid />
      </Section>

      <Section id="highlights" title="Project Highlights" subtitle="Selected work that showcases clarity, speed, and precision.">
        <HighlightsGrid />
      </Section>

      <Section id="cases" title="Case Studies" subtitle="Deep dives into process, rationale, and measurable impact.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2,3,4].map((n) => (
            <article key={n} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(600px_200px_at_50%_-80px,rgba(239,68,68,0.18),transparent)]" />
              <div className="p-6">
                <p className="text-xs tracking-wider text-red-300">CASE 0{n}</p>
                <h3 className="mt-2 text-xl font-semibold">Performance-first UI System</h3>
                <p className="mt-2 text-white/70 text-sm">A modular design language built for speed, accessibility, and brand expression across platforms.</p>
                <button className="mt-4 text-red-300 hover:text-white inline-flex items-center gap-1">Read Case →</button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="process" title="Process" subtitle="A clear path from insight to impact.">
        <Process />
      </Section>

      <Section id="tools" title="Tools" subtitle="A modern stack for speed and collaboration.">
        <ToolsStrip />
      </Section>

      <Section id="contact" title="Contact" subtitle="Let’s discuss how I can help design your next product.">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input placeholder="Name" className="col-span-1 md:col-span-1 rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-red-500" />
          <input placeholder="Email" className="col-span-1 md:col-span-1 rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-red-500" />
          <input placeholder="Company" className="col-span-1 md:col-span-1 rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-red-500" />
          <textarea placeholder="Project details" rows="5" className="md:col-span-3 rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-red-500" />
          <button className="justify-self-start rounded-md bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(239,68,68,0.45)] hover:shadow-[0_0_40px_rgba(249,115,22,0.55)]">Send Inquiry</button>
        </form>
      </Section>

      <footer className="py-12 border-t border-white/10 text-center text-white/50">
        © {new Date().getFullYear()} Diganta Roy — Designing Connected Experiences
      </footer>
    </div>
  );
}

export default App;
