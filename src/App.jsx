import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutEvent from './components/AboutEvent'
import Schedule from './components/Schedule'
import Teams from './components/Teams'
import Gallery from './components/Gallery'
import Registration from './components/Registration'
import LiveScore from './components/LiveScore'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'schedule', 'teams', 'gallery', 'registration', 'score']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero />
      <AboutEvent />
      <Schedule />
      <Teams />
      <Gallery />
      <LiveScore />
      <Registration />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App