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
            <p className="text-xl text-cyan-100 mb-8">
              Vroom Vroom Smile - Your journey, your choice
            </p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose Vroom Vroom?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience travel redefined with our premium cab services</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🚗</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Flexible Options</h3>
            <p className="text-gray-600 text-lg">
              Choose between professional chauffeurs or self-drive vehicles. Perfect for tourists who want flexibility.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Island Wide Coverage</h3>
            <p className="text-gray-600 text-lg">
              Available in all places with local experts who know the best routes and hidden gems.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">24/7 Support</h3>
            <p className="text-gray-600 text-lg">
              Round-the-clock customer support in multiple languages. We are here whenever you need us.
            </p>
          </div>
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