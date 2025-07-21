'use client';
// pages/careers.tsx
import { useEffect, useState } from 'react';
//import Head from 'next/head';
//import Image from 'next/image';
//import { useRouter } from 'next/navigation';
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
  const[jobs, setJobs] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`https://hl848w6d2h.execute-api.eu-north-1.amazonaws.com/open-jobs/job`);
        const contentType = response.headers.get('content-type');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          console.log('Fetched drivers:', data);
          setJobs(data);
         // setFilteredDrivers(data); // Set the filtered list initially to all drivers
          setLoading(false);
        } else {
          throw new Error('Expected JSON response');
        }
      } catch (error) {
        console.error('Failed to fetch cars:', error);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  
 
  const toggleJobDetails = (id: number) => {
    setActiveJob(activeJob === id ? null : id);
  };

  //const router = useRouter();

  // const handleApplyClick = (id: string) => {
  //   router.push(`/apply/${id}`);
  // };



  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-black text-white mt-20">
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
                role: "Driver", 
                quote: "The growth opportunities here are incredible. I started as a sales associate and was promoted to manager within two years.",
                img: "/employee1.jpg"
              },
              { 
                name: "Sarah Johnson", 
                role: "Driver", 
                quote: "I love the innovative culture. We're encouraged to experiment with new technologies to solve real customer problems.",
                img: "/employee2.jpg"
              },
              { 
                name: "David Rodriguez", 
                role: "Driver", 
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
          {jobs.map((job) => (
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
    href={`/apply/${job?.id}`}
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
        
        {/* <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Don&rsquo;t see a role that fits? Send us your resume anyway!
          </p>
          <a 
            href="mailto:careers@driveelite.com" 
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Submit General Application
          </a>
        </div> */}
      </div>

      {/* Hiring Process */}
      {/* <div className="py-20 bg-gray-100">
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
      </div> */}

    </div>
  );
}