import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toy1 from '../assets/toy1.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // For now, just navigate to login page
    navigate('/login');
    // If you have authentication logic, you can add it here
  };

  const handleLogout = () => {
    setUser(null);
    // Add any logout logic here
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-3xl flex justify-center items-center gap-4"><img src={toy1} alt="Curio" className="h-15 w-auto" />Khilona</div>
        <div className="space-x-4">
          <button 
            onClick={() => navigate('/')}
            className="text-gray-200 hover:text-red-400 px-3 py-2"
          >
            Home
          </button>
          <button 
            onClick={() => navigate('/shop')}
            className="text-gray-200 hover:text-red-400 px-3 py-2"
          >
            Shop
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="text-gray-200 hover:text-red-400 px-3 py-2"
          >
            Contact
          </button>
          {!user ? (
            <button 
              onClick={handleLogin}
              className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300"
            >
              Login
            </button>
          ) : (
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 