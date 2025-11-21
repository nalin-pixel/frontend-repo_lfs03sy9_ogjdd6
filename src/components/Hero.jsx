import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const tbilisiIcons = [
  { id: 'bridge', label: 'Bridge', x: -220, y: -60 },
  { id: 'tower', label: 'Tower', x: 220, y: -40 },
  { id: 'statue', label: 'Statue', x: -140, y: 120 },
  { id: 'fortress', label: 'Fortress', x: 160, y: 110 },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Motions for text + icons dispersing
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const circleScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.7])
  const bgFade = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.4, 0])

  return (
    <section ref={ref} className="relative h-[120vh] overflow-visible bg-black text-white">
      {/* Spline full-bleed background */}
      <div className="absolute inset-0">
        <motion.div style={{ opacity: bgFade }} className="absolute inset-0">
          <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
        {/* gradient veil for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 flex h-[120vh] items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Central circle */}
          <motion.div
            style={{ scale: circleScale }}
            className="w-56 h-56 rounded-full border border-white/30 flex items-center justify-center"
          >
            <motion.h1
              style={{ y: titleY, opacity: titleOpacity }}
              className="text-center text-3xl md:text-5xl font-light tracking-tight px-6"
            >
              You make the art, we do the rest.
            </motion.h1>
          </motion.div>

          {/* Tbilisi iconic elements as simple dots/labels for ultra-minimalism */}
          {tbilisiIcons.map((icon, i) => {
            const disperseX = useTransform(scrollYProgress, [0, 1], [icon.x, icon.x * 2.4])
            const disperseY = useTransform(scrollYProgress, [0, 1], [icon.y, icon.y * 1.8])
            const opacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [1, 1, 0.2, 0])
            const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
            return (
              <motion.div
                key={icon.id}
                style={{ x: disperseX, y: disperseY, opacity, scale }}
                className="absolute flex items-center gap-2"
              >
                <span className="block w-[6px] h-[6px] rounded-full bg-white" />
                <span className="text-xs md:text-sm text-white/80">{icon.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
