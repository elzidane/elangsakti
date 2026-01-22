import { useState } from 'react'
import { 
  ClipboardDocumentIcon,
  UserGroupIcon,
  AcademicCapIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BuildingLibraryIcon,
  UserIcon,
  UsersIcon,
  CalendarDaysIcon,
  TicketIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const Registration = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    teamName: '',
    category: '',
    coachName: '',
    coachPhone: '',
    coachEmail: '',
    members: 16,
    address: '',
    hasAgreed: false
  })

  const [activeStep, setActiveStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    { value: 'putra', label: 'Putra', color: 'from-blue-500/20 to-blue-600/10' },
    { value: 'putri', label: 'Putri', color: 'from-pink-500/20 to-pink-600/10' },
    { value: 'campuran', label: 'Campuran', color: 'from-purple-500/20 to-purple-600/10' },
  ]

  const steps = [
    { number: 1, title: 'Data Tim', icon: TicketIcon },
    { number: 2, title: 'Data Pembina', icon: UserIcon },
    { number: 3, title: 'Konfirmasi', icon: CheckCircleIcon }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      alert('✅ Pendaftaran berhasil!')
      setIsSubmitting(false)
      setActiveStep(1)
      setFormData({
        schoolName: '',
        teamName: '',
        category: '',
        coachName: '',
        coachPhone: '',
        coachEmail: '',
        members: 16,
        address: '',
        hasAgreed: false
      })
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const nextStep = () => setActiveStep(activeStep + 1)
  const prevStep = () => setActiveStep(activeStep - 1)

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-gray-950 to-black font-poppins">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-900/30 to-red-950/30 border border-red-800/30 mb-6">
            <ClipboardDocumentIcon className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-300">REGISTRASI</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-4">
            Daftarkan <span className="bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">Tim</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Bergabung dalam kompetisi terbaik
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-950/60 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden">
              {/* Progress Bar */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  {steps.map((step) => (
                    <div key={step.number} className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                        activeStep >= step.number 
                          ? 'bg-gradient-to-r from-red-500 to-rose-600 shadow-lg'
                          : 'bg-gray-800 border border-gray-700'
                      }`}>
                        <step.icon className={`w-5 h-5 ${
                          activeStep >= step.number ? 'text-white' : 'text-gray-400'
                        }`} />
                      </div>
                      <span className={`text-sm ${
                        activeStep >= step.number ? 'text-white' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit}>
                  {/* Step 1 */}
                  {activeStep === 1 && (
                    <div className="space-y-8 animate-fadeIn">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <BuildingLibraryIcon className="w-5 h-5 text-gray-400" />
                            <label className="text-gray-300 text-sm font-medium">Sekolah</label>
                          </div>
                          <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-900/30 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                            placeholder="Nama sekolah"
                            required
                          />
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <TicketIcon className="w-5 h-5 text-gray-400" />
                            <label className="text-gray-300 text-sm font-medium">Nama Tim</label>
                          </div>
                          <input
                            type="text"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-900/30 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                            placeholder="Nama tim"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <UsersIcon className="w-5 h-5 text-gray-400" />
                            <label className="text-gray-300 text-sm font-medium">Kategori</label>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            {categories.map((cat) => (
                              <button
                                key={cat.value}
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, category: cat.value }))}
                                className={`p-3 rounded-lg border transition-all ${
                                  formData.category === cat.value 
                                    ? `${cat.color} border-red-500 shadow-lg` 
                                    : 'border-gray-700 bg-gray-900/30 hover:border-gray-600'
                                }`}
                              >
                                <span className="text-white font-medium">{cat.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <UserGroupIcon className="w-5 h-5 text-gray-400" />
                            <label className="text-gray-300 text-sm font-medium">Anggota</label>
                          </div>
                          <div className="bg-gray-900/30 border border-gray-700 rounded-xl p-4">
                            <div className="flex items-center justify-center gap-8">
                              <button
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, members: Math.max(12, prev.members - 1) }))}
                                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                              >
                                <span className="text-xl">−</span>
                              </button>
                              <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent">
                                  {formData.members}
                                </div>
                                <div className="text-xs text-gray-500">anggota</div>
                              </div>
                              <button
                                type="button"
                                onClick={() => setFormData(prev => ({ ...prev, members: Math.min(20, prev.members + 1) }))}
                                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                              >
                                <span className="text-xl">+</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end pt-4">
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!formData.schoolName || !formData.teamName || !formData.category}
                          className="px-8 py-3 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          Lanjutkan <ArrowRightIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {activeStep === 2 && (
                    <div className="space-y-8 animate-fadeIn">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <UserIcon className="w-5 h-5 text-gray-400" />
                          <label className="text-gray-300 text-sm font-medium">Pembina</label>
                        </div>
                        <input
                          type="text"
                          name="coachName"
                          value={formData.coachName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-900/30 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                          placeholder="Nama lengkap"
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="relative">
                            <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                              type="tel"
                              name="coachPhone"
                              value={formData.coachPhone}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3 bg-gray-900/30 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                              placeholder="Telepon"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <div className="relative">
                            <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                            <input
                              type="email"
                              name="coachEmail"
                              value={formData.coachEmail}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3 bg-gray-900/30 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30"
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <MapPinIcon className="w-5 h-5 text-gray-400" />
                          <label className="text-gray-300 text-sm font-medium">Alamat</label>
                        </div>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows="2"
                          className="w-full px-4 py-3 bg-gray-900/30 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/30 resize-none"
                          placeholder="Alamat sekolah"
                          required
                        />
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-6 py-3 border border-gray-700 rounded-xl font-semibold text-gray-300 hover:border-gray-600 hover:text-white transition-all"
                        >
                          Kembali
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!formData.coachName || !formData.coachPhone || !formData.coachEmail || !formData.address}
                          className="px-8 py-3 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          Lanjutkan <ArrowRightIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {activeStep === 3 && (
                    <div className="space-y-8 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-gray-900/30 border border-gray-700">
                          <div className="text-xs text-gray-400 mb-1">Sekolah</div>
                          <div className="text-white font-semibold">{formData.schoolName}</div>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-900/30 border border-gray-700">
                          <div className="text-xs text-gray-400 mb-1">Tim</div>
                          <div className="text-white font-semibold">{formData.teamName}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-gray-900/30 border border-gray-700">
                          <div className="text-xs text-gray-400 mb-1">Kategori</div>
                          <div className="text-white font-semibold capitalize">{formData.category}</div>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-900/30 border border-gray-700">
                          <div className="text-xs text-gray-400 mb-1">Anggota</div>
                          <div className="text-2xl font-bold text-white">{formData.members}</div>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-900/30 border border-gray-700">
                          <div className="text-xs text-gray-400 mb-1">Pembina</div>
                          <div className="text-white font-semibold">{formData.coachName}</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-gradient-to-r from-red-900/20 to-red-950/10 border border-red-800/30">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="agreement"
                            name="hasAgreed"
                            checked={formData.hasAgreed}
                            onChange={handleChange}
                            className="w-5 h-5 rounded border-gray-600 bg-gray-800 text-red-500 focus:ring-red-500/20"
                            required
                          />
                          <label htmlFor="agreement" className="text-gray-300 text-sm">
                            Setuju dengan persyaratan
                          </label>
                        </div>
                      </div>

                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-6 py-3 border border-gray-700 rounded-xl font-semibold text-gray-300 hover:border-gray-600 hover:text-white transition-all"
                        >
                          Kembali
                        </button>
                        <button
                          type="submit"
                          disabled={!formData.hasAgreed || isSubmitting}
                          className="px-8 py-3 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Mengirim...</span>
                            </div>
                          ) : 'Kirim Pendaftaran'}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info Cards */}
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-950/60 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Info Penting</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <div>
                    <div className="text-sm text-gray-400">Biaya</div>
                    <div className="text-2xl font-bold text-white">Rp 500K</div>
                  </div>
                  <AcademicCapIcon className="w-8 h-8 text-red-400" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <div>
                    <div className="text-sm text-gray-400">Batas</div>
                    <div className="text-lg font-bold text-white">10 Nov 2024</div>
                  </div>
                  <CalendarDaysIcon className="w-8 h-8 text-red-400" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <div>
                    <div className="text-sm text-gray-400">Kuota</div>
                    <div className="text-lg font-bold text-white">24 Tim</div>
                    <div className="text-xs text-gray-500">8 slot tersisa</div>
                  </div>
                  <TicketIcon className="w-8 h-8 text-red-400" />
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-950/60 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Persyaratan</h3>
              <div className="space-y-3">
                {['Surat sekolah', 'Pas foto 3x4', 'Kartu pelajar', 'Formulir', 'Izin orang tua', 'Sertifikat kesehatan'].map((req, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-950/60 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/10">
                    <PhoneIcon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white font-medium">0812-3456-7890</div>
                    <div className="text-xs text-gray-400">Telepon/WA</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/10">
                    <EnvelopeIcon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white font-medium">panitia@event.id</div>
                    <div className="text-xs text-gray-400">Email</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-gradient-to-br from-gray-900/40 to-gray-950/60 backdrop-blur-sm rounded-2xl border border-gray-800 p-6">
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Kuota</span>
                  <span className="text-white font-semibold">16/24 Tim</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-red-500 to-rose-600 rounded-full transition-all duration-500"
                    style={{ width: `${(16/24)*100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-red-300">
                <ClockIcon className="w-4 h-4" />
                <span>Segera daftar!</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}

export default Registration