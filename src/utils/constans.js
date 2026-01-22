// src/utils/constants.js
export const EVENT_INFO = {
  name: 'LKBB Elang Sakti',
  edition: '2024',
  organizer: 'Paskibra SMPN 1 Jombang',
  date: '15-17 November 2024',
  location: 'SMP Negeri 1 Jombang, Jawa Timur',
  theme: 'Disiplin, Tangguh, Berprestasi'
}

export const CATEGORIES = [
  { id: 'putra', label: 'Putra', maxMembers: 16 },
  { id: 'putri', label: 'Putri', maxMembers: 16 },
  { id: 'campuran', label: 'Campuran', maxMembers: 20 }
]

export const SPONSOR_TIERS = {
  platinum: { name: 'Platinum', color: 'from-gray-300 to-gray-100' },
  gold: { name: 'Gold', color: 'from-yellow-500 to-yellow-300' },
  silver: { name: 'Silver', color: 'from-gray-400 to-gray-300' }
}

// src/utils/helpers.js
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatTime = (time) => {
  return new Date(`2000-01-01T${time}`).toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

// src/utils/validation.js
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}



export const validatePhone = (phone) => {
  const re = /^[0-9]{10,13}$/
  return re.test(phone)
}