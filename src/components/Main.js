import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Project from '../pages/Project'
import Projects from '../pages/projects'

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route pahth="/projects/:id" element={<Project/>}/>
        </Routes>
    </main>
  )
}

export default Main