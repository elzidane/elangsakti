import { useState } from 'react'
import { CalendarIcon, ClockIcon, MapPinIcon, ChevronRightIcon, TrophyIcon, UsersIcon, PresentationChartBarIcon, MicrophoneIcon, StarIcon, FlagIcon, FireIcon, SparklesIcon } from '@heroicons/react/24/outline'

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1)

  const scheduleData = {
    1: {
      title: "Penyisihan & Technical Meeting",
      date: "15 Mei 2026",
      activities: [
        { time: "07:00 - 08:00", activity: "Registrasi & Check-in Peserta", location: "Lapangan Utama", type: "registration", icon: <UsersIcon className="w-5 h-5" /> },
        { time: "08:00 - 08:45", activity: "Upacara Pembukaan Spektakuler", location: "Lapangan Utama", type: "ceremony", icon: <FlagIcon className="w-5 h-5" /> },
        { time: "08:45 - 12:00", activity: "Babak Penyisihan - Formasi Dasar", location: "Lapangan A", type: "competition", icon: <TrophyIcon className="w-5 h-5" /> },
        { time: "12:00 - 13:30", activity: "Ishoma & Lunch Break", location: "Aula Utama", type: "break", icon: <FireIcon className="w-5 h-5" /> },
        { time: "13:30 - 16:30", activity: "Babak Penyisihan - Kategori Kreatif", location: "Lapangan B", type: "competition", icon: <PresentationChartBarIcon className="w-5 h-5" /> },
        { time: "16:30 - 18:00", activity: "Technical Meeting & Briefing", location: "Ruang Rapat VIP", type: "meeting", icon: <MicrophoneIcon className="w-5 h-5" /> },
      ]
    },
    2: {
      title: "Semifinal & Workshop",
      date: "16 Mei 2026",
      activities: [
        { time: "06:30 - 07:00", activity: "Apel Pagi & Pemanasan", location: "Lapangan Utama", type: "ceremony", icon: <FlagIcon className="w-5 h-5" /> },
        { time: "07:00 - 12:00", activity: "Babak Semifinal - Kompetisi Inti", location: "Lapangan Utama", type: "competition", icon: <TrophyIcon className="w-5 h-5" /> },
        { time: "12:00 - 13:30", activity: "Ishoma & Networking Session", location: "Food Court Area", type: "break", icon: <FireIcon className="w-5 h-5" /> },
        { time: "13:30 - 15:30", activity: "Workshop Masterclass Paskibra", location: "Auditorium Premium", type: "workshop", icon: <StarIcon className="w-5 h-5" /> },
        { time: "15:30 - 18:00", activity: "Babak Final - Perebutan Posisi", location: "Lapangan Utama", type: "competition", icon: <TrophyIcon className="w-5 h-5" /> },
      ]
    },
    3: {
      title: "Final & Penutupan",
      date: "17 Mei 2026",
      activities: [
        { time: "08:00 - 10:30", activity: "Presentasi Inovasi Baris Berbaris", location: "Auditorium", type: "presentation", icon: <PresentationChartBarIcon className="w-5 h-5" /> },
        { time: "10:30 - 12:00", activity: "Lomba Yel-Yel & Spirit Competition", location: "Lapangan Utama", type: "competition", icon: <SparklesIcon className="w-5 h-5" /> },
        { time: "12:00 - 13:30", activity: "Ishoma & Persiapan Penutupan", location: "Aula Utama", type: "break", icon: <FireIcon className="w-5 h-5" /> },
        { time: "13:30 - 15:30", activity: "Upacara Penutupan & Pengumuman Juara", location: "Lapangan Utama", type: "ceremony", icon: <FlagIcon className="w-5 h-5" /> },
        { time: "15:30 - 17:00", activity: "Foto Bersama & Penyerahan Hadiah", location: "Panggung Utama", type: "closing", icon: <StarIcon className="w-5 h-5" /> },
      ]
    }
  }

  const getTypeConfig = (type) => {
    const configs = {
      registration: { 
        gradient: "from-red-500/20 via-red-600/10 to-red-500/20", 
        text: "text-red-300", 
        border: "border-red-700/30",
        bg: "bg-red-500/10"
      },
      ceremony: { 
        gradient: "from-red-600/20 via-red-700/10 to-red-600/20", 
        text: "text-red-200", 
        border: "border-red-800/30",
        bg: "bg-red-600/10"
      },
      competition: { 
        gradient: "from-red-700/20 via-red-800/10 to-red-700/20", 
        text: "text-red-200", 
        border: "border-red-900/30",
        bg: "bg-red-700/10"
      },
      break: { 
        gradient: "from-red-800/20 via-red-900/10 to-red-800/20", 
        text: "text-red-300", 
        border: "border-red-950/30",
        bg: "bg-red-800/10"
      },
      meeting: { 
        gradient: "from-red-900/20 via-red-950/10 to-red-900/20", 
        text: "text-red-400", 
        border: "border-red-950/40",
        bg: "bg-red-900/10"
      },
      workshop: { 
        gradient: "from-red-700/20 via-red-800/10 to-red-700/20", 
        text: "text-red-200", 
        border: "border-red-900/30",
        bg: "bg-red-700/10"
      },
      presentation: { 
        gradient: "from-red-600/20 via-red-700/10 to-red-600/20", 
        text: "text-red-300", 
        border: "border-red-800/30",
        bg: "bg-red-600/10"
      },
      closing: { 
        gradient: "from-red-500/20 via-red-600/10 to-red-500/20", 
        text: "text-red-300", 
        border: "border-red-700/30",
        bg: "bg-red-500/10"
      },
    }
    return configs[type] || { gradient: "from-gray-500/20 via-gray-600/10 to-gray-500/20", text: "text-gray-300", border: "border-gray-700/30", bg: "bg-gray-500/10" }
  }

  return (
    <section id="schedule" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black font-body">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-gradient-to-t from-red-900/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-800/30 backdrop-blur-sm mb-8">
            <CalendarIcon className="w-5 h-5 text-red-300" />
            <span className="text-lg font-semibold text-red-300 font-display">Jadwal Kegiatan</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-200 bg-clip-text text-transparent">
              Timeline Event
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ikuti setiap momen penting dalam kompetisi baris berbaris terbesar se-Jawa Timur
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[1, 2, 3].map((day) => {
            const dayData = scheduleData[day]
            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`group relative px-8 py-4 rounded-2xl transition-all duration-500 ${
                  activeDay === day
                    ? 'scale-105 shadow-2xl shadow-red-900/20'
                    : 'hover:scale-102 hover:shadow-xl hover:shadow-red-900/10'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  activeDay === day 
                    ? 'from-red-700/30 via-red-800/20 to-red-700/30' 
                    : 'from-gray-900/50 to-black/50'
                } rounded-2xl border ${
                  activeDay === day 
                    ? 'border-red-600/50' 
                    : 'border-red-900/30 group-hover:border-red-700/50'
                } backdrop-blur-sm`}></div>
                
                <div className="relative flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    activeDay === day 
                      ? 'bg-gradient-to-r from-red-600 to-red-700' 
                      : 'bg-red-900/20 group-hover:bg-red-800/30'
                  }`}>
                    <CalendarIcon className={`w-6 h-6 ${
                      activeDay === day ? 'text-white' : 'text-red-300 group-hover:text-red-200'
                    }`} />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold ${
                        activeDay === day ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      } font-display`}>
                        {dayData.title}
                      </span>
                      {activeDay === day && (
                        <ChevronRightIcon className="w-5 h-5 text-red-300 animate-pulse" />
                      )}
                    </div>
                    <p className={`text-sm ${
                      activeDay === day ? 'text-red-300' : 'text-gray-400 group-hover:text-red-300'
                    }`}>
                      {dayData.date}
                    </p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-900/20 to-transparent"></div>
            
            {/* Schedule Items */}
            <div className="space-y-8">
              {scheduleData[activeDay].activities.map((item, index) => {
                const config = getTypeConfig(item.type)
                const isOdd = index % 2 === 0
                
                return (
                  <div key={index} className={`relative group ${
                    isOdd ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'
                  }`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 w-4 h-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-300 rounded-full blur-sm animate-pulse"></div>
                      <div className="relative w-4 h-4 bg-gradient-to-r from-red-400 to-red-300 rounded-full"></div>
                    </div>
                    
                    {/* Card Container */}
                    <div className={`relative md:w-5/6 ${
                      isOdd ? 'md:pr-8 md:text-right' : 'md:pl-8'
                    }`}>
                      {/* Card Background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} rounded-2xl border ${config.border} backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      {/* Card Content */}
                      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-red-900/50 p-6 backdrop-blur-sm group-hover:border-red-600/50 transition-all duration-500 group-hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          {/* Left Section - Time & Icon */}
                          <div className={`flex items-center gap-4 ${isOdd ? 'md:flex-row-reverse' : ''}`}>
                            <div className={`p-3 rounded-xl ${config.bg}`}>
                              <div className={config.text}>
                                {item.icon}
                              </div>
                            </div>
                            <div className={`${isOdd ? 'md:text-right' : ''}`}>
                              <div className="flex items-center gap-2 mb-1">
                                <ClockIcon className={`w-4 h-4 ${config.text}`} />
                                <span className={`text-lg font-bold ${config.text} font-display`}>
                                  {item.time}
                                </span>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${config.text} ${config.bg} border ${config.border} backdrop-blur-sm`}>
                                {item.type.toUpperCase()}
                              </span>
                            </div>
                          </div>
                          
                          {/* Right Section - Content */}
                          <div className={`flex-1 ${isOdd ? 'md:text-right md:pr-4' : 'md:pl-4'}`}>
                            <h3 className="text-xl font-bold text-white mb-3 font-heading">
                              {item.activity}
                            </h3>
                            <div className="flex items-center gap-2 text-gray-300">
                              <MapPinIcon className="w-4 h-4" />
                              <span className="font-body">{item.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover Indicator */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-red-400 to-red-300 rounded-full ${
                          isOdd ? '-right-2' : '-left-2'
                        } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-20 pt-12 border-t border-red-900/30">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-8 text-center font-heading">
              <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                Kategori Kegiatan
              </span>
            </h4>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries({
                competition: "Kompetisi",
                ceremony: "Upacara",
                workshop: "Workshop",
                registration: "Registrasi",
                break: "Ishoma",
                meeting: "Meeting",
                presentation: "Presentasi",
                closing: "Penutupan"
              }).map(([type, label]) => {
                const config = getTypeConfig(type)
                return (
                  <div key={type} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className="relative flex items-center gap-3 p-4 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-xl border border-red-900/30 backdrop-blur-sm">
                      <div className={`w-3 h-3 rounded-full ${config.bg}`}></div>
                      <span className={`text-sm font-medium ${config.text} font-body`}>{label}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-900/20 to-black/50 border border-red-900/30">
            <ClockIcon className="w-4 h-4 text-red-300" />
            <span className="text-sm text-gray-300 font-body">
              Jadwal dapat berubah menyesuaikan kondisi lapangan
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule