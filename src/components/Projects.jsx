import { useRef, useState, useEffect } from 'react'
import { CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import { projects } from '../data/portfolioData.js'

export default function Projects() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cardWidth = container.scrollWidth / projects.length
    const index = Math.round(container.scrollLeft / cardWidth)
    setActiveIndex(Math.min(Math.max(index, 0), projects.length - 1))
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', handleScroll)
      return () => el.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const { scrollLeft, clientWidth } = scrollRef.current
    const scrollAmount = clientWidth * 0.8
    scrollRef.current.scrollTo({
      left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="projects" className="relative py-28 bg-bg-deep overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-amber">03 · Selected Work</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold">
              Projects that pushed me from <span className="text-gradient">notebook to production.</span>
            </h2>
            <p className="mt-2 text-sm text-ink-muted">Scroll horizontally to explore featured Data Science &amp; AI projects.</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-4">
              {/* Counter Badge */}
              <div className="font-mono text-xs text-ink-muted bg-bg-panel px-3 py-2 rounded-full border border-line">
                <span className="text-accent-teal font-semibold">0{activeIndex + 1}</span> / 0{projects.length}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll('left')}
                  aria-label="Scroll left"
                  className="w-11 h-11 rounded-full bg-bg-panel border border-line flex items-center justify-center text-ink hover:border-accent-teal hover:text-accent-teal transition-all active:scale-95"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  aria-label="Scroll right"
                  className="w-11 h-11 rounded-full bg-bg-panel border border-line flex items-center justify-center text-ink hover:border-accent-teal hover:text-accent-teal transition-all active:scale-95"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 pt-2 px-1 -mx-1"
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="w-[88vw] sm:w-[580px] md:w-[680px] shrink-0 snap-start"
            >
              <TiltCard maxTilt={3}>
                <article className="relative h-full rounded-3xl bg-bg-panel border border-line hover:border-accent-teal/40 transition-all p-7 md:p-9 flex flex-col justify-between overflow-hidden group shadow-xl">
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl group-hover:bg-accent-teal/10 transition-all pointer-events-none" />

                  <div>
                    {/* Top Row: Period & Tech Stack */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-line">
                      <div className="flex items-center gap-2">
                        <Sparkles size={16} className="text-accent-teal" />
                        <span className="font-mono text-xs font-medium text-accent-teal uppercase tracking-wider">
                          {project.period}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-bg-deep border border-line text-ink-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Title & Summary */}
                    <h3 className="mt-5 font-display text-2xl md:text-3xl font-semibold text-ink group-hover:text-accent-teal transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-ink-muted leading-relaxed text-sm md:text-base">
                      {project.summary}
                    </p>

                    {/* Key Contributions List */}
                    <div className="mt-6 pt-4 border-t border-line/60">
                      <div className="font-mono text-[11px] uppercase tracking-widest text-ink-faint mb-3">
                        Key Accomplishments &amp; Architecture
                      </div>
                      <ul className="space-y-2.5">
                        {project.points.map((point) => (
                          <li key={point} className="flex gap-3 text-xs md:text-sm text-ink-muted leading-relaxed">
                            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-teal" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar / Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.scrollWidth / projects.length
                  scrollRef.current.scrollTo({ left: cardWidth * i, behavior: 'smooth' })
                }
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-accent-teal' : 'w-2 bg-line hover:bg-ink-faint'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
