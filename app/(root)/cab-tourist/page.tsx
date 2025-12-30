//import ReadMore from '@/components/ReadMore'
import React from 'react'

function Page() {

  
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Enhanced Hero Section */}
<div className="relative min-h-screen md:h-[140vh] bg-gradient-to-br from-red-600 to-red-500 overflow-visible md:overflow-hidden">
        {/* Background Pattern */}
<div className="absolute inset-0 bg-black/10 hidden md:block"></div>
     

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 mt-10">
  {/* Background Pattern/Image Layer */}
  <div className="absolute inset-0 overflow-visible md:overflow-hidden rounded-3xl opacity-10">
    <div className="absolute top-0 left-0 w-1/3 h-full">
      <div className="w-full h-full bg-gradient-to-r from-blue-400 to-cyan-300"></div>
    </div>
    <div className="absolute top-0 right-0 w-2/3 h-full">
      <div className="w-full h-full bg-gradient-to-l from-green-400 to-emerald-300"></div>
    </div>
  </div>

  {/* Animated Title with Icon */}
  <div className="mb-8 transform transition-all duration-1000 hover:scale-105 relative">
    <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
    <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
     <span className="block mt-12 sm:mt-0 text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white">
  Book a cab for your holiday
</span>

    </h1>
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      <div className="text-white/80">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15C15 3.9 14.1 3 13 3H11C9.9 3 9 3.9 9 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13S8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"/>
        </svg>
      </div>
      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
    </div>
  </div>

  {/* Enhanced Content Card with Side Images */}
  <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 max-w-5xl border border-white/30 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden">
    
    {/* Decorative Images on Sides */}
    <div className="absolute -left-16 top-1/4 w-32 h-48 rounded-2xl overflow-visible md:overflow-hidden border-4 border-white/30 shadow-xl rotate-6 hidden lg:block">
      <div className="w-full h-full bg-gradient-to-br from-blue-500/40 to-cyan-400/30 flex items-center justify-center">
        <svg className="w-16 h-16 text-white/60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      </div>
    </div>

    <div className="absolute -right-16 top-1/3 w-32 h-48 rounded-2xl overflow-visible md:overflow-hidden border-4 border-white/30 shadow-xl -rotate-6 hidden lg:block">
      <div className="w-full h-full bg-gradient-to-br from-emerald-500/40 to-green-400/30 flex items-center justify-center">
        <svg className="w-16 h-16 text-white/60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
    </div>

    {/* Main Content */}
    <div className="relative z-10 mb-10">
      {/* Header with Icon */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <p className="text-2xl md:text-3xl text-white leading-relaxed font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
          Trusted Cab Services for Tourists
        </p>
      </div>

      {/* Content with Image Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Choosing Sri Lanka for your holiday, corporate event, or annual conference is always a great decision. Sri Lanka is a stunning island nation close to India, globally renowned for its rich culture, diverse landscapes, and warm hospitality.
          </p>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 p-4 rounded-2xl border border-white/20">
            <p className="text-lg text-white/90 leading-relaxed">
              From ancient heritage sites and sacred landmarks to the legendary Ramayana trails, Sri Lanka promises unforgettable memories for every traveler. As you plan your journey, VroomVroom Tourist ensures seamless and reliable transportation throughout your stay.
            </p>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="relative h-64 lg:h-auto rounded-2xl overflow-visible md:overflow-hidden border-2 border-white/40 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 flex flex-col items-center justify-center p-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            <p className="text-white text-center font-semibold text-lg">
              Explore Sri Lanka <br />in Comfort
            </p>
          </div>
        </div>
      </div>

      {/* Services Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {['Airport Pickup', 'City Transfers', 'Round Tours', 'Flexible Rental'].map((service, index) => (
          <div key={index} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">{service}</span>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center gap-6">
  {/* Buttons row */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    
    {/* Call Button */}
    {/* Call Button */}
<a href="tel:0701505090">
  <button className="group relative bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 min-w-[200px]">
    <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="flex items-center justify-center gap-3">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
      <span>Call Now - 0701505090</span>
    </div>
  </button>
</a>


    {/* Email Button */}
    <a
      href="mailto:hellovroomvroom@outlook.com"
      className="group relative bg-gradient-to-r from-purple-500 to-pink-400 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 min-w-[200px]"
    >
      <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex items-center justify-center gap-3">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
        <span>Email Us</span>
      </div>
    </a>

  </div>

  {/* Availability */}
  <div className="flex items-center gap-2 text-white/80">
    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
    <span className="text-sm">Available 24/7</span>
  </div>
</div>

      
    </div>
  </div>
</div>

{/* Floating Elements */}
<div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-bounce"></div>
<div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-white to-blue-100 rounded-full opacity-30 animate-pulse"></div>
<div className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-300 rounded-full opacity-25 animate-bounce delay-300"></div>

</div>

      {/* Features Section */}
<div id="features" className="py-20 px-4 max-w-7xl mx-auto ">
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
  {/* <div className="text-center mt-16">
    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
      Book Your Journey Now
    </button>
  </div> */}
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