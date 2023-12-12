import React from 'react'
import Anchor from './Anchor'

const About = () => {
  return (
    <div className="w-full bg-stone-200 text-slate-800 mt-20 ">
      <Anchor anchor="about"/>
      <h1 className="text-3xl text-center">About Me</h1>
      <div className="bg-white/60 rounded-md mx-4 py-5 drop-shadow-md text-slate-500">
        
        <p className="w-[80%] mx-auto my-8">I am a full-stack web developer and former high school math teacher with a thirst for acquiring new knowledge and a passion for lifelong learning. I strive to find unique solutions to complex problems through my honed mathematical mindset.</p>

        <p className="w-[80%] mx-auto my-8">I've earned a Bachelor's of Science in Mathematics from Purdue Fort Wayne. I chose math because I'd always found it to be easy. Through this degree program, I discovered that I also enjoyed programming and computer science courses just as much as math.</p>

        <p className="w-[80%] mx-auto my-8">Following my degree, I worked for three years as a high school math teacher. Though the work was challenging and worthwhile, I found that it lacked technical problems to solve, which led me to revisiting my prior interest in programming. I enrolled in a software engineering program through General Assembly to learn full-stack web development through building projects with Javascript, Express, React and MongoDB. Following my bootcamp, I pursued further learning in full-stack development through Cook Systems Fast Track'd Program.</p>
        
      </div>
    </div>
    
  )
}

export default About