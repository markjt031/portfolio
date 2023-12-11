import React from 'react'
import Hero from './Hero'
import Contact from './Contact'
import Footer from './Footer'
import Projects from './Projects'
import About from './About'




const Home = () => {
  return (<div className="bg-stone-200">
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home