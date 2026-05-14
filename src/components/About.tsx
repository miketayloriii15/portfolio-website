import { MapPin, Phone, Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mike-taylor-iii-986b9910b/',
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
                href="https://twitter.com/miketayloriii"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-all duration-200 hover:border-white/10 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
                I'm a Generative AI Engineer focused on bringing enterprise AI from prototype to production.
                My work sits at the intersection of large language models, intelligent agent systems,
                retrieval-augmented generation, and responsible deployment — designing systems that are
                not just powerful, but safe, reliable, and organizationally transformative.
              </p>
              <p>
                At Cook Medical, I design, build, evaluate, and deploy enterprise AI systems that support
                internal workflows, decision-making, and operational efficiency at scale. I lead the
                engineering of production-grade LLM platforms, agent orchestration frameworks, and
                the evaluation infrastructure required to govern them responsibly.
              </p>
              <p>
                My background spans history, computer science, data science, and an ongoing PhD in
                AI and Machine Learning — giving me a unique lens that combines technical depth with
                strategic and humanistic thinking about how AI changes organizations.
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
                'Production AI',
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
