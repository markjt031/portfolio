import React from 'react'

const Hero = () => {
  return (
    <div className=" bg-stone-200 relative">
      <div className="flex h-[calc(100vh-200px)] justify-center items-center gap-4">
        <div 
          style={{backgroundImage: "url('download.jpeg')"}}
          className="rounded-full animate-slideLeft w-[140px] bg-center bg-cover h-[140px] md:w-[200px] md:h-[200px] bg-white/20"></div>
        <div className="animate-slideRight rounded-l-lg rounded-t-lg bg-white/20 top-40 h-20 right-2 md:h-40 md:w-80 p-2 md:p-10">
          <h2 className="text-l md:text-2xl text-slate-800">
            Hi, I'm Jessica Marks. 
          </h2>
          <p className="text-slate-400">
            Insert tagline here.
          </p>
        </div>
      </div>
      <div className="flex justify-center -mt-50">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50" className="block -mt-40" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" width="50" className="block -mt-40"/>  
      </div>
    </div>
  )
}

export default Hero