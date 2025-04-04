import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import CreateImage from './pages/CreateImage'
import Logo from "./assets/index"

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/" className='flex justify-center items-center'>
          <img src={Logo} alt="logo" className='w-28 object-contain' />
        </Link>
        <Link to="/create-image" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)] bg-[#f9fafe]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-image" element={<CreateImage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
