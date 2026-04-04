import { useState, useRef, useCallback } from 'react'

export default function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct  = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseUp   = () => { dragging.current = false }
  const onMouseMove = (e) => { if (dragging.current) updatePos(e.clientX) }
  const onTouchMove = (e) => { updatePos(e.touches[0].clientX) }

  return (
    <section className="bg-brand-cream py-24 lg:py-36">
      <div className="container">

        <div className="text-center mb-16">
          <span className="section-label">Transformation</span>
          <h2 className="section-heading">BEFORE / <em>AFTER</em></h2>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-2xl h-[420px] md:h-[520px] overflow-hidden rounded-sm shadow-2xl cursor-ew-resize select-none"
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          role="img"
          aria-label="Before and after comparison slider"
        >
          {/* BEFORE panel — full width gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-brown/60 to-brand-gold/40" />

          {/* AFTER panel — clipped */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${pos}%` }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-b from-brand-gold to-brand-cream"
              style={{ width: `${10000 / Math.max(pos, 0.1)}%`, maxWidth: 'none' }}
            />
          </div>

          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
            style={{ left: `${pos}%` }}
          >
            {/* Handle */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M7 10H2M18 10h-5M6 7l-3 3 3 3M14 7l3 3-3 3"
                  stroke="#9c7a5e"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <span className="absolute bottom-4 left-4 text-[10px] tracking-widest text-white uppercase bg-black/25 px-3 py-1 rounded-full font-sans">
            Before
          </span>
          <span className="absolute bottom-4 right-4 text-[10px] tracking-widest text-white uppercase bg-black/25 px-3 py-1 rounded-full font-sans">
            After
          </span>

          {/* Hint text shown briefly */}
          <p className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] tracking-widest text-white/70 uppercase font-sans whitespace-nowrap">
            Drag to compare
          </p>
        </div>

      </div>
    </section>
  )
}
