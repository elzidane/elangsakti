import { useState } from 'react'
import { UserGroupIcon, TrophyIcon, StarIcon, FireIcon, AcademicCapIcon, BuildingLibraryIcon, UsersIcon, FlagIcon, ChevronRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

const Teams = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredTeam, setHoveredTeam] = useState(null)

  const teams = [
    {
      id: 1,
      name: "GARUDA MUDA",
      school: "SMPN 1 Jombang",
      category: "putra",
      score: 98,
      members: 16,
      captain: "Rizki Pratama",
      achievements: ["JUARA 1 2024", "BEST PERFORMANCE 2023", "INOVATOR AWARD"],
      color: "from-red-600 to-red-800",
      established: 2018,
      motto: "Disiplin, Berani, Unggul"
    },
    {
      id: 2,
      name: "MERPATI PUTIH",
      school: "SMPN 2 Jombang",
      category: "putri",
      score: 95,
      members: 16,
      captain: "Siti Aisyah",
      achievements: ["JUARA 1 2023", "BEST FORMATION 2022", "SPIRIT AWARD"],
      color: "from-red-700 to-red-900",
      established: 2019,
      motto: "Elegansi dalam Setiap Langkah"
    },
    {
      id: 3,
      name: "RAJAWALI SAKTI",
      school: "SMPN 3 Jombang",
      category: "campuran",
      score: 94,
      members: 20,
      captain: "Ahmad Fauzi",
      achievements: ["JUARA 2 2024", "BEST COORDINATION", "INNOVATION AWARD"],
      color: "from-red-800 to-red-950",
      established: 2020,
      motto: "Satu Hati, Satu Tekad"
    },
    {
      id: 4,
      name: "ELANG PERKASA",
      school: "SMPN 1 Surabaya",
      category: "putra",
      score: 92,
      members: 16,
      captain: "Budi Santoso",
      achievements: ["JUARA 3 2024", "BEST COMMANDER", "FAVORITE TEAM"],
      color: "from-red-600 to-red-800",
      established: 2017,
      motto: "Perkasa dan Berkarakter"
    },
    {
      id: 5,
      name: "NAGA MERAH",
      school: "SMPN 2 Malang",
      category: "campuran",
      score: 90,
      members: 20,
      captain: "Dewi Kurnia",
      achievements: ["BEST NEWCOMER 2023", "SPIRIT AWARD"],
      color: "from-red-700 to-red-900",
      established: 2021,
      motto: "Semangat Membara, Prestasi Gemilang"
    },
    {
      id: 6,
      name: "MACAN KUMBANG",
      school: "SMPN 1 Kediri",
      category: "putri",
      score: 89,
      members: 16,
      captain: "Maya Indah",
      achievements: ["JUARA 2 2023", "BEST UNIFORM"],
      color: "from-red-800 to-red-950",
      established: 2019,
      motto: "Elegan dan Tangguh"
    },
    // {
    //   id: 7,
    //   name: "SATRIA BANGSA",
    //   school: "SMPN 4 Jombang",
    //   category: "putra",
    //   score: 87,
    //   members: 16,
    //   captain: "Rafi Akbar",
    //   achievements: ["BEST DISCIPLINE", "FAVORITE TEAM 2022"],
    //   color: "from-red-600 to-red-800",
    //   established: 2020,
    //   motto: "Satria Sejati, Bangsa Berjaya"
    // },
    // {
    //   id: 8,
    //   name: "CENDRAWASIH EMAS",
    //   school: "SMPN 1 Mojokerto",
    //   category: "putri",
    //   score: 86,
    //   members: 16,
    //   captain: "Nadia Putri",
    //   achievements: ["BEST NEWCOMER 2024"],
    //   color: "from-red-700 to-red-900",
    //   established: 2022,
    //   motto: "Cantik, Cerdas, Berprestasi"
    // },
    // {
    //   id: 9,
    //   name: "BHINEKA TUNGGAL",
    //   school: "SMP Internasional",
    //   category: "campuran",
    //   score: 85,
    //   members: 20,
    //   captain: "Kevin Alexander",
    //   achievements: ["INTERNATIONAL AWARD", "BEST TEAMWORK"],
    //   color: "from-red-800 to-red-950",
    //   established: 2021,
    //   motto: "Bhinneka Tunggal Ika dalam Aksi"
    // },
  ]

  const categories = [
    { id: 'all', label: 'Semua Tim', count: teams.length, icon: <UsersIcon className="w-5 h-5" /> },
    { id: 'putra', label: 'Putra', count: teams.filter(t => t.category === 'putra').length, icon: <FlagIcon className="w-5 h-5" /> },
    { id: 'putri', label: 'Putri', count: teams.filter(t => t.category === 'putri').length, icon: <UserGroupIcon className="w-5 h-5" /> },
    { id: 'campuran', label: 'Campuran', count: teams.filter(t => t.category === 'campuran').length, icon: <AcademicCapIcon className="w-5 h-5" /> },
  ]

  const filteredTeams = activeCategory === 'all' 
    ? teams 
    : teams.filter(team => team.category === activeCategory)

  const stats = [
    { value: teams.length, label: 'Total Tim', icon: <TrophyIcon className="w-6 h-6" />, gradient: "from-red-600 to-red-700" },
    { value: teams.reduce((acc, team) => acc + team.members, 0), label: 'Total Peserta', icon: <UsersIcon className="w-6 h-6" />, gradient: "from-red-700 to-red-800" },
    { value: 12, label: 'Sekolah Peserta', icon: <BuildingLibraryIcon className="w-6 h-6" />, gradient: "from-red-800 to-red-900" },
    { value: 9, label: 'Kota/Kabupaten', icon: <AcademicCapIcon className="w-6 h-6" />, gradient: "from-red-900 to-red-950" },
  ]

  return (
    <section id="teams" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black font-body">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-gradient-to-t from-red-900/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-800/30 backdrop-blur-sm mb-8">
            <UsersIcon className="w-5 h-5 text-red-300" />
            <span className="text-lg font-semibold text-red-300 font-display">Tim Peserta</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-200 bg-clip-text text-transparent">
              Kontingen Terbaik
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kenali tim-tim hebat yang akan bersaing dalam kompetisi baris berbaris terbesar se-Jawa Timur
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-red-900/50 p-6 backdrop-blur-sm hover:border-red-600/50 transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient}`}>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold font-display">
                    <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                </div>
                <div className="text-gray-400 font-medium font-body">{stat.label}</div>
                <div className="mt-4 h-0.5 w-8 bg-gradient-to-r from-transparent via-red-900/30 to-transparent group-hover:via-red-500 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-xl transition-all duration-500 ${
                activeCategory === category.id
                  ? 'scale-105 shadow-2xl shadow-red-900/20'
                  : 'hover:scale-102 hover:shadow-xl hover:shadow-red-900/10'
              }`}
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${
                activeCategory === category.id 
                  ? 'from-red-700/30 via-red-800/20 to-red-700/30' 
                  : 'from-gray-900/50 to-black/50'
              } rounded-xl border ${
                activeCategory === category.id 
                  ? 'border-red-600/50' 
                  : 'border-red-900/30 group-hover:border-red-700/50'
              } backdrop-blur-sm`}></div>
              
              <div className="relative flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-red-600 to-red-700' 
                    : 'bg-red-900/20 group-hover:bg-red-800/30'
                }`}>
                  <div className={`${
                    activeCategory === category.id ? 'text-white' : 'text-red-300 group-hover:text-red-200'
                  }`}>
                    {category.icon}
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${
                      activeCategory === category.id ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    } font-display`}>
                      {category.label}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      activeCategory === category.id 
                        ? 'bg-red-500/20 text-red-300' 
                        : 'bg-red-900/20 text-red-400 group-hover:bg-red-800/30'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Teams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTeams.map((team) => (
            <div 
              key={team.id}
              onMouseEnter={() => setHoveredTeam(team.id)}
              onMouseLeave={() => setHoveredTeam(null)}
              className="group relative"
            >
              {/* Card Background Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${team.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              {/* Team Card */}
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl border border-red-900/50 p-6 backdrop-blur-xl hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    {/* Team Badge */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${team.color} mb-4 shadow-lg`}>
                      <TrophyIcon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Team Name & School */}
                    <h3 className="text-2xl font-bold text-white mb-2 font-heading tracking-tight">
                      {team.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300">
                      <BuildingLibraryIcon className="w-4 h-4" />
                      <span className="font-body">{team.school}</span>
                    </div>
                  </div>
                  
                  {/* Score Section */}
                  <div className="text-right">
                    <div className="text-4xl font-bold mb-1 font-display">
                      <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                        {team.score}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 font-body">Skor</div>
                    <div className="flex justify-end gap-0.5 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon 
                          key={star} 
                          className={`w-4 h-4 ${
                            star <= Math.floor(team.score / 20) 
                              ? 'text-red-400 fill-red-400' 
                              : 'text-gray-800'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Team Info */}
                <div className="space-y-5">
                  {/* Captain & Members */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 font-body">Ketua Tim</div>
                      <div className="flex items-center gap-2">
                        <UserGroupIcon className="w-4 h-4 text-red-300" />
                        <span className="text-gray-300 font-medium font-body">{team.captain}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-500 font-body">Anggota</div>
                      <div className="flex items-center gap-2">
                        <UsersIcon className="w-4 h-4 text-red-300" />
                        <span className="text-gray-300 font-medium font-body">{team.members} Personil</span>
                      </div>
                    </div>
                  </div>

                  {/* Established & Motto */}
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 font-body">Berdiri & Motto</div>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-red-900/20 text-red-300 text-sm font-body">
                        Since {team.established}
                      </span>
                      <span className="text-xs text-gray-400 italic font-body max-w-[60%] text-right">
                        "{team.motto}"
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  {team.achievements.length > 0 && (
                    <div>
                      <div className="text-xs text-gray-500 mb-2 font-body">Prestasi</div>
                      <div className="flex flex-wrap gap-2">
                        {team.achievements.map((achievement, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1.5 rounded-lg bg-red-900/30 text-red-300 text-xs font-medium backdrop-blur-sm border border-red-800/30 hover:border-red-600/50 transition-colors duration-300"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div className="pt-4 border-t border-red-900/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FlagIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400 font-body">Kategori</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                          team.category === 'putra' ? 'bg-red-600/20 text-red-300' :
                          team.category === 'putri' ? 'bg-red-700/20 text-red-200' :
                          'bg-red-800/20 text-red-100'
                        }`}>
                          {team.category}
                        </span>
                        <ChevronRightIcon className="w-4 h-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Indicator */}
                {hoveredTeam === team.id && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-10 bg-gradient-to-b from-red-400 to-red-300 rounded-full animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-red-900/30 backdrop-blur-sm max-w-2xl">
            <div className="p-4 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-2xl">
              <SparklesIcon className="w-8 h-8 text-red-300" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                Tim Siap Tampil Terbaik
              </h3>
              <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8 font-body">
                Setiap tim telah melalui proses seleksi ketat dan siap menunjukkan kemampuan terbaik mereka 
                dalam kompetisi baris berbaris bergengsi ini.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400 font-body">
              <FireIcon className="w-4 h-4 text-red-400" />
              <span>Total 24 tim peserta akan bertanding dalam 3 hari kompetisi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teams