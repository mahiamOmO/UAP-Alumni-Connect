import React, { useState } from 'react'

const JoinDirectoryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    graduationYear: '',
    currentPosition: '',
    company: '',
    location: '',
    yearsOfExperience: '',
    linkedinProfile: '',
    githubProfile: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for joining the alumni directory! Your profile will be reviewed and added soon.')
    onClose()
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      graduationYear: '',
      currentPosition: '',
      company: '',
      location: '',
      yearsOfExperience: '',
      linkedinProfile: '',
      githubProfile: ''
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Join Alumni Directory</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Graduation Year *
                </label>
                <select
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select Year</option>
                  {Array.from({ length: 20 }, (_, i) => {
                    const year = new Date().getFullYear() - i
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Position *
                </label>
                <input
                  type="text"
                  name="currentPosition"
                  value={formData.currentPosition}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your current position"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your location"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <select
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select Experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-3">2-3 years</option>
                  <option value="4-5">4-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Social Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  name="linkedinProfile"
                  value={formData.linkedinProfile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GitHub Profile
                </label>
                <input
                  type="url"
                  name="githubProfile"
                  value={formData.githubProfile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="https://github.com/yourusername"
                />
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Join Directory
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default JoinDirectoryModal
