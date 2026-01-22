import { useState } from 'react'
import { PhotoIcon, VideoCameraIcon, PlayIcon } from '@heroicons/react/24/outline'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos')

  const photos = [
    { id: 1, src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800', title: 'Upacara Pembukaan', category: 'ceremony' },
    { id: 2, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800', title: 'Penampilan Tim', category: 'performance' },
    { id: 3, src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800', title: 'Latihan Intensif', category: 'training' },
    { id: 4, src: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800', title: 'Penyerahan Piala', category: 'award' },
    { id: 5, src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800', title: 'Momentum Kemenangan', category: 'victory' },
    { id: 6, src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800', title: 'Team Building', category: 'team' },
  ]

  const videos = [
    { id: 1, title: 'Highlight Elang Sakti 2023', duration: '3:45', views: '15.2K' },
    { id: 2, title: 'Behind The Scene Persiapan', duration: '8:12', views: '8.7K' },
    { id: 3, title: 'Wawancara Juara 2023', duration: '5:30', views: '12.5K' },
    { id: 4, title: 'Tutorial Gerakan Dasar', duration: '10:15', views: '25.3K' },
  ]

  const categories = [
    { id: 'all', label: 'Semua', count: photos.length },
    { id: 'ceremony', label: 'Upacara', count: photos.filter(p => p.category === 'ceremony').length },
    { id: 'performance', label: 'Penampilan', count: photos.filter(p => p.category === 'performance').length },
    { id: 'training', label: 'Latihan', count: photos.filter(p => p.category === 'training').length },
    { id: 'award', label: 'Penghargaan', count: photos.filter(p => p.category === 'award').length },
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Galeri & Dokumentasi</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'photos'
                  ? 'bg-gradient-to-r from-primary-700 to-primary-600 text-white shadow-lg'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <PhotoIcon className="w-5 h-5" />
              <span>Foto</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-primary-700 to-primary-600 text-white shadow-lg'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <VideoCameraIcon className="w-5 h-5" />
              <span>Video</span>
            </button>
          </div>

          {activeTab === 'photos' ? (
            <>
              {/* Photo Categories */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="px-4 py-2 rounded-lg bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <span className="font-medium">{category.label}</span>
                    <span className="ml-2 px-2 py-1 text-xs rounded-full bg-gray-800">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Photo Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo) => (
                  <div key={photo.id} className="group relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-xl font-bold text-white mb-2">{photo.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-primary-900/70 text-primary-300 text-sm">
                        {photo.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="card text-center">
                  <div className="text-3xl font-bold text-primary-300 mb-2">500+</div>
                  <div className="text-gray-400">Foto Dokumentasi</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-primary-300 mb-2">50+</div>
                  <div className="text-gray-400">Fotografer</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-primary-300 mb-2">24/7</div>
                  <div className="text-gray-400">Coverage Live</div>
                </div>
              </div>
            </>
          ) : (
            /* Video Section */
            <div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Featured Video */}
                <div className="relative rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-primary-800/20 z-10"></div>
                  <div className="absolute inset-0 bg-black/40 z-20"></div>
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200"
                    alt="Featured Video"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <button className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors group-hover:scale-110 transform duration-300">
                      <PlayIcon className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                    <h3 className="text-xl font-bold text-white mb-2">Highlight Elang Sakti 2024</h3>
                    <p className="text-gray-300">Video resmi perjalanan event dari awal hingga akhir</p>
                  </div>
                </div>

                {/* Video List */}
                <div className="space-y-6">
                  {videos.map((video) => (
                    <div key={video.id} className="card hover:border-primary-700/50 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="relative flex-shrink-0">
                          <div className="w-32 h-20 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <PlayIcon className="w-8 h-8 text-primary-400" />
                          </div>
                          <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs text-white">
                            {video.duration}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-2">{video.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>{video.views} views</span>
                            <span>•</span>
                            <span>2 hari lalu</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery