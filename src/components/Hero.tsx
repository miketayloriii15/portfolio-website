import { useEffect, useRef } from 'react'
import { ArrowDown, MapPin, ExternalLink } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particle system
    const particles: Array<{
      x: number; y: number; vx: number; vy: number
      size: number; opacity: number; color: string
    }> = []

    const colors = ['#3b82f6', '#06b6d4', '#8b5cf6', '#6366f1']

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.fill()
        ctx.globalAlpha = 1
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = '#3b82f6'
            ctx.globalAlpha = (1 - dist / 120) * 0.08
            ctx.lineWidth = 0.5
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        })
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#060b18]" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-8"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-5"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs font-medium tracking-wide">
            Available for collaboration
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight leading-none">
          Mike Taylor
          <span className="block gradient-text">III</span>
        </h1>

        {/* Title */}
        <div className="mb-3">
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-slate-200 mb-2">
            Generative AI Engineer II
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-slate-400 text-sm sm:text-base">
            <span className="w-1 h-1 rounded-full bg-blue-400" />
            <span>Cook Medical</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>Enterprise AI</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>Technology Strategy</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-10">
          <MapPin size={14} />
          <span>Indianapolis, Indiana</span>
        </div>

        {/* Specializations */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {[
            'Enterprise LLMs',
            'AI Agents',
            'LLM Evaluation',
            'RAG Systems',
            'Responsible AI',
            'Technology Strategy',
          ].map((tag) => (
            <span key={tag} className="badge badge-blue text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={scrollToAbout} className="btn-primary px-8 py-4 text-base">
            Explore My Work
            <ArrowDown size={16} />
          </button>
          <a
            href="mailto:miketayloriii15@gmail.com"
            className="btn-secondary px-8 py-4 text-base"
          >
            Get In Touch
          </a>
          <a
            href="/assets/resume/Mike_Taylor_III_AI_Engineer_Resume_2025.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary px-8 py-4 text-base"
          >
            Resume
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </button>
      </div>
    </section>
  )
}
