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
  const [visibleSections, setVisibleSections] = useState({
    home: true,
    about: false,
    schedule: false,
    teams: false,
    gallery: false,
    score: false,
    registration: false,
    sponsors: false
  })

  // Handle section visibility based on active section
  useEffect(() => {
    setVisibleSections({
      home: activeSection === 'home',
      about: activeSection === 'about',
      schedule: activeSection === 'schedule',
      teams: activeSection === 'teams',
      gallery: activeSection === 'gallery',
      score: activeSection === 'score',
      registration: activeSection === 'registration',
      sponsors: activeSection === 'sponsors'
    })
  }, [activeSection])

  // Handle scroll untuk auto-detection (opsional)
  useEffect(() => {
    const handleScroll = () => {
      if (activeSection === 'home') return // Skip auto-detect jika di home
    
      const sections = ['home', 'about', 'schedule', 'teams', 'gallery', 'registration', 'score', 'sponsors']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && visibleSections[section]) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (section !== activeSection) {
              setActiveSection(section)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection, visibleSections])

  // Scroll ke section yang aktif
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  // Handle navbar click
  const handleNavClick = (section) => {
    setActiveSection(section)
    // Jika section belum visible, show dulu baru scroll
    if (!visibleSections[section]) {
      setVisibleSections(prev => ({
        ...prev,
        [section]: true
      }))
      
      // Tunggu sejenak agar section dirender dulu
      setTimeout(() => {
        scrollToSection(section)
      }, 50)
    } else {
      scrollToSection(section)
    }
  }

  // Handle back to home (show only home section)
  const handleBackToHome = () => {
    setActiveSection('home')
    setVisibleSections({
      home: true,
      about: false,
      schedule: false,
      teams: false,
      gallery: false,
      score: false,
      registration: false,
      sponsors: false
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Component untuk Home Button di setiap section
  const HomeButton = () => (
    <button
      onClick={handleBackToHome}
      className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-red-500 to-rose-600 rounded-full shadow-lg hover:shadow-red-500/30 transform hover:scale-110 transition-all duration-300"
      title="Kembali ke Beranda"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </button>
  )

  // Section Content dengan animation
  const SectionWrapper = ({ id, children, isVisible }) => {
    if (!isVisible) return null
    
    return (
      <div 
        id={id}
        className={`animate-fadeIn ${id !== 'home' ? 'pt-20' : ''}`}
      >
        {children}
        {id !== 'home' && <HomeButton />}
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        activeSection={activeSection}
        setActiveSection={handleNavClick}
        onLogoClick={handleBackToHome}
      />
      
      <SectionWrapper id="home" isVisible={visibleSections.home}>
        <Hero />
      </SectionWrapper>
      
      <SectionWrapper id="about" isVisible={visibleSections.about}>
        <AboutEvent />
      </SectionWrapper>
      
      <SectionWrapper id="schedule" isVisible={visibleSections.schedule}>
        <Schedule />
      </SectionWrapper>
      
      <SectionWrapper id="teams" isVisible={visibleSections.teams}>
        <Teams />
      </SectionWrapper>
      
      <SectionWrapper id="gallery" isVisible={visibleSections.gallery}>
        <Gallery />
      </SectionWrapper>
      
      <SectionWrapper id="score" isVisible={visibleSections.score}>
        <LiveScore />
      </SectionWrapper>
      
      <SectionWrapper id="registration" isVisible={visibleSections.registration}>
        <Registration />
      </SectionWrapper>
      
      <SectionWrapper id="sponsors" isVisible={visibleSections.sponsors}>
        <Sponsors />
      </SectionWrapper>
      
      {/* Footer selalu tampil */}
      <Footer />
    </div>
  )
}

export default App