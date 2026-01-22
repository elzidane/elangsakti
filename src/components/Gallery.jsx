import { useState } from 'react'
import { 
  PhotoIcon, 
  VideoCameraIcon, 
  PlayIcon, 
  ChevronRightIcon, 
  SparklesIcon, 
  CameraIcon, 
  EyeIcon, 
  ClockIcon, 
  UserGroupIcon,
  TrophyIcon,
  Squares2X2Icon, // Ganti CollectionIcon dengan ini
  FlagIcon
} from '@heroicons/react/24/outline'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos')
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredItem, setHoveredItem] = useState(null)

  const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800', title: 'Upacara Pembukaan', category: 'ceremony', featured: true },
    { id: 2, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800', title: 'Penampilan Tim Garuda Muda', category: 'performance', featured: false },
    { id: 3, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800', title: 'Latihan Intensif Pra-Kompetisi', category: 'training', featured: true },
    { id: 4, src: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800', title: 'Penyerahan Piala Bergengsi', category: 'award', featured: false },
    { id: 5, src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800', title: 'Momentum Kemenangan Tim Juara', category: 'victory', featured: true },
    { id: 6, src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800', title: 'Sesi Team Building Peserta', category: 'team', featured: false },
    { id: 7, src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800', title: 'Latihan Formasi Baris Berbaris', category: 'training', featured: true },
    { id: 8, src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800', title: 'Upacara Penutupan Meriah', category: 'ceremony', featured: false },
    { id: 9, src: 'https://images.unsplash.com/photo-1511882150382-421056c88433?auto=format&fit=crop&w=800', title: 'Penampilan Yel-Yel Terbaik', category: 'performance', featured: true },
  ]

  const videos = [
    { id: 1, title: 'Highlight Elang Sakti Season III 2024', duration: '5:20', views: '25.8K', featured: true, thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800' },
    { id: 2, title: 'Behind The Scene: Persiapan Tim', duration: '8:45', views: '12.3K', featured: false, thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800' },
    { id: 3, title: 'Wawancara Eksklusif Juara 2023', duration: '6:15', views: '18.7K', featured: true, thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800' },
    { id: 4, title: 'Tutorial Gerakan Dasar Paskibra', duration: '12:30', views: '35.2K', featured: false, thumbnail: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800' },
    { id: 5, title: 'Road to Elang Sakti: Journey', duration: '15:45', views: '42.1K', featured: true, thumbnail: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800' },
    { id: 6, title: 'Best Moments: Tim Terbaik 2024', duration: '7:20', views: '28.5K', featured: false, thumbnail: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800' },
  ]

  const categories = [
    { id: 'all', label: 'Semua Kategori', count: photos.length, icon: <Squares2X2Icon className="w-5 h-5" /> },
    { id: 'ceremony', label: 'Upacara', count: photos.filter(p => p.category === 'ceremony').length, icon: <FlagIcon className="w-5 h-5" /> },
    { id: 'performance', label: 'Penampilan', count: photos.filter(p => p.category === 'performance').length, icon: <SparklesIcon className="w-5 h-5" /> },
    { id: 'training', label: 'Latihan', count: photos.filter(p => p.category === 'training').length, icon: <ClockIcon className="w-5 h-5" /> },
    { id: 'award', label: 'Penghargaan', count: photos.filter(p => p.category === 'award').length, icon: <TrophyIcon className="w-5 h-5" /> },
  ]

  const getCategoryConfig = (category) => {
    const configs = {
      ceremony: { gradient: "from-red-600/20 to-red-700/20", text: "text-red-300" },
      performance: { gradient: "from-red-700/20 to-red-800/20", text: "text-red-200" },
      training: { gradient: "from-red-800/20 to-red-900/20", text: "text-red-200" },
      award: { gradient: "from-red-900/20 to-red-950/20", text: "text-red-300" },
      victory: { gradient: "from-red-600/20 to-red-800/20", text: "text-red-300" },
      team: { gradient: "from-red-700/20 to-red-900/20", text: "text-red-200" },
    }
    return configs[category] || { gradient: "from-gray-500/20 to-gray-700/20", text: "text-gray-300" }
  }

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory)

  return (
    <section id="gallery" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black font-body">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-red-800/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-900/30 to-red-800/30 border border-red-800/30 backdrop-blur-sm mb-8">
            <CameraIcon className="w-5 h-5 text-red-300" />
            <span className="text-lg font-semibold text-red-300 font-display">Galeri & Dokumentasi</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-200 bg-clip-text text-transparent">
              Kenangan Terbaik
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Abadikan setiap momen berharga dari kompetisi baris berbaris terbesar se-Jawa Timur
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('photos')}
            className={`group relative px-8 py-4 rounded-xl transition-all duration-500 ${
              activeTab === 'photos' ? 'scale-105' : 'hover:scale-102'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${
              activeTab === 'photos' 
                ? 'from-red-700/30 via-red-800/20 to-red-700/30' 
                : 'from-gray-900/50 to-black/50'
            } rounded-xl border ${
              activeTab === 'photos' 
                ? 'border-red-600/50' 
                : 'border-red-900/30 group-hover:border-red-700/50'
            } backdrop-blur-sm`}></div>
            
            <div className="relative flex items-center gap-3">
              <div className={`p-2.5 rounded-lg ${
                activeTab === 'photos' 
                  ? 'bg-gradient-to-r from-red-600 to-red-700' 
                  : 'bg-red-900/20 group-hover:bg-red-800/30'
              }`}>
                <PhotoIcon className={`w-5 h-5 ${
                  activeTab === 'photos' ? 'text-white' : 'text-red-300 group-hover:text-red-200'
                }`} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-lg ${
                    activeTab === 'photos' ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  } font-display`}>
                    Galeri Foto
                  </span>
                  {activeTab === 'photos' && (
                    <ChevronRightIcon className="w-5 h-5 text-red-300 animate-pulse" />
                  )}
                </div>
                <p className={`text-sm ${
                  activeTab === 'photos' ? 'text-red-300' : 'text-gray-400 group-hover:text-red-300'
                }`}>
                  500+ dokumentasi berkualitas
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`group relative px-8 py-4 rounded-xl transition-all duration-500 ${
              activeTab === 'videos' ? 'scale-105' : 'hover:scale-102'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${
              activeTab === 'videos' 
                ? 'from-red-700/30 via-red-800/20 to-red-700/30' 
                : 'from-gray-900/50 to-black/50'
            } rounded-xl border ${
              activeTab === 'videos' 
                ? 'border-red-600/50' 
                : 'border-red-900/30 group-hover:border-red-700/50'
            } backdrop-blur-sm`}></div>
            
            <div className="relative flex items-center gap-3">
              <div className={`p-2.5 rounded-lg ${
                activeTab === 'videos' 
                  ? 'bg-gradient-to-r from-red-600 to-red-700' 
                  : 'bg-red-900/20 group-hover:bg-red-800/30'
              }`}>
                <VideoCameraIcon className={`w-5 h-5 ${
                  activeTab === 'videos' ? 'text-white' : 'text-red-300 group-hover:text-red-200'
                }`} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-lg ${
                    activeTab === 'videos' ? 'text-white' : 'text-gray-300 group-hover:text-white'
                  } font-display`}>
                    Video Highlight
                  </span>
                  {activeTab === 'videos' && (
                    <ChevronRightIcon className="w-5 h-5 text-red-300 animate-pulse" />
                  )}
                </div>
                <p className={`text-sm ${
                  activeTab === 'videos' ? 'text-red-300' : 'text-gray-400 group-hover:text-red-300'
                }`}>
                  50+ video eksklusif
                </p>
              </div>
            </div>
          </button>
        </div>

        {activeTab === 'photos' ? (
          <>
            {/* Photo Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeCategory === category.id ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    activeCategory === category.id 
                      ? 'from-red-700/20 to-red-800/20' 
                      : 'from-gray-900/40 to-black/40'
                  } rounded-xl border ${
                    activeCategory === category.id 
                      ? 'border-red-600/40' 
                      : 'border-red-900/20 group-hover:border-red-700/30'
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
                        <span className={`font-medium ${
                          activeCategory === category.id ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        } font-body`}>
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

            {/* Photo Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredPhotos.map((photo) => {
                const config = getCategoryConfig(photo.category)
                return (
                  <div 
                    key={photo.id}
                    onMouseEnter={() => setHoveredItem(photo.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${config.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    
                    {/* Photo Card */}
                    <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl border border-red-900/50 overflow-hidden backdrop-blur-sm group-hover:border-red-600/50 transition-all duration-500 group-hover:-translate-y-2">
                      {/* Featured Badge */}
                      {photo.featured && (
                        <div className="absolute top-4 left-4 z-20">
                          <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold flex items-center gap-1 backdrop-blur-sm">
                            <SparklesIcon className="w-3 h-3" />
                            <span>FEATURED</span>
                          </div>
                        </div>
                      )}

                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                        <img
                          src={photo.src}
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-bold text-white font-heading line-clamp-2">
                            {photo.title}
                          </h3>
                          {hoveredItem === photo.id && (
                            <ChevronRightIcon className="w-5 h-5 text-red-300 flex-shrink-0 ml-2" />
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border border-red-800/30 ${config.text} bg-red-900/20`}>
                            {photo.category.toUpperCase()}
                          </span>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <EyeIcon className="w-4 h-4" />
                            <span>{(Math.random() * 5000 + 1000).toFixed(0)} views</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: "500+", label: "Foto Dokumentasi", icon: <CameraIcon className="w-6 h-6" /> },
                { value: "50+", label: "Fotografer Professional", icon: <UserGroupIcon className="w-6 h-6" /> },
                { value: "24/7", label: "Live Coverage", icon: <ClockIcon className="w-6 h-6" /> },
              ].map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl border border-red-900/50 p-6 backdrop-blur-sm hover:border-red-600/50 transition-all duration-500">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-red-600/20 to-red-700/20">
                        <div className="text-red-300">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold font-display">
                        <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                          {stat.value}
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-400 font-medium font-body">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Video Section */
          <div className="space-y-12">
            {/* Featured Video */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/30 to-red-700/30 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-3xl border border-red-900/50 overflow-hidden backdrop-blur-xl">
                {/* Video Thumbnail */}
                <div className="relative h-96 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent z-10"></div>
                  <img
                    src={videos.find(v => v.featured)?.thumbnail || videos[0].thumbnail}
                    alt="Featured Video"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button className="group/play relative w-20 h-20 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center hover:from-red-700 hover:to-red-800 transition-all duration-300 group-hover:scale-110 transform shadow-2xl shadow-red-900/30">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-300 rounded-full blur-lg opacity-0 group-hover/play:opacity-30 transition-opacity duration-300"></div>
                      <PlayIcon className="w-10 h-10 text-white ml-1 relative z-10" />
                    </button>
                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6 z-30">
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-bold flex items-center gap-2 backdrop-blur-sm">
                      <VideoCameraIcon className="w-4 h-4" />
                      <span>VIDEO UTAMA</span>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                        {videos.find(v => v.featured)?.title || videos[0].title}
                      </h3>
                      <p className="text-gray-300 font-body">
                        Dokumentasi lengkap perjalanan Elang Sakti Season III dari persiapan hingga penutupan
                      </p>
                    </div>
                    <div className="flex items-center gap-4 ml-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-300 font-display">
                          {videos.find(v => v.featured)?.duration || videos[0].duration}
                        </div>
                        <div className="text-sm text-gray-400 font-body">Durasi</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-red-900/30">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-gray-300">
                        <EyeIcon className="w-5 h-5 text-red-300" />
                        <span className="font-body">{videos.find(v => v.featured)?.views || videos[0].views} views</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <ClockIcon className="w-5 h-5 text-red-300" />
                        <span className="font-body">Uploaded 2 hari lalu</span>
                      </div>
                    </div>
                    <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-red-600/20 to-red-700/20 text-red-300 border border-red-700/30 hover:border-red-600/50 hover:bg-red-600/30 transition-all duration-300 font-display">
                      Tonton Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.filter(v => !v.featured).map((video) => (
                <div 
                  key={video.id}
                  onMouseEnter={() => setHoveredItem(`video-${video.id}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl border border-red-900/50 overflow-hidden backdrop-blur-sm group-hover:border-red-600/50 transition-all duration-500 group-hover:-translate-y-2">
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Play Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <PlayIcon className="w-5 h-5 text-white ml-0.5" />
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded text-sm text-white backdrop-blur-sm">
                        {video.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h4 className="font-bold text-white mb-3 font-heading line-clamp-2">
                        {video.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                          <EyeIcon className="w-4 h-4" />
                          <span className="font-body">{video.views} views</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400 font-body">1 week ago</span>
                          {hoveredItem === `video-${video.id}` && (
                            <ChevronRightIcon className="w-4 h-4 text-red-300" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery