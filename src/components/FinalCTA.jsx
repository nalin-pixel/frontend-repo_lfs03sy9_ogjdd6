import React from 'react'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="min-h-[70vh] bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <motion.button
          id="waitlist-cta"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 rounded-full bg-white text-black text-sm tracking-wide"
          onClick={() => alert('Thanks for your interest!')}
        >
          Join Waitlist
        </motion.button>
        <p className="mt-3 text-xs text-white/60">Create. Connect. ReConnect.</p>
      </div>
    </section>
  )
}
