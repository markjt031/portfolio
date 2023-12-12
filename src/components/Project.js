import React from 'react'
import ProjectCarousel from './ProjectCarousel'
import Anchor from './Anchor'

const Project = ({project}) => {
  
  return (
    <>
    <div className=" bg-stone-200 text-slate-800 p-4">
    <Anchor anchor={project.title}/>
      <div className="flex flex-col bg-white/60 md:flex-row drop-shadow-md  rounded-md">
        <div className="md:w-[55%]">
          <ProjectCarousel project={project} key={project.title}></ProjectCarousel>
          <div className="flex w-full  my-4 items-center justify-center gap-4">
            {project.githubURL && <a className="hover:text-slate-900 bg-stone-500 hover:bg-stone-500/30 border text-white rounded-xl border-stone-400 p-2" target="_blank" rel="noreferrer" href={project.githubURL}>Github</a>}
            {project.deployedURL && <a className="hover:text-slate-900 bg-stone-500 hover:bg-stone-500/30 border text-white rounded-xl border-stone-400 p-2" target="_blank" rel="noreferrer" href={project.deployedURL}>Deployment</a>}
          </div>
        </div>
        <div className="mx-auto w-[100%] md:w-[600px] lg:w-[800px] p-4">
          
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <h1 className="text-xl">Technologies Used:</h1>
          <div className="flex my-6">
          {project.technologiesIcons.map((icon)=>{
            return <img src={icon} alt={icon} width="40"/>
          })}
          </div>
          {project.technologies.map((name)=>{
            return <span className="text-slate-500">{name+" "}</span>
          })}
          <h1 className="text-xl my-4">Description:</h1>
          <p className="text-slate-500">{project.description}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Project