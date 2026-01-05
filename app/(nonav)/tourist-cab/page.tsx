export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-900">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background with overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/1433.jpg')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 p-10 rounded-3xl shadow-2xl border border-white/20 shadow-yellow-500/10 transform transition-all duration-300 hover:scale-[1.02]">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-yellow-400/20 rounded-full border border-yellow-400/30">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span className="text-blue-300 text-sm font-medium">Experience Sri Lanka Like Never Before</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              <span className="text-blue-300 drop-shadow-lg font-poppins">VroomVroom</span>
              <span className="text-white font-poppins"> Tourist</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="space-y-4 text-lg">
            <p className="text-gray-200 leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-xl">
              Choosing Sri Lanka for your holiday, corporate event, or annual
              conference is always a great decision. Sri Lanka is a stunning
              island nation close to India, globally renowned for its rich
              culture, diverse landscapes, and warm hospitality.
            </p>

            <p className="text-gray-300 italic border-l-4 border-blue-400 pl-4 py-2">
              From pristine beaches to abundant wildlife and breathtaking natural
              beauty, the country offers an extraordinary range of experiences.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
  href="https://wa.me/94717505090"
  onClick={() =>
    gtag_report_conversion("https://wa.me/94717505090")
  }
  className="whatsapp-btn group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/30 min-w-[200px] text-center"
>
  <span className="flex items-center justify-center gap-2">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.507 14.307l-.009.075c-.266 1.678-1.156 3.282-3.045 3.639-.854.163-1.894.125-3.485-.28-2.117-.543-4.288-2.262-6.002-4.919-1.05-1.64-1.864-3.763-1.864-5.589.002-2.922 2.195-5.32 4.971-5.32h.038c.898.004 1.739.345 2.38.976.674.663 1.047 1.56 1.047 2.514 0 .529-.127 1.04-.371 1.511-.067.129-.143.25-.226.367l-.004.006-.353.531c-.113.173-.024.409.185.477.643.208 1.365.257 2.136.143.476-.07 1.086-.225 1.62-.472.119-.055.254-.024.34.075l.844.94c.113.125.322.137.451.026l.002-.002.911-.84c.116-.107.294-.104.406.006l1.02 1.023c.114.115.116.303.004.42l-.842.975c-.054.063-.073.145-.052.223.02.078.08.142.159.166.914.281 1.682.695 2.299 1.232.125.11.135.302.022.426l-.948 1.084c-.105.12-.287.139-.418.043l-.965-.711c-.112-.082-.265-.082-.377.002l-1.061.797c-.112.084-.274.072-.372-.029l-.724-.813c-.045-.05-.106-.08-.171-.08-.119.001-.231.053-.306.145-.685.848-1.515 1.398-2.51 1.66-.179.047-.354.069-.525.069z"/>
    </svg>
    WhatsApp Now
  </span>
</a>

            <a
              href="mailto:hellovroomvroom@outlook.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-full text-lg font-semibold text-black shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-500/30 min-w-[200px] text-center"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Us
              </span>
            </a>
          </div>
          
          {/* <div className="mt-8 text-gray-400 text-sm">
            <p>📞 Call us: +94 71 750 5090</p>
          </div> */}
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700"></div>
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Discover Sri Lanka <span className="text-yellow-300">With Comfort</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Premium transportation services for an unforgettable journey</p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Ancient Heritage",
                img: "https://t4.ftcdn.net/jpg/16/57/98/23/360_F_1657982384_QwZlxe3f9fCbzlJbUVff0LndMIXqcBaS.jpg",
                text: "Explore ancient heritage sites and sacred landmarks filled with centuries-old traditions.",
                icon: "🏛️"
              },
              {
                title: "Hill Country",
                img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ed/85/6b/um-palacio-no-topo-da.jpg?w=900&h=500&s=1",
                text: "Journey through misty hills, tea plantations, and cool mountain air.",
                icon: "⛰️"
              },
              {
                title: "Wildlife & Beaches",
                img: "https://images.unsplash.com/photo-1540202404-a2f29016b523",
                text: "From golden beaches to rich wildlife, Sri Lanka offers unforgettable natural beauty.",
                icon: "🦁"
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02]"
              >
                <div className="absolute inset-0">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
                </div>
                
                <div className="relative h-80 p-6 flex flex-col justify-end">
                  <div className="absolute top-6 right-6 text-4xl opacity-80 transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-0.5 bg-yellow-400"></div>
                      <span className="text-yellow-300 text-sm font-semibold">EXPERIENCE</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-gray-200 mb-4">{card.text}</p>
                    
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {/* <button className="text-yellow-300 text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our <span className="text-yellow-300">Transport Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive transportation services tailored to your needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { text: "Airport Pickup & Drop", icon: "✈️" },
                { text: "City-to-City Transfers", icon: "🚗" },
                { text: "Full Round Tours", icon: "🔄" },
                { text: "Vehicle at Disposal", icon: "⏱️" },
                { text: "Corporate & Conference Transport", icon: "🏢" },
              ].map((service, i) => (
                <div 
                  key={i}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border border-gray-700 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/10"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.text}</h3>
                    <p className="text-gray-400 text-sm mt-1">Professional service with luxury vehicles</p>
                  </div>
                  <div className="ml-auto text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-blue-300">Why Choose Us?</span>
                  <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
                </h3>
                
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    From ancient heritage sites and sacred landmarks to the legendary
                    Ramayana trails, Sri Lanka promises unforgettable memories for
                    every traveler.
                  </p>
                  
                  <div className="p-4 bg-gray-800/50 rounded-xl border-l-4 border-blue-400">
                    <p className="font-semibold text-white">Your Journey, Our Priority</p>
                    <p className="text-sm mt-2">
                      As you plan your journey, <strong className="text-blue-300">VroomVroom Tourist</strong>
                      ensures seamless and reliable transportation throughout your stay,
                      perfectly tailored to your needs.
                    </p>
                  </div>
                  
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Professional drivers with local expertise
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Modern, comfortable vehicles
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      24/7 customer support
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <a
                    href="https://wa.me/94717505090"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Book Your Ride Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}