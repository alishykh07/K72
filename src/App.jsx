import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Agency from './pages/Agency'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'
import Contact from './pages/Contact'


const App = () => {
  return (

    // <>
    //   
    // </>

    <div className=''>
      <FullScreenNav />
      <Navbar />
      <Routes>
        <Route path="/" element={<><Navbar logoColor="white" /><Home /></>} />
        <Route path="/project" element={<><Navbar logoColor="black" /><Project /></>} />
        <Route path="/agency" element={<><Navbar logoColor="white" /><Agency /></>} />
        <Route path="/contact" element={<><Navbar logoColor="white" /><Contact /></>} />
      </Routes>
    </div>
  )
}

export default App
