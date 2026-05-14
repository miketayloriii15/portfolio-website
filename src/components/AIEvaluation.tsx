import { FlaskConical, AlertTriangle, Search, Bot, Shield, FileCode, Brain, Activity } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const dimensions = [
  {
    icon: Activity,
    label: 'Production Readiness',
    description: 'Systematic assessment of whether an LLM system is safe, stable, and ready for enterprise deployment.',
    color: 'blue',
  },
  {
    icon: AlertTriangle,
    label: 'Hallucination Risk',
    description: 'Detection and quantification of factual inaccuracies, confabulation, and unsupported claims in LLM outputs.',
    color: 'orange',
  },
  {
    icon: Search,
    label: 'Retrieval Quality',
    description: 'Evaluation of RAG pipeline precision, recall, context relevance, and faithfulness to retrieved documents.',
    color: 'cyan',
  },
  {
    icon: Bot,
    label: 'Agent Reliability',
    description: 'Testing multi-step agent reasoning chains, tool use accuracy, decision boundaries, and failure modes.',
    color: 'purple',
  },
  {
    icon: Shield,
    label: 'Guardrail Behavior',
    description: 'Stress-testing safety layers, content filters, policy enforcement, and adversarial prompt resistance.',
    color: 'green',
  },
  {
    icon: FileCode,
    label: 'Structured Output Compliance',
    description: 'Validation of JSON schema adherence, format consistency, and type safety in structured LLM responses.',
    color: 'indigo',
  },
  {
    icon: Brain,
    label: 'Responsible AI Behavior',
    description: 'Assessment of bias, fairness, transparency, and alignment with ethical AI principles at the output level.',
    color: 'pink',
  },
  {
    icon: FlaskConical,
    label: 'Operational Safety',
    description: 'End-to-end safety evaluation covering system stability, error propagation, and graceful degradation under load.',
    color: 'teal',
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'rgba(59,130,246,0.08)', text: '#60a5fa', border: 'rgba(59,130,246,0.2)' },
  orange: { bg: 'rgba(249,115,22,0.08)', text: '#fb923c', border: 'rgba(249,115,22,0.2)' },
  cyan: { bg: 'rgba(6,182,212,0.08)', text: '#22d3ee', border: 'rgba(6,182,212,0.2)' },
  purple: { bg: 'rgba(139,92,246,0.08)', text: '#a78bfa', border: 'rgba(139,92,246,0.2)' },
  green: { bg: 'rgba(34,197,94,0.08)', text: '#4ade80', border: 'rgba(34,197,94,0.2)' },
  indigo: { bg: 'rgba(99,102,241,0.08)', text: '#818cf8', border: 'rgba(99,102,241,0.2)' },
  pink: { bg: 'rgba(236,72,153,0.08)', text: '#f472b6', border: 'rgba(236,72,153,0.2)' },
  teal: { bg: 'rgba(20,184,166,0.08)', text: '#2dd4bf', border: 'rgba(20,184,166,0.2)' },
}

export default function AIEvaluation() {
  const { ref, inView } = useInView()

  return (
    <section id="evaluation" className="py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-5"
          style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
      </div>

      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Heading */}
          <div className="mb-16 grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-purple-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
                AI Evaluation
              </p>
              <h2 className="section-heading">
                Enterprise AI{' '}
                <span className="gradient-text-purple">Evaluation Framework</span>
              </h2>
            </div>
            <p className="text-slate-400 text-base leading-relaxed">
              I built an enterprise-grade AI Evaluation Framework at Cook Medical to systematically assess
              LLM systems across eight critical production-readiness dimensions before they ever touch
              a live environment.
            </p>
          </div>

          {/* Framework intro callout */}
          <div className="card mb-10 p-6 border-purple-500/15 flex items-start gap-4"
            style={{ background: 'rgba(139,92,246,0.05)' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)' }}>
              <FlaskConical size={18} className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">What the Framework Evaluates</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A structured evaluation system that assesses AI systems across eight dimensions before
                production deployment. The framework generates quantitative scores, qualitative risk reports,
                and actionable remediation guidance to support data-driven go/no-go decisions for enterprise
                AI releases.
              </p>
            </div>
          </div>

          {/* Evaluation dimensions grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dimensions.map(({ icon: Icon, label, description, color }, i) => {
              const c = colorMap[color]
              return (
                <div
                  key={label}
                  className="card group p-5 flex flex-col gap-3"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: c.bg, border: `1px solid ${c.border}` }}
                    >
                      <Icon size={16} style={{ color: c.text }} />
                    </div>
                    <h3 className="text-white text-sm font-semibold leading-tight group-hover:text-blue-100 transition-colors">
                      {label}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
                </div>
              )
            })}
          </div>

          {/* Bottom stat row */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { value: '8', label: 'Evaluation Dimensions' },
              { value: '100%', label: 'Pre-Production Coverage' },
              { value: 'Enterprise', label: 'Scale & Rigor' },
            ].map(({ value, label }) => (
              <div key={label} className="card text-center p-5">
                <div className="text-2xl font-display font-bold gradient-text mb-1">{value}</div>
                <div className="text-slate-500 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
