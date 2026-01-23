import { useState } from 'react'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const Footer = ({ scrollToSection }) => {
  const [email, setEmail] = useState('')
  
  const quickLinks = [
    { id: 'home', label: 'Beranda' },
    { id: 'about', label: 'Event' },
    { id: 'schedule', label: 'Jadwal' },
    { id: 'teams', label: 'Tim' },
    { id: 'gallery', label: 'Galeri' },
    { id: 'registration', label: 'Daftar' },
  ]

  const resources = [
    { label: 'Syarat & Ketentuan', href: '#' },
    { label: 'Panduan Peserta', href: '#' },
    { label: 'FAQ', href: '#' },
  ]

  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Terima kasih! Email ${email} berhasil terdaftar untuk newsletter.`)
      setEmail('')
    }
  }

  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-8 font-poppins">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20">
                  <AcademicCapIcon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Elang Sakti</h2>
                  <p className="text-sm text-gray-400">LKBB Paskibra SMPN 1 Jombang</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Membentuk generasi muda yang disiplin, berkarakter, dan berprestasi melalui kegiatan baris berbaris.
              </p>
            </div>

            {/* Newsletter - Simplified */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Tetap Update</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 text-sm placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg font-medium text-white text-sm hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                >
                  Kirim
                </button>
              </form>
            </div>
          </div>

          {/* Links Sections - Compact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm hover:translate-x-1 duration-300 flex items-center gap-2"
                  >
                    <ChevronRightIcon className="w-3 h-3" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Kontak</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-red-400" />
                <span className="text-sm">SMPN 1 Jombang</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-red-400" />
                <span className="text-sm">0812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-red-400" />
                <span className="text-sm">info@elangsakti.id</span>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-white mb-3 mt-6">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-red-400 transition-colors text-sm hover:translate-x-1 duration-300 flex items-center gap-2"
                  >
                    <ChevronRightIcon className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Elang Sakti. All rights reserved.
              </p>
            </div>

            {/* Social Media - Minimal */}
            <div className="flex items-center gap-4">
              {[
                { name: 'FB', color: 'hover:bg-blue-500/10' },
                { name: 'IG', color: 'hover:bg-pink-500/10' },
                { name: 'YT', color: 'hover:bg-red-500/10' },
                { name: 'TT', color: 'hover:bg-cyan-500/10' }
              ].map((platform) => (
                <a
                  key={platform.name}
                  href="#"
                  className={`w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${platform.color}`}
                >
                  <span className="text-xs font-medium">
                    {platform.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Policy Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                Cookies
              </a>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center mt-6 pt-4 border-t border-gray-900/50">
            <p className="text-gray-600 text-xs">
              Membangun karakter, mengukir prestasi • #ElangSakti2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer