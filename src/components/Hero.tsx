import { Shield, Award, Terminal, Users, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950 text-gray-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-300">Mí</span>
          </h2>
          <div className="w-16 h-1 bg-fuchsia-500 mx-auto rounded-full mb-6" />
        </div>

        {/* Presentación Principal */}
        <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-10 backdrop-blur-sm shadow-xl">
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-light mb-6">
            Soy <strong className="text-white font-semibold">Licenciada en Administración de Empresas</strong> enfocada en el desarrollo profesional dentro de la <strong className="text-fuchsia-400 font-semibold">ciberseguridad y el pentesting</strong>. Actualmente, me desempeño como <strong className="text-white font-semibold">Embajadora de Hack The Box en Argentina</strong> y <strong className="text-white font-semibold">Co-Fundadora de ThreatX Security</strong>.
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light mb-6">
            Utilizo la práctica constante en <strong className="text-fuchsia-300 font-medium">Bug Bounty</strong> y plataformas de entrenamiento como mi campo de pruebas principal, habiendo descubierto y reportado vulnerabilidades de impacto que me permitieron registrar un <strong className="text-fuchsia-400 font-semibold">CVE oficial</strong>. 
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
            Mi perfil combina la capacidad de gestión estratégica y visión de procesos de mi formación universitaria con la resolución técnica de problemas en seguridad de la información. Me entusiasma seguir aplicando mis conocimientos técnicos y de gestión en nuevos desafíos del área.
          </p>
        </div>

        {/* Tarjetas de Hitos / Destacados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: CVE Registrado */}
          <div className="bg-gray-900/40 border border-fuchsia-500/20 hover:border-fuchsia-500/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              CVE Registrado
              <a 
                href="https://www.cve.org/CVERecord?id=CVE-2026-14840" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                title="Ver registro oficial"
              >
                <ExternalLink size={16} />
              </a>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Descubrimiento, documentación y reporte responsable de la vulnerabilidad <strong className="text-gray-200">CVE-2026-14840</strong>, incluyendo desarrollo de PoC y remediación.
            </p>
          </div>

          {/* Card 2: Liderazgo Comunitario */}
          <div className="bg-gray-900/40 border border-fuchsia-500/20 hover:border-fuchsia-500/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Comunidad & HTB</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Embajadora de Hack The Box Meetups Argentina y Co-Fundadora de ThreatX Security, impulsando la formación técnica y networking en la región.
            </p>
          </div>

          {/* Card 3: Enfoque Práctico */}
          <div className="bg-gray-900/40 border border-fuchsia-500/20 hover:border-fuchsia-500/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mb-4">
              <Terminal size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Práctica Continua</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Investigación activa en programas de Bug Bounty (VDP), resolución de laboratorios en HTB, TryHackMe y PortSwigger Web Security Academy.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}