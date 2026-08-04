import { GraduationCap, Trophy } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { education, achievements } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-bg-panel/40 border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-amber">04 · Education &amp; Achievements</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold max-w-2xl">
            Where the foundations were built.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <div className="relative pl-8 border-l border-line space-y-10">
              {education.map((item, i) => (
                <Reveal key={item.school} delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-accent-teal shadow-glow" />
                    <span className="font-mono text-xs text-accent-teal">{item.period}</span>
                    <h3 className="mt-1 font-display text-lg text-ink flex items-center gap-2">
                      <GraduationCap size={18} className="text-ink-faint" />
                      {item.school}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">{item.degree}</p>
                    <p className="mt-1 font-mono text-xs text-ink-faint">{item.score}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-5">
            {achievements.map((item, i) => (
              <Reveal key={item.title} delay={0.1 + i * 0.08}>
                <div className="rounded-2xl bg-bg-panel panel-border p-6 hover:border-accent-amber/40 transition-colors">
                  <Trophy size={20} className="text-accent-amber" />
                  <h3 className="mt-3 font-display text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
