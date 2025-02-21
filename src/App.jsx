import React from 'react';
import toy1 from './assets/toy1.png';
import toy2 from './assets/toy2.png'; 
import toy3 from './assets/toy3.png';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsGrid from './components/ProductsGrid';
import ProductDetail from './components/ProductDetail';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './Auth/Login.jsx';
import Sign from './Auth/Sign'
import Dashboard from './Dashboard/Dashboard.jsx'
import { AuthProvider } from './Auth/AuthContext.tsx'

// Product Detail Page Component

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-gray-900">
          <Navbar/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sign />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={
              <>
                <Hero />
                <ProductsGrid />
                <ProductDetail
                  product={{
                    name: "Grok",
                    description: "Greetings! I'm Grok, Gabbo's spirited rocket. With boundless energy, I'm always zooming off to explore the vastness of the cosmos. Ready to soar among the stars with me?",
                    image: toy1,
                    flip: false
                  }}
                />
                <ProductDetail 
                  product={{
                    name: "Grok",
                    description: "Greetings! I'm Grok, Gabbo's spirited rocket. With boundless energy, I'm always zooming off to explore the vastness of the cosmos. Ready to soar among the stars with me?",
                    image: toy2,
                    flip: true
                  }}
                />
                <ProductDetail 
                  product={{
                    name: "Grok",
                    description: "Greetings! I'm Grok, Gabbo's spirited rocket. With boundless energy, I'm always zooming off to explore the vastness of the cosmos. Ready to soar among the stars with me?",
                    image: toy3,
                    flip: false
                  }}
                />
              </>
            } />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;