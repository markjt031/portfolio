import React from 'react'
import { useEffect, useState } from 'react'
import Anchor from './Anchor'



const Hero = () => {
  const [profile, setProfile]=useState({})
  const getGithubProfile=async (username)=>{
    try {
        const response=await fetch(`https://api.github.com/users/${username}`)
        const data=await response.json()
        setProfile(data)
    }
    catch(e){
        console.log(e)
    }
}
  useEffect(()=>{
    setProfile(getGithubProfile('markjt031'))
  }, [])

  const {avatar_url, bio}=profile
  return (
    <div className="bg-stone-200 h-[calc(100vh-200px)] w-full">
    <Anchor anchor="home"/>
    <div className="  flex justify-center items-center drop-shadow-md">
      <div className="flex flex-col md:flex-row h-[calc(100vh-200px)] rounded-md justify-center items-center gap-4 bg-white/60 w-full sm:w-[60%] md:w-full mx-4">
        <div 
          style={{backgroundImage: `url(${avatar_url})`}}
          className="rounded-full animate-slideLeft w-[180px] bg-center bg-cover h-[180px] md:w-[200px] md:h-[200px] drop-shadow-lg bg-white/60"></div>
        <div className="animate-slideRight rounded-l-lg rounded-t-xl drop-shadow-2xl bg-white/60 h-30 w-48 md:h-30 md:w-72 p-2 md:p-3">
          <h2 className="text-l md:text-2xl text-slate-800">
            Hi, I'm Jessica Marks. 
          </h2>
          <p className="text-slate-400 w-[200px] mb-4">
            {bio}
          </p>
          <div className="w-full">
          <a className="hover:text-slate-900 hover:bg-stone-500/30 bg-stone-500 text-white  border rounded-xl border-stone-400 p-2" target="_blank" rel="noreferrer" href="./resume.pdf" download>Download Resume</a>
        </div>
        </div>
      </div>
    </div>
    
    </div>
    
  )
}

export default Hero