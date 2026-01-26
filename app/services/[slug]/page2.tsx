// /services/[slug]/page.jsx
import { notFound } from "next/navigation";
import { services } from "../../../DB/services";
import Image from "next/image";
import { FaCheckCircle, FaArrowRight, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function ServicePage({ params }) {
  const service = services[params.slug];

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Gradient */}
      <div className={`relative h-96 overflow-hidden bg-gradient-to-br ${service.gradient}`}>
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{service.icon}</span>
              <div>
                <p className="text-yellow-400 text-sm uppercase tracking-wider mb-1">
                  Premium Service
                </p>
                <h1 className="text-5xl md:text-7xl font-bold">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className="text-xl text-gray-200 max-w-3xl">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#000000" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image & Description */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-3xl blur-lg group-hover:blur-xl transition duration-500" />
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-6xl">{service.icon}</span>
                </div>
                {/* For actual images:
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                */}
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Service Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>

          {/* Right Column - Features & Booking */}
          <div className="space-y-8">
            {/* Features Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                What's Included
              </h2>
              
              <ul className="space-y-6">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center">
                      <span className="font-bold">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-200 text-lg">{point}</p>
                      <div className="h-px bg-gradient-to-r from-yellow-500/20 to-transparent mt-3" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Card */}
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 border-2 border-yellow-500/30 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">
                Ready to Book?
              </h3>
              
              <div className="space-y-4">
                <a
                  href="/contact"
                  className="group flex items-center justify-between bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
                >
                  <span className="text-lg">Book Now Online</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>

                <div className="flex gap-4">
                  <a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition"
                  >
                    <FaWhatsapp className="text-xl" />
                    WhatsApp
                  </a>
                  
                  <a
                    href="tel:+1234567890"
                    className="flex-1 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
                  >
                    <FaPhone />
                    Call Now
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-400">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                  <div className="text-center p-4 bg-gray-900/50 rounded-xl">
                    <div className="text-2xl font-bold text-yellow-400">✓</div>
                    <div className="text-sm text-gray-400">Instant Confirmation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Might Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(services).map(([slug, srv]) => (
              slug !== params.slug && (
                <a
                  key={slug}
                  href={`/services/${slug}`}
                  className="group bg-gray-900/50 hover:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{srv.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{srv.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {srv.subtitle}
                  </p>
                  <div className="flex items-center text-yellow-400 text-sm">
                    Learn More
                    <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="/contact"
          className="animate-pulse hover:animate-none bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform"
        >
          <span>Book Now</span>
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
}