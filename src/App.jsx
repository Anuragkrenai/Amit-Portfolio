import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home';
const App = () => {
  return (
    <div className='h-screen w-screen fixed top-0 left-0 flex justify-center items-center  backImage'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App