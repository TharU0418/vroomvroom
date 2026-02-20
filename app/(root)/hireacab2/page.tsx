import Image from "next/image";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-white">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1533484482814-3fe2d922be89?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl text-center px-6">
          {/* <span className="inline-block mb-4 px-4 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-semibold">
            ⭐ Sri Lanka’s Trusted Taxi Service
          </span> */}

           <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Vroom Vroom 
                </span>
                <span className=" text-red-400 drop-shadow-lg">Local</span>
              </h1>

          <p className="mt-3 text-lg md:text-xl font-semibold">
            Your experience, our priority.
          </p>

          <p className="mt-4 max-w-2xl mx-auto text-gray-200 text-sm md:text-base">
            Book your ride with StarCabs for a seamless and reliable transportation experience across Sri Lanka. Whether you are heading to the airport, exploring the city, or need a quick ride, we have got you covered with our professional drivers and well-maintained vehicles.
          </p>

          {/* Phone */}
          <div className="mt-8 flex items-center justify-center gap-3 text-red-400 text-2xl md:text-3xl font-bold">
            📞 071 7505090
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              🚕 Book Your Ride
            </button>

            <button className="px-8 py-3 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition">
              📞 Whatsapp Now
            </button>

            {/* <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              🔍 View Services
            </button> */}
          </div>
        </div>
      </section>

      {/* WHY STAR CABS */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-600 text-sm font-semibold">
              WHY US
            </span>



            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Discover why StarCabs is the preferred choice for taxi services in Sri Lanka. With our commitment to safety, reliability, and customer satisfaction, we ensure that every ride is a pleasant experience. Whether you're traveling for business or leisure, our professional drivers and well-maintained vehicles are here to serve you across the island.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg text-white mb-4 ${feature.color}`}
                >
                  {feature.icon}
                </div>

                <h2 className="font-semibold text-lg text-gray-900">
                  {feature.title}
                </h2>

                <p className="mt-2 text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

 {/* SERVICES */}
      
<section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
              WHY US
            </span>

            {/* <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Experience Excellence
            </h2> */}

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Discover why StarCabs is the preferred choice for taxi services in Sri Lanka. With our commitment to safety, reliability, and customer satisfaction, we ensure that every ride is a pleasant experience. Whether you are traveling for business or leisure, our professional drivers and well-maintained vehicles are here to serve you across the island.
            </p>
          </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center">
              👮‍♂️
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Professional well spoken licensed Chauffeurs
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Our professional, well-spoken licensed chauffeurs ensure a safe
              and comfortable journey, providing top-notch service with local
              expertise.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center">
              🚘
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Comfortable Vehicles
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Our fleet of well-maintained, comfortable vehicles ensures a
              smooth and enjoyable ride throughout your journey.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center">
              🏪
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              24/7 Service
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Our 24/7 customer support ensures assistance whenever you need
              it, providing peace of mind throughout your travels.{" "}
              
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center">
              🗺️
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-gray-900">
              Easy Booking
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">

              Our easy booking process allows you to reserve your cab quickly
              and conveniently, ensuring a hassle-free experience from start to
              finish.
            </p>
          </div>

          
        </div>
      </div>
    </section>

       {/* Enhanced Scrolling Cards Section */}
            <div className="py-16 bg-gradient-to-b from-gray-100 to-white">
              <div className="container mx-auto px-4">
                <div className="relative overflow-hidden">
                  {/* Gradient Fades */}
                  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
                  
                  <div className="flex space-x-6 animate-scroll hover:pause">
                    {[
                      { img: "/hire1.png", title: "Wedding Car", desc: "Professional hourly driver", badge: "Popular" },
                      { img: "/hire2.jpeg", title: "Cab for Personal Use", desc: "Multi-day hire available", badge: "Flexible" },
                      { img: "/hirecab7.png", title: "Cab for Corporate Meeting", desc: "Safe and responsible travel", badge: "Popular" },
                      { img: "/hirecab6.png", title: "Family Trip", desc: "Safe and responsible travel", badge: "Popular" },
                      { img: "/hirecab5.png", title: "Corporate  Trip", desc: "Long-term driver contracts", badge: "Premium" },
                      { img: "/hire1.png", title: "Air Port pickup/drop", desc: "Premium comfort experience", badge: "Luxury" },
                      { img: "/hire2.jpeg", title: "Cab for events", desc: "Explore the city in style", badge: "Explore" }
                    ].map((service, index) => (
                      <div 
                        key={index}
                        className="flex-shrink-0 w-80 group cursor-pointer transform hover:scale-105 transition-all duration-500"
                      >
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl hover:border-red-500/20 transition-all duration-300">
                          {/* Image Container */}
                          <div className="relative h-64 overflow-hidden">
                            <Image
                              src={service.img}
                              fill
                              alt={service.title}
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            
                            {/* Badge */}
                            {/* <div className="absolute top-4 right-4">
                              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                {service.badge}
                              </span>
                            </div>
                             */}
                            {/* Title */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-white text-2xl font-bold mb-1">{service.title}</h3>
                              <p className="text-gray-200 text-sm">{service.desc}</p>
                            </div>
                          </div>
                          
                          {/* Hover Action */}
                          <div className="p-4 bg-gradient-to-r from-white to-gray-50">
                            <div className="flex items-center justify-between">
                              {/* <span className="text-gray-600 text-sm">Book now</span>
                              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span className="text-white font-bold">→</span>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
    </main>
  );
}
