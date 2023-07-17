import React from 'react'

const Hero = () => {
  return (
    <div className=" bg-stone-200 h-[calc(100vh-200px)] relative">
      <div className="flex h-[calc(100vh-200px)] justify-center items-center gap-4">
        <div 
          style={{backgroundImage: "url('download.jpeg')"}}
          className="rounded-full animate-slideLeft w-[140px] bg-center bg-cover h-[140px] md:w-[200px] md:h-[200px] drop-shadow-lg bg-white/60"></div>
        <div className="animate-slideRight rounded-l-lg rounded-t-xl drop-shadow-lg bg-white/60 h-30 right-2 md:h-30 md:w-70 p-2 md:p-3">
          <h2 className="text-l md:text-2xl text-slate-800">
            Hi, I'm Jessica Marks. 
          </h2>
          <p className="text-slate-400 w-[200px]">
            Software developer, creative problem solver
            and lifelong learner.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-end mt-[100px]">
        <a href="https://github.com/markjt031" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50" className="block -mt-40" alt="github logo" /></a>
        <a href="https://www.linkedin.com/in/jessicamarks031/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="50" className="block -mt-40" alt="linkedIn logo"/></a>  
      </div>
    </div>
  )
}

export default Hero