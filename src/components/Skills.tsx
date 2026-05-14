import { useInView } from '../hooks/useInView'

const skillCategories = [
  {
    title: 'AI & LLMs',
    color: 'blue',
    skills: [
      'GPT-4 / Claude / Gemini', 'Prompt Engineering', 'Fine-tuning',
      'RAG Systems', 'LangChain', 'LlamaIndex', 'Semantic Kernel',
      'Embeddings', 'Vector Databases', 'AI Evaluation',
    ],
  },
  {
    title: 'AI Agents',
    color: 'purple',
    skills: [
      'Agentic Workflows', 'ReAct / CoT', 'Tool Use',
      'Multi-Agent Systems', 'AutoGen', 'CrewAI', 'Agent Orchestration',
      'Memory Systems', 'Planning Agents',
    ],
  },
  {
    title: 'Machine Learning',
    color: 'cyan',
    skills: [
      'PyTorch', 'TensorFlow', 'Scikit-learn',
      'Deep Learning', 'NLP', 'Computer Vision',
      'Model Evaluation', 'Hugging Face', 'ONNX',
    ],
  },
  {
    title: 'Data Engineering',
    color: 'green',
    skills: [
      'Python', 'SQL', 'Pandas / Polars',
      'Apache Spark', 'dbt', 'Airflow',
      'ETL Pipelines', 'Data Modeling',
    ],
  },
  {
    title: 'Cloud & MLOps',
    color: 'orange',
    skills: [
      'Azure', 'AWS', 'GCP',
      'Azure OpenAI', 'Docker', 'Kubernetes',
      'CI/CD', 'MLflow', 'Weights & Biases',
    ],
  },
  {
    title: 'Responsible AI',
    color: 'pink',
    skills: [
      'AI Governance', 'Bias Detection', 'Fairness Metrics',
      'Explainability (XAI)', 'Safety Alignment', 'AI Policy',
      'Compliance', 'Audit Logging',
    ],
  },
  {
    title: 'Programming',
    color: 'indigo',
    skills: [
      'Python', 'TypeScript', 'JavaScript',
      'SQL', 'Bash', 'R',
      'REST APIs', 'FastAPI', 'Pydantic',
    ],
  },
  {
    title: 'Strategy & Leadership',
    color: 'teal',
    skills: [
      'AI Strategy', 'Technology Roadmapping', 'Stakeholder Communication',
      'Cross-functional Collaboration', 'AI Literacy Training',
      'Enterprise Architecture', 'Research & Development',
    ],
  },
]

const colorMap: Record<string, { header: string; badge: string }> = {
  blue: { header: 'text-blue-400 border-blue-500/20 bg-blue-500/5', badge: 'badge-blue' },
  purple: { header: 'text-purple-400 border-purple-500/20 bg-purple-500/5', badge: 'badge-purple' },
  cyan: { header: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5', badge: 'badge-cyan' },
  green: { header: 'text-green-400 border-green-500/20 bg-green-500/5', badge: 'badge-green' },
  orange: { header: 'text-orange-400 border-orange-500/20 bg-orange-500/5', badge: 'badge-orange' },
  pink: { header: 'text-pink-400 border-pink-500/20 bg-pink-500/5', badge: 'badge-purple' },
  indigo: { header: 'text-indigo-400 border-indigo-500/20 bg-indigo-500/5', badge: 'badge-blue' },
  teal: { header: 'text-teal-400 border-teal-500/20 bg-teal-500/5', badge: 'badge-cyan' },
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="py-28 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="section-container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Heading */}
          <div className="mb-16">
            <p className="text-blue-400 text-sm font-mono font-medium tracking-wider uppercase mb-3">
              Technical Skills
            </p>
            <h2 className="section-heading">
              Tools &{' '}
              <span className="gradient-text">Technologies</span>
            </h2>
            <p className="section-subheading">
              A broad and deep technical toolkit spanning AI engineering, MLOps, data, and strategy.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillCategories.map(({ title, skills, color }) => {
              const c = colorMap[color]
              return (
                <div key={title} className="card p-0 overflow-hidden">
                  {/* Category header */}
                  <div className={`px-4 py-3 border-b border-white/5 ${c.header}`}>
                    <h3 className="font-display font-semibold text-sm">{title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="p-4 flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <span key={skill} className={`badge ${c.badge} text-xs`}>
                        {skill}
                      </span>
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
