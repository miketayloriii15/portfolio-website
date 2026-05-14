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
    label: 'PL / Europe Phone',
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

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const DiscordIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
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
  {
    icon: FacebookIcon,
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100001462571419',
    description: 'Connect on Facebook',
  },
  {
    icon: DiscordIcon,
    label: 'Discord',
    href: 'https://discord.com/users/miketayloriii_15911',
    description: 'miketayloriii_15911',
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
              Reach out. I'm always open to meaningful conversations.
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
      <div className="section-container mt-24">
        <div className="section-divider mb-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>
                MT
              </div>
              <span className="text-white font-display font-semibold text-sm">Mike Taylor III</span>
            </div>
            <p className="text-slate-500 text-xs">Generative AI Engineer II · Cook Medical</p>
            <p className="text-slate-600 text-xs">Indianapolis, Indiana</p>
          </div>

          {/* Center: Quick nav */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {[
              { label: 'About', id: 'about' },
              { label: 'Role', id: 'role' },
              { label: 'LLMs & Agents', id: 'llms' },
              { label: 'AI Evaluation', id: 'evaluation' },
              { label: 'Projects', id: 'projects' },
              { label: 'Skills', id: 'skills' },
              { label: 'Education', id: 'education' },
              { label: 'Contact', id: 'contact' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right: Copyright */}
          <p className="text-slate-500 text-xs text-center md:text-right">
            © {new Date().getFullYear()} Mike Taylor III.<br className="hidden md:block" /> All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
