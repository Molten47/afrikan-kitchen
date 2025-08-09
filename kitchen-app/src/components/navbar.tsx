import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='real-font w-full h-10vh flex p-4 flex-row justify-center fixed bg-[#fafbfc] z-10'>
      <nav className='w-4/5 flex flex-row justify-between items-center '>
      <div className='flex flex-row gap-4 items-center justify-center'>
        <Link to="/" className='text-xl font-semibold hover:text-[#3e3b34]'>
          AfrikaDine
        </Link>
          <ul className='flex flex-row gap-6 items-center '>
            <div className='flex flex-row items-center'>
            <li>Recipes</li>
            <ChevronDown size={16}/>
            </div>
            <div className='flex flex-row items-center'>
            <li>Outlets</li>
            <ChevronDown size={16}/>
            </div>
          <li>About</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className='flex flex-row gap-2'>
        <Link to="/login">
          <button className='px-3 py-2 border-2 border-[#3e3b34] text-[#3e3b34] rounded-lg hover:bg-[#f0eeeb] '>
            Log in
          </button>
        </Link>
        <Link to="/signup">
          <button className='bg-[#3e3b34] px-3 py-2 text-white rounded-lg hover:bg-[#302d29]'>
            Sign Up
          </button>
        </Link>
      </div>
      </nav>
    </div>
  )
}

export default navbar