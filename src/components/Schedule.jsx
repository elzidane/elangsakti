import { useState } from 'react'
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1)

  const scheduleData = {
    1: [
      { time: "07:00 - 08:00", activity: "Registrasi Peserta", location: "Lapangan Utama", type: "registration" },
      { time: "08:00 - 08:30", activity: "Upacara Pembukaan", location: "Lapangan Utama", type: "ceremony" },
      { time: "08:30 - 12:00", activity: "Babak Penyisihan - Kategori Dasar", location: "Lapangan A", type: "competition" },
      { time: "12:00 - 13:00", activity: "Ishoma (Istirahat, Sholat, Makan)", location: "Aula Sekolah", type: "break" },
      { time: "13:00 - 16:00", activity: "Babak Penyisihan - Kategori Kreatif", location: "Lapangan B", type: "competition" },
      { time: "16:00 - 17:00", activity: "Technical Meeting", location: "Ruang Rapat", type: "meeting" },
    ],
    2: [
      { time: "07:00 - 07:30", activity: "Apel Pagi", location: "Lapangan Utama", type: "ceremony" },
      { time: "07:30 - 12:00", activity: "Babak Semifinal", location: "Lapangan Utama", type: "competition" },
      { time: "12:00 - 13:00", activity: "Ishoma", location: "Aula Sekolah", type: "break" },
      { time: "13:00 - 15:00", activity: "Workshop Paskibra", location: "Auditorium", type: "workshop" },
      { time: "15:00 - 17:00", activity: "Babak Final", location: "Lapangan Utama", type: "competition" },
    ],
    3: [
      { time: "08:00 - 10:00", activity: "Presentasi Karya Inovasi", location: "Auditorium", type: "presentation" },
      { time: "10:00 - 12:00", activity: "Lomba Yel-Yel", location: "Lapangan Utama", type: "competition" },
      { time: "12:00 - 13:00", activity: "Ishoma", location: "Aula Sekolah", type: "break" },
      { time: "13:00 - 15:00", activity: "Upacara Penutupan & Pengumuman Juara", location: "Lapangan Utama", type: "ceremony" },
      { time: "15:00 - 16:00", activity: "Foto Bersama & Penutupan", location: "Lapangan Utama", type: "closing" },
    ]
  }

  const getTypeColor = (type) => {
    const colors = {
      registration: "bg-blue-500/20 text-blue-300",
      ceremony: "bg-purple-500/20 text-purple-300",
      competition: "bg-primary-500/20 text-primary-300",
      break: "bg-yellow-500/20 text-yellow-300",
      meeting: "bg-indigo-500/20 text-indigo-300",
      workshop: "bg-green-500/20 text-green-300",
      presentation: "bg-pink-500/20 text-pink-300",
      closing: "bg-red-500/20 text-red-300",
    }
    return colors[type] || "bg-gray-500/20 text-gray-300"
  }

  return (
    <section id="schedule" className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Jadwal Kegiatan</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeDay === day
                    ? 'bg-gradient-to-r from-primary-700 to-primary-600 text-white shadow-lg'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5" />
                  <span>Hari Ke-{day}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Schedule Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scheduleData[activeDay].map((item, index) => (
              <div
                key={index}
                className="card hover:border-primary-700/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="w-5 h-5 text-primary-400" />
                    <span className="font-bold text-white">{item.time}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {item.type.toUpperCase()}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{item.activity}</h3>
                
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPinIcon className="w-5 h-5" />
                  <span>{item.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h4 className="text-lg font-semibold mb-4 text-center text-gray-300">Keterangan Warna:</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries({
                competition: "Kompetisi",
                ceremony: "Upacara",
                workshop: "Workshop",
                registration: "Registrasi",
                break: "Istrahat",
                meeting: "Rapat",
                presentation: "Presentasi",
                closing: "Penutupan"
              }).map(([type, label]) => (
                <div key={type} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getTypeColor(type).split(' ')[0]}`}></div>
                  <span className="text-sm text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule