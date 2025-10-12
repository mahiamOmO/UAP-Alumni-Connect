import React, { useState } from 'react'

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const resources = [
    {
      id: 1,
      title: "Data Structures and Algorithms Guide",
      category: "Study Materials",
      type: "PDF",
      size: "2.5 MB",
      uploadedBy: "Dr. Sarah Ahmed",
      uploadDate: "2024-01-10",
      downloads: 156,
      description: "Comprehensive guide covering all major data structures and algorithms with examples and practice problems."
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      category: "Study Materials",
      type: "Video",
      size: "1.2 GB",
      uploadedBy: "John Doe (2018)",
      uploadDate: "2024-01-08",
      downloads: 89,
      description: "Complete video series on machine learning concepts, from basics to advanced topics."
    },
    {
      id: 3,
      title: "Industry Insights 2024",
      category: "Industry Reports",
      type: "PDF",
      size: "5.1 MB",
      uploadedBy: "Jane Smith (2019)",
      uploadDate: "2024-01-05",
      downloads: 234,
      description: "Latest trends and insights in the technology industry, compiled by industry experts."
    },
    {
      id: 4,
      title: "Interview Preparation Kit",
      category: "Career Resources",
      type: "ZIP",
      size: "15.3 MB",
      uploadedBy: "Ahmed Hassan (2020)",
      uploadDate: "2024-01-03",
      downloads: 312,
      description: "Complete collection of interview questions, coding challenges, and preparation materials."
    }
  ]

  const categories = ["All", "Study Materials", "Industry Reports", "Career Resources", "Software Tools"]

  const filteredResources = resources.filter(resource => 
    activeCategory === 'all' || resource.category === activeCategory
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Resource Library</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access and share academic resources, study materials, industry insights, and career development tools.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeCategory === category.toLowerCase().replace(' ', '-') 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveCategory(category === 'All' ? 'all' : category.toLowerCase().replace(' ', '-'))}
                >
                  {category}
                </button>
              ))}
            </div>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              <i className="fas fa-upload mr-2"></i>
              Upload Resource
            </button>
          </div>

          <div className="space-y-4">
            {filteredResources.map(resource => (
              <div key={resource.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <i className={`fas ${
                        resource.type === 'PDF' ? 'fa-file-pdf' :
                        resource.type === 'Video' ? 'fa-video' :
                        resource.type === 'ZIP' ? 'fa-file-archive' : 'fa-file'
                      } text-purple-600`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-3">{resource.description}</p>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>By {resource.uploadedBy}</span>
                        <span>{resource.type} • {resource.size}</span>
                        <span>{resource.downloads} downloads</span>
                        <span>Uploaded {new Date(resource.uploadDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                      {resource.category}
                    </span>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      <i className="fas fa-download mr-2"></i>
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
