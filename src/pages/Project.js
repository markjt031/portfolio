import React from 'react'
import ProjectCarousel from '../components/ProjectCarousel'
import { useLocation } from 'react-router-dom'

const Project = () => {
  let {state}=useLocation()
  
  return (
    <>
    <div className=" bg-stone-200 text-slate-800 p-4">
      <h1 className="text-5xl text-center mt-6">{state.data.title}</h1>
      <ProjectCarousel data={state}>Project</ProjectCarousel>
      <div className="flex w-[320px] md:w-[500px] my-4 mx-auto justify-center gap-4">
        <a className="hover:text-slate-900 hover:bg-white/30 border rounded-xl border-stone-400 p-2" target="_blank" rel="noreferrer" href={state.data.githubURL}>Github</a>
        <a className="hover:text-slate-900 hover:bg-white/30 border rounded-xl border-stone-400 p-2" target="_blank" rel="noreferrer" href={state.data.deployedURL}>Deployment</a>
      </div>
      <div className="my-8 mx-auto w-[320px] md:w-[600px] lg:w-[800px] bg-white/60 p-4">
        <h1 className="text-2xl">Technologies Used:</h1>
        <div className="flex my-6">
        {state.data.technologiesIcons.map((icon)=>{
          return <img src={icon} width="40"/>
        })}
        </div>
        {state.data.technologies.map((name)=>{
          return <span>{name+" "}</span>
        })}
        <h1 className="text-2xl my-4">Description:</h1>
        <p>{state.data.description}</p>
      </div>
    </div>
    </>
  )
}

export default Project