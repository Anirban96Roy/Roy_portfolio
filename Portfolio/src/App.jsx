import React from 'react'

// Correctly import components (capitalized names)
import About from './components/About/About'
import Award from './components/Awards/Award'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Research from './components/Research/Research'
import Skills from './components/Skills/Skills'

import FluidBackground from './components/FluidBackground/FluidBackground';



// If you are using any custom component like BlurBlob, import it:
import BlurBlob from './components/BlurBlob'
import './App.css'

function App() {
  return (
    <div className="bg-[#A3DC9A]">
      
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      {/* Grid overlay effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <Home />
        <About />
        <Award />
        <Skills />
        <Research />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
