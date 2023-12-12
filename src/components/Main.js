import React from 'react'
import Hero from './Hero'
import Contact from './Contact'
import Projects from './Projects'
import About from './About'

const Main = () => {
  return (<main className="bg-stone-200">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default Main