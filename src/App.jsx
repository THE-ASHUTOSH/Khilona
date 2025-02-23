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
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
import Login from './Auth/Login.jsx';
import Sign from './Auth/Sign'
import Dashboard from './Dashboard/Dashboard.jsx'
import { AuthProvider } from './Auth/AuthContext.tsx'
import Contact from './contact/contact'; // Import the Contact component


const AppContent = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-gray-900">
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} /> {/* Add this route */}
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
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;