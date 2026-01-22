import { BuildingOfficeIcon, BanknotesIcon, GiftIcon, HeartIcon } from '@heroicons/react/24/outline'

const Sponsors = () => {
  const sponsors = [
    { name: "Bank Jatim", tier: "platinum", logo: "BJ", description: "Sponsor Utama" },
    { name: "Pemkab Jombang", tier: "platinum", logo: "PJ", description: "Pemerintah Daerah" },
    { name: "Surya Jaya", tier: "gold", logo: "SJ", description: "Mitra Pendidikan" },
    { name: "Bintang Sport", tier: "gold", logo: "BS", description: "Peralatan Olahraga" },
    { name: "Cahaya Ilmu", tier: "silver", logo: "CI", description: "Penerbit Buku" },
    { name: "Sehat Sentosa", tier: "silver", logo: "SS", description: "Kesehatan & Gizi" },
    { name: "Media Jaya", tier: "media", logo: "MJ", description: "Media Partner" },
    { name: "Komunitas Paskibra", tier: "community", logo: "KP", description: "Komunitas" },
  ]

  const getTierColor = (tier) => {
    switch(tier) {
      case 'platinum': return 'from-gray-300 to-gray-100'
      case 'gold': return 'from-yellow-500 to-yellow-300'
      case 'silver': return 'from-gray-400 to-gray-300'
      default: return 'from-primary-500 to-primary-400'
    }
  }

  const getTierLabel = (tier) => {
    switch(tier) {
      case 'platinum': return 'Platinum'
      case 'gold': return 'Gold'
      case 'silver': return 'Silver'
      default: return 'Partner'
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Sponsor & Partner</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Sponsor Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-gray-300 to-gray-100 mb-4">
                <BuildingOfficeIcon className="w-6 h-6 text-gray-800" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">4</div>
              <div className="text-gray-400">Sponsor Platinum</div>
            </div>
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-300 mb-4">
                <BanknotesIcon className="w-6 h-6 text-yellow-800" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">8</div>
              <div className="text-gray-400">Sponsor Gold</div>
            </div>
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-gray-400 to-gray-300 mb-4">
                <GiftIcon className="w-6 h-6 text-gray-700" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">12</div>
              <div className="text-gray-400">Sponsor Silver</div>
            </div>
            <div className="card text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-400 mb-4">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">6</div>
              <div className="text-gray-400">Media Partner</div>
            </div>
          </div>

          {/* Sponsors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="card hover:border-primary-700/50 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getTierColor(sponsor.tier)} flex items-center justify-center mb-4`}>
                    <span className="text-2xl font-bold text-gray-900">{sponsor.logo}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                    sponsor.tier === 'platinum' ? 'bg-gray-800 text-gray-300' :
                    sponsor.tier === 'gold' ? 'bg-yellow-900/30 text-yellow-300' :
                    sponsor.tier === 'silver' ? 'bg-gray-800 text-gray-300' :
                    'bg-primary-900/30 text-primary-300'
                  }`}>
                    {getTierLabel(sponsor.tier)}
                  </div>
                  <p className="text-gray-400">{sponsor.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action for Sponsors */}
          <div className="bg-gradient-to-r from-primary-900/30 to-primary-800/20 rounded-2xl p-8 border border-primary-800/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Menjadi Sponsor Event?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Bergabunglah dengan sponsor kami dan dapatkan exposure yang luas 
                kepada ribuan peserta, pengunjung, dan media. 
                Dukung generasi muda yang disiplin dan berprestasi!
              </p>
              <button className="btn-primary">
                Kontak Sponsor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors