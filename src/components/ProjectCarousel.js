import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

const ProjectCarousel = ({data}) => {
  const [index, setIndex]=useState(0)
  const {images, title}=data.data

  const next=()=>{
    setIndex((currentIndex)=>{
      const newIndex=(currentIndex+1)%images.length
      return newIndex
    })
  }
  const prev=()=>{
      setIndex((currentIndex)=>{
        const newIndex=(currentIndex-1+images.length)%images.length
        return newIndex
      })
  }
  return (
    <div class="max-w-screen-lg mx-auto dark:text-zinc-200">
      <div class="flex">
        <div id="previous" class="text-5xl flex text-slate-400 justify-center items-center cursor-pointer p-2 relative -top-8" onClick={prev}>
          <FontAwesomeIcon icon={faAngleLeft}/>
        </div>
        <div id='carousel' class="scroll-smooth mt-4 flex w-[320px] min-h-[200px] md:w-[500px] gap-4 pb-5 snap-x overflow-x-auto mx-auto">
          <img src={images[index]} alt={title}/>
        </div>
        <div id="next" class="text-5xl flex  text-slate-400 justify-center items-center cursor-pointer p-2 relative -top-8" onClick={next}>
          <FontAwesomeIcon icon={faAngleRight}/>
      </div>
    </div>
    </div>
  )
}

export default ProjectCarousel