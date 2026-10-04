import { useRef, useEffect, useState } from 'react';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';

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

const courses = [
  { label: 'Cloud Solutions Architect Trainee', org: 'InTech MOM LATAM', category: 'Cloud' },
  { label: 'Testing QA Manual', org: 'Codo a Codo', category: 'QA' },
  { label: 'Bash & Command Line', org: 'Codecademy', category: 'Sistemas' },
  { label: 'Python', org: 'Codecademy', category: 'Dev' },
  { label: 'SQL', org: 'Codecademy', category: 'Data' },
  { label: 'JavaScript', org: 'Coderhouse', category: 'Dev' },
  { label: 'Desarrollo Web', org: 'Coderhouse', category: 'Dev' },
];

const unsamHighlights = [
  'Administración Empresarial',
  'Gestión Estratégica',
  'RRHH & Organización',
  'Análisis Procesal',
];

export default function Education() {
  const { ref, visible } = useVisible();

  return (
    <section id="education" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-fuchsia-500" />
            <span className="text-fuchsia-400 text-sm font-mono tracking-widest uppercase">Formación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Educación & Formación</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Educación Formal */}
          <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap size={18} className="text-fuchsia-400" />
                  <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">Educación Formal</h3>
                </div>

                <div className="relative pl-5 border-l border-fuchsia-500/30">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-fuchsia-500 border-2 border-gray-950" />

                  <div className="mb-2 flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-medium">
                      Graduada / Completado
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-xs font-mono">
                      <Calendar size={12} />
                      <span>2008 — 2020</span>
                    </div>
                  </div>

                  <h4 className="text-white font-bold text-lg leading-snug">
                    Licenciatura en Administración de Empresas y Gestión Empresarial
                  </h4>
                  <p className="text-fuchsia-400 text-sm font-medium mt-1">
                    Universidad Nacional de San Martín (UNSAM)
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">San Martín, Buenos Aires, Argentina</p>
                </div>
              </div>

              {/* Pilares académicos UNSAM */}
              <div className="mt-8 pt-5 border-t border-gray-800/80">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Award size={14} className="text-fuchsia-400" />
                  Especialización & Áreas Clave:
                </p>
                <div className="flex flex-wrap gap-2">
                  {unsamHighlights.map(item => (
                    <span key={item} className="px-2.5 py-1 text-xs rounded-md bg-gray-800/80 border border-gray-700/60 text-gray-300 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Formación Complementaria */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={18} className="text-fuchsia-400" />
                  <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">Formación Tecnológica & Cursos</h3>
                </div>

                <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                  Capacitación continua en plataformas de tecnología, desarrollo de software, análisis de datos y entornos cloud.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {courses.map((c, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-fuchsia-500/30 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-white text-xs font-medium block leading-snug">{c.label}</span>
                        <span className="text-gray-500 text-[11px] block mt-1">{c.org}</span>
                      </div>
                      <span className="self-start mt-2 px-2 py-0.5 rounded text-[10px] font-mono bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20">
                        {c.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}