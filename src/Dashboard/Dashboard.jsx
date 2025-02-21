import React from 'react';
import { useAuth } from '../Auth/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">Welcome to Dashboard</h1>
        </div>
      </div>
    );
  }
};

export default Dashboard; 