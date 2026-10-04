import { useRef, useEffect, useState } from 'react';
import { Brain, Zap, Target, Rocket, Globe, Shield, Search, Bug, Network, Terminal, FileCode2, ClipboardCheck } from 'lucide-react';

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

const softSkills = [
  { icon: Brain, label: 'Pensamiento Analítico', desc: 'Resolución de problemas con enfoque estructurado' },
  { icon: Zap, label: 'Adaptabilidad', desc: 'Rápida adaptación a entornos cambiantes' },
  { icon: Target, label: 'Perseverancia', desc: 'Compromiso constante con el aprendizaje y los objetivos' },
  { icon: Rocket, label: 'Actitud Proactiva', desc: 'Iniciativa para anticipar necesidades y proponer mejoras' },
];

const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'A2 Técnico / Lectura' },
  { name: 'Portugués', level: 'A2+ Intermedio inicial' },
];

const cyberTools = [
  { icon: Network, label: 'Nmap', desc: 'Escaneo de redes y puertos' },
  { icon: Bug, label: 'Burp Suite', desc: 'Interceptación y análisis web' },
  { icon: Search, label: 'Wireshark', desc: 'Análisis de tráfico de red' },
  { icon: Shield, label: 'OWASP Top 10', desc: 'Vulnerabilidades web críticas' },
];

const techStack = ['Linux', 'Bash', 'Git', 'Python', 'SQL', 'HTML/CSS/JS'];
const platforms = ['Hack The Box', 'TryHackMe', 'PortSwigger Academy'];

export default function About() {
  const { ref, visible } = useVisible();

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Encabezado */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-fuchsia-500" />
            <span className="text-fuchsia-400 text-sm font-mono tracking-widest uppercase">Perfil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Sobre mí & Skills</h2>
        </div>

        {/* 1. HABILIDADES BLANDAS */}
        <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-5">Habilidades Blandas</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((s, i) => (
                <div
                  key={s.label}
                  className="flex gap-4 p-4 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-fuchsia-500/30 transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-fuchsia-500/15 transition-colors">
                    <s.icon size={18} className="text-fuchsia-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{s.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. CIBERSEGURIDAD & HACKING ÉTICO */}
        <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-fuchsia-950/40 to-gray-900/50 border border-fuchsia-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-fuchsia-500/15 border border-fuchsia-500/30 flex items-center justify-center">
                <Shield size={16} className="text-fuchsia-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base">Ciberseguridad & Hacking Ético</h3>
                <p className="text-gray-500 text-xs">Formación autodidacta continua en pentesting y seguridad ofensiva</p>
              </div>
              <div className="ml-auto px-2.5 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-mono hidden sm:block">
                En formación activa
              </div>
            </div>

            {/* Herramientas Principales */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {cyberTools.map((t, i) => (
                <div
                  key={t.label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-fuchsia-500/30 transition-all duration-300"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <t.icon size={16} className="text-fuchsia-400 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{t.label}</p>
                    <p className="text-gray-500 text-xs">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Plataformas y Entorno Técnico */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Plataformas de Aprendizaje */}
              <div className="p-4 rounded-xl bg-gray-900/70 border border-gray-800">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono text-fuchsia-400 uppercase tracking-wider">
                  <Terminal size={14} />
                  Plataformas de Formación
                </div>
                <div className="flex flex-wrap gap-2">
                  {platforms.map(p => (
                    <span key={p} className="px-2.5 py-1 text-xs rounded-md bg-fuchsia-500/10 border border-fuchsia-500/25 text-fuchsia-300 font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tecnologías de Soporte */}
              <div className="p-4 rounded-xl bg-gray-900/70 border border-gray-800">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono text-fuchsia-400 uppercase tracking-wider">
                  <FileCode2 size={14} />
                  Tecnologías & Entorno
                </div>
                <div className="flex flex-wrap gap-2">
                  {techStack.map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-gray-800 border border-gray-700 text-gray-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fases del Pentesting / Entregables */}
            <div className="mt-4 p-4 rounded-xl bg-gray-900/40 border border-gray-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <span className="font-mono text-gray-400 flex items-center gap-2 shrink-0">
                <ClipboardCheck size={14} className="text-fuchsia-400" />
                Enfoque Operativo:
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-300">
                <span>• Reconocimiento Activo/Pasivo</span>
                <span>• Identificación de Vulnerabilidades</span>
                <span>• Reportes Técnicos & Remediación</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. IDIOMAS */}
        <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-2">
              <Globe size={16} className="text-fuchsia-400" />
              Idiomas
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {languages.map(l => (
                <div key={l.name} className="flex items-center justify-between p-4 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-fuchsia-500/30 transition-colors">
                  <span className="text-white text-sm font-medium">{l.name}</span>
                  <span className="px-2.5 py-1 text-xs rounded-md bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 font-mono">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}