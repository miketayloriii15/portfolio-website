import { MapPin, Phone, Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mike-taylor-iii-986b9910b',
    color: 'hover:text-blue-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/miketayloriii15',
    color: 'hover:text-slate-200',
  },
]

const quickFacts = [
  { icon: MapPin, text: 'Indianapolis, Indiana' },
  { icon: Phone, text: '317-360-3139' },
  { icon: Mail, text: 'miketayloriii15@gmail.com' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-28 relative">
      {/* Subtle top separator */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="section-container">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: Photo + Quick Info */}
          <div className="flex flex-col items-center lg:items-start gap-8">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border border-white/10 relative z-10"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,130,246,0.1)' }}>
                <img
                  src="/assets/img/profile.JPG"
                  alt="Mike Taylor III"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.style.display = 'none'
                    t.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-gradient-to-br', 'from-blue-600', 'to-cyan-600')
                    const span = document.createElement('span')
                    span.textContent = 'MT'
                    span.className = 'text-4xl font-bold text-white font-display'
                    t.parentElement!.appendChild(span)
                  }}
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-20 -z-10"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }} />
            </div>

            {/* Quick contact info */}
            <div className="flex flex-col gap-3 w-full">
              {quickFacts.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-blue-400" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 ${color} transition-all duration-200 hover:border-white/10 hover:bg-white/8 hover:-translate-y-0.5`}
                >
                  <Icon size={18} />
                </a>
              ))}
              <a
                href="https://x.com/TaylornationMt3"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-all duration-200 hover:border-white/10 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/miketayloriii/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-pink-400 transition-all duration-200 hover:border-white/10 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@miketayloriii"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-all duration-200 hover:border-white/10 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-blue-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
                About
              </p>
              <h2 className="section-heading">
                Operationalizing AI{' '}
                <span className="gradient-text">at Enterprise Scale</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-slate-300 leading-relaxed">
              <p>
                I'm Mike Taylor III, a Generative AI Engineer II at Cook Medical focused on enterprise AI
                systems, LLM evaluation, intelligent agents, and responsible AI deployment. Originally from
                Shreveport, I'm also a former NCAA Division I athlete and professional American football
                player in Europe.
              </p>
              <p>
                Before moving fully into AI and technology, I founded and operated my own English teaching
                company in Poland, where I worked with professionals and technical teams. My background
                combines generative AI, data science, full-stack development, and enterprise technology
                strategy.
              </p>
              <p>
                I'm currently completing a Technology MBA and working toward a PhD in Technology focused on
                Artificial Intelligence and Machine Learning. I also speak some Polish and German.
              </p>
              <p>
                Outside of work, I enjoy researching space and the universe, studying emerging technologies,
                and powerlifting.
              </p>
            </div>

            {/* Highlight tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Enterprise LLMs',
                'Agentic AI',
                'RAG Systems',
                'LLM Evaluation',
                'Responsible AI',
                'AI Strategy',
                'NCAA Athlete',
                'Multilingual',
              ].map((tag) => (
                <span key={tag} className="badge badge-blue">{tag}</span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#role"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#role')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                See current role
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
