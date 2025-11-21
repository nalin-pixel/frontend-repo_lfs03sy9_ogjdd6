import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PeopleGrid from './components/PeopleGrid'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <PeopleGrid />
        <FinalCTA />
      </main>
    </div>
  )
}

export default App
