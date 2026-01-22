import { useState, useEffect } from 'react'
import { 
  TrophyIcon, 
  ChartBarIcon, 
  ArrowUpIcon, 
  ArrowDownIcon, 
  FireIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  MinusIcon
} from '@heroicons/react/24/outline'

const LiveScore = () => {
  const [scores, setScores] = useState([
    { rank: 1, team: "Garuda Muda", score: 285, change: "up", changeAmount: 2 },
    { rank: 2, team: "Merpati Putih", score: 276, change: "up", changeAmount: 1 },
    { rank: 3, team: "Rajawali Sakti", score: 270, change: "down", changeAmount: 1 },
    { rank: 4, team: "Elang Perkasa", score: 264, change: "up", changeAmount: 3 },
    { rank: 5, team: "Naga Merah", score: 261, change: "same", changeAmount: 0 },
    { rank: 6, team: "Macan Kumbang", score: 255, change: "up", changeAmount: 2 },
    { rank: 7, team: "Satria Baja", score: 252, change: "down", changeAmount: 1 },
    { rank: 8, team: "Banteng Merah", score: 248, change: "up", changeAmount: 1 },
  ])

  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isLive, setIsLive] = useState(true)

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
          newScores[randomIndex].changeAmount = changeAmount
        } else {
          newScores[randomIndex].score -= changeAmount
          newScores[randomIndex].change = 'down'
          newScores[randomIndex].changeAmount = changeAmount
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
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getRankBadge = (rank) => {
    switch(rank) {
      case 1: 
        return (
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-500 via-yellow-600 to-amber-700 flex items-center justify-center shadow-lg shadow-yellow-500/20">
              <span className="font-bold text-white text-sm">{rank}</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
          </div>
        )
      case 2: 
        return (
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 flex items-center justify-center shadow-lg">
            <span className="font-bold text-white text-sm">{rank}</span>
          </div>
        )
      case 3: 
        return (
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 flex items-center justify-center shadow-lg">
            <span className="font-bold text-white text-sm">{rank}</span>
          </div>
        )
      default: 
        return (
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-800 flex items-center justify-center">
            <span className="font-bold text-gray-300 text-sm">{rank}</span>
          </div>
        )
    }
  }

  const getTeamLogoColor = (rank) => {
    switch(rank) {
      case 1: return "bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30"
      case 2: return "bg-gradient-to-br from-gray-400/20 to-gray-500/10 border border-gray-400/30"
      case 3: return "bg-gradient-to-br from-amber-700/20 to-amber-800/10 border border-amber-700/30"
      default: return "bg-gradient-to-br from-gray-800/20 to-gray-900/10 border border-gray-800/30"
    }
  }

  return (
    <section id="score" className="py-16 bg-gradient-to-b from-gray-950 to-black font-poppins">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-800/30 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-sm font-medium text-red-300 font-display">LIVE SCORES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-rose-700 bg-clip-text text-transparent">
              Klasemen Live
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-display">
            Pantau pergerakan peringkat tim secara real-time dengan update otomatis setiap 5 detik
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-red-800/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-white font-display">285</div>
                <div className="text-gray-400 text-sm font-medium font-display">Skor Tertinggi</div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20">
                <TrophyIcon className="w-7 h-7 text-yellow-500" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-red-800/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-white font-display">8</div>
                <div className="text-gray-400 text-sm font-medium font-display">Tim Aktif</div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20">
                <FireIcon className="w-7 h-7 text-orange-500" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-red-800/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-white font-display">24</div>
                <div className="text-gray-400 text-sm font-medium font-display">Pertandingan</div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20">
                <ChartBarIcon className="w-7 h-7 text-red-500" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-950 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-red-800/50 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-white font-display">15</div>
                <div className="text-gray-400 text-sm font-medium font-display">Sesi Tersisa</div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20">
                <ArrowUpIcon className="w-7 h-7 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Score Table */}
        <div className="bg-gradient-to-br from-gray-900/60 to-gray-950 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden mb-8">
          {/* Table Header */}
          <div className="px-8 py-6 border-b border-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white font-display">Klasemen Sementara</h3>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm text-gray-400 font-display">Live Update</span>
                  </div>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">
                    Update: {lastUpdated.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-900/30 to-red-950/30 border border-red-800/30">
                  <span className="text-sm font-medium font-display text-red-300">Season 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Table Content */}
          <div className="divide-y divide-gray-800/50">
            {/* Column Headers */}
            <div className="px-8 py-4 grid grid-cols-12 gap-4 text-gray-400 text-sm font-display font-medium">
              <div className="col-span-1">RANK</div>
              <div className="col-span-6">TEAM</div>
              <div className="col-span-3">SCORE</div>
              <div className="col-span-2">CHANGE</div>
            </div>

            {/* Score Rows */}
            {scores.map((item) => (
              <div key={item.rank} className="px-8 py-5 hover:bg-gray-800/20 transition-colors duration-200">
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1">
                    {getRankBadge(item.rank)}
                  </div>

                  {/* Team */}
                  <div className="col-span-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getTeamLogoColor(item.rank)}`}>
                        <div className="text-center">
                          <div className="text-xs font-bold text-gray-300">{item.team.split(' ')[0]}</div>
                          <div className="text-[10px] text-gray-500">{item.team.split(' ')[1]}</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{item.team}</div>
                        <div className="text-sm text-gray-500 font-display">SMPN 1 Jombang</div>
                      </div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="col-span-3">
                    <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">
                      {item.score}
                    </div>
                  </div>

                  {/* Change */}
                  <div className="col-span-2">
                    {item.change === 'up' ? (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-900/30 to-green-950/30 border border-green-800/30">
                        <ChevronUpIcon className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-green-400">+{item.changeAmount}</span>
                      </div>
                    ) : item.change === 'down' ? (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-900/30 to-red-950/30 border border-red-800/30">
                        <ChevronDownIcon className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-medium text-red-400">-{item.changeAmount}</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-gray-900/30 to-gray-950/30 border border-gray-800/30">
                        <MinusIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-400">-</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-950/50 border border-gray-800">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
            <span className="text-sm text-gray-300 font-medium font-display">Juara 1</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-950/50 border border-gray-800">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-400 to-gray-500"></div>
            <span className="text-sm text-gray-300 font-medium font-display">Juara 2</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-950/50 border border-gray-800">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-700 to-amber-800"></div>
            <span className="text-sm text-gray-300 font-medium font-display">Juara 3</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-950/50 border border-gray-800">
            <ChevronUpIcon className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-300 font-medium font-display">Naik</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-950/50 border border-gray-800">
            <ChevronDownIcon className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-300 font-medium font-display">Turun</span>
          </div>
        </div>

        {/* Live Indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-900/20 to-red-950/10 border border-red-800/30">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="absolute inset-0 rounded-full bg-red-500 animate-ping"></div>
            </div>
            <span className="text-sm font-medium font-display text-red-300">Sistem update otomatis setiap 5 detik</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveScore