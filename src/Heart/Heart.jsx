"use client"
import { useState } from "react"
import { AlertCircle, Heart, Battery, Brain } from "lucide-react"
import { Chart, Filler } from 'chart.js';

// Register the Filler plugin
Chart.register(Filler);

const HealthMonitoring = () => {
  const [moodToday, setMoodToday] = useState("Happy")
  const [energyLevel, setEnergyLevel] = useState(3)
  const [selectedInterest, setSelectedInterest] = useState("Moderate")

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Emma's Health Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 border-b border-blue-100 dark:border-blue-800">
            <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Daily Check-in
            </h2>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                How does Emma feel today?
              </label>
              <select
                value={moodToday}
                onChange={(e) => setMoodToday(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 
                          text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {["Happy", "Excited", "Calm", "Tired", "Sad", "Angry"].map(mood => (
                  <option key={mood}>{mood}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Energy Level
              </label>
              <div className="flex items-center gap-4">
                <Battery className="w-5 h-5 text-gray-500" />
                <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  value={energyLevel}
                  onChange={(e) => setEnergyLevel(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {energyLevel}/5
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Interest in Today's Activities
              </label>
              <div className="flex flex-wrap gap-2">
                {["Very Low", "Low", "Moderate", "High", "Very High"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedInterest(level)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${selectedInterest === level 
                        ? "bg-blue-500 text-white" 
                        : "bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-100"}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 border-b border-purple-100 dark:border-purple-800">
            <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-100 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Health Insights
            </h2>
          </div>
          
          <div className="p-6">
            <ul className="space-y-6">
              <HealthInsight
                icon={<AlertCircle className="w-5 h-5" />}
                title="Speech Clarity"
                description="Emma's speech clarity has improved by 15% this month."
                status="positive"
              />
              <HealthInsight
                icon={<AlertCircle className="w-5 h-5" />}
                title="Attention Span"
                description="Emma's attention span during learning activities has decreased slightly."
                status="warning"
              />
              <HealthInsight
                icon={<AlertCircle className="w-5 h-5" />}
                title="Social Interaction"
                description="Emma shows typical social interaction patterns for her age group."
                status="neutral"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const HealthInsight = ({ icon, title, description, status }) => {
  const statusStyles = {
    positive: "text-green-500 bg-green-50 dark:bg-green-900/20",
    warning: "text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
    neutral: "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
  }
  
  return (
    <li className="flex items-start space-x-4 p-4 rounded-lg bg-opacity-50 hover:bg-opacity-100 transition-colors">
      <div className={`p-2 rounded-full ${statusStyles[status]}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
      </div>
    </li>
  )
}

export default HealthMonitoring