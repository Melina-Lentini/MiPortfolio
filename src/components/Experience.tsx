import { useRef, useEffect, useState } from 'react';
import { Building2, Globe, ChevronDown, ChevronUp, CheckCircle2, Star } from 'lucide-react';

function useVisible() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const experiences = [
  {
    id: 'roffo',
    company: 'Instituto de Oncología "Ángel H. Roffo" (UBA)',
    role: 'Supervisora Administrativa — Área Personal',
    period: 'Abril 2012 — Presente',
    duration: '+14 años',
    type: 'Presencial',
    icon: Building2,
    color: 'pink',
    summary:
      'Supervisión de procesos administrativos, control de asistencia y cumplimiento normativo para una plantilla de más de 700 empleados en un entorno crítico hospitalario (24/7). Colaboración activa con el equipo de TIC en la definición, prueba e implementación de software interno.',
    responsibilities: [
      'Supervisión de asistencia del personal de la Institución (+700 empleados).',
      'Colaboración con el equipo de TIC: Relevamiento de requerimientos de negocio y definición de reglas operativas para el desarrollo de un sistema de control de asistencia a medida.',
      'Gestión de licencias, ausencias y trámites ante la ART.',
      'Coordinación con medicina laboral para seguimiento de licencias por enfermedad',
      'Garantía de cumplimiento normativo, aplicación de convenios laborales y resolución de incidencias operativas.',
    ],
    achievements: [
  {
      title: 'Migración y Validación de Datos de Asistencia',
      desc: 'Articulo junto a la Dirección de TIC la preparación, carga y validación de datos de más de 700 agentes para la implementación del nuevo sistema de asistencia, asegurando la continuidad operativa y la integridad de los registros.'
    },
      {
      title: 'Optimización Operativa y Cumplimiento Normativo',
      desc: 'Estandaricé los flujos de trabajo para la solicitud de licencias y el seguimiento de ausentismo de más de 700 agentes, asegurando un 100% de alineación con la normativa laboral vigente y generando reportes de control clave para la Dirección.'
    },
    ],
  },
  {
    id: 'haxor',
    company: 'Haxor Ventures',
    role: 'Jr. Penetration Tester',
    period: 'Febrero 2025 — Junio 2025',
    duration: '5 meses',
    type: 'Remoto Freelance',
    icon: Globe,
    color: 'fuchsia',
    summary:
      'Participación en proyectos de pruebas de penetración controladas para clientes de la empresa, aplicando metodologías de seguridad ofensiva bajo supervisión.',
    responsibilities: [
      'Reconocimiento y enumeración: Análisis OSINT y escaneo de activos objetivo mediante Nmap y herramientas de enumeración pasiva/activa.',
      'Explotación controlada de fallos en entornos autorizados para confirmar vectores de ataque y su impacto real.',
      'Identificación y evaluación de vulnerabilidades en aplicaciones web alineadas al estándar OWASP Top 10.',
      'Identificación y reporte de vectores de ataque en aplicaciones web',
      'Elaboración de documentación y reportes técnicos detallados con evidencias, PoC (Pruebas de Concepto) y recomendaciones de remediación',
      'Trabajo coordinado con equipo de seguridad para validación de resultados',
    ],
    achievements: [],
  },
];

export default function Experience() {
  const { ref, visible } = useVisible();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ roffo: false });

  return (
    <section id="experience" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-fuchsia-500" />
            <span className="text-fuchsia-400 text-sm font-mono tracking-widest uppercase">Trayectoria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Experiencia Profesional</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-500/40 via-gray-700 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const isOpen = expanded[exp.id];
              const accent = exp.color === 'fuchsia' ? 'fuchsia' : 'pink';
              return (
                <div
                  key={exp.id}
                  className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex gap-4 sm:gap-8">
                    {/* Timeline dot */}
                    <div className="hidden sm:flex flex-col items-center relative z-10 mt-5">
                      <div className={`w-4 h-4 rounded-full border-2 ${accent === 'fuchsia' ? 'border-fuchsia-500 bg-fuchsia-500/20' : 'border-pink-500 bg-pink-500/20'} flex-shrink-0`} />
                    </div>

                    {/* Card */}
                    <div className={`flex-1 bg-gray-900/60 border rounded-2xl overflow-hidden transition-all duration-300 hover:border-opacity-60 ${accent === 'fuchsia' ? 'border-fuchsia-500/20 hover:border-fuchsia-500/40' : 'border-pink-500/20 hover:border-pink-500/40'}`}>
                      {/* Header */}
                      <div className="p-5 sm:p-6">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${accent === 'fuchsia' ? 'bg-fuchsia-500/10 border border-fuchsia-500/20' : 'bg-pink-500/10 border border-pink-500/20'}`}>
                              <exp.icon size={18} className={accent === 'fuchsia' ? 'text-fuchsia-400' : 'text-pink-400'} />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-base leading-tight">{exp.role}</h3>
                              <p className={`text-sm font-medium mt-0.5 ${accent === 'fuchsia' ? 'text-fuchsia-400' : 'text-pink-400'}`}>{exp.company}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 items-center">
                            <span className="text-xs text-gray-400 font-mono">{exp.period}</span>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${accent === 'fuchsia' ? 'bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20' : 'bg-pink-500/10 text-pink-400 border border-pink-500/20'}`}>
                              {exp.duration}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-xs text-gray-500 border border-gray-700">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">{exp.summary}</p>

                        <button
                          onClick={() => setExpanded(prev => ({ ...prev, [exp.id]: !prev[exp.id] }))}
                          className={`mt-4 flex items-center gap-1.5 text-xs font-medium transition-colors ${accent === 'fuchsia' ? 'text-fuchsia-500 hover:text-fuchsia-300' : 'text-pink-500 hover:text-pink-300'}`}
                        >
                          {isOpen ? <><ChevronUp size={14} /> Ocultar detalles</> : <><ChevronDown size={14} /> Ver detalles</>}
                        </button>
                      </div>

                      {/* Expandable content */}
                      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-5 sm:px-6 pb-6 border-t border-gray-800/60 pt-5">
                          <div className={`${exp.achievements.length > 0 ? 'grid md:grid-cols-2 gap-5' : ''}`}>
                            {/* Responsibilities */}
                            <div>
                              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">Responsabilidades</h4>
                              <ul className="space-y-2">
                                {exp.responsibilities.map((r, i) => (
                                  <li key={i} className="flex gap-2.5 text-sm text-gray-400">
                                    <CheckCircle2 size={14} className={`mt-0.5 flex-shrink-0 ${accent === 'fuchsia' ? 'text-fuchsia-500/60' : 'text-pink-500/60'}`} />
                                    <span>{r}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Achievements */}
                            {exp.achievements.length > 0 && (
                              <div>
                                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                  <Star size={12} className="text-yellow-500" />
                                  Logros e Implementaciones
                                </h4>
                                <div className="space-y-3">
                                  {exp.achievements.map((a, i) => (
                                    <div key={i} className="p-3 rounded-xl bg-gray-800/40 border border-gray-700/50">
                                      <p className="text-white font-medium text-sm mb-1">{a.title}</p>
                                      <p className="text-gray-400 text-xs leading-relaxed">{a.desc}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
