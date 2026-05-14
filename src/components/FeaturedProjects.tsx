import { ExternalLink, Bot, FlaskConical, Network, BookOpen, Shield, Languages, Globe } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    icon: Bot,
    title: 'CookGPT',
    subtitle: 'Internal Enterprise AI Platform',
    description:
      'An enterprise-grade internal AI platform built on large language models, retrieval-augmented generation, and intelligent agent orchestration. Enables employees to access institutional knowledge, automate complex workflows, and receive AI-driven decision support across the organization.',
    tags: ['Enterprise LLMs', 'RAG', 'AI Agents', 'Internal Platform'],
    status: 'Production',
    statusColor: 'green',
    highlight: true,
  },
  {
    icon: FlaskConical,
    title: 'Enterprise AI Evaluation Framework',
    subtitle: 'AI Governance & Quality Assurance',
    description:
      'A systematic evaluation framework for assessing enterprise AI systems across eight critical dimensions before production deployment — covering hallucination risk, retrieval quality, agent reliability, guardrail behavior, and responsible AI compliance.',
    tags: ['LLM Evaluation', 'Responsible AI', 'AI Governance', 'Quality Assurance'],
    status: 'Production',
    statusColor: 'green',
    highlight: false,
  },
  {
    icon: Network,
    title: 'Enterprise LLM & Agent Workflows',
    subtitle: 'Agentic System Engineering',
    description:
      'End-to-end agentic workflow systems enabling multi-step reasoning, tool use, and autonomous task execution across enterprise processes. Designed for reliability, traceability, and safe operation in regulated business environments.',
    tags: ['Multi-Agent', 'Orchestration', 'Tool Use', 'Enterprise Automation'],
    status: 'Active',
    statusColor: 'blue',
    highlight: false,
  },
  {
    icon: BookOpen,
    title: 'RAG-based Internal Knowledge Systems',
    subtitle: 'Retrieval-Augmented Generation',
    description:
      'Production RAG pipelines connecting enterprise LLMs to organizational knowledge bases. Implementing hybrid search, semantic chunking, re-ranking, and context-aware retrieval for accurate, grounded, and auditable AI responses.',
    tags: ['RAG', 'Vector Search', 'Semantic Retrieval', 'Knowledge Management'],
    status: 'Active',
    statusColor: 'blue',
    highlight: false,
  },
  {
    icon: Shield,
    title: 'AI Governance & Responsible Deployment',
    subtitle: 'AI Policy & Safety Engineering',
    description:
      'Frameworks, policies, and technical safeguards for responsible enterprise AI deployment. Covering content safety, bias mitigation, explainability, audit trails, and compliance with organizational AI governance standards.',
    tags: ['AI Governance', 'Responsible AI', 'Safety', 'Compliance'],
    status: 'Ongoing',
    statusColor: 'purple',
    highlight: false,
  },
  {
    icon: Languages,
    title: 'AI-Powered Translation Platform',
    subtitle: 'Human-in-the-Loop Translation System',
    description:
      'Leading development of an AI translation application built on approved translation documents and a managed network of professional translators. The system features a multi-layer validation pipeline that scores translation quality, enforces consistency against approved source materials, and keeps human translators in the loop — ensuring accuracy, auditability, and compliance at every stage.',
    tags: ['AI Translation', 'Human-in-the-Loop', 'Validation Pipeline', 'Quality Scoring', 'RAG'],
    status: 'In Development',
    statusColor: 'blue',
    highlight: true,
  },
  {
    icon: Globe,
    title: 'AI Sustainability Questionnaire Agent',
    subtitle: 'Agentic Workflow Automation',
    description:
      'Leading development of an AI-powered platform where an intelligent agent autonomously completes and distributes sustainability questionnaires to target companies. The agent executes a structured workflow, populates legally binding compliance documents, and routes completed submissions to the appropriate organizations — reducing manual effort while maintaining legal traceability and auditability.',
    tags: ['AI Agent', 'Workflow Automation', 'Sustainability', 'Legal Compliance', 'Agentic AI'],
    status: 'In Development',
    statusColor: 'blue',
    highlight: true,
  },
]

const statusColors: Record<string, string> = {
  green: 'bg-green-400/10 text-green-400 border-green-400/20',
  blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
  purple: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
}

const iconColors = [
  { bg: 'rgba(6,182,212,0.1)', text: '#22d3ee', border: 'rgba(6,182,212,0.2)' },
  { bg: 'rgba(139,92,246,0.1)', text: '#a78bfa', border: 'rgba(139,92,246,0.2)' },
  { bg: 'rgba(59,130,246,0.1)', text: '#60a5fa', border: 'rgba(59,130,246,0.2)' },
  { bg: 'rgba(34,197,94,0.1)', text: '#4ade80', border: 'rgba(34,197,94,0.2)' },
  { bg: 'rgba(249,115,22,0.1)', text: '#fb923c', border: 'rgba(249,115,22,0.2)' },
]

export default function FeaturedProjects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Heading */}
          <div className="mb-16">
            <p className="text-cyan-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
              Featured Projects
            </p>
            <h2 className="section-heading">
              What I've{' '}
              <span className="gradient-text">Built</span>
            </h2>
            <p className="section-subheading">
              Enterprise AI systems built for scale, reliability, and responsible operation.
            </p>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-5">
            {projects.map(({ icon: Icon, title, subtitle, description, tags, status, statusColor, highlight }, i) => {
              const ic = iconColors[i % iconColors.length]
              return (
                <div
                  key={title}
                  className={`card group transition-all duration-300 ${
                    highlight
                      ? 'border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5'
                      : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: ic.bg, border: `1px solid ${ic.border}` }}
                    >
                      <Icon size={20} style={{ color: ic.text }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start gap-3 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-semibold text-white text-lg group-hover:text-blue-100 transition-colors">
                            {title}
                          </h3>
                          <p className="text-slate-500 text-sm">{subtitle}</p>
                        </div>
                        <span className={`badge border text-xs flex-shrink-0 ${statusColors[statusColor]}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {status}
                        </span>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>

                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span key={tag} className="badge badge-blue text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer note */}
          <div className="mt-8 flex items-center gap-2 text-slate-600 text-sm">
            <ExternalLink size={14} />
            <span>Projects reflect professional enterprise work. Specific implementation details are kept confidential.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
