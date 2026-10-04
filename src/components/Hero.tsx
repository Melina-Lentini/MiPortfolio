import { useEffect, useState } from 'react';
import { FileText, ChevronDown } from 'lucide-react';

const roles = [
  'Lic. en Administración de Empresas',
  'Bug Bounty Hunter & Pentester Jr.',
  'HTB Ambassador & ThreatX Co-Founder',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 45);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-pink-500/4 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >

        {/* Profile photo */}
        <div className="relative mx-auto mb-6 w-32 h-32">
          <img
            src="/images/IMG_0393.jpeg"
            alt="Melina Noelia Lentini"
            className="w-32 h-32 rounded-2xl object-cover border border-fuchsia-500/40 shadow-xl shadow-fuchsia-500/10"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-fuchsia-500 border-2 border-gray-950" />
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
          Melina Noelia{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">
            Lentini
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="h-8 sm:h-10 mb-6 flex items-center justify-center">
          <p className="text-base sm:text-lg text-fuchsia-400 font-mono font-medium">
            {displayed}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Bio de impacto */}
        <p className="max-w-2xl mx-auto text-gray-200 text-lg sm:text-xl font-light leading-relaxed mb-8">
          Licenciada en Administración y profesional de RRHH <span className="text-white font-medium">construyendo mi camino en la Ciberseguridad</span>. 
          Me formo de manera autodidacta y utilizo el <span className="text-fuchsia-300 font-medium">Bug Bounty</span> como mi campo de entrenamiento práctico y real.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="/CV_MelinaLentini.pdf"
            download="CV_MelinaLentini.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 hover:-translate-y-0.5"
          >
            <FileText size={16} />
            Ver CV
          </a>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-700 hover:border-fuchsia-500/50 text-gray-300 hover:text-white font-medium text-sm transition-all duration-200 hover:bg-gray-800/50 hover:-translate-y-0.5"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <ChevronDown size={20} className="text-gray-600 animate-bounce" />
      </div>
    </section>
  );
}