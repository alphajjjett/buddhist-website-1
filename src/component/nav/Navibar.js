import React from 'react'

function Navibar() {
  return (
    <nav className='bg-black p-4'>
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="text-white text-2xl font-bold">logo</div>
          <ul className='md:flex space-x-4'>
            <li><a href="#" className='text-white'>Home</a></li>
            <li><a href="#" className='text-white'>About</a></li>
            <li><a href="#" className='text-white'>Services</a></li>
            <li><a href="#" className='text-white'>Contact</a></li>
          </ul>
        
      </div>
    </nav>
  )
}

export default Navibar
