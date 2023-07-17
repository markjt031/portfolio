import React from 'react'

const About = () => {
  return (
    <div className="md:flex gap-2 bg-stone-200 text-slate-800 py-10">
      <div className="md:w-[60%] w-[95%] bg-white/60 mx-auto  py-5">
        <h1 className="text-3xl mx-auto w-[80%]">About Me</h1>
        <p className="w-[80%] mx-auto my-8">I am a full-stack web developer and former math teacher with a thirst for acquiring new knowledge and a passion for lifelong learning. I strive to find unique solutions to complex problems and am committed to following a cycle of continuous self-improvement.</p>

        <p className="w-[80%] mx-auto my-8">I previously completed a bachelor's degree in mathematics and recently graduated from General Assembly's software engineering course.My favorite parts of web development are when I've crushed a bug that had bothered me for days or when I've successfully styled the page to match the design file exactly.</p>

        <p className="w-[80%] mx-auto my-8">Outside of programming, I enjoy cooking recipes I've never tried, growing nuclear hot peppers in my garden, and playing with my two cats, Bree and Nugget.</p>
        <div className="w-[80%] mx-auto">
          <a className="hover:text-slate-900 hover:bg-white/30 border rounded-xl border-stone-400 p-2" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/148_YMMrD0m3OzhM1OfJsBvxWQcXxcYiHfIn0bet8D_o/edit?usp=sharing">Resume</a>
        </div>
      </div>
      <aside className="flex flex-col md:w-[30%] w-[100%] mx-auto items-center my-5 md:my-0">
        <img src="/download.jpeg" alt="me" className="max-w-[300px] w-[300px]"/>
        <img src="/20221126_160613.jpg" alt="two cats in a box" className="max-w-[300px]" />
        <img src="/topsphere-media-yTNu3rcjxiU-unsplash.jpg" alt="Fort Wayne" className="max-w-[300px]"/>
      </aside>
    </div>
    
  )
}

export default About