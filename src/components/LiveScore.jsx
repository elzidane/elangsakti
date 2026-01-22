import { useState, useEffect } from 'react'
import { 
  TrophyIcon, 
  ChartBarIcon, 
  ArrowUpIcon, 
  ArrowDownIcon, 
  FireIcon 
} from '@heroicons/react/24/outline'

const LiveScore = () => {
  const [scores, setScores] = useState([
    { rank: 1, team: "Garuda Muda", score: 285, change: "up" },
    { rank: 2, team: "Merpati Putih", score: 276, change: "up" },
    { rank: 3, team: "Rajawali Sakti", score: 270, change: "down" },
    { rank: 4, team: "Elang Perkasa", score: 264, change: "up" },
    { rank: 5, team: "Naga Merah", score: 261, change: "same" },
    { rank: 6, team: "Macan Kumbang", score: 255, change: "up" },
    { rank: 7, team: "Satria Baja", score: 252, change: "down" },
    { rank: 8, team: "Banteng Merah", score: 248, change: "up" },
  ])

  const [lastUpdated, setLastUpdated] = useState(new Date())

  // Simulasi update skor live
  useEffect(() => {
    const interval = setInterval(() => {
      setScores(prev => {
        const newScores = [...prev]
        // Randomly update some scores
        const randomIndex = Math.floor(Math.random() * newScores.length)
        const changeAmount = Math.floor(Math.random() * 3) + 1
        const changeType = Math.random() > 0.5 ? 'up' : 'down'
        
        if (changeType === 'up') {
          newScores[randomIndex].score += changeAmount
          newScores[randomIndex].change = 'up'
        } else {
          newScores[randomIndex].score -= changeAmount
          newScores[randomIndex].change = 'down'
        }
        
        // Sort by score
        newScores.sort((a, b) => b.score - a.score)
        
        // Update ranks
        newScores.forEach((score, index) => {
          score.rank = index + 1
        })
        
        return newScores
      })
      
      setLastUpdated(new Date())
    }, 5000) // Update setiap 5 detik

    return () => clearInterval(interval)
  }, [])

  const getMedalColor = (rank) => {
    switch(rank) {
      case 1: return 'from-yellow-500 to-yellow-600'
      case 2: return 'from-gray-400 to-gray-500'
      case 3: return 'from-orange-700 to-orange-800'
      default: return 'from-gray-800 to-gray-900'
    }
  }

  return (
    <section id="score" className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="section-title text-left mb-4">Papan Skor Live</h2>
              <p className="text-gray-400">
                Pantau peringkat tim secara real-time selama event berlangsung
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm text-gray-400">Live Update</span>
                </div>
                <div className="text-sm text-gray-500">
                  Terakhir update: {lastUpdated.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-white">285</div>
                  <div className="text-gray-400">Skor Tertinggi</div>
                </div>
                <TrophyIcon className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-white">8</div>
                  <div className="text-gray-400">Tim Aktif</div>
                </div>
                <FireIcon className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-white">24</div>
                  <div className="text-gray-400">Pertandingan</div>
                </div>
                <ChartBarIcon className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-white">15</div>
                  <div className="text-gray-400">Sesi Tersisa</div>
                </div>
                <ArrowUpIcon className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>

          {/* Score Table */}
          <div className="overflow-hidden rounded-2xl border border-gray-800">
            <div className="bg-gradient-to-r from-primary-900 to-primary-800 px-6 py-4">
              <h3 className="text-xl font-bold text-white">Klasemen Sementara</h3>
            </div>
            
            <div className="bg-gray-900/50 divide-y divide-gray-800">
              {/* Table Header */}
              <div className="grid grid-cols-12 px-6 py-4 text-gray-400 font-semibold">
                <div className="col-span-1">Rank</div>
                <div className="col-span-6">Tim</div>
                <div className="col-span-3">Skor</div>
                <div className="col-span-2">Perubahan</div>
              </div>

              {/* Table Rows */}
              {scores.map((item) => (
                <div key={item.rank} className="grid grid-cols-12 px-6 py-4 hover:bg-gray-800/30 transition-colors">
                  <div className="col-span-1 flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r ${getMedalColor(item.rank)}`}>
                      <span className="font-bold text-white">{item.rank}</span>
                    </div>
                  </div>
                  <div className="col-span-6 flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getMedalColor(item.rank)} flex items-center justify-center`}>
                      <TrophyIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{item.team}</div>
                      <div className="text-sm text-gray-500">SMPN 1 Jombang</div>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center">
                    <div className="text-2xl font-bold text-primary-300">{item.score}</div>
                  </div>
                  <div className="col-span-2 flex items-center">
                    {item.change === 'up' ? (
                      <div className="flex items-center text-green-500">
                        <ArrowUpIcon className="w-5 h-5 mr-2" />
                        <span>+2</span>
                      </div>
                    ) : item.change === 'down' ? (
                      <div className="flex items-center text-red-500">
                        <ArrowDownIcon className="w-5 h-5 mr-2" />
                        <span>-1</span>
                      </div>
                    ) : (
                      <div className="text-gray-500">-</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-6 justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
              <span className="text-sm text-gray-400">Juara 1</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-500"></div>
              <span className="text-sm text-gray-400">Juara 2</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-700 to-orange-800"></div>
              <span className="text-sm text-gray-400">Juara 3</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowUpIcon className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-400">Naik Peringkat</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowDownIcon className="w-4 h-4 text-red-500" />
              <span className="text-sm text-gray-400">Turun Peringkat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveScore