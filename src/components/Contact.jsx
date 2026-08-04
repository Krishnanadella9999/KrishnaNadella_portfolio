import { useState } from 'react'
import { CheckCircle2, Facebook, Github, Linkedin, Mail, Phone, Send, Twitter, AlertCircle, Sparkles } from 'lucide-react'
import Reveal from './Reveal.jsx'
import NeuralBackground from './NeuralBackground.jsx'
import { profile } from '../data/portfolioData.js'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const endpoint = profile.formspreeUrl || `https://formspree.io/f/${profile.email}`

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const data = await response.json()
        if (data && data.errors) {
          setErrorMessage(data.errors.map((err) => err.message).join(', '))
        } else {
          setErrorMessage('Something went wrong submitting the form. Please try again.')
        }
        setStatus('error')
      }
    } catch (error) {
      console.error('Formspree submit error:', error)
      setErrorMessage('Network error. Please try sending directly via email.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-32 bg-bg-deep overflow-hidden">
      <NeuralBackground className="opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/70 to-bg-deep" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-amber">06 · Contact</span>
          <h2 className="mt-6 font-display text-3xl md:text-5xl font-semibold leading-tight">
            Have a project or opportunity? <span className="text-gradient">Let's talk.</span>
          </h2>
          <p className="mt-4 text-ink-muted leading-relaxed text-base md:text-lg">
            Send me a direct message using the form below or reach out through email/socials.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Socials */}
          <Reveal delay={0.1} className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-bg-panel/60 p-6 md:p-8 border border-line backdrop-blur-md">
              <h3 className="font-display text-xl font-medium text-ink mb-6 flex items-center gap-2">
                <Sparkles className="text-accent-teal" size={20} /> Direct Contact
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-bg-deep/80 border border-line hover:border-accent-teal/50 hover:bg-bg-deep transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center text-accent-teal group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-ink-faint">Email</div>
                    <div className="text-sm font-medium text-ink truncate group-hover:text-accent-teal transition-colors">
                      {profile.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-bg-deep/80 border border-line hover:border-accent-teal/50 hover:bg-bg-deep transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-amber/10 flex items-center justify-center text-accent-amber group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-ink-faint">Phone</div>
                    <div className="text-sm font-medium text-ink group-hover:text-accent-amber transition-colors">
                      {profile.phone}
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-line">
                <div className="text-xs font-mono uppercase tracking-widest text-ink-faint mb-4">
                  Connect on Socials
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-xl bg-bg-deep border border-line flex items-center justify-center text-ink-muted hover:border-accent-teal hover:text-accent-teal transition-all hover:-translate-y-1"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 rounded-xl bg-bg-deep border border-line flex items-center justify-center text-ink-muted hover:border-accent-teal hover:text-accent-teal transition-all hover:-translate-y-1"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={profile.x}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X (Twitter)"
                    className="w-11 h-11 rounded-xl bg-bg-deep border border-line flex items-center justify-center text-ink-muted hover:border-accent-teal hover:text-accent-teal transition-all hover:-translate-y-1"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={profile.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-xl bg-bg-deep border border-line flex items-center justify-center text-ink-muted hover:border-accent-teal hover:text-accent-teal transition-all hover:-translate-y-1"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Formspree Contact Form */}
          <Reveal delay={0.2} className="lg:col-span-7">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-teal/30 via-accent-cyan/20 to-accent-amber/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
              
              <div className="relative rounded-3xl bg-bg-panel p-6 md:p-8 border border-line backdrop-blur-md shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-ink-muted mb-2">
                        Your Name <span className="text-accent-amber">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-bg-deep border border-line text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-teal transition-colors text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-ink-muted mb-2">
                        Your Email <span className="text-accent-amber">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-bg-deep border border-line text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-teal transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-widest text-ink-muted mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-bg-deep border border-line text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-teal transition-colors text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-ink-muted mb-2">
                      Message <span className="text-accent-amber">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-bg-deep border border-line text-ink placeholder:text-ink-faint focus:outline-none focus:border-accent-teal transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Status Notifications */}
                  {status === 'success' && (
                    <div className="p-4 rounded-xl bg-accent-teal/10 border border-accent-teal/40 flex items-center gap-3 text-accent-teal text-sm">
                      <CheckCircle2 size={18} className="shrink-0" />
                      <span>Thank you! Your message has been sent successfully. Krishna will get back to you soon.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/40 flex items-center gap-3 text-red-400 text-sm">
                      <AlertCircle size={18} className="shrink-0" />
                      <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent-teal px-6 py-4 font-mono text-xs uppercase tracking-widest text-bg-deep font-semibold hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-bg-deep border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message via Formspree
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
