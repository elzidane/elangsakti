import { CheckCircleIcon, ShieldCheckIcon, TrophyIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const AboutEvent = () => {
  const features = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Standar Nasional",
      description: "Mengikuti standar dan regulasi lomba baris berbaris tingkat nasional"
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: "Pembina Berpengalaman",
      description: "Dibimbing oleh pelatih dan pembina Paskibraka berprestasi"
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: "Penghargaan Prestisius",
      description: "Piala, piagam, dan hadiah menarik untuk para juara"
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8" />,
      title: "Sertifikat Peserta",
      description: "Sertifikat resmi untuk semua peserta yang mengikuti lomba"
    }
  ]

  const eventDetails = [
    { label: "Tanggal", value: "15-17 November 2024" },
    { label: "Lokasi", value: "SMP Negeri 1 Jombang, Jawa Timur" },
    { label: "Peserta", value: "SMP Se-Jawa Timur" },
    { label: "Kategori", value: "Putra, Putri, dan Campuran" },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Tentang Event Elang Sakti</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-primary-900/30">
                  <h3 className="text-2xl font-bold mb-4 text-primary-300">LKBB Elang Sakti 2024</h3>
                  <p className="text-gray-300 mb-6">
                    Lomba Ketangkasan Baris Berbaris "Elang Sakti" merupakan event tahunan 
                    yang diselenggarakan oleh Paskibra SMPN 1 Jombang. Event ini telah menjadi 
                    ajang bergengsi bagi siswa-siswi SMP se-Jawa Timur untuk menunjukkan 
                    kemampuan baris berbaris, kedisiplinan, dan kerja sama tim.
                  </p>
                  <p className="text-gray-300 mb-6">
                    Tahun ini, Elang Sakti menghadirkan berbagai kategori lomba yang lebih 
                    menarik dengan sistem penilaian yang transparan dan profesional. 
                    Kami berkomitmen untuk membentuk generasi muda yang disiplin, 
                    bertanggung jawab, dan memiliki jiwa kepemimpinan.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {eventDetails.map((detail, index) => (
                      <div key={index} className="bg-gray-900/50 rounded-lg p-4">
                        <div className="text-sm text-gray-400">{detail.label}</div>
                        <div className="font-semibold text-white">{detail.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Fasilitas & Keunggulan</h3>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-900 to-primary-800 flex items-center justify-center">
                        <div className="text-primary-300">{feature.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-900/30 to-primary-800/20 rounded-xl p-6 border border-primary-800/30">
                <h4 className="text-xl font-bold mb-4 text-white">Visi & Misi</h4>
                <p className="text-gray-300 mb-3">
                  <span className="font-semibold text-primary-300">Visi:</span> Menjadi event LKBB terdepan yang membentuk karakter disiplin dan patriotisme generasi muda.
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-primary-300">Misi:</span> Meningkatkan kualitas baris berbaris, mengembangkan bakat kepemimpinan, dan mempererat persaudaraan antar sekolah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEvent