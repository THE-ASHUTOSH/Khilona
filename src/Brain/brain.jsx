import React, { useState } from 'react';
import { Search, AlertCircle, Share2, Brain } from 'lucide-react';
import { motion } from "framer-motion";

const AIConversations = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages([
      ...messages,
      { text: inputText, sender: 'user' }
    ]);
    setInputText('');
  };

  const conversations = [
    { 
      id: 1, 
      topic: "Science", 
      content: "Today we learned about the solar system and discussed the different planets. Emma showed particular interest in Mars and its potential for exploration.", 
      timestamp: "2 hours ago",
      mood: "Excited",
      engagement: "High"
    },
    { 
      id: 2, 
      topic: "Ethics", 
      content: "We discussed the importance of honesty and why it's essential to always tell the truth. Used real-world examples to illustrate the concept.", 
      timestamp: "Yesterday",
      mood: "Thoughtful",
      engagement: "Medium"
    },
    { 
      id: 3, 
      topic: "Math", 
      content: "We practiced addition and subtraction through interactive games. Emma successfully completed all basic arithmetic exercises.", 
      timestamp: "2 days ago",
      mood: "Focused",
      engagement: "High"
    },
  ];

  const behaviorGuidelines = [
    {
      id: 1,
      title: "Addressing Taking Money Without Permission",
      description: "AI will introduce lessons about honesty and respect for others' property.",
      icon: <AlertCircle className="text-blue-500" size={20} />
    },
    {
      id: 2,
      title: "Encouraging Sharing",
      description: "AI will promote the benefits of sharing and cooperation in daily conversations.",
      icon: <Share2 className="text-green-500" size={20} />
    },
    {
      id: 3,
      title: "Building Critical Thinking",
      description: "AI will engage in discussions that promote analytical and logical thinking skills.",
      icon: <Brain className="text-purple-500" size={20} />
    }
  ];

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.topic.toLowerCase().includes(inputText.toLowerCase()) ||
      conv.content.toLowerCase().includes(inputText.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Conversations */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">AI Conversations</h2>
              <div className="relative">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Search conversations..."
                    className="w-64 px-4 py-2 pl-10 rounded-lg border border-gray-200 dark:border-gray-700 
                             bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent
                             transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg 
                               hover:bg-blue-600 transition-colors"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-4">
              {filteredConversations.map((conv) => (
                <ConversationCard key={conv.id} {...conv} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Behavior Guidelines */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Behavior Guidance</h2>
            <div className="space-y-6">
              {behaviorGuidelines.map((guideline) => (
                <BehaviorGuidelineCard key={guideline.id} {...guideline} />
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="text-blue-800 dark:text-blue-300 font-semibold">Learning Progress</h3>
              <p className="text-blue-700 dark:text-blue-400">
                Emma is showing consistent improvement in behavioral understanding and application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConversationCard = ({ topic, content, timestamp, mood, engagement }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 hover:bg-gray-100 
                    dark:hover:bg-gray-700 transition-colors duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 
                         dark:text-blue-300 rounded-full text-sm font-medium">{topic}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{timestamp}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Mood: {mood}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">Engagement: {engagement}</span>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{content}</p>
    </div>
  );
};

const BehaviorGuidelineCard = ({ title, description, icon }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 
                    rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
      <div className="p-2 bg-gray-100 dark:bg-gray-600 rounded-lg">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                   ${isEnabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                     ${isEnabled ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
    </div>
  );
};

export default AIConversations;