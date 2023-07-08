import React from 'react'
import ProjectCarousel from '../components/ProjectCarousel'
import { useLocation } from 'react-router-dom'

const Project = () => {
  let {state}=useLocation()
  console.log(state)
  return (
    <ProjectCarousel data={state}>Project</ProjectCarousel>
  )
}

export default Project