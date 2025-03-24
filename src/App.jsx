import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const links = ['Characters', 'Comics', 'Movies', 'Tv', 'Games', 'Collectibles', 'Videos', 'Fans', 'News', 'Shop']


  return (
    <>
      <Navbar links={links} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
