import React from 'react'
import './index.css'
import About from './about'
import Experiences from './experience'
import Educations from './education'
import Testimonals from './testimonals'
import Contact from './contact'
const Maincontent = () => {
  return (
    <div className="main-content pull-right">
        <About/>
        <Experiences/>
        <Educations/>
        <Testimonals/>
        <Contact/>
    </div>
  )
}

export default Maincontent 