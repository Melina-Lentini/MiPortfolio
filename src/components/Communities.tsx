import { useRef, useEffect, useState } from 'react';
import { Users, Calendar, Megaphone, Network, Award, ExternalLink } from 'lucide-react';

function useVisible() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const communities = [
   {
    id: 'htb',
    name: 'Hack The Box',
    role: 'Ambassador',
    period: 'Febrero 2024 — Presente',
    href: 'https://app.hackthebox.com/profile/514482',
    tagline: 'Representante oficial de HTB en Argentina',
    description:
      'Representación oficial de la plataforma en Argentina, creando espacios de participación y colaboración técnica en ciberseguridad ofensiva, conectando la comunidad local con la red global.',
    highlights: [
      { icon: Users, text: 'Organización de meetups y charlas técnicas' },
      { icon: Megaphone, text: 'Sinergia con ThreatX Security y Bug Bounty Girls Club distribuyendo vouchers.' },
      { icon: Award, text: 'Fomento del aprendizaje práctico y resolución colaborativa de máquinas' },
{ icon: Network, text: 'Promoción de CTFs y difusión de la plataforma HTB Academy' },
    ],
    badge: { label: 'Official Ambassador', color: 'fuchsia' },
    accentColor: 'fuchsia',
    logo: 'HTB',
  },
  {
    id: 'threatx',
    name: 'ThreatX Security',
    role: 'Co-Founder',
    period: 'Febrero 2025 — Presente',
    href: 'https://www.threatxsecurity.com/',
    tagline: 'Comunidad de ciberseguridad impulsada por alianzas globales',
    description:
      'Cofundadora de una comunidad dedicada a conectar talento e impulsar el aprendizaje práctico en el mundo hispanoparlante, respaldada por referentes e instituciones líderes de la industria.',
    highlights: [
      { icon: Calendar, text: 'Organización de eventos presenciales y online con charlas técnicas' },
      { icon: Award, text: 'Gestión de sponsors (HTB, APIsec University, PentesterLab, ArtSec, PhiloCyber)' },
      { icon: Users, text: 'Coordinación de premios, licencias y sorteos para la comunidad' },
      { icon: Network, text: 'Resolución colaborativa de máquinas y networking estratégico' },
    ],
    badge: { label: 'Co-Fundadora', color: 'pink' },
    accentColor: 'pink',
    logo: 'TX',
  },
];

export default function Communities() {
  const { ref, visible } = useVisible();

  return (
    <section id="communities" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-fuchsia-500" />
            <span className="text-fuchsia-400 text-sm font-mono tracking-widest uppercase">Comunidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Comunidades & Proyectos</h2>
          <p className="text-gray-400 mb-12 max-w-xl">
            Liderando y construyendo el ecosistema de ciberseguridad en Argentina e Hispanoamérica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {communities.map((c, idx) => {
            const isFuchsia = c.accentColor === 'fuchsia';
            return (
              <div
                key={c.id}
                className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className={`relative h-full rounded-2xl border overflow-hidden group transition-all duration-300 hover:-translate-y-1 ${isFuchsia ? 'bg-gradient-to-br from-fuchsia-950/30 to-gray-900/80 border-fuchsia-500/20 hover:border-fuchsia-500/40 hover:shadow-xl hover:shadow-fuchsia-500/10' : 'bg-gradient-to-br from-pink-950/30 to-gray-900/80 border-pink-500/20 hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/10'}`}>

                  {/* Corner glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none ${isFuchsia ? 'bg-fuchsia-500/8' : 'bg-pink-500/8'}`} />

                  <div className="relative p-6 sm:p-7">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-lg font-bold tracking-tight ${isFuchsia ? 'bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-400' : 'bg-pink-500/10 border-pink-500/30 text-pink-400'}`}>
                          {c.logo}
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg leading-tight">{c.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${isFuchsia ? 'bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30' : 'bg-pink-500/15 text-pink-300 border border-pink-500/30'}`}>
                              {c.badge.label}
                            </span>
                          </div>
                        </div>
                      </div>
                      {c.href && (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-lg border transition-colors ${isFuchsia ? 'border-fuchsia-500/20 text-fuchsia-500 hover:bg-fuchsia-500/10' : 'border-pink-500/20 text-pink-500 hover:bg-pink-500/10'}`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                      <Calendar size={12} />
                      <span>{c.period}</span>
                    </div>

                    {/* Tagline */}
                    <p className={`text-sm font-medium mb-3 ${isFuchsia ? 'text-fuchsia-300' : 'text-pink-300'}`}>
                      {c.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {c.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider">Actividades clave</h4>
                      {c.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm text-gray-400">
                          <h.icon size={14} className={isFuchsia ? 'text-fuchsia-500 flex-shrink-0' : 'text-pink-500 flex-shrink-0'} />
                          <span>{h.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}