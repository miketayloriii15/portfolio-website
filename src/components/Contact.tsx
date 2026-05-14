import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react'
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

const XIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>
)

const SubstackIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
  </svg>
)

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mike-taylor-iii-986b9910b',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/miketayloriii15',
    description: 'View projects & code',
  },
  {
    icon: XIcon,
    label: 'X / Twitter',
    href: 'https://x.com/TaylornationMt3',
    description: 'Follow on X',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    href: 'https://www.instagram.com/miketayloriii/',
    description: 'Follow on Instagram',
  },
  {
    icon: TikTokIcon,
    label: 'TikTok',
    href: 'https://www.tiktok.com/@miketayloriii',
    description: 'Follow on TikTok',
  },
  {
    icon: SubstackIcon,
    label: 'Substack',
    href: 'https://substack.com/@miketayloriii',
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
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/5 border border-white/5 text-slate-400 group-hover:text-white transition-colors">
                    <Icon />
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
