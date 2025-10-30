import React from 'react'

function OurServices() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">OUR <span className="text-red-600">SERVICES</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive automotive solutions tailored to meet your every need
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {[
            { 
              title: "Hire Driver", 
              icon: "🚘", 
              desc: "We help you find the best driver to assit you." 
            },
            { 
              title: "Hire Cab", 
              icon: "🚗", 
              desc: "Hire a cab at affordable prices for your travel needs." 
            },
            { 
              title: "Consultation Services", 
              icon: "👔", 
              desc: "Any problem you faced about a vechicle our professional team will guide you." 
            },
            { 
              title: "Lady Driver", 
              icon: "💰", 
              desc: "Your safety is our priority. Hire professional lady drivers for comfortable and secure rides." 
            },
            { 
              title: "Buy Car", 
              icon: "💰", 
              desc: "Quality pre-owned and brand new cars with comprehensive warranties" 
            },
            { 
              title: "Sell Car", 
              icon: "💰", 
              desc: "Sell your car quickly and easily with our hassle-free process" 
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default OurServices