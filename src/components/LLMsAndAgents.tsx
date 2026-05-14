import { Bot, Database, Network, Shield, Layers, Zap } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const capabilities = [
  {
    icon: Layers,
    title: 'Enterprise LLM Deployment',
    description:
      'Production-grade large language model systems integrated into enterprise infrastructure, supporting internal workflows, decision-support, and knowledge management at scale.',
    tags: ['Production LLMs', 'Prompt Engineering', 'Fine-tuning', 'Inference Optimization'],
    color: 'blue',
  },
  {
    icon: Bot,
    title: 'Intelligent Agent Systems',
    description:
      'Multi-step AI agents capable of autonomous reasoning, tool use, and complex task execution. Built for enterprise-grade reliability, traceability, and safe operation.',
    tags: ['Agentic Workflows', 'Tool Use', 'Orchestration', 'ReAct / CoT'],
    color: 'purple',
  },
  {
    icon: Database,
    title: 'Retrieval-Augmented Generation',
    description:
      'RAG pipelines that connect LLMs to organizational knowledge through vector databases, hybrid search, semantic chunking, and context-aware retrieval for accurate, grounded responses.',
    tags: ['Vector Search', 'Embeddings', 'Semantic Chunking', 'Hybrid Retrieval'],
    color: 'cyan',
  },
  {
    icon: Network,
    title: 'Agent Orchestration',
    description:
      'Multi-agent architectures where specialized AI agents collaborate, delegate, and coordinate to enable sophisticated workflows that exceed single-model capabilities.',
    tags: ['Multi-Agent', 'LangChain', 'Autogen', 'CrewAI'],
    color: 'indigo',
  },
  {
    icon: Shield,
    title: 'Responsible AI & Guardrails',
    description:
      'Safety layers, content filtering, output validation, and policy enforcement mechanisms that keep enterprise AI systems operating within defined behavioral boundaries.',
    tags: ['Guardrails', 'Content Safety', 'Policy Enforcement', 'Compliance'],
    color: 'green',
  },
  {
    icon: Zap,
    title: 'Production Readiness',
    description:
      'End-to-end deployment pipelines from prototype to production, covering CI/CD for AI, monitoring, observability, latency optimization, and operational reliability.',
    tags: ['MLOps', 'Observability', 'Monitoring', 'Latency Optimization'],
    color: 'orange',
  },
]

const colorMap: Record<string, { badge: string; icon: string; glow: string }> = {
  blue: { badge: 'badge-blue', icon: 'text-blue-400', glow: 'rgba(59,130,246,0.08)' },
  purple: { badge: 'badge-purple', icon: 'text-purple-400', glow: 'rgba(139,92,246,0.08)' },
  cyan: { badge: 'badge-cyan', icon: 'text-cyan-400', glow: 'rgba(6,182,212,0.08)' },
  indigo: { badge: 'badge-blue', icon: 'text-indigo-400', glow: 'rgba(99,102,241,0.08)' },
  green: { badge: 'badge-green', icon: 'text-green-400', glow: 'rgba(34,197,94,0.08)' },
  orange: { badge: 'badge-orange', icon: 'text-orange-400', glow: 'rgba(249,115,22,0.08)' },
}

export default function LLMsAndAgents() {
  const { ref, inView } = useInView()

  return (
    <section id="llms" className="py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Subtle bg accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-4"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
      </div>

      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Heading */}
          <div className="mb-16">
            <p className="text-blue-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
              Core Expertise
            </p>
            <h2 className="section-heading">
              Enterprise LLMs &{' '}
              <span className="gradient-text">AI Agent Systems</span>
            </h2>
            <p className="section-subheading">
              Building production-grade AI systems that work reliably, safely, and at enterprise scale.
            </p>
          </div>

          {/* Capabilities grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map(({ icon: Icon, title, description, tags, color }, i) => {
              const c = colorMap[color]
              return (
                <div
                  key={title}
                  className="card group flex flex-col gap-4"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: c.glow, border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <Icon size={18} className={c.icon} />
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-white text-base mb-2 group-hover:text-blue-100 transition-colors">
                      {title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {tags.map((tag) => (
                      <span key={tag} className={`badge ${c.badge} text-xs`}>{tag}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
