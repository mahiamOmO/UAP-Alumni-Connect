import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AlumniDirectory from './pages/AlumniDirectory'
import JobOpportunities from './pages/JobOpportunities'
import Events from './pages/Events'
import Community from './pages/Community'
import Mentorship from './pages/Mentorship'
import Resources from './pages/Resources'
import Login from './pages/Login'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alumni-directory" element={<AlumniDirectory />} />
          <Route path="/job-opportunities" element={<JobOpportunities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
