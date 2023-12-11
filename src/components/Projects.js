import React from 'react'
import { projects } from '../data'
import Project from './Project'

const Projects = () => {
  return (<>
    <h1 className="text-center bg-stone-200 text-3xl pt-8">Projects</h1>
    {projects.map((project)=>{
        return <Project key={project.title} project={project} />
    })}
    </>
  )
}

export default Projects