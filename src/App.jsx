import { useState } from 'react'
import Header from './Header.jsx'
import Dashboard from './dashboard.jsx';
import Games from './Games.jsx'
import { Routes, Route } from 'react-router-dom';
function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/games" element={<Games />} />
        
      </Routes>
    </>
  )
}

export default App
