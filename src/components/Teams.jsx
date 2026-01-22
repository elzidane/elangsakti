import { useState } from 'react'
import { UserGroupIcon, TrophyIcon, StarIcon, FireIcon } from '@heroicons/react/24/outline'

const Teams = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const teams = [
    {
      id: 1,
      name: "Garuda Muda",
      school: "SMPN 1 Jombang",
      category: "putra",
      score: 95,
      members: 16,
      achievements: ["Juara 1 2023", "Juara 2 2022"],
      color: "from-red-600 to-red-800"
    },
    {
      id: 2,
      name: "Merpati Putih",
      school: "SMPN 2 Jombang",
      category: "putri",
      score: 92,
      members: 16,
      achievements: ["Juara 1 2022"],
      color: "from-red-600 to-red-800"
    },
    {
      id: 3,
      name: "Rajawali Sakti",
      school: "SMPN 3 Jombang",
      category: "campuran",
      score: 90,
      members: 20,
      achievements: ["Juara 3 2023"],
      color: "from-green-600 to-green-800"
    },
    {
      id: 4,
      name: "Elang Perkasa",
      school: "SMPN 1 Surabaya",
      category: "putra",
      score: 88,
      members: 16,
      achievements: ["Juara 2 2021"],
      color: "from-purple-600 to-purple-800"
    },
    {
      id: 5,
      name: "Naga Merah",
      school: "SMPN 2 Malang",
      category: "campuran",
      score: 87,
      members: 20,
      achievements: [],
      color: "from-orange-600 to-orange-800"
    },
    {
      id: 6,
      name: "Macan Kumbang",
      school: "SMPN 1 Kediri",
      category: "putri",
      score: 85,
      members: 16,
      achievements: ["Juara 3 2022"],
      color: "from-yellow-600 to-yellow-800"
    },
  ]

  const categories = [
    { id: 'all', label: 'Semua Tim', count: teams.length },
    { id: 'putra', label: 'Putra', count: teams.filter(t => t.category === 'putra').length },
    { id: 'putri', label: 'Putri', count: teams.filter(t => t.category === 'putri').length },
    { id: 'campuran', label: 'Campuran', count: teams.filter(t => t.category === 'campuran').length },
  ]

  const filteredTeams = activeCategory === 'all' 
    ? teams 
    : teams.filter(team => team.category === activeCategory)

  return (
    <section id="teams" className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Tim Peserta</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-700 to-primary-600 text-white shadow-lg'
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span>{category.label}</span>
                <span className="px-2 py-1 text-xs rounded-full bg-gray-800">{category.count}</span>
              </button>
            ))}
          </div>

          {/* Teams Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTeams.map((team) => (
              <div key={team.id} className="card group hover:border-primary-700/50 transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${team.color} mb-3`}>
                      <TrophyIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">{team.name}</h3>
                    <p className="text-gray-400">{team.school}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary-300">{team.score}</div>
                    <div className="text-sm text-gray-500">Skor</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-gray-400">
                    <div className="flex items-center space-x-2">
                      <UserGroupIcon className="w-5 h-5" />
                      <span>{team.members} Anggota</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon 
                          key={star} 
                          className={`w-4 h-4 ${
                            star <= Math.floor(team.score / 20) 
                              ? 'text-yellow-500 fill-yellow-500' 
                              : 'text-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {team.achievements.length > 0 && (
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Prestasi:</div>
                      <div className="flex flex-wrap gap-2">
                        {team.achievements.map((achievement, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 rounded-full bg-primary-900/30 text-primary-300 text-sm"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Kategori:</span>
                      <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm capitalize">
                        {team.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-primary-900/20 to-primary-800/10 rounded-2xl p-8 border border-primary-800/30">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-300 mb-2">{teams.length}</div>
                <div className="text-gray-400">Total Tim</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-300 mb-2">
                  {teams.reduce((acc, team) => acc + team.members, 0)}
                </div>
                <div className="text-gray-400">Total Peserta</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-300 mb-2">8</div>
                <div className="text-gray-400">Sekolah Baru</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-300 mb-2">15</div>
                <div className="text-gray-400">Kategori Lomba</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teams