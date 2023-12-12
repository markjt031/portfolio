import React from 'react'
import { useState } from 'react'
import {HashLink} from 'react-router-hash-link'
import { projects } from '../data'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen]=useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen]=useState(false)
  
  return (
    <nav className="fixed z-50 flex top-0 bg-stone-500 w-full">
      <div className="flex items-center p-2">
        <h2 className="font-bold 2xl text-slate-100">
          Jessica Marks
        </h2>
      </div>
      <div className="block sm:hidden ml-auto pr-4 my-auto cursor-pointer">
        <div id="mobile-menu-button" className={`group ${isMenuOpen ? 'open' : ''} peer`} onClick={()=>setIsMenuOpen(!isMenuOpen)}>
            <div className="top-0 bg-zinc-200 rounded-full h-1 w-8 group-open:rotate-45 group-open:top-2 relative transition-all"></div>
            <div className="opacity-100 group-open:opacity-0 bg-zinc-200 rounded-full h-1 w-8 mt-1 transition-all"></div>
            <div className="top-0 bg-zinc-200 rounded-full h-1 w-8 mt-1 group-open:-rotate-45 group-open:-top-2 relative transition-all"></div>
        </div> 
        <div className="peer-open:block hidden absolute top-[40px] peer-open:transition-all linear bg-stone-500 w-full left-0">
            <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-slate-100 hover:text-zinc-200 transition-colors hover:bg-white/10">
              <span onClick={()=>{setIsMenuOpen(!isMenuOpen)}}><HashLink smooth to="#home">Home</HashLink></span>
            </div>
            <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-slate-100 hover:text-zinc-200 transition-colors hover:bg-white/10">
              <span onClick={()=>{setIsMenuOpen(!isMenuOpen)}}><HashLink smooth to="#about">About</HashLink></span>
            </div>
            <div 
              id="projects-menu-item"
              className={`group ${mobileSubmenuOpen ? 'open' :''} relative h-full cursor-pointer  text-slate-100 hover:text-zinc-200 transition-colors hover:bg-white/10`}>
                <div className="p-4 text-center font-bold" onClick={()=>setMobileSubmenuOpen(!mobileSubmenuOpen)}>Projects</div>
                <div className="hidden group-open:block bg-stone-500/30">
                  {projects.map((project)=>{
                    return <div className="text-center p-4 relative text-slate-100 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                      <HashLink smooth to={`#${project.title}`} onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>{project.title}</HashLink>
                    </div>
                  })}
                </div>
            </div>
            <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-slate-100 hover:text-zinc-200 transition-colors hover:bg-white/10">
              <span onClick={()=>{setIsMenuOpen(!isMenuOpen)}}><HashLink to="#contact">Contact</HashLink></span>
            </div>
          </div>
      </div>
      <div className="flex-1 sm:flex hidden items-center justify-end">
          <div className="menu-item">
          <span onClick={()=>{setIsMenuOpen(!isMenuOpen)}}><HashLink smooth to="#home">Home</HashLink></span>
          </div>
          <div className="menu-item">
          <span onClick={()=>{setIsMenuOpen(!isMenuOpen)}}><HashLink to="#about">About</HashLink></span>
          </div>
          <div className="menu-item group">
            <span>Projects</span>
            <div className="group-hover:block absolute hidden bg-stone-500 top-full right-0 whitespace-nowrap rounded-b-md text-right">
            {projects.map((project)=>{
                    return <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 transition-colors ease-in-out cursor-pointer text-slate-100">
                      <HashLink to={`#${project.title}`}>{project.title}</HashLink>
                    </div>
                  })}
             
            </div>
          </div>
          <div className="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-slate-100 hover:text-zinc-200 transition-colors hover:bg-white/10">
              <span onClick={()=>{setIsMenuOpen(!isMenuOpen)}}><HashLink smooth to="#contact">Contact</HashLink></span>
            </div>
        </div>
    </nav>
  )
}

export default Nav