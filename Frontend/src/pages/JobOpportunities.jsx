import React, { useState } from 'react'

const JobOpportunities = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterLocation, setFilterLocation] = useState('')
  const [filterType, setFilterType] = useState('')

  // Mock data - in a real app, this would come from an API
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      type: "Full-time",
      postedBy: "John Doe (2018)",
      postedDate: "2024-01-15",
      description: "We're looking for a Senior Software Engineer to join our team. You'll work on cutting-edge projects and collaborate with world-class engineers.",
      requirements: ["5+ years experience", "Strong in Python/Java", "Experience with cloud platforms", "Bachelor's degree in CS"],
      salary: "$150,000 - $200,000",
      remote: true
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      type: "Full-time",
      postedBy: "Jane Smith (2019)",
      postedDate: "2024-01-14",
      description: "Join our product team to drive innovation and deliver exceptional user experiences. Lead cross-functional teams and shape product strategy.",
      requirements: ["3+ years PM experience", "Technical background", "Strong communication skills", "MBA preferred"],
      salary: "$120,000 - $160,000",
      remote: false
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Amazon",
      location: "Austin, TX",
      type: "Full-time",
      postedBy: "Ahmed Hassan (2020)",
      postedDate: "2024-01-13",
      description: "Work with large datasets to extract insights and build machine learning models. Collaborate with engineering teams to deploy solutions.",
      requirements: ["PhD in CS/Statistics", "Python/R expertise", "ML/DL experience", "Strong analytical skills"],
      salary: "$130,000 - $180,000",
      remote: true
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "Facebook",
      location: "Menlo Park, CA",
      type: "Full-time",
      postedBy: "Sarah Johnson (2017)",
      postedDate: "2024-01-12",
      description: "Build beautiful and responsive user interfaces. Work with React, TypeScript, and modern web technologies.",
      requirements: ["3+ years frontend experience", "React/TypeScript", "CSS/HTML expertise", "Portfolio required"],
      salary: "$100,000 - $140,000",
      remote: false
    }
  ]

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = !filterLocation || job.location.toLowerCase().includes(filterLocation.toLowerCase())
    const matchesType = !filterType || job.type === filterType
    
    return matchesSearch && matchesLocation && matchesType
  })

  const uniqueLocations = [...new Set(jobs.map(job => job.location))]
  const uniqueTypes = [...new Set(jobs.map(job => job.type))]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Job Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting career opportunities posted by our alumni network. Find your next role or post opportunities for fellow alumni.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Jobs</label>
              <input
                type="text"
                placeholder="Search by title, company, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Locations</option>
                {uniqueLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                {uniqueTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Post Job Button */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Showing {filteredJobs.length} of {jobs.length} job opportunities
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <i className="fas fa-plus mr-2"></i>
            Post a Job
          </button>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                  <p className="text-xl text-gray-600 mb-1">{job.company}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    {job.location}
                    {job.remote && (
                      <span className="ml-4 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Remote
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-green-600">{job.salary}</p>
                  <p className="text-sm text-gray-500">{job.type}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{job.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  <p>Posted by {job.postedBy}</p>
                  <p>Posted on {new Date(job.postedDate).toLocaleDateString()}</p>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                    <i className="fas fa-bookmark mr-2"></i>
                    Save
                  </button>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <i className="fas fa-briefcase text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
            <p className="text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default JobOpportunities
