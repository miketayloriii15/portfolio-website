import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, MessageSquare } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const contactItems = [
  {
    icon: Mail,
    label: 'Work Email',
    value: 'mike.tayloriii@cookmedical.com',
    href: 'mailto:mike.tayloriii@cookmedical.com',
    color: 'blue',
  },
  {
    icon: Mail,
    label: 'Personal Email',
    value: 'miketayloriii15@gmail.com',
    href: 'mailto:miketayloriii15@gmail.com',
    color: 'blue',
  },
  {
    icon: Phone,
    label: 'Work Phone',
    value: '812-318-2817',
    href: 'tel:+18123182817',
    color: 'cyan',
  },
  {
    icon: Phone,
    label: 'Personal Phone',
    value: '317-360-3139',
    href: 'tel:+13173603139',
    color: 'cyan',
  },
  {
    icon: Phone,
    label: 'PL Phone',
    value: '+48 571 211 479',
    href: 'tel:+48571211479',
    color: 'cyan',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Indianapolis, Indiana, USA',
    href: null,
    color: 'purple',
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mike-taylor-iii-986b9910b/',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/miketayloriii15',
    description: 'View projects & code',
  },
  {
    icon: MessageSquare,
    label: 'Substack',
    href: 'https://miketayloriii.substack.com',
    description: 'Read my writing',
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'rgba(59,130,246,0.08)', text: '#60a5fa', border: 'rgba(59,130,246,0.2)' },
  cyan: { bg: 'rgba(6,182,212,0.08)', text: '#22d3ee', border: 'rgba(6,182,212,0.2)' },
  purple: { bg: 'rgba(139,92,246,0.08)', text: '#a78bfa', border: 'rgba(139,92,246,0.2)' },
}

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className="py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-5"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-4"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
      </div>

      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Heading */}
          <div className="mb-16 text-center">
            <p className="text-blue-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
              Contact
            </p>
            <h2 className="section-heading">
              Let's{' '}
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subheading mx-auto text-center">
              Interested in enterprise AI, collaboration, or just want to talk technology?
              Reach out — I'm always open to meaningful conversations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-semibold text-white text-lg mb-2">Direct Contact</h3>
              {contactItems.map(({ icon: Icon, label, value, href, color }) => {
                const c = colorMap[color]
                const content = (
                  <div className="card group flex items-center gap-4 hover:border-white/10">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: c.bg, border: `1px solid ${c.border}` }}
                    >
                      <Icon size={16} style={{ color: c.text }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-500 text-xs mb-0.5">{label}</p>
                      <p className="text-white text-sm font-medium truncate group-hover:text-blue-300 transition-colors">
                        {value}
                      </p>
                    </div>
                    {href && <ExternalLink size={14} className="text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0" />}
                  </div>
                )

                return href ? (
                  <a key={label} href={href} className="block">{content}</a>
                ) : (
                  <div key={label}>{content}</div>
                )
              })}
            </div>

            {/* Online presence + CTA */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-semibold text-white text-lg mb-2">Online Presence</h3>

              {socialLinks.map(({ icon: Icon, label, href, description }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="card group flex items-center gap-4 hover:border-white/10"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/5">
                    <Icon size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium group-hover:text-blue-300 transition-colors">{label}</p>
                    <p className="text-slate-500 text-xs">{description}</p>
                  </div>
                  <ExternalLink size={14} className="text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                </a>
              ))}

              {/* Resume download */}
              <div className="mt-2 p-5 rounded-2xl border border-white/5 bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  Download my full AI Engineering resume to learn more about my background, skills, and experience.
                </p>
                <a
                  href="/assets/resume/Mike_Taylor_III_AI_Engineer_Resume_2025.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Download Resume
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="section-container mt-20">
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
          <span>© 2025 Mike Taylor III. All rights reserved.</span>
          <span>Generative AI Engineer · Indianapolis, Indiana</span>
        </div>
      </div>
    </section>
  )
}
