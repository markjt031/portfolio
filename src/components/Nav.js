import React from 'react'
import { useState } from 'react'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen]=useState(false)
  
  return (
    <nav class="sticky z-50 flex top-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div class="flex items-center p-2">
        <img src='Untitled design (3).svg' width="30"/>
        <h2 class="font-bold 2xl text-slate-100">
          Jessica Marks
        </h2>
      </div>
      <div class="block md:hidden ml-auto pr-4 my-auto cursor-pointer">
        <div id="mobile-menu-button" className={`group ${isMenuOpen ? 'open' : ''} peer`} onClick={()=>setIsMenuOpen(!isMenuOpen)}>
            <div class="top-0 bg-zinc-200 rounded-full h-1 w-8 group-open:rotate-45 group-open:top-2 relative transition-all"></div>
            <div class="opacity-100 group-open:opacity-0 bg-zinc-200 rounded-full h-1 w-8 mt-1 transition-all"></div>
            <div class="top-0 bg-zinc-200 rounded-full h-1 w-8 mt-1 group-open:-rotate-45 group-open:-top-2 relative transition-all"></div>
        </div> 
        <div class="peer-open:block hidden absolute top-[40px] peer-open:transition-all linear bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 w-full left-0">
            <div class="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-slate-100 hover:text-zinc-200 transition-colors hover:bg-white/10">
              <span>Home</span>
            </div>
            <div class="relative flex h-full cursor-pointer items-center justify-center p-4 font-bold text-slate-100 hover:text-zinc-200 transition-colors hover:bg-white/10">
              <span>About</span>
            </div>
            <div 
              id="ticket-menu-item"
              class="group relative h-full cursor-pointer  text-slate-100 hover:text-zinc-200 transition-colors hover:bg-white/10">
                <div class="p-4 text-center font-bold">Projects</div>
                <div class="hidden group-open:block">
                 <div class="text-center p-4 relative text-slate-100 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                    <span>Connect-4</span>
                  </div>
                  <div class="text-center p-4 relative text-slate-100 hover:text-zinc-200 hover:bg-white/5 transition-colors ease-in-out">
                    <span>Hyrule Archives</span>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Nav