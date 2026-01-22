import { useState } from 'react'
import { 
  Bars3Icon, 
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
  CalendarIcon,
  UserGroupIcon,
  PhotoIcon,
  PencilSquareIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const Navbar = ({ isDarkMode, setIsDarkMode, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navItems = [
    { id: 'home', label: 'Beranda', icon: <HomeIcon className="w-5 h-5" /> },
    { id: 'about', label: 'Tentang', icon: <InformationCircleIcon className="w-5 h-5" /> },
    { id: 'schedule', label: 'Jadwal', icon: <CalendarIcon className="w-5 h-5" /> },
    { id: 'teams', label: 'Tim', icon: <UserGroupIcon className="w-5 h-5" /> },
    { id: 'gallery', label: 'Galeri', icon: <PhotoIcon className="w-5 h-5" /> },
    { id: 'score', label: 'Papan Skor', icon: <ChartBarIcon className="w-5 h-5" /> },
    { id: 'registration', label: 'Pendaftaran', icon: <PencilSquareIcon className="w-5 h-5" /> },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-primary-900/30 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className=" p-2 rounded-lg">
              <img src="/src/assets/LKBB.png" alt="Logo Elang Sakti" className='w-10 h-10' />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Elang Sakti
              </h1>
              <p className="text-xs text-gray-400">Paskibra SMPN 1 Jombang</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary-900/30 text-primary-300'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-4 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-300" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary-900/30 text-primary-300'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar