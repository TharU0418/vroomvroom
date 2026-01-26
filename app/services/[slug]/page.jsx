// /services/[slug]/page.jsx
import { services } from "../../../DB/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function ServicePage({ params }) {
  // ✅ NEXT.JS 15 FIX
  const { slug } = await params;

  const service = services[slug];
  if (!service) return notFound();

  return (
     <div className="min-h-screen bg-black text-white">
          {/* Hero Section with Gradient */}
          <div className={`relative h-86 overflow-hidden bg-gradient-to-br ${service.gradient}`}>
            <div className="absolute inset-0 bg-black/40 z-10" />
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
            </div>
    
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="flex items-center gap-4 mb-6 mt-10">
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    {/* <p className="text-yellow-400 text-sm uppercase tracking-wider mb-1">
                      Premium Service
                    </p> */}
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

                    {/* For actual images:*/}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                    
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
                    {/* <FaCheckCircle className="text-green-400" /> */}
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
                        {/* <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" /> */}
                      </div>
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
    
        
        </div>
  );
}