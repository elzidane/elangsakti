import { useEffect, useState } from 'react'
import { 
  PlayIcon, 
  CalendarDaysIcon, 
  TrophyIcon, 
  UserGroupIcon, 
  SparklesIcon, 
  ArrowRightIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  FireIcon
} from '@heroicons/react/24/outline'

const Hero = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // Set tanggal event (15 Mei 2026)
    const eventDate = new Date('2026-05-15T08:00:00')

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate.getTime() - now

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    { 
      icon: <TrophyIcon className="w-5 h-5" />, 
      value: '24', 
      label: 'Tim Peserta',
      gradient: 'from-yellow-500 via-amber-500 to-orange-500',
      delay: '100'
    },
    { 
      icon: <CalendarDaysIcon className="w-5 h-5" />, 
      value: '3', 
      label: 'Hari Event',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      delay: '200'
    },
    { 
      icon: <UserGroupIcon className="w-5 h-5" />, 
      value: '300+', 
      label: 'Total Peserta',
      gradient: 'from-emerald-500 via-green-500 to-lime-500',
      delay: '300'
    },
    { 
      icon: <PlayIcon className="w-5 h-5" />, 
      value: '15', 
      label: 'Kategori Lomba',
      gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
      delay: '400'
    },
  ]

  const features = [
    { icon: <ShieldCheckIcon className="w-4 h-4" />, text: 'Kompetisi Nasional' },
    { icon: <FireIcon className="w-4 h-4" />, text: 'Hadiah Total 100 Juta' },
    { icon: <MapPinIcon className="w-4 h-4" />, text: 'Venue Premium' },
    { icon: <ClockIcon className="w-4 h-4" />, text: '3 Hari Penuh' },
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950 pt-24 pb-16">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500 opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float animation-delay-1000">
        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-40"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float animation-delay-1500">
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-red-500 opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header dengan Logo */}
          <div className="flex flex-col items-center mb-16">
            {/* Animated Logo Container */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/30 via-transparent to-cyan-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 p-6 rounded-2xl border border-gray-800/50 backdrop-blur-xl shadow-2xl">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <img 
                    src="/src/assets/LKBB.png" 
                    alt="Logo LKBB Elang Sakti"
                    className="relative w-40 h-40 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Animated Rings */}
              <div className="absolute -inset-2 border-2 border-primary-500/20 rounded-3xl animate-ping [animation-delay:1s]"></div>
              <div className="absolute -inset-3 border border-cyan-500/10 rounded-3xl animate-ping [animation-delay:2s]"></div>
            </div>

            {/* Event Badge */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-primary-400/10 to-cyan-500/20 rounded-full blur-xl"></div>
              <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900/80 to-black/80 rounded-full border border-gray-800/50 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full blur"></div>
                    <SparklesIcon className="relative w-5 h-5 text-primary-300 animate-pulse" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-primary-300 via-cyan-300 to-primary-300 bg-clip-text text-transparent">
                    LKBB PASKIBRA TINGKAT SMP SE-JAWA TIMUR
                  </span>
                </div>
                <div className="h-4 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
                <div className="text-sm font-medium text-gray-400">
                  SEASON <span className="text-primary-400 font-bold">III</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Title & Description */}
            <div className="space-y-8">
              {/* Main Title dengan Gradient Animation */}
              <div className="relative">
                <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-primary-500/20 via-transparent to-cyan-500/20 rounded-3xl blur-3xl opacity-50"></div>
                <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="block">
                    <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                      ELANG SAKTI
                    </span>
                  </span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 mt-4">
                    Lomba Keterampilan Baris Berbaris
                  </span>
                </h1>
              </div>

              {/* Year Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-full border border-gray-800 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-lg font-bold text-primary-300">2026</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                Ajang <span className="font-bold text-primary-300">bergengsi tahunan</span> yang mempertemukan 
                <span className="font-bold text-primary-300"> talenta terbaik Paskibra</span> se-Jawa Timur dalam 
                kompetisi baris berbaris yang menantang keterampilan, kedisiplinan, dan kekompakan tim.
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                    <div className="relative flex items-center gap-2 px-4 py-2.5 bg-gray-900/50 rounded-lg border border-gray-800/50 backdrop-blur-sm group-hover:border-primary-500/30 transition-all duration-300">
                      <div className="text-primary-400">{feature.icon}</div>
                      <span className="text-sm font-medium text-gray-300">{feature.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-primary-500/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="text-lg">Daftar Sekarang</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </button>
                
                <button 
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 bg-gradient-to-r from-gray-900/80 to-black/80 text-white font-bold rounded-xl border-2 border-gray-800 hover:border-primary-500/50 shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <PlayIcon className="w-5 h-5" />
                    <span>Pelajari Lebih Lanjut</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column - Countdown */}
            <div className="space-y-8">
              {/* Countdown Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">
                  <span className="bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                    Event Dimulai Dalam
                  </span>
                </h2>
                <p className="text-gray-500">
                  Bersiaplah untuk kompetisi terbesar tahun ini
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { value: days, label: 'Hari', gradient: 'from-red-500 to-orange-500' },
                  { value: hours, label: 'Jam', gradient: 'from-orange-500 to-amber-500' },
                  { value: minutes, label: 'Menit', gradient: 'from-amber-500 to-yellow-500' },
                  { value: seconds, label: 'Detik', gradient: 'from-yellow-500 to-lime-500' },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="relative bg-gradient-to-b from-gray-900/90 to-black/90 border border-gray-800/50 rounded-2xl p-6 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-1">
                      <div className="text-3xl md:text-4xl font-bold mb-1">
                        <span className="bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                          {item.value.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-gray-500">{item.label}</div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Event Details */}
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 p-6 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-primary-500/20 to-cyan-500/20 rounded-lg">
                      <CalendarDaysIcon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Tanggal Pelaksanaan</div>
                      <div className="font-bold text-white">15-17 Mei 2026</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-primary-500/20 to-cyan-500/20 rounded-lg">
                      <MapPinIcon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Lokasi</div>
                      <div className="font-bold text-white">SMPN 1 Jombang</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`group opacity-0 animate-slide-up`}
                    style={{ animationDelay: `${stat.delay}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50 rounded-xl p-4 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-500">
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient} bg-opacity-20`}>
                          <div className="text-white">{stat.icon}</div>
                        </div>
                        <div className="text-2xl font-bold">
                          <span className="bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent">
                            {stat.value}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-gray-500 mt-2">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sponsors */}
          <div className="relative mt-20 pt-12 border-t border-gray-800/30">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-gray-950">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <TrophyIcon className="w-4 h-4 text-yellow-500" />
                Didukung Oleh
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex flex-wrap justify-center gap-6 px-8 py-6 bg-gradient-to-r from-gray-900/30 to-black/30 rounded-2xl border border-gray-800/30 backdrop-blur-sm">
                <span className="text-primary-400 font-bold">Dinas Pendidikan Jatim</span>
                <div className="w-px h-4 bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
                <span className="text-cyan-400 font-bold">24 Sponsor Utama</span>
                <div className="w-px h-4 bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
                <span className="text-emerald-400 font-bold">Media Partner</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-500/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-primary-400 to-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Tambahkan style untuk animasi */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  )
}

export default Hero