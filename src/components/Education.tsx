import { GraduationCap, BookOpen } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const education = [
  {
    degree: 'Doctor of Philosophy (PhD)',
    field: 'Technology — Artificial Intelligence & Machine Learning',
    university: 'Walsh College',
    status: 'In Progress',
    statusColor: 'purple',
    description:
      'Doctoral research focused on artificial intelligence and machine learning systems, with emphasis on enterprise AI deployment, evaluation methodologies, and the organizational dimensions of AI transformation.',
    icon: BookOpen,
  },
  {
    degree: 'Master of Business Administration',
    field: 'Technology MBA',
    university: 'Western Governors University',
    status: 'In Progress',
    statusColor: 'blue',
    description:
      'Technology-focused MBA program integrating business strategy, technology leadership, and organizational management — building the strategic lens that complements deep technical expertise.',
    icon: GraduationCap,
  },
  {
    degree: 'Master of Science',
    field: 'Data Science',
    university: 'University of Phoenix',
    status: 'Completed',
    statusColor: 'green',
    description:
      'Graduate-level training in statistical modeling, machine learning, data engineering, and applied AI — forming the quantitative foundation for AI engineering work.',
    icon: GraduationCap,
  },
  {
    degree: "Bachelor's Degree",
    field: 'Computer Science',
    university: 'University of Phoenix',
    status: 'Completed',
    statusColor: 'green',
    description:
      'Undergraduate computer science education covering algorithms, systems, programming paradigms, and software engineering — the technical bedrock.',
    icon: GraduationCap,
  },
  {
    degree: "Bachelor's Degree",
    field: 'History',
    university: 'Georgetown University',
    status: 'Completed',
    statusColor: 'green',
    description:
      'An analytical humanities degree developing critical thinking, research rigor, and the ability to understand systemic change over time — perspectives that inform how I think about AI and organizational transformation.',
    icon: BookOpen,
  },
]

const statusColors: Record<string, string> = {
  purple: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
  blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
  green: 'bg-green-400/10 text-green-400 border-green-400/20',
}

const iconColors = [
  { bg: 'rgba(139,92,246,0.1)', text: '#a78bfa', dot: '#8b5cf6' },
  { bg: 'rgba(59,130,246,0.1)', text: '#60a5fa', dot: '#3b82f6' },
  { bg: 'rgba(34,197,94,0.1)', text: '#4ade80', dot: '#22c55e' },
  { bg: 'rgba(6,182,212,0.1)', text: '#22d3ee', dot: '#06b6d4' },
  { bg: 'rgba(99,102,241,0.1)', text: '#818cf8', dot: '#6366f1' },
]

export default function Education() {
  const { ref, inView } = useInView()

  return (
    <section id="education" className="py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Heading */}
          <div className="mb-16">
            <p className="text-blue-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
              Education
            </p>
            <h2 className="section-heading">
              Academic{' '}
              <span className="gradient-text">Foundation</span>
            </h2>
            <p className="section-subheading">
              A multi-disciplinary academic background spanning technology, science, business, and the humanities.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col gap-0">
            {education.map(({ degree, field, university, status, statusColor, description, icon: Icon }, i) => {
              const ic = iconColors[i % iconColors.length]
              const isLast = i === education.length - 1

              return (
                <div key={`${degree}-${field}`} className="relative flex gap-6 pb-8">
                  {/* Timeline line */}
                  {!isLast && (
                    <div className="absolute left-5 top-12 bottom-0 w-px"
                      style={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.3), transparent)' }} />
                  )}

                  {/* Timeline dot */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center z-10"
                      style={{ background: ic.bg, border: `1px solid ${ic.text}22` }}
                    >
                      <Icon size={16} style={{ color: ic.text }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="card flex-1 flex flex-col gap-3 group">
                    <div className="flex flex-wrap items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-semibold text-white text-base group-hover:text-blue-100 transition-colors">
                          {degree}
                        </h3>
                        <p className="text-blue-300 text-sm font-medium">{field}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{university}</p>
                      </div>
                      <span className={`badge border text-xs flex-shrink-0 ${statusColors[statusColor]}`}>
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${status === 'In Progress' ? 'animate-pulse' : ''}`}
                          style={{ background: ic.dot }}
                        />
                        {status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Stats row */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { value: '5', label: 'Degrees / Programs' },
              { value: '2', label: 'In Progress' },
              { value: 'PhD', label: 'Terminal Degree' },
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
