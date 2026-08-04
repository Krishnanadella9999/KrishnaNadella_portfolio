import { profile } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS &amp; Three.js.
        </p>
        <a href="#top" className="font-mono text-xs text-ink-faint hover:text-accent-teal transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
