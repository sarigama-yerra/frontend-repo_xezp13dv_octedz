import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import './index.css'

import CaseStudies from './pages/CaseStudies'
import Skills from './pages/Skills'
import Highlights from './pages/Highlights'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
