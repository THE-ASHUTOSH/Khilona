import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import { motion } from "framer-motion";
import { 
  Sun, Moon, Home, Book, Brain, 
  Heart, Settings, LogOut, 
  Activity, Users, Zap 
} from "lucide-react";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import toy1 from '../assets/toy1.png';
import AIConversations from '../Brain/brain';
import HealthMonitoring from '../Heart/Heart';
import { useNavigate } from 'react-router-dom';
ChartJS.register(
  CategoryScale, LinearScale, PointElement, 
  LineElement, Title, Tooltip, Legend, ArcElement
);

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 p-8 pt-24">
        <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">Welcome Back!</h1>
          <p className="text-white/80 text-center mb-8">Please login to access your dashboard</p>
          <a 
            href="/login" 
            className="block w-full py-3 px-6 text-center bg-white text-blue-600 rounded-xl 
                     font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            Login to Continue
          </a>
        </div>
      </div>
    );
  }

  const activityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Learning Engagement",
        data: [65, 59, 80, 81, 56, 55, 70],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.1)",
        borderColor: "rgba(75, 192, 192, 0.8)",
        tension: 0.4,
      },
      {
        label: "Conversations",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        borderColor: "rgba(255, 99, 132, 0.8)",
        tension: 0.4,
      },
    ],
  };

  const statsCards = [
    { title: "Total Sessions", value: "284", icon: <Activity className="text-blue-500" />, trend: "+12.5%" },
    { title: "Active Users", value: "1,420", icon: <Users className="text-green-500" />, trend: "+8.1%" },
    { title: "Avg. Response Time", value: "1.2s", icon: <Zap className="text-purple-500" />, trend: "-0.3s" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "brain":
        return <AIConversations />;
      case "health":
        return <HealthMonitoring />;
      case "home":
        return (
          <>
            <header className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                  Welcome back, {user.email.split('@')[0]}! 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Here's what's happening with your dashboard today.
                </p>
              </div>
            </header>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {statsCards.map((stat, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                  key={stat.title}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      {stat.icon}
                    </div>
                    <span className={`text-sm font-medium ${
                      stat.trend.includes('+') ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {stat.trend}
                    </span>
                  </div>
                  <h3 className="text-gray-600 dark:text-gray-400 text-sm">{stat.title}</h3>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</p>
                </motion.div>
              ))}
            </div>
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Activity Overview</h2>
                <Line 
                  data={activityData}
                  options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'bottom',
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Performance Metrics</h2>
                <div className="h-64">
                  <Pie
                    data={{
                      labels: ['Completed', 'In Progress', 'Pending'],
                      datasets: [{
                        data: [63, 25, 12],
                        backgroundColor: [
                          'rgba(75, 192, 192, 0.8)',
                          'rgba(255, 206, 86, 0.8)',
                          'rgba(255, 99, 132, 0.8)',
                        ]
                      }]
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'bottom'
                        }
                      }
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </>
        );
      default:
        return <div>Coming Soon!</div>;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900"> 
        {/* Sidebar */}
        <nav className="w-18 bg-white dark:bg-gray-800 shadow-lg flex justify-center h-screen">
          <div className="flex flex-col items-center gap-8">
            <img 
              src={toy1} 
              alt="Khilona" 
              className="w-12 h-12 mb-8" 
              onClick={() => navigate('/')}
            />
            <NavItem icon={<Home size={20} />} active={activeTab === "home"} onClick={() => setActiveTab("home")} />
            <NavItem icon={<Brain size={20} />} active={activeTab === "brain"} onClick={() => setActiveTab("brain")} />
            <NavItem icon={<Heart size={20} />} active={activeTab === "health"} onClick={() => setActiveTab("health")} />
            <NavItem icon={<Settings size={20} />} active={activeTab === "settings"} onClick={() => setActiveTab("settings")} />
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

const NavItem = ({ icon, active, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`p-3 rounded-xl transition-all duration-200 ${
        active
          ? "bg-blue-500 text-white"
          : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
      }`}
    >
      {icon}
    </motion.button>
  );
};

export default Dashboard;