import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PeopleGrid() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })

  // When revealed: start as one box -> morph to 3x3
  const splitProgress = useTransform(scrollYProgress, [0.2, 0.6], [0, 1])
  const gridGap = useTransform(splitProgress, [0, 1], [0, 16])
  const containerScale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1])
  const containerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4], [0, 1, 1])

  const images = [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542326237-94b1c5a73ffc?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1547038577-da8b6c6d76ea?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section ref={sectionRef} className="relative min-h-[140vh] bg-black text-white flex items-center justify-center">
      <motion.div
        style={{ scale: containerScale, opacity: containerOpacity }}
        className="w-full max-w-5xl px-6"
      >
        {/* Single box state */}
        <motion.div
          style={{ borderRadius: useTransform(splitProgress, [0, 1], [16, 8]) }}
          className="relative overflow-hidden bg-white"
        >
          {/* As progress grows, reveal a 3x3 grid by moving/expanding masks */}
          <div className="absolute inset-0">
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gap: gridGap,
                padding: useTransform(splitProgress, [0, 1], [0, 16]),
                clipPath: useTransform(splitProgress, [0, 1], ['inset(0% round 0px)', 'inset(0% round 0px)']),
              }}
              className="w-full h-[70vh]"
            >
              {images.map((src, i) => (
                <motion.div key={i} className="relative overflow-hidden bg-black">
                  <motion.img
                    src={src}
                    alt="Portrait"
                    className="w-full h-full object-cover"
                    style={{
                      scale: useTransform(splitProgress, [0, 1], [1.05, 1]),
                      opacity: useTransform(splitProgress, [0, 1], [i === 4 ? 1 : 0, 1]),
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
