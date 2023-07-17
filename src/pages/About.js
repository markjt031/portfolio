import React from 'react'

const About = () => {
  return (
    <div className="md:flex gap-2 bg-stone-200 text-slate-800 py-10">
      <div className="md:w-[60%] w-[95%] bg-white/60 mx-auto  py-5">
        <h1 className="text-3xl mx-auto w-[80%]">About Me</h1>
        <p className="w-[80%] mx-auto my-8">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
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