'use client';

import { useState } from 'react';
import MyRequests from './MyRequests';
import HireRequests from './HireRequests';
import ProfileDetails from './ProfileDetails';
import MySellRequest from './MySellRequest';
import { useAuth } from '@/hooks/useAuth';
//import MyHistory from './MyHistory';

interface User {
  email: string;
  given_name: string;
  name:string;
}

export default function ProfileLayout({ user }: { user: User }) {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'My Profile', icon: '👤' },
    { id: 'requests', label: 'My Rent Requests', icon: '📋' },
    { id: 'hirerequests', label: 'My Hire Requests', icon: '💼' },
    { id: 'mysellrequest', label: 'My Sell Request', icon: '🚗' },
   // { id: 'history', label: 'My History', icon: '🕒' },
  ];

  const {logout} = useAuth();

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto glass-container bg-slate-500 bg-opacity-10 backdrop-blur-lg border rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row mt-20">
        {/* Sidebar Navigation */}
      <div className="w-full md:w-64 bg-gray-50 p-4 border-r border-gray-200 flex flex-col justify-between min-h-full">
  <div>
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

  {/* Sign Out Button */}
  <button
  onClick={logout}
  className="mt-6 w-full text-left flex items-center p-3 rounded-xl text-white bg-red-600 hover:bg-red-500 transition-all duration-200"
>
  🚪 <span className="ml-3 font-medium">Sign Out</span>
</button>

</div>


        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 glass-container bg-red-50 bg-opacity-10 backdrop-blur-lg shadow-lg border">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
              <span className="mr-3">{tabs.find(t => t.id === activeTab)?.icon}</span>
              {tabs.find(t => t.id === activeTab)?.label}
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2"></div>
          </div>

          {/* Uncomment when ready */}
         <div className="bg-gray-50 rounded-xl p-4 md:p-6 min-h-[500px]">
          {activeTab === 'profile' && <ProfileDetails user={user} />} 
            {activeTab === 'requests' && <MyRequests user={user} />}
             {activeTab === 'hirerequests' && <HireRequests user={user} />}
             {activeTab === 'mysellrequest' && <MySellRequest user={user} />}
          {/* {activeTab === 'history' && <MyHistory user={user} />} */}
          {/*     {activeTab === 'mysellrequest' && <MySellRequest userName={user.given_name} />}
             */}
          </div>

                      {/* {activeTab === 'profile' && <ProfileDetails user={user} />} */}

        </div>
      </div>
    </div>
  );
}
