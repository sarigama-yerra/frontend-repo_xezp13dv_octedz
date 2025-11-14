import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'cases', label: 'Case Studies' },
    { id: 'process', label: 'Process' },
    { id: 'tools', label: 'Tools' },
    { id: 'contact', label: 'Contact' },
  ];

  const pages = [
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/skills', label: 'Skills' },
    { to: '/highlights', label: 'Highlights' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gradient-to-tr from-red-600 to-red-400 rounded-sm rotate-6 shadow-[0_0_20px_rgba(239,68,68,0.6)]" />
            <Link to="/" className="text-white font-semibold tracking-wide">Diganta Roy</Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {sections.map((it) => (
              <button
                key={it.id}
                onClick={() => scrollTo(it.id)}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {it.label}
              </button>
            ))}
            <div className="h-5 w-px bg-white/20 mx-1" />
            {pages.map((p) => (
              <Link key={p.to} to={p.to} className="text-sm text-red-300 hover:text-white transition-colors">
                {p.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="mx-auto max-w-7xl px-4 py-4 grid grid-cols-2 gap-3">
            {sections.map((it) => (
              <button
                key={it.id}
                onClick={() => scrollTo(it.id)}
                className="text-left text-white/90 py-2 px-3 rounded border border-white/10 hover:border-red-500/60 hover:bg-white/5 transition"
              >
                {it.label}
              </button>
            ))}
            {pages.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                onClick={() => setOpen(false)}
                className="text-left text-red-300 py-2 px-3 rounded border border-white/10 hover:border-red-500/60 hover:bg-white/5 transition"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
