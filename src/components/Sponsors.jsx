import { 
  BuildingOfficeIcon, 
  BanknotesIcon, 
  GiftIcon, 
  HeartIcon,
  SparklesIcon,
  StarIcon,
  TrophyIcon,
  ArrowRightIcon,
  HandThumbUpIcon
} from '@heroicons/react/24/outline'

const Sponsors = () => {
  const sponsors = [
    { name: "Bank Jatim", tier: "platinum", logo: "BJ", description: "Sponsor Utama", color: "from-gray-300 to-gray-100" },
    { name: "Pemkab Jombang", tier: "platinum", logo: "PJ", description: "Pemerintah Daerah", color: "from-blue-300 to-blue-100" },
    { name: "Surya Jaya", tier: "gold", logo: "SJ", description: "Mitra Pendidikan", color: "from-yellow-500 to-yellow-300" },
    { name: "Bintang Sport", tier: "gold", logo: "BS", description: "Peralatan Olahraga", color: "from-amber-500 to-amber-300" },
    { name: "Cahaya Ilmu", tier: "silver", logo: "CI", description: "Penerbit Buku", color: "from-gray-400 to-gray-300" },
    { name: "Sehat Sentosa", tier: "silver", logo: "SS", description: "Kesehatan & Gizi", color: "from-emerald-400 to-emerald-300" },
    { name: "Media Jaya", tier: "media", logo: "MJ", description: "Media Partner", color: "from-red-500 to-red-300" },
    { name: "Komunitas Paskibra", tier: "community", logo: "KP", description: "Komunitas", color: "from-indigo-500 to-indigo-300" },
  ]

  const tiers = [
    { name: "Platinum", count: 2, color: "from-gray-300 to-gray-100", icon: SparklesIcon },
    { name: "Gold", count: 2, color: "from-yellow-500 to-yellow-300", icon: StarIcon },
    { name: "Silver", count: 2, color: "from-gray-400 to-gray-300", icon: TrophyIcon },
    { name: "Partner", count: 2, color: "from-red-500 to-red-300", icon: HandThumbUpIcon },
  ]

  const TierCard = ({ tier, index }) => (
    <div key={index} className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/3 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-950 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 text-center group-hover:border-gray-700 transition-all duration-300">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${tier.color} mb-4 mx-auto shadow-lg`}>
          <tier.icon className="w-7 h-7 text-gray-900" />
        </div>
        <div className="text-4xl font-bold text-white mb-2">{tier.count}</div>
        <div className="text-lg font-semibold text-white mb-1">{tier.name}</div>
        <div className="text-sm text-gray-400">Sponsor</div>
      </div>
    </div>
  )

  const SponsorCard = ({ sponsor, index }) => (
    <div key={index} className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/3 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-950 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 text-center group-hover:border-red-500/30 group-hover:scale-[1.02] transition-all duration-300">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${sponsor.color} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          <span className="text-3xl font-bold text-gray-900">{sponsor.logo}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
          {sponsor.name}
        </h3>
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${
          sponsor.tier === 'platinum' ? 'bg-gray-900/50 text-gray-300 border border-gray-700' :
          sponsor.tier === 'gold' ? 'bg-yellow-900/30 text-yellow-300 border border-yellow-800/30' :
          sponsor.tier === 'silver' ? 'bg-gray-900/50 text-gray-300 border border-gray-700' :
          'bg-red-900/30 text-red-300 border border-red-800/30'
        }`}>
          {sponsor.tier === 'platinum' ? (
            <SparklesIcon className="w-3 h-3" />
          ) : sponsor.tier === 'gold' ? (
            <StarIcon className="w-3 h-3" />
          ) : sponsor.tier === 'silver' ? (
            <TrophyIcon className="w-3 h-3" />
          ) : (
            <HandThumbUpIcon className="w-3 h-3" />
          )}
          {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}
        </div>
        <p className="text-gray-400 text-sm">{sponsor.description}</p>
      </div>
    </div>
  )

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950 font-poppins overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-900/30 to-red-950/30 border border-red-800/30 mb-6">
            <SparklesIcon className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-300">SPONSORS & PARTNERS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Didukung oleh <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">Terbaik</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Kolaborasi dengan mitra terpercaya untuk menyelenggarakan event berkualitas
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier, index) => (
            <TierCard key={index} tier={tier} index={index} />
          ))}
        </div>

        {/* Sponsors Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Mitra Kami</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Berbagai institusi yang mendukung suksesnya kegiatan ini
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/5 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-gray-900/60 to-gray-950 backdrop-blur-sm rounded-3xl border border-gray-800 p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/5 rounded-full translate-y-32 -translate-x-32"></div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-red-600/10 border border-red-500/30 mb-6">
                <SparklesIcon className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium text-red-300">OPPORTUNITY</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ingin Menjadi Sponsor?
              </h3>
              
              <p className="text-gray-300 mb-8 text-lg">
                Bergabung dengan sponsor kami untuk mendapatkan exposure eksklusif 
                kepada ribuan peserta dan pengunjung
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-3 bg-gradient-to-r from-red-600 to-rose-700 rounded-xl font-semibold text-white hover:from-red-700 hover:to-rose-800 shadow-lg shadow-red-500/20 hover:shadow-red-500/30 transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center">
                  <span>Jadi Sponsor</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group px-8 py-3 border border-gray-700 rounded-xl font-semibold text-gray-300 hover:border-gray-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center">
                  <span>Download Proposal</span>
                </button>
              </div>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Brand Exposure</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Media Coverage</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span>Networking</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>CSR Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Terima kasih atas dukungan semua mitra dalam menyukseskan acara ini
          </p>
        </div>
      </div>
    </section>
  )
}

export default Sponsors