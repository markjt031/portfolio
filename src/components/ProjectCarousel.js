import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const ProjectCarousel = ({data}) => {
  
  const scrollLeft=()=>{
    let carousel=document.getElementById('carousel')
    const width=carousel.getElementsByTagName("div")[0].clientWidth
    carousel.scrollLeft=carousel.scrollLeft-width
  }
  const scrollRight=()=>{
    let carousel=document.getElementById('carousel')
    const width=carousel.getElementsByTagName("div")[0].clientWidth
    carousel.scrollLeft=carousel.scrollLeft+width
  }
  console.log(data.data.images)
  return (
    <div class="max-w-screen-lg mx-auto dark:text-zinc-200">
      <div class="flex">
        <div id="previous" class="text-5xl flex text-slate-400 justify-center items-center cursor-pointer p-2 relative -top-8" onClick={scrollLeft}>
          <FontAwesomeIcon icon={faAngleLeft}/>
        </div>
        <div id='carousel' class="scroll-smooth mt-4 flex w-[320px] min-h-[200px] md:w-[500px] gap-4 pb-5 snap-x overflow-x-auto mx-auto">
          {data.data.images.map((image, i)=>{
            return <div className="min-w-[100%]"key={i}>
              <div class="object-contain h-full w-full snap-center rounded-md bg-center shadow-md shadow-black/20 ">
                <img src={image} alt={data.data.title}/>
              </div>
            </div>
          })}
        </div>
        <div id="next" class="text-5xl flex  text-slate-400 justify-center items-center cursor-pointer p-2 relative -top-8" onClick={scrollRight}>
          <FontAwesomeIcon icon={faAngleRight}/>
      </div>
    </div>
    </div>
  )
}

export default ProjectCarousel