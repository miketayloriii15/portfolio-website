import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const responsibilities = [
  'Design and deploy enterprise-grade LLM systems and intelligent agent workflows',
  'Serve as one of the lead developers on CookGPT, an internal AI platform powered by LLMs, RAG, and agentic orchestration',
  'Architect retrieval-augmented generation pipelines for internal knowledge access at scale',
  'Build and maintain the Enterprise AI Evaluation Framework for production readiness assessment',
  'Assess hallucination risk, retrieval quality, guardrail behavior, and responsible AI compliance',
  'Drive AI governance practices and responsible deployment standards across the organization',
  'Mentor colleagues on AI engineering best practices and responsible AI development',
  'Educate and train company leaders on how to effectively use AI through hands-on workshops',
  'Translate technology strategy into operational AI systems that support organizational transformation',
]

const highlights = [
  { label: 'Platform', value: 'CookGPT' },
  { label: 'Focus', value: 'Enterprise LLMs + Agents' },
  { label: 'Domain', value: 'Healthcare Technology' },
  { label: 'Type', value: 'Full-time · Remote' },
]

export default function CurrentRole() {
  const { ref, inView } = useInView()

  return (
    <section id="role" className="py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Heading */}
          <div className="mb-16">
            <p className="text-blue-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
              Current Role
            </p>
            <h2 className="section-heading">
              Where I Work &{' '}
              <span className="gradient-text">What I Build</span>
            </h2>
            <p className="section-subheading">
              Operationalizing generative AI inside a global medical device company.
            </p>
          </div>

          {/* Role card */}
          <div className="card p-0 overflow-hidden">
            {/* Top gradient bar */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #3b82f6, #06b6d4)' }} />

            <div className="p-8 md:p-10 grid md:grid-cols-3 gap-8">
              {/* Left: Company info */}
              <div className="md:col-span-1 flex flex-col gap-6">
                {/* Company badge */}
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center"
                    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                    <Building2 size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold font-display">Cook Medical</p>
                    <p className="text-slate-500 text-xs">Global Medical Devices</p>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={14} className="text-blue-400 flex-shrink-0" />
                    <span>Dec 2025 – Present</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={14} className="text-blue-400 flex-shrink-0" />
                    <span>Bloomington, IN · Remote</span>
                  </div>
                </div>

                {/* Highlight pills */}
                <div className="flex flex-col gap-2 pt-2">
                  {highlights.map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/3 border border-white/5">
                      <span className="text-slate-500 text-xs">{label}</span>
                      <span className="text-slate-300 text-xs font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Responsibilities */}
              <div className="md:col-span-2 flex flex-col gap-5">
                <div>
                  <h3 className="font-display font-semibold text-white text-xl mb-1">
                    Generative AI Engineer II
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Designing, building, evaluating, and deploying enterprise AI systems that support
                    internal workflows, decision-making, and organizational transformation.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {responsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CookGPT callout */}
                <div className="mt-2 p-4 rounded-xl border border-cyan-500/15 bg-cyan-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                      Flagship Platform
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <span className="text-cyan-300 font-semibold">CookGPT</span> — an internal enterprise AI
                    platform built on large language models, retrieval-augmented generation, and intelligent
                    agent orchestration, enabling employees to access knowledge, automate workflows, and
                    support complex decision-making at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
