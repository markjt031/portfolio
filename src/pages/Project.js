import React from 'react'
import ProjectCarousel from '../components/ProjectCarousel'
import { useLocation } from 'react-router-dom'

const Project = () => {
  let {state}=useLocation()
  console.log(state)
  return (
    <>
    <div className=" bg-stone-200 text-slate-800">
      <h1 className="text-5xl text-center mt-6">{state.data.title}</h1>
      <ProjectCarousel data={state}>Project</ProjectCarousel>
    </div>
    </>
  )
}

export default Project