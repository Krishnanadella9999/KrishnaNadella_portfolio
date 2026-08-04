import { motion } from 'framer-motion'
import { ArrowDown, Download, Facebook, Github, Linkedin, Twitter } from 'lucide-react'
import NeuralBackground from './NeuralBackground.jsx'
import { profile } from '../data/portfolioData.js'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-bg-deep">
      <NeuralBackground />
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-deep" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs md:text-sm tracking-[0.3em] text-accent-teal uppercase mb-6"
            >
              {profile.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]"
            >
              From full-stack apps to
              <span className="text-gradient"> data, models &amp; products.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-2xl text-ink-muted text-base md:text-lg leading-relaxed"
            >
              I'm <span className="text-ink font-medium">{profile.name}</span> — a {profile.role.toLowerCase()}
              {' '}who builds web apps end to end and ships ML pipelines, dashboards, and LLM-powered applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent-teal px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg-deep hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink hover:border-accent-teal hover:text-accent-teal transition-colors"
              >
                Get In Touch
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-line text-ink-muted hover:border-accent-teal hover:text-accent-teal transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-line text-ink-muted hover:border-accent-teal hover:text-accent-teal transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={profile.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-line text-ink-muted hover:border-accent-teal hover:text-accent-teal transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href={profile.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-line text-ink-muted hover:border-accent-teal hover:text-accent-teal transition-colors"
              >
                <Facebook size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl border-t border-line pt-8"
            >
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-2xl md:text-3xl text-accent-teal">{stat.value}</div>
                  <div className="text-xs text-ink-faint uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Profile Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-teal/40 via-accent-cyan/30 to-accent-amber/40 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-700" />
              
              {/* Card Container */}
              <div className="relative rounded-3xl bg-bg-panel/80 p-3 sm:p-4 border border-accent-teal/30 backdrop-blur-md shadow-2xl overflow-hidden">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-bg-deep">
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Status Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-bg-deep/80 backdrop-blur-md border border-line flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-teal" />
                    </span>
                    <div>
                      <div className="text-xs font-mono font-medium text-ink">Krishna Babu Nadella</div>
                      <div className="text-[10px] text-ink-muted">Data Scientist &amp; AI Specialist · 2026</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-ink-faint hover:text-accent-teal transition-colors animate-pulseSlow"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  )
}
