import React from 'react'
import Anchor from './Anchor'

const About = () => {
  return (
    <div className="w-full bg-stone-200 text-slate-800 mt-20 ">
      <Anchor anchor="about"/>
      <h1 className="text-3xl text-center">About Me</h1>
      <div className="bg-white/60 rounded-md mx-4 py-5 drop-shadow-md">
        
        <p className="w-[80%] mx-auto my-8">Lorem ipsum</p>

        <p className="w-[80%] mx-auto my-8">Lorem ipsum.</p>

        <p className="w-[80%] mx-auto my-8">Lorem ipsum.</p>
        
      </div>
    </div>
    
  )
}

export default About