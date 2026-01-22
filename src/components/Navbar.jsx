import { useState, useEffect } from 'react'

const Navbar = ({ activeSection, setActiveSection, onLogoClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const navItems = [
        { id: 'home', label: 'Beranda' },
        { id: 'about', label: 'Tentang' },
        { id: 'schedule', label: 'Jadwal' },
        { id: 'teams', label: 'Tim' },
        { id: 'gallery', label: 'Galeri' },
        { id: 'score', label: 'Skor' },
        { id: 'registration', label: 'Daftar' },
        { id: 'sponsors', label: 'Sponsor' }, // Ditambahkan
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Fungsi untuk handle klik navbar
    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId)
        setIsMenuOpen(false)
    }

    // Fungsi untuk handle logo click
    const handleLogoClick = () => {
        onLogoClick() // Panggil fungsi dari parent
        setIsMenuOpen(false)
    }

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled ? 'w-[95%] max-w-5xl' : 'w-[90%] max-w-4xl'
            }`}>
            {/* Desktop Navigation - Floating dengan Logo */}
            <div className="hidden lg:flex">
                <div className="relative w-full">
                    {/* Background Blur dengan Glass Effect */}
                    <div className={`absolute inset-0 bg-gray-900/20 backdrop-blur-xl rounded-2xl border ${isScrolled
                            ? 'border-red-700/30 shadow-2xl shadow-red-900/10'
                            : 'border-red-600/20 shadow-xl shadow-red-900/5'
                        }`}></div>

                    {/* Navigation Container */}
                    <div className="relative flex items-center justify-between px-6 py-2.5">
                        {/* Logo Section */}
                        <button
                            onClick={handleLogoClick}
                            className="group relative flex items-center gap-3 pr-4"
                        >
                            {/* Logo Glow Effect */}
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                                    <img
                                        src="/src/assets/LKBB.png"
                                        alt="Logo Elang Sakti"
                                        className="w-8 h-8 object-contain p-0.5"
                                    />
                                </div>
                            </div>

                            {/* Text Logo */}
                            <div className="text-left">
                                <div className="text-sm font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent font-display">
                                    ELANG SAKTI
                                </div>

                            </div>
                        </button>

                        {/* Navigation Items - Center */}
                        <div className="flex items-center space-x-0.5">
                            {navItems.map((item, index) => (
                                <div key={item.id} className="relative">
                                    <button
                                        onClick={() => handleNavClick(item.id)}
                                        className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 group ${activeSection === item.id
                                                ? 'text-white'
                                                : 'text-gray-300 hover:text-white'
                                            }`}
                                    >
                                        <span className="relative z-10 font-display tracking-wide">
                                            {item.label}
                                        </span>

                                        {/* Hover Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Active Indicator */}
                                        {activeSection === item.id && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-lg blur-sm animate-pulse"></div>
                                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-red-700/30 rounded-lg"></div>
                                                <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-red-400 to-red-300 rounded-full animate-pulse"></div>
                                                <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-red-400 to-red-300 rounded-full blur-sm"></div>
                                            </>
                                        )}
                                    </button>

                                    {/* Separator (kecuali item terakhir) */}
                                    {index < navItems.length - 1 && (
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-3 bg-gradient-to-b from-transparent via-red-700/20 to-transparent"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Spacer untuk balance */}
                        <div className="w-40">
                            {/* Optional: Bisa tambahkan tombol mode toggle atau lainnya */}
                            <div className="flex items-center justify-end">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden relative">
                {/* Background Blur Mobile */}
                <div className={`absolute inset-0 bg-gray-900/20 backdrop-blur-xl rounded-2xl border ${isScrolled
                        ? 'border-red-700/30 shadow-2xl shadow-red-900/10'
                        : 'border-red-600/20 shadow-xl shadow-red-900/5'
                    }`}></div>

                {/* Mobile Header */}
                <div className="relative flex items-center justify-between px-4 py-3">
                    {/* Mobile Logo */}
                    <button
                        onClick={handleLogoClick}
                        className="flex items-center gap-2 group"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                            <div className="relative w-8 h-8 bg-gradient-to-br from-gray-900 to-black rounded-full border border-red-700/30 flex items-center justify-center">
                                <img
                                    src="/src/assets/LKBB.png"
                                    alt="Logo Elang Sakti"
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-bold bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent font-display">
                                ELANG SAKTI
                            </div>
                            <div className="text-[10px] text-gray-400 font-medium mt-0.5">
                                LKBB 2024
                            </div>
                        </div>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2.5 rounded-lg bg-red-900/20 hover:bg-red-800/30 transition-all duration-300 group"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                            <span className={`block h-0.5 w-5 bg-red-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:bg-red-200'
                                }`}></span>
                            <span className={`block h-0.5 w-5 bg-red-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'group-hover:bg-red-200'
                                }`}></span>
                            <span className={`block h-0.5 w-5 bg-red-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:bg-red-200'
                                }`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="relative mt-2 rounded-xl overflow-hidden">
                        {/* Blur Background */}
                        <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-xl"></div>

                        {/* Dropdown Items */}
                        <div className="relative">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`w-full px-4 py-4 text-left transition-all duration-300 group relative overflow-hidden ${activeSection === item.id
                                            ? 'bg-gradient-to-r from-red-900/20 to-red-800/10 text-white'
                                            : 'text-gray-300 hover:bg-red-800/10 hover:text-white'
                                        }`}
                                >
                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-red-700/0 group-hover:from-red-600/5 group-hover:to-red-700/5 transition-all duration-300"></div>

                                    <div className="relative flex items-center justify-between">
                                        <span className="font-display text-sm tracking-wide">{item.label}</span>

                                        {/* Active Indicator */}
                                        {activeSection === item.id ? (
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-300 rounded-full blur animate-pulse"></div>
                                                <div className="relative w-2.5 h-2.5 bg-gradient-to-r from-red-400 to-red-300 rounded-full"></div>
                                            </div>
                                        ) : (
                                            <div className="w-2 h-0.5 bg-red-700/30 rounded-full group-hover:bg-red-400/50 transition-colors duration-300"></div>
                                        )}
                                    </div>

                                    {/* Active Full Border */}
                                    {activeSection === item.id && (
                                        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-400 to-red-300 rounded-r-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Scroll Progress Indicator */}
            <div className="absolute -bottom-2 left-0 right-0">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-red-900/10 to-transparent"></div>
            </div>
        </nav>
    )
}

export default Navbar