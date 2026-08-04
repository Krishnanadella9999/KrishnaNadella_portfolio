import { useRef } from 'react'

export default function TiltCard({ children, className = '', maxTilt = 8 }) {
  const ref = useRef(null)

  function handleMouseMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - py) * maxTilt
    const rotateY = (px - 0.5) * maxTilt
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`

    const glow = el.querySelector('[data-tilt-glow]')
    if (glow) {
      glow.style.background = `radial-gradient(320px circle at ${px * 100}% ${py * 100}%, rgba(51,230,200,0.14), transparent 65%)`
    }
  }

  function handleMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    const glow = el.querySelector('[data-tilt-glow]')
    if (glow) glow.style.background = 'transparent'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      <div data-tilt-glow className="pointer-events-none absolute inset-0 rounded-2xl transition-[background] duration-150" />
      {children}
    </div>
  )
}
