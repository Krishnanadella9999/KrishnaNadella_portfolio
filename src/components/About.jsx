import { BrainCircuit, Code2, Database, LineChart } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/portfolioData.js'

const PILLARS = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    body: 'Building complete web applications end to end with HTML, CSS, React, Node.js, Flask, and Django.',
  },
  {
    icon: Database,
    title: 'Data Science & Analysis',
    body: 'Analyzing, cleaning, structuring, and exploring complex datasets with Pandas, NumPy, and SQL to extract actionable business insights.',
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning',
    body: 'Training and evaluating models with Scikit-learn, TensorFlow, and Keras — from classical ML to deep learning.',
  },
  {
    icon: LineChart,
    title: 'Insight & Delivery',
    body: 'Shipping the result as a dashboard, API, or LLM-powered app — Power BI, Streamlit, Flask, and AWS.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-bg-deep">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-amber">01 · About</span>
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-12 gap-12 items-start">
          {/* About Photo Card */}
          <Reveal delay={0.05} className="lg:col-span-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-amber/30 via-accent-teal/30 to-accent-cyan/30 rounded-3xl blur-lg opacity-40 group-hover:opacity-80 transition duration-500" />
              <div className="relative rounded-3xl bg-bg-panel/90 p-3 border border-line hover:border-accent-amber/40 transition-colors shadow-xl overflow-hidden">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-bg-deep">
                  <img
                    src={profile.aboutImage}
                    alt={`${profile.name} - About`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent-amber/20 border border-accent-amber/40 text-accent-amber text-[11px] font-mono tracking-wider uppercase mb-1 backdrop-blur-md">
                      Beyond Code
                    </span>
                    <p className="text-xs text-ink-muted leading-tight">
                      Tech Fest Coordinator &amp; Powerlifter
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text & Pillars */}
          <div className="lg:col-span-8 space-y-8">
            <Reveal delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl font-semibold leading-snug">
                I like problems that start messy and end measurable.
              </h2>
              <p className="mt-5 text-ink-muted leading-relaxed text-base md:text-lg">{profile.summary}</p>
              <p className="mt-4 text-ink-muted leading-relaxed text-base md:text-lg">
                Outside of models and notebooks, I've coordinated a college-wide tech fest and competed in
                powerlifting — both taught me the same lesson a good pipeline does: show up, iterate, and don't skip
                the fundamentals.
              </p>
            </Reveal>

            {/* Pillars Grid */}
            <Reveal delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon
                  return (
                    <div key={pillar.title} className="panel-border rounded-2xl bg-bg-panel p-5 hover:border-accent-teal/40 transition-all hover:-translate-y-1">
                      <Icon className="text-accent-teal" size={22} />
                      <h3 className="mt-3 font-display text-lg font-medium">{pillar.title}</h3>
                      <p className="mt-1 text-sm text-ink-muted leading-relaxed">{pillar.body}</p>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
