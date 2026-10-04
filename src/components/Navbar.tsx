import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Comunidades', href: '#communities' },
  { label: 'Educación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800/60 shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => handleNav('#hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center group-hover:bg-fuchsia-500/20 transition-colors">
              <Shield size={16} className="text-fuchsia-400" />
            </div>
            <span className="text-sm font-semibold text-white tracking-wide hidden sm:block">
              M. Lentini
            </span>
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
                    active === l.href.slice(1)
                      ? 'text-fuchsia-400 bg-fuchsia-500/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-gray-300 hover:text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-md border-t border-gray-800/60">
            <ul className="flex flex-col py-2">
              {links.map(l => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className={`w-full text-left px-6 py-3 text-sm transition-colors ${
                      active === l.href.slice(1)
                        ? 'text-fuchsia-400 bg-fuchsia-500/5'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-fuchsia-500 text-white flex items-center justify-center shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-400 transition-all duration-300 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Volver arriba"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
