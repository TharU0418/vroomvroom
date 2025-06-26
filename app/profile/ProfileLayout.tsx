'use client';

import { useState } from 'react';
//import ProfileDetails from './ProfileDetails';
// import MyRequests from './MyRequests';
// import MyHistory from './MyHistory';
// import MyRequests3 from './MyRequests3';
// import MySellRequest from './MySellRequest';


interface User {
  given_name: string;
  email?: string;
  sub?: string;
  // etc...
}

export default function ProfileLayout({ user }: { user: User }) {

  const [activeTab, setActiveTab] = useState('profile');
  const tabs = [
    { id: 'profile', label: 'My Profile', icon: '👤' },
    { id: 'requests', label: 'My Rent Requests', icon: '📋' },
    { id: 'hirerequests', label: 'My Hire Requests', icon: '💼' },
    { id: 'mysellrequest', label: 'My Sell Request', icon: '🚗' },
    { id: 'history', label: 'My History', icon: '🕒' },

  ];


  console.log('given_name', user.given_name)

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 via-red-700 to-red-900  p-4 md:p-8">
      <div className="max-w-6xl mx-auto glass-container bg-red-50 bg-opacity-10 backdrop-blur-lg borde rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row mt-20">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 bg-gray-50 p-4 border-r border-gray-200">
          <div className="mb-6 p-2">
            <h2 className="text-xl font-bold text-gray-800">User Dashboard</h2>
            <p className="text-sm text-gray-500">Welcome, {user.given_name}</p>
          </div>
          
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg mr-3">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 glass-container bg-red-50 bg-opacity-10 backdrop-blur-lg rounded-xl shadow-lg borde">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
              <span className="mr-3">{tabs.find(t => t.id === activeTab)?.icon}</span>
              {tabs.find(t => t.id === activeTab)?.label}
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2"></div>
          </div>

         {/*   <div className="bg-gray-50 rounded-xl p-4 md:p-6 min-h-[500px]">
            {activeTab === 'profile' && <ProfileDetails user={user} />}
           {activeTab === 'requests' && <MyRequests userId={user._id} />}
            {activeTab === 'hirerequests' && <MyRequests3 userId={user._id} />}
            {activeTab === 'history' && <MyHistory userId={user._id} />}
            {activeTab === 'mysellrequest' && <MySellRequest userId={user._id} />}

            
          </div> */}
        </div>
      </div>
    </div>
  );
}