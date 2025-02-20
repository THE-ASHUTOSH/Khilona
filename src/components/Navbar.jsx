import React, { useState } from 'react'
import toy1 from '../assets/toy1.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <nav className="bg-gray-900 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-4">
              <img src={toy1} alt="Curio" className="h-15 w-auto" />
              <h1 className='text-white text-2xl font-bold'>KHILONA</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-200 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium">
                Shop
              </button>
              <button className="text-gray-200 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium">
                About
              </button>
              <button className="text-gray-200 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </button>
              <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300 max-w-xs">
              Login
            </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar