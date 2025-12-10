import ReadMore from '@/components/ReadMore'
import React from 'react'

function Page() {

  
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Enhanced Hero Section */}
      <div className="relative h-[100vh] bg-gradient-to-br from-red-600 to-red-500 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
     

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          {/* Animated Title */}
          <div className="mb-8 transform transition-all duration-1000 hover:scale-105">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Book a cab for your holiday</span>
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>

          {/* Enhanced Content Card */}
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 max-w-4xl border border-white/30 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <p className="text-2xl md:text-3xl text-white mb-6 leading-relaxed font-light">
              Trusted Cab Services for Tourists 
            </p>
            <ReadMore text={`
              Choosing Sri Lanka for your holiday, corporate event, or annual conference is always a 
good decision. Sri Lanka is a beautiful island close to India, known worldwide for its 
nature, culture, wildlife, beaches, history, and festivals. 
From Ramayana trails to ancient heritage sites, Sri Lanka offers unforgettable 
experiences. 
As you plan your trip, VroomVroom Tourist ensures the best transport options during your 
stay. Whether you need an airport pickup, city-to-city transport, a round tour, or a 
vehicle on disposal, we provide exactly what fits your requirements.
            `}/>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1">
                Book With Driver
              </button> */}
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all transform hover:-translate-y-1">
               Call now -  0701505090
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full opacity-30 animate-pulse"></div>
      </div>

      {/* Features Section */}
<div id="features" className="py-20 px-4 max-w-7xl mx-auto">
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
      Why Choose Vroom Vroom?
    </h2>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Experience travel redefined with our premium cab services in Sri Lanka
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Feature 1 */}
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Expert Tourist Chauffeurs
      </h3>
      <p className="text-gray-600">
        Professional drivers specially trained to serve tourists, ensuring a comfortable and informative journey.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Local Expertise
      </h3>
      <p className="text-gray-600">
        Drivers who know both popular attractions and hidden gems across Sri Lanka.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Island-Wide Coverage
      </h3>
      <p className="text-gray-600">
        Smooth travel to Galle, Trinco, Dambulla, Sigiriya, Kandy, Nuwara Eliya, Ella, and beyond.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Wildlife Sanctuary Transfers
      </h3>
      <p className="text-gray-600">
        Expert transfers to Yala, Minneriya, Wilpattu, and other wildlife parks with experienced drivers.
      </p>
    </div>

    {/* Feature 5 */}
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Flexible Vehicle Options
      </h3>
      <p className="text-gray-600">
        Perfect vehicles for couples, families, groups, and corporate travel needs.
      </p>
    </div>

    {/* Feature 6 */}
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
        <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Custom Itinerary Design
      </h3>
      <p className="text-gray-600">
        Let us design or refine your travel plans using our years of tourism expertise in Sri Lanka.
      </p>
    </div>

  </div>

  {/* Optional: Add a CTA button */}
  <div className="text-center mt-16">
    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
      Book Your Journey Now
    </button>
  </div>
</div>

      {/* Services Section */}
      {/* <div id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
         
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="h-64 bg-gradient-to-r from-red-500 to-red-400 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">With Professional Driver</h3>
                  <p className="text-blue-100">Sit back and enjoy the ride</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-rede rounded-full mr-3"></span>
                    Local expert drivers who speak multiple languages
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Airport transfers and city tours
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Luxury and standard vehicle options
                  </li>
                </ul>
                <button className="mt-8 w-full bg-red-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors">
                  Book With Driver
                </button>
              </div>
            </div>

         
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="h-64 bg-gradient-to-r from-red-500 to-red-400 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Self-Drive Rental</h3>
                  <p className="text-green-100">Freedom to explore at your pace</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Latest model vehicles with GPS navigation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Flexible rental periods (hourly, daily, weekly)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Comprehensive insurance included
                  </li>
                </ul>
                <button className="mt-8 w-full bg-red-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors">
                  Rent Self-Drive
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
 */}

    </div>
  )
}

export default Page