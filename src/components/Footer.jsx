import { useState } from 'react'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  AcademicCapIcon,
  HomeIcon,
  CalendarIcon,
  UserGroupIcon,
  PhotoIcon,
  ChartBarIcon,
  ClipboardDocumentIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline'

const Footer = ({ scrollToSection }) => {
  const [email, setEmail] = useState('')
  
  const quickLinks = [
    { id: 'home', label: 'Beranda', icon: HomeIcon },
    { id: 'about', label: 'Event', icon: CalendarIcon },
    { id: 'schedule', label: 'Jadwal', icon: CalendarIcon },
    { id: 'teams', label: 'Tim', icon: UserGroupIcon },
    { id: 'gallery', label: 'Galeri', icon: PhotoIcon },
    { id: 'score', label: 'Skor', icon: ChartBarIcon },
    { id: 'registration', label: 'Daftar', icon: ClipboardDocumentIcon },
    { id: 'sponsors', label: 'Sponsor', icon: BanknotesIcon },
  ]

  const resources = [
    { label: 'Syarat & Ketentuan', href: '#' },
    { label: 'Panduan Peserta', href: '#' },
    { label: 'Download Brosur', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Update Terbaru', href: '#' },
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
    <footer className="bg-gradient-to-b from-gray-950 to-black pt-16 pb-8 font-poppins relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/5 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative p-2 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/30 group hover:border-red-400/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-600/0 rounded-lg group-hover:from-red-500/10 group-hover:to-red-600/10 transition-all duration-300"></div>
                  <AcademicCapIcon className="w-6 h-6 text-red-400 relative z-10" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white font-display">Elang Sakti</h2>
                  <p className="text-sm text-gray-400">LKBB Paskibra SMPN 1 Jombang</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-md leading-relaxed">
                Membentuk generasi muda yang disiplin, berkarakter, dan berprestasi melalui kegiatan baris berbaris yang berkualitas.
              </p>
              
              {/* Social Media */}
              <div className="flex items-center gap-4 mb-8">
                {[
                  { name: 'Facebook', color: 'from-blue-500 to-blue-600' },
                  { name: 'Instagram', color: 'from-pink-500 to-rose-600' },
                  { name: 'YouTube', color: 'from-red-500 to-red-600' },
                  { name: 'TikTok', color: 'from-cyan-500 to-blue-500' }
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href="#"
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-transparent rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-br ${platform.color} border border-gray-700 flex items-center justify-center hover:scale-110 transition-all duration-300`}>
                      <span className="text-white text-sm font-semibold">
                        {platform.name.charAt(0)}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <SparklesIcon className="w-5 h-5 text-red-400" />
                <h4 className="text-lg font-semibold text-white">Tetap Update</h4>
              </div>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-sm placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg font-semibold text-white text-sm hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  Kirim
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-red-400 to-red-300 rounded-full"></div>
                Navigasi Cepat
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleLinkClick(link.id)}
                      className="text-gray-400 hover:text-red-400 transition-all duration-300 text-sm flex items-center gap-3 group w-full text-left"
                    >
                      <div className="p-1.5 rounded-lg bg-gray-900/50 group-hover:bg-red-900/20 transition-colors">
                        <link.icon className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-400" />
                      </div>
                      {link.label}
                      <ArrowRightIcon className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 translate-x-[-5px] group-hover:translate-x-0 transition-all duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-red-400 to-red-300 rounded-full"></div>
                Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-red-400 transition-all duration-300 text-sm flex items-center gap-3 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="p-1.5 rounded-lg bg-gray-900/50 group-hover:bg-red-900/20 transition-colors">
                        <div className="w-1 h-1 rounded-full bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      {link.label}
                      <ArrowRightIcon className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 translate-x-[-5px] group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-red-400 to-red-300 rounded-full"></div>
              Hubungi Kami
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group cursor-pointer hover:translate-x-1 transition-transform duration-300">
                <div className="p-2 rounded-lg bg-gray-900/50 group-hover:bg-red-900/20 transition-colors">
                  <MapPinIcon className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">SMPN 1 Jombang</p>
                  <p className="text-gray-500 text-xs mt-1">Jl. Dr. Sutomo No. 5, Jombang</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer hover:translate-x-1 transition-transform duration-300">
                <div className="p-2 rounded-lg bg-gray-900/50 group-hover:bg-red-900/20 transition-colors">
                  <PhoneIcon className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-gray-300 text-sm">0812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer hover:translate-x-1 transition-transform duration-300">
                <div className="p-2 rounded-lg bg-gray-900/50 group-hover:bg-red-900/20 transition-colors">
                  <EnvelopeIcon className="w-5 h-5 text-red-400" />
                </div>
                <span className="text-gray-300 text-sm">info@elangsakti.id</span>
              </div>
            </div>

            {/* Map/Address Card */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-xs">Lokasi Event</span>
                <span className="text-red-400 text-xs font-semibold">MAP</span>
              </div>
              <p className="text-gray-300 text-sm font-medium">Lapangan Utama Sekolah</p>
              <p className="text-gray-500 text-xs">8:00 - 16:00 WIB</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="w-4 h-4 text-red-500" />
                <span className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Elang Sakti
                </span>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                  Privacy Policy
                </a>
                <div className="w-px h-3 bg-gray-700"></div>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                  Terms of Service
                </a>
                <div className="w-px h-3 bg-gray-700"></div>
                <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Partners */}
            <div className="flex items-center gap-6">
              <div className="text-gray-500 text-xs">
                Didukung oleh:
              </div>
              <div className="flex items-center gap-3">
                {[
                  { name: 'DISDIK', color: 'from-blue-500/20 to-blue-600/20' },
                  { name: 'PEMKAB', color: 'from-green-500/20 to-green-600/20' },
                  { name: 'KONI', color: 'from-red-500/20 to-red-600/20' }
                ].map((org) => (
                  <div 
                    key={org.name} 
                    className={`px-3 py-1.5 rounded-lg bg-gradient-to-br ${org.color} border border-gray-700/50 backdrop-blur-sm`}
                  >
                    <span className="text-gray-300 text-xs font-medium">{org.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Links */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors px-2">
              Privacy
            </a>
            <div className="w-px h-3 bg-gray-700"></div>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors px-2">
              Terms
            </a>
            <div className="w-px h-3 bg-gray-700"></div>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors px-2">
              Cookies
            </a>
          </div>

          {/* Final Credit */}
          <div className="text-center mt-8 pt-6 border-t border-gray-900/50">
            <p className="text-gray-600 text-xs tracking-wide">
              <span className="text-red-400/60">#</span> Membangun karakter, mengukir prestasi. 
              <span className="text-red-400/60"> #ElangSakti2024</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer