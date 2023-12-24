// import {motion} from 'framer-motion'
import Navbar from './Navbar'
import './App.css'
import { FaArrowUp } from 'react-icons/fa'
import Hero from './Hero'
import About from './About'
import Academics from './Academics'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'

function App() {
  return (
    <div className="app">
      {/* 
        Resume sections
        1. Hero (name, title, socials)
        2. About (description)
        3. Academics (education)
        5. Projects (projects)
        6. Skills (skills)
          - Languages
          - Frameworks
          - Libraries
          - Databases
          - Tools
        7. Achievements (achievements)
        8. Contact (contact)
        */}
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Projects />
      <Skills />
      <Contact />

      
      <a href="#hero" className='move-top'>
        <FaArrowUp />
      </a>

    </div>
  )
}

export default App
