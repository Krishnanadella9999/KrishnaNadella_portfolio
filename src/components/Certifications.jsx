import { Award } from 'lucide-react'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'
import { certifications } from '../data/portfolioData.js'

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 bg-bg-deep">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-amber">05 · Certifications</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold max-w-2xl">
            Credentials that back up the skill stack.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.05}>
              <TiltCard maxTilt={6} className="h-full">
                <div className="h-full rounded-2xl bg-bg-panel panel-border p-6 flex items-start gap-4 hover:border-accent-teal/40 transition-colors">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent-teal/10 flex items-center justify-center">
                    <Award size={18} className="text-accent-teal" />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-ink leading-snug">{cert.title}</h3>
                    <p className="mt-1 font-mono text-xs text-ink-faint">{cert.issuer}</p>
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
