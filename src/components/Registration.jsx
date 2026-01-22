import { useState } from 'react'
import { 
  CheckCircleIcon,
  XCircleIcon,
  ClipboardDocumentIcon,
  UserGroupIcon,
  AcademicCapIcon,
  PhoneIcon,
  EnvelopeIcon
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

  const categories = [
    { value: 'putra', label: 'Putra' },
    { value: 'putri', label: 'Putri' },
    { value: 'campuran', label: 'Campuran' },
  ]

  const requirements = [
    'Surat pengantar dari sekolah',
    'Pas foto 3x4 (2 lembar)',
    'Fotokopi kartu pelajar',
    'Formulir pendaftaran lengkap',
    'Izin dari orang tua/wali',
    'Sertifikat kesehatan'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Pendaftaran berhasil dikirim! Tim kami akan menghubungi Anda dalam 1x24 jam.')
    // Reset form
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
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Pendaftaran Online</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-700 to-primary-600 flex items-center justify-center">
                    <ClipboardDocumentIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Formulir Pendaftaran</h3>
                    <p className="text-gray-400">Isi data dengan lengkap dan benar</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Nama Sekolah</label>
                      <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Nama Tim</label>
                      <input
                        type="text"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Kategori</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        required
                      >
                        <option value="">Pilih Kategori</option>
                        {categories.map((cat) => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Jumlah Anggota</label>
                      <div className="flex items-center space-x-4">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, members: Math.max(12, prev.members - 1) }))}
                          className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700"
                        >
                          <span className="text-xl">-</span>
                        </button>
                        <div className="flex-1 text-center">
                          <div className="text-2xl font-bold text-primary-300">{formData.members}</div>
                          <div className="text-sm text-gray-500">Anggota</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, members: Math.min(20, prev.members + 1) }))}
                          className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-gray-700"
                        >
                          <span className="text-xl">+</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Nama Pembina/Pelatih</label>
                    <input
                      type="text"
                      name="coachName"
                      value={formData.coachName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">No. Telepon Pembina</label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <PhoneIcon className="w-5 h-5 text-gray-500" />
                        </div>
                        <input
                          type="tel"
                          name="coachPhone"
                          value={formData.coachPhone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">Email Pembina</label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                          <EnvelopeIcon className="w-5 h-5 text-gray-500" />
                        </div>
                        <input
                          type="email"
                          name="coachEmail"
                          value={formData.coachEmail}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Alamat Sekolah</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="hasAgreed"
                      checked={formData.hasAgreed}
                      onChange={handleChange}
                      className="mt-1"
                      required
                    />
                    <label htmlFor="agreement" className="text-gray-300">
                      Saya menyetujui syarat dan ketentuan yang berlaku. Data yang saya berikan adalah benar dan siap mempertanggungjawabkannya.
                    </label>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full btn-primary text-lg py-4"
                      disabled={!formData.hasAgreed}
                    >
                      Daftarkan Tim
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-700 to-green-600 flex items-center justify-center">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Syarat & Ketentuan</h3>
                    <p className="text-gray-400">Persyaratan wajib peserta</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-700 to-red-600 flex items-center justify-center">
                    <AcademicCapIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Informasi Penting</h3>
                    <p className="text-gray-400">Yang perlu diketahui</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-900/50">
                    <div className="text-sm text-gray-400 mb-1">Biaya Pendaftaran</div>
                    <div className="text-2xl font-bold text-primary-300">Rp 500.000</div>
                    <div className="text-sm text-gray-500">Per tim (termasuk makan & sertifikat)</div>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-900/50">
                    <div className="text-sm text-gray-400 mb-1">Batas Pendaftaran</div>
                    <div className="text-lg font-bold text-white">10 November 2024</div>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-900/50">
                    <div className="text-sm text-gray-400 mb-1">Kuota Peserta</div>
                    <div className="text-lg font-bold text-white">24 Tim</div>
                    <div className="text-sm text-gray-500">Sisa 8 slot tersedia</div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h4 className="text-lg font-bold text-white mb-4">Kontak Panitia</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center">
                      <PhoneIcon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Telepon</div>
                      <div className="font-semibold text-white">0812-3456-7890</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center">
                      <EnvelopeIcon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="font-semibold text-white">elangsakti@smpn1jombang.sch.id</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center">
                      <UserGroupIcon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Koordinator</div>
                      <div className="font-semibold text-white">Pak Budi Santoso</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration