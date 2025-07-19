'use client';
// pages/apply/[jobId].tsx
import { useState, ChangeEvent } from 'react';
import Head from 'next/head';
import { FiUploadCloud, FiCheck, FiArrowLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function ApplicationPage() {
  const router = useRouter();
 // const { jobId } = router.query;
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const jobDetails = {
    id:  '1',
    title: "Customer Experience Manager",
    department: "Operations",
    type: "Full-time",
    location: "New York, NY",
    salary: "$85,000 - $110,000 per year",
    description: "Lead our customer service team to deliver exceptional experiences at every touchpoint.",
    responsibilities: [
      "Manage and mentor a team of customer service representatives",
      "Develop and implement customer service policies and procedures",
      "Analyze customer feedback and implement improvements",
      "Handle escalated customer issues",
      "Collaborate with other departments to enhance customer experience"
    ],
    requirements: [
      "5+ years in customer service management",
      "Experience in automotive or luxury service industry",
      "Excellent communication and leadership skills",
      "Proficiency with CRM software",
      "Ability to analyze data and create reports"
    ],
    deadline: "August 30, 2025"
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, resume: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          linkedin: '',
          experience: '',
          coverLetter: '',
          resume: null,
        });
        setFileName('');
      }, 3000);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Head>
          <title>Application Submitted | DriveElite</title>
          <meta name="description" content="Your application has been submitted" />
        </Head>
        
        {/* Header */}
        <nav className="bg-black py-4 px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-red-600 w-10 h-10 rounded-full mr-3"></div>
            <h1 className="text-white text-2xl font-bold">DRIVE<span className="text-red-600">ELITE</span></h1>
          </div>
        </nav>
        
        {/* Success Message */}
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <FiCheck className="text-green-600 text-4xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Application Submitted Successfully!</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Thank you for applying for the {jobDetails.title} position at DriveElite. 
              Our hiring team will review your application and contact you if you&rsquo;re selected for an interview.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => router.push('/careers')}
                className="bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition"
              >
                View Other Positions
              </button>
              <button 
                onClick={() => router.push('/')}
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
            <p>© {new Date().getFullYear()} DriveElite. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>Apply for {jobDetails.title} | DriveElite</title>
        <meta name="description" content={`Apply for ${jobDetails.title} position at DriveElite`} />
      </Head>
      
      {/* Header */}
      <nav className="bg-black py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-red-600 w-10 h-10 rounded-full mr-3"></div>
          <h1 className="text-white text-2xl font-bold">DRIVE<span className="text-red-600">ELITE</span></h1>
        </div>
        <button 
          onClick={() => router.push('/careers')}
          className="text-white hover:text-red-500 flex items-center"
        >
          <FiArrowLeft className="mr-2" /> Back to Careers
        </button>
      </nav>
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-600 text-white px-4 py-1 rounded-full">{jobDetails.type}</span>
                <span className="bg-gray-700 text-white px-4 py-1 rounded-full">{jobDetails.location}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{jobDetails.title}</h1>
              <p className="text-gray-300">{jobDetails.department} Department</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-300">Application Deadline</p>
              <p className="font-bold text-lg">{jobDetails.deadline}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Job Details */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Job Details</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Department</h3>
                  <p>{jobDetails.department}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-500 text-sm">Location</h3>
                  <p>{jobDetails.location}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-500 text-sm">Employment Type</h3>
                  <p>{jobDetails.type}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-500 text-sm">Salary Range</h3>
                  <p>{jobDetails.salary}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-3">
                {jobDetails.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-red-100 text-red-600 rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Application Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Apply for this Position</h2>
                <p className="text-gray-600">Complete the form below to submit your application</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Current Location *</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="City, State"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="linkedin" className="block text-gray-700 font-medium mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Years of Relevant Experience *</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select your experience level</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-2">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us why you're a great fit for this position..."
                  ></textarea>
                </div>
                
                <div className="mb-8">
                  <label className="block text-gray-700 font-medium mb-2">Resume / CV *</label>
                  <div 
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                      fileName ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-red-400'
                    }`}
                  >
                    <input 
                      type="file" 
                      id="resume" 
                      name="resume" 
                      className="hidden" 
                      accept=".pdf,.doc,.docx,.txt" 
                      onChange={handleFileChange}
                      required
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      <FiUploadCloud className="mx-auto text-3xl mb-3 text-gray-400" />
                      {fileName ? (
                        <div>
                          <p className="font-medium text-green-700">{fileName}</p>
                          <p className="text-sm text-gray-500 mt-2">Click to change file</p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-medium">Upload your resume</p>
                          <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX (Max 5MB)</p>
                          <p className="text-red-600 mt-2">Drag & drop or click to browse</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      className="mt-1 mr-3"
                      required
                    />
                    <label htmlFor="consent" className="text-gray-700">
                      I consent to DriveElite collecting and storing my data from this form. 
                      I have read and accept the <a href="#" className="text-red-600 hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="updates"
                      name="updates"
                      className="mt-1 mr-3"
                    />
                    <label htmlFor="updates" className="text-gray-700">
                      I&rsquo;d like to receive occasional updates about new job opportunities at DriveElite.
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-full font-bold text-white transition ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </form>
            </div>
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