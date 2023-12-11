import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Project from './Project'


const Main = ({data}) => {
  return (
    <main className="bg-stone-200">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects/:id" element={<Project/>}/>
        </Routes>
    </main>
  )
}

export default Main