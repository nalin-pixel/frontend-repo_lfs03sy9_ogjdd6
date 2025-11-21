import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-white"
        >
          <span className="text-sm tracking-widest uppercase">ReConnect</span>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="text-black bg-white hover:bg-white/90 transition-colors px-4 py-2 rounded-full text-sm"
          onClick={() => {
            const el = document.getElementById('waitlist-cta')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Join Waitlist
        </motion.button>
      </div>
    </header>
  )
}
