import React, { useState } from 'react'
import JoinDirectoryModal from '../components/JoinDirectoryModal'

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterBatch, setFilterBatch] = useState('')
  const [filterCompany, setFilterCompany] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Mock data - in a real app, this would come from an API
  const alumni = [
    {
      id: 1,
      name: "Rashik Rahman",
      batch: "44",
      company: "University of Asia Pacific",
      position: "Lecturer.",
      location: "Bangladesh",
      linkedin: "https://www.linkedin.com/in/rashik-rahman-5a327a1a6?originalSubdomain=bd",
      github: "https://github.com/RashikRahman", 
      research_papers: "https://scholar.google.com/citations?hl=en&user=20fAehwAAAAJ&view_op=list_works&sortby=pubdate",
      skills: ["React", "Node.js", "Python", "java","c"]
    },
    {
      id: 2,
      name: "Md Sohanur Rahman",
      batch: "37",
      company: "Prime Tech Solution ltd",
      position: "Programmer",
      location: "Bangladesh",
      linkedin: "https://www.linkedin.com/in/sohan065/",
      github: "https://github.com/sohan065", 
      research_papers: " NO",
      skills: ["Node.js", "Python","c"]
    },
    {
      id: 3,
      name: "Md. Shahib Anower",
      batch: "44",
      company: " ",
      position: " ",
      location: "Bangladesh",
      linkedin: "https://www.linkedin.com/in/isobeyan",
      github: "https://github.com/isobeyan",
      skills: ["Java", "AWS","C++"],
      research_papers: "https://doi.org/10.1007/978-981-99-8937-9_64",
    },
    {
      id: 4,
      name: "Sumaya Jahan Othye",
      batch: "45",
      company: "UX/UI designer",
      position: "Senior Software iMS System technology.",
      location: "Bangladesh",
      linkedin: "https://www.linkedin.com/in/alifun-nahar-258383291/",
      github: "XX", 
      research_papers: "https://ieeexplore.ieee.org/document/10218510",
      skills: ["React", "Node.js", "Python", "Machine Learning"]
    },
    {
      id: 5,
      name: "Jayonto Dutta Plabon",
      batch: "49",
      company: "University of Asia Pacific",
      position: "Lecturer",
      location: "Bangladesh",
      linkedin: "https://www.linkedin.com/in/jayonto-dutta-plabon/",
      github: "https://github.com/Plabon-Dutta", 
      research_papers: "https://scholar.google.com/citations?user=Rt2lAwsAAAAJ&hl=en",
      skills: ["React", "Node.js", "Python",]
    }
  ]

  const filteredAlumni = alumni.filter(alumnus => {
    const matchesSearch = alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumnus.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumnus.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesBatch = !filterBatch || alumnus.batch === filterBatch
    const matchesCompany = !filterCompany || alumnus.company.toLowerCase().includes(filterCompany.toLowerCase())
    
    return matchesSearch && matchesBatch && matchesCompany
  })

  const uniqueBatches = [...new Set(alumni.map(a => a.batch))].sort()
  const uniqueCompanies = [...new Set(alumni.map(a => a.company))].sort()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Alumni Directory</h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Connect with fellow UAP CSE alumni. Search by name, skills, company, or batch to find the perfect networking opportunity.
              </p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center ml-8"
            >
              <i className="fas fa-plus mr-2"></i>
              Join Directory
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by name, position, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Batch</label>
              <select
                value={filterBatch}
                onChange={(e) => setFilterBatch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Batches</option>
                {uniqueBatches.map(batch => (
                  <option key={batch} value={batch}>{batch}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
              <select
                value={filterCompany}
                onChange={(e) => setFilterCompany(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Companies</option>
                {uniqueCompanies.map(company => (
                  <option key={company} value={company}>{company}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAlumni.length} of {alumni.length} alumni
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map(alumnus => (
            <div key={alumnus.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {alumnus.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">{alumnus.name}</h3>
                  <p className="text-gray-600">{alumnus.position}</p>
                  <p className="text-sm text-gray-500">{alumnus.company}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  <i className="fas fa-graduation-cap mr-2"></i>
                  Batch {alumnus.batch}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  {alumnus.location}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {alumnus.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <a
                  href={alumnus.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
                >
                  <i className="fab fa-linkedin mr-2"></i>
                  LinkedIn
                </a>
                <a
                  href={alumnus.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-center hover:bg-gray-900 transition-colors"
                >
                  <i className="fab fa-github mr-2"></i>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No alumni found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Join Directory Modal */}
      <JoinDirectoryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

export default AlumniDirectory
