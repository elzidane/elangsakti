import { 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  TrophyIcon, 
  AcademicCapIcon,
  StarIcon,
  UserGroupIcon,
  MapPinIcon,
  CalendarIcon,
  FlagIcon,
  LightBulbIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowRightIcon,
  FireIcon,
  HeartIcon,
  DocumentCheckIcon,
  UsersIcon,
  ClockIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline'

const AboutEvent = () => {
  const features = [
    {
      icon: <ShieldCheckIcon className="w-7 h-7" />,
      title: "Standar Nasional",
      description: "Mengikuti standar dan regulasi lomba baris berbaris tingkat nasional",
      gradient: "from-red-600 to-red-700"
    },
    {
      icon: <AcademicCapIcon className="w-7 h-7" />,
      title: "Pembina Berpengalaman",
      description: "Dibimbing oleh pelatih dan pembina Paskibraka berprestasi",
      gradient: "from-red-700 to-red-800"
    },
    {
      icon: <TrophyIcon className="w-7 h-7" />,
      title: "Penghargaan Prestisius",
      description: "Piala, piagam, dan hadiah menarik untuk para juara",
      gradient: "from-red-800 to-red-900"
    },
    {
      icon: <DocumentCheckIcon className="w-7 h-7" />,
      title: "Sertifikat Resmi",
      description: "Sertifikat resmi untuk semua peserta yang mengikuti lomba",
      gradient: "from-red-900 to-red-950"
    }
  ]

  const eventHighlights = [
    {
      icon: <FireIcon className="w-5 h-5" />,
      text: "Hadiah Total 100 Juta Rupiah"
    },
    {
      icon: <ChartBarIcon className="w-5 h-5" />,
      text: "Sistem Penilaian Digital Modern"
    },
    {
      icon: <UsersIcon className="w-5 h-5" />,
      text: "Juri Nasional Berpengalaman"
    },
    {
      icon: <BuildingLibraryIcon className="w-5 h-5" />,
      text: "Fasilitas Venue Premium"
    }
  ]

  const eventDetails = [
    { 
      icon: <CalendarIcon className="w-6 h-6" />,
      label: "Tanggal", 
      value: "15-17 Mei 2026",
      subtext: "3 Hari Penuh Kompetisi"
    },
    { 
      icon: <MapPinIcon className="w-6 h-6" />,
      label: "Lokasi", 
      value: "SMPN 1 Jombang",
      subtext: "Jawa Timur"
    },
    { 
      icon: <UserGroupIcon className="w-6 h-6" />,
      label: "Peserta", 
      value: "300+ Peserta",
      subtext: "SMP Se-Jawa Timur"
    },
    { 
      icon: <FlagIcon className="w-6 h-6" />,
      label: "Kategori", 
      value: "15 Kategori",
      subtext: "Putra, Putri & Campuran"
    },
  ]

  const visionMission = [
    {
      title: "Visi Kami",
      description: "Menjadi event LKBB terdepan yang membentuk karakter disiplin, patriotisme, dan kepemimpinan generasi muda Indonesia.",
      icon: <LightBulbIcon className="w-8 h-8" />,
      gradient: "bg-gradient-to-br from-red-600 to-red-700"
    },
    {
      title: "Misi Kami",
      description: "Meningkatkan kualitas baris berbaris, mengembangkan bakat kepemimpinan, dan mempererat persaudaraan antar sekolah se-Jawa Timur.",
      icon: <ChartBarIcon className="w-8 h-8" />,
      gradient: "bg-gradient-to-br from-red-700 to-red-800"
    },
    {
      title: "Nilai Inti",
      description: "Disiplin, Integritas, Patriotisme, dan Kerjasama Tim sebagai fondasi utama dalam setiap kompetisi.",
      icon: <HeartIcon className="w-8 h-8" />,
      gradient: "bg-gradient-to-br from-red-800 to-red-900"
    }
  ]

  const achievementStats = [
    { number: "5+", label: "Tahun Pengalaman", icon: <ClockIcon className="w-5 h-5" /> },
    { number: "1000+", label: "Alumni Peserta", icon: <UsersIcon className="w-5 h-5" /> },
    { number: "50+", label: "Sekolah Terlibat", icon: <BuildingLibraryIcon className="w-5 h-5" /> },
    { number: "95%", label: "Kepuasan Peserta", icon: <StarIcon className="w-5 h-5" /> },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-900 font-body">
      {/* Background Effects - Hanya merah */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-gradient-to-t from-red-900/5 to-transparent"></div>
      </div>

      {/* Decorative Elements - Hanya merah */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-red-700 rounded-full animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-red-800 rounded-full animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-800/30 backdrop-blur-sm mb-8">
            <SparklesIcon className="w-5 h-5 text-red-300" />
            <span className="text-lg font-semibold text-red-300 font-display">Tentang Event</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-200 bg-clip-text text-transparent">
              Tentang Elang Sakti
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lomba Ketangkasan Baris Berbaris "Elang Sakti" merupakan ajang bergengsi tahunan 
            yang menghadirkan kompetisi baris berbaris terbaik se-Jawa Timur
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Event Overview */}
          <div className="space-y-8">
            {/* Event Description Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-8 border border-red-900/50 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-xl">
                    <FireIcon className="w-8 h-8 text-red-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">LKBB Elang Sakti 2026</h3>
                    <p className="text-red-300 text-sm font-medium font-display">Season III</p>
                  </div>
                </div>
                
                <div className="space-y-5 text-gray-300">
                  <p className="leading-relaxed">
                    Lomba Ketangkasan Baris Berbaris "Elang Sakti" merupakan event tahunan 
                    yang diselenggarakan oleh Paskibra SMPN 1 Jombang. Sejak pertama kali 
                    digelar, event ini telah menjadi <span className="text-red-300 font-semibold font-display">ajang bergengsi</span> 
                    bagi siswa-siswi SMP se-Jawa Timur untuk menunjukkan kemampuan baris berbaris, 
                    kedisiplinan, dan kerja sama tim.
                  </p>
                  <p className="leading-relaxed">
                    Tahun ini, Elang Sakti Season III menghadirkan berbagai <span className="text-red-300 font-semibold font-display">
                    inovasi terbaru</span> dengan sistem penilaian yang lebih transparan, 
                    teknologi pendukung yang canggih, dan kategori lomba yang lebih menarik.
                  </p>
                </div>

                {/* Event Highlights */}
                <div className="mt-10 pt-8 border-t border-red-900/50">
                  <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-3 font-heading">
                    <StarIcon className="w-6 h-6 text-red-300" />
                    Highlight Event 2026
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {eventHighlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-lg">
                          <div className="text-red-300">{highlight.icon}</div>
                        </div>
                        <span className="text-gray-300 text-sm font-medium font-body">{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 gap-6">
              {visionMission.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-700/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl p-6 border border-red-900/50 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${item.gradient} rounded-xl flex-shrink-0`}>
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3 font-heading">{item.title}</h4>
                        <p className="text-gray-300 leading-relaxed font-body">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Features & Details */}
          <div className="space-y-8">
            {/* Features Section */}
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-8 border border-red-900/50 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-lg">
                  <ShieldCheckIcon className="w-7 h-7 text-red-300" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">Fasilitas & Keunggulan</h3>
              </div>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-black/50 hover:from-red-900/20 hover:to-black/50 transition-all duration-300">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center p-3`}>
                        <div className="text-white">{feature.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-red-300 transition-colors duration-300 font-heading">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed font-body">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Details Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-8 border border-red-900/50 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 font-heading">
                  <CalendarIcon className="w-7 h-7 text-red-300" />
                  Detail Event
                </h3>
                
                <div className="grid grid-cols-2 gap-5">
                  {eventDetails.map((detail, index) => (
                    <div key={index} className="group/item">
                      <div className="relative p-5 rounded-xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-red-900/30 group-hover/item:border-red-600/50 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-lg">
                            <div className="text-red-300">{detail.icon}</div>
                          </div>
                          <div className="text-sm font-medium text-gray-400 font-body">{detail.label}</div>
                        </div>
                        <div className="text-xl font-bold text-white mb-1 font-heading">{detail.value}</div>
                        <div className="text-sm text-gray-500 font-body">{detail.subtext}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            {/* <div className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl p-8 border border-red-900/50 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-8 font-heading">Pencapaian</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {achievementStats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative">
                      <div className="absolute -inset-3 bg-gradient-to-br from-red-600/5 to-red-700/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative">
                        <div className="flex justify-center mb-3">
                          <div className="p-2 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-lg">
                            <div className="text-red-300">{stat.icon}</div>
                          </div>
                        </div>
                        <div className="text-3xl font-bold mb-2 font-display">
                          <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                            {stat.number}
                          </span>
                        </div>
                        <div className="text-gray-400 font-medium font-body">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto p-1 bg-gradient-to-r from-red-600/20 via-red-700/20 to-red-600/20 rounded-3xl">
            <div className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl p-12 border border-red-900/50 backdrop-blur-xl">
              <div className="flex flex-col items-center gap-6">
                <div className="p-4 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-2xl">
                  <TrophyIcon className="w-12 h-12 text-red-300" />
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 font-heading">
                    Bergabunglah dengan Komunitas Terbaik
                  </h3>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 font-body">
                    Jadilah bagian dari sejarah kompetisi baris berbaris terbesar di Jawa Timur. 
                    Ukir prestasi, bangun jaringan, dan kembangkan potensi diri bersama Elang Sakti.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
                    className="group relative px-8 py-4 bg-gradient-to-r from-red-700 to-red-800 text-white font-bold rounded-xl shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1 transition-all duration-300 font-display"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-3">
                      <span className="text-lg">Daftar Sekarang</span>
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="group relative px-8 py-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-white font-bold rounded-xl border border-red-900/50 hover:border-red-600/50 shadow-2xl hover:-translate-y-1 transition-all duration-300 font-display"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center gap-3">
                      <UsersIcon className="w-5 h-5" />
                      <span>Info Lebih Lanjut</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEvent