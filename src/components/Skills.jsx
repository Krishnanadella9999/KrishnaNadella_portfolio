import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import { skillGroups } from '../data/portfolioData.js'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-bg-panel/40 border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-amber">02 · Skill Stack</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold max-w-2xl">
            The tools I reach for at every stage of a data project.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <TiltCard className="h-full">
                <div className="relative h-full rounded-2xl bg-bg-panel panel-border p-6 overflow-hidden">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-teal/80">
                    {group.tag}
                  </span>
                  <h3 className="mt-2 font-display text-lg text-ink">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-bg-panel2 text-ink-muted border border-line"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
