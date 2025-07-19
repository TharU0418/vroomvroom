'use client';
// pages/careers.tsx
import { useState } from 'react';
import Head from 'next/head';
//import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type JobOpening = {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  
  const jobOpenings: JobOpening[] = [
    {
      id: 1,
      title: "Full Time Driver",
      department: "driving",
      type: "Full-time",
      location: "Colombo",
      description: "Work as a full time driver",
      responsibilities: [
        "Manage and mentor a team of customer service representatives",
        "Develop and implement customer service policies and procedures",
        "Analyze customer feedback and implement improvements",
        "Handle escalated customer issues",
        "Collaborate with other departments to enhance customer experience"
      ],
      requirements: [
        "2+ years in customer service management",
        "Experience in automotive or luxury service industry",
        "Excellent communication and leadership skills",
        "Proficiency with CRM software",
        "Ability to analyze data and create reports"
      ]
    },
    {
      id: 2,
      title: "Senior Frontend Developer",
      department: "Technology",
      type: "Full-time",
      location: "Remote",
      description: "Build and maintain our customer-facing web applications and internal tools.",
      responsibilities: [
        "Develop responsive and accessible user interfaces",
        "Collaborate with designers and backend developers",
        "Optimize applications for maximum speed and scalability",
        "Implement automated testing and CI/CD pipelines",
        "Mentor junior developers and conduct code reviews"
      ],
      requirements: [
        "5+ years of frontend development experience",
        "Expertise in React, Next.js, and TypeScript",
        "Strong knowledge of modern CSS frameworks (Tailwind)",
        "Experience with RESTful APIs and GraphQL",
        "Familiarity with automated testing frameworks"
      ]
    },
    {
      id: 3,
      title: "Vehicle Acquisition Specialist",
      department: "Sales",
      type: "Full-time",
      location: "Los Angeles, CA",
      description: "Source and acquire premium vehicles for our rental and sales inventory.",
      responsibilities: [
        "Identify and evaluate potential vehicle acquisitions",
        "Negotiate purchase terms with sellers and dealerships",
        "Conduct vehicle inspections and condition assessments",
        "Develop relationships with dealerships and private sellers",
        "Maintain accurate records of acquisitions"
      ],
      requirements: [
        "3+ years in automotive sales or acquisition",
        "Extensive knowledge of vehicle valuation",
        "Excellent negotiation and communication skills",
        "Ability to travel within the region",
        "Valid driver's license with clean record"
      ]
    }
  ];

  const toggleJobDetails = (id: number) => {
    setActiveJob(activeJob === id ? null : id);
  };

  const router = useRouter();

  // const handleApplyClick = (id: string) => {
  //   router.push(`/apply/${id}`);
  // };



  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Careers | DriveElite</title>
        <meta name="description" content="Join our team at DriveElite and accelerate your career" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Hero Section */}
      <div className="relative h-[70vh] bg-black text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center z-0"></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">ACCELERATE YOUR <span className="text-red-600">CAREER</span></h1>
          <p className="text-xl max-w-3xl text-gray-300 mb-8">
            Join our team of passionate professionals and help redefine the automotive experience
          </p>
          <a 
            href="#openings" 
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition"
          >
            View Open Positions
          </a>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">WHY JOIN <span className="text-red-600">Vroom Vroom</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We&rsquo;re building a culture where passionate professionals can thrive and grow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Growth Opportunities", 
              icon: "📈", 
              desc: "We invest in our employees' development with training programs, mentorship, and clear career paths." 
            },
            { 
              title: "Innovative Culture", 
              icon: "💡", 
              desc: "Be part of a forward-thinking team that embraces new technologies and creative solutions." 
            },
            { 
              title: "Impactful Work", 
              icon: "🚀", 
              desc: "Your contributions directly shape our customer experience and business success." 
            },
            { 
              title: "Competitive Benefits", 
              icon: "🏆", 
              desc: "Enjoy comprehensive health coverage, retirement plans, and employee discounts." 
            },
            { 
              title: "Modern Workspaces", 
              icon: "🏢", 
              desc: "Work in our state-of-the-art offices designed for collaboration and productivity." 
            },
            { 
              title: "Team Environment", 
              icon: "👥", 
              desc: "Collaborate with talented professionals who share your passion for excellence." 
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Employee Testimonials */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">OUR <span className="text-red-600">TEAM</span> SPEAKS</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our employees about what it&rsquo;s like to work at DriveElite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Michael Chen", 
                role: "Sales Manager", 
                quote: "The growth opportunities here are incredible. I started as a sales associate and was promoted to manager within two years.",
                img: "/employee1.jpg"
              },
              { 
                name: "Sarah Johnson", 
                role: "Software Engineer", 
                quote: "I love the innovative culture. We're encouraged to experiment with new technologies to solve real customer problems.",
                img: "/employee2.jpg"
              },
              { 
                name: "David Rodriguez", 
                role: "Operations Lead", 
                quote: "The leadership team truly values employee input. My ideas have been implemented across our operations.",
                img: "/employee3.jpg"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-red-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Openings Component */}
      <div id="openings" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">CURRENT <span className="text-red-600">JOB OPENINGS</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore opportunities to join our growing team
          </p>
        </div>
        
        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div 
              key={job.id} 
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-red-500 hover:shadow-lg"
            >
              <button 
                onClick={() => toggleJobDetails(job.id)}
                className="w-full p-6 text-left flex flex-col md:flex-row md:items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.department}</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.type}</span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.location}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 font-medium mr-4">
                    {activeJob === job.id ? 'Hide Details' : 'View Details'}
                  </span>
                  <svg 
                    className={`w-6 h-6 text-red-600 transition-transform duration-300 ${activeJob === job.id ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {activeJob === job.id && (
                <div className="px-6 pb-8">
                  <div className="border-t border-gray-200 pt-6 mb-6"></div>
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-4 text-gray-900">Responsibilities</h4>
                      <ul className="space-y-3">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold mb-4 text-gray-900">Requirements</h4>
                      <ul className="space-y-3">
                        {job.requirements.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                 <div className="mt-8">
  <Link 
    href={`/apply/${job.id}`}
    className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition"
  >
    Apply Now
  </Link>
</div>
                </div>
                
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Don&rsquo;t see a role that fits? Send us your resume anyway!
          </p>
          <a 
            href="mailto:careers@driveelite.com" 
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Submit General Application
          </a>
        </div>
      </div>

      {/* Hiring Process */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">OUR <span className="text-red-600">HIRING PROCESS</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We&rsquo;ve designed a straightforward process to ensure the best fit for both candidates and DriveElite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Application", desc: "Submit your application through our portal" },
              { step: "2", title: "Initial Screening", desc: "Brief call with our HR team" },
              { step: "3", title: "Interviews", desc: "Meet with the hiring team (1-2 rounds)" },
              { step: "4", title: "Offer", desc: "Receive an offer to join our team" }
            ].map((step, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full transform -translate-y-1/2 w-8 h-1 bg-red-600"></div>
                )}
                <div className="bg-white p-8 rounded-xl shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-red-600 w-8 h-8 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold">DRIVE<span className="text-red-600">ELITE</span></h2>
            </div>
            <p className="text-gray-400 mb-4">
              Premium automotive solutions for rental, sales, and chauffeur services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">OUR SERVICES</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Car Rental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Car Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Car Purchase</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Chauffeur Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">CONTACT US</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Auto Avenue, Motor City, MC 54321
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.07 3.292a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 123-4567
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                careers@driveelite.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} DriveElite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}