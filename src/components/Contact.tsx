import { useRef, useEffect, useState } from 'react';
import { Mail, Linkedin, MapPin, Send, ExternalLink, Shield } from 'lucide-react';

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

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'melina.lentini@icloud.com',
    href: 'mailto:melina.lentini@icloud.com',
    color: 'fuchsia',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/melinalentini',
    href: 'https://linkedin.com/in/melinalentini',
    color: 'pink',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'San Martín, Buenos Aires, Argentina',
    href: null,
    color: 'gray',
  },
];

const techProfiles = [
  { label: 'Hack The Box', badge: 'HTB', href: 'https://app.hackthebox.com/public/users/514482', color: 'fuchsia' },
  { label: 'TryHackMe', badge: 'THM', href: 'https://tryhackme.com/p/M3l3n', color: 'rose' },
];

const colorMap: Record<string, string> = {
  fuchsia: 'bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-400 hover:border-fuchsia-500/50',
  pink: 'bg-pink-500/10 border-pink-500/20 text-pink-400 hover:border-pink-500/50',
  rose: 'bg-rose-500/10 border-rose-500/20 text-rose-400 hover:border-rose-500/50',
  gray: 'bg-gray-800/50 border-gray-700 text-gray-400',
};

export default function Contact() {
  const { ref, visible } = useVisible();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-fuchsia-500" />
            <span className="text-fuchsia-400 text-sm font-mono tracking-widest uppercase">Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Hablemos</h2>
          <p className="text-gray-400 mb-12 max-w-xl">
            Abierta a oportunidades profesionales, colaboraciones en comunidades de seguridad y proyectos de tecnología y gestión.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <div className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {contactItems.map(item => (
              <div
                key={item.label}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${colorMap[item.color]}`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color !== 'gray' ? `bg-${item.color}-500/10` : 'bg-gray-700/50'}`}>
                  <item.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-fuchsia-300 transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Tech profiles */}
            <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">Perfiles Técnicos</p>
              <div className="space-y-2.5">
                {techProfiles.map(p => (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 hover:-translate-y-0.5 group ${colorMap[p.color]}`}
                  >
                    <span className="px-2 py-0.5 text-xs font-mono rounded font-bold">
                      {p.badge}
                    </span>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{p.label}</span>
                    <ExternalLink size={12} className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sm:p-7">
              <h3 className="text-white font-semibold mb-5">Enviar mensaje</h3>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center mb-4">
                    <Send size={22} className="text-fuchsia-400" />
                  </div>
                  <p className="text-white font-semibold mb-1">Mensaje enviado</p>
                  <p className="text-gray-400 text-sm">Gracias por contactarte. Te responderé pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Nombre</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Tu nombre"
                        className="w-full px-3.5 py-2.5 bg-gray-800/60 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="tu@email.com"
                        className="w-full px-3.5 py-2.5 bg-gray-800/60 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/20 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Asunto</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      placeholder="¿De qué se trata?"
                      className="w-full px-3.5 py-2.5 bg-gray-800/60 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">Mensaje</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Cuéntame más..."
                      className="w-full px-3.5 py-2.5 bg-gray-800/60 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/20 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-400 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 hover:-translate-y-0.5"
                  >
                    <Send size={15} />
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-800/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-fuchsia-400" />
            <span className="text-gray-500 text-sm">
              Melina Noelia Lentini &mdash; Portfolio 2026
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-600 text-xs">
            <a href="mailto:melina.lentini@icloud.com" className="hover:text-gray-300 transition-colors">
              melina.lentini@icloud.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}