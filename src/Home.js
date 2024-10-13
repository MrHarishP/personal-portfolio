import React from 'react'
import Herosection from './components/hero-section/Herosection'
import About from './components/hero-section/about/About'
import Education from './components/education/Education'
import Skill from './components/skill/skill'
import Experience from './components/experience/experience'
import Project from './components/projects/project'
import Contact from './components/contact-me/contact'
// import Footer from './components/footer/footer'

const Home = () => {
  return (
    <div>
       <Herosection />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Project />
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
